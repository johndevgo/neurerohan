"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "growthlabs_measurement_consent";
const OPEN_EVENT = "growthlabs:open-measurement-settings";
type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function updateConsent(choice: ConsentChoice) {
  const storage = choice === "granted" ? "granted" : "denied";
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? function gtag(...args: unknown[]) { window.dataLayer?.push(args); };
  window.gtag("consent", "update", {
    analytics_storage: storage,
    ad_storage: storage,
    ad_user_data: storage,
    ad_personalization: storage,
  });
  window.dataLayer.push({ event: "growthlabs_measurement_consent", measurement_consent: choice });
}

export function MeasurementConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let revealFrame: number | undefined;
    let saved: ConsentChoice | null = null;
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      if (value === "granted" || value === "denied") saved = value;
    } catch {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }
    if (saved) updateConsent(saved);
    else revealFrame = window.requestAnimationFrame(() => setVisible(true));

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => {
      if (revealFrame !== undefined) window.cancelAnimationFrame(revealFrame);
      window.removeEventListener(OPEN_EVENT, reopen);
    };
  }, []);

  const choose = (choice: ConsentChoice) => {
    updateConsent(choice);
    try { window.localStorage.setItem(STORAGE_KEY, choice); } catch { /* Keep the in-page choice even when storage is unavailable. */ }
    setVisible(false);
  };

  if (!visible) return null;

  return <aside className="measurement-consent" aria-labelledby="measurement-consent-title">
    <div>
      <p className="eyebrow">Your measurement choice</p>
      <h2 id="measurement-consent-title" className="mt-2 font-serif text-2xl leading-none">Help improve this website?</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">Optional analytics and advertising storage stay off unless you allow them. You can change this choice later.</p>
      <Link className="mt-3 inline-block border-b border-white/45 text-xs font-bold text-white/80 hover:text-[var(--sun)]" href="/privacy#cookies-and-analytics">Read the privacy details</Link>
    </div>
    <div className="measurement-consent-actions flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col">
      <button className="measurement-consent-primary" type="button" onClick={() => choose("granted")}>Allow measurement</button>
      <button className="measurement-consent-secondary" type="button" onClick={() => choose("denied")}>Use essential only</button>
    </div>
  </aside>;
}

export function MeasurementSettingsButton() {
  return <button className="text-left text-xs font-bold hover:text-[var(--sun)]" type="button" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>Measurement choices</button>;
}
