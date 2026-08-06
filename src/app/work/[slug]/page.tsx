import { notFound } from "next/navigation";
import { ContactCta, PageIntro } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() { return siteConfig.projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = siteConfig.projects.find((item) => item.slug === slug);
  return project ? pageMetadata(project.title, project.summary, `/work/${slug}`) : {};
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = siteConfig.projects.find((item) => item.slug === slug); if (!project) notFound();
  return <><PageIntro eyebrow={project.category ?? "Project"} title={project.title}><p>{project.summary}</p></PageIntro><section className="section"><div className="content grid gap-10 md:grid-cols-2">{project.challenge && <div><p className="eyebrow">Challenge</p><p className="prose-copy mt-4">{project.challenge}</p></div>}{project.approach && <div><p className="eyebrow">Approach</p><p className="prose-copy mt-4">{project.approach}</p></div>}{project.outcome && <div><p className="eyebrow">Outcome</p><p className="prose-copy mt-4">{project.outcome}</p></div>}</div></section><ContactCta /></>;
}
