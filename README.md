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

Brand, founder, service, proof, industry, process, FAQ, contact, and social information is typed and centralized in `src/content/site.ts`. Commercial landing-page content lives in `src/content/landing-pages.ts`, with the detailed `/seo-services-in-nepal` scope in `src/content/seo-services.ts`. Page-specific delivery guidance and contextual links for the core and commercial pages live in `src/content/service-depth.ts`. Articles live in `src/content/insights.ts` and its imported editorial collections; questions, glossary terms, and downloadable resources live in `src/content/knowledge.ts`; tool definitions live in `src/content/tools.ts`; and reusable editorial imagery lives in `src/content/agency-assets.ts`. Update approved facts in those sources instead of scattering them across components.

`/insights`, its static articles, questions, glossary and evidence library require no CMS, database, authentication, or server-side publishing backend. The free calculators run entirely in the visitor's browser. The planning templates and social-media calendar are repository-hosted CSV files under `public/downloads`.

After building and starting the site, run `node scripts/seo-content-qa.mjs http://localhost:3000` to verify the core/service routes, internal links, metadata, service anchors, image references, FAQ graphs and sitemap coverage. The script is read-only and does not submit enquiry forms.

Commercial positioning, page titles, search topics, buyer summaries and contextual contact handoffs are maintained in `src/content/service-positioning.ts`. Detailed service delivery content remains in the existing landing-page sources. `src/components/commercial-hero.tsx` presents the service-specific opening and navigation; `src/components/service-evidence.tsx` selects relevant source captures without attributing Google Ads results to other platforms. Form service choices, including analytics and tracking, are maintained in `site.ts`.

For responsive regression checks, run `node scripts/seo-browser-qa.mjs <Chrome-debug-port> http://localhost:3000 --all` against a separate headless Chrome profile. It checks all 23 core/service routes at 390, 768 and 1440 pixels, mobile CTA placement, proof-image ratios, menus, form preselection, multiple-service selection and portrait grayscale. Screenshots and reports are generated in the ignored `.qa/` folder; no enquiries are submitted.

Projects support index and detail routes for future case studies. Adding a project object automatically makes its `/work/[slug]` route buildable.

## Environment variables

The public Google Tag Manager container ID `GTM-59D6JGLP` is intentionally committed in the site shell. A GTM container ID is public; private credentials must never be placed in client code or `NEXT_PUBLIC_*` variables.

The contact form uses a small Vercel route and Resend. It requires no database or separate backend host. Copy `.env.example` to `.env.local` and configure these server-only values:

- `RESEND_API_KEY` — private API key from Resend
- `CONTACT_TO_EMAIL` — optional inbox override; defaults to `contact@neurerohan.com.np`
- `CONTACT_BACKUP_EMAIL` — optional second delivery inbox; defaults to `neurerohan@gmail.com`
- `CONTACT_FROM_EMAIL` — contact-form sender on the exact verified Resend domain; defaults to `GrowthLabs Website <enquiries@send.neurerohan.com.np>`
- `RESOURCE_FROM_EMAIL` — resource-library sender on the same verified subdomain; defaults to `GrowthLabs Resources <resources@send.neurerohan.com.np>`

If `RESEND_API_KEY` is absent, the form reports that delivery is not configured and directs the visitor to email or WhatsApp; it never displays a false success message.

Resend setup: add and verify `send.neurerohan.com.np`, copy its SPF and DKIM records into Cloudflare as DNS-only records, create a sending-only API key restricted to that domain, and add `RESEND_API_KEY` in Vercel Project Settings → Environment Variables for Production. The website sends from `enquiries@send.neurerohan.com.np` and delivers to the Zoho inbox at `contact@neurerohan.com.np`; the sending address does not need to be a Zoho mailbox. Receiving in Resend is optional and may remain disabled. Redeploy after saving the variable. Direct email, phone, WhatsApp and LinkedIn links remain available independently.

The resources, tools and glossary routes also include a dismissible library prompt. It never gates a file or tool. When requested, `/api/resource-library` sends one organised email containing every current tool, template and reference hub, sends an internal request notice to `CONTACT_TO_EMAIL`, and does not create a mailing-list subscription. Both form routes validate input on the client and server, use same-origin checks, honeypots, submission-time checks, request limits and server-only credentials.

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

## Site-wide editorial and tool QA

The November library revision retains the core/service work and adds practical examples and implementation checklists to all 22 existing articles. It does not generate duplicate keyword pages or change the existing URL architecture. The library includes 8 downloadable template pages, 7 browser tools, 142 glossary terms and 28 questions.

- `src/content/insight-practice.ts` owns each article's additional worked example, checklist and contextual links. Actual editorial revisions update the displayed review date; reading time is derived from the article text.
- `src/content/knowledge-workflows.ts` owns the distinct resource field guides, tool calculations, interpretations and relevant contact handoffs.
- `src/lib/marketing-calculations.ts` contains tested arithmetic. Lead-generation CPC includes both click-to-lead and lead-to-customer rates; direct purchases use a separate mode. A zero denominator produces an undefined ratio, not a false zero. Negative scenario changes remain visible.
- Resource previews read the published CSV files at build time. Their columns and starter-row counts come from the actual downloads, without adding a browser fetch or gating access.
- Knowledge layouts use a shared restrained-glass treatment, intact images, readable heading sizes and visible article explanations. Glossary definitions have stable linkable anchors and UK/US spelling-aware search.

Run these checks after content or template changes:

```sh
npm run lint
npm run typecheck
node scripts/knowledge-unit-qa.mjs
npm run build
# In another terminal: npm run start
node scripts/all-pages-qa.mjs http://localhost:3000
node scripts/seo-content-qa.mjs http://localhost:3000
node scripts/form-validation-qa.mjs http://localhost:3000
```

For responsive browser QA, use a dedicated headless Chrome profile with remote debugging, never a personal browsing profile. Then run `node scripts/library-browser-qa.mjs 9335 http://localhost:3000` and `node scripts/seo-browser-qa.mjs 9335 http://localhost:3000 --all` sequentially. Both scripts control one test tab. Reports and representative screenshots are saved under ignored `.qa/`. Tests do not send enquiry or library emails; production email delivery still requires a separately verified end-to-end test.

Form-origin checks compare the browser's Origin with the incoming Host header rather than Next's internal hostname. Forwarded-host headers are not trusted. Both form endpoints reject malformed JSON shapes and missing, invalid or premature submission timestamps before reaching the email provider. The validation script sends only invalid payloads and does not send mail.
