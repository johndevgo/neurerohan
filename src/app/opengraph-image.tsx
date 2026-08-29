import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.brandName}: digital marketing agency in Nepal`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function Image() {
  const avatarFile = await readFile(join(process.cwd(), "public", "images", "brand", "growthlabs-brand-avatar.png"));
  const brandAvatar = avatarFile.buffer.slice(avatarFile.byteOffset, avatarFile.byteOffset + avatarFile.byteLength);

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#11110f", color: "#f3f0e8", padding: 64, fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", inset: "0 0 0 75%", display: "flex", background: "linear-gradient(155deg,#ffe19a 0%,#f4c957 52%,#dceb82 100%)" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", backgroundImage: "linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)", backgroundSize: "150px 100%" }} />
      <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 22, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={brandAvatar as unknown as string} alt="" width="56" height="56" style={{ width: 56, height: 56, marginRight: 18, border: "1px solid rgba(255,255,255,.5)", borderRadius: 999, objectFit: "cover" }} />
          GrowthLabs by Rohan Neure
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}><div style={{ display: "flex", maxWidth: 890, fontSize: 88, lineHeight: .95, fontWeight: 900, letterSpacing: "-6px", textTransform: "uppercase" }}>Marketing built to rank, convert, and grow.</div><div style={{ display: "flex", marginTop: 30, fontSize: 24, color: "#c9c2b7", letterSpacing: "1px" }}>Founder-led digital growth · Bhaktapur · Nepal</div></div>
      </div>
    </div>,
    size,
  );
}
