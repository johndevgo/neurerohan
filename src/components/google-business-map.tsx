import { Arrow } from "./icons";
import { siteConfig } from "@/content/site";

type GoogleBusinessMapProps = {
  note?: string;
};

export function GoogleBusinessMap({ note = "Sallaghari Shopping Complex, Bhaktapur 44800, Nepal" }: GoogleBusinessMapProps) {
  return <div className="map-panel">
    <div className="map-frame">
      <iframe
        src={siteConfig.mapEmbedUrl}
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="GrowthLabs by Rohan Neure location in Sallaghari, Bhaktapur"
      />
    </div>
    <div className="map-caption">
      <div>
        <p className="eyebrow">Business location</p>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{note}</p>
      </div>
      <a className="text-link w-fit" href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer">
        Open in Google Maps <Arrow direction="up-right" />
      </a>
    </div>
  </div>;
}
