import { GlossaryExplorer } from "@/components/glossary-explorer";
import { StructuredData } from "@/components/structured-data";
import { PageIntro, SectionHeading } from "@/components/ui";
import { agencyAssets } from "@/content/agency-assets";
import { glossaryTerms } from "@/content/knowledge";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { termAnchor } from "@/lib/glossary";

export const metadata = pageMetadata(
  "Digital Marketing Glossary | SEO, Ads & Analytics Terms",
  "A practical digital marketing glossary defining SEO, PPC, CRO, Google Ads, Meta Ads, analytics, local search and conversion terminology.",
  "/insights/glossary",
);

function glossarySchema() {
  const url = `${siteConfig.domain}/insights/glossary`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "DefinedTermSet", "@id": `${url}#terms`, url, name: "GrowthLabs digital marketing glossary", description: metadata.description, hasDefinedTerm: glossaryTerms.map((item) => ({ "@type": "DefinedTerm", "@id": `${url}#${termAnchor(item.term)}`, url: `${url}#${termAnchor(item.term)}`, name: item.term, alternateName: item.abbreviation, description: `${item.definition} In practice: ${item.practicalMeaning}`, inDefinedTermSet: { "@id": `${url}#terms` } })) },
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: "Digital marketing glossary", isPartOf: { "@id": `${siteConfig.domain}/#website` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#terms` }, inLanguage: "en-NP" },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.domain}/` }, { "@type": "ListItem", position: 2, name: "Insights", item: `${siteConfig.domain}/insights` }, { "@type": "ListItem", position: 3, name: "Glossary", item: url }] },
    ],
  };
}

export default function GlossaryPage() {
  return <>
    <PageIntro breadcrumbs={[{ label: "Insights", href: "/insights" }, { label: "Glossary" }]} eyebrow="Glossary / SEO · Ads · Analytics · CRO" title="Digital marketing terms translated into practical decisions." visual={agencyAssets.contentStrategy}><p>This glossary defines the language used across SEO, paid media, local search, websites, analytics and conversion work. Each term includes the formal idea and the practical caution that prevents a metric or acronym from being mistaken for a business outcome.</p></PageIntro>
    <nav className="shell glossary-topic-paths" aria-label="Start with a marketing topic">{[["Understand SEO", "/insights/what-is-seo"], ["Measure paid media", "/tools/cpc-cpm-ctr-calculator"], ["Plan conversion improvements", "/insights/landing-page-conversion-optimization-guide"], ["Understand attribution", "/insights/marketing-attribution-ga4-guide"]].map(([label, href]) => <Link key={href} href={href}>{label} ↗</Link>)}</nav>
    <section className="section"><div className="shell"><SectionHeading eyebrow={`${glossaryTerms.length} defined terms`} title="Use the definition. Keep the commercial context." copy="This structured reference spans SEO, paid media, social media, content, email, analytics, martech, local search, ecommerce and conversion. Terminology changes across platforms, so definitions should be confirmed before reports or targets are compared." /><div className="mt-12"><GlossaryExplorer terms={glossaryTerms} /></div></div></section>
    <section className="section"><div className="shell knowledge-reference"><h2>Go to the source when a platform definition matters.</h2><p>Use this reference to understand a term, then confirm configuration-specific behavior before setting a campaign goal or comparing reports.</p><ul><li><a href="https://support.google.com/analytics/answer/12195621?hl=en" target="_blank" rel="noopener noreferrer">Google Analytics: engagement and bounce rate ↗</a></li><li><a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">Google web.dev: Core Web Vitals ↗</a></li><li><a href="https://developers.google.com/search/docs/crawling-indexing/block-indexing" target="_blank" rel="noopener noreferrer">Google Search Central: noindex directives ↗</a></li></ul></div></section>
    <StructuredData data={glossarySchema()} />
  </>;
}
