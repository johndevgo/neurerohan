import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.brandName} — digital marketing agency in Nepal`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg,#fffaf0,#ffd998)", color: "#1d160e", padding: 72, fontFamily: "serif", borderTop: "18px solid #b84c00" }}><div style={{ display: "flex", fontFamily: "sans-serif", fontSize: 24, fontWeight: 700 }}>GrowthLabs by Rohan Neure · Nepal</div><div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", fontSize: 104, letterSpacing: "-6px" }}>{siteConfig.name}<span style={{ color: "#b84c00" }}>.</span></div><div style={{ marginTop: 24, fontFamily: "sans-serif", fontSize: 30, color: "#695d50" }}>{siteConfig.positioning}</div></div></div>, size);
}
