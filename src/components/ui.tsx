import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./icons";
import type { AgencyAsset } from "@/content/agency-assets";
import { siteConfig } from "@/content/site";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><ol className="shell"><li><Link href="/">Home</Link></li>{items.map((item) => <li key={`${item.label}-${item.href ?? "current"}`}>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>)}</ol></nav>;
}

export function PageIntro({ eyebrow, title, children, breadcrumbs, visual }: { eyebrow: string; title: string; children: ReactNode; breadcrumbs?: BreadcrumbItem[]; visual?: AgencyAsset }) {
  return <>{breadcrumbs && <Breadcrumbs items={breadcrumbs} />}<section className="page-intro relative overflow-hidden border-b border-[var(--line)] bg-[var(--surface)]"><div aria-hidden="true" className="signal-grid absolute inset-y-0 right-0 hidden w-[18%] opacity-70 lg:block" /><div className={`shell relative grid gap-7 py-14 md:py-20 lg:gap-10 ${visual ? "lg:grid-cols-[minmax(10rem,.5fr)_minmax(0,1.55fr)_minmax(19rem,1fr)] lg:items-start" : "md:grid-cols-[1fr_3fr] md:py-24"}`}><div><p className="eyebrow pt-2">{eyebrow}</p><div className="growth-trace mt-8 hidden max-w-40 lg:block" /></div><div><h1 className="page-title">{title}</h1><div className="lede mt-7 border-t border-[var(--line-strong)] pt-6">{children}</div></div>{visual && <figure className="editorial-visual editorial-visual-hero self-start lg:sticky lg:top-[calc(var(--header)+2rem)]"><div className="editorial-visual-media"><Image className="h-full w-full object-contain" src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} sizes="(max-width: 1024px) 100vw, 31vw" style={{ objectPosition: visual.position ?? "center" }} /></div><figcaption>{visual.caption}</figcaption></figure>}</div></section></>;
}
export function SectionHeading({ eyebrow, title, copy, variant = "split" }: { eyebrow: string; title: string; copy?: string; variant?: "split" | "compact" | "centered" }) {
  if (variant === "centered") return <div className="mx-auto max-w-4xl text-center"><p className="eyebrow">{eyebrow}</p><h2 className="section-title mx-auto mt-5">{title}</h2>{copy && <p className="lede mx-auto mt-6">{copy}</p>}</div>;
  if (variant === "compact") return <div className="max-w-4xl"><p className="eyebrow">{eyebrow}</p><h2 className="section-title mt-5">{title}</h2>{copy && <p className="lede mt-6">{copy}</p>}</div>;
  return <div className="grid gap-7 md:grid-cols-[minmax(10rem,1fr)_minmax(0,3fr)]"><div className="border-t border-[var(--line-strong)] pt-3"><p className="eyebrow">{eyebrow}</p></div><div><h2 className="section-title">{title}</h2>{copy && <p className="lede mt-6">{copy}</p>}</div></div>;
}
export function EmptyState({ title, copy, href, linkLabel }: { title: string; copy: string; href?: string; linkLabel?: string }) {
  return <div className="empty-state"><p className="eyebrow">Content pending</p><h2 className="mt-4 font-serif text-3xl tracking-[-.035em]">{title}</h2><p className="mt-3 max-w-xl leading-7 text-[var(--muted)]">{copy}</p>{href && linkLabel && <Link className="text-link mt-6" href={href}>{linkLabel}<Arrow /></Link>}</div>;
}
export function ContactCta() {
  return <section className="section signal-grid"><div className="shell conversion-panel grid gap-10 md:grid-cols-[1fr_3fr]"><p className="eyebrow">A focused next step</p><div><h2 className="section-title">Bring the growth constraint. Leave with a clearer priority.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">{siteConfig.cta.microcopy}</p><div className="conversion-promises mt-7 grid gap-3 sm:grid-cols-3"><span>Direct strategic review</span><span>Channel priorities explained</span><span>Clear next action</span></div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href={siteConfig.cta.primary.href} className="button button-primary" data-cta-intent="growth-review" data-cta-location="shared-final" data-cta-channel="contact">{siteConfig.cta.primary.headerLabel} <Arrow /></Link><a className="button" href={siteConfig.cta.whatsapp.href} target="_blank" rel="noopener noreferrer" data-cta-intent="growth-review" data-cta-location="shared-final" data-cta-channel="whatsapp">{siteConfig.cta.whatsapp.label} <Arrow direction="up-right" /></a></div><p className="mt-5 font-mono text-[.72rem] uppercase leading-5 tracking-[.04em] text-black/65">{siteConfig.cta.reassurance}</p></div></div></section>;
}
