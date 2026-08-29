import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/icons";
import { MarketingToolCalculator } from "@/components/marketing-tool";
import { StructuredData } from "@/components/structured-data";
import { PageIntro, SectionHeading } from "@/components/ui";
import { agencyAssets } from "@/content/agency-assets";
import { siteConfig } from "@/content/site";
import { marketingToolBySlug, marketingTools } from "@/content/tools";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() { return marketingTools.map((tool) => ({ slug: tool.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = marketingToolBySlug[slug];
  if (!tool) return {};
  return pageMetadata(tool.metaTitle, tool.description, `/tools/${tool.slug}`);
}

function toolSchema(slug: string) {
  const tool = marketingToolBySlug[slug];
  const url = `${siteConfig.domain}/tools/${slug}`;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: tool.title, description: tool.description, isPartOf: { "@id": `${siteConfig.domain}/#website` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#software` }, inLanguage: "en-NP" },
    { "@type": "SoftwareApplication", "@id": `${url}#software`, name: tool.title, description: tool.description, url, applicationCategory: "BusinessApplication", operatingSystem: "Web browser", browserRequirements: "JavaScript enabled", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", url }, author: { "@id": `${siteConfig.domain}/#rohan-neure` }, publisher: { "@id": `${siteConfig.domain}/#organization` } },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: tool.faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.domain}/` }, { "@type": "ListItem", position: 2, name: "Tools", item: `${siteConfig.domain}/tools` }, { "@type": "ListItem", position: 3, name: tool.shortTitle, item: url }] },
  ] };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = marketingToolBySlug[slug];
  if (!tool) notFound();
  const visual = agencyAssets[tool.visual];
  return <>
    <PageIntro breadcrumbs={[{ label: "Tools", href: "/tools" }, { label: tool.shortTitle }]} eyebrow={tool.eyebrow} title={tool.title} visual={visual}><p>{tool.answer}</p><a className="button button-primary mt-8" href="#calculator">Use the calculator <Arrow /></a><p className="mt-4 font-mono text-[.68rem] uppercase leading-5">Free · No account · Inputs stay in your browser</p></PageIntro>
    <section className="section" id="calculator"><div className="shell"><SectionHeading eyebrow="Interactive tool" title="Change the assumptions. Compare the scenario." copy="Enter non-sensitive planning values. The output updates in your browser and is not sent to GrowthLabs." /><div className="mt-12 md:ml-[8%]"><MarketingToolCalculator kind={tool.kind} /></div></div></section>
    <section className="section bg-[var(--surface)]"><div className="shell grid gap-10 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Formula and inputs</p><div><h2 className="section-title">Know what the result actually represents.</h2><p className="mt-7 max-w-3xl border-l-4 border-[var(--sun)] bg-[var(--paper-deep)] p-5 text-lg font-semibold leading-8">{tool.formula}</p><div className="mt-10 grid gap-8 sm:grid-cols-2"><article><h3 className="font-serif text-2xl">Inputs used</h3><ul className="mt-4 border-b border-[var(--line)]">{tool.inputs.map((item) => <li className="border-t border-[var(--line)] py-3" key={item}>{item}</li>)}</ul></article><article><h3 className="font-serif text-2xl">Important cautions</h3><ul className="mt-4 border-b border-[var(--line)]">{tool.cautions.map((item) => <li className="grid grid-cols-[1.5rem_1fr] border-t border-[var(--line)] py-3" key={item}><span className="text-[var(--accent)]">+</span>{item}</li>)}</ul></article></div></div></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="Decision context" title="A calculator is useful when it improves the next decision." copy="Use this free planning model to make assumptions visible, compare scenarios and identify which input deserves validation before budget, campaign or conversion decisions are made." /><div className="decision-grid mt-12 md:ml-[16%]"><article><p className="eyebrow">Model</p><h2>Start with defensible inputs</h2><p>Use recent, relevant business or platform data where possible. Label estimates clearly so the result is not mistaken for measured performance.</p></article><article><p className="eyebrow">Compare</p><h2>Change one assumption at a time</h2><p>Compare a baseline with one or two realistic scenarios. This makes the commercial effect of each rate, cost or volume assumption easier to understand.</p></article><article><p className="eyebrow">Validate</p><h2>Return to real performance data</h2><p>Use Google Ads, Meta Ads, GA4, CRM, sales or finance data to test whether the scenario reflects qualified enquiries, customers and actual economics.</p></article></div></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="How to use the output" title="Move from arithmetic to a better decision." /><ol className="mt-12 border-b border-[var(--line-strong)] md:ml-[25%]">{tool.steps.map((step, index) => <li className="grid gap-3 border-t border-[var(--line-strong)] py-6 sm:grid-cols-[4rem_1fr_2fr]" key={step.title}><span className="font-mono text-xs text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><h2 className="font-serif text-2xl leading-none">{step.title}</h2><p className="leading-7 text-[var(--muted)]">{step.copy}</p></li>)}</ol></div></section>
    <section className="section bg-[var(--surface)]"><div className="shell"><SectionHeading eyebrow="Tool questions" title="Definitions and limits, answered." /><div className="mt-12 border-b border-[var(--line-strong)] md:ml-[25%]">{tool.faqs.map((item, index) => <details className="editorial-disclosure group" open={index === 0} key={item.question}><summary className="grid grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-4 px-3 py-3"><span className="font-mono text-[.65rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><h2 className="font-serif text-xl leading-tight">{item.question}</h2><span aria-hidden="true" className="text-right text-[var(--accent)] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl px-3 pb-6 pl-[3.25rem] leading-7 text-[var(--muted)]">{item.answer}</p></details>)}</div></div></section>
    <section className="section signal-grid"><div className="shell grid gap-8 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Continue with context</p><div><h2 className="section-title">Use the scenario to ask a sharper growth question.</h2><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="button button-primary" href="/contact">Discuss your scenario <Arrow /></Link><Link className="button" href="/tools">All free tools <Arrow /></Link></div><div className="mt-10 grid border-b border-black/35 sm:grid-cols-2">{tool.related.map((item) => <Link className="flex min-h-16 items-center justify-between border-t border-black/35 py-3 pr-4 font-bold hover:bg-[var(--sun)] sm:odd:border-r sm:odd:px-4" href={item.href} key={item.href}>{item.label}<Arrow /></Link>)}</div></div></div></section>
    <StructuredData data={toolSchema(tool.slug)} />
  </>;
}
