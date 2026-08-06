import { SeoLanding } from "@/components/seo-landing";
import { expertFaqs } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("SEO Expert in Nepal | Rohan Neure | GrowthLabs", "Work with Rohan Neure, an SEO expert in Nepal helping businesses grow with technical SEO, keyword strategy, content planning, local SEO, and conversion-focused execution.", "/seo-expert-in-nepal");

export default function SeoExpertPage() { return <SeoLanding variant="expert" faqs={expertFaqs} />; }
