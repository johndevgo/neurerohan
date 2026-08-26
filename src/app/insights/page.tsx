import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PageIntro, SectionHeading } from "@/components/ui";
import { StructuredData } from "@/components/structured-data";
import { insights } from "@/content/insights";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { agencyAssets, insightVisuals } from "@/content/agency-assets";

export const metadata = pageMetadata(
  "Digital Marketing Articles & Insights | GrowthLabs",
  "Read practical GrowthLabs articles and guides about SEO, local search, social media, Meta Ads, web strategy, content and digital marketing decisions.",
  "/insights",
);

const categoryOrder = ["SEO", "Local SEO", "Social media", "Paid media", "Web strategy", "Growth strategy"] as const;

function collectionSchema() {
  const url = `${siteConfig.domain}/insights`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: "GrowthLabs Digital Marketing Articles and Insights", description: "Practical, source-backed articles and guides across SEO, local search, social media, paid media, web strategy and digital marketing.", isPartOf: { "@id": `${siteConfig.domain}/#website` }, publisher: { "@id": `${siteConfig.domain}/#organization` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#articles` }, inLanguage: "en-NP" },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.domain}/` }, { "@type": "ListItem", position: 2, name: "Insights", item: url }] },
      { "@type": "ItemList", "@id": `${url}#articles`, name: "GrowthLabs Insights", numberOfItems: insights.length, itemListElement: insights.map((article, index) => ({ "@type": "ListItem", position: index + 1, url: `${url}/${article.slug}`, name: article.title })) },
    ],
  };
}

export default function InsightsPage() {
  const featured = insights[0];
  return <>
    <PageIntro breadcrumbs={[{ label: "Insights" }]} eyebrow="Articles · Questions · Glossary · Case studies" title="Useful answers for better growth decisions." visual={agencyAssets.growthSystem}><p>Original articles, practical guides, questions, definitions, case-study evidence, checklists and tools across SEO, local search, social media, paid acquisition, websites and measurement. Each resource answers the question first and leads to a practical next step.</p><div className="mt-7 flex flex-wrap gap-2">{[["Articles", "#articles"], ["Questions", "/insights/questions"], ["Glossary", "/insights/glossary"], ["Case studies", "/insights/case-studies"], ["Resources", "/resources"], ["Tools", "/tools"]].map(([label, href]) => <Link className="border border-[var(--line-strong)] px-3 py-2 text-xs font-bold hover:bg-[var(--sun)]" href={href} key={href}>{label}</Link>)}</div></PageIntro>

    <section className="section scroll-mt-24" id="articles"><div className="shell"><SectionHeading eyebrow="Articles / Start here" title="Understand SEO before buying SEO." copy="The beginner pillar separates crawling, indexing, ranking, traffic and business outcomes—then connects the concepts to a practical evaluation process." /><Link className="mt-12 grid overflow-hidden border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] transition-transform hover:-translate-y-1 md:ml-[25%] md:grid-cols-[1fr_2fr]" href={`/insights/${featured.slug}`}><div className="relative min-h-64 border-b border-[var(--ink)] md:min-h-96 md:border-b-0 md:border-r"><Image className="h-full w-full object-cover" src={agencyAssets.seoServices.src} alt={agencyAssets.seoServices.alt} width={agencyAssets.seoServices.width} height={agencyAssets.seoServices.height} sizes="(max-width: 768px) 100vw, 28vw" /><span className="absolute left-4 top-4 bg-[var(--paper)] px-3 py-2 font-mono text-[.68rem] font-bold uppercase text-[var(--ink)]">01 / {featured.category}</span></div><div className="flex flex-col justify-between p-7 md:p-10"><div><p className="font-mono text-xs font-bold uppercase text-[var(--sun)]">{featured.readingTime}</p><h2 className="mt-6 max-w-[18ch] font-serif text-[clamp(2.4rem,5vw,5.4rem)] leading-[.94] tracking-[-.06em]">{featured.title}</h2><p className="mt-6 max-w-2xl leading-7 text-white/65">{featured.description}</p></div><span className="mt-10 flex items-center gap-3 font-bold text-[var(--sun)]">Read article <Arrow /></span></div></Link></div></section>

    {categoryOrder.map((category) => {
      const categoryArticles = insights.filter((article) => article.category === category && article.slug !== featured.slug);
      if (!categoryArticles.length) return null;
      return <section className="section" id={category.toLowerCase().replaceAll(" ", "-")} key={category}><div className="shell"><div className="grid gap-7 md:grid-cols-[1fr_3fr]"><p className="eyebrow">{category} articles</p><div className="grid border-b border-[var(--line-strong)] sm:grid-cols-2">{categoryArticles.map((article, index) => { const visual = agencyAssets[insightVisuals[article.category] ?? "growthSystem"]; return <Link className="group flex min-h-72 flex-col overflow-hidden border-t border-[var(--line-strong)] transition-colors hover:bg-[var(--sun)] sm:odd:border-r" href={`/insights/${article.slug}`} key={article.slug}><div className="aspect-[16/7] overflow-hidden border-b border-[var(--line)] bg-[var(--paper-deep)]"><Image className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" src={visual.src} alt="" width={visual.width} height={visual.height} sizes="(max-width: 640px) 100vw, 40vw" /></div><div className="flex flex-1 flex-col p-6"><p className="font-mono text-[.65rem] font-bold uppercase tracking-[.045em] text-[var(--accent)]">{String(index + 1).padStart(2, "0")} · {article.readingTime}</p><h2 className="mt-7 max-w-[18ch] font-serif text-3xl leading-[1] tracking-[-.05em]">{article.shortTitle}</h2><p className="mt-4 text-sm leading-6 text-[var(--muted)]">{article.description}</p><span className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold">Read article <Arrow /></span></div></Link>; })}</div></div></div></section>;
    })}

    <section className="section section-dark"><div className="shell grid gap-10 md:grid-cols-[1fr_3fr]"><p className="eyebrow !text-[var(--sun)]">Editorial standard</p><div><h2 className="section-title">Written for decisions. Maintained against primary sources.</h2><div className="mt-10 grid gap-8 sm:grid-cols-3">{[["Answer first", "Every guide gives the direct answer before expanding into process, choices and limitations."], ["Evidence visible", "Platform, search and accessibility claims link to current first-party or standards sources."], ["No keyword theatre", "Related language appears where it improves meaning; repetition is never used as a density target."]].map(([title, copy]) => <article className="border-t border-white/25 pt-4" key={title}><h3 className="font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{copy}</p></article>)}</div></div></div></section>
    <StructuredData data={collectionSchema()} />
  </>;
}
