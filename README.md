# GrowthLabs by Rohan Neure

The public website for GrowthLabs by Rohan Neure, a founder-led SEO, Google Ads, Meta Ads and conversion-focused digital marketing agency in Nepal. Built with Next.js App Router, TypeScript, Tailwind CSS, and minimal client-side JavaScript.

## Local development

Requirements: Node.js 22 LTS or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Quality commands:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Content

Brand, founder, service, proof, industry, process, FAQ, contact, and social information is typed and centralized in `src/content/site.ts`. Commercial landing-page content lives in `src/content/landing-pages.ts`; the ten launch articles live in `src/content/insights.ts`; questions, glossary terms, and downloadable resources live in `src/content/knowledge.ts`; tool definitions live in `src/content/tools.ts`; and reusable editorial imagery lives in `src/content/agency-assets.ts`. Update approved facts in those sources instead of scattering them across components.

`/insights`, its ten static articles, questions, glossary and evidence library require no CMS, database, authentication, or server-side publishing backend. The free calculators run entirely in the visitor's browser. The planning templates and social-media calendar are repository-hosted CSV files under `public/downloads`.

Projects support index and detail routes for future case studies. Adding a project object automatically makes its `/work/[slug]` route buildable.

## Environment variables

The public Google Tag Manager container ID `GTM-59D6JGLP` is intentionally committed in the site shell. A GTM container ID is public; private credentials must never be placed in client code or `NEXT_PUBLIC_*` variables.

The contact form uses a small Vercel route and Resend. It requires no database or separate backend host. Copy `.env.example` to `.env.local` and configure these server-only values:

- `RESEND_API_KEY` — private API key from Resend
- `CONTACT_TO_EMAIL` — inbox that receives enquiries
- `CONTACT_FROM_EMAIL` — verified sender, for example `GrowthLabs Website <enquiries@send.neurerohan.com.np>`

If these values are absent, the form reports that delivery is not configured and directs the visitor to email or WhatsApp; it never displays a false success message.

Resend setup: create an account, add `send.neurerohan.com.np`, copy its SPF and DKIM records into Cloudflare as DNS-only records, verify the domain, create a sending API key, and add the three variables in Vercel Project Settings → Environment Variables. Redeploy after saving them. Direct email, phone, WhatsApp and LinkedIn links remain available independently.

## Deployment

The application can be deployed to Vercel or another Node.js host supporting Next.js 16.

1. Push the repository to the production Git provider.
2. Import it into the hosting provider and select the Next.js preset.
3. Use `npm run build`; keep the default `.next` output.
4. Add `neurerohan.com.np` as the production domain.
5. Configure the domain's DNS records exactly as provided by the host.
6. Redirect `www.neurerohan.com.np` permanently (308) to `https://neurerohan.com.np`.
7. Confirm HTTPS is active before public launch.
8. Verify canonical URLs, `/robots.txt`, and `/sitemap.xml` on production.
9. Verify the published email, phone, WhatsApp, LinkedIn, Google Maps embeds, GTM container, consent and measurement-settings controls on production.
10. Submit one production contact-form test and confirm it reaches `CONTACT_TO_EMAIL`; reply should address the visitor because the form sets their email as Reply-To.

DNS and hosting account changes are intentionally outside this repository and have not been made.

## Architecture

- `src/app` — routes, route metadata, SEO endpoints, and global styles
- `src/components` — reusable site shell and presentation primitives
- `src/content` — typed brand, commercial-page, Insights, knowledge, resource, tool, and editorial-asset sources of truth
- `src/lib` — shared metadata helpers
- `docs/blog-phase-2.md` — future publishing-system plan
- `docs/keyword-map.md` — approved search architecture and editorial backlog
- `docs/structured-data.md` — schema inventory, truthful exclusions, and validation process
- `docs/deployment.md` — Vercel, Cloudflare DNS, domain, and Phase 2 backend guidance

## Browser support and accessibility

The site uses semantic landmarks, a skip link, keyboard-visible focus, reduced-motion handling, accessible navigation, and an Escape-aware focus-contained mobile menu. Test with current evergreen browsers and assistive technology before launch after final content is loaded.
