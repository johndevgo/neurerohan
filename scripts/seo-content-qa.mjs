import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { runInNewContext } from "node:vm";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const positioningSource = await readFile(new URL("../src/content/service-positioning.ts", import.meta.url), "utf8");
const editorialModule = { exports: {} };
runInNewContext(ts.transpileModule(positioningSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, { exports: editorialModule.exports });
const { servicePositioning } = editorialModule.exports;

const base = new URL(process.argv[2] ?? "http://localhost:3000");
const canonical = "https://neurerohan.com.np";
const landingSource = await readFile(new URL("../src/content/landing-pages.ts", import.meta.url), "utf8");
const routes = [...new Set([
  "/", "/services", "/about", "/contact", "/digital-marketing-agency-in-nepal",
  "/seo-expert-in-nepal", "/seo-company-in-nepal", "/seo-services-in-nepal",
  ...[...landingSource.matchAll(/slug: "([^"]+)"/g)].map((match) => `/${match[1]}`),
])];
const pages = new Map();
const links = new Map();
const decode = (value) => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
const attribute = (tag, name) => decode(tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`, "i"))?.[1] ?? "");
const text = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
async function load(path) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
  return response;
}

const titles = new Set();
for (const path of routes) {
  const html = await (await load(path)).text();
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
  assert.ok(main, `${path}: main landmark`);
  assert.equal([...main.matchAll(/<h1\b/g)].length, 1, `${path}: exactly one H1`);
  const title = decode(text(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? ""));
  assert.ok(title && !titles.has(title), `${path}: unique title`);
  titles.add(title);
  const meta = [...html.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => tag);
  assert.ok(meta.some((tag) => attribute(tag, "name") === "description" && attribute(tag, "content").length > 50), `${path}: meta description`);
  assert.ok(meta.some((tag) => attribute(tag, "property") === "og:title"), `${path}: Open Graph title`);
  assert.ok(!meta.some((tag) => attribute(tag, "name") === "robots" && /noindex/.test(attribute(tag, "content"))), `${path}: indexable`);
  const canonicalTag = [...html.matchAll(/<link\b[^>]*>/gi)].map(([tag]) => tag).find((tag) => attribute(tag, "rel") === "canonical");
  assert.equal(new URL(attribute(canonicalTag ?? "", "href")).href, new URL(path, canonical).href, `${path}: canonical`);
  const graphs = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => JSON.parse(match[1]));
  const nodes = graphs.flatMap((graph) => graph["@graph"] ?? [graph]);
  assert.ok(nodes.some((node) => [node["@type"]].flat().includes("WebSite")), `${path}: global WebSite`);
  if (path === "/social-media-marketing-packages") {
    assert.ok(nodes.some((node) => node["@type"] === "CollectionPage"), `${path}: package collection schema`);
    assert.ok(nodes.some((node) => node["@type"] === "OfferCatalog" && node.itemListElement?.length), `${path}: package offers`);
  } else if (!['/', '/services', '/about', '/contact'].includes(path)) {
    const service = nodes.find((node) => node["@type"] === "Service" && node.mainEntityOfPage);
    assert.ok(service?.hasOfferCatalog?.itemListElement.length, `${path}: service catalogue`);
    for (const offer of service.hasOfferCatalog.itemListElement) {
      const url = new URL(offer.url ?? offer.itemOffered?.url, canonical);
      if (url.pathname === path && url.hash) assert.ok(main.includes(`id="${url.hash.slice(1)}"`), `${path}: catalogue anchor ${url.hash}`);
    }
  }
  const faq = nodes.find((node) => node["@type"] === "FAQPage");
  if (faq) assert.equal(new Set(faq.mainEntity.map((item) => item.name.toLowerCase())).size, faq.mainEntity.length, `${path}: no repeated FAQ questions`);
  if (faq) for (const question of faq.mainEntity) assert.ok(decode(text(main)).includes(question.name), `${path}: visible FAQ ${question.name}`);
  const positioning = servicePositioning[path.slice(1)];
  if (positioning) {
    const h1 = text(main.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "").toLowerCase();
    assert.ok(h1.includes(positioning.keyword.toLowerCase()), `${path}: primary intent in H1`);
    const body = decode(text(main)).toLowerCase();
    for (const topic of positioning.topics) assert.ok(body.includes(topic.toLowerCase()), `${path}: topic coverage ${topic}`);
    for (const anchor of ["service-overview", "capabilities", "service-process", "service-faq", "service-enquiry"]) assert.ok(main.includes(`id="${anchor}"`), `${path}: decision navigation ${anchor}`);
    assert.ok(main.includes(`href="/contact?service=${positioning.formService}"`), `${path}: contextual contact handoff`);
    const pageNode = nodes.find((node) => node["@type"] === "WebPage" || node["@type"] === "CollectionPage");
    assert.equal(pageNode.name, title, `${path}: metadata and page schema use the same title`);
  }
  for (const [tag] of main.matchAll(/<img\b[^>]*>/gi)) {
    assert.ok(/\balt="/.test(tag), `${path}: image alt attribute`);
    assert.ok(attribute(tag, "width") && attribute(tag, "height"), `${path}: stable image dimensions`);
    const src = attribute(tag, "src");
    if (src.startsWith("/")) links.set(src, `${path} image`);
  }
  for (const [tag] of html.matchAll(/<a\b[^>]*>/gi)) {
    const href = attribute(tag, "href");
    if (!href || /^(?:mailto:|tel:|https?:\/\/|\/\/)/i.test(href)) continue;
    const url = new URL(href, new URL(path, base));
    if (url.origin !== base.origin) continue;
    links.set(url.pathname + url.search, path);
    if (url.pathname === path && url.hash) assert.ok(html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${path}: page anchor ${url.hash}`);
  }
  pages.set(path, { main, nodes });
  console.log(`PASS ${path} | ${text(main).split(/\s+/).length} words | ${faq?.mainEntity.length ?? 0} FAQs`);
}

const seo = pages.get("/seo-services-in-nepal");
assert.ok(text(seo.main).split(/\s+/).length >= 1800, "SEO services: substantial service content");
assert.equal(seo.nodes.find((node) => node["@type"] === "FAQPage").mainEntity.length, 12, "SEO services: twelve FAQs");
assert.equal(seo.nodes.find((node) => node["@type"] === "Service" && node.mainEntityOfPage).hasOfferCatalog.itemListElement.length, 10, "SEO services: ten workstreams");
for (const metric of ["1.1K", "229K", "714", "38K", "460", "47.4K"]) assert.ok(seo.main.includes(metric), `SEO services: visible metric ${metric}`);
for (const path of ["/", "/services", "/digital-marketing-agency-in-nepal", "/seo-company-in-nepal", "/seo-expert-in-nepal"]) assert.ok(pages.get(path).main.includes('href="/seo-services-in-nepal"'), `${path}: contextual service link`);

// Every internal destination referenced by the checked pages, including optimized image URLs.
const queue = [...links.entries()];
await Promise.all(Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const [path, source] = queue.shift();
    try { await load(path); } catch (error) { throw new Error(`Broken destination ${path} from ${source}`, { cause: error }); }
  }
}));
const sitemap = await (await load("/sitemap.xml")).text();
for (const path of routes) {
  const expected = `${canonical}${path === "/" ? "" : path}`;
  assert.ok(sitemap.includes(`<loc>${expected}</loc>`) || sitemap.includes(`<loc>${expected}/</loc>`), `${path}: sitemap coverage`);
}
assert.equal([...sitemap.matchAll(/<loc>https:\/\/neurerohan\.com\.np\/seo-services-in-nepal<\/loc>/g)].length, 1, "SEO services: single sitemap URL");
console.log(`Verified ${routes.length} core/service pages, ${links.size} internal destinations, and sitemap coverage. No forms submitted.`);
