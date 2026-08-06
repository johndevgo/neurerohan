import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./icons";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="shell grid gap-8 py-16 md:grid-cols-[1fr_3fr] md:py-28"><p className="eyebrow pt-2">{eyebrow}</p><div><h1 className="page-title">{title}</h1><div className="lede mt-8">{children}</div></div></section>;
}
export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="grid gap-6 md:grid-cols-[1fr_3fr]"><p className="eyebrow pt-2">{eyebrow}</p><div><h2 className="section-title">{title}</h2>{copy && <p className="lede mt-6">{copy}</p>}</div></div>;
}
export function EmptyState({ title, copy, href, linkLabel }: { title: string; copy: string; href?: string; linkLabel?: string }) {
  return <div className="empty-state"><p className="eyebrow">Content pending</p><h2 className="mt-4 font-serif text-3xl tracking-[-.035em]">{title}</h2><p className="mt-3 max-w-xl leading-7 text-[var(--muted)]">{copy}</p>{href && linkLabel && <Link className="text-link mt-6" href={href}>{linkLabel}<Arrow /></Link>}</div>;
}
export function ContactCta() {
  return <section className="section bg-[var(--accent)] text-white"><div className="shell grid gap-8 md:grid-cols-[1fr_3fr]"><p className="eyebrow !text-white/60">Next step</p><div><h2 className="section-title">Ready to build a better digital marketing system?</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Start with the business, the current marketing, and the most valuable opportunity to build next.</p><Link href="/contact" className="button mt-8 border-white text-white hover:bg-white hover:text-[var(--accent)]">Talk to Rohan <Arrow /></Link></div></div></section>;
}
