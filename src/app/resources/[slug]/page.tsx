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
    { "@type": "CreativeWork", "@id": `${url}#resource`, name: resource.title, description: resource.description, url, encodingFormat: "text/csv", isAccessibleForFree: true, author: { "@id": `${siteConfig.domain}/#rohan-neure` }, publisher: { "@id": `${siteConfig.domain}/#organization` } },
    { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: resource.faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.domain}/` }, { "@type": "ListItem", position: 2, name: "Resources", item: `${siteConfig.domain}/resources` }, { "@type": "ListItem", position: 3, name: resource.shortTitle, item: url }] },
  ] };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resourceBySlug[slug];
  if (!resource) notFound();
  const visual = agencyAssets[resource.asset];
  return <>
    <PageIntro breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: resource.shortTitle }]} eyebrow={`${resource.download.format} template / Free resource`} title={resource.title} visual={visual}><p>{resource.description}</p><a className="button button-primary mt-8" href={resource.download.href} download data-cta-intent="resource-download" data-cta-location={resource.slug}>{resource.download.label} <Arrow /></a><p className="mt-4 font-mono text-[.68rem] uppercase leading-5">No email gate · Editable {resource.download.format} · No tracking claims</p></PageIntro>
    <section className="section"><div className="shell grid gap-10 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Purpose</p><div><h2 className="section-title">Use the file to improve the decision, not complete paperwork.</h2><p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">{resource.purpose}</p><div className="mt-10 grid border-b border-[var(--line-strong)] sm:grid-cols-2">{resource.includes.map((item, index) => <p className="grid grid-cols-[2.5rem_1fr] border-t border-[var(--line-strong)] p-4 sm:odd:border-r" key={item}><span className="font-mono text-[.65rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><span className="font-bold leading-6">{item}</span></p>)}</div></div></div></section>
    <section className="section bg-[var(--surface)]"><div className="shell"><SectionHeading eyebrow="Operating context" title="Turn a free template into a repeatable marketing habit." copy="A planning file becomes useful when one owner maintains it, the inputs come from real evidence and the completed resource changes a priority, campaign, page or measurement decision." /><div className="decision-grid mt-12 md:ml-[16%]"><article><p className="eyebrow">Own it</p><h2>Assign one accountable owner</h2><p>Name who collects the inputs, resolves missing information, records decisions and keeps the resource current after the first review.</p></article><article><p className="eyebrow">Evidence</p><h2>Separate facts from assumptions</h2><p>Use platform exports, customer research, website evidence and approved business information. Mark estimates so they can be validated later.</p></article><article><p className="eyebrow">Action</p><h2>End with a priority and deadline</h2><p>Translate the completed template into an owner, next action, success measure and review date. Documentation should create movement.</p></article></div></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="How to use it" title="Four steps from template to working system." /><ol className="mt-12 border-b border-[var(--line-strong)] md:ml-[25%]">{resource.howToUse.map((step, index) => <li className="grid gap-3 border-t border-[var(--line-strong)] py-6 sm:grid-cols-[4rem_1fr_2fr]" key={step.title}><span className="font-mono text-xs text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><h2 className="font-serif text-2xl leading-none">{step.title}</h2><p className="leading-7 text-[var(--muted)]">{step.copy}</p></li>)}</ol></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="Working guidance" title="Use the template with context, evidence and ownership." copy="Open each note when that decision becomes relevant. The complete guidance remains available without turning the page into a wall of copy." /><div className="mt-12 md:ml-[25%]">{resource.guidance.map((item, index) => <details className="editorial-disclosure group" open={index === 0} key={item.title}><summary className="grid grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-4 px-3 py-3"><span className="font-mono text-[.65rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><h2 className="font-serif text-xl leading-tight">{item.title}</h2><span aria-hidden="true" className="text-right text-[var(--accent)] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl px-3 pb-6 pl-[3.25rem] leading-7 text-[var(--muted)]">{item.copy}</p></details>)}</div></div></section>
    <section className="section bg-[var(--surface)]"><div className="shell"><SectionHeading eyebrow="Resource questions" title="Scope, use and validation, answered." /><div className="mt-12 md:ml-[25%]">{resource.faqs.map((item, index) => <details className="editorial-disclosure group" open={index === 0} key={item.question}><summary className="grid grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-4 px-3 py-3"><span className="font-mono text-[.65rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><h2 className="font-serif text-xl leading-tight">{item.question}</h2><span aria-hidden="true" className="text-right text-[var(--accent)] transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl px-3 pb-6 pl-[3.25rem] leading-7 text-[var(--muted)]">{item.answer}</p></details>)}</div></div></section>
    <section className="section signal-grid"><div className="shell grid gap-8 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Download and continue</p><div><h2 className="section-title">Put the resource into the next review.</h2><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a className="button button-primary" href={resource.download.href} download>{resource.download.label} <Arrow /></a><Link className="button" href="/resources">All free resources <Arrow /></Link></div><div className="mt-10 grid border-b border-black/35 sm:grid-cols-2">{resource.related.map((item) => <Link className="flex min-h-16 items-center justify-between border-t border-black/35 py-3 pr-4 font-bold hover:bg-[var(--sun)] sm:odd:border-r sm:odd:px-4" href={item.href} key={item.href}>{item.label}<Arrow /></Link>)}</div></div></div></section>
    <StructuredData data={resourceSchema(resource.slug)} />
  </>;
}
