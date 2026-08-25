import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { commercialLandings } from "@/content/landing-pages";
import { insights } from "@/content/insights";
import { resources } from "@/content/knowledge";
import { marketingTools } from "@/content/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/digital-marketing-agency-in-nepal",
    "/seo-expert-in-nepal",
    "/seo-company-in-nepal",
    ...commercialLandings.map((page) => `/${page.slug}`),
    "/insights",
    "/insights/questions",
    "/insights/glossary",
    "/insights/case-studies",
    ...insights.map((article) => `/insights/${article.slug}`),
    "/resources",
    ...resources.map((resource) => `/resources/${resource.slug}`),
    "/tools",
    ...marketingTools.map((tool) => `/tools/${tool.slug}`),
    "/about",
    "/contact",
    "/privacy",
  ];
  const durableRoutes = new Set(["/about", "/contact", "/privacy"]);
  const staticRoutes = routes.map((route) => ({ url: `${siteConfig.domain}${route}`, changeFrequency: durableRoutes.has(route) ? "yearly" as const : "monthly" as const, priority: route === "" ? 1 : .7 }));
  const projects = siteConfig.projects.map((project) => ({ url: `${siteConfig.domain}/work/${project.slug}`, changeFrequency: "yearly" as const, priority: .6 }));
  return [...staticRoutes, ...projects];
}
