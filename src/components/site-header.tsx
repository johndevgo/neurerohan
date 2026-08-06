import Link from "next/link";
import { siteConfig } from "@/content/site";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:color-mix(in_srgb,var(--paper)_90%,transparent)] backdrop-blur-xl">
    <div className="shell flex h-[73px] items-center justify-between">
      <Link href="/" className="flex items-center gap-3 font-bold tracking-[-.03em]" aria-label={`${siteConfig.name} — home`}><span className="grid size-9 place-items-center bg-[var(--ink)] text-sm text-[var(--paper)]">{siteConfig.initials}</span><span>{siteConfig.name}<span className="text-[var(--accent)]">.</span></span></Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">{siteConfig.nav.map((item) => <Link key={item.href} className="text-sm font-semibold hover:text-[var(--accent)]" href={item.href}>{item.label}</Link>)}</nav>
      <MobileNav items={siteConfig.nav} />
    </div>
  </header>;
}
