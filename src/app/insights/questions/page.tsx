import Link from "next/link";
import { Arrow } from "@/components/icons";
import { StructuredData } from "@/components/structured-data";
import { PageIntro, SectionHeading } from "@/components/ui";
import { agencyAssets } from "@/content/agency-assets";
import { questionGroups } from "@/content/knowledge";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Digital Marketing Questions Answered | GrowthLabs Nepal",
  "Clear answers to common SEO, Google Ads, Meta Ads, website, CRO, local search, analytics and digital marketing questions from Nepal businesses.",
  "/insights/questions",
);

const questions = questionGroups.flatMap((group) => group.questions);

function questionSchema() {
  const url = `${siteConfig.domain}/insights/questions`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: "Digital marketing questions answered", description: metadata.description, isPartOf: { "@id": `${siteConfig.domain}/#website` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#questions` }, inLanguage: "en-NP" },
      { "@type": "FAQPage", "@id": `${url}#questions`, url, mainEntity: questions.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.domain}/` }, { "@type": "ListItem", position: 2, name: "Insights", item: `${siteConfig.domain}/insights` }, { "@type": "ListItem", position: 3, name: "Questions", item: url }] },
    ],
  };
}

export default function QuestionsPage() {
  return <>
    <PageIntro breadcrumbs={[{ label: "Insights", href: "/insights" }, { label: "Questions" }]} eyebrow="Questions / Direct answers" title="Digital marketing questions, answered without the sales fog." visual={agencyAssets.analytics}><p>Use this answer library to understand SEO, Google Ads, Meta Ads, local visibility, websites, conversion and measurement before choosing a service. Every answer defines the decision, names its limitations and links to deeper guidance where useful.</p></PageIntro>
    <div className="signal-band"><div className="shell flex flex-wrap gap-x-6 gap-y-2 py-4 font-mono text-[.68rem] font-bold uppercase">{questionGroups.map((group) => <a className="border-b border-black/40 py-1 hover:border-black" href={`#${group.title.toLowerCase().replaceAll(" ", "-")}`} key={group.title}>{group.title}</a>)}</div></div>
    {questionGroups.map((group, groupIndex) => <section className={`section ${groupIndex % 2 ? "bg-[var(--surface)]" : ""}`} id={group.title.toLowerCase().replaceAll(" ", "-")} key={group.title}><div className="shell"><SectionHeading eyebrow={`Answer library / ${String(groupIndex + 1).padStart(2, "0")}`} title={group.title} copy={group.description} /><div className="mt-12 md:ml-[25%]">{group.questions.map((item, index) => <details className="editorial-disclosure group" open={index === 0} key={item.question}><summary className="grid grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-4 px-3 py-3"><span className="font-mono text-[.65rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><h2 className="font-serif text-xl leading-tight tracking-[-.035em]">{item.question}</h2><span aria-hidden="true" className="text-right text-[var(--accent)] transition-transform group-open:rotate-45">+</span></summary><div className="max-w-3xl px-3 pb-6 pl-[3.25rem]"><p className="leading-7 text-[var(--muted)]">{item.answer}</p>{item.href && <Link className="text-link mt-5" href={item.href}>{item.linkLabel ?? "Read more"}<Arrow /></Link>}</div></details>)}</div></div></section>)}
    <section className="section signal-grid"><div className="shell grid gap-8 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Ask the next question</p><div><h2 className="section-title">Bring the question your data cannot answer alone.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">Send your website, current channel and the decision you are trying to make. We will identify the most useful review, page, campaign or measurement next step.</p><Link className="button button-primary mt-8" href="/contact">Contact GrowthLabs <Arrow /></Link></div></div></section>
    <StructuredData data={questionSchema()} />
  </>;
}
