import { Arrow } from "./icons";

const preferredSourceUrl = "https://www.google.com/preferences/source?q=neurerohan.com.np";

export function PreferredSourceCta({ compact = false }: { compact?: boolean }) {
  return <aside className={compact ? "preferred-source preferred-source-compact" : "preferred-source"} aria-label="Add GrowthLabs as a preferred source on Google">
    <div className="shell preferred-source-inner">
      <div className="preferred-source-copy"><span aria-hidden="true" className="preferred-source-star">★</span><p><strong>Want more practical marketing answers?</strong><span>Choose GrowthLabs as a preferred source on Google.</span></p></div>
      <a href={preferredSourceUrl} target="_blank" rel="noopener noreferrer" data-cta-intent="preferred-source" data-cta-location={compact ? "footer" : "global"}>Add GrowthLabs on Google <Arrow direction="up-right" /></a>
    </div>
  </aside>;
}
