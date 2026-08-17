import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, siteConfig.domain).toString();
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteConfig.name, locale: siteConfig.seo.locale, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
