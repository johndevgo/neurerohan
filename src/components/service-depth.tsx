import Link from "next/link";
import { serviceDepth } from "@/content/service-depth";
import { Arrow } from "./icons";
import { SectionHeading } from "./ui";

export function ServiceDepth({ pageKey }: { pageKey: string }) {
  const content = serviceDepth[pageKey];
  if (!content) return null;

  return <section className="section service-depth" aria-label="Delivery, priorities and next steps">
    <div className="shell">
      <SectionHeading eyebrow="From strategy to delivery" title={content.title} copy={content.intro} />
      <div className="service-depth-layout">
        <div className="service-depth-copy">
          {content.focus.map((item) => <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>)}
        </div>
        <aside className="service-depth-delivery">
          <p className="eyebrow">What we put into practice</p>
          <ul>{content.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
          <Link className="button button-primary" href="/contact" data-cta-intent={pageKey} data-cta-location="service-depth" data-cta-channel="contact">{content.cta} <Arrow /></Link>
        </aside>
      </div>
      <nav aria-label="Related services and practical guidance" className="service-depth-links">
        {content.links.map((link) => <Link href={link.href} key={link.href}>{link.label}<Arrow /></Link>)}
      </nav>
    </div>
  </section>;
}
