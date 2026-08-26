import Link from "next/link";
import { Arrow } from "./icons";
import { PageIntro, SectionHeading } from "./ui";
import { PageStructuredData } from "./structured-data";
import { PaidMediaEvidence, SearchEvidence } from "./search-evidence";
import { GoogleBusinessMap } from "./google-business-map";
import { agencyAssets } from "@/content/agency-assets";
import type { AgencyAssetKey } from "@/content/agency-assets";
import type { CommercialLanding } from "@/content/landing-pages";
import { siteConfig } from "@/content/site";

const capabilityAnchors: Record<string, Record<string, string>> = {
  "hotel-digital-marketing-agency": {
    "Hotel SEO and destination demand": "hotel-seo",
    "Hotel website marketing": "website",
    "Google Ads": "advertising",
    "Meta and TikTok campaigns": "paid-social",
    "Local SEO and Google Business Profile": "local-seo",
    "Content and authentic social proof": "content",
    "Booking-conversion optimisation": "cro",
    "Analytics and tracking": "measurement",
  },
  "social-media-marketing-agency-in-nepal": {
    "Audience and channel strategy": "strategy",
    "Content pillars and campaigns": "content",
    "Creative direction": "creative",
    "Organic publishing system": "organic",
    "Meta and TikTok advertising": "paid-social",
    "Retargeting and lead generation": "retargeting",
    "Measurement and learning": "measurement",
  },
  "web-design-company-in-nepal": {
    "Discovery and website strategy": "discovery",
    "Keyword research and sitemap": "seo-architecture",
    "User journeys and information architecture": "ux",
    "Conversion-focused page planning": "cro",
    "Website content and on-page SEO": "content",
    "Responsive interface design": "responsive",
    "Landing pages": "landing-pages",
    "Analytics and launch readiness": "launch",
  },
  "seo-for-travel-agency": {
    "Travel keyword research": "keyword-research",
    "Destination and package architecture": "architecture",
    "Technical travel SEO": "technical-seo",
    "On-page SEO": "on-page-seo",
    "Travel content strategy": "content",
    "Local and source-market relevance": "source-markets",
    "Enquiry conversion": "cro",
  },
  "advertising-agency-in-nepal": {
    "Google Ads": "google-ads",
    "Meta Ads": "meta-ads",
    "TikTok Ads": "tiktok-ads",
    "Retargeting": "retargeting",
    "Performance creative": "creative",
    "Landing pages and CRO": "landing-pages",
    "Tracking and attribution setup": "measurement",
  },
  "google-ads-agency-in-nepal": {
    "Google Ads account audit": "account-audit",
    "Keyword and search-term strategy": "keyword-strategy",
    "Campaign architecture": "campaign-architecture",
    "Ads and assets": "ads-assets",
    "Landing-page alignment": "landing-pages",
    "Conversion tracking and lead quality": "measurement",
    "Bidding and budget control": "bidding-budget",
    "Optimisation and reporting": "optimisation",
  },
  "local-seo-services-in-nepal": {
    "Local visibility audit": "local-audit",
    "Google Business Profile optimisation": "google-business-profile",
    "Local keyword and page strategy": "local-pages",
    "Business information and citations": "citations",
    "Review and reputation workflow": "reviews",
    "Local on-page and technical SEO": "local-on-page",
    "Local authority and entity signals": "local-authority",
    "Calls, directions and enquiry measurement": "measurement",
  },
  "digital-marketing-agency-in-kathmandu": {
    "SEO and local search": "seo",
    "Google Ads": "google-ads",
    "Meta and TikTok advertising": "paid-social",
    "Social media marketing": "social",
    "Websites and landing pages": "websites",
    "Local SEO and Google Business Profile": "local-seo",
    "Analytics and CRO": "cro",
  },
  "meta-ads-agency-in-nepal": {
    "Meta Ads account audit": "account-audit",
    "Audience and funnel strategy": "audience-strategy",
    "Facebook and Instagram campaigns": "campaigns",
    "Performance creative system": "creative-testing",
    "Landing pages and Instant Forms": "destinations",
    "Pixel, events and attribution context": "measurement",
    "Lead-quality feedback": "lead-quality",
    "Optimisation and reporting": "optimisation",
  },
  "conversion-rate-optimization-services": {
    "Conversion and journey audit": "conversion-audit",
    "Offer and message clarity": "message-clarity",
    "Landing-page optimisation": "landing-pages",
    "Form and contact-path optimisation": "forms",
    "Mobile UX and accessibility": "mobile-ux",
    "Analytics and event planning": "measurement",
    "Research and evidence synthesis": "research",
    "Experiment and implementation roadmap": "experimentation",
  },
  "seo-audit-services-in-nepal": {
    "Discovery and baseline": "discovery",
    "Crawling and indexation": "indexation",
    "Technical SEO": "technical-seo",
    "Keyword and page architecture": "keyword-mapping",
    "On-page and entity relevance": "on-page-seo",
    "Internal linking": "internal-linking",
    "Local SEO and business entity": "local-seo",
    "Measurement and implementation roadmap": "roadmap",
  },
  "technical-seo-services-in-nepal": {
    "Technical discovery and crawl model": "technical-discovery",
    "Crawling and indexation analysis": "crawling-indexing",
    "Rendering and JavaScript review": "rendering",
    "Canonical and duplicate-URL control": "canonicals",
    "Architecture and internal discovery": "architecture",
    "Performance and mobile technical review": "performance",
    "Structured data and metadata validation": "structured-data",
    "Migration and implementation QA": "migration-qa",
  },
  "analytics-conversion-tracking-services": {
    "Measurement strategy and event taxonomy": "measurement-strategy",
    "GA4 architecture and review": "ga4",
    "Google Tag Manager implementation": "tag-manager-implementation",
    "Google Ads conversion measurement": "google-ads-conversions",
    "Meta and paid-social signals": "meta-signals",
    "Consent and data minimisation": "consent",
    "Campaign taxonomy and UTM governance": "utm-governance",
    "Validation and decision reporting": "validation-reporting",
  },
  "content-marketing-agency-in-nepal": {
    "Audience and decision research": "audience-research",
    "Keyword clustering and intent ownership": "keyword-clustering",
    "Topic and entity architecture": "topic-architecture",
    "SEO content briefs": "content-briefs",
    "Expert-led content development": "expert-content",
    "Commercial content and conversion copy": "commercial-content",
    "Editorial workflow and quality assurance": "editorial-workflow",
    "Distribution and performance review": "distribution-measurement",
  },
};

const commercialVisuals: Record<string, AgencyAssetKey> = {
  "hotel-digital-marketing-agency": "contentStrategy",
  "social-media-marketing-agency-in-nepal": "metaAds",
  "web-design-company-in-nepal": "userExperience",
  "seo-for-travel-agency": "seoServices",
  "social-media-marketing-packages": "contentStrategy",
  "advertising-agency-in-nepal": "googleAds",
  "google-ads-agency-in-nepal": "googleAds",
  "local-seo-services-in-nepal": "localSeo",
  "digital-marketing-agency-in-kathmandu": "growthSystem",
  "meta-ads-agency-in-nepal": "metaAds",
  "conversion-rate-optimization-services": "conversion",
  "seo-audit-services-in-nepal": "seoAudit",
  "technical-seo-services-in-nepal": "technicalSeo",
  "analytics-conversion-tracking-services": "analytics",
  "content-marketing-agency-in-nepal": "contentStrategy",
};

const capabilitySecondaryAnchors: Record<string, Record<string, string>> = {
  "digital-marketing-agency-in-kathmandu": {
    "SEO and local search": "local-seo",
  },
};

const processPosition: Record<string, number> = {
  "hotel-digital-marketing-agency": 2,
  "social-media-marketing-agency-in-nepal": 3,
  "web-design-company-in-nepal": 2,
  "seo-for-travel-agency": 2,
  "advertising-agency-in-nepal": 1,
  "google-ads-agency-in-nepal": 2,
  "local-seo-services-in-nepal": 2,
  "digital-marketing-agency-in-kathmandu": 2,
  "meta-ads-agency-in-nepal": 1,
  "conversion-rate-optimization-services": 1,
  "seo-audit-services-in-nepal": 1,
  "technical-seo-services-in-nepal": 1,
  "analytics-conversion-tracking-services": 1,
  "content-marketing-agency-in-nepal": 2,
};

function CapabilityRows({ page }: { page: CommercialLanding }) {
  return <div className="mt-16 border-b border-white/20">{page.capabilities.map((item, index) => <article id={capabilityAnchors[page.slug]?.[item.title]} className="scroll-mt-28 grid gap-5 border-t border-white/25 py-7 md:grid-cols-[5rem_minmax(12rem,.75fr)_1.25fr_1fr]" key={item.title}><p className="font-mono text-xs text-[var(--sun)]">0{index + 1}</p><h3 id={capabilitySecondaryAnchors[page.slug]?.[item.title]} className="scroll-mt-28 font-serif text-2xl leading-[1] tracking-[-.04em]">{item.title}</h3><p className="leading-7 text-white/65">{item.copy}</p><ul>{item.items.map((capability) => <li className="border-t border-white/15 py-2 font-mono text-[.7rem] uppercase tracking-[.04em] text-white/55" key={capability}>{capability}</li>)}</ul></article>)}</div>;
}

function EditorialSections({ sections, startIndex = 0 }: { sections: NonNullable<CommercialLanding["sections"]>; startIndex?: number }) {
  return <>{sections.map((section, index) => <section className={`section ${((index + startIndex) % 3 === 1) ? "bg-[var(--surface)]" : ""}`} key={section.title}><div className="shell"><SectionHeading eyebrow={section.eyebrow} title={section.title} copy={section.copy} /><div className="mt-12 md:ml-[25%]">{section.items.map((item, itemIndex) => <details className="editorial-disclosure group" open={itemIndex === 0} key={item.title}><summary className="grid grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-4 px-3 py-3"><span className="font-mono text-[.65rem] text-[var(--accent)]">{String(itemIndex + 1).padStart(2, "0")}</span><h3 className="font-serif text-xl leading-tight tracking-[-.035em]">{item.title}</h3><span aria-hidden="true" className="text-right text-[var(--accent)] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl px-3 pb-6 pl-[3.25rem] leading-7 text-[var(--muted)]">{item.copy}</p></details>)}</div></div></section>)}</>;
}

function ProcessSection({ page }: { page: CommercialLanding }) {
  return <section className="section signal-grid"><div className="shell"><SectionHeading eyebrow={page.labels?.processEyebrow ?? "Process"} title={page.labels?.processTitle ?? "Research first. Then focused execution."} /><ol className="mt-14 border-b border-[var(--ink)] md:ml-[25%]">{page.process.map((step, index) => <li className="grid gap-3 border-t border-[var(--ink)] py-6 sm:grid-cols-[4rem_1fr_2fr]" key={step.title}><span className="font-mono text-xs">0{index + 1}</span><h3 className="font-serif text-2xl leading-none tracking-[-.04em]">{step.title}</h3><p className="leading-7 text-black/65">{step.copy}</p></li>)}</ol></div></section>;
}

function SourcesSection({ sources }: { sources: NonNullable<CommercialLanding["sources"]> }) {
  return <section className="section bg-[var(--surface)]"><div className="shell"><SectionHeading eyebrow="Primary references" title="Platform facts linked to their original documentation." copy="These sources support the factual platform and search-system statements on this page. GrowthLabs interpretation, scope and recommendations remain clearly separate from platform documentation." /><div className="mt-12 border-b border-[var(--line-strong)] md:ml-[25%]">{sources.map((source, index) => <a className="grid gap-3 border-t border-[var(--line-strong)] p-5 transition-colors hover:bg-[var(--sun)] sm:grid-cols-[3rem_1fr_auto] sm:items-center" href={source.href} key={source.href} target="_blank" rel="noopener noreferrer"><span className="font-mono text-[.65rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><span><strong className="block">{source.label}</strong><span className="mt-1 block text-sm leading-6 text-[var(--muted)]">{source.publisher}{source.note ? ` · ${source.note}` : ""}</span></span><Arrow direction="up-right" /></a>)}</div></div></section>;
}

export function CommercialLandingPage({ page }: { page: CommercialLanding }) {
  const path = `/${page.slug}`;
  const primary = page.primaryCta ?? { label: siteConfig.cta.primary.headerLabel, href: siteConfig.cta.primary.href };
  const secondary = page.secondaryCta ?? { label: "Explore services", href: "/services" };
  const sections = page.sections ?? [];
  const splitAt = processPosition[page.slug] ?? sections.length;
  const beforeProcess = sections.slice(0, splitAt);
  const afterProcess = sections.slice(splitAt);
  const packagePage = page.archetype === "packages";
  const currentLabel = page.breadcrumbLabel ?? page.metaTitle.split(" | ")[0];
  const finalSecondary = page.finalSecondaryCta ?? { label: siteConfig.cta.whatsapp.label, href: siteConfig.cta.whatsapp.href, external: true };
  const visualKey = page.heroVisual ?? commercialVisuals[page.slug];

  return <>
    <PageIntro breadcrumbs={[{ label: "Services", href: "/services" }, { label: currentLabel }]} eyebrow={page.eyebrow} title={page.title} visual={visualKey ? agencyAssets[visualKey] : undefined}><p>{page.intro}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="button button-primary" href={primary.href} data-cta-intent={page.slug} data-cta-location="hero" data-cta-channel="contact">{primary.label} <Arrow /></Link><Link className="button" href={secondary.href} data-cta-intent={page.slug} data-cta-location="hero-secondary">{secondary.label} <Arrow /></Link></div>{page.microcopy && <p className="mt-4 font-mono text-[.7rem] uppercase leading-5 tracking-[.04em]">{page.microcopy}</p>}</PageIntro>

    {page.trust && <div className="signal-band"><ul className={`shell grid py-1 font-mono text-[.72rem] font-bold uppercase tracking-[.05em] sm:grid-cols-2 ${page.trust.length > 5 ? "lg:grid-cols-6" : "lg:grid-cols-5"}`}>{page.trust.map((item, index) => <li className="flex items-center gap-3 border-black/25 py-4 pr-4 lg:border-r lg:last:border-0 lg:pl-4 lg:first:pl-0" key={item}><span>0{index + 1}</span>{item}</li>)}</ul></div>}

    <section className="section"><div className="shell grid gap-8 md:grid-cols-[1fr_3fr]"><p className="eyebrow">{page.labels?.objective ?? "The objective"}</p><p className="max-w-4xl font-serif text-[clamp(2.7rem,5.5vw,6.4rem)] leading-[.93] tracking-[-.06em]">{page.promise}</p></div></section>

    {page.leadSections?.map((section) => <section className={`section ${packagePage ? "bg-[var(--surface)]" : ""}`} key={section.title}><div className="shell"><SectionHeading eyebrow={section.eyebrow} title={section.title} copy={section.copy} /><div className={`mt-14 grid gap-0 border-b border-[var(--line-strong)] md:ml-[25%] ${packagePage ? "md:grid-cols-3" : "md:grid-cols-2"}`}>{section.items.map((item, index) => <article id={packagePage ? item.title.toLowerCase() : undefined} className={`border-t border-[var(--line-strong)] p-6 ${packagePage ? "md:border-r md:last:border-r-0" : "md:odd:border-r"}`} key={item.title}><p className="font-mono text-[.65rem] text-[var(--accent)]">0{index + 1}</p><h3 className="mt-8 font-serif text-3xl leading-none tracking-[-.05em]">{item.title}</h3><p className="mt-5 leading-7 text-[var(--muted)]">{item.copy}</p></article>)}</div></div></section>)}

    <section className="section"><div className="shell"><SectionHeading eyebrow={page.labels?.challengesEyebrow ?? "What gets in the way"} title={page.labels?.challengesTitle ?? "Fix the system, not only the symptom."} /><div className="mt-14 grid gap-x-8 gap-y-10 md:ml-[25%] md:grid-cols-2">{page.challenges.map((item, index) => <article className="card grid grid-cols-[3rem_1fr] gap-4" key={item.title}><span className="font-mono text-[.65rem] text-[var(--accent)]">0{index + 1}</span><div><h3 className="font-serif text-2xl leading-none tracking-[-.04em]">{item.title}</h3><p className="mt-4 leading-7 text-[var(--muted)]">{item.copy}</p></div></article>)}</div></div></section>

    <section className="section section-dark" id="capabilities"><div className="shell"><SectionHeading eyebrow={page.labels?.capabilitiesEyebrow ?? "Capabilities"} title={page.labels?.capabilitiesTitle ?? "The right parts, working together."} /><CapabilityRows page={page} /><div className="mt-12"><Link className="button border-white text-white hover:bg-[var(--sun)] hover:text-[var(--ink)]" href={primary.href} data-cta-intent={page.slug} data-cta-location="capabilities" data-cta-channel="contact">{primary.label} <Arrow /></Link></div></div></section>

    <section className="section signal-field"><div className="shell"><SectionHeading eyebrow={page.labels?.outcomesEyebrow ?? "What the work creates"} title={page.labels?.outcomesTitle ?? "A clearer foundation for growth."} /><div className="mt-12 grid border-b border-[var(--ink)] md:ml-[25%] sm:grid-cols-2">{page.outcomes.map((item, index) => <p className="flex min-h-32 items-end border-t border-[var(--ink)] py-5 pr-8 font-serif text-2xl leading-none tracking-[-.04em] sm:odd:border-r sm:odd:pl-0 sm:even:pl-6" key={item}><span className="mr-4 font-mono text-[.6rem] font-normal tracking-normal">0{index + 1}</span>{item}</p>)}</div></div></section>

    {page.slug === "advertising-agency-in-nepal" && <PaidMediaEvidence
      compact
      ids={["london-home-services-ads", "saas-google-ads", "uk-medical-program-ads"]}
      title="Three Google Ads accounts. Visible scale, efficiency and optimisation context."
      copy="The supplied Google Ads captures cover home services, SaaS and a medical programme. Their periods, clicks and configured conversion metrics remain visible and prominent. The third capture deliberately includes mixed comparison signals: paid-media expertise means diagnosing inefficiency, not presenting every large number as a win."
    />}

    {page.slug === "google-ads-agency-in-nepal" && <PaidMediaEvidence
      compact
      ids={["london-home-services-ads", "saas-google-ads", "uk-medical-program-ads"]}
      eyebrow="Google Ads evidence / supplied account captures"
      title="Three Google Ads accounts, with the visible numbers and context left intact."
      copy="The supplied captures show separate home-services, SaaS and medical-programme accounts across their stated reporting periods. They provide inspectable evidence of account scale, clicks, cost and configured conversion data. The medical capture includes mixed comparison signals, so it is presented as diagnostic context rather than a success claim."
    />}

    {page.slug === "seo-for-travel-agency" && <SearchEvidence
      compact
      ids={["dubai-tours", "dubai-water-adventure"]}
      eyebrow="Travel-search evidence / source captures"
      title="Two tourism websites. Two distinct demand patterns."
      copy="The supplied Search Console captures make the visible organic-search layer inspectable for a tours website and a water-adventure rental website. They support a conversation about travel SEO execution—not a promise about rankings, enquiries or revenue."
    />}

    <EditorialSections sections={beforeProcess} />
    <ProcessSection page={page} />
    {page.sources?.length ? <SourcesSection sources={page.sources} /> : null}
    <EditorialSections sections={afterProcess} startIndex={beforeProcess.length} />

    {page.archetype === "location" && <section className="section bg-[var(--surface)]">
      <div className="shell">
        <SectionHeading
          eyebrow="Local presence / Bhaktapur"
          title={page.slug === "local-seo-services-in-nepal" ? "Verify the real business entity behind the local SEO work." : "A real Bhaktapur base for work across Kathmandu Valley."}
          copy={page.slug === "local-seo-services-in-nepal" ? "GrowthLabs uses its real Sallaghari, Bhaktapur business context. The map verifies that listed location; it is not evidence of rankings and does not imply separate offices elsewhere in Nepal." : "GrowthLabs operates from Sallaghari, Bhaktapur and supports businesses across Kathmandu Valley. Use the map to verify the business location, then confirm whether an online appointment or appropriate on-site meeting is the better fit."}
        />
        <div className="mt-12 md:ml-[25%]">
          <GoogleBusinessMap note={page.slug === "local-seo-services-in-nepal" ? "GrowthLabs by Rohan Neure · Sallaghari Shopping Complex, Bhaktapur 44800, Nepal. One real listed location; no fictional branch claims." : "Sallaghari Shopping Complex, Bhaktapur—serving businesses across Kathmandu, Lalitpur, Bhaktapur and the wider Kathmandu Valley."} />
        </div>
      </div>
    </section>}

    <section className="section"><div className="shell"><SectionHeading eyebrow="Related expertise" title="Continue with the most relevant path." /><div className="mt-10 grid gap-0 border-b border-[var(--line-strong)] md:ml-[25%] sm:grid-cols-2">{page.related.map((link) => <Link className="flex min-h-20 items-center justify-between border-t border-[var(--line-strong)] py-4 pr-5 font-bold hover:bg-[var(--sun)]" href={link.href} key={link.href}>{link.label} <Arrow /></Link>)}</div></div></section>

    <section className="section bg-[var(--surface)]"><div className="shell"><SectionHeading eyebrow={page.labels?.faqEyebrow ?? "FAQ"} title={page.labels?.faqTitle ?? "Useful answers before we talk."} /><div className="mt-14 border-b border-[var(--line-strong)] md:ml-[25%]">{page.faqs.map((item, index) => <details className="group border-t border-[var(--line-strong)] py-5" key={item.question}><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl leading-tight tracking-[-.03em]"><span><span className="mr-4 align-top font-mono text-[.6rem] font-normal tracking-normal text-[var(--accent)]">0{index + 1}</span>{item.question}</span><span aria-hidden="true" className="text-[var(--accent)] transition-transform group-open:rotate-45">+</span></summary><p className="prose-copy mt-4 pl-10 pr-8">{item.answer}</p></details>)}</div></div></section>

    {page.finalCta && <section className="section signal-grid"><div className="shell grid gap-8 md:grid-cols-[1fr_3fr]"><p className="eyebrow">{page.finalCta.eyebrow}</p><div><h2 className="section-title">{page.finalCta.title}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">{page.finalCta.copy}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="button button-primary" href={primary.href} data-cta-intent={page.slug} data-cta-location="final" data-cta-channel="contact">{primary.label} <Arrow /></Link>{finalSecondary.external ? <a className="button" href={finalSecondary.href} target={finalSecondary.href.startsWith("http") ? "_blank" : undefined} rel={finalSecondary.href.startsWith("http") ? "noopener noreferrer" : undefined} data-cta-intent={page.slug} data-cta-location="final" data-cta-channel={finalSecondary.href.startsWith("https://wa.me") ? "whatsapp" : "email"}>{finalSecondary.label} <Arrow direction="up-right" /></a> : <Link className="button" href={finalSecondary.href} data-cta-intent={page.slug} data-cta-location="final-secondary">{finalSecondary.label} <Arrow /></Link>}</div><p className="mt-5 font-mono text-[.7rem] uppercase leading-5 tracking-[.04em] text-black/60">{siteConfig.cta.reassurance}</p>{page.archetype === "location" && <address className="mt-8 grid gap-1 border-t border-black/35 pt-5 font-mono text-[.68rem] not-italic uppercase tracking-[.05em]"><strong>{siteConfig.brandName}</strong><span>{siteConfig.location}</span><span>{siteConfig.phoneDisplay} · {siteConfig.email}</span></address>}</div></div></section>}
    <PageStructuredData path={path} faqs={page.faqs} />
  </>;
}
