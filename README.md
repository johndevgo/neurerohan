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

Brand, founder, service, proof, industry, process, FAQ, contact, and social information is typed and centralized in `src/content/site.ts`. Update approved facts there instead of scattering them across components.

Projects support index and detail routes for future case studies. Adding a project object automatically makes its `/work/[slug]` route buildable.

## Environment variables

Phase 1 requires no environment variables. The public Google Tag Manager container ID `GTM-59D6JGLP` is intentionally committed in the site shell so production and preview deployments emit the same standard head script and body fallback. A GTM container ID is a public identifier, not a secret; private credentials must never be placed in client code or `NEXT_PUBLIC_*` variables.

The contact experience uses direct email, phone, WhatsApp and LinkedIn links, so no form-delivery environment variable or backend is required.

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

DNS and hosting account changes are intentionally outside this repository and have not been made.

## Architecture

- `src/app` — routes, route metadata, SEO endpoints, and global styles
- `src/components` — reusable site shell and presentation primitives
- `src/content` — typed brand and portfolio source of truth
- `src/lib` — shared metadata helpers
- `docs/blog-phase-2.md` — future publishing-system plan
- `docs/keyword-map.md` — approved search architecture and editorial backlog
- `docs/structured-data.md` — schema inventory, truthful exclusions, and validation process
- `docs/deployment.md` — Vercel, Cloudflare DNS, domain, and Phase 2 backend guidance

## Browser support and accessibility

The site uses semantic landmarks, a skip link, keyboard-visible focus, reduced-motion handling, accessible navigation, and an Escape-aware focus-contained mobile menu. Test with current evergreen browsers and assistive technology before launch after final content is loaded.
