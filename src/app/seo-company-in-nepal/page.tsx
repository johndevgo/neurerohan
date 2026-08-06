import { SeoLanding } from "@/components/seo-landing";
import { companyFaqs } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("SEO Company in Nepal | SEO Services by GrowthLabs", "GrowthLabs by Rohan Neure is an SEO company in Nepal helping businesses grow with keyword strategy, technical SEO, content planning, local SEO, and conversion-focused SEO services.", "/seo-company-in-nepal");

export default function SeoCompanyPage() { return <SeoLanding variant="company" faqs={companyFaqs} />; }
