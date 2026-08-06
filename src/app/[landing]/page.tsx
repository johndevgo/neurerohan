import { notFound } from "next/navigation";
import { CommercialLandingPage } from "@/components/commercial-landing";
import { commercialLandingBySlug, commercialLandings } from "@/content/landing-pages";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() { return commercialLandings.map((page) => ({ landing: page.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ landing: string }> }) {
  const { landing } = await params;
  const page = commercialLandingBySlug[landing];
  return page ? pageMetadata(page.metaTitle, page.description, `/${page.slug}`) : {};
}

export default async function LandingRoute({ params }: { params: Promise<{ landing: string }> }) {
  const { landing } = await params;
  const page = commercialLandingBySlug[landing];
  if (!page) notFound();
  return <CommercialLandingPage page={page} />;
}
