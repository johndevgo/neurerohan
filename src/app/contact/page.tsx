import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";
import { ContactForm } from "@/components/contact-form";
import { Arrow } from "@/components/icons";
import { GoogleBusinessMap } from "@/components/google-business-map";
import { PageStructuredData } from "@/components/structured-data";
import { Breadcrumbs, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact GrowthLabs by Rohan Neure",
  "Contact Rohan Neure directly by WhatsApp, email or phone to discuss SEO, Google Ads, Meta Ads, websites, analytics, tracking or CRO.",
  "/contact",
);

const helpfulDetails = [
  ["Your website or primary profile", "A URL gives Rohan useful context before the first conversation."],
  ["The offer you want to grow", "Name the service, product, property or priority page that matters most."],
  ["The market you serve", "Include the locations, customer groups or source markets you want to reach."],
  ["What you have already tried", "Summarise relevant SEO, advertising, social media or website work."],
  ["The qualified action you need", "Explain whether success means a suitable enquiry, booking, call, visit or sale."],
];

const nextSteps = [
  ["Context review", "Rohan reviews the business context, website and stated challenge before recommending a service."],
  ["Clarifying conversation", "The first conversation explores the audience, offer, current system, constraints and desired result."],
  ["Right-sized next step", "If GrowthLabs is a fit, the next step may be an audit, strategy, focused project or ongoing programme."],
  ["Transparent scope", "Any proposal should show deliverables, responsibilities, timing, fees, exclusions and measurement."],
];

const faqs = [
  ["Can I contact GrowthLabs on WhatsApp?", `Yes. Use ${siteConfig.phoneDisplay} or the WhatsApp button on this page.`],
  ["Can I arrange an online appointment?", "Yes. Online appointments are available. Confirm the time and platform directly with Rohan."],
  ["Can I visit the Bhaktapur location?", "On-site services may be arranged, but confirm the meeting and access details before visiting Sallaghari Shopping Complex."],
  ["What should I send for an SEO review?", "Send the website, target services or products, markets, current Search Console or analytics status if known, and the organic result you want to improve."],
  ["What should I send for an advertising review?", "Send the offer, audience, landing page, active platforms, approximate media budget, current tracking and your definition of a qualified lead or sale."],
  ["Do I need to choose a package before contacting you?", "No. Share the problem first. GrowthLabs can recommend the appropriate audit, project or ongoing scope after review."],
];

export default function ContactPage() {
  return <>
    <Breadcrumbs items={[{ label: "Contact" }]} />
    <section className="contact-hero"><div className="shell"><p className="contact-hero-kicker">Founder-led SEO, paid media & growth strategy</p><h1>Let’s talk about <em>your growth.</em></h1><p>Tell Rohan what you are building, where marketing is getting stuck and what a valuable result looks like. Expect a direct, practical reply—not a scripted sales sequence.</p></div></section>

    <section className="section contact-form-section"><div className="shell contact-form-layout"><aside className="contact-details-card"><p className="eyebrow">Contact details</p><h2>Reach Rohan directly.</h2><p>Use the form or whichever channel feels easiest. Every serious enquiry is reviewed personally.</p><div className="contact-details-list"><a href={siteConfig.cta.phone.href}><span>Call / WhatsApp</span><strong>{siteConfig.phoneDisplay}</strong></a><a href={`mailto:${siteConfig.email}`}><span>Email</span><strong>{siteConfig.email}</strong></a><a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer"><span>Location</span><strong>Bhaktapur, Nepal</strong></a><div><span>Availability</span><strong>Sunday–Friday · Direct founder response</strong></div></div><div className="contact-response-note"><strong>Clear replies, not pressure.</strong><p>If GrowthLabs is not the right fit, Rohan will say so and suggest the clearest next move where possible.</p></div></aside><ContactForm /></div></section>

    <section className="section section-dark">
      <div className="shell">
        <SectionHeading eyebrow="Make the first conversation useful" title="Five details help GrowthLabs prepare." copy="A concise note is enough. You do not need a completed brief or a chosen package." />
        <div className="mt-14 grid gap-8 md:ml-[25%] md:grid-cols-2">
          {helpfulDetails.map(([title, copy], index) => <article className="border-t border-white/25 pt-5" key={title}>
            <p className="eyebrow !text-[var(--sun)]">0{index + 1}</p>
            <h3 className="mt-4 font-serif text-2xl">{title}</h3>
            <p className="mt-3 leading-7 text-white/65">{copy}</p>
          </article>)}
        </div>
        <div className="mt-12 border-l-2 border-[var(--sun)] pl-5 md:ml-[25%]">
          <p className="font-semibold">Keep sensitive information private.</p>
          <p className="mt-2 max-w-3xl leading-7 text-white/65">Do not send passwords, recovery codes, payment-card information, government identification or unnecessary personal data by email or messaging apps. Account access can be arranged securely after scope and responsibility are clear.</p>
        </div>
      </div>
    </section>

    <section className="section signal-grid">
      <div className="shell">
        <SectionHeading eyebrow="Bhaktapur · Kathmandu Valley · Nepal" title="A real base, direct contact and clear availability." copy="GrowthLabs is based in Bhaktapur and serves Kathmandu Valley and businesses across Nepal. Online appointments are available; confirm the meeting format before visiting." />
        <div className="mt-12 grid gap-8 border-y border-[var(--ink)] py-8 md:ml-[25%] md:grid-cols-2">
          <address className="grid gap-2 not-italic">
            <p className="eyebrow">Business location</p>
            <BrandLockup className="mt-3" size="card" />
            <span>Sallaghari Shopping Complex</span>
            <span>Bhaktapur 44800, Nepal</span>
            <a className="text-link mt-4 w-fit" href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer">View GrowthLabs on Google Maps <Arrow direction="up-right" /></a>
          </address>
          <div className="border-t border-[var(--ink)] pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="eyebrow">Opening hours</p>
            <p className="mt-4 font-serif text-3xl leading-none tracking-[-.04em]">Open {siteConfig.openingHours.openTime}</p>
            <p className="mt-3 text-black/65">{siteConfig.openingHours.openDays}</p>
            <p className="mt-5 border-t border-black/25 pt-4 font-semibold">{siteConfig.openingHours.closedDay}: closed</p>
            <div className="mt-6 grid gap-2">
              <a className="text-link w-fit" href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
              <a className="text-link w-fit" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </div>
        </div>
        <div className="mt-8 md:ml-[25%]">
          <GoogleBusinessMap note="GrowthLabs is based at Sallaghari Shopping Complex in Bhaktapur. Confirm the meeting format before visiting; online appointments and appropriate on-site support are available." />
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading eyebrow="A practical first step" title="Expect clarification before a proposal." />
        <ol className="mt-14 border-b border-[var(--ink)] md:ml-[25%]">
          {nextSteps.map(([title, copy], index) => <li className="grid gap-3 border-t border-[var(--ink)] py-6 sm:grid-cols-[4rem_1fr_2fr]" key={title}>
            <span className="font-mono text-xs">0{index + 1}</span>
            <h3 className="font-serif text-2xl leading-none tracking-[-.04em]">{title}</h3>
            <p className="leading-7 text-black/65">{copy}</p>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading eyebrow="Better qualification for both sides" title="GrowthLabs is a strong fit when you want connected improvement." copy="The best engagements involve a real offer, access to useful business context, willingness to improve the website or customer journey and interest in measurable outcomes rather than vanity activity. If a request requires a service GrowthLabs does not genuinely provide, Rohan will say so rather than force an unsuitable package." />
        <div className="mt-8 md:ml-[25%]"><Link className="text-link" href="/services">Review the complete service system <Arrow /></Link></div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading eyebrow="Contact questions" title="Before you start the conversation." />
        <div className="mt-14 md:ml-[25%]">
          {faqs.map(([question, answer]) => <details className="group border-t border-[var(--line)] py-5" key={question}>
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl"><span>{question}</span><span aria-hidden="true" className="text-[var(--accent)] group-open:rotate-45">+</span></summary>
            <p className="prose-copy mt-4 pr-8">{answer}</p>
          </details>)}
        </div>
      </div>
    </section>

    <section className="section signal-grid">
      <div className="shell grid gap-8 md:grid-cols-[1fr_3fr]">
        <p className="eyebrow">Start the conversation</p>
        <div>
          <h2 className="section-title">Share the context. Find the next right step.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">{siteConfig.cta.microcopy}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="button button-primary" href={siteConfig.cta.whatsapp.href} target="_blank" rel="noopener noreferrer" data-cta-intent="growth-review" data-cta-location="contact-final" data-cta-channel="whatsapp">{siteConfig.cta.whatsapp.label} <Arrow direction="up-right" /></a>
            <a className="button" href={siteConfig.cta.email.href} data-cta-intent="growth-review" data-cta-location="contact-final" data-cta-channel="email">{siteConfig.cta.email.label} <Arrow /></a>
          </div>
          <p className="mt-5 font-mono text-[.72rem] uppercase leading-5 tracking-[.04em] text-black/65">{siteConfig.cta.reassurance} · {siteConfig.phoneDisplay}</p>
          <p className="mt-3 text-sm text-black/60">Direct channels are governed by their own services. Read the <Link className="underline underline-offset-4" href="/privacy">Privacy Policy</Link>.</p>
        </div>
      </div>
    </section>

    <PageStructuredData path="/contact" faqs={faqs.map(([question, answer]) => ({ question, answer }))} />
  </>;
}
