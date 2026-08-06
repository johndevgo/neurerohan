import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return <footer className="border-t border-[var(--line)] bg-[linear-gradient(135deg,#24170a,#3b1b05)] text-[var(--paper)]">
    <div className="shell grid gap-14 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:py-16">
      <div><p className="font-serif text-4xl tracking-[-.04em]">{siteConfig.name}<span className="text-[var(--sun)]">.</span></p><p className="mt-2 text-sm font-semibold">by {siteConfig.fullName}</p><p className="mt-4 max-w-sm text-sm leading-6 text-white/60">{siteConfig.positioning}</p></div>
      <div><p className="eyebrow !text-white/45">Navigate</p><div className="mt-4 grid gap-2">{siteConfig.nav.map((item) => <Link className="w-fit text-sm hover:text-[var(--sun)]" key={item.href} href={item.href}>{item.label}</Link>)}</div></div>
      <div><p className="eyebrow !text-white/45">Specialisms</p><div className="mt-4 grid gap-2"><Link className="w-fit text-sm hover:text-[var(--sun)]" href="/seo-expert-in-nepal">SEO expert in Nepal</Link><Link className="w-fit text-sm hover:text-[var(--sun)]" href="/social-media-marketing-agency-in-nepal">Social media marketing</Link><Link className="w-fit text-sm hover:text-[var(--sun)]" href="/web-design-company-in-nepal">Web design in Nepal</Link><Link className="w-fit text-sm hover:text-[var(--sun)]" href="/privacy">Privacy</Link></div></div>
    </div>
    <div className="shell flex flex-col gap-2 border-t border-white/15 py-5 text-xs text-white/50 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p><p>Marketing built to rank, convert, and grow.</p></div>
  </footer>;
}
