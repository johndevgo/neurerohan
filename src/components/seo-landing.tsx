import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./icons";
import { PageStructuredData } from "./structured-data";
import { PageIntro, SectionHeading } from "./ui";
import {
  seoCapabilities,
  seoProblems,
  seoProcess,
  type SeoFaq,
} from "@/content/seo";
import { siteConfig } from "@/content/site";

type Props = { variant: "expert" | "company"; faqs: SeoFaq[] };

const systemRequirements = [
  ["Search demand", "Identify the problems, services, locations, industries, and questions people actually search for—then separate raw volume from commercial relevance."],
  ["Search intent", "Understand whether the searcher wants to learn, compare, find a provider, solve a local need, or take action."],
  ["Website architecture", "Give every valuable keyword cluster one clear canonical destination instead of making pages compete with one another."],
  ["Technical accessibility", "Make important pages crawlable, indexable, fast enough, mobile-friendly, and technically understandable."],
  ["Content quality", "Answer the real question with specific, useful information rather than repeated keywords or generic filler."],
  ["Authority and internal links", "Connect relevant pages clearly and build legitimate signals that support credibility beyond the website."],
  ["Conversion", "Turn earned attention into a call, message, enquiry, booking, purchase, or other useful next step."],
  ["Measurement", "Track query mix, landing-page quality, conversions, and lead value so the next decision is based on evidence."],
] as const;

const capabilityIds = [
  "seo-audit",
  "keyword-research",
  "technical-seo",
  "on-page-seo",
  "content-strategy",
  "local-seo",
  "internal-linking",
  "seo-cro",
] as const;

const reviewDeliverables = [
  "An executive explanation of the most important constraints",
  "A prioritised roadmap based on likely value, effort, and dependency",
  "Evidence tied to queries, pages, templates, or technical behaviour",
  "Content, development, local-search, and conversion recommendations",
  "Clear ownership and sequencing from advice to implementation",
  "Measurement requirements and a baseline for review",
  "A clear decision on what should not be prioritised yet",
] as const;

const hiringQuestions = [
  "Which queries and pages are commercially important—and why?",
  "How will keywords be mapped to avoid cannibalisation?",
  "Which technical issues genuinely limit performance?",
  "How will content support commercial and local pages?",
  "What is included, and who owns implementation?",
  "How will organic visibility connect to qualified action?",
  "What evidence supports each recommendation?",
  "How will progress and lead quality be measured?",
] as const;

const warningSigns = [
  "Guaranteed first positions",
  "Secret methods that cannot be explained",
  "Bulk link promises without relevance or quality controls",
  "Generic reports that do not lead to decisions",
  "Fabricated traffic, results, or case studies",
  "Pricing disconnected from scope and deliverables",
] as const;

const businessModels: ReadonlyArray<{ title: string; copy: string; href?: string }> = [
  { title: "Service businesses", copy: "Commercial service pages, location relevance, useful proof, and enquiry paths built around how prospective customers compare providers." },
  { title: "Hotels & hospitality", copy: "Property and location visibility, direct-booking journeys, local search, offer pages, and content shaped around guest intent.", href: "/hotel-digital-marketing-agency" },
  { title: "Travel agencies", copy: "Destination, package, and itinerary architecture connected to seasonal demand, local relevance, and high-intent enquiry journeys.", href: "/seo-for-travel-agency" },
  { title: "Ecommerce brands", copy: "Category and product structure, technical health, informational support, internal links, and organic landing-page conversion." },
  { title: "Restaurants & local brands", copy: "Google visibility, reviews, local pages, clear business information, and frictionless routes to call, directions, or bookings." },
  { title: "Startups & growing brands", copy: "Demand research, website architecture, focused commercial pages, and an SEO roadmap that grows with the offer." },
];

export function SeoLanding({ faqs }: Props) {
  return <>
    <PageIntro
      breadcrumbs={[{ label: "Services", href: "/services" }, { label: "SEO Expert in Nepal" }]}
      eyebrow="Rohan Neure / Direct SEO strategy"
      title="SEO expert in Nepal for visibility that supports real growth."
    >
      <p>Work directly with Rohan Neure on the parts of SEO that determine whether visibility becomes business: search intent, technical foundations, page architecture, useful content, internal links, local relevance, and conversion paths.</p>
      <p className="mt-4">The objective is not rankings in isolation. It is to help the right people discover the business, understand why it fits, and take a measurable next step.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link className="button button-primary" href="/contact">Request an SEO review <Arrow /></Link>
        <a className="button" href="#seo-services">Explore the SEO approach <Arrow /></a>
      </div>
      <p className="mt-4 text-sm">Share your website, target market, and most important SEO challenge. The first conversation identifies the constraint before scope is recommended.</p>
    </PageIntro>

    <div className="signal-band"><div className="shell grid grid-cols-2 gap-px py-0 md:grid-cols-4">{[
      "Direct access to Rohan",
      "Technical + content + local SEO",
      "Intent-led page mapping",
      "SEO connected to CRO",
    ].map((item, index) => <p className="border-x border-black/15 px-4 py-5 font-mono text-[.67rem] font-bold uppercase tracking-[.08em]" key={item}><span className="mr-3 opacity-50">0{index + 1}</span>{item}</p>)}</div></div>

    <section className="section">
      <div className="shell grid items-start gap-10 md:grid-cols-[minmax(16rem,1fr)_minmax(0,2fr)]">
        <div className="hero-portrait max-w-md">
          <Image className="aspect-[4/5] w-full object-cover" src={siteConfig.profileImage} alt="Rohan Neure, SEO expert and founder of GrowthLabs" width={1254} height={1254} sizes="(max-width: 768px) 100vw, 34vw" priority />
        </div>
        <div>
          <p className="eyebrow">Strategy without unnecessary layers</p>
          <h2 className="section-title mt-5">Work with the person who maps the opportunity.</h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-[var(--muted)]">
            <p>SEO often loses momentum when the strategist understands the problem but the work passes through layers before it reaches the website. Here, Rohan stays involved in the analysis, keyword-to-page map, technical priorities, page direction, local visibility, and conversion journey.</p>
            <p>Direct specialist input is useful when you need to diagnose a decline, plan a migration, decide which commercial pages to build, strengthen local visibility, or give an internal content and development team clear priorities.</p>
            <p>When the scope requires broader implementation, the engagement can continue through GrowthLabs without losing the strategic thread.</p>
          </div>
          <Link className="text-link mt-8" href="/about">About Rohan and GrowthLabs <Arrow /></Link>
        </div>
      </div>
    </section>

    <section className="section bg-[var(--surface)]">
      <div className="shell">
        <SectionHeading eyebrow="Why SEO struggles" title="SEO is a system. Weak links compound." copy="Publishing more is not the same as building search visibility. Strong SEO needs the right demand, pages, technical foundation, content, links, and conversion journey." />
        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">{seoProblems.map((item, index) => <article className="card" key={item.title}><p className="eyebrow">Constraint / 0{index + 1}</p><h3 className="mt-5 font-serif text-2xl">{item.title}</h3><p className="mt-4 leading-7 text-[var(--muted)]">{item.copy}</p></article>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading eyebrow="What good SEO must solve" title="A demand, website, and conversion system." copy="Give every useful search a credible destination—and make the journey after the click just as deliberate as the work before it." />
        <ol className="mt-14 grid border-l border-t border-[var(--line-strong)] sm:grid-cols-2 lg:grid-cols-4">{systemRequirements.map(([title, copy], index) => <li className="min-h-72 border-b border-r border-[var(--line-strong)] p-6" key={title}><p className="eyebrow">0{index + 1}</p><h3 className="mt-14 font-serif text-2xl">{title}</h3><p className="mt-4 text-sm leading-6 text-[var(--muted)]">{copy}</p></li>)}</ol>
      </div>
    </section>

    <section id="seo-services" className="section section-dark scroll-mt-24">
      <div className="shell">
        <SectionHeading eyebrow="SEO services with direct specialist involvement" title="Scope follows the constraint." copy="The plan is shaped by search intent, opportunity, website condition, competition, content quality, local visibility, and business goals." />
        <div className="mt-16">{seoCapabilities.map((item, index) => <article id={capabilityIds[index]} className="scroll-mt-28 grid gap-5 border-t border-white/25 py-8 md:grid-cols-[5rem_minmax(13rem,1fr)_minmax(0,1.4fr)]" key={item.title}><p className="eyebrow !text-[var(--sun)]">0{index + 1}</p><div><h3 className="font-serif text-3xl">{item.title}</h3><p className="mt-4 leading-7 text-white/65">{item.summary}</p></div><ul className="grid self-start sm:grid-cols-2">{item.items.map((capability) => <li className="border-t border-white/15 py-3 text-sm text-white/75" key={capability}>{capability}</li>)}</ul></article>)}</div>
        <Link className="button mt-10 border-white text-white" href="/contact">Request an SEO review <Arrow /></Link>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading eyebrow="Advice your team can act on" title="A useful SEO review should tell you what to do next." copy="Scope determines the deliverables, but the output should make priorities visible and implementation practical." />
        <ul className="mt-12 grid md:ml-[25%] md:grid-cols-2">{reviewDeliverables.map((item, index) => <li className="grid grid-cols-[2.5rem_1fr] border-t border-[var(--line)] py-5 pr-6" key={item}><span className="eyebrow">0{index + 1}</span><span>{item}</span></li>)}</ul>
      </div>
    </section>

    <section className="section bg-[var(--surface)]">
      <div className="shell">
        <SectionHeading eyebrow="A six-part working method" title="From business context to measurable iteration." copy="Research is translated into a sequenced plan, implemented against the highest-value constraint, validated, and improved with evidence." />
        <ol className="mt-14 md:ml-[25%]">{seoProcess.map((step, index) => <li className="grid gap-4 border-t border-[var(--line-strong)] py-7 sm:grid-cols-[4rem_1fr_2fr]" key={step.title}><span className="eyebrow">0{index + 1}</span><h3 className="font-serif text-2xl">{step.title}</h3><p className="leading-7 text-[var(--muted)]">{step.copy}</p></li>)}</ol>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading eyebrow="Expert or company?" title="Choose the delivery model the constraint requires." />
        <div className="mt-14 grid border-l border-t border-[var(--line-strong)] md:ml-[25%] md:grid-cols-2">
          <article className="border-b border-r border-[var(--line-strong)] p-7"><p className="eyebrow">Direct SEO expert</p><h3 className="mt-5 font-serif text-3xl">Close access and focused direction.</h3><p className="mt-5 leading-7 text-[var(--muted)]">An individual expert is useful when you need a senior audit, keyword map, technical direction, commercial page plan, migration guidance, or a clear roadmap your team can implement.</p></article>
          <article className="border-b border-r border-[var(--line-strong)] p-7"><p className="eyebrow">SEO company</p><h3 className="mt-5 font-serif text-3xl">Broader implementation and continuity.</h3><p className="mt-5 leading-7 text-[var(--muted)]">A company model fits a wider programme that combines research, technical work, on-page implementation, content planning, local search, reporting, and ongoing coordination.</p></article>
        </div>
        <div className="mt-8 md:ml-[25%]"><p className="prose-copy">GrowthLabs combines both: direct strategic access to Rohan, with implementation capacity that can expand when the agreed scope requires it.</p><Link className="text-link mt-6" href="/seo-company-in-nepal">Compare the SEO company model <Arrow /></Link></div>
      </div>
    </section>

    <section className="section section-dark">
      <div className="shell">
        <SectionHeading eyebrow="Different journeys, different search systems" title="SEO shaped around the business model." copy="The architecture and conversion event should reflect how customers research, compare, and buy—not force every business into the same template." />
        <div className="mt-14 grid gap-px bg-white/20 md:grid-cols-2 lg:grid-cols-3">{businessModels.map((item, index) => <article className="bg-[var(--ink)] p-7" key={item.title}><p className="eyebrow !text-[var(--sun)]">Model / 0{index + 1}</p><h3 className="mt-8 font-serif text-2xl">{item.title}</h3><p className="mt-4 text-sm leading-6 text-white/65">{item.copy}</p>{item.href && <Link className="text-link mt-6 !text-white" href={item.href}>Explore this system <Arrow /></Link>}</article>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading eyebrow="Tools support decisions" title="Evidence from the right sources—interpreted in context." copy="Depending on access and scope, analysis may use Google Search Console, GA4, Google Tag Manager, Google Business Profile, PageSpeed Insights, crawl tools, Ahrefs, Semrush, Screaming Frog, Microsoft Clarity, or Hotjar." />
        <div className="mt-10 border-y border-[var(--line-strong)] py-7 md:ml-[25%]"><p className="max-w-3xl text-xl leading-8">No single platform is absolute truth. Tools provide evidence; the useful work is deciding what that evidence means for this website, this market, and this business.</p></div>
      </div>
    </section>

    <section className="section bg-[var(--surface)]">
      <div className="shell">
        <SectionHeading eyebrow="Reduce the risk" title="What to ask before hiring an SEO expert in Nepal." copy="Look for reasoning you can inspect—not a promise you cannot verify." />
        <div className="mt-14 grid gap-12 md:ml-[25%] md:grid-cols-2">
          <article><h3 className="font-serif text-3xl">Ask this</h3><ul className="mt-5">{hiringQuestions.map((item) => <li className="border-t border-[var(--line)] py-3" key={item}>{item}</li>)}</ul></article>
          <article><h3 className="font-serif text-3xl">Treat this as a warning</h3><ul className="mt-5">{warningSigns.map((item) => <li className="border-t border-[var(--line)] py-3" key={item}>{item}</li>)}</ul></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading eyebrow="Responsible expectations" title="How long SEO takes depends on what is holding the site back." />
        <div className="mt-10 max-w-3xl space-y-5 text-lg leading-8 text-[var(--muted)] md:ml-[25%]">
          <p>Focused corrections can create useful signals and learning relatively quickly, especially when a strong page is being held back by a clear technical, intent, or conversion problem.</p>
          <p>Competitive commercial growth usually takes sustained work across technical foundations, page quality, internal links, local relevance, useful content, and genuine authority. Search engines—not providers—decide final positions.</p>
          <p>The responsible next step is to understand the website size, current condition, competition, target markets, content needs, implementation responsibility, and measurement quality before estimating scope or timing.</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading eyebrow="FAQ" title="Working with an SEO expert in Nepal, answered." />
        <div className="mt-14 md:ml-[25%]">{faqs.map((item) => <details className="group border-t border-[var(--line-strong)] py-5" key={item.question}><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl"><span>{item.question}</span><span aria-hidden="true" className="text-[var(--accent)] transition-transform group-open:rotate-45">+</span></summary><p className="prose-copy mt-4 pr-8">{item.answer}</p></details>)}</div>
      </div>
    </section>

    <section className="section signal-grid">
      <div className="shell grid gap-8 md:grid-cols-[1fr_3fr]">
        <p className="eyebrow">Direct specialist input / Next step</p>
        <div><h2 className="section-title">Find the SEO constraint that matters most.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">Share your website, target market, priority services, and the problem you are trying to solve. The first conversation is used to understand whether the right next step is an audit, roadmap, focused project, or ongoing SEO programme.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="button button-primary" href="/contact">Request an SEO review <Arrow /></Link><a className="button" href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp Rohan <Arrow direction="up-right" /></a></div><p className="mt-5 text-sm">Email <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call <a className="underline" href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>.</p></div>
      </div>
    </section>

    <PageStructuredData path="/seo-expert-in-nepal" />
  </>;
}
