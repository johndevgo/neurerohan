"use client";

import { useEffect, useState } from "react";

export function PwaManager() {
  const [updateReady, setUpdateReady] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    let registration: ServiceWorkerRegistration | undefined;
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
        registration.addEventListener("updatefound", () => watch(registration?.installing ?? null));
      } catch {
        // The core site remains fully usable if service workers are unavailable.
      }
    };
    const onLoad = () => void register();
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    const onVisible = () => { if (document.visibilityState === "visible") void registration?.update(); };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.removeEventListener("load", onLoad);
      document.removeEventListener("visibilitychange", onVisible);
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
