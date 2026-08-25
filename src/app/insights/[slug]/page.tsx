import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticlePage } from "@/components/insight-article";
import { insightBySlug, insights } from "@/content/insights";
import { siteConfig } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insightBySlug[slug];
  if (!article) return {};
  const url = `${siteConfig.domain}/insights/${article.slug}`;
  return {
    title: { absolute: article.metaTitle },
    description: article.description,
    alternates: { canonical: url },
    authors: [{ name: siteConfig.fullName, url: `${siteConfig.domain}/about` }],
    openGraph: { title: article.metaTitle, description: article.description, url, siteName: siteConfig.name, locale: siteConfig.seo.locale, type: "article", publishedTime: article.datePublished, modifiedTime: article.dateModified, authors: [`${siteConfig.domain}/about`], tags: [article.primaryKeyword, ...article.supportingKeywords] },
    twitter: { card: "summary_large_image", title: article.metaTitle, description: article.description },
  };
}

export default async function InsightRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insightBySlug[slug];
  if (!article) notFound();
  return <InsightArticlePage article={article} />;
}
