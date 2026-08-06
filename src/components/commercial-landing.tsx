import Link from "next/link";
import { Arrow } from "./icons";
import { ContactCta, PageIntro, SectionHeading } from "./ui";
import type { CommercialLanding } from "@/content/landing-pages";
import { siteConfig } from "@/content/site";

export function CommercialLandingPage({ page }: { page: CommercialLanding }) {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteConfig.domain }, { "@type": "ListItem", position: 2, name: page.metaTitle.split(" | ")[0], item: `${siteConfig.domain}/${page.slug}` }] },
    { "@context": "https://schema.org", "@type": "Service", name: page.metaTitle.split(" | ")[0], description: page.description, areaServed: { "@type": "Country", name: "Nepal" }, provider: { "@type": "ProfessionalService", name: siteConfig.brandName, url: siteConfig.domain, founder: { "@type": "Person", name: siteConfig.fullName } } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
  ];
  return <>
    <PageIntro eyebrow={page.eyebrow} title={page.title}><p>{page.intro}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="button button-primary" href="/contact">Talk to Rohan <Arrow /></Link><Link className="button" href="/services">Explore services <Arrow /></Link></div></PageIntro>
    <section className="shell pb-16"><div className="border-y border-[var(--line)] py-8 md:ml-[25%]"><p className="eyebrow">The objective</p><p className="mt-4 max-w-3xl font-serif text-3xl leading-tight">{page.promise}</p></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="What gets in the way" title="Fix the system, not only the symptom." /><div className="mt-14 grid gap-8 md:ml-[25%] lg:grid-cols-3">{page.challenges.map((item) => <article className="card" key={item.title}><h3 className="font-serif text-2xl">{item.title}</h3><p className="mt-3 leading-7 text-[var(--muted)]">{item.copy}</p></article>)}</div></div></section>
    <section className="section bg-[linear-gradient(135deg,#21170d,#4a2005)] text-[var(--paper)]"><div className="shell"><SectionHeading eyebrow="Capabilities" title="The right parts, working together." /><div className="mt-16 grid gap-10 lg:grid-cols-3">{page.capabilities.map((item, index) => <article className="border-t border-white/30 pt-5" key={item.title}><p className="eyebrow !text-[var(--sun)]">0{index + 1}</p><h3 className="mt-5 font-serif text-3xl">{item.title}</h3><p className="mt-4 leading-7 text-white/65">{item.copy}</p><ul className="mt-6">{item.items.map((capability) => <li className="border-t border-white/15 py-2 text-sm text-white/75" key={capability}>{capability}</li>)}</ul></article>)}</div></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="What the work creates" title="A clearer foundation for growth." /><div className="mt-12 grid gap-4 md:ml-[25%] sm:grid-cols-2">{page.outcomes.map((item) => <p className="border-t border-[var(--line)] py-4 font-serif text-xl" key={item}>{item}</p>)}</div></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="Process" title="Research first. Then focused execution." /><ol className="mt-14 md:ml-[25%]">{page.process.map((step, index) => <li className="grid gap-3 border-t border-[var(--line)] py-6 sm:grid-cols-[4rem_1fr_2fr]" key={step.title}><span className="eyebrow">0{index + 1}</span><h3 className="font-serif text-2xl">{step.title}</h3><p className="leading-7 text-[var(--muted)]">{step.copy}</p></li>)}</ol></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="Related expertise" title="Continue with the most relevant path." /><div className="mt-10 flex flex-col gap-4 md:ml-[25%] sm:flex-row">{page.related.map((link) => <Link className="text-link" href={link.href} key={link.href}>{link.label} <Arrow /></Link>)}</div></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="FAQ" title="Useful answers before we talk." /><div className="mt-14 md:ml-[25%]">{page.faqs.map((item) => <details className="group border-t border-[var(--line)] py-5" key={item.question}><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl"><span>{item.question}</span><span aria-hidden="true" className="text-[var(--accent)] group-open:rotate-45">+</span></summary><p className="prose-copy mt-4 pr-8">{item.answer}</p></details>)}</div></div></section>
    <ContactCta />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
  </>;
}
