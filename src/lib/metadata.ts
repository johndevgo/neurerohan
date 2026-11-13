import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const socialImage = { url: `${siteConfig.domain}/opengraph-image`, width: 1200, height: 630, alt: `${siteConfig.brandName}: SEO, paid media and conversion strategy` };

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, siteConfig.domain).toString();
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteConfig.name, locale: siteConfig.seo.locale, type: "website", images: [socialImage] },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}
