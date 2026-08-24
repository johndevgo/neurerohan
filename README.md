# GrowthLabs by Rohan Neure

The public website for GrowthLabs by Rohan Neure, a founder-led digital marketing agency in Nepal. Built with Next.js App Router, TypeScript, Tailwind CSS, and minimal client-side JavaScript.

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

The website has one optional public environment variable:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Copy `.env.example` to `.env.local` for local testing. Leave the variable blank to emit no Google Tag Manager script, fallback iframe, consent panel or measurement-settings control. In Vercel, add the supplied container ID to the Production environment and only to Preview if preview traffic should be measured. The repository does not contain the live ID or any private credentials.

The contact experience uses direct email, phone, WhatsApp and LinkedIn links, so no form-delivery environment variable or backend is required.

## Deployment

The application can be deployed to Vercel or another Node.js host supporting Next.js 16.

1. Push the repository to the production Git provider.
2. Import it into the hosting provider and select the Next.js preset.
3. Use `npm run build`; keep the default `.next` output.
4. Add `NEXT_PUBLIC_GTM_ID` in the production environment if measurement should be active, then redeploy.
5. Add `neurerohan.com.np` as the production domain.
6. Configure the domain's DNS records exactly as provided by the host.
7. Redirect `www.neurerohan.com.np` permanently (308) to `https://neurerohan.com.np`.
8. Confirm HTTPS is active before public launch.
9. Verify canonical URLs, `/robots.txt`, and `/sitemap.xml` on production.
10. Verify the published email, phone, WhatsApp, LinkedIn, consent and measurement-settings controls on production.

DNS and hosting account changes are intentionally outside this repository and have not been made.

## Architecture

- `src/app` — routes, route metadata, SEO endpoints, and global styles
- `src/components` — reusable site shell and presentation primitives
- `src/content` — typed brand and portfolio source of truth
- `src/lib` — shared metadata helpers
- `docs/blog-phase-2.md` — future publishing-system plan
- `docs/keyword-map.md` — approved search architecture and editorial backlog
- `docs/deployment.md` — Vercel, Cloudflare DNS, domain, and Phase 2 backend guidance

## Browser support and accessibility

The site uses semantic landmarks, a skip link, keyboard-visible focus, reduced-motion handling, accessible navigation, and an Escape-aware focus-contained mobile menu. Test with current evergreen browsers and assistive technology before launch after final content is loaded.
