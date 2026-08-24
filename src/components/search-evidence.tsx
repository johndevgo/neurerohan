import Image from "next/image";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "./ui";

export type SearchEvidenceId = (typeof siteConfig.proofImages)[number]["id"];

type SearchEvidenceProps = {
  compact?: boolean;
  copy: string;
  dark?: boolean;
  eyebrow?: string;
  ids?: readonly SearchEvidenceId[];
  sectionId?: string;
  title: string;
};

export function SearchEvidence({ compact = false, copy, dark = false, eyebrow = "Search evidence / source captures", ids, sectionId, title }: SearchEvidenceProps) {
  const selected = ids?.length ? siteConfig.proofImages.filter((proof) => ids.includes(proof.id)) : siteConfig.proofImages;
  const captionTone = dark ? "!bg-[var(--ink-soft)] !text-white/70" : "";
  const grid = compact ? "gap-4 md:grid-cols-2" : "gap-5 md:grid-cols-2";

  return <section id={sectionId} className={`section scroll-mt-24 ${dark ? "section-dark" : "bg-[var(--surface)]"}`}>
    <div className="shell">
      <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
      <div className={`mt-14 grid items-start ${grid}`}>
        {selected.map((proof, index) => <figure className="proof-frame min-w-0" key={proof.id}>
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
          <figcaption className={`proof-caption ${captionTone}`}><span>0{index + 1} / {proof.caption}</span><a href={proof.src} target="_blank" rel="noopener noreferrer">View source ↗</a></figcaption>
        </figure>)}
      </div>
      <p className={`mt-7 max-w-5xl border-t pt-5 text-sm leading-6 ${dark ? "border-white/25 text-white/55" : "border-[var(--line-strong)] text-[var(--muted)]"}`}>These anonymised Google Search Console captures show monitored organic visibility in the source interface. They are not promises of rankings, leads, revenue or sole attribution. A responsible review still checks the baseline, period, pages, market conditions and work completed.</p>
    </div>
  </section>;
}
