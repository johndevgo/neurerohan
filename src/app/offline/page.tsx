import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "You are offline",
  description: "Reconnect to continue browsing GrowthLabs.",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return <section className="offline-page shell section">
    <div className="offline-card">
      <span className="eyebrow">Connection paused</span>
      <h1>You are offline.<br /><em>Your next step is still clear.</em></h1>
      <p>This page is saved on your device. Reconnect to continue exploring our SEO, paid-media and conversion resources, or contact us directly.</p>
      <div className="offline-actions">
        <Link href="/" className="button button-primary">Try again</Link>
        <a className="button button-secondary" href={siteConfig.cta.phone.href}>Call GrowthLabs</a>
      </div>
      <small>Previously visited pages and selected assets may remain available offline.</small>
    </div>
  </section>;
}
