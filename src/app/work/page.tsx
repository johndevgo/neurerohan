import Link from "next/link";
import { Arrow } from "@/components/icons";
import { ContactCta, EmptyState, PageIntro } from "@/components/ui";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Work", "Selected projects and documented work by Rohan.", "/work");

export default function WorkPage() {
  return <><PageIntro eyebrow="Work / 03" title="Selected work, without the theatre."><p>Projects will be shown with enough context to understand the challenge, contribution, and supported outcome.</p></PageIntro><section className="section"><div className="shell">{siteConfig.projects.length ? <div>{siteConfig.projects.map((project, index) => <article className="grid gap-5 border-t border-[var(--ink)] py-8 md:grid-cols-[1fr_2fr_1fr]" key={project.slug}><p className="eyebrow">{String(index + 1).padStart(2, "0")} · {project.category}</p><div><h2 className="font-serif text-4xl tracking-[-.04em]">{project.title}</h2><p className="mt-4 max-w-xl text-[var(--muted)]">{project.summary}</p></div><Link className="text-link h-fit w-fit md:justify-self-end" href={`/work/${project.slug}`}>View project <Arrow /></Link></article>)}</div> : <EmptyState title="The work archive is ready; the case studies are not." copy="No sample projects or invented outcomes are shown. Add real projects to the central typed source and this index will render them automatically." />}</div></section><ContactCta /></>;
}
