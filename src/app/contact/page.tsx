import Link from "next/link";
import { PageIntro } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact GrowthLabs", "Call, email, or message Rohan Neure on WhatsApp to discuss SEO, paid ads, websites, content, CRO, and digital marketing strategy in Nepal.", "/contact");

const channels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, note: "Best for context, website links, and detailed enquiries." },
  { label: "Call", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}`, note: "Call directly to discuss your current growth challenge." },
  { label: "WhatsApp", value: "Message Rohan", href: siteConfig.whatsapp, note: "A quick way to start a direct conversation." },
  { label: "LinkedIn", value: "Connect with Rohan", href: siteConfig.socials[0].href, note: "Follow the work and connect professionally." },
];

export default function ContactPage() {
  return <><PageIntro eyebrow="Contact / 04" title="Let’s find the right growth problem to solve."><p>Share what your business does, what is currently working, and where marketing feels stuck. The first step is clarity—not a generic package.</p></PageIntro>
    <section className="section"><div className="shell grid gap-12 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Choose a channel</p><div><div className="grid gap-8 sm:grid-cols-2">{channels.map((channel) => <article className="card" key={channel.label}><p className="eyebrow">{channel.label}</p><a className="mt-4 block font-serif text-2xl tracking-[-.025em] hover:text-[var(--accent)]" href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}>{channel.value} {channel.href.startsWith("http") && <span aria-hidden="true">↗</span>}</a><p className="mt-4 text-sm leading-6 text-[var(--muted)]">{channel.note}</p></article>)}</div><div className="mt-12 border-l-2 border-[var(--accent)] pl-5"><p className="font-semibold">Helpful details to include</p><p className="mt-2 max-w-2xl leading-7 text-[var(--muted)]">Your website, primary service, target market, current SEO or advertising challenge, and the business outcome you want to improve.</p></div><p className="mt-8 text-sm text-[var(--muted)]">{siteConfig.availability}</p></div></div></section>
    <section className="section"><div className="shell grid gap-8 md:grid-cols-[1fr_3fr]"><p className="eyebrow">Privacy</p><div><h2 className="section-title">No form. No hidden tracking.</h2><p className="lede mt-6">This site does not collect contact details through a form. Email, phone, WhatsApp, and LinkedIn open the service you choose. Read the <Link className="text-link" href="/privacy">privacy note</Link> for details.</p></div></div></section></>;
}
