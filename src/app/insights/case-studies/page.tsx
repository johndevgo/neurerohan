import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PaidMediaEvidence, SearchEvidence } from "@/components/search-evidence";
import { StructuredData } from "@/components/structured-data";
import { PageIntro, SectionHeading } from "@/components/ui";
import { agencyAssets } from "@/content/agency-assets";
import { resultHighlights, siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "SEO & Google Ads Case Studies | GrowthLabs Evidence",
  "Explore our SEO and Google Ads results across travel, HVAC, SaaS and home services. Inspect the original screenshots, reporting periods and platform metrics.",
  "/insights/case-studies",
);

function collectionSchema() {
  const url = `${siteConfig.domain}/insights/case-studies`;
  const items = [...siteConfig.proofImages, ...siteConfig.paidProofImages];
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: "GrowthLabs SEO and Google Ads case-study evidence", description: metadata.description, isPartOf: { "@id": `${siteConfig.domain}/#website` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#evidence` }, inLanguage: "en-NP" },
    { "@type": "ItemList", "@id": `${url}#evidence`, numberOfItems: items.length, itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.caption, image: `${siteConfig.domain}${item.src}` })) },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.domain}/` }, { "@type": "ListItem", position: 2, name: "Insights", item: `${siteConfig.domain}/insights` }, { "@type": "ListItem", position: 3, name: "Case studies", item: url }] },
  ] };
}

export default function CaseStudiesPage() {
  return <>
    <PageIntro breadcrumbs={[{ label: "Insights", href: "/insights" }, { label: "Case studies" }]} eyebrow="Our work / SEO and Google Ads" title="Real accounts. Visible results. The evidence behind our work." visual={agencyAssets.analytics}><p>Explore our organic search and paid-media results across travel, HVAC, SaaS, home services and other business contexts. Inspect the original Google Search Console and Google Ads screenshots, with each account&apos;s reporting period and metric definitions preserved.</p><a className="button button-primary mt-6" href="#search-results">Explore our SEO results <Arrow /></a><Link className="knowledge-secondary-link" href="/contact">Discuss your growth opportunity <Arrow /></Link></PageIntro>
    <section className="section"><div className="shell"><SectionHeading eyebrow="Selected results" title="Search visibility and paid acquisition, with the detail that matters." copy="Compare the account context, time period and outcome definition before comparing the numbers. Each capture below remains intact so you can inspect the underlying view." /><div className="result-highlights">{resultHighlights.map((result) => <article key={result.id}><p>{result.caption}</p><h3>{result.value}</h3><span>{result.label}{result.supporting && <><br />{result.supporting}</>}</span><Link href={result.href}>{result.action} <Arrow /></Link></article>)}</div><p className="result-context">These are separate account captures, not a combined performance total. Google Ads conversions retain the configuration and attribution used in the source account.</p></div></section>
    <div id="search-results" className="scroll-mt-28" />
    <SearchEvidence eyebrow="Our SEO results / Google Search Console" title="Organic search performance across six account views." copy="Explore search visibility for an Australian marketing agency, Dubai travel businesses, Texas HVAC and two further organic-search properties. Each screenshot keeps its own clicks, impressions and reporting period visible so you can inspect the detail." />
    <PaidMediaEvidence eyebrow="Our paid-media results / Google Ads" title="Google Ads performance across three business contexts." copy="Inspect London home services, SaaS and a UK medical programme. Review spend, click costs and configured conversions in the original account view, with the visible comparison context retained." ids={["london-home-services-ads", "saas-google-ads", "uk-medical-program-ads"]} />
    <section className="section signal-grid"><div className="shell grid gap-8 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Your baseline</p><div><h2 className="section-title">Build the next case study from definitions agreed before the work.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">Share your website, priority offer and target market. We will connect the opportunity to a clear implementation scope, meaningful measurement and the next growth priority.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="button button-primary" href="/contact">Request a growth review <Arrow /></Link><Link className="button" href="/resources/digital-marketing-brief-template">Prepare your brief <Arrow /></Link></div></div></div></section>
    <StructuredData data={collectionSchema()} />
  </>;
}
