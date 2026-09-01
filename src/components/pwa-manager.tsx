"use client";

import { useEffect, useState } from "react";

export function PwaManager() {
  const [updateReady, setUpdateReady] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    let registration: ServiceWorkerRegistration | undefined;
    const sendImage = (image: HTMLImageElement) => {
      if (!image.complete || image.naturalWidth === 0) return;
      const url = image.currentSrc || image.src;
      if (url) registration?.active?.postMessage({ type: "CACHE_IMAGES", urls: [url] });
    };
    const warmRenderedImages = () => {
      const urls = Array.from(document.images)
        .filter((image) => image.complete && image.naturalWidth > 0)
        .map((image) => image.currentSrc || image.src)
        .filter(Boolean);
      if (urls.length) registration?.active?.postMessage({ type: "CACHE_IMAGES", urls });
    };
    const register = async () => {
      try {
        registration = await navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" });
        const watch = (worker: ServiceWorker | null) => {
          if (!worker) return;
          worker.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) setUpdateReady(worker);
          });
        };
        watch(registration.installing);
        if (registration.waiting && navigator.serviceWorker.controller) setUpdateReady(registration.waiting);
        registration.addEventListener("updatefound", () => watch(registration?.installing ?? null));
        await navigator.serviceWorker.ready;
        warmRenderedImages();
      } catch {
        // The core site remains fully usable if service workers are unavailable.
      }
    };
    const onLoad = () => void register();
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    const onVisible = () => { if (document.visibilityState === "visible") void registration?.update(); };
    document.addEventListener("visibilitychange", onVisible);
    const onResourceLoad = (event: Event) => {
      if (event.target instanceof HTMLImageElement) sendImage(event.target);
    };
    document.addEventListener("load", onResourceLoad, true);
    return () => {
      window.removeEventListener("load", onLoad);
      document.removeEventListener("visibilitychange", onVisible);
      document.removeEventListener("load", onResourceLoad, true);
    };
  }, []);

  if (!updateReady) return null;
  return <aside className="pwa-update" role="status" aria-live="polite">
    <div><strong>Update ready</strong><span>Refresh for the latest GrowthLabs experience.</span></div>
    <button type="button" onClick={() => {
      navigator.serviceWorker.addEventListener("controllerchange", () => window.location.reload(), { once: true });
      updateReady.postMessage({ type: "SKIP_WAITING" });
    }}>Refresh</button>
    <button type="button" className="pwa-update-dismiss" aria-label="Dismiss update message" onClick={() => setUpdateReady(null)}>×</button>
  </aside>;
}
