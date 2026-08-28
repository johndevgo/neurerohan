import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { StructuredData } from "@/components/structured-data";
import { PageIntro, SectionHeading } from "@/components/ui";
import { agencyAssets } from "@/content/agency-assets";
import { resources } from "@/content/knowledge";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Free Digital Marketing Resources | GrowthLabs Templates",
  "Download practical SEO, Google Ads, Meta Ads, local search, CRO, website launch and digital marketing planning templates from GrowthLabs.",
  "/resources",
);

function collectionSchema() {
  const url = `${siteConfig.domain}/resources`;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: "GrowthLabs digital marketing resources", description: metadata.description, isPartOf: { "@id": `${siteConfig.domain}/#website` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#resources` }, inLanguage: "en-NP" },
    { "@type": "ItemList", "@id": `${url}#resources`, numberOfItems: resources.length + 1, itemListElement: [...resources.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `${url}/${item.slug}` })), { "@type": "ListItem", position: resources.length + 1, name: "Social media content calendar", url: `${siteConfig.domain}/insights/social-media-content-calendar` }] },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.domain}/` }, { "@type": "ListItem", position: 2, name: "Resources", item: url }] },
  ] };
}

export default function ResourcesPage() {
  return <>
    <PageIntro breadcrumbs={[{ label: "Resources" }]} eyebrow="Free resources / Templates · Checklists · Planning systems" title="Useful marketing resources you can put to work today." visual={agencyAssets.contentStrategy}><p>Download practical GrowthLabs templates for SEO, Google Ads, Meta Ads, local search, CRO, website launches and campaign planning. Every resource is editable, free to use internally and designed to improve the next decision—not capture an email address.</p></PageIntro>
    <section className="section"><div className="shell"><SectionHeading eyebrow="Download library" title="No gate. No fake scarcity. Just working files." copy="Open each resource to understand what it includes, how to use it and which strategic decision it supports." /><div className="mt-14 grid gap-0 border-b border-[var(--line-strong)] md:ml-[16%] sm:grid-cols-2">{resources.map((item) => { const visual = agencyAssets[item.asset]; return <Link className="group flex flex-col border-t border-[var(--line-strong)] transition-colors hover:bg-[var(--sun)] sm:odd:border-r" href={`/resources/${item.slug}`} key={item.slug}><div className="aspect-[16/8] overflow-hidden border-b border-[var(--line)]"><Image className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" src={visual.src} alt="" width={visual.width} height={visual.height} sizes="(max-width: 640px) 100vw, 42vw" /></div><div className="flex flex-1 flex-col p-6"><p className="eyebrow">{item.download.format} / Free download</p><h2 className="mt-7 font-serif text-3xl leading-none tracking-[-.045em]">{item.shortTitle}</h2><p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.description}</p><span className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold">Inspect the resource <Arrow /></span></div></Link>; })}<Link className="group flex min-h-80 flex-col border-t border-[var(--line-strong)] p-6 transition-colors hover:bg-[var(--sun)] sm:odd:border-r" href="/insights/social-media-content-calendar"><p className="eyebrow">CSV / Free download</p><h2 className="mt-8 font-serif text-3xl leading-none tracking-[-.045em]">Social media content calendar</h2><p className="mt-4 text-sm leading-6 text-[var(--muted)]">Plan goals, funnel stages, formats, owners, calls to action, distribution and measurement with the original GrowthLabs calendar.</p><span className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold">Open the guide and template <Arrow /></span></Link></div></div></section>
    <section className="section section-dark"><div className="shell grid gap-8 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Use responsibly</p><div><h2 className="section-title">A checklist supports judgment. It does not replace it.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">Adapt every file to the website, market, platform, legal context and operating reality. A completed row is not proof that an issue matters; preserve the evidence and reasoning behind each decision.</p><Link className="button mt-8 border-white text-white hover:bg-[var(--sun)] hover:text-[var(--ink)]" href="/tools">Use the free marketing tools <Arrow /></Link></div></div></section>
    <StructuredData data={collectionSchema()} />
  </>;
}
