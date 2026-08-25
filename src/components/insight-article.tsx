import Link from "next/link";
import { Arrow } from "./icons";
import { PageIntro, SectionHeading } from "./ui";
import { StructuredData } from "./structured-data";
import type { InsightArticle, InsightSection, InsightTable } from "@/content/insights";
import { siteConfig } from "@/content/site";
import { agencyAssets, insightVisuals } from "@/content/agency-assets";

function displayDate(value: string) {
  return new Intl.DateTimeFormat("en-NP", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kathmandu" }).format(new Date(`${value}T12:00:00+05:45`));
}

function DataTable({ table }: { table: InsightTable }) {
  return <div className="mt-8 overflow-x-auto border border-[var(--line-strong)]" tabIndex={0} role="region" aria-label={table.caption}>
    <table className="w-full min-w-[42rem] border-collapse text-left text-sm leading-6">
      <caption className="border-b border-[var(--line-strong)] bg-[var(--surface)] px-4 py-3 text-left font-mono text-[.7rem] font-bold uppercase tracking-[.05em] text-[var(--muted)]">{table.caption}</caption>
      <thead className="bg-[var(--ink)] text-[var(--paper)]"><tr>{table.headers.map((header) => <th className="border-r border-white/20 px-4 py-3 font-mono text-[.7rem] uppercase tracking-[.04em] last:border-r-0" key={header} scope="col">{header}</th>)}</tr></thead>
      <tbody>{table.rows.map((row, rowIndex) => <tr className="border-t border-[var(--line)] align-top odd:bg-[var(--surface)]" key={`${row[0]}-${rowIndex}`}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th className="border-r border-[var(--line)] px-4 py-4 font-bold" key={`${cell}-${cellIndex}`} scope="row">{cell}</th> : <td className="border-r border-[var(--line)] px-4 py-4 text-[var(--muted)] last:border-r-0" key={`${cell}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}

function ArticleSection({ section, index }: { section: InsightSection; index: number }) {
  const paragraphs = section.paragraphs ?? [];
  const leadParagraph = paragraphs[0];
  const deepParagraphs = paragraphs.slice(1);
  return <section aria-labelledby={`${section.id}-title`} className={`scroll-mt-28 border-t border-[var(--line)] py-12 md:py-16 ${index % 2 === 1 ? "bg-[var(--surface)]" : ""}`} id={section.id}>
    <div className="content grid gap-7 md:grid-cols-[10rem_minmax(0,1fr)]">
      <p className="eyebrow">Section / {String(index + 1).padStart(2, "0")}</p>
      <div>
        <h2 className="max-w-[22ch] font-serif text-[clamp(2.1rem,4.2vw,4.2rem)] leading-[.98] tracking-[-.055em]" id={`${section.id}-title`}>{section.title}</h2>
        {section.answer && <p className="mt-7 border-l-4 border-[var(--sun)] bg-[var(--paper-deep)] px-5 py-4 text-lg font-semibold leading-8">{section.answer}</p>}
        {leadParagraph && <p className="mt-6 max-w-[48rem] text-[1.05rem] leading-8 text-[var(--muted)]">{leadParagraph}</p>}
        {deepParagraphs.length > 0 && <details className="article-deep-dive group"><summary><span>Read the deeper explanation</span><span aria-hidden="true" className="text-[var(--accent)] transition-transform group-open:rotate-45">+</span></summary><div>{deepParagraphs.map((paragraph) => <p className="mt-5 text-[1.02rem] leading-8 text-[var(--muted)]" key={paragraph}>{paragraph}</p>)}</div></details>}
        {section.bullets && <ul className="mt-7 max-w-[48rem] border-b border-[var(--line)]">{section.bullets.map((item) => <li className="grid grid-cols-[1.5rem_1fr] gap-3 border-t border-[var(--line)] py-4 leading-7" key={item}><span aria-hidden="true" className="font-mono text-[var(--accent)]">+</span><span>{item}</span></li>)}</ul>}
        {section.steps && <ol className="mt-8 max-w-[50rem] border-b border-[var(--line-strong)]">{section.steps.map((step, stepIndex) => <li className="grid gap-3 border-t border-[var(--line-strong)] py-5 sm:grid-cols-[3rem_minmax(0,1fr)]" key={step.title}><span className="font-mono text-xs text-[var(--accent)]">{String(stepIndex + 1).padStart(2, "0")}</span><div><h3 className="font-serif text-xl tracking-[-.035em]">{step.title}</h3><p className="mt-2 leading-7 text-[var(--muted)]">{step.copy}</p></div></li>)}</ol>}
        {section.table && <DataTable table={section.table} />}
        {section.callout && <aside className="mt-8 max-w-[48rem] border border-[var(--ink)] bg-[var(--signal)] p-5 shadow-[7px_7px_0_var(--ink)]"><p className="eyebrow">Working note</p><p className="mt-3 font-semibold leading-7">{section.callout}</p></aside>}
      </div>
    </div>
  </section>;
}

function insightSchema(article: InsightArticle) {
  const url = `${siteConfig.domain}/insights/${article.slug}`;
  const pageId = `${url}#webpage`;
  const articleId = `${url}#article`;
  const personId = `${siteConfig.domain}/#rohan-neure`;
  const organizationId = `${siteConfig.domain}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url,
        name: article.metaTitle,
        description: article.description,
        isPartOf: { "@id": `${siteConfig.domain}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": articleId },
        inLanguage: "en-NP",
      },
      {
        "@type": "Article",
        "@id": articleId,
        url,
        headline: article.title,
        description: article.description,
        articleSection: article.category,
        keywords: [article.primaryKeyword, ...article.supportingKeywords],
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        inLanguage: "en-NP",
        image: `${siteConfig.domain}/opengraph-image`,
        author: { "@id": personId },
        publisher: { "@id": organizationId },
        mainEntityOfPage: { "@id": pageId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.domain}/` },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${siteConfig.domain}/insights` },
          { "@type": "ListItem", position: 3, name: article.shortTitle, item: url },
        ],
      },
    ],
  };
}

function insightFaqSchema(article: InsightArticle) {
  const url = `${siteConfig.domain}/insights/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    isPartOf: { "@id": `${url}#webpage` },
    inLanguage: "en-NP",
    mainEntity: article.faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };
}

export function InsightArticlePage({ article }: { article: InsightArticle }) {
  const visualKey = insightVisuals[article.category] ?? "growthSystem";
  return <>
    <PageIntro breadcrumbs={[{ label: "Insights", href: "/insights" }, { label: article.shortTitle }]} eyebrow={`${article.category} / GrowthLabs field guide`} title={article.title} visual={agencyAssets[visualKey]}>
      <p>{article.answer}</p>
      <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--line-strong)] pt-4 font-mono text-[.68rem] font-bold uppercase tracking-[.045em] text-[var(--muted)]"><span>By {siteConfig.fullName}</span><time dateTime={article.dateModified}>Reviewed {displayDate(article.dateModified)}</time><span>{article.readingTime}</span></div>
    </PageIntro>

    <article>
      <section className="section"><div className="content grid gap-10 lg:grid-cols-[minmax(0,.72fr)_minmax(0,1.28fr)]">
        <div><p className="eyebrow">Answer in brief</p><h2 className="mt-5 max-w-[14ch] font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-[.92] tracking-[-.06em]">The points worth carrying forward.</h2>{article.download && <a className="button button-primary mt-8" href={article.download.href} download data-cta-intent="insight-download" data-cta-location={article.slug}>{article.download.label} <Arrow /></a>}{article.download && <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">{article.download.description}</p>}</div>
        <div><ul className="border-b border-[var(--ink)]">{article.summaryPoints.map((point, index) => <li className="grid grid-cols-[3rem_1fr] border-t border-[var(--ink)] py-5" key={point}><span className="font-mono text-xs text-[var(--accent)]">0{index + 1}</span><span className="font-serif text-xl leading-tight tracking-[-.03em]">{point}</span></li>)}</ul>
          <nav aria-label="On this page" className="mt-10"><p className="eyebrow">On this page</p><ol className="mt-4 grid gap-2 sm:grid-cols-2">{article.sections.map((section, index) => <li key={section.id}><a className="flex min-h-11 items-center gap-3 border-b border-[var(--line)] py-2 text-sm font-bold hover:border-[var(--ink)] hover:text-[var(--accent)]" href={`#${section.id}`}><span className="font-mono text-[.65rem] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span>{section.title}</a></li>)}</ol></nav>
        </div>
      </div></section>

      {article.sections.map((section, index) => <ArticleSection section={section} index={index} key={section.id} />)}

      <section className="section section-dark"><div className="content"><SectionHeading eyebrow="Sources and maintenance" title="Primary references behind this guide." copy={`Written by ${siteConfig.fullName}. Published ${displayDate(article.datePublished)} and last reviewed ${displayDate(article.dateModified)}. Product interfaces and policies can change; the linked first-party sources are the current reference points.`} /><ol className="mt-12 grid gap-0 border-b border-white/20 md:ml-[25%]">{article.sources.map((source, index) => <li className="grid gap-3 border-t border-white/20 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-start" key={source.href}><span className="font-mono text-xs text-[var(--sun)]">0{index + 1}</span><div><a className="font-bold hover:text-[var(--sun)]" href={source.href} target="_blank" rel="noopener noreferrer">{source.label} ↗</a><p className="mt-1 text-sm leading-6 text-white/60">{source.publisher} · {source.usedFor}</p></div><span className="font-mono text-[.65rem] uppercase text-white/45">Primary source</span></li>)}</ol></div></section>

      <section className="section"><div className="content"><SectionHeading eyebrow="Related decisions" title="Continue with the closest useful path." /><div className="mt-10 grid border-b border-[var(--line-strong)] sm:grid-cols-2">{article.related.map((item) => <Link className="border-t border-[var(--line-strong)] p-5 transition-colors hover:bg-[var(--sun)] sm:odd:border-r" href={item.href} key={item.href}><span className="flex items-center justify-between font-bold">{item.label}<Arrow /></span><span className="mt-2 block text-sm leading-6 text-[var(--muted)]">{item.copy}</span></Link>)}</div></div></section>

      <section className="section bg-[var(--surface)]"><div className="content"><SectionHeading eyebrow="Questions answered" title="Frequently asked questions." /><div className="mt-12 border-b border-[var(--line-strong)] md:ml-[25%]">{article.faqs.map((item, index) => <details className="group border-t border-[var(--line-strong)] py-5" key={item.question}><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl leading-tight"><span><span className="mr-4 font-mono text-[.65rem] text-[var(--accent)]">0{index + 1}</span>{item.question}</span><span aria-hidden="true" className="text-[var(--accent)] transition-transform group-open:rotate-45">+</span></summary><p className="prose-copy mt-4 pl-10 pr-6">{item.answer}</p></details>)}</div></div></section>

      <section className="section signal-grid"><div className="content grid gap-8 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Use the guide</p><div><h2 className="section-title">{article.cta.title}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">{article.cta.copy}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="button button-primary" href={article.cta.href} data-cta-intent={article.slug} data-cta-location="insight-final" data-cta-channel="contact">{article.cta.label} <Arrow /></Link><Link className="button" href="/insights">Explore all insights <Arrow /></Link></div><p className="mt-5 font-mono text-[.7rem] uppercase leading-5 tracking-[.04em] text-black/60">No form on this site. Contact GrowthLabs directly by email, phone or WhatsApp.</p></div></div></section>
    </article>
    <StructuredData data={insightSchema(article)} />
    <StructuredData data={insightFaqSchema(article)} />
  </>;
}
