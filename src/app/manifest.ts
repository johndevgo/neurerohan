import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "GrowthLabs by Rohan Neure",
    short_name: "GrowthLabs",
    description: siteConfig.seo.description,
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    background_color: "#f3f5ef",
    theme_color: "#153c2b",
    lang: "en-NP",
    categories: ["business", "marketing", "productivity"],
    icons: [
      { src: "/images/pwa/growthlabs-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/images/pwa/growthlabs-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/images/pwa/growthlabs-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    screenshots: [
      { src: "/images/pwa/growthlabs-mobile-home.jpg", sizes: "390x844", type: "image/jpeg", form_factor: "narrow", label: "GrowthLabs marketing strategy homepage on mobile" },
      { src: "/images/pwa/growthlabs-desktop-home.jpg", sizes: "1440x900", type: "image/jpeg", form_factor: "wide", label: "GrowthLabs marketing strategy homepage on desktop" },
    ],
    shortcuts: [
      { name: "Explore services", short_name: "Services", url: "/services?source=pwa", icons: [{ src: "/images/pwa/growthlabs-192.png", sizes: "192x192" }] },
      { name: "Read insights", short_name: "Insights", url: "/insights?source=pwa", icons: [{ src: "/images/pwa/growthlabs-192.png", sizes: "192x192" }] },
      { name: "Contact GrowthLabs", short_name: "Contact", url: "/contact?source=pwa", icons: [{ src: "/images/pwa/growthlabs-192.png", sizes: "192x192" }] },
    ],
  };
}
