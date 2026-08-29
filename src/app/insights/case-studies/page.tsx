import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PaidMediaEvidence, SearchEvidence } from "@/components/search-evidence";
import { StructuredData } from "@/components/structured-data";
import { PageIntro, SectionHeading } from "@/components/ui";
import { agencyAssets } from "@/content/agency-assets";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "SEO & Google Ads Case Studies | GrowthLabs Evidence",
  "Inspect anonymised SEO and Google Ads performance evidence with visible source periods, platform metrics, limitations and responsible interpretation.",
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
    <PageIntro breadcrumbs={[{ label: "Insights", href: "/insights" }, { label: "Case studies" }]} eyebrow="Case studies / Inspectable platform evidence" title="SEO and Google Ads case studies with the numbers, period and limitations left visible." visual={agencyAssets.analytics}><p>These anonymised SEO and Google Ads case-study records use the screenshots supplied for GrowthLabs. They show platform-reported visibility, clicks, costs and configured conversions. They do not convert those signals into unsupported claims about customers, revenue, rankings or causation.</p></PageIntro>
    <section className="section"><div className="shell"><SectionHeading eyebrow="How to read this library" title="A screenshot is evidence, not a complete case study by itself." copy="A complete case study should document the baseline, role, intervention, timing, external conditions, outcome definition and permission to disclose. Until that context is supplied, these records remain transparent performance notes." /><div className="mt-12 grid gap-7 md:ml-[25%] sm:grid-cols-3">{[["Visible source", "The platform interface, date range and displayed metrics remain inspectable."], ["Bounded language", "A configured conversion is labelled as reported, not silently renamed as a customer or sale."], ["No guaranteed transfer", "Performance in one market or account does not guarantee the same result for another business."]].map(([title, copy]) => <article className="card" key={title}><h2 className="font-serif text-2xl">{title}</h2><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{copy}</p></article>)}</div></div></section>
    <SearchEvidence eyebrow="SEO performance notes / Google Search Console" title="Organic search visibility across six distinct supplied account captures." copy="The evidence includes an Australian marketing agency, Dubai travel properties, Texas HVAC and two additional supplied organic-search properties. Every card preserves the visible reporting period and interface context; these are account captures, not universal ranking or revenue promises." />
    <PaidMediaEvidence eyebrow="Paid-media performance notes / Google Ads" title="Three supplied Google Ads captures with different commercial contexts." copy="The source views cover London home services, SaaS and a UK medical programme. The metrics retain their platform wording; mixed comparison signals are disclosed rather than edited into a success story." ids={["london-home-services-ads", "saas-google-ads", "uk-medical-program-ads"]} />
    <section className="section signal-grid"><div className="shell grid gap-8 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Your baseline</p><div><h2 className="section-title">Build the next case study from definitions agreed before the work.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">GrowthLabs can define the commercial question, platform signals, qualified outcome, reporting boundaries and evidence required before implementation begins.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="button button-primary" href="/contact">Request a growth review <Arrow /></Link><Link className="button" href="/resources/digital-marketing-brief-template">Prepare your brief <Arrow /></Link></div></div></div></section>
    <StructuredData data={collectionSchema()} />
  </>;
}
