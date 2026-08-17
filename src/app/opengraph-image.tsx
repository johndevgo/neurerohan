import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.brandName} — digital marketing agency in Nepal`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#11110f", color: "#f3f0e8", padding: 64, fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", inset: "0 0 0 75%", display: "flex", background: "linear-gradient(155deg,#ffe19a 0%,#f4c957 52%,#dceb82 100%)" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", backgroundImage: "linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)", backgroundSize: "150px 100%" }} />
      <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 22, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}><span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, marginRight: 18, background: "linear-gradient(135deg,#ffe19a,#dceb82)", color: "#11110f", fontWeight: 900 }}>G/L</span>GrowthLabs by Rohan Neure</div>
        <div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", maxWidth: 890, fontSize: 88, lineHeight: .95, fontWeight: 900, letterSpacing: "-6px", textTransform: "uppercase" }}>Marketing built to rank, convert, and grow.</div><div style={{ display: "flex", marginTop: 30, fontSize: 24, color: "#c9c2b7", letterSpacing: "1px" }}>Founder-led digital growth · Bhaktapur · Nepal</div></div>
      </div>
    </div>,
    size,
  );
}
