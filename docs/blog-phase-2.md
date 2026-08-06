# Phase 2: Blog and publishing module

## Goal

Add a durable editorial publishing system without changing the Phase 1 page shell or design system. Published content should enter through a repository interface and map into typed view models, keeping UI components independent of the eventual database or CMS.

## Public blog

Add `/insights` and `/insights/[slug]` only after at least one approved article exists. The index will support pagination, category and tag filters, and search. Article pages will include author information, featured imagery, estimated reading time, related articles, accessible social-sharing actions, canonical controls, and Article/BlogPosting structured data. Drafts and scheduled articles must never appear in public queries, feeds, search results, related content, sitemap entries, or the RSS feed. Published articles will feed `/feed.xml` and the existing sitemap generator.

Suggested domain model:

- Article: title, slug, excerpt, body document, featured image, author, status, publish date, optional scheduled date, SEO fields, canonical URL, timestamps, and revision reference
- Category and Tag: unique name and slug with many-to-many article relations
- Author: display name, biography, image, social profiles, and account relation
- Media: storage key, URL, dimensions, MIME type, alt text, caption, attribution, and ownership metadata
- Revision: immutable article snapshot, editor, timestamp, and change note

## Publishing dashboard

Protect `/admin` at the edge and server-action/data layers. It should support secure login, article creation and editing, preview tokens, autosaved drafts, publish/unpublish, scheduled publishing, slug editing, SEO title/description/canonical fields, category and tag management, author management, featured-image upload, revision history, and a searchable media library.

The editor should use a portable structured document format. Preview must render through the same article components as production. Publication transitions should be explicit, validated, audited, and safe to retry. Scheduled publishing needs a trusted cron trigger plus an idempotent server operation.

## Technical options

### Database

- **PostgreSQL + Prisma or Drizzle (recommended):** strong relational model, migrations, portability, and broad hosting support. Managed providers include Neon and Supabase.
- **Hosted headless CMS:** fastest editorial setup but adds vendor-specific schemas, pricing, and portability work.
- **Git-based MDX:** highly portable and simple for developer-only publishing, but unsuitable for the requested non-technical dashboard and media workflow without substantial custom tooling.

Recommendation: managed PostgreSQL with a thin repository layer. Choose Prisma for mature tooling or Drizzle for a lighter SQL-oriented approach after confirming the hosting target.

### Authentication

- **Auth.js:** portable and integrated with Next.js; requires careful provider/session configuration.
- **Clerk:** polished admin UX and fast setup; recurring cost and vendor dependency.
- **Supabase Auth:** good fit if Supabase also hosts the database/storage.

Recommendation: Auth.js with passkey or OAuth restricted to an allowlist of admin identities. Require MFA at the identity provider and enforce authorization server-side for every mutation.

### Image storage

- **Cloudinary:** excellent transformations and responsive delivery; proprietary URLs/workflow.
- **S3-compatible storage (S3, R2):** portable and cost-effective; requires an image transformation/CDN plan.
- **Supabase Storage:** convenient if the rest of the stack uses Supabase.

Recommendation: Cloudinary for editor convenience or Cloudflare R2 plus an image CDN for greater portability. Store metadata and alt text in PostgreSQL, never only at the provider.

### Editor

- **Tiptap (recommended):** extensible ProseMirror foundation, structured JSON, strong custom-block support.
- **Lexical:** performant and flexible, but needs more application-level assembly.
- **BlockNote:** quicker block-editor UX with more opinionated output.

Run an editor prototype before committing. Store structured JSON plus a schema version; render through controlled server components and sanitize any HTML import/export path.

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

1. Confirm hosting, editorial roles, publication workflow, and provider budget.
2. Finalize schema and repository interfaces; add database migrations.
3. Add authentication and server-side authorization tests.
4. Implement articles, taxonomies, media, preview, and revision APIs/actions.
5. Build the editor/dashboard and accessible public routes.
6. Add search, related content, RSS, article schema, and sitemap integration.
7. Threat-model, accessibility-test, load-test, restore-test, and migrate production content.

No Phase 2 database, authentication, CMS, editor, or storage package is installed in Phase 1.
