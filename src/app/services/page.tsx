import Link from "next/link";
import Image from "next/image";
import { Arrow } from "@/components/icons";
import { ContactCta, PageIntro } from "@/components/ui";
import { services } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Digital Marketing Services in Nepal", "Explore SEO, paid ads, social media, website strategy, content, local SEO, CRO, and digital strategy from GrowthLabs.", "/services");

export default function ServicesPage() {
  return <><PageIntro eyebrow="Services / 01" title="Every channel has a job to do."><p>GrowthLabs connects search, campaigns, content, websites, local visibility, and conversion into a practical system built around the business.</p></PageIntro><figure className="shell pb-16"><Image className="w-full border border-[var(--line)]" src="/images/brand/growthlabs-services-cover.png" alt="GrowthLabs services: search engine optimization, Google Ads, Meta and TikTok Ads, and conversion rate optimization" width={2508} height={627} sizes="(max-width: 1440px) 100vw, 1440px" priority /><figcaption className="mt-3 text-xs text-[var(--muted)]">The core system: search, paid acquisition, and conversion.</figcaption></figure><section className="section"><div className="shell grid gap-20">{services.map((service, index) => <article id={service.slug} className="scroll-mt-28 grid gap-8 border-t border-[var(--ink)] pt-6 md:grid-cols-[1fr_3fr]" key={service.slug}><p className="eyebrow">0{index + 1}</p><div><h2 className="section-title">{service.title}</h2><p className="lede mt-6">{service.summary}</p><div className="mt-9 grid gap-8 md:grid-cols-2"><div><p className="eyebrow">Capabilities</p><ul className="mt-4">{service.capabilities.map((item) => <li className="border-t border-[var(--line)] py-3 text-sm" key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Expected value</p><p className="mt-4 leading-7 text-[var(--muted)]">{service.value}</p><Link className="text-link mt-6" href="/contact">Discuss this service <Arrow /></Link></div></div></div></article>)}</div></section><ContactCta /></>;
}
