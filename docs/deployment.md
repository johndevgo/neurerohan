# Production deployment

## Recommended Phase 1 setup

Use **Vercel for the Next.js application** and **Cloudflare for DNS**. Phase 1 is a public website and needs neither a database nor a custom backend. Vercel is the shortest operational path for this Next.js codebase; Cloudflare remains useful for authoritative DNS and future services.

Because this is a commercial website, confirm current Vercel plan terms and select a plan permitted for commercial use rather than assuming a free plan is appropriate.

## Publish to Vercel

1. Create a private GitHub repository and push this project after confirming no secret files are included.
2. In Vercel choose **Add New → Project**, import the repository, and retain the detected Next.js settings.
3. Use `npm run build`; no output-directory override or Phase 1 environment variable is required.
4. Test the generated preview before assigning the domain.
5. Add `neurerohan.com.np` and `www.neurerohan.com.np` in Project → Settings → Domains.
6. Set the non-www domain as primary and permanently redirect `www` to it.
7. Vercel displays the exact required DNS values. Copy those current records into Cloudflare DNS; do not use a guessed IP address.
8. After validation, verify HTTPS, canonical URLs, `/robots.txt`, `/sitemap.xml`, and every contact link.

If Cloudflare proxies the DNS records, follow Vercel's current Cloudflare guidance. DNS-only mode can simplify initial certificate and domain troubleshooting.

## Cloudflare Workers alternative

Cloudflare Workers supports modern Next.js through the OpenNext adapter. It is a credible alternative but adds an adapter and Wrangler deployment path that this phase does not need. Choose it if Cloudflare-native operations outweigh the additional compatibility testing on framework upgrades.

## Phase 2 backend

The publishing dashboard will need server-side capabilities but not necessarily a traditional standalone server:

- managed PostgreSQL for articles, authors, taxonomies, revisions, and state;
- authenticated admin access with server-side authorization;
- object storage for originals plus an image delivery layer;
- scheduled publication and tested backups.

Recommended default: retain Next.js on Vercel and use Supabase for PostgreSQL, Auth, and Storage behind replaceable repository interfaces. Re-evaluate Neon + Auth.js + Cloudinary or R2 when editorial workflow and budget are confirmed. Never expose service keys in client code.

## Domain and launch checklist

- Keep `https://neurerohan.com.np` as the single canonical origin.
- Redirect HTTP to HTTPS and `www` to non-www.
- Add the production property to Google Search Console and submit `/sitemap.xml`.
- Configure SPF, DKIM, and DMARC with the email provider before relying on `contact@neurerohan.com.np`.
- Add analytics only after selecting a provider and documenting privacy/consent requirements.
- Protect unpublished previews; require MFA and least-privilege account access.
- Confirm deployment rollback and provider backup procedures.
