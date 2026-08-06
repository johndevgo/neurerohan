import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/content/site";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: siteConfig.seo.title, template: `%s — ${siteConfig.name}` },
  description: siteConfig.seo.description,
  alternates: { canonical: "/" },
  openGraph: { title: siteConfig.seo.title, description: siteConfig.seo.description, url: siteConfig.domain, siteName: siteConfig.name, locale: siteConfig.seo.locale, type: "website" },
  twitter: { card: "summary_large_image", title: siteConfig.seo.title, description: siteConfig.seo.description },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f3f0e8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = { "@context": "https://schema.org", "@type": "Person", name: siteConfig.fullName, url: siteConfig.domain, sameAs: siteConfig.socials.map((item) => item.href) };
  const website = { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.brandName, url: siteConfig.domain };
  const organization = { "@context": "https://schema.org", "@type": "ProfessionalService", name: siteConfig.brandName, url: siteConfig.domain, description: siteConfig.seo.description, email: siteConfig.email, telephone: siteConfig.phone, image: `${siteConfig.domain}${siteConfig.profileImage}`, areaServed: { "@type": "Country", name: "Nepal" }, founder: { "@type": "Person", name: siteConfig.fullName }, sameAs: siteConfig.socials.map((item) => item.href) };
  return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([person, website, organization]).replace(/</g, "\\u003c") }} /></body></html>;
}
