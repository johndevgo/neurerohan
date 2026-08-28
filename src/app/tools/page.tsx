import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { StructuredData } from "@/components/structured-data";
import { PageIntro, SectionHeading } from "@/components/ui";
import { agencyAssets } from "@/content/agency-assets";
import { siteConfig } from "@/content/site";
import { marketingTools } from "@/content/tools";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Free SEO, Ads, CRO & Marketing Tools | GrowthLabs",
  "Use free SEO ROI, Google Ads, Meta Ads, conversion-rate, funnel, paid-media and UTM tools in your browser. No account or backend required.",
  "/tools",
);

function collectionSchema() {
  const url = `${siteConfig.domain}/tools`;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: "GrowthLabs free digital marketing tools", description: metadata.description, isPartOf: { "@id": `${siteConfig.domain}/#website` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#tools` }, inLanguage: "en-NP" },
    { "@type": "ItemList", "@id": `${url}#tools`, numberOfItems: marketingTools.length, itemListElement: marketingTools.map((tool, index) => ({ "@type": "ListItem", position: index + 1, name: tool.title, url: `${url}/${tool.slug}` })) },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.domain}/` }, { "@type": "ListItem", position: 2, name: "Tools", item: url }] },
  ] };
}

export default function ToolsPage() {
  return <>
    <PageIntro breadcrumbs={[{ label: "Tools" }]} eyebrow="Free tools / SEO · Ads · CRO · Analytics" title="Marketing calculators built to expose the assumptions." visual={agencyAssets.analytics}><p>Model SEO value, Google Ads break-even economics, Meta Ads budgets, conversion rates, funnel economics, paid-media delivery and campaign URLs. Every calculation stays in your browser and shows its formula, inputs and limitations.</p></PageIntro>
    <section className="section"><div className="shell"><SectionHeading eyebrow="Toolbox" title="Plan the economics before interpreting the dashboard." copy="These tools support a conversation and scenario comparison. They do not forecast rankings, traffic, leads, revenue or platform delivery." /><div className="mt-14 grid gap-0 border-b border-[var(--line-strong)] md:ml-[16%] sm:grid-cols-2">{marketingTools.map((tool, index) => { const visual = agencyAssets[tool.visual]; return <Link className="group flex flex-col border-t border-[var(--line-strong)] transition-colors hover:bg-[var(--sun)] sm:odd:border-r" href={`/tools/${tool.slug}`} key={tool.slug}><div className="aspect-[16/8] overflow-hidden border-b border-[var(--line)]"><Image className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" src={visual.src} alt="" width={visual.width} height={visual.height} sizes="(max-width: 640px) 100vw, 42vw" /></div><div className="flex flex-1 flex-col p-6"><p className="font-mono text-[.65rem] font-bold uppercase text-[var(--accent)]">0{index + 1} / Free browser tool</p><h2 className="mt-7 font-serif text-3xl leading-none tracking-[-.045em]">{tool.shortTitle}</h2><p className="mt-4 text-sm leading-6 text-[var(--muted)]">{tool.description}</p><span className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold">Use the tool <Arrow /></span></div></Link>; })}</div></div></section>
    <section className="section section-dark"><div className="shell grid gap-10 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Planning standard</p><div><h2 className="section-title">A precise output can still come from a weak assumption.</h2><div className="mt-10 grid gap-8 sm:grid-cols-3">{[["Use ranges", "Compare conservative, working and upside inputs instead of presenting one scenario as the future."], ["Use qualified definitions", "Define a lead, customer, conversion, margin and attribution window before using them in the model."], ["Reconcile later", "Compare scenarios with CRM, finance, sales and platform evidence after the work begins."]].map(([title, copy]) => <article className="border-t border-white/25 pt-4" key={title}><h2 className="font-serif text-2xl">{title}</h2><p className="mt-3 text-sm leading-6 text-white/60">{copy}</p></article>)}</div><Link className="button mt-10 border-white text-white hover:bg-[var(--sun)] hover:text-[var(--ink)]" href="/resources">Download planning resources <Arrow /></Link></div></div></section>
    <StructuredData data={collectionSchema()} />
  </>;
}
