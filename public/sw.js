const VERSION = "growthlabs-pwa-v2";
const PAGE_CACHE = `${VERSION}-pages`;
const ASSET_CACHE = `${VERSION}-assets`;
const IMAGE_CACHE = `${VERSION}-images`;
const MAX_IMAGE_ENTRIES = 160;
const OFFLINE_URL = "/offline";
const PRECACHE = [
  OFFLINE_URL,
  "/images/pwa/growthlabs-192.png",
  "/images/pwa/growthlabs-512.png",
  "/images/brand/growthlabs-brand-avatar.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(ASSET_CACHE).then((cache) => cache.addAll(PRECACHE)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith("growthlabs-pwa-") && !key.startsWith(VERSION)).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
    return;
  }
  if (event.data?.type === "CACHE_IMAGES" && Array.isArray(event.data.urls)) {
    const urls = [...new Set(event.data.urls)].slice(0, 80);
    event.waitUntil(warmImageCache(urls));
  }
});

async function trimCache(cache, maximumEntries) {
  const keys = await cache.keys();
  if (keys.length <= maximumEntries) return;
  await Promise.all(keys.slice(0, keys.length - maximumEntries).map((key) => cache.delete(key)));
}

async function cacheImageRequest(request) {
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return fetch(request);
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok && response.type !== "opaque") {
      await cache.put(request, response.clone());
      await trimCache(cache, MAX_IMAGE_ENTRIES);
    }
    return response;
  } catch {
    if (url.pathname === "/_next/image") {
      const source = url.searchParams.get("url");
      if (source) {
        const original = await caches.match(new URL(source, self.location.origin).href);
        if (original) return original;
      }
    }
    return imageFallback();
  }
}

async function warmImageCache(urls) {
  const cache = await caches.open(IMAGE_CACHE);
  await Promise.all(urls.map(async (value) => {
    try {
      const url = new URL(value, self.location.origin);
      if (url.origin !== self.location.origin) return;
      const request = new Request(url.href, { credentials: "same-origin" });
      if (await cache.match(request)) return;
      const response = await fetch(request);
      if (response.ok && response.type !== "opaque") await cache.put(request, response);
    } catch {
      // A single unavailable image must not prevent the remaining page images from caching.
    }
  }));
  await trimCache(cache, MAX_IMAGE_ENTRIES);
}

function imageFallback() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640"><rect width="960" height="640" fill="#edf3ec"/><circle cx="480" cy="270" r="72" fill="#f4c65a"/><path d="M432 290l38-44 35 34 23-21 50 61H382z" fill="#185f3d"/><text x="480" y="390" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="#28513a">GrowthLabs</text><text x="480" y="425" text-anchor="middle" font-family="Arial,sans-serif" font-size="15" fill="#688074">Image available when connected</text></svg>`;
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml", "Cache-Control": "no-store" } });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            event.waitUntil(caches.open(PAGE_CACHE).then((cache) => cache.put(request, copy)));
          }
          return response;
        })
        .catch(async () => (await caches.match(request)) || (await caches.match(OFFLINE_URL))),
    );
    return;
  }

  if (request.destination === "image" || url.pathname === "/_next/image") {
    event.respondWith(cacheImageRequest(request));
    return;
  }

  if (url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/downloads/")) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          event.waitUntil(caches.open(ASSET_CACHE).then((cache) => cache.put(request, copy)));
        }
        return response;
      })),
    );
  }
});
