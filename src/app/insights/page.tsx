import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PageIntro, SectionHeading } from "@/components/ui";
import { StructuredData } from "@/components/structured-data";
import { insights } from "@/content/insights";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Digital Marketing Insights | SEO, Ads & Web Guides",
  "Practical GrowthLabs guides for SEO, local search, social media, Meta Ads, web strategy, content and connected digital marketing decisions.",
  "/insights",
);

const categoryOrder = ["SEO", "Local SEO", "Social media", "Paid media", "Web strategy", "Growth strategy"] as const;

function collectionSchema() {
  const url = `${siteConfig.domain}/insights`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: "GrowthLabs Digital Marketing Insights", description: "Practical, source-backed guides across SEO, local search, social media, paid media, web strategy and digital marketing.", isPartOf: { "@id": `${siteConfig.domain}/#website` }, publisher: { "@id": `${siteConfig.domain}/#organization` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#articles` }, inLanguage: "en-NP" },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.domain}/` }, { "@type": "ListItem", position: 2, name: "Insights", item: url }] },
      { "@type": "ItemList", "@id": `${url}#articles`, name: "GrowthLabs Insights", numberOfItems: insights.length, itemListElement: insights.map((article, index) => ({ "@type": "ListItem", position: index + 1, url: `${url}/${article.slug}`, name: article.title })) },
    ],
  };
}

export default function InsightsPage() {
  const featured = insights[0];
  return <>
    <PageIntro breadcrumbs={[{ label: "Insights" }]} eyebrow="GrowthLabs insights / Source-backed field guides" title="Useful answers for better growth decisions."><p>Original guides, comparisons, checklists and templates across SEO, local search, social media, paid acquisition, websites and measurement. Each resource answers the question first, shows its sources and leads to a practical next step.</p></PageIntro>

    <section className="section"><div className="shell"><SectionHeading eyebrow="Start here" title="Understand SEO before buying SEO." copy="The beginner pillar separates crawling, indexing, ranking, traffic and business outcomes—then connects the concepts to a practical evaluation process." /><Link className="mt-12 grid border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] transition-transform hover:-translate-y-1 md:ml-[25%] md:grid-cols-[1fr_2fr]" href={`/insights/${featured.slug}`}><div className="signal-field flex min-h-56 flex-col justify-between border-b border-[var(--ink)] p-6 text-[var(--ink)] md:min-h-80 md:border-b-0 md:border-r"><p className="eyebrow">01 / {featured.category}</p><span className="font-mono text-xs font-bold uppercase">{featured.readingTime}</span></div><div className="flex flex-col justify-between p-7 md:p-10"><div><h2 className="max-w-[18ch] font-serif text-[clamp(2.4rem,5vw,5.4rem)] leading-[.94] tracking-[-.06em]">{featured.title}</h2><p className="mt-6 max-w-2xl leading-7 text-white/65">{featured.description}</p></div><span className="mt-10 flex items-center gap-3 font-bold text-[var(--sun)]">Read the field guide <Arrow /></span></div></Link></div></section>

    {categoryOrder.map((category) => {
      const categoryArticles = insights.filter((article) => article.category === category && article.slug !== featured.slug);
      if (!categoryArticles.length) return null;
      return <section className="section" id={category.toLowerCase().replaceAll(" ", "-")} key={category}><div className="shell"><div className="grid gap-7 md:grid-cols-[1fr_3fr]"><p className="eyebrow">{category}</p><div className="grid border-b border-[var(--line-strong)] sm:grid-cols-2">{categoryArticles.map((article, index) => <Link className="group flex min-h-72 flex-col border-t border-[var(--line-strong)] p-6 transition-colors hover:bg-[var(--sun)] sm:odd:border-r" href={`/insights/${article.slug}`} key={article.slug}><p className="font-mono text-[.65rem] font-bold uppercase tracking-[.045em] text-[var(--accent)]">{String(index + 1).padStart(2, "0")} · {article.readingTime}</p><h2 className="mt-8 max-w-[18ch] font-serif text-3xl leading-[1] tracking-[-.05em]">{article.shortTitle}</h2><p className="mt-4 text-sm leading-6 text-[var(--muted)]">{article.description}</p><span className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold">Read guide <Arrow /></span></Link>)}</div></div></div></section>;
    })}

    <section className="section section-dark"><div className="shell grid gap-10 md:grid-cols-[1fr_3fr]"><p className="eyebrow !text-[var(--sun)]">Editorial standard</p><div><h2 className="section-title">Written for decisions. Maintained against primary sources.</h2><div className="mt-10 grid gap-8 sm:grid-cols-3">{[["Answer first", "Every guide gives the direct answer before expanding into process, choices and limitations."], ["Evidence visible", "Platform, search and accessibility claims link to current first-party or standards sources."], ["No keyword theatre", "Related language appears where it improves meaning; repetition is never used as a density target."]].map(([title, copy]) => <article className="border-t border-white/25 pt-4" key={title}><h3 className="font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{copy}</p></article>)}</div></div></div></section>
    <StructuredData data={collectionSchema()} />
  </>;
}
