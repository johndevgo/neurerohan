import { writeFile } from "node:fs/promises";

const port = process.argv[2] ?? "9223";
const baseUrl = process.argv[3] ?? "http://localhost:3174";
const tabs = await fetch(`http://localhost:${port}/json/list`).then((response) => response.json());
const tab = tabs.find((item) => item.type === "page");
if (!tab) throw new Error("No Chrome page target found.");

const socket = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let id = 0;
const pending = new Map();
socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

function command(method, params = {}) {
  const requestId = ++id;
  socket.send(JSON.stringify({ id: requestId, method, params }));
  return new Promise((resolve, reject) => pending.set(requestId, { resolve, reject }));
}

const pause = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
await command("Page.enable");
await command("Runtime.enable");
await command("Network.enable");
await command("Network.setBypassServiceWorker", { bypass: false });
await command("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await command("Page.navigate", { url: baseUrl });
await pause(1800);
await command("Runtime.evaluate", { expression: "localStorage.setItem('growthlabs_measurement_consent', 'denied')" });
await command("Page.reload");
await pause(900);
const mobileHome = await command("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
await writeFile(".qa/growthlabs-mobile-home.png", Buffer.from(mobileHome.data, "base64"));
await command("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await command("Page.reload", { ignoreCache: true });
await pause(900);
const desktopHome = await command("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
await writeFile(".qa/growthlabs-desktop-home.png", Buffer.from(desktopHome.data, "base64"));
await command("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await command("Page.reload", { ignoreCache: true });
await pause(900);
await command("Runtime.evaluate", { expression: "document.querySelector('.mobile-menu-button')?.click()" });
await pause(350);
const screenshot = await command("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
await writeFile(".qa/mobile-menu-pwa.png", Buffer.from(screenshot.data, "base64"));

const manifest = await command("Page.getAppManifest");
const installability = await command("Page.getInstallabilityErrors");
const worker = await command("Runtime.evaluate", {
  expression: "navigator.serviceWorker.ready.then(r => ({ scope: r.scope, active: r.active?.state })).catch(e => ({ error: String(e) }))",
  awaitPromise: true,
  returnByValue: true,
});
const menuLayout = await command("Runtime.evaluate", {
  expression: `(() => {
    const panel = document.querySelector('.mobile-menu-panel');
    const link = document.querySelector('.mobile-menu-link');
    return panel && link ? {
      panelHeight: getComputedStyle(panel).height,
      panelRect: panel.getBoundingClientRect().toJSON(),
      linkDisplay: getComputedStyle(link).display,
      linkColumns: getComputedStyle(link).gridTemplateColumns,
      children: [...link.children].map(node => ({ text: node.textContent, display: getComputedStyle(node).display, rect: node.getBoundingClientRect().toJSON() })),
    } : null;
  })()`,
  returnByValue: true,
});

await command("Runtime.evaluate", { expression: "document.querySelector('.mobile-menu-button')?.click()" });
await command("Runtime.evaluate", {
  expression: `new Promise(async resolve => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 700) {
      window.scrollTo(0, y);
      await new Promise(done => setTimeout(done, 90));
    }
    window.scrollTo(0, document.documentElement.scrollHeight);
    setTimeout(resolve, 2200);
  })`,
  awaitPromise: true,
});
const imageCoverage = await command("Runtime.evaluate", {
  expression: `Promise.all([...document.images]
    .filter(image => image.complete && image.naturalWidth > 0 && !image.currentSrc.startsWith('data:'))
    .map(async image => {
      const url = image.currentSrc || image.src;
      return { url, cached: Boolean(await caches.match(url)) };
    }))`,
  awaitPromise: true,
  returnByValue: true,
});
await command("Page.reload");
await pause(1500);
await command("Runtime.evaluate", { expression: "navigator.serviceWorker.ready", awaitPromise: true });
for (let attempt = 0; attempt < 2; attempt += 1) {
  const control = await command("Runtime.evaluate", { expression: "Boolean(navigator.serviceWorker.controller)", returnByValue: true });
  if (control.result.value) break;
  await command("Page.reload");
  await pause(1200);
}
const offlineReadiness = await command("Runtime.evaluate", {
  expression: "Promise.all([caches.keys(), caches.match('/offline').then(async response => ({ cached: Boolean(response), containsOfflineHeading: response ? (await response.text()).includes('You are offline') : false }))]).then(([cacheKeys, offline]) => ({ controlled: Boolean(navigator.serviceWorker.controller), cacheKeys, ...offline }))",
  awaitPromise: true,
  returnByValue: true,
});

console.log(JSON.stringify({
  manifestUrl: manifest.url,
  manifestErrors: manifest.errors,
  installabilityErrors: installability.installabilityErrors,
  serviceWorker: worker.result.value,
  imageCacheCoverage: {
    loaded: imageCoverage.result.value.length,
    cached: imageCoverage.result.value.filter((image) => image.cached).length,
    missing: imageCoverage.result.value.filter((image) => !image.cached).map((image) => image.url),
  },
  menuLayout: menuLayout.result.value,
  offlineReadiness: offlineReadiness.result.value,
  screenshot: ".qa/mobile-menu-pwa.png",
}, null, 2));
socket.close();
