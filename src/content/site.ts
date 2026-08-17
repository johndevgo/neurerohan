export type NavItem = { label: string; href: string };
export type Service = { title: string; slug: string; summary: string; capabilities: string[]; value: string };
export type Project = { title: string; slug: string; summary: string; category?: string; year?: string; role?: string; challenge?: string; approach?: string; outcome?: string; capabilities?: string[]; featuredImage?: string; gallery?: string[]; externalUrl?: string; featured?: boolean };
export type Milestone = { period: string; title: string; organization?: string; detail?: string };

export const services: Service[] = [
  { title: "Digital Marketing Strategy", slug: "strategy", summary: "Connect market research, customer intent, channel priorities, website needs, and measurement into one practical growth roadmap.", capabilities: ["Business and competitor analysis", "Channel strategy", "Funnel and conversion planning", "Tracking structure"], value: "Know what to build first, why it matters, and how each channel supports the next." },
  { title: "SEO Services", slug: "seo", summary: "Build long-term search visibility around valuable keywords, the right pages, strong technical foundations, and content that matches intent.", capabilities: ["Keyword research and clustering", "Technical and on-page SEO", "Content and internal linking", "Local SEO"], value: "Attract people searching for services and solutions your business provides." },
  { title: "Paid Advertising", slug: "paid-advertising", summary: "Connect Google, Meta, and TikTok campaigns with clear offers, persuasive creative, focused landing pages, and accurate tracking.", capabilities: ["Google Ads", "Meta Ads", "TikTok Ads", "Retargeting and conversion tracking"], value: "Give every paid click a clear reason to continue and a measurable next step." },
  { title: "Social Media Marketing", slug: "social-media", summary: "Plan content around audience psychology, useful content pillars, campaign moments, proof, and conversion paths—not posting for activity’s sake.", capabilities: ["Content pillars", "Short-form video direction", "Campaign planning", "Organic and paid social support"], value: "Build attention, trust, desire, and demand around the business." },
  { title: "Website & Landing Page Strategy", slug: "websites", summary: "Plan SEO-friendly, conversion-focused websites that explain the offer, build trust, and guide visitors toward action.", capabilities: ["Website structure", "Service-page planning", "Landing-page strategy", "CTA and trust planning"], value: "Turn the website into the place where marketing converts instead of where it stops." },
  { title: "Content Marketing", slug: "content", summary: "Create topic clusters, briefs, and commercial support content that answer customer questions and strengthen priority pages.", capabilities: ["SEO blog strategy", "Content briefs", "Topic clusters", "Conversion-focused content"], value: "Build authority and move readers toward informed action." },
  { title: "Local SEO", slug: "local-seo", summary: "Improve visibility for nearby customers through local keyword mapping, Google Business Profile planning, reviews, and location pages.", capabilities: ["Google Business Profile", "Local keyword mapping", "Review strategy", "Service-area pages"], value: "Make local businesses easier to find and easier to choose." },
  { title: "Conversion Rate Optimization", slug: "cro", summary: "Improve messaging, offers, page flow, forms, calls to action, and trust signals so more existing traffic becomes business.", capabilities: ["Conversion review", "CTA improvement", "Offer clarity", "Form and funnel guidance"], value: "Generate more enquiries, bookings, calls, or sales from current traffic." },
];

export const problems = [
  { title: "Your website gets visits, but too few enquiries", copy: "Visitors leave when the offer is difficult to understand, the proof is weak, the page feels generic or the next step creates friction. Clear positioning, purposeful structure and stronger conversion paths help more of the right visitors act." },
  { title: "Your SEO earns impressions, but not buying intent", copy: "Traffic alone is not growth. Keyword clustering, technical SEO, commercial page planning, internal links and intent-led content should attract people who are more likely to need the service—not simply increase a graph." },
  { title: "Your advertisements buy clicks, but the journey breaks", copy: "Audience targeting cannot rescue a weak offer or landing page. Campaign intent, creative, message, page experience, follow-up and conversion tracking need to tell one coherent story." },
  { title: "Your channels compete for attention and budget", copy: "SEO, social, paid media and the website should have different jobs within the same journey. Without priorities, every channel looks urgent and none receives the focus it needs." },
  { title: "Your reporting describes activity, not decisions", copy: "A useful report explains which queries, campaigns, pages and offers create qualified action, where people drop away and what should be improved next." },
];

export const tools = ["Google Ads", "Meta Ads", "TikTok Ads", "GA4", "Google Tag Manager", "Search Console", "Looker Studio", "Ahrefs", "SEMrush", "Screaming Frog", "Microsoft Clarity", "Hotjar", "WordPress", "Marketing automation"];

export const industries = [
  { title: "Hotels & hospitality", copy: "SEO, local visibility, booking-focused pages, paid campaigns, social content, and offer positioning." },
  { title: "Travel agencies", copy: "Destination and package pages, itinerary content, seasonal search planning, and high-intent landing pages." },
  { title: "Restaurants & local brands", copy: "Google visibility, reviews, local SEO, social demand, offers, and clearer booking journeys." },
  { title: "Ecommerce", copy: "Category and product SEO, paid ads, retargeting, website structure, product clarity, and conversion improvement." },
  { title: "Service businesses", copy: "Commercial service pages, local SEO, lead funnels, trust signals, and content designed to convert." },
  { title: "Startups & growing brands", copy: "Positioning, website structure, channel strategy, SEO roadmaps, campaigns, and content direction." },
];

export const process = [
  { title: "Understand the business", copy: "Review the audience, offer, market, competitors, website, current marketing, and primary growth challenge." },
  { title: "Research demand", copy: "Study keywords, search intent, competitor pages, ranking gaps, campaign opportunities, and customer decisions." },
  { title: "Build the growth map", copy: "Prioritise SEO pages, landing pages, supporting content, ads, social direction, tracking, and conversion improvements." },
  { title: "Execute the right channels", copy: "Apply the mix of SEO, advertising, websites, content, local search, social media, and CRO the business actually needs." },
  { title: "Validate and measure", copy: "Check that agreed changes work as intended, then review qualified traffic, campaign signals, page behaviour, conversions and lead quality." },
  { title: "Set the next priority", copy: "Use the evidence to decide what to continue, change, stop or test—and which constraint deserves the next investment." },
];

export const faqs = [
  { question: "What is GrowthLabs by Rohan Neure?", answer: "GrowthLabs by Rohan Neure is a founder-led digital growth partner based in Bhaktapur and serving businesses across Nepal. It connects SEO, paid advertising, social media, content, websites, landing pages, local search, analytics and conversion rate optimisation around measurable business goals." },
  { question: "Is GrowthLabs a digital marketing agency in Nepal?", answer: "Yes. GrowthLabs provides connected digital marketing strategy and implementation for businesses in Nepal. The dedicated agency page explains the complete national service model, industries, process and agency-selection guidance." },
  { question: "Can I work directly with Rohan Neure?", answer: "Yes. Rohan leads the strategy and stays involved in business analysis, keyword mapping, page planning, campaign direction, tracking and conversion priorities." },
  { question: "Which service should I start with?", answer: "Start with the biggest constraint. That may be weak search visibility, expensive advertising, an unclear website, unreliable tracking or low conversion rates. The first review identifies the constraint before recommending a service mix." },
  { question: "Does GrowthLabs work only with businesses in Kathmandu?", answer: "No. GrowthLabs is based at Sallaghari Shopping Complex in Bhaktapur, works across Kathmandu Valley and supports businesses throughout Nepal through online appointments and on-site support where appropriate." },
  { question: "Do you offer both SEO and paid advertising?", answer: "Yes. SEO can build compounding visibility while paid advertising can capture or create demand more quickly. They can be used separately or together depending on the goal, budget, market and website readiness." },
  { question: "How do I get started?", answer: "Share your website, target audience and biggest growth challenge through the contact page, WhatsApp or phone. The first conversation is used to clarify the most useful next step." },
];

export const siteConfig = {
  domain: "https://neurerohan.com.np",
  name: "GrowthLabs",
  fullName: "Rohan Neure",
  brandName: "GrowthLabs by Rohan Neure",
  initials: "GL",
  title: "Growth Marketer | SEO, Google Ads, Meta & TikTok Ads",
  positioning: "Marketing built to rank, convert, and grow.",
  shortBio: "Rohan Neure is a performance and growth marketer with 4+ years of experience building full-funnel systems across Google Ads, Meta Ads, TikTok Ads, SEO, CRO, analytics, tracking, automation, and landing-page optimisation.",
  about: ["GrowthLabs by Rohan Neure is built for businesses that need more than disconnected digital activity. The work starts with the business, the audience, search demand, and the full journey from visibility to enquiry.", "Rohan connects audience research, paid media, search intent, landing pages, tracking, reporting, conversion flow, creative testing, and performance analysis so businesses can understand what is working, what is wasting money, and where growth is actually coming from."],
  profileImage: "/images/brand/rohan-neure-profile.png",
  brandAvatar: "/images/brand/growthlabs-brand-avatar.png",
  servicesCover: "/images/brand/growthlabs-services-cover.png",
  proofImages: [
    { src: "/images/proof/search-console-growth-01.png", alt: "Google Search Console performance showing 714 clicks and 38,000 impressions over three months", caption: "714 clicks · 38K impressions · three-month upward search trend" },
    { src: "/images/proof/search-console-growth-02.png", alt: "Google Search Console performance showing 87 clicks and 52,000 impressions with recent impression growth", caption: "52K impressions · emerging visibility trend" },
    { src: "/images/proof/search-console-growth-03.png", alt: "Google Search Console performance showing 358 clicks and 35,900 impressions", caption: "358 clicks · 35.9K impressions · sustained search visibility" },
    { src: "/images/proof/search-console-growth-04.png", alt: "Google Search Console performance showing 876 clicks and 178,000 impressions", caption: "876 clicks · 178K impressions · consistent organic reach" },
  ],
  location: "Sallaghari Shopping Complex, Bhaktapur 44800, Nepal",
  email: "contact@neurerohan.com.np",
  phone: "+9779746265996",
  phoneDisplay: "+977 974-626-5996",
  whatsapp: "https://wa.me/9779746265996",
  mapUrl: "https://maps.app.goo.gl/aL8fKQjg8Hb5oimAA",
  openingHours: {
    summary: "Open 24 hours Sunday to Friday · Closed Saturday",
    openDays: "Sunday–Friday",
    openTime: "24 hours",
    closedDay: "Saturday",
  },
  availability: "Based in Bhaktapur, serving Kathmandu Valley and businesses across Nepal.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Nepal agency", href: "/digital-marketing-agency-in-nepal" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  expertise: services,
  projects: [] as Project[],
  experience: [
    { period: "Jan 2025 — Present", title: "Growth Marketer · SEO & Paid Ads Specialist", organization: "InTech Nexus", detail: "Paid media, SEO, CRO, analytics, tracking, reporting, landing pages, creative strategy, and automation." },
    { period: "Nov 2021 — Dec 2024", title: "SEO & Ads Executive", organization: "Business Outstanders", detail: "Progressed from SEO Executive into SEO and paid advertising, website optimisation, creative direction, research, analysis, and reporting." },
  ] as Milestone[],
  education: [
    { period: "2023 — Present", title: "BSc CSIT", organization: "Tribhuvan University" },
    { period: "2021 — 2023", title: "Computer Science", organization: "Xavier International College, Kathmandu" },
  ] as Milestone[],
  achievements: [] as { metric: string; label: string; detail: string }[],
  values: [
    { title: "Search intent first", detail: "Research what customers search for and need before deciding which pages, content, or campaigns should be built." },
    { title: "SEO and CRO together", detail: "Rankings create opportunity; clear positioning, trust, and conversion paths turn that opportunity into business." },
    { title: "Connected execution", detail: "Ads, landing pages, content, websites, and tracking work better when they tell one coherent story." },
    { title: "Practical growth", detail: "Focus reporting and recommendations on business movement, useful next steps, and consistent improvement." },
  ],
  interests: [] as string[],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/growthbyrohan/" },
    { label: "Pinterest", href: "https://www.pinterest.com/neurerohan/" },
    { label: "X", href: "https://x.com/rohanneure" },
  ],
  businessProfiles: [
    { label: "Google Business Profile", href: "https://maps.app.goo.gl/aL8fKQjg8Hb5oimAA" },
    { label: "Facebook", href: "https://www.facebook.com/growthbyrohan/" },
  ],
  cta: {
    primary: { label: "Get a growth review", href: "/contact" },
    secondary: { label: "Explore services", href: "/services" },
    contact: { label: "Start a conversation", href: "/contact" },
  },
  seo: {
    title: "GrowthLabs by Rohan Neure | SEO, Ads, Websites & CRO",
    description: "Founder-led digital growth in Nepal, connecting SEO, paid ads, websites, content, tracking and CRO to generate better enquiries, bookings and sales.",
    locale: "en_NP",
  },
  contentStatus: { needsReview: false, message: "Approved brand content supplied." },
} as const;

export type SiteConfig = typeof siteConfig;
