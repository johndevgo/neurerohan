export type ServiceDepth = {
  title: string;
  intro: string;
  focus: { title: string; copy: string }[];
  deliverables: string[];
  links: { label: string; href: string }[];
  cta: string;
};

export const serviceDepth: Record<string, ServiceDepth> = {
  "hotel-digital-marketing-agency": {
    title: "Turn destination interest into a convincing direct-booking journey.",
    intro: "We connect the details guests compare before committing: destination, room type, experience, price context, availability, policies and trust. Search, advertising and social content then send the right guest to the right property page.",
    focus: [
      { title: "Build around source markets and booking windows", copy: "Separate domestic trips, international planning, business stays, events and seasonal demand. Match destination and accommodation searches to room, package and experience pages, then plan campaigns around the time guests actually research and book." },
      { title: "Make direct booking the easier decision", copy: "Show real property photography, room differences, amenities, location, guest evidence and clear policies before the booking handoff. Track room engagement, booking-engine starts and completed bookings so the marketing review follows the guest into the commercial system." },
    ],
    deliverables: ["Guest-segment and seasonal demand map", "Room, offer and destination page priorities", "Google Business Profile and reputation workflow", "Paid-media plan and booking-path measurement"],
    links: [{ label: "Hotel SEO within our Nepal SEO services", href: "/seo-services-in-nepal" }, { label: "Improve booking-page conversion", href: "/conversion-rate-optimization-services" }, { label: "Measure campaign and booking events", href: "/analytics-conversion-tracking-services" }],
    cta: "Plan our hotel growth programme",
  },
  "social-media-marketing-agency-in-nepal": {
    title: "Give every content pillar a customer and commercial purpose.",
    intro: "Our social media marketing connects Facebook, Instagram and TikTok with the questions, proof and offers that move an audience forward. We build a repeatable production and distribution system around your business.",
    focus: [
      { title: "Create a recognisable message system", copy: "Translate customer problems, objections, product demonstrations and real work into content pillars. Brief each Reel, carousel or static asset with its audience, hook, proof and next action. Adapt the execution to platform behaviour while keeping the brand recognisable." },
      { title: "Connect engagement to demand", copy: "Use profile visits, saves, video retention and outbound clicks to understand attention, then follow enquiries and qualified leads into the response process. Organic findings inform paid creative; paid results reveal messages worth developing into stronger content." },
    ],
    deliverables: ["Audience and channel-role strategy", "Content pillars, hooks and production briefs", "Publishing, approvals and community workflow", "Creative learning and qualified-action scorecard"],
    links: [{ label: "Social media strategy framework", href: "/insights/social-media-marketing-strategy-guide" }, { label: "Facebook and Instagram advertising", href: "/meta-ads-agency-in-nepal" }, { label: "Social media package options", href: "/social-media-marketing-packages" }],
    cta: "Build our social media strategy",
  },
  "web-design-company-in-nepal": {
    title: "Build a website your sales and marketing can grow around.",
    intro: "A useful website explains the offer, supports search discovery and makes action straightforward. We plan page architecture, copy, responsive design and measurement together, so the site works as a commercial system from launch.",
    focus: [
      { title: "Design the information before the interface", copy: "Map audience tasks to service, product, industry and support pages. Establish the navigation, canonical URLs, calls to action and proof needed at each decision. SEO titles, semantic headings and image context are planned with the content instead of being added after design." },
      { title: "Make quality visible on real devices", copy: "Check mobile navigation, tap targets, readable type, keyboard focus, full-ratio proof images, accessible forms and meaningful success states. Validate Core Web Vitals, redirects, sitemap, structured data and conversion events in the production build." },
    ],
    deliverables: ["Keyword-led sitemap and page briefs", "Conversion copy and responsive interface", "Image, accessibility and performance checks", "SEO migration and launch measurement plan"],
    links: [{ label: "SEO services for your new website", href: "/seo-services-in-nepal" }, { label: "Core Web Vitals optimisation guide", href: "/insights/core-web-vitals-optimization-guide" }, { label: "Website launch checklist", href: "/resources/website-launch-checklist" }],
    cta: "Plan our website project",
  },
  "seo-for-travel-agency": {
    title: "Build travel search coverage around destinations, itineraries and decisions.",
    intro: "Travel SEO works when the website reflects how people compare experiences. We connect destination discovery with route details, trip duration, inclusions, suitability, departure information and a useful enquiry process.",
    focus: [
      { title: "Make itinerary pages answer buying questions", copy: "A substantial itinerary explains the route, daily experience, accommodation, transport, inclusions, exclusions, season, requirements and available choices. Distinct trips deserve distinct pages; overlapping wording belongs within the same useful canonical destination." },
      { title: "Connect inspiration to enquiry", copy: "Destination guides and planning answers should point to relevant trips with descriptive anchors. Add authentic media and visible expertise, then measure package engagement, itinerary requests and qualified conversations by source market and landing page." },
    ],
    deliverables: ["Destination and itinerary keyword clusters", "Package-page copy and technical priorities", "Seasonal content and internal-link roadmap", "Trip enquiry and source-market reporting"],
    links: [{ label: "Full SEO service scope", href: "/seo-services-in-nepal" }, { label: "Travel landing-page conversion", href: "/conversion-rate-optimization-services" }, { label: "Keyword mapping template", href: "/resources/keyword-mapping-template" }],
    cta: "Review our travel SEO opportunity",
  },
  "social-media-marketing-packages": {
    title: "Compare the work behind the package, then choose the right level.",
    intro: "Our Foundation, Growth and Performance scopes organise strategy, production and distribution around your current need. The useful comparison is what gets researched, created, approved, published and measured.",
    focus: [
      { title: "Match the package to operating capacity", copy: "Foundation sets direction when positioning or channel roles are unclear. Growth creates a repeatable organic publishing system. Performance connects that system to paid creative, campaigns, landing pages and lead-quality feedback. Internal production capacity determines which responsibilities we take on." },
      { title: "Make the production agreement concrete", copy: "Confirm formats, copy, filming, editing, design, approval rounds, community response and reporting. Separate platform media spend from service fees. A clear production agreement lets the team spend its time making stronger content and improving distribution." },
    ],
    deliverables: ["Defined channels and content formats", "Named strategy and production responsibilities", "Approval and publishing schedule", "Media budget and performance review cadence"],
    links: [{ label: "Social media marketing delivery", href: "/social-media-marketing-agency-in-nepal" }, { label: "Meta Ads campaign management", href: "/meta-ads-agency-in-nepal" }, { label: "Prepare a digital marketing brief", href: "/resources/digital-marketing-brief-template" }],
    cta: "Get our social media scope",
  },
  "advertising-agency-in-nepal": {
    title: "Put every advertising channel to work on the same growth objective.",
    intro: "Google Search captures expressed demand. Facebook, Instagram and TikTok introduce offers through creative. We connect the channel mix to landing pages, retargeting, tracking and sales response so acquisition can be evaluated as one system.",
    focus: [
      { title: "Allocate media around demand and economics", copy: "Start with the offer, audience, affordable acquisition cost and sales capacity. Give each campaign a purpose, destination and qualified outcome. Review search terms, creative response, audience quality and landing-page behaviour before shifting budget." },
      { title: "Make the performance story inspectable", copy: "Our Google Ads portfolio includes 29,851 clicks and 474.79 reported conversions for London home services, plus 12,692 clicks and 929.99 reported conversions for a SaaS account. We use the same source-level discipline to review costs, conversion definitions and the next campaign decision." },
    ],
    deliverables: ["Channel and media-budget plan", "Campaign structure and performance creative briefs", "Landing-page and conversion-event setup", "Search-term, creative and lead-quality reviews"],
    links: [{ label: "Google Ads agency services", href: "/google-ads-agency-in-nepal" }, { label: "Meta Ads strategy and management", href: "/meta-ads-agency-in-nepal" }, { label: "Campaign attribution guide", href: "/insights/marketing-attribution-ga4-guide" }],
    cta: "Review our advertising opportunity",
  },
  "google-ads-agency-in-nepal": {
    title: "Connect the customer's query to a qualified commercial outcome.",
    intro: "Our Google Ads management joins keyword intent, responsive search ads, assets, landing pages, bidding and reliable conversion signals. You get an account built around the searches and customers the business wants to win.",
    focus: [
      { title: "Control the search demand you pay for", copy: "Review actual search terms alongside keywords and match types. Separate brand, non-brand and distinct offers where those roles need control. Use relevant negatives, location settings, ad assets and page selection to improve the match between spend and customer intent." },
      { title: "Improve the feedback reaching bidding", copy: "Validate purchases, enquiries, calls, values and offline lifecycle stages. Our SaaS account capture records £2.90 per reported conversion for its stated period; the London home-services capture records £0.52 average CPC. These source metrics make cost and action definitions visible in account reviews." },
    ],
    deliverables: ["Account audit and conversion-action review", "Keyword, search-term and exclusion strategy", "Campaign, ad and landing-page plan", "Budget, bidding and qualified-lead review"],
    links: [{ label: "Google Ads account audit framework", href: "/insights/google-ads-account-audit-guide" }, { label: "Search terms and negative keywords", href: "/insights/google-ads-search-terms-negative-keywords-guide" }, { label: "Calculate Google Ads break-even costs", href: "/tools/google-ads-break-even-calculator" }],
    cta: "Find our Google Ads growth priorities",
  },
  "local-seo-services-in-nepal": {
    title: "Make your business easier to find, understand and contact locally.",
    intro: "We connect Google Business Profile, local service pages, accurate contact information, review workflows and conversion tracking. Local SEO starts with the real business and the real service area, then builds the information customers need to choose it.",
    focus: [
      { title: "Strengthen relevance and the customer decision", copy: "Choose accurate categories, explain available services, maintain hours and connect the profile to a useful landing page. Add genuine photography, clear contact routes and service details. Relevant local information helps both search understanding and customer confidence." },
      { title: "Measure the path from discovery to contact", copy: "Review Business Profile actions alongside local organic pages, calls, WhatsApp clicks and qualified enquiries. The Texas HVAC search capture shows 714 organic clicks and 38K impressions in three months, giving a concrete example of visibility in a local-service market." },
    ],
    deliverables: ["Local visibility and Business Profile review", "Local keyword and service-area page map", "Business information and review workflow", "Profile, page and contact-action scorecard"],
    links: [{ label: "Our complete SEO services in Nepal", href: "/seo-services-in-nepal" }, { label: "Google Business Profile optimisation guide", href: "/insights/google-business-profile-optimization" }, { label: "Local SEO ranking factors", href: "/insights/local-seo-ranking-factors-guide" }],
    cta: "Strengthen our local search visibility",
  },
  "digital-marketing-agency-in-kathmandu": {
    title: "Build a Kathmandu Valley acquisition system with local understanding.",
    intro: "We work from Sallaghari, Bhaktapur with businesses serving Kathmandu, Lalitpur, Bhaktapur and customers across Nepal. Our strategy connects the way people search, compare, message and buy with the offer your business delivers.",
    focus: [
      { title: "Map local buying behaviour", copy: "Identify service categories, locations, language needs, competitors, local search intent and preferred contact routes. Build useful service and local pages, then connect Google Search, Business Profile, paid media and social proof around that customer journey." },
      { title: "Set a commercial priority for each channel", copy: "SEO develops organic demand, paid campaigns test and capture relevant opportunities, and CRO improves the destination. GA4, Tag Manager and sales feedback connect these activities to qualified actions and help decide which work deserves the next investment." },
    ],
    deliverables: ["Kathmandu Valley audience and demand map", "SEO, local search and campaign roadmap", "Service-page and contact-path improvements", "Channel, landing-page and lead-quality reporting"],
    links: [{ label: "SEO services for Nepal businesses", href: "/seo-services-in-nepal" }, { label: "Local SEO and Maps visibility", href: "/local-seo-services-in-nepal" }, { label: "Nepal-wide digital marketing services", href: "/digital-marketing-agency-in-nepal" }],
    cta: "Plan our Kathmandu Valley growth",
  },
  "meta-ads-agency-in-nepal": {
    title: "Make Facebook and Instagram creative earn the next action.",
    intro: "Our Meta Ads strategy connects audience awareness, the offer, the creative hypothesis and the destination. We plan campaigns for qualified demand, then use creative learning and sales feedback to improve the system.",
    focus: [
      { title: "Test a message the customer can recognise", copy: "Define the problem, desired outcome, objection, proof and offer behind each concept. Build deliberate variations in hook, angle, format and CTA. Preview Reels, Stories and feed placements so captions, proof and contact cues remain legible." },
      { title: "Connect the ad, form and follow-up", copy: "Match landing-page or Instant Form questions to the offer and qualification criteria. Validate Pixel and configured Conversions API events, deduplication and lead routing. Feed contactability and qualified-stage information back into the review so creative decisions reflect the customers you want." },
    ],
    deliverables: ["Audience, objective and funnel strategy", "Hook, proof and creative-testing matrix", "Landing-page or Instant Form qualification", "Campaign reporting and lead-quality feedback"],
    links: [{ label: "Meta Ads creative testing framework", href: "/insights/meta-ads-creative-testing-framework" }, { label: "Meta Ads media budget planner", href: "/tools/meta-ads-budget-planner" }, { label: "Improve Facebook lead quality", href: "/insights/facebook-lead-generation-ads" }],
    cta: "Build our Meta Ads testing plan",
  },
  "conversion-rate-optimization-services": {
    title: "Find the decision that stops your visitor from becoming an enquiry.",
    intro: "We inspect the complete conversion path: traffic intent, message, offer, proof, interaction, form and response. CRO gives existing search and advertising traffic a clearer route into business.",
    focus: [
      { title: "Diagnose before changing the interface", copy: "Combine analytics, funnel events, customer questions, device behaviour and sales feedback. Segment the problem by landing page, source and audience. Establish whether the constraint is relevance, confidence, usability or a broken step in the journey." },
      { title: "Turn evidence into an implementation plan", copy: "Prioritise clearer value propositions, stronger proof placement, mobile form recovery and more specific calls to action. Define the hypothesis, qualified outcome and acceptance criteria for each change, then review conversion quality alongside completion rate." },
    ],
    deliverables: ["Customer-journey and conversion audit", "Offer, proof and UX recommendations", "Prioritised test and implementation backlog", "Form, CTA and qualified-outcome measurement"],
    links: [{ label: "Landing-page conversion guide", href: "/insights/landing-page-conversion-optimization-guide" }, { label: "CRO experiment backlog template", href: "/resources/cro-experiment-backlog" }, { label: "Calculate your conversion rate", href: "/tools/conversion-rate-calculator" }],
    cta: "Find our conversion opportunities",
  },
  "seo-audit-services-in-nepal": {
    title: "Turn your SEO audit into a queue your team can implement.",
    intro: "We inspect technical access, intent ownership, content, internal links, local signals and conversions together. Each finding explains the affected pages, why it matters and what completion looks like.",
    focus: [
      { title: "Connect the evidence across systems", copy: "Compare crawler output, rendered pages, Search Console, analytics and the website's commercial priorities. Distinguish discovery, crawling, indexing and canonical issues from content or conversion weaknesses. Test representative templates to identify the scale of each problem." },
      { title: "Make priority and ownership visible", copy: "Rank findings by affected demand, business value, severity, evidence, implementation effort and dependencies. Give developers and writers an actionable specification, then validate production changes and review their query, page and conversion signals." },
    ],
    deliverables: ["Crawl, index and template findings", "Keyword overlap and content-gap map", "URL-level recommendations and owners", "Prioritised roadmap and release QA criteria"],
    links: [{ label: "Full SEO services after the audit", href: "/seo-services-in-nepal" }, { label: "Technical SEO audit framework", href: "/insights/technical-seo-audit-checklist" }, { label: "Download the SEO audit checklist", href: "/resources/seo-audit-checklist" }],
    cta: "Get our SEO audit roadmap",
  },
  "technical-seo-services-in-nepal": {
    title: "Make important pages reliably accessible to people and search systems.",
    intro: "We work through the technical path from discovery to rendering, indexing and the preferred canonical. Template-level improvements give your content and commercial pages a stronger foundation.",
    focus: [
      { title: "Repair the discovery-to-index path", copy: "Inspect internal crawl paths, robots rules, noindex directives, status codes, XML sitemaps, redirects and canonicals. Compare rendered and source content for JavaScript sites, then validate that useful text, links and structured data are available." },
      { title: "Control migration and performance risk", copy: "Map legacy URLs before redesigns, preserve valuable destinations and check the production redirects. Diagnose LCP, INP and CLS using representative templates, then inspect mobile layout, image dimensions and the interactions that customers actually use." },
    ],
    deliverables: ["Technical crawl and rendering model", "Canonical, redirect and indexation fixes", "Performance and structured-data requirements", "Migration mapping and production validation"],
    links: [{ label: "Integrated SEO service programme", href: "/seo-services-in-nepal" }, { label: "Core Web Vitals optimisation", href: "/insights/core-web-vitals-optimization-guide" }, { label: "SEO audit and prioritisation", href: "/seo-audit-services-in-nepal" }],
    cta: "Review our technical SEO priorities",
  },
  "analytics-conversion-tracking-services": {
    title: "Give every platform event a clear business meaning.",
    intro: "We connect GA4, Google Tag Manager, Google Ads, Meta events and business records through shared definitions. Reliable measurement starts with the action the company values and the decision the data should support.",
    focus: [
      { title: "Design an event system your team understands", copy: "Define the source, trigger, parameters, value, currency and owner for each important action. Separate engagement events, valid form submissions, qualified leads and sales. Validate consent states and keep personal information out of URLs and analytics event payloads." },
      { title: "Reconcile and improve the feedback loop", copy: "Check duplicates, missing events, attribution scope, channel tagging and imported outcomes. Our Google Ads evidence retains fractional reported conversions, including 474.79 and 929.99, so the exact configured platform measure stays clear when reviewed against CRM and sales stages." },
    ],
    deliverables: ["Measurement plan and event dictionary", "GTM tags, triggers and data requirements", "Conversion validation and duplicate checks", "UTM governance and decision-led reporting"],
    links: [{ label: "Google Ads conversion tracking guide", href: "/insights/google-ads-conversion-tracking-guide" }, { label: "GA4 marketing attribution explained", href: "/insights/marketing-attribution-ga4-guide" }, { label: "Build consistent UTM campaign links", href: "/tools/utm-builder" }],
    cta: "Make our measurement dependable",
  },
  "content-marketing-agency-in-nepal": {
    title: "Turn your expertise into pages customers can find and use.",
    intro: "We build content around service knowledge, customer questions, proof and the decisions behind a purchase. Search research and subject expertise shape a library with a clear role for every page.",
    focus: [
      { title: "Build a useful topical structure", copy: "Assign commercial intent to service pages and deeper learning tasks to guides, questions, glossary entries, tools and templates. Connect related topics through descriptive links and resolve overlapping pages before expanding the library." },
      { title: "Publish material with substance", copy: "Extract real methods, project context, examples and customer language from the business. Add accurate technical concepts, relevant media and a natural next action. The Australian agency capture shows 1.1K clicks and 229K impressions, illustrating the organic discovery layer we inspect in content reviews." },
    ],
    deliverables: ["Audience, keyword and topic-cluster map", "Expert briefs and commercial page copy", "Editorial review and internal-link workflow", "Search discovery and assisted-action review"],
    links: [{ label: "SEO services supporting your content", href: "/seo-services-in-nepal" }, { label: "Topical authority and content clusters", href: "/insights/topical-authority-content-clusters-guide" }, { label: "Keyword mapping and search intent", href: "/insights/keyword-mapping-search-intent-guide" }],
    cta: "Build our content growth roadmap",
  },
  "/": {
    title: "Bring search, paid acquisition and conversion into one working plan.",
    intro: "We help businesses decide where growth is getting stuck, then connect the capabilities needed to move it. Our work spans SEO, Google Ads, Meta Ads, content, websites, local visibility and measurement.",
    focus: [
      { title: "A clear role for every channel", copy: "SEO builds discoverability around your services and customer questions. Google Ads captures active searches. Meta creative introduces the offer. Your website explains the value and earns the enquiry. We align those roles before expanding activity." },
      { title: "Evidence you can open and inspect", copy: "Our portfolio includes 1.1K organic clicks and 229K impressions for an Australian agency, 714 clicks for Texas HVAC, and a SaaS Google Ads account reporting 929.99 conversions. The source captures retain each account's dates, measures and market context." },
    ],
    deliverables: ["Business, demand and customer-journey review", "Prioritised channels and commercial pages", "Connected implementation and response paths", "Search, campaign and qualified-action reporting"],
    links: [{ label: "SEO services in Nepal", href: "/seo-services-in-nepal" }, { label: "Google Ads campaign management", href: "/google-ads-agency-in-nepal" }, { label: "Meta Ads creative and acquisition", href: "/meta-ads-agency-in-nepal" }],
    cta: "Find our strongest growth opportunity",
  },
  services: {
    title: "Choose the service that addresses the constraint you can see.",
    intro: "We connect strategy to implementation across search, paid media, website experience and measurement. Your starting point depends on the opportunity, the current systems and the people available to execute.",
    focus: [
      { title: "Build demand and discoverability", copy: "Use our SEO services for keyword mapping, technical foundations, content and local search. Add Google Ads when active demand needs immediate coverage, and social or Meta campaigns when the offer needs stronger creative distribution." },
      { title: "Improve conversion and decision quality", copy: "Use website and CRO work when visitors struggle to understand the offer or act. Use analytics and tracking when reporting cannot distinguish engagement from qualified enquiries. We scope the dependencies so the recommended work can produce a useful business signal." },
    ],
    deliverables: ["A defined problem and service scope", "Implementation and production responsibilities", "Relevant channel and landing-page improvements", "A review cadence tied to commercial questions"],
    links: [{ label: "Complete SEO service scope", href: "/seo-services-in-nepal" }, { label: "Landing-page conversion optimisation", href: "/conversion-rate-optimization-services" }, { label: "Marketing measurement and tracking", href: "/analytics-conversion-tracking-services" }],
    cta: "Choose our next growth priority",
  },
  "digital-marketing-agency-in-nepal": {
    title: "A digital marketing agency built around the whole buying journey.",
    intro: "We work with businesses across Nepal to connect search visibility, campaign performance and conversion. The strategy starts with the customer, the offer and the result the business needs next.",
    focus: [
      { title: "Make the proposition clear across channels", copy: "Use consistent offer language, proof, service details and contact routes across organic pages, advertising, social profiles and local listings. Each channel should fulfil the expectation created by the one before it." },
      { title: "Make implementation and learning continuous", copy: "Connect keyword research, page development, creative, media buying and tracking in a shared roadmap. Review organic queries, ad search terms, creative findings and lead quality together so one channel's learning can improve another." },
    ],
    deliverables: ["Market and acquisition opportunity review", "SEO, advertising and content priorities", "Website, landing-page and conversion direction", "Decision-led reporting and implementation review"],
    links: [{ label: "Our SEO services in Nepal", href: "/seo-services-in-nepal" }, { label: "Performance advertising across platforms", href: "/advertising-agency-in-nepal" }, { label: "Kathmandu Valley marketing support", href: "/digital-marketing-agency-in-kathmandu" }],
    cta: "Build our connected marketing plan",
  },
  "seo-company-in-nepal": {
    title: "Choose an SEO company with a clear implementation system.",
    intro: "We combine direct strategic involvement with managed technical, content, local and conversion work. You know which pages are being improved, who is responsible and how the programme is progressing.",
    focus: [
      { title: "Compare delivery as well as expertise", copy: "Ask how keyword research becomes page ownership, how technical findings reach production, who approves content and how the website team is supported. Our managed programme connects those responsibilities in a shared backlog." },
      { title: "Keep the commercial search layer visible", copy: "Review query groups and landing pages alongside organic enquiries. Our Search Console portfolio includes local-service and agency markets, with 714 clicks and 38K impressions for Texas HVAC and 1.1K clicks with 229K impressions for an Australian agency." },
    ],
    deliverables: ["An SEO roadmap with owners and priorities", "Technical and page implementation", "Content, local and internal-link development", "Organic performance and conversion reviews"],
    links: [{ label: "Compare our complete SEO service scope", href: "/seo-services-in-nepal" }, { label: "Work directly with our SEO team", href: "/seo-expert-in-nepal" }, { label: "Start with an SEO audit", href: "/seo-audit-services-in-nepal" }],
    cta: "Discuss our managed SEO programme",
  },
  "seo-expert-in-nepal": {
    title: "Direct SEO expertise for decisions that affect the whole site.",
    intro: "We stay involved in research, keyword architecture, technical priorities, content direction and conversion reviews. That gives your team a clear reasoning path from the initial diagnosis to the next website change.",
    focus: [
      { title: "Bring the difficult decisions to the surface", copy: "Decide which pages to build, merge or improve; which technical issues deserve priority; and how local, industry and informational content should support the core service. We provide the briefs and acceptance criteria that keep implementation focused." },
      { title: "Connect SEO to acquisition and conversion", copy: "Our 4+ years across SEO, Google Ads, Meta Ads, analytics and CRO give search work a wider commercial context. Paid-search language, landing-page behaviour and sales questions inform the organic roadmap." },
    ],
    deliverables: ["Direct strategy and second-opinion reviews", "Keyword and canonical-page decisions", "Technical and content implementation briefs", "Production QA and organic performance review"],
    links: [{ label: "Explore our SEO services in Nepal", href: "/seo-services-in-nepal" }, { label: "Technical SEO implementation", href: "/technical-seo-services-in-nepal" }, { label: "Managed SEO company model", href: "/seo-company-in-nepal" }],
    cta: "Discuss our SEO priorities",
  },
  about: {
    title: "Our experience joins the disciplines that shape a customer decision.",
    intro: "We have worked across SEO and paid advertising since 2021, expanding into growth strategy, analytics, automation, landing pages and CRO. GrowthLabs brings that practical experience into a connected agency model.",
    focus: [
      { title: "Research close to execution", copy: "We keep the people who understand the business involved in page, campaign and measurement decisions. You can discuss the reasoning behind a keyword cluster, creative test or conversion event directly with the team making the recommendation." },
      { title: "A portfolio across different buying journeys", copy: "Our evidence covers agency search, local home services, tourism and Google Ads accounts. We bring that perspective to businesses in Nepal, adapting the page structure, proof and enquiry route to how their own customers choose." },
    ],
    deliverables: ["Direct access to the working team", "Connected SEO and paid-media thinking", "Visible source evidence and practical recommendations", "Clear scope, implementation ownership and review"],
    links: [{ label: "See our SEO service approach", href: "/seo-services-in-nepal" }, { label: "Explore Google Ads management", href: "/google-ads-agency-in-nepal" }, { label: "Review our work and evidence", href: "/insights/case-studies" }],
    cta: "Discuss working with GrowthLabs",
  },
};
