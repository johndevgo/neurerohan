import Link from "next/link";
import { Arrow } from "@/components/icons";
import { StructuredData } from "@/components/structured-data";
import { PageIntro, SectionHeading } from "@/components/ui";
import { agencyAssets } from "@/content/agency-assets";
import { glossaryTerms } from "@/content/knowledge";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Digital Marketing Glossary | SEO, Ads & Analytics Terms",
  "A practical digital marketing glossary defining SEO, PPC, CRO, Google Ads, Meta Ads, analytics, local search and conversion terminology.",
  "/insights/glossary",
);

const groupedTerms = Object.entries(Object.groupBy(glossaryTerms, (item) => item.term[0].toUpperCase())).sort(([a], [b]) => a.localeCompare(b));

function glossarySchema() {
  const url = `${siteConfig.domain}/insights/glossary`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "DefinedTermSet", "@id": `${url}#terms`, url, name: "GrowthLabs digital marketing glossary", description: metadata.description, hasDefinedTerm: glossaryTerms.map((item) => ({ "@type": "DefinedTerm", name: item.term, alternateName: item.abbreviation, description: item.definition, inDefinedTermSet: { "@id": `${url}#terms` } })) },
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: "Digital marketing glossary", isPartOf: { "@id": `${siteConfig.domain}/#website` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#terms` }, inLanguage: "en-NP" },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.domain}/` }, { "@type": "ListItem", position: 2, name: "Insights", item: `${siteConfig.domain}/insights` }, { "@type": "ListItem", position: 3, name: "Glossary", item: url }] },
    ],
  };
}

export default function GlossaryPage() {
  return <>
    <PageIntro breadcrumbs={[{ label: "Insights", href: "/insights" }, { label: "Glossary" }]} eyebrow="Glossary / SEO · Ads · Analytics · CRO" title="Digital marketing terms translated into practical decisions." visual={agencyAssets.contentStrategy}><p>This glossary defines the language used across SEO, paid media, local search, websites, analytics and conversion work. Each term includes the formal idea and the practical caution that prevents a metric or acronym from being mistaken for a business outcome.</p></PageIntro>
    <div className="signal-band"><nav aria-label="Glossary letters" className="shell flex flex-wrap gap-2 py-4">{groupedTerms.map(([letter]) => <a className="grid h-10 w-10 place-items-center border border-black/35 font-mono text-sm font-bold hover:bg-black hover:text-white" href={`#letter-${letter.toLowerCase()}`} key={letter}>{letter}</a>)}</nav></div>
    <section className="section"><div className="shell"><SectionHeading eyebrow={`${glossaryTerms.length} defined terms`} title="Use the definition. Keep the commercial context." copy="Terminology differs across platforms and teams. Agree definitions before comparing reports, setting targets or evaluating an agency." /><div className="mt-14 md:ml-[16%]">{groupedTerms.map(([letter, terms]) => <section className="scroll-mt-28 border-t border-[var(--ink)] py-8 md:grid md:grid-cols-[7rem_minmax(0,1fr)]" id={`letter-${letter.toLowerCase()}`} key={letter}><h2 className="font-serif text-6xl leading-none text-[var(--accent)]">{letter}</h2><dl className="grid gap-0 sm:grid-cols-2">{terms?.map((item) => <div className="border-t border-[var(--line)] p-5 sm:odd:border-r" key={item.term}><dt className="font-serif text-2xl leading-none tracking-[-.04em]">{item.term}{item.abbreviation && <span className="ml-2 font-mono text-xs font-normal text-[var(--accent)]">({item.abbreviation})</span>}</dt><dd className="mt-4 text-sm leading-6 text-[var(--muted)]"><p>{item.definition}</p><p className="mt-3 border-l-2 border-[var(--sun)] pl-3 text-[var(--ink)]"><strong>In practice:</strong> {item.practicalMeaning}</p>{item.href && <Link className="text-link mt-4" href={item.href}>Explore the topic <Arrow /></Link>}</dd></div>)}</dl></section>)}</div></div></section>
    <StructuredData data={glossarySchema()} />
  </>;
}
