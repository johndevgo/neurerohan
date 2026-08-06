import { PageIntro } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Privacy", "Privacy information for neurerohan.com.np.", "/privacy");

export default function PrivacyPage() {
  return <><PageIntro eyebrow="Privacy" title="Simple by design."><p>Last reviewed: 6 August 2026</p></PageIntro><section className="section"><div className="content prose-copy space-y-8"><div><h2 className="font-serif text-3xl text-[var(--ink)]">What this site collects</h2><p className="mt-3">This Phase 1 website does not include analytics, advertising trackers, user accounts, cookies, or a contact form. The hosting provider may process standard technical request logs for security and service operation.</p></div><div><h2 className="font-serif text-3xl text-[var(--ink)]">External links</h2><p className="mt-3">Future links to professional profiles or third-party websites will be governed by those services’ own privacy policies.</p></div><div><h2 className="font-serif text-3xl text-[var(--ink)]">Future changes</h2><p className="mt-3">If analytics, forms, or the Phase 2 publishing system are introduced, this notice should be updated before those features go live.</p></div></div></section></>;
}
