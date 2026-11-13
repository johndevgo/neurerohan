import assert from "node:assert/strict";
import { readFile, writeFile, mkdir } from "node:fs/promises";

const port = process.argv[2] ?? "9335";
const base = process.argv[3] ?? "http://127.0.0.1:3180";
const tabs = await fetch(`http://127.0.0.1:${port}/json/list`).then((response) => response.json());
const tab = tabs.find((item) => item.type === "page");
assert.ok(tab, "Chrome page target");
const socket = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.addEventListener("open", resolve, { once: true }); socket.addEventListener("error", reject, { once: true }); });
let id = 0;
const pending = new Map();
const exceptions = [];
socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (message.method === "Runtime.exceptionThrown") exceptions.push(message.params.exceptionDetails.text);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message)); else resolve(message.result);
});
function command(method, params = {}) {
  const requestId = ++id;
  return new Promise((resolve, reject) => { pending.set(requestId, { resolve, reject }); socket.send(JSON.stringify({ id: requestId, method, params })); });
}
async function evaluate(expression) {
  const result = await command("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
await mkdir(".qa", { recursive: true });
await command("Page.enable");
await command("Runtime.enable");
await command("Network.enable");
await command("Network.setBypassServiceWorker", { bypass: true });
await command("Page.navigate", { url: base });
await pause(700);
await evaluate("localStorage.setItem('growthlabs_measurement_consent','denied')");
const source = await readFile(new URL("../src/content/landing-pages.ts", import.meta.url), "utf8");
const routes = [...new Set(["/seo-services-in-nepal", "/", "/services", "/about", "/contact", "/digital-marketing-agency-in-nepal", "/seo-expert-in-nepal", "/seo-company-in-nepal", ...[...source.matchAll(/slug: "([^"]+)"/g)].map((match) => `/${match[1]}`)])];
const checks = [];
for (const width of [390, 768, 1440]) {
  await command("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 });
  for (const path of routes) {
    await command("Page.navigate", { url: base + path });
    await pause(450);
    const result = await evaluate(`document.fonts.ready.then(() => ({
      path: location.pathname, width: innerWidth, scrollWidth: document.documentElement.scrollWidth,
      h1: document.querySelector('main h1')?.textContent,
      deliveryWidth: document.querySelector('.service-depth-layout')?.getBoundingClientRect().width ?? null,
      brokenImages: [...document.images].filter(image => image.complete && !image.naturalWidth && !image.loading.includes('lazy')).map(image => image.src),
      clippedDelivery: [...document.querySelectorAll('.service-depth p,.service-depth h3,.service-depth a,.visual-break-copy p,.visual-break-copy h2')].filter(node => node.scrollWidth > node.clientWidth + 2 || node.getBoundingClientRect().right > innerWidth + 1).map(node => node.textContent),
    }))`);
    assert.equal(result.path, path, `${width}: expected route ${path}`);
    assert.ok(result.h1, `${path} at ${width}: heading rendered`);
    assert.ok(result.scrollWidth <= width + 1, `${path} at ${width}: overflow ${result.scrollWidth}`);
    assert.deepEqual(result.clippedDelivery, [], `${path} at ${width}: clipped delivery copy`);
    assert.deepEqual(result.brokenImages, [], `${path} at ${width}: broken eager images`);
    checks.push({ path, width, overflow: false });
    if (path === "/seo-services-in-nepal") {
      await pause(600);
      const hero = await command("Page.captureScreenshot", { format: "png" });
      await writeFile(`.qa/seo-services-${width}.png`, Buffer.from(hero.data, "base64"));
      await evaluate("document.querySelector('#seo-results')?.scrollIntoView()");
      await pause(900);
      const proof = await evaluate(`Promise.all([...document.querySelectorAll('#seo-results img')].map(image => new Promise(resolve => {
        if (image.complete) resolve({ loaded: image.naturalWidth > 0, fit: getComputedStyle(image).objectFit, ratio: image.width / image.height, sourceRatio: image.naturalWidth / image.naturalHeight });
        else { image.onload = () => resolve({ loaded: true, fit: getComputedStyle(image).objectFit, ratio: image.width / image.height, sourceRatio: image.naturalWidth / image.naturalHeight }); image.onerror = () => resolve({ loaded: false }); }
      })))`);
      assert.equal(proof.length, 3, "Three SEO proof images");
      for (const image of proof) { assert.ok(image.loaded, "Proof image loaded"); assert.ok(Math.abs(image.ratio - image.sourceRatio) < .04, "Proof image retains its ratio"); }
      const evidence = await command("Page.captureScreenshot", { format: "png" });
      await writeFile(`.qa/seo-results-${width}.png`, Buffer.from(evidence.data, "base64"));
    }
    if (path === "/google-ads-agency-in-nepal" && width !== 768) {
      await evaluate("document.querySelector('.service-depth')?.scrollIntoView()");
      await pause(1200);
      await evaluate("document.querySelector('.service-depth')?.scrollIntoView()");
      await pause(400);
      const screen = await command("Page.captureScreenshot", { format: "png" });
      await writeFile(`.qa/google-ads-depth-${width}.png`, Buffer.from(screen.data, "base64"));
    }
  }
  console.log(`PASS ${routes.length} core/service layouts at ${width}px`);
}
await command("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await command("Page.navigate", { url: `${base}/seo-services-in-nepal` });
await pause(800);
await evaluate("document.querySelector('[aria-controls=services-mega-menu]')?.click()");
await pause(250);
const menu = await evaluate(`(() => {const panel=document.querySelector('#services-mega-menu');return panel ? { link: Boolean(panel.querySelector('a[href="/seo-services-in-nepal"]')), rect: panel.getBoundingClientRect().toJSON(), background: getComputedStyle(panel).backgroundColor } : null;})()`);
assert.ok(menu?.link, "New SEO page in services dropdown");
assert.ok(menu.rect.right <= 1440 && menu.rect.left >= 0, "Desktop dropdown inside viewport");
const menuScreen = await command("Page.captureScreenshot", { format: "png" });
await writeFile(".qa/seo-desktop-dropdown.png", Buffer.from(menuScreen.data, "base64"));
await command("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await command("Page.navigate", { url: `${base}/seo-services-in-nepal` });
await pause(650);
await evaluate("window.scrollTo(0, 1300)");
await pause(200);
await evaluate("document.querySelector('.mobile-menu-button')?.click()");
await pause(250);
const mobile = await evaluate(`(() => {const header=document.querySelector('.site-header'),panel=document.querySelector('.mobile-menu-panel');return { headerTop: header.getBoundingClientRect().top, panelTop: panel?.getBoundingClientRect().top, expanded: document.querySelector('.mobile-menu-button')?.getAttribute('aria-expanded'), closes: [...document.querySelectorAll('button')].filter(node=>node.textContent.includes('Close menu')).length };})()`);
assert.equal(mobile.expanded, "true", "Scrolled mobile menu opens");
assert.ok(mobile.headerTop >= 0 && mobile.panelTop >= 0, "Scrolled mobile header remains visible");
assert.ok(mobile.closes <= 1, "No duplicate close controls");
const mobileScreen = await command("Page.captureScreenshot", { format: "png" });
await writeFile(".qa/seo-mobile-menu.png", Buffer.from(mobileScreen.data, "base64"));
await command("Input.dispatchKeyEvent", { type: "keyDown", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 });
await command("Input.dispatchKeyEvent", { type: "keyUp", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 });
await pause(200);
assert.equal(await evaluate("document.querySelector('.mobile-menu-button').getAttribute('aria-expanded')"), "false", "Escape closes mobile menu");
assert.deepEqual(exceptions, [], "No uncaught browser exceptions");
await writeFile(".qa/seo-browser-report.json", JSON.stringify({ layouts: checks, desktopMenu: menu, mobileMenu: mobile, exceptions }, null, 2));
console.log(`Verified ${checks.length} responsive layouts, proof-image ratios, new dropdown link and scrolled mobile menu. Screenshots in .qa/.`);
socket.close();
