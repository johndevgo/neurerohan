import Image from "next/image";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "./ui";

export type SearchEvidenceId = (typeof siteConfig.proofImages)[number]["id"];
export type PaidEvidenceId = (typeof siteConfig.paidProofImages)[number]["id"];

type EvidenceItem = {
  readonly id: string;
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly caption: string;
  readonly source: "Google Search Console" | "Google Ads";
  readonly stats?: readonly { readonly label: string; readonly value: string }[];
  readonly interpretation?: string;
};

type EvidenceGalleryProps = {
  compact?: boolean;
  copy: string;
  dark?: boolean;
  disclaimer: string;
  eyebrow: string;
  items: readonly EvidenceItem[];
  sectionId?: string;
  title: string;
};

function EvidenceGallery({ compact = false, copy, dark = false, disclaimer, eyebrow, items, sectionId, title }: EvidenceGalleryProps) {
  const captionTone = dark ? "!bg-[var(--ink-soft)] !text-white/70" : "";
  const grid = compact ? "gap-4 md:grid-cols-2" : "gap-5 md:grid-cols-2";

  return <section id={sectionId} className={`section scroll-mt-24 ${dark ? "section-dark" : "bg-[var(--surface)]"}`}>
    <div className="shell">
      <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
      <div className={`mt-14 grid items-start ${grid}`}>
        {items.map((proof, index) => <figure className="proof-frame min-w-0" key={proof.id}>
          <a className="proof-image-link" href={proof.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full source capture: ${proof.caption}`}>
            <Image
              className="h-auto w-full"
              src={proof.src}
              alt={proof.alt}
              width={proof.width}
              height={proof.height}
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </a>
          <figcaption className={`proof-caption ${captionTone}`}><span>{String(index + 1).padStart(2, "0")} / {proof.source} / {proof.caption}</span><a href={proof.src} target="_blank" rel="noopener noreferrer">View source ↗</a></figcaption>
          {proof.stats && <dl className={`proof-metrics ${dark ? "proof-metrics-dark" : ""}`}>
            {proof.stats.map((stat) => <div key={`${proof.id}-${stat.label}`}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}
          </dl>}
          {proof.interpretation && <p className={`proof-interpretation ${dark ? "proof-interpretation-dark" : ""}`}><strong>Why this is shown:</strong> {proof.interpretation}</p>}
        </figure>)}
      </div>
      <p className={`mt-7 max-w-5xl border-t pt-5 text-sm leading-6 ${dark ? "border-white/25 text-white/55" : "border-[var(--line-strong)] text-[var(--muted)]"}`}>{disclaimer}</p>
    </div>
  </section>;
}

function searchItems(ids?: readonly SearchEvidenceId[]): EvidenceItem[] {
  const selected = ids?.length ? siteConfig.proofImages.filter((proof) => ids.includes(proof.id)) : siteConfig.proofImages;
  return selected.map((proof) => ({ ...proof, source: "Google Search Console" }));
}

function paidItems(ids?: readonly PaidEvidenceId[]): EvidenceItem[] {
  const selected = ids?.length ? siteConfig.paidProofImages.filter((proof) => ids.includes(proof.id)) : siteConfig.paidProofImages;
  return selected.map((proof) => ({ ...proof, source: "Google Ads" }));
}

type SearchEvidenceProps = {
  compact?: boolean;
  copy: string;
  dark?: boolean;
  eyebrow?: string;
  ids?: readonly SearchEvidenceId[];
  sectionId?: string;
  title: string;
};

export function SearchEvidence({ compact, copy, dark, eyebrow = "Search evidence / source captures", ids, sectionId, title }: SearchEvidenceProps) {
  return <EvidenceGallery compact={compact} copy={copy} dark={dark} eyebrow={eyebrow} items={searchItems(ids)} sectionId={sectionId} title={title} disclaimer="These anonymised Google Search Console captures show monitored organic visibility in the source interface. They are not promises of rankings, leads, revenue or sole attribution. A responsible review still checks the baseline, period, pages, market conditions and work completed." />;
}

type PaidMediaEvidenceProps = Omit<SearchEvidenceProps, "ids"> & { ids?: readonly PaidEvidenceId[] };

export function PaidMediaEvidence({ compact, copy, dark, eyebrow = "Paid-media evidence / source captures", ids, sectionId, title }: PaidMediaEvidenceProps) {
  return <EvidenceGallery compact={compact} copy={copy} dark={dark} eyebrow={eyebrow} items={paidItems(ids)} sectionId={sectionId} title={title} disclaimer="These anonymised Google Ads interface captures show account-reported campaign activity. ‘Conversions’ reflects configured account actions and attribution settings; the captures do not by themselves verify customers, revenue, profitability, sole attribution or future results." />;
}

type PerformanceEvidenceProps = Omit<SearchEvidenceProps, "ids"> & {
  paidIds?: readonly PaidEvidenceId[];
  searchIds?: readonly SearchEvidenceId[];
};

export function PerformanceEvidence({ compact, copy, dark, eyebrow = "Performance evidence / source captures", paidIds, searchIds, sectionId, title }: PerformanceEvidenceProps) {
  return <EvidenceGallery compact={compact} copy={copy} dark={dark} eyebrow={eyebrow} items={[...searchItems(searchIds), ...paidItems(paidIds)]} sectionId={sectionId} title={title} disclaimer="These anonymised source captures show two measurable layers: organic visibility in Google Search Console and account-reported campaign activity in Google Ads. They do not independently verify customers, revenue, profitability or sole attribution, and they are not a forecast or guarantee. A responsible review checks each period, conversion definition, baseline and business context." />;
}
