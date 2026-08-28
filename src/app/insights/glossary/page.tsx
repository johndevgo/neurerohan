import { GlossaryExplorer } from "@/components/glossary-explorer";
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
    <section className="section"><div className="shell"><SectionHeading eyebrow={`${glossaryTerms.length} defined terms`} title="Use the definition. Keep the commercial context." copy="This structured reference spans SEO, paid media, social media, content, email, analytics, martech, local search, ecommerce and conversion. Terminology changes across platforms, so definitions should be confirmed before reports or targets are compared." /><div className="mt-12"><GlossaryExplorer terms={glossaryTerms} /></div></div></section>
    <StructuredData data={glossarySchema()} />
  </>;
}
