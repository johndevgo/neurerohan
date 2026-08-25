# Phase 2: Blog and publishing module

## Goal

Add a durable, **backend-free** editorial system without changing the Phase 1 shell or design system. Articles will live as version-controlled MDX files in the repository. Publishing is a Git commit and deployment, so there is no database, authentication service, media backend, or public admin dashboard to operate.

Phase 1 now includes a real `/insights` hub, ten source-backed static articles, a questions library, glossary, evidence-led case-study hub, free tools, and downloadable resources. Those URLs, metadata, internal links, schema, visible sources, and files must be preserved when the content layer later moves to MDX.

## Public blog

Extend the existing `/insights` and `/insights/[slug]` routes with pagination, category and tag filters, and search when the library is large enough to need them. Keep questions, glossary terms, evidence records, resources, and tools as separate content types rather than forcing every item into an Article model. Future article pages can add featured imagery and accessible social-sharing actions while preserving the current author information, reading time, related articles, canonical controls, visible citations and Article structured data. Drafts and scheduled articles must never appear in public queries, feeds, search results, related content, sitemap entries, or the RSS feed. Published articles will feed `/feed.xml` and the existing sitemap generator.

Suggested domain model:

- Article: title, slug, excerpt, body document, featured image, author, status, publish date, optional scheduled date, SEO fields, canonical URL, timestamps, and revision reference
- Category and Tag: unique name and slug with many-to-many article relations
- Author: display name, biography, image, social profiles, and account relation
- Media: storage key, URL, dimensions, MIME type, alt text, caption, attribution, and ownership metadata
- Revision: immutable article snapshot, editor, timestamp, and change note

## Publishing workflow

Do not build `/admin`. Use a local article template plus validation scripts. Draft MDX files remain excluded from public queries, feeds and the sitemap. Images live under a structured `public/images/insights` directory and are committed with the article. Git history supplies revision history and rollback.

Preview through the normal Next.js development server so draft and production content use the same components. Frontmatter should include title, slug, excerpt, author, published date, optional updated date, status, categories, tags, featured image, SEO title, description and canonical override. Scheduled publishing is deliberately excluded because a backend-free workflow cannot guarantee time-based release without an external automation service.

## Technical options

### Database

- **PostgreSQL + Prisma or Drizzle (recommended):** strong relational model, migrations, portability, and broad hosting support. Managed providers include Neon and Supabase.
- **Hosted headless CMS:** fastest editorial setup but adds vendor-specific schemas, pricing, and portability work.
- **Git-based MDX:** highly portable and simple for developer-only publishing, but unsuitable for the requested non-technical dashboard and media workflow without substantial custom tooling.

Recommendation: no database. Use typed MDX plus a content repository module. Reconsider PostgreSQL only if multiple non-technical editors, granular permissions, scheduling or large-scale search become genuine requirements.

### Authentication

- **Auth.js:** portable and integrated with Next.js; requires careful provider/session configuration.
- **Clerk:** polished admin UX and fast setup; recurring cost and vendor dependency.
- **Supabase Auth:** good fit if Supabase also hosts the database/storage.

Recommendation: no application authentication because no dashboard exists. Protect the Git provider and hosting account with MFA.

### Image storage

- **Cloudinary:** excellent transformations and responsive delivery; proprietary URLs/workflow.
- **S3-compatible storage (S3, R2):** portable and cost-effective; requires an image transformation/CDN plan.
- **Supabase Storage:** convenient if the rest of the stack uses Supabase.

Recommendation: repository-hosted optimised images for the initial blog. Keep filenames, dimensions, alt text and attribution in MDX frontmatter. Reconsider R2 or Cloudinary only if the repository becomes impractically large.

### Editor

- **Tiptap (recommended):** extensible ProseMirror foundation, structured JSON, strong custom-block support.
- **Lexical:** performant and flexible, but needs more application-level assembly.
- **BlockNote:** quicker block-editor UX with more opinionated output.

Recommendation: MDX edited in a code editor or GitHub's web editor. Validate frontmatter and disallow arbitrary unsafe HTML/components.

## Security and operations

- Enforce server-side role checks, CSRF-safe mutations, secure cookies, rate limits, and short-lived signed preview URLs.
- Validate uploads by signature, type, size, and dimensions; generate random storage keys; never execute uploaded content.
- Sanitize rich content, use a restrictive Content Security Policy, and audit all publish and permission events.
- Back up PostgreSQL daily with point-in-time recovery where available; test restoration quarterly.
- Enable storage versioning or lifecycle backups and keep a provider-independent periodic export of content JSON and media metadata.
- Run migrations through CI before deployment promotion, with rollback notes for destructive schema changes.

## Content portability

Provide export commands for articles, taxonomies, authors, revisions, and media metadata as versioned JSON plus Markdown/HTML renditions. Avoid persisting provider-specific URLs inside article bodies; reference media by stable internal IDs. Document the schema and retain original image files.

## Delivery sequence

1. Finalise MDX frontmatter, content directories and author records; migrate the ten typed launch articles without changing their URLs.
2. Add parsing, validation, draft filtering and calculated reading-time utilities.
3. Build accessible index, article, category and tag routes.
4. Add related content, RSS, article schema and sitemap integration.
5. Add local authoring templates and preview instructions.
6. Test malformed frontmatter, duplicate slugs, drafts, links, accessibility and production export.

No database, authentication, CMS, dashboard or storage service is planned or installed.
