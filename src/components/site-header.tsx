import Link from "next/link";
import { siteConfig } from "@/content/site";
import { BrandLockup } from "./brand-lockup";
import { DesktopNav } from "./desktop-nav";
import { Arrow } from "./icons";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  const navigation = siteConfig.nav.filter((item) => item.href !== "/contact");
  return <header className="sticky top-0 z-[100] border-b border-[var(--ink)] bg-[var(--paper)]">
    <div className="shell flex h-[var(--header)] items-center justify-between gap-2 lg:gap-6">
      <BrandLockup priority />
      <div className="hidden items-center gap-7 lg:flex"><DesktopNav items={navigation} /><Link className="button button-primary min-h-11 px-4" href={siteConfig.cta.primary.href} data-cta-intent="growth-review" data-cta-location="header" data-cta-channel="contact">{siteConfig.cta.primary.headerLabel} <Arrow /></Link></div>
      <MobileNav items={siteConfig.nav} />
    </div>
  </header>;
}
