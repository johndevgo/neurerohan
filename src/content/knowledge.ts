export type KnowledgeQuestion = {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
};

export const questionGroups: { title: string; description: string; questions: KnowledgeQuestion[] }[] = [
  {
    title: "Choosing a digital marketing direction",
    description: "Questions business owners ask before deciding which channel, page or measurement problem deserves investment.",
    questions: [
      { question: "What should a digital marketing strategy include?", answer: "A useful digital marketing strategy defines the audience, commercial objective, demand, offer, positioning, customer journey, channel roles, required pages and creative, measurement, ownership, budget constraints and the next review decision. It should explain what will not be prioritised as clearly as what will.", href: "/insights/digital-marketing-process", linkLabel: "See the complete process" },
      { question: "Should a small business start with SEO or paid ads?", answer: "Start with the constraint and timing. SEO can build compounding visibility around existing demand; paid advertising can create controlled distribution and faster feedback. A weak offer, website or tracking system can limit both. Some businesses should first fix a commercial page or conversion path." },
      { question: "How do I choose a digital marketing agency in Nepal?", answer: "Ask how the agency diagnoses the business, distinguishes qualified outcomes from channel metrics, handles implementation, reports limitations, protects account ownership and connects advertisements, search, content and the website. Avoid guaranteed rankings, guaranteed returns and unexplained packages.", href: "/digital-marketing-agency-in-nepal", linkLabel: "Compare the GrowthLabs agency model" },
      { question: "How much does digital marketing cost in Nepal?", answer: "Cost depends on the objective, competition, channels, advertising spend, website condition, content and creative workload, tracking, implementation ownership and service duration. Request a defined scope showing fees, media spend, exclusions, responsibilities and measurement rather than comparing one headline number." },
    ],
  },
  {
    title: "SEO, content and local visibility",
    description: "Direct answers about search visibility, audits, content depth and Google Business Profile work.",
    questions: [
      { question: "What is SEO in simple words?", answer: "Search engine optimisation improves a website so search systems can discover, understand and present relevant pages, and so people arriving from search can confidently take the next step. SEO includes technical foundations, page architecture, useful content, internal links, authority, local relevance and measurement.", href: "/insights/what-is-seo", linkLabel: "Read the SEO definition guide" },
      { question: "How long does SEO take in Nepal?", answer: "There is no responsible fixed timeline. Movement depends on the starting point, competition, crawl and index conditions, website authority, implementation speed, content quality, local relevance and search-system changes. Early technical or page improvements can appear before broader commercial growth." },
      { question: "What should an SEO audit contain?", answer: "An SEO audit should connect crawling, indexing, rendering, technical templates, keyword-to-page mapping, on-page relevance, content quality, internal links, local signals, analytics and conversion paths to an impact-ranked implementation roadmap.", href: "/seo-audit-services-in-nepal", linkLabel: "Explore SEO audit services" },
      { question: "How can a business improve Google Maps visibility?", answer: "Use accurate business information, the most specific eligible primary category, relevant services, useful photos, consistent hours, a legitimate review workflow, locally relevant website pages and strong conversion routes. Local prominence, relevance and distance all influence results; no provider can guarantee a top position.", href: "/insights/google-business-profile-optimization", linkLabel: "Use the GBP optimisation guide" },
    ],
  },
  {
    title: "Google Ads and Meta Ads",
    description: "Questions about campaign structure, budget, lead quality and the relationship between media and landing pages.",
    questions: [
      { question: "What does a Google Ads agency manage?", answer: "Scope can include account audits, keyword and search-term strategy, negative keywords, campaign architecture, advertisements and assets, bidding, budgets, landing-page alignment, conversion tracking, lead-quality feedback, optimisation and decision-focused reporting.", href: "/google-ads-agency-in-nepal", linkLabel: "Explore Google Ads management" },
      { question: "What is the difference between Google Ads and Meta Ads?", answer: "Google Search Ads usually capture expressed demand from queries. Meta Ads distribute creative across Facebook and Instagram audiences based on eligible signals and campaign systems. The stronger option depends on demand, audience, offer, creative, destination, budget and measurement—not platform popularity." },
      { question: "Why are my Facebook leads low quality?", answer: "Common causes include broad or misleading creative, weak qualification, an offer that attracts curiosity rather than intent, form friction set too low, audience overlap, slow response, missing lead-status feedback and reporting that treats every submission as equal.", href: "/insights/facebook-lead-generation-ads", linkLabel: "Diagnose Facebook lead ads" },
      { question: "How much advertising budget should I start with?", answer: "Work backwards from the qualified outcome, economically tolerable acquisition cost, expected conversion rate and the number of outcomes needed to learn. Budget must be large enough to collect useful evidence but small enough that early uncertainty remains affordable.", href: "/tools/google-ads-break-even-calculator", linkLabel: "Estimate break-even economics" },
    ],
  },
  {
    title: "Websites, landing pages and CRO",
    description: "Questions about mobile experience, page structure, conversion rate and testing.",
    questions: [
      { question: "Why does web design matter for SEO and conversion?", answer: "Design shapes information hierarchy, trust, readability, navigation, mobile interaction, performance and calls to action. Search visibility creates an opportunity; the website determines whether a visitor can understand the offer and complete a useful action.", href: "/insights/why-web-design-matters", linkLabel: "Read the web-design guide" },
      { question: "What should a landing page include?", answer: "A landing page should maintain message continuity, identify the audience and problem, explain the offer, provide credible proof, handle essential objections, show conditions, make the next step clear and support reliable measurement. The exact sequence depends on visitor awareness and offer complexity." },
      { question: "What is a good conversion rate?", answer: "There is no universal good conversion rate. Definitions, traffic sources, offer difficulty, device, market, price and lead qualification differ. Compare consistent definitions over time and evaluate conversion quality, commercial value and operational capacity—not only the percentage." },
      { question: "Does conversion optimisation always require A/B testing?", answer: "No. Customer research, analytics validation, accessibility fixes, message clarification, usability review and supported implementation can improve a journey. Controlled experiments are useful when meaningful uncertainty remains and traffic is sufficient for the chosen method.", href: "/conversion-rate-optimization-services", linkLabel: "Explore CRO services" },
    ],
  },
  {
    title: "Measurement and reporting",
    description: "Questions that prevent dashboards and platform attribution from being mistaken for complete business truth.",
    questions: [
      { question: "What should digital marketing reporting show?", answer: "Reporting should show the objective, definitions, period, traffic and audience context, qualified actions, cost or value where available, material limitations, what changed and the next decision. A dashboard without interpretation is not a strategy." },
      { question: "What is conversion tracking?", answer: "Conversion tracking records defined actions such as purchases, qualified form submissions, calls, bookings or meaningful journey steps. It requires clear event definitions, implementation validation, consent-aware collection and an explanation of attribution limitations." },
      { question: "Are platform-reported conversions the same as customers?", answer: "No. A configured conversion may represent a lead, action or attributed event according to platform settings. Customer status, revenue, margin and lead quality require business-system evidence and consistent definitions." },
      { question: "What are UTM parameters used for?", answer: "UTM parameters add consistent campaign labels to destination URLs so analytics tools can group traffic by source, medium, campaign and optional content or term values. They support reporting discipline but do not replace conversion tracking or attribution analysis.", href: "/tools/utm-builder", linkLabel: "Build a tagged campaign URL" },
    ],
  },
];

export type GlossaryTerm = {
  term: string;
  abbreviation?: string;
  definition: string;
  practicalMeaning: string;
  href?: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  { term: "Attribution", definition: "A rule or model used to assign credit for a conversion across marketing interactions.", practicalMeaning: "Attribution is an interpretation of available signals, not a perfect reconstruction of every influence." },
  { term: "Bounce rate", definition: "A behaviour metric whose definition depends on the analytics product and configuration.", practicalMeaning: "Do not diagnose a page from bounce rate alone; examine intent, engagement, events and the job of the page." },
  { term: "Call to action", abbreviation: "CTA", definition: "A prompt that tells a visitor what useful step to take next.", practicalMeaning: "A strong CTA is specific, visible and appropriate to the visitor's decision stage." },
  { term: "Canonical URL", definition: "The preferred URL represented by a canonical link signal when similar or duplicate versions exist.", practicalMeaning: "Canonicals help consolidate signals but are hints, so internal links, redirects and sitemaps should remain consistent." },
  { term: "Click-through rate", abbreviation: "CTR", definition: "Clicks divided by impressions, normally expressed as a percentage.", practicalMeaning: "CTR helps diagnose message and placement response but does not establish lead quality or profitability." },
  { term: "Content marketing", definition: "Planning and distributing useful content to support audience understanding, trust and action.", practicalMeaning: "Content should answer a real question or decision rather than exist only to repeat keywords." },
  { term: "Conversion", definition: "A defined action that represents meaningful progress in a customer journey.", practicalMeaning: "State whether the conversion is a sale, qualified lead, booking, call or supporting event." },
  { term: "Conversion rate", definition: "The number of defined conversions divided by eligible opportunities, usually sessions, users or clicks.", practicalMeaning: "Use consistent denominators and evaluate conversion quality before celebrating an increase." },
  { term: "Conversion rate optimisation", abbreviation: "CRO", definition: "A structured process for improving how qualified visitors complete meaningful actions.", practicalMeaning: "CRO combines research, messaging, UX, analytics, implementation and experiments where appropriate.", href: "/conversion-rate-optimization-services" },
  { term: "Cost per acquisition", abbreviation: "CPA", definition: "Advertising cost divided by the number of defined acquisitions or conversions.", practicalMeaning: "The definition of acquisition must be visible; a platform lead is not automatically a new customer." },
  { term: "Cost per click", abbreviation: "CPC", definition: "Advertising spend divided by recorded clicks.", practicalMeaning: "A cheaper click is only useful when the traffic remains relevant and contributes to qualified outcomes." },
  { term: "Cost per mille", abbreviation: "CPM", definition: "Advertising cost per one thousand impressions.", practicalMeaning: "CPM explains delivery economics, not whether the audience understood or acted." },
  { term: "Google Business Profile", abbreviation: "GBP", definition: "Google's business listing system used to manage eligible local business information across Search and Maps.", practicalMeaning: "Keep categories, services, hours, address or service area, images and website connections accurate.", href: "/insights/google-business-profile-optimization" },
  { term: "Google Search Console", abbreviation: "GSC", definition: "Google's service for monitoring search performance, indexing information and website issues.", practicalMeaning: "Search Console reports query and page signals, not complete analytics, leads or revenue." },
  { term: "Impression", definition: "A recorded opportunity for content, a search result or an advertisement to be displayed under the platform's rules.", practicalMeaning: "Impressions indicate visibility or delivery scale; they do not prove attention or business impact." },
  { term: "Indexing", definition: "The processing and storage of eligible page information by a search engine for possible retrieval.", practicalMeaning: "A crawled or indexed page is not guaranteed to rank for a particular query." },
  { term: "Keyword cannibalisation", definition: "A situation where multiple URLs compete or confuse targeting for substantially similar intent.", practicalMeaning: "Resolve it through intent mapping, consolidation, differentiation and consistent internal signals—not simply removing repeated words." },
  { term: "Landing page", definition: "The destination a visitor reaches from a campaign, search result or specific link.", practicalMeaning: "It should continue the promise, provide necessary proof and make the next action clear." },
  { term: "Local SEO", definition: "Search optimisation focused on relevant visibility for location-influenced queries and local business results.", practicalMeaning: "Local SEO connects real business information, Google Business Profile, local pages, reputation and conversion routes.", href: "/local-seo-services-in-nepal" },
  { term: "Marketing qualified lead", abbreviation: "MQL", definition: "A lead classified as meeting agreed marketing-stage criteria.", practicalMeaning: "The criteria must be documented and reconciled with sales feedback; the label alone does not prove value." },
  { term: "Meta Ads", definition: "Paid advertising managed through Meta systems for eligible Facebook, Instagram and other placements.", practicalMeaning: "Performance depends on audience context, creative, offer, destination, signals and business follow-up.", href: "/meta-ads-agency-in-nepal" },
  { term: "Negative keyword", definition: "A Google Ads targeting control used to prevent ads from matching specified search terms or meanings according to match rules.", practicalMeaning: "Negative keywords protect relevance and budget but require search-term context and careful maintenance." },
  { term: "Pay per click", abbreviation: "PPC", definition: "An advertising pricing model in which clicks are a primary billable interaction.", practicalMeaning: "PPC is broader than Google Search Ads and a click is an input, not the final commercial outcome." },
  { term: "Return on ad spend", abbreviation: "ROAS", definition: "Attributed revenue divided by advertising spend.", practicalMeaning: "ROAS should be interpreted with margin, attribution, refunds, repeat value and operating costs." },
  { term: "Search engine optimisation", abbreviation: "SEO", definition: "Improving technical, content and authority systems so relevant pages can be discovered, understood and selected in organic search.", practicalMeaning: "SEO should connect visibility to useful pages and measurable customer journeys.", href: "/insights/what-is-seo" },
  { term: "Search intent", definition: "The task, question or decision a person is trying to complete with a query.", practicalMeaning: "Map closely related intent to the strongest useful canonical page instead of creating one URL per wording." },
  { term: "Search term", definition: "The actual query associated with an advertising interaction or search-performance record.", practicalMeaning: "Search terms reveal demand language and qualification patterns; they are not identical to advertiser keywords." },
  { term: "Structured data", definition: "Machine-readable markup that describes visible page entities and relationships using an accepted vocabulary such as Schema.org.", practicalMeaning: "Markup must match visible content and must not invent reviews, prices, services or credentials." },
  { term: "Technical SEO", definition: "Work on crawling, rendering, indexation, site architecture, templates and related technical signals.", practicalMeaning: "Technical health supports visibility but does not replace useful content, relevance or authority." },
  { term: "UTM parameters", definition: "Standard query parameters used to label campaign traffic for analytics reporting.", practicalMeaning: "Use a consistent naming convention and never place personal or secret information in a campaign URL.", href: "/tools/utm-builder" },
];

export type ResourceItem = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  asset: "seoAudit" | "contentStrategy" | "userExperience";
  download: { href: string; label: string; format: string };
  purpose: string;
  includes: string[];
  howToUse: { title: string; copy: string }[];
  guidance: { title: string; copy: string }[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
};

export const resources: ResourceItem[] = [
  {
    slug: "seo-audit-checklist",
    title: "SEO audit checklist for technical, content and conversion review",
    shortTitle: "SEO audit checklist",
    description: "Download a practical SEO audit checklist covering discovery, crawling, indexing, technical SEO, content, internal links, local search, measurement and prioritisation.",
    asset: "seoAudit",
    download: { href: "/downloads/growthlabs-seo-audit-checklist.csv", label: "Download the SEO audit checklist", format: "CSV" },
    purpose: "Use the checklist to organise evidence and ownership before turning crawler exports into recommendations. It is a review framework, not an automated score or ranking guarantee.",
    includes: ["Business and website context", "Crawling, indexation and canonical checks", "Technical and template review", "Keyword-to-page mapping", "Content and entity review", "Internal links and local SEO", "Measurement and conversion checks", "Impact, effort, owner and validation fields"],
    howToUse: [{ title: "Create the baseline", copy: "Record the website, priority markets, key conversion, important templates, known changes and access available." }, { title: "Collect evidence", copy: "Add affected URLs, source evidence and an explanation rather than marking an issue from a tool score alone." }, { title: "Prioritise", copy: "Estimate impact, confidence, effort, risk and dependencies before placing work in sequence." }, { title: "Assign and validate", copy: "Give each action an owner and define the check that proves implementation is complete." }],
    guidance: [{ title: "Separate symptoms from causes", copy: "A missing title, slow template or excluded URL is an observable condition. The commercial problem may be lost discovery, weak relevance or a blocked conversion journey. Record both so the recommendation explains why the issue matters instead of treating every crawler warning as equal." }, { title: "Audit templates as systems", copy: "Review representative service, category, product, article and location templates before listing hundreds of similar URLs. A template-level correction can resolve repeated markup, internal-link, rendering or metadata problems more safely than editing pages one at a time." }, { title: "Connect search with conversion", copy: "A technically clean page can still fail when it targets the wrong intent, lacks necessary proof or offers no useful next action. Include landing-page clarity, mobile usability, contact paths and qualified conversion definitions in the review." }, { title: "Turn findings into implementation", copy: "Every recommendation should name affected pages, supporting evidence, expected effect, owner, dependency, validation method and rollback risk. Sequence prerequisites before cosmetic improvements and recheck production after the release." }],
    faqs: [{ question: "Can a free checklist replace a professional review?", answer: "No. It provides a repeatable structure, but interpretation depends on the business model, website platform, templates, search demand, competitors, migration history and access to reliable evidence." }, { question: "Which issue should be fixed first?", answer: "Prioritise by likely impact, confidence, affected page value, implementation effort, dependency and risk. Indexation or template problems affecting important pages normally deserve attention before isolated cosmetic warnings." }, { question: "Which tools are useful during an audit?", answer: "Evidence may come from Search Console, analytics, tag management, page-speed diagnostics, server or platform information and a crawler. No single tool can determine business priority or prove the cause by itself." }, { question: "How should completed actions be validated?", answer: "Re-crawl or retest the affected template, inspect rendered output, confirm important URLs and analytics events, document the release and monitor the relevant search and conversion signals over an appropriate period." }],
    related: [{ label: "SEO audit services in Nepal", href: "/seo-audit-services-in-nepal" }, { label: "SEO expert in Nepal", href: "/seo-expert-in-nepal" }, { label: "SEO glossary", href: "/insights/glossary" }],
  },
  {
    slug: "digital-marketing-brief-template",
    title: "Digital marketing brief template for a clearer agency conversation",
    shortTitle: "Digital marketing brief template",
    description: "Download a digital marketing brief template covering the offer, audience, demand, channels, website, evidence, measurement, budget, ownership and constraints.",
    asset: "contentStrategy",
    download: { href: "/downloads/growthlabs-digital-marketing-brief.csv", label: "Download the marketing brief", format: "CSV" },
    purpose: "A useful brief helps a founder, internal team or agency understand the commercial problem before prescribing SEO, advertising, social media, content or a website project.",
    includes: ["Business and offer context", "Audience and target market", "Commercial objective and qualified conversion", "Current channels and performance", "Website and landing-page readiness", "Proof, creative and content resources", "Tracking and reporting access", "Budget, timing, ownership and non-negotiables"],
    howToUse: [{ title: "Answer with evidence", copy: "Link to pages, dashboards, examples and customer language where possible instead of relying on broad adjectives." }, { title: "Define the qualified action", copy: "State what counts as a useful lead, booking, sale or pipeline movement before discussing channel metrics." }, { title: "Name the constraint", copy: "Explain what currently prevents growth and which assumptions still need validation." }, { title: "Share responsibility", copy: "Clarify who owns access, production, approvals, development, sales follow-up and reporting." }],
    guidance: [{ title: "Begin with the commercial decision", copy: "State the outcome the business needs, why it matters now and how it will be recognised. A request for more traffic is incomplete until the audience, offer, qualified action, value and operational capacity are understood." }, { title: "Describe the current journey", copy: "Show how people discover the business, which pages or conversations build trust, where they convert and how the team responds. Include sales feedback and offline steps so the plan does not optimise only what an advertising platform can see." }, { title: "Make constraints visible", copy: "Budget, approval speed, development support, creative production, legal review, seasonality, inventory and sales capacity shape the feasible strategy. Naming constraints early produces a more useful scope and reduces avoidable change later." }, { title: "Define evidence before reporting", copy: "Agree the primary outcome, supporting indicators, data sources, reporting period and attribution limitations. Distinguish impressions, clicks and platform events from qualified leads, customers, revenue and contribution." }],
    faqs: [{ question: "Who should complete the brief?", answer: "The founder or commercial owner should supply objectives and constraints, while sales, marketing, product and technical owners contribute evidence and responsibilities relevant to the proposed work." }, { question: "Do all fields need a final answer?", answer: "No. Mark genuine unknowns clearly. A useful discovery process tests important assumptions instead of hiding uncertainty behind generic language." }, { question: "Should advertising spend be included with service fees?", answer: "Show media spend, strategy or management fees, creative production, tools and landing-page work separately so every party understands what the budget funds." }, { question: "What evidence should be attached?", answer: "Useful inputs include priority pages, current campaigns, search and analytics reports, lead-quality notes, customer questions, brand materials, offer details and examples of competitors or experiences the business wants to learn from." }],
    related: [{ label: "Digital marketing process", href: "/insights/digital-marketing-process" }, { label: "GrowthLabs services", href: "/services" }, { label: "Send your brief", href: "/contact" }],
  },
  {
    slug: "website-launch-checklist",
    title: "Website launch checklist for SEO, accessibility and conversion readiness",
    shortTitle: "Website launch checklist",
    description: "Download a website launch checklist covering content, technical SEO, redirects, responsive UX, accessibility, analytics, forms, performance and post-launch validation.",
    asset: "userExperience",
    download: { href: "/downloads/growthlabs-website-launch-checklist.csv", label: "Download the website launch checklist", format: "CSV" },
    purpose: "Use this checklist before and after launch to protect discoverability, usability, measurement and conversion paths. Adapt it to the platform, migration risk and legal requirements of the project.",
    includes: ["Content and metadata readiness", "Redirects, canonicals, robots and sitemap", "Responsive design and browser checks", "Accessibility and keyboard review", "Forms, calls, WhatsApp and success states", "Analytics, consent and event validation", "Performance and image checks", "Post-launch crawling and monitoring"],
    howToUse: [{ title: "Assign owners before launch", copy: "Separate content, development, design, analytics, SEO and business approval responsibilities." }, { title: "Record evidence", copy: "Add screenshots, crawl exports, test links and acceptance notes rather than relying on memory." }, { title: "Test real journeys", copy: "Use mobile, keyboard and representative devices to complete navigation, contact and purchase or booking paths." }, { title: "Repeat after release", copy: "Crawl the production site, confirm redirects and indexability, validate events and monitor important pages." }],
    guidance: [{ title: "Protect existing search equity", copy: "Inventory valuable URLs before migration, map changed paths to the closest relevant destination and preserve canonical intent, internal links and indexability. Avoid sending every removed page to the homepage or relying on a sitemap to replace redirects." }, { title: "Test complete user journeys", copy: "Check navigation, search, forms, calls, messaging links, checkout or booking flows and their success states on representative devices. Include error handling, keyboard use, zoom and slow-network conditions rather than reviewing screenshots alone." }, { title: "Validate measurement responsibly", copy: "Confirm the consent state, tag firing conditions, event names, duplicate controls and conversion definitions in production. Test whether the receiving analytics and advertising systems record the intended action without exposing secrets or personal information." }, { title: "Monitor after release", copy: "A successful deployment is the beginning of validation. Crawl the live site, inspect redirects and canonical tags, submit or confirm the sitemap, watch important templates and compare search, behaviour and conversion signals with the documented baseline. Keep the evidence with the release record so later changes can be compared against an agreed starting point." }],
    faqs: [{ question: "When should launch QA begin?", answer: "Acceptance criteria should be defined during planning and checked throughout implementation. Leaving content, accessibility, search and analytics review until the final hour creates avoidable risk." }, { question: "Which screen sizes should be tested?", answer: "Test representative small mobile, large mobile, tablet, laptop and desktop widths, plus real devices when possible. Check wrapping, touch targets, navigation, image crops, forms and horizontal overflow." }, { question: "What should happen if a critical check fails?", answer: "Record the issue, affected journey, severity, owner and retest condition. Delay the release when the failure threatens access, payments, enquiries, indexability, security, privacy or reliable measurement." }, { question: "What should be checked immediately after deployment?", answer: "Confirm HTTPS and the canonical host, redirects, robots rules, sitemap, important pages, structured data, contact or purchase journeys, analytics events, console errors and monitoring before announcing the release." }],
    related: [{ label: "Website development checklist guide", href: "/insights/website-development-checklist" }, { label: "Web design company in Nepal", href: "/web-design-company-in-nepal" }, { label: "Why web design matters", href: "/insights/why-web-design-matters" }],
  },
];

export const resourceBySlug = Object.fromEntries(resources.map((resource) => [resource.slug, resource])) as Record<string, ResourceItem>;
