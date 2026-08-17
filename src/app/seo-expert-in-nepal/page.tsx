import { SeoLanding } from "@/components/seo-landing";
import { expertFaqs } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("SEO Expert in Nepal | Rohan Neure, GrowthLabs", "Work directly with Rohan Neure, an SEO expert in Nepal, on technical SEO, keyword strategy, content, local search and conversion-focused growth.", "/seo-expert-in-nepal");

export default function SeoExpertPage() { return <SeoLanding variant="expert" faqs={expertFaqs} />; }
