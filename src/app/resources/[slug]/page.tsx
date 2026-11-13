import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/icons";
import { StructuredData } from "@/components/structured-data";
import { PageIntro, SectionHeading } from "@/components/ui";
import { agencyAssets } from "@/content/agency-assets";
import { resourceBySlug, resources } from "@/content/knowledge";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { ResourceFieldGuide } from "@/components/knowledge-details";
import { resourceWorkflows } from "@/content/knowledge-workflows";
import { downloadPreview } from "@/lib/download-preview";

export function generateStaticParams() { return resources.map((resource) => ({ slug: resource.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourceBySlug[slug];
  if (!resource) return {};
  return pageMetadata(`${resource.shortTitle} | Free GrowthLabs Template`, resource.description, `/resources/${resource.slug}`);
}

function resourceSchema(slug: string) {
  const resource = resourceBySlug[slug];
  const url = `${siteConfig.domain}/resources/${slug}`;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": `${url}#webpage`, url, name: resource.title, description: resource.description, isPartOf: { "@id": `${siteConfig.domain}/#website` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#resource` }, inLanguage: "en-NP" },
    { "@type": "CreativeWork", "@id": `${url}#resource`, name: resource.title, description: resource.description, url, encodingFormat: "text/csv", encoding: { "@type": "MediaObject", contentUrl: `${siteConfig.domain}${resource.download.href}`, encodingFormat: "text/csv" }, isAccessibleForFree: true, author: { "@id": `${siteConfig.domain}/#rohan-neure` }, publisher: { "@id": `${siteConfig.domain}/#organization` } },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: resource.faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.domain}/` }, { "@type": "ListItem", position: 2, name: "Resources", item: `${siteConfig.domain}/resources` }, { "@type": "ListItem", position: 3, name: resource.shortTitle, item: url }] },
  ] };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resourceBySlug[slug];
  if (!resource) notFound();
  const visual = agencyAssets[resource.asset];
  const workflow = resourceWorkflows[slug];
  const preview = await downloadPreview(resource.download.href);
  return <>
    <PageIntro breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: resource.shortTitle }]} eyebrow={`${resource.download.format} template / Free resource`} title={resource.title} visual={visual}><p>{resource.description}</p><a className="button button-primary mt-8" href={resource.download.href} download data-cta-intent="resource-download" data-cta-location={resource.slug}>{resource.download.label} <Arrow /></a><a className="knowledge-secondary-link" href="#template-preview">Preview the template fields <Arrow /></a><p className="mt-4 font-mono text-[.68rem] uppercase leading-5">Free download · Editable {resource.download.format} · No email required</p></PageIntro>
    <section className="section"><div className="shell grid gap-10 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Purpose</p><div><h2 className="section-title">What this template helps you organise.</h2><p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">{resource.purpose}</p><div className="mt-10 grid border-b border-[var(--line-strong)] sm:grid-cols-2">{resource.includes.map((item, index) => <p className="grid grid-cols-[2.5rem_1fr] border-t border-[var(--line-strong)] p-4 sm:odd:border-r" key={item}><span className="font-mono text-[.65rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><span className="font-bold leading-6">{item}</span></p>)}</div></div></div></section>
    <ResourceFieldGuide workflow={workflow} preview={preview} />
    <section className="section"><div className="shell"><SectionHeading eyebrow="How to use it" title={`How to use this ${resource.download.format} template.`} /><ol className="mt-12 border-b border-[var(--line-strong)] md:ml-[25%]">{resource.howToUse.map((step, index) => <li className="grid gap-3 border-t border-[var(--line-strong)] py-6 sm:grid-cols-[4rem_1fr_2fr]" key={step.title}><span className="font-mono text-xs text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><h2 className="font-serif text-2xl leading-none">{step.title}</h2><p className="leading-7 text-[var(--muted)]">{step.copy}</p></li>)}</ol></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="Working guidance" title="Use the template with context, evidence and ownership." copy="Use these notes to interpret the fields, prioritise the work and keep the evidence connected to the decision." /><div className="mt-12 md:ml-[25%]">{resource.guidance.map((item, index) => <details className="editorial-disclosure group" open={index === 0} key={item.title}><summary className="grid grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-4 px-3 py-3"><span className="font-mono text-[.65rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><h2 className="font-serif text-xl leading-tight">{item.title}</h2><span aria-hidden="true" className="text-right text-[var(--accent)] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl px-3 pb-6 pl-[3.25rem] leading-7 text-[var(--muted)]">{item.copy}</p></details>)}</div></div></section>
    <section className="section bg-[var(--surface)]"><div className="shell"><SectionHeading eyebrow="Resource questions" title="Scope, use and validation, answered." /><div className="mt-12 md:ml-[25%]">{resource.faqs.map((item, index) => <details className="editorial-disclosure group" open={index === 0} key={item.question}><summary className="grid grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-4 px-3 py-3"><span className="font-mono text-[.65rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><h2 className="font-serif text-xl leading-tight">{item.question}</h2><span aria-hidden="true" className="text-right text-[var(--accent)] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl px-3 pb-6 pl-[3.25rem] leading-7 text-[var(--muted)]">{item.answer}</p></details>)}</div></div></section>
    <section className="section signal-grid"><div className="shell grid gap-8 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Download and continue</p><div><h2 className="section-title">Put the resource into the next review.</h2><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a className="button button-primary" href={resource.download.href} download>{resource.download.label} <Arrow /></a><Link className="button" href="/resources">All free resources <Arrow /></Link></div><div className="mt-10 grid border-b border-black/35 sm:grid-cols-2">{resource.related.map((item) => <Link className="flex min-h-16 items-center justify-between border-t border-black/35 py-3 pr-4 font-bold hover:bg-[var(--sun)] sm:odd:border-r sm:odd:px-4" href={item.href} key={item.href}>{item.label}<Arrow /></Link>)}</div></div></div></section>
    <section className="section"><div className="shell knowledge-assistance"><div><p className="eyebrow">From template to implementation</p><h2>{workflow.cta}</h2><p>{workflow.outcome} Share your website and the decision you want to make. We will review the relevant context with you.</p></div><Link className="button button-primary" href={`/contact?service=${workflow.service}`} data-cta-intent={resource.slug} data-cta-location="resource-final">{workflow.cta} <Arrow /></Link></div></section>
    <StructuredData data={resourceSchema(resource.slug)} />
  </>;
}
