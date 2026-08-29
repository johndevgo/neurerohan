import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/content/site";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { globalSchema, StructuredData } from "@/components/structured-data";
import { GoogleTagManagerNoScript, GoogleTagManagerScript } from "@/components/google-tag-manager";
import { MeasurementConsent } from "@/components/measurement-consent";
import { ResourceLibraryPrompt } from "@/components/resource-library-prompt";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: siteConfig.seo.title, template: `%s: ${siteConfig.name}` },
  description: siteConfig.seo.description,
  alternates: { canonical: "/" },
  openGraph: { title: siteConfig.seo.title, description: siteConfig.seo.description, url: siteConfig.domain, siteName: siteConfig.name, locale: siteConfig.seo.locale, type: "website" },
  twitter: { card: "summary_large_image", title: siteConfig.seo.title, description: siteConfig.seo.description },
  icons: {
    icon: [{ url: "/images/brand/growthlabs-favicon-48.png", type: "image/png", sizes: "48x48" }],
    shortcut: "/images/brand/growthlabs-favicon-48.png",
    apple: [{ url: "/images/brand/growthlabs-apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f3f0e8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-NP">
    <head><GoogleTagManagerScript /></head>
    <body>
      <GoogleTagManagerNoScript />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <ResourceLibraryPrompt />
      <SiteFooter measurementEnabled />
      <MeasurementConsent />
      <StructuredData data={globalSchema} />
    </body>
  </html>;
}
