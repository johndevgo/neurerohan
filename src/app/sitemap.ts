import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { commercialLandings } from "@/content/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/digital-marketing-agency-in-nepal", "/seo-expert-in-nepal", "/seo-company-in-nepal", ...commercialLandings.map((page) => `/${page.slug}`), "/about", "/contact", "/privacy"];
  const durableRoutes = new Set(["/about", "/contact", "/privacy"]);
  const staticRoutes = routes.map((route) => ({ url: `${siteConfig.domain}${route}`, changeFrequency: durableRoutes.has(route) ? "yearly" as const : "monthly" as const, priority: route === "" ? 1 : .7 }));
  const projects = siteConfig.projects.map((project) => ({ url: `${siteConfig.domain}/work/${project.slug}`, changeFrequency: "yearly" as const, priority: .6 }));
  return [...staticRoutes, ...projects];
}
