import Image from "next/image";
import Link from "next/link";
import type { AgencyAsset } from "@/content/agency-assets";
import type { CommercialLanding } from "@/content/landing-pages";
import { credentials, credentialKeysBySlug } from "@/content/credentials";
import { servicePositioning, type PositionedServiceSlug } from "@/content/service-positioning";
import { Breadcrumbs } from "./ui";
import { Arrow } from "./icons";
import { serviceEvidence } from "./service-evidence";

export function CommercialHero({ page, visual }: { page: CommercialLanding; visual?: AgencyAsset }) {
  const positioning = servicePositioning[page.slug as PositionedServiceSlug];
  const label = page.breadcrumbLabel ?? positioning.keyword;
  const primary = page.primaryCta!;
  const proof = serviceEvidence[page.slug];
  const proofAnchor = page.slug === "seo-services-in-nepal" ? "#seo-results" : "#service-results";
  const credentialIds = credentialKeysBySlug[page.slug] ?? [];
  return <>
    <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label }]} />
    <section className="commercial-hero" aria-labelledby="service-title">
      <div className="shell commercial-hero-grid">
        <div className="commercial-hero-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 id="service-title">{page.title}</h1>
          <p className="commercial-hero-intro">{page.intro}</p>
          <div className="commercial-hero-actions"><Link className="button button-primary" href={primary.href} data-cta-intent={page.slug} data-cta-location="hero" data-cta-channel="contact">{primary.label}<Arrow /></Link><a className="button" href="#capabilities">See what is included<Arrow /></a></div>
          <p className="commercial-hero-note">{page.microcopy}</p>
          {page.secondaryCta && <Link className="commercial-compare" href={page.secondaryCta.href}>{page.secondaryCta.label}<Arrow /></Link>}
          <ul className="commercial-hero-signals" aria-label="Service highlights">{page.trust?.slice(0, 3).map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
        </div>
        {visual && <aside className="commercial-hero-aside" aria-label="Service approach and credentials">
          <figure className="commercial-hero-figure"><Image src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} sizes="(max-width: 767px) 90vw, (max-width: 1023px) 60vw, 38vw" loading="eager" fetchPriority="high" /><figcaption>{visual.caption}</figcaption></figure>
          {credentialIds.length > 0 && <div className="commercial-credential-links"><p>Relevant platform credentials</p><div>{credentialIds.map((id) => <a href="#service-credentials" key={id}>{credentials[id].name}<Arrow direction="up-right" /></a>)}</div></div>}
          {proof && <a className="commercial-proof-link" href={proofAnchor}><span>Real account results</span><strong>{proof.kind === "search" ? "Explore the Search Console captures" : "Explore the Google Ads captures"}<Arrow /></strong></a>}
        </aside>}
      </div>
    </section>
    <nav className="shell service-wayfinder" aria-label="On this service page"><span>Explore the service</span><a href="#service-overview">Fit &amp; value</a><a href="#capabilities">Scope</a>{proof && <a href={proofAnchor}>Results</a>}<a href="#service-process">Process</a><a href="#service-faq">FAQs</a><a href="#service-enquiry">Get in touch<Arrow /></a></nav>
  </>;
}
