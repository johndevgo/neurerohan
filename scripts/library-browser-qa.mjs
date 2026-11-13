import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";

const port = process.argv[2] ?? "9335", base = process.argv[3] ?? "http://127.0.0.1:3182";
const tabs = await fetch(`http://127.0.0.1:${port}/json/list`).then((r) => r.json());
const target = tabs.find((tab) => tab.type === "page");
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { ws.addEventListener("open", resolve, { once: true }); ws.addEventListener("error", reject, { once: true }); });
let nextId = 0; const pending = new Map(), exceptions = [];
ws.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (message.method === "Runtime.exceptionThrown") exceptions.push(message.params.exceptionDetails.text);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id); pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message)); else resolve(message.result);
});
function cdp(method, params = {}) { return new Promise((resolve, reject) => { const id = ++nextId; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params })); }); }
async function evaluate(expression) { const r = await cdp("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true }); if (r.exceptionDetails) throw new Error(r.exceptionDetails.text); return r.result.value; }
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
await cdp("Page.enable"); await cdp("Runtime.enable"); await cdp("Network.enable"); await cdp("Network.setBypassServiceWorker", { bypass: true });
async function visit(path, width = 390) {
  await cdp("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 });
  await cdp("Page.navigate", { url: base + path });
  for (let i = 0; i < 40; i++) { await pause(100); if (await evaluate(`location.pathname===${JSON.stringify(path.split("?")[0])} && document.readyState==='complete'`)) break; }
  await evaluate("document.fonts.ready"); await pause(220);
}
await visit("/");
await evaluate("localStorage.setItem('growthlabs_measurement_consent','denied');sessionStorage.setItem('growthlabs-library-prompt','dismissed')");
const xml = await fetch(base + "/sitemap.xml").then((r) => r.text());
const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => new URL(url).pathname);
const libraryPaths = [...paths.filter((path) => /^\/(insights|resources|tools)(\/|$)/.test(path)), "/privacy", "/offline", "/this-page-does-not-exist-qa"];
const rows = [];
await mkdir(".qa/library-review", { recursive: true });
const captures = new Set(["/insights", "/insights/what-is-seo", "/insights/google-ads-conversion-tracking-guide", "/insights/glossary", "/insights/case-studies", "/resources", "/resources/keyword-mapping-template", "/tools", "/tools/google-ads-break-even-calculator", "/tools/utm-builder"]);
for (const width of [390, 768, 1440]) {
  for (const path of libraryPaths) {
    await visit(path, width);
    const r = await evaluate(`({ width:innerWidth,scroll:document.documentElement.scrollWidth,h1:document.querySelector('main h1')?.textContent,
      clipped:[...document.querySelectorAll('main h1,main h2,main h3,.tool-field,.tool-metric,.workflow-fields article,.knowledge-assistance a')].filter(n=>n.getBoundingClientRect().right>innerWidth+1||n.getBoundingClientRect().left< -1||n.scrollWidth>n.clientWidth+2).map(n=>n.textContent.slice(0,100)),
      broken:[...document.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src),
      heroAction:document.querySelector('.page-intro .button-primary')?.getBoundingClientRect().top??null })`);
    assert.ok(r.h1, `${path}: H1`); assert.ok(r.scroll <= width + 1, `${width} ${path}: overflow ${r.scroll}`);
    assert.deepEqual(r.clipped, [], `${width} ${path}: clipped text`); assert.deepEqual(r.broken, [], `${width} ${path}: broken loaded image`);
    if (path.startsWith("/tools/") || path.startsWith("/resources/")) assert.ok(r.heroAction < 900, `${width} ${path}: primary action is reachable before image`);
    rows.push({ path, width, ...r });
    if (captures.has(path)) {
      const result = await cdp("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
      await writeFile(`.qa/library-review/${path.slice(1).replaceAll("/", "-")}-${width}.png`, Buffer.from(result.data, "base64"));
    }
  }
  console.log(`PASS ${width}px: ${libraryPaths.length} library layouts`);
}
async function setInput(selector, value) {
  await evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(selector)});if(!e)throw Error('Missing input');Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(e,${JSON.stringify(value)});e.dispatchEvent(new Event('input',{bubbles:true}));})()`);
  await pause(80);
}
const resultText = () => evaluate("document.querySelector('.tool-results').innerText");
for (const [path, expected] of [["/tools/meta-ads-budget-planner", "USD 1,200"], ["/tools/marketing-funnel-calculator", "USD 48,000"], ["/tools/cpc-cpm-ctr-calculator", "2.5%"]]) {
  await visit(path); assert.ok((await resultText()).includes(expected), `${path}: browser result matches worked example`);
}
await visit("/tools/google-ads-break-even-calculator", 390);
assert.ok((await resultText()).includes("USD 1.6"), "Lead-generation CPC includes close rate");
await evaluate("document.querySelector('input[value=purchases]').click()"); await pause(80);
assert.ok((await resultText()).includes("USD 8"), "Direct-purchase mode uses customer conversion rate");
assert.equal(await evaluate("[...document.querySelectorAll('.tool-field')].some(e=>e.textContent.includes('Lead-to-customer'))"), false);
await setInput('input[id$="-margin"]', "101");
assert.ok((await resultText()).includes("Check your inputs"), "Over-100% margin has a useful error");
await evaluate("document.querySelector('.tool-reset').click()"); await pause(80);
await setInput('input[id$="-margin"]', "0");
assert.ok((await resultText()).includes("Not defined"), "Zero margin does not show false zero ROAS");
await visit("/tools/seo-roi-calculator"); await setInput('input[id$="-scenarioRate"]', "1");
assert.ok((await resultText()).includes("-20"), "Downside scenario remains negative");
await setInput('input[id$="-sessions"]', ""); assert.ok((await resultText()).includes("Check your inputs"), "Blank input is not a real zero");
await visit("/tools/conversion-rate-calculator"); await setInput('input[id$="-conversions"]', "6000");
assert.ok((await resultText()).includes("Check your inputs"), "Impossible converting-session count rejected");
await visit("/tools/utm-builder"); await setInput('input[id$="-url"]', "https://example.com/page?keep=1&utm_term=old#here");
assert.ok((await evaluate("document.querySelector('.tool-url').textContent")).includes("keep=1"));
assert.ok(!(await evaluate("document.querySelector('.tool-url').textContent")).includes("utm_term="), "Cleared optional UTM removed");
await evaluate("Object.defineProperty(navigator,'clipboard',{value:{writeText:async()=>{throw Error('Clipboard denied')}}});document.querySelector('.tool-results button').click()"); await pause(100);
assert.ok((await resultText()).includes("Select and copy"), "Clipboard failure gives manual-copy fallback");
await setInput('input[id$="-utm_source"]', "");
assert.ok(await evaluate("document.querySelector('.tool-results button').disabled"), "Incomplete UTM cannot be copied");
await visit("/insights/glossary"); await setInput("#glossary-search", "search engine optimization");
assert.ok(await evaluate("Boolean(document.getElementById('term-search-engine-optimisation'))"), "US spelling finds UK glossary definition");
await setInput("#glossary-search", "zzzz-no-match"); assert.ok((await evaluate("document.querySelector('main').innerText")).includes("No matching term"));
await evaluate("[...document.querySelectorAll('button')].find(e=>e.textContent==='Show all terms').click()"); await pause(100);
assert.equal(await evaluate("document.querySelectorAll('.glossary-term').length"), 142, "Clear search restores glossary");
await visit("/resources/seo-audit-checklist");
await evaluate("document.querySelector('.library-prompt-trigger').click()"); await pause(100);
assert.ok(await evaluate("document.activeElement.type==='email'"), "Library prompt moves focus to email");
await cdp("Input.dispatchKeyEvent", { type: "keyDown", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 }); await pause(100);
assert.equal(await evaluate("Boolean(document.querySelector('.library-prompt'))"), false, "Library prompt closes with Escape");
for (const width of [390, 1440]) {
  for (const [path, selector, label] of [["/insights/what-is-seo", "#seo-example", "article-example"], ["/tools/google-ads-break-even-calculator", "#calculator", "calculator"], ["/tools/google-ads-break-even-calculator", ".tool-results", "calculator-results"], ["/resources/keyword-mapping-template", "#template-preview", "download-preview"], ["/insights/glossary", "#term-core-web-vitals", "definition"]]) {
    await visit(path, width);
    await evaluate(`(()=>{const n=document.querySelector(${JSON.stringify(selector)});document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,n.getBoundingClientRect().top+scrollY-120);})()`);
    await pause(300);
    const result = await cdp("Page.captureScreenshot", { format: "png" });
    await writeFile(`.qa/library-review/detail-${label}-${width}.png`, Buffer.from(result.data, "base64"));
  }
}
await writeFile(".qa/library-browser-report.json", JSON.stringify({ layouts: rows, exceptions, interactions: "calculator defaults, mode change, invalid and zero inputs, downside, URL preservation, clipboard failure, glossary search and library dialog keyboard" }, null, 2));
assert.deepEqual(exceptions, [], "No uncaught browser exceptions");
ws.close();
console.log(`PASS: ${rows.length} responsive library layouts and calculator, URL builder, glossary and dialog interactions. No form emails sent.`);
