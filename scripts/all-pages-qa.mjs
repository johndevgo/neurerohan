import assert from "node:assert/strict";
import { access, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const base = new URL(process.argv[2] ?? "http://127.0.0.1:3182");
const canonical = "https://neurerohan.com.np";
const decode = (value) => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'").replaceAll("&#39;", "'").replaceAll("&apos;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
const attr = (tag, name) => decode(tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`, "i"))?.[1] ?? "");
const plain = (html) => decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
const get = async (path, status = 200) => {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, status, `${path}: HTTP ${response.status}`);
  return response;
};
const sitemap = await (await get("/sitemap.xml")).text();
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => new URL(decode(url)).pathname);
assert.equal(new Set(paths).size, paths.length, "Sitemap URLs are unique");
const pages = new Map(), links = [], images = new Set(), titles = new Set(), descriptions = new Set();
for (const path of paths) {
  const html = await (await get(path)).text();
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  assert.ok(main, `${path}: main landmark`);
  assert.equal([...main.matchAll(/<h1\b/g)].length, 1, `${path}: one H1`);
  const title = plain(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
  assert.ok(title.length && !titles.has(title), `${path}: unique title`); titles.add(title);
  const meta = [...html.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => tag);
  const description = attr(meta.find((tag) => attr(tag, "name") === "description") ?? "", "content");
  assert.ok(description.length > 50 && !descriptions.has(description), `${path}: unique, useful description`); descriptions.add(description);
  assert.ok(!meta.some((tag) => attr(tag, "name") === "robots" && /noindex/.test(attr(tag, "content"))), `${path}: indexable`);
  assert.ok(meta.some((tag) => attr(tag, "property") === "og:title"), `${path}: OG title`);
  assert.ok(meta.some((tag) => attr(tag, "property") === "og:image"), `${path}: social-sharing image`);
  const canonicalTag = [...html.matchAll(/<link\b[^>]*>/gi)].map(([tag]) => tag).find((tag) => attr(tag, "rel") === "canonical");
  assert.equal(new URL(attr(canonicalTag ?? "", "href")).href, new URL(path, canonical).href, `${path}: production canonical`);
  const nodes = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].flatMap(([, json]) => { const data = JSON.parse(json); return data["@graph"] ?? [data]; });
  assert.ok(nodes.some((node) => [node["@type"]].flat().includes("WebSite")), `${path}: global WebSite`);
  const visible = plain(main);
  for (const faq of nodes.filter((node) => node["@type"] === "FAQPage")) {
    assert.equal(new Set(faq.mainEntity.map((item) => item.name)).size, faq.mainEntity.length, `${path}: unique FAQ questions`);
    for (const item of faq.mainEntity) { assert.ok(visible.includes(item.name), `${path}: FAQ question visible: ${item.name}`); assert.ok(visible.includes(item.acceptedAnswer.text), `${path}: FAQ answer matches visible content`); }
  }
  const article = nodes.find((node) => node["@type"] === "Article");
  if (article) {
    assert.ok(visible.includes(article.headline), `${path}: article headline parity`);
    assert.equal(article.dateModified, "2026-11-14", `${path}: revised article date`);
    assert.ok(sitemap.includes(`<lastmod>${article.dateModified}`), `${path}: sitemap includes revised article dates`);
  }
  if (path.startsWith("/resources/")) {
    assert.ok(main.includes('id="template-preview"'), `${path}: actual file preview`);
    assert.ok(main.includes("Applied example"), `${path}: tailored example`);
    assert.ok(nodes.some((node) => node["@type"] === "CreativeWork" && node.encoding?.contentUrl), `${path}: download schema points to file`);
  }
  if (path.startsWith("/tools/")) assert.ok(main.includes('id="worked-example"') && main.includes("data-tool="), `${path}: working tool and example`);
  for (const [tag] of main.matchAll(/<img\b[^>]*>/gi)) {
    assert.ok(/\balt="/.test(tag), `${path}: alt attribute`);
    assert.ok(attr(tag, "width") && attr(tag, "height"), `${path}: stable image dimensions`);
    const src = new URL(attr(tag, "src"), base);
    if (src.origin === base.origin) images.add(src.pathname === "/_next/image" ? src.searchParams.get("url") : decodeURIComponent(src.pathname));
  }
  for (const [tag] of html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").matchAll(/<a\b[^>]*>/gi)) {
    const href = attr(tag, "href");
    if (!href || /^(?:mailto:|tel:|javascript:)/i.test(href)) continue;
    const target = new URL(href, new URL(path, base));
    if (target.origin === canonical) { target.protocol = base.protocol; target.host = base.host; }
    if (target.origin === base.origin) links.push({ source: path, target });
  }
  pages.set(path, { html, words: visible.split(/\s+/).length, title });
}
for (const src of images) { assert.ok(src?.startsWith("/"), `Local image path ${src}`); await access(resolve("public" + decodeURIComponent(src))); }
const otherDestinations = new Set();
for (const { source, target } of links) {
  let destination = pages.get(target.pathname)?.html;
  if (!destination && /\.(?:csv|png|jpe?g|webp|svg|ico|pdf)$/i.test(target.pathname)) {
    await access(resolve("public" + decodeURIComponent(target.pathname))); if (!otherDestinations.has(target.pathname)) await get(target.pathname); otherDestinations.add(target.pathname); continue;
  }
  if (!destination) { destination = await (await get(target.pathname + target.search)).text(); pages.set(target.pathname, { html: destination }); otherDestinations.add(target.pathname); }
  if (target.hash) assert.ok(destination.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `${source}: broken destination anchor ${target.pathname}${target.hash}`);
}
const missing = await (await get("/this-page-does-not-exist-qa", 404)).text();
assert.ok(missing.includes("Find the right page."), "Custom 404");
const offline = await (await get("/offline")).text();
assert.ok(/name="robots" content="[^"]*noindex/.test(offline), "Offline page is not indexed");
const robots = await (await get("/robots.txt")).text();
assert.ok(robots.includes(canonical + "/sitemap.xml"), "Robots sitemap uses canonical domain");
const social = await get("/opengraph-image");
assert.ok(social.headers.get("content-type")?.startsWith("image/"), "Social fallback is a served image");
await mkdir(".qa", { recursive: true });
await writeFile(".qa/all-pages-seo-report.json", JSON.stringify({ pages: paths.map((path) => ({ path, words: pages.get(path).words, title: pages.get(path).title })), internalLinks: links.length, imageSources: images.size, additionalDestinations: [...otherDestinations] }, null, 2));
console.log(`PASS: ${paths.length} sitemap pages; ${links.length} internal links and anchors; ${images.size} local image sources; unique metadata, canonical URLs, FAQ parity, article dates, download schema, robots, offline and custom 404.`);
