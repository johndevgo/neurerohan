import Image from "next/image";
import { Arrow } from "./icons";
import { SectionHeading } from "./ui";
import { credentials } from "@/content/credentials";
import type { CredentialKey } from "@/content/credentials";
import { siteConfig } from "@/content/site";

type Props = { ids: readonly CredentialKey[]; title?: string; copy?: string; compact?: boolean; sectionId?: string };

export function CredentialProof({ ids, title = "Platform credentials you can inspect, not a decorative logo wall.", copy = "We have confirmed that the supplied partner and certification artwork is authorised for GrowthLabs. Each credential is shown in its original supplied form and placed beside the service it supports.", compact = false, sectionId }: Props) {
  const selected = ids.map((id) => credentials[id]);
  if (!selected.length) return null;
  return <section className="section credential-section bg-[var(--surface)]" id={sectionId}><div className="shell">
    <SectionHeading eyebrow="Verified GrowthLabs credentials" title={title} copy={copy} />
    <div className={`credential-grid mt-12 md:ml-[25%] ${compact || selected.length < 4 ? "credential-grid-compact" : ""}`}>
      {selected.map((credential) => {
        const contents = <><div className="credential-image-wrap"><Image className="h-full w-full object-contain" src={credential.src} alt={credential.alt} width={credential.width} height={credential.height} sizes="(max-width: 768px) 92vw, (max-width: 1200px) 42vw, 24vw" /></div><div className="credential-copy"><p className="font-mono text-[.62rem] font-bold uppercase tracking-[.055em] text-[var(--accent)]">{credential.kind === "review" ? "Public rating artwork" : "Platform credential"}</p><h3 className="mt-2 font-serif text-xl leading-tight tracking-[-.035em]">{credential.name}</h3><p className="mt-3 text-xs leading-5 text-[var(--muted)]">{credential.caption}</p>{credential.kind === "review" && <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold">View the Google Business Profile <Arrow direction="up-right" /></span>}</div></>;
        return credential.kind === "review" ? <a className="credential-card" href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" key={credential.key}>{contents}</a> : <article className="credential-card" key={credential.key}>{contents}</article>;
      })}
    </div>
    <p className="mt-7 max-w-3xl border-l-2 border-[var(--accent)] pl-4 text-sm leading-6 text-[var(--muted)] md:ml-[25%]">Credentials establish platform familiarity; the adjacent account captures show selected reported performance. Neither replaces a scope-specific audit, current platform verification or an agreed definition of a qualified conversion.</p>
  </div></section>;
}
