import Link from "next/link";
import { siteConfig } from "@/content/site";
import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";
import { Arrow } from "./icons";

export function SiteHeader() {
  const navigation = siteConfig.nav.filter((item) => item.href !== "/contact");
  return <header className="sticky top-0 z-40 border-b border-[var(--ink)] bg-[var(--paper)]">
    <div className="shell flex h-[var(--header)] items-center justify-between gap-6">
      <Link href="/" className="wordmark" aria-label={`${siteConfig.name} — home`}><span className="wordmark-mark">G/L</span><span className="wordmark-copy"><strong>GrowthLabs</strong><small>by Rohan Neure</small></span></Link>
      <div className="hidden items-center gap-7 lg:flex"><DesktopNav items={navigation} /><Link className="button button-primary min-h-11 px-4" href="/contact">Start a conversation <Arrow direction="up-right" /></Link></div>
      <MobileNav items={siteConfig.nav} />
    </div>
  </header>;
}
