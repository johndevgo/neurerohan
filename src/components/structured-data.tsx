import { siteConfig } from "@/content/site";

type JsonLdNode = Record<string, unknown>;
export type FaqItem = { question: string; answer: string };

const root = `${siteConfig.domain}/`;
const organizationId = `${root}#organization`;
const websiteId = `${root}#website`;
const personId = `${root}#rohan-neure`;
const logoId = `${root}#logo`;
const personImageId = `${root}#rohan-neure-image`;

const country = { "@type": "Country", name: "Nepal" };

export const globalSchema: JsonLdNode = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: root,
      name: siteConfig.brandName,
      alternateName: siteConfig.name,
      description: "Founder-led digital marketing agency in Nepal connecting SEO, Google Ads, Meta Ads, landing pages, tracking and CRO around qualified business growth.",
      inLanguage: "en-NP",
      publisher: { "@id": organizationId },
      about: { "@id": organizationId },
      creator: { "@id": personId },
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": organizationId,
      name: siteConfig.brandName,
      alternateName: [siteConfig.name, "GrowthLabs by Rohan Neure - SEO & Digital Marketing Agency in Nepal"],
      url: root,
      description: "GrowthLabs by Rohan Neure is a founder-led digital marketing agency based in Bhaktapur and serving businesses across Nepal through SEO, Google Ads, Meta Ads, social media, website strategy, local SEO, content, analytics and conversion rate optimisation.",
      slogan: siteConfig.positioning,
      foundingDate: "2020-11-08",
      founder: { "@id": personId },
      logo: {
        "@type": "ImageObject",
        "@id": logoId,
        url: `${siteConfig.domain}${siteConfig.brandAvatar}`,
        contentUrl: `${siteConfig.domain}${siteConfig.brandAvatar}`,
        width: 1024,
        height: 1024,
        caption: `${siteConfig.brandName} brand avatar`,
      },
      image: { "@id": logoId },
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sallaghari Shopping Complex",
        addressLocality: "Bhaktapur",
        postalCode: "44800",
        addressCountry: "NP",
      },
      hasMap: siteConfig.mapUrl,
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.mapCoordinates.latitude,
        longitude: siteConfig.mapCoordinates.longitude,
      },
      areaServed: [country, { "@type": "AdministrativeArea", name: "Kathmandu Valley" }],
      hasOfferCatalog: { "@id": `${siteConfig.domain}/services#offer-catalog` },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "https://schema.org/Sunday",
            "https://schema.org/Monday",
            "https://schema.org/Tuesday",
            "https://schema.org/Wednesday",
            "https://schema.org/Thursday",
            "https://schema.org/Friday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "https://schema.org/Saturday",
          opens: "00:00",
          closes: "00:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales and customer service",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          url: `${siteConfig.domain}/contact`,
        },
        {
          "@type": "ContactPoint",
          contactType: "WhatsApp enquiries",
          telephone: siteConfig.phone,
          url: siteConfig.whatsapp,
        },
      ],
      sameAs: siteConfig.businessProfiles.map((profile) => profile.href),
      knowsAbout: [
        "Digital marketing strategy",
        "Search engine optimisation",
        "Local SEO",
        "Google Ads",
        "Meta Ads",
        "TikTok Ads",
        "Social media marketing",
        "Website and landing-page strategy",
        "Content marketing",
        "Conversion rate optimisation",
        "Analytics and conversion tracking",
      ],
    },
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.fullName,
      url: `${siteConfig.domain}/about`,
      jobTitle: "Founder, Growth Marketer, SEO, Google Ads and Meta Ads Specialist",
      description: "Founder of GrowthLabs and a performance and growth marketer specialising in SEO, Google Ads, Meta Ads, conversion optimisation, analytics, tracking and landing-page strategy.",
      image: {
        "@type": "ImageObject",
        "@id": personImageId,
        url: `${siteConfig.domain}${siteConfig.profileImage}`,
        contentUrl: `${siteConfig.domain}${siteConfig.profileImage}`,
        caption: `${siteConfig.fullName}, founder of GrowthLabs`,
      },
      mainEntityOfPage: { "@id": `${siteConfig.domain}/about#webpage` },
      worksFor: { "@id": organizationId },
      sameAs: siteConfig.socials.map((profile) => profile.href),
      knowsAbout: [
        "Search engine optimisation",
        "Keyword research and clustering",
        "Technical SEO",
        "On-page SEO",
        "Google Ads",
        "Meta Ads",
        "TikTok Ads",
        "Conversion rate optimisation",
        "Google Analytics 4",
        "Google Tag Manager",
        "Landing-page optimisation",
      ],
    },
  ],
};

type OfferSpec = {
  name: string;
  anchor?: string;
  url?: string;
  serviceType: string;
  description?: string;
};

type ServiceSchemaConfig = {
  path: string;
  pageName: string;
  breadcrumbName: string;
  description: string;
  serviceName: string;
  serviceType: string;
  audience: string;
  categories: string[];
  offers: OfferSpec[];
  provider?: "organization" | "person";
  areaServed?: JsonLdNode | JsonLdNode[];
};

const serviceSchemas: Record<string, ServiceSchemaConfig> = {
  "/digital-marketing-agency-in-nepal": {
    path: "/digital-marketing-agency-in-nepal",
    pageName: "Marketing Company in Nepal | GrowthLabs Digital Agency",
    breadcrumbName: "Marketing Company in Nepal",
    description: "GrowthLabs is a founder-led marketing company and digital marketing agency in Nepal connecting SEO, Google Ads, Meta Ads, websites, tracking and CRO.",
    serviceName: "Digital marketing agency services in Nepal",
    serviceType: "Digital marketing strategy and implementation",
    audience: "Businesses in Nepal seeking connected digital growth",
    categories: ["Digital marketing", "SEO", "Google Ads", "Meta Ads", "Websites", "CRO"],
    offers: [
      { name: "Digital marketing strategy", url: `${siteConfig.domain}/services#digital-marketing-strategy`, serviceType: "Digital marketing strategy and growth planning" },
      { name: "SEO services", url: `${siteConfig.domain}/seo-company-in-nepal`, serviceType: "Search engine optimisation" },
      { name: "Google Ads management", url: `${siteConfig.domain}/google-ads-agency-in-nepal`, serviceType: "Google Ads strategy and campaign management" },
      { name: "Meta Ads and paid media", url: `${siteConfig.domain}/advertising-agency-in-nepal`, serviceType: "Meta Ads and TikTok Ads management" },
      { name: "Social media marketing", url: `${siteConfig.domain}/social-media-marketing-agency-in-nepal`, serviceType: "Social strategy, content and paid distribution" },
      { name: "Website strategy", url: `${siteConfig.domain}/web-design-company-in-nepal`, serviceType: "Conversion-focused website and landing-page strategy" },
      { name: "Local SEO", url: `${siteConfig.domain}/local-seo-services-in-nepal`, serviceType: "Local SEO and Google Business Profile optimisation" },
      { name: "Analytics and CRO", url: `${siteConfig.domain}/services#analytics`, serviceType: "Analytics, conversion tracking and conversion optimisation" },
    ],
  },
  "/seo-expert-in-nepal": {
    path: "/seo-expert-in-nepal",
    pageName: "SEO Expert in Nepal | Rohan Neure, GrowthLabs",
    breadcrumbName: "SEO Expert in Nepal",
    description: "Work directly with Rohan Neure, an SEO expert in Nepal, on technical SEO, keyword strategy, content, local search and conversion-focused growth.",
    serviceName: "SEO services by Rohan Neure",
    serviceType: "Search engine optimisation consulting",
    audience: "Businesses in Nepal seeking direct SEO expertise",
    categories: ["SEO consulting", "Technical SEO", "Content strategy", "Local SEO"],
    provider: "person",
    offers: [
      { name: "SEO audit", anchor: "seo-audit", serviceType: "SEO audit and opportunity review" },
      { name: "Keyword architecture", anchor: "keyword-research", serviceType: "Keyword research, clustering and page mapping" },
      { name: "Technical SEO", anchor: "technical-seo", serviceType: "Technical SEO consulting" },
      { name: "On-page SEO", anchor: "on-page-seo", serviceType: "On-page search engine optimisation" },
      { name: "SEO content strategy", anchor: "content-strategy", serviceType: "SEO content strategy" },
      { name: "Local SEO", anchor: "local-seo", serviceType: "Local SEO and Google Business Profile optimisation" },
      { name: "Internal linking", anchor: "internal-linking", serviceType: "Internal linking and topical architecture" },
      { name: "SEO and CRO", anchor: "seo-cro", serviceType: "Conversion-focused search engine optimisation" },
    ],
  },
  "/seo-company-in-nepal": {
    path: "/seo-company-in-nepal",
    pageName: "SEO Company in Nepal | GrowthLabs SEO Services",
    breadcrumbName: "SEO Company in Nepal",
    description: "GrowthLabs is a founder-led SEO company in Nepal connecting technical SEO, content, local search, internal links, tracking and CRO for measurable growth.",
    serviceName: "SEO services in Nepal",
    serviceType: "Ongoing search engine optimisation services",
    audience: "Businesses comparing an SEO company or SEO agency in Nepal",
    categories: ["SEO agency", "Technical SEO", "Content SEO", "Local SEO", "CRO"],
    offers: [
      { name: "SEO strategy", anchor: "strategy", serviceType: "SEO strategy and keyword architecture" },
      { name: "Technical SEO", anchor: "technical-seo", serviceType: "Technical SEO" },
      { name: "On-page SEO", anchor: "on-page-seo", serviceType: "On-page SEO" },
      { name: "SEO content", anchor: "content", serviceType: "Commercial and supporting SEO content" },
      { name: "Local SEO", anchor: "local-seo", serviceType: "Local SEO" },
      { name: "Internal linking", anchor: "internal-linking", serviceType: "Internal linking and site architecture" },
      { name: "SEO measurement", anchor: "measurement", serviceType: "SEO analytics and reporting" },
      { name: "SEO and CRO", anchor: "cro", serviceType: "Organic landing-page conversion optimisation" },
    ],
  },
  "/hotel-digital-marketing-agency": {
    path: "/hotel-digital-marketing-agency",
    pageName: "Hotel Digital Marketing Agency | GrowthLabs",
    breadcrumbName: "Hotel Digital Marketing Agency",
    description: "Connect hotel SEO, paid campaigns, social proof, website journeys, tracking and CRO to attract qualified demand and support more direct bookings.",
    serviceName: "Hotel digital marketing services",
    serviceType: "Digital marketing for hotels and hospitality businesses",
    audience: "Hotels, boutique properties and hospitality businesses",
    categories: ["Hotel marketing", "Hospitality marketing", "Hotel SEO", "Direct-booking CRO"],
    offers: [
      { name: "Hotel SEO", anchor: "hotel-seo", serviceType: "Hotel SEO and destination-demand strategy" },
      { name: "Hotel website marketing", anchor: "website", serviceType: "Hotel website and booking-journey optimisation" },
      { name: "Hotel advertising", anchor: "advertising", serviceType: "Google, Meta and TikTok campaigns for hotels" },
      { name: "Hotel local SEO", anchor: "local-seo", serviceType: "Local SEO and Google Business Profile optimisation" },
      { name: "Hotel content", anchor: "content", serviceType: "Hospitality content and social proof strategy" },
      { name: "Hotel CRO", anchor: "cro", serviceType: "Direct-booking conversion optimisation" },
      { name: "Hotel measurement", anchor: "measurement", serviceType: "Hotel website and campaign measurement" },
    ],
  },
  "/social-media-marketing-agency-in-nepal": {
    path: "/social-media-marketing-agency-in-nepal",
    pageName: "Social Media Marketing Agency in Nepal | GrowthLabs",
    breadcrumbName: "Social Media Marketing Agency in Nepal",
    description: "Build an organic and Meta Ads system around audience insight, useful content, performance creative, retargeting, tracking and conversion.",
    serviceName: "Social media marketing services in Nepal",
    serviceType: "Social media strategy, content and paid distribution",
    audience: "Businesses in Nepal seeking organic and paid social media support",
    categories: ["Social media marketing", "Content strategy", "Meta Ads", "TikTok Ads"],
    offers: [
      { name: "Social strategy", anchor: "strategy", serviceType: "Audience, channel and content strategy" },
      { name: "Content planning", anchor: "content", serviceType: "Content pillars and campaign planning" },
      { name: "Creative direction", anchor: "creative", serviceType: "Creative briefs, hooks, formats and scripts" },
      { name: "Organic publishing", anchor: "organic", serviceType: "Organic social publishing workflow" },
      { name: "Paid social", anchor: "paid-social", serviceType: "Meta and TikTok campaign management" },
      { name: "Social measurement", anchor: "measurement", serviceType: "Social media reporting and conversion-path review" },
    ],
  },
  "/web-design-company-in-nepal": {
    path: "/web-design-company-in-nepal",
    pageName: "Web Design Company in Nepal | SEO + CRO Websites",
    breadcrumbName: "Web Design Company in Nepal",
    description: "Plan an SEO-friendly, conversion-focused website with clear structure, persuasive content, responsive UX, tracking and an agreed development scope.",
    serviceName: "Website design and strategy in Nepal",
    serviceType: "SEO-friendly, conversion-focused website strategy and design",
    audience: "Businesses in Nepal seeking a marketing website or landing-page system",
    categories: ["Web design", "Website strategy", "SEO architecture", "Conversion design"],
    offers: [
      { name: "Website discovery", anchor: "discovery", serviceType: "Business and website discovery" },
      { name: "SEO architecture", anchor: "seo-architecture", serviceType: "Keyword research and sitemap architecture" },
      { name: "UX planning", anchor: "ux", serviceType: "User journeys and information architecture" },
      { name: "Conversion design", anchor: "cro", serviceType: "Conversion-focused page planning" },
      { name: "Website content", anchor: "content", serviceType: "Website content structure and on-page SEO" },
      { name: "Responsive design", anchor: "responsive", serviceType: "Responsive interface design" },
      { name: "Launch readiness", anchor: "launch", serviceType: "Analytics, tracking and launch QA" },
    ],
  },
  "/seo-for-travel-agency": {
    path: "/seo-for-travel-agency",
    pageName: "SEO for Travel Agencies | Destination-to-Booking Strategy",
    breadcrumbName: "SEO for Travel Agencies",
    description: "Build travel SEO around destinations, packages, itineraries, seasons, technical foundations, useful content and enquiry-focused website journeys.",
    serviceName: "SEO for travel agencies",
    serviceType: "Travel-industry search engine optimisation",
    audience: "Travel agencies, trekking companies, tour operators and tourism businesses",
    categories: ["Travel SEO", "Tourism SEO", "Destination content", "Technical SEO"],
    offers: [
      { name: "Travel keyword research", anchor: "keyword-research", serviceType: "Destination, package and itinerary keyword research" },
      { name: "Travel site architecture", anchor: "architecture", serviceType: "Destination and package architecture" },
      { name: "Technical travel SEO", anchor: "technical-seo", serviceType: "Technical SEO for travel websites" },
      { name: "Travel on-page SEO", anchor: "on-page-seo", serviceType: "On-page SEO for destination and package pages" },
      { name: "Travel content strategy", anchor: "content", serviceType: "Travel content strategy and briefs" },
      { name: "Source-market SEO", anchor: "source-markets", serviceType: "Local and international source-market relevance" },
      { name: "Travel CRO", anchor: "cro", serviceType: "Travel enquiry conversion optimisation" },
    ],
  },
  "/advertising-agency-in-nepal": {
    path: "/advertising-agency-in-nepal",
    pageName: "Advertising Agency in Nepal | Google, Meta & TikTok Ads",
    breadcrumbName: "Advertising Agency in Nepal",
    description: "Connect Google, Meta and TikTok advertising with stronger offers, performance creative, landing pages, tracking, retargeting and CRO.",
    serviceName: "Google Ads and Meta Ads services in Nepal",
    serviceType: "Google Ads, Meta Ads and TikTok Ads strategy and management",
    audience: "Businesses in Nepal seeking measurable digital advertising",
    categories: ["Performance advertising", "Google Ads", "Meta Ads", "TikTok Ads", "Retargeting"],
    offers: [
      { name: "Google Ads", anchor: "google-ads", serviceType: "Google Ads campaign strategy and management" },
      { name: "Meta Ads", anchor: "meta-ads", serviceType: "Facebook and Instagram advertising" },
      { name: "TikTok Ads", anchor: "tiktok-ads", serviceType: "TikTok advertising" },
      { name: "Retargeting", anchor: "retargeting", serviceType: "Google, Meta and TikTok retargeting" },
      { name: "Performance creative", anchor: "creative", serviceType: "Performance creative strategy and testing" },
      { name: "Landing-page CRO", anchor: "landing-pages", serviceType: "Landing-page strategy and conversion optimisation" },
      { name: "Ad measurement", anchor: "measurement", serviceType: "Advertising analytics and conversion tracking" },
    ],
  },
  "/google-ads-agency-in-nepal": {
    path: "/google-ads-agency-in-nepal",
    pageName: "Google Ads Agency in Nepal | GrowthLabs",
    breadcrumbName: "Google Ads Agency in Nepal",
    description: "Founder-led Google Ads management in Nepal covering account audits, search campaigns, keywords, landing pages, tracking, optimisation and reporting.",
    serviceName: "Google Ads management services in Nepal",
    serviceType: "Google Ads strategy, campaign management and conversion measurement",
    audience: "Businesses in Nepal seeking Google Ads account audits, paid search management and PPC optimisation",
    categories: ["Google Ads", "Paid search", "PPC management", "Conversion tracking", "Landing-page optimisation"],
    offers: [
      { name: "Google Ads account audit", anchor: "account-audit", serviceType: "Google Ads account audit and opportunity review", description: "Review campaign settings, structure, search terms, keywords, ads, bidding, budgets, conversions and landing pages." },
      { name: "Google Ads keyword strategy", anchor: "keyword-strategy", serviceType: "Paid-search keyword, match-type and negative-keyword strategy" },
      { name: "Google Ads campaign architecture", anchor: "campaign-architecture", serviceType: "Google Ads campaign and ad-group planning" },
      { name: "Google Ads copy and assets", anchor: "ads-assets", serviceType: "Responsive search ads and Google Ads asset planning" },
      { name: "Google Ads landing-page alignment", anchor: "landing-pages", serviceType: "Paid-search landing-page strategy and conversion optimisation" },
      { name: "Google Ads conversion tracking", anchor: "measurement", serviceType: "Google Ads, Google Analytics 4 and Tag Manager conversion measurement" },
      { name: "Google Ads bidding and budget control", anchor: "bidding-budget", serviceType: "Google Ads bid strategy and media-budget allocation" },
      { name: "Google Ads optimisation and reporting", anchor: "optimisation", serviceType: "Google Ads search-term, campaign and conversion optimisation" },
    ],
  },
  "/local-seo-services-in-nepal": {
    path: "/local-seo-services-in-nepal",
    pageName: "Local SEO Services in Nepal | GrowthLabs",
    breadcrumbName: "Local SEO Services in Nepal",
    description: "Founder-led local SEO in Nepal covering Google Business Profile, local pages, business information, reviews, citations, tracking and local conversion paths.",
    serviceName: "Local SEO services in Nepal",
    serviceType: "Local search engine optimisation and Google Business Profile optimisation",
    audience: "Eligible storefront and service-area businesses seeking local search visibility in Nepal",
    categories: ["Local SEO", "Google Business Profile", "Google Maps", "Local search", "Review strategy", "Local conversion tracking"],
    areaServed: [{ "@type": "Country", name: "Nepal" }, { "@type": "AdministrativeArea", name: "Kathmandu Valley" }, { "@type": "City", name: "Bhaktapur" }],
    offers: [
      { name: "Local visibility audit", anchor: "local-audit", serviceType: "Local SEO and Google Business Profile audit", description: "Review business eligibility, entity consistency, local search presentation, website relevance, reviews, citations and measurement." },
      { name: "Google Business Profile optimisation", anchor: "google-business-profile", serviceType: "Google Business Profile setup and optimisation" },
      { name: "Local keyword and page strategy", anchor: "local-pages", serviceType: "Local keyword mapping and service-location page strategy" },
      { name: "Citation and business-information consistency", anchor: "citations", serviceType: "Local citation review and NAP consistency" },
      { name: "Review and reputation workflow", anchor: "reviews", serviceType: "Authentic customer review workflow and response guidance" },
      { name: "Local on-page and technical SEO", anchor: "local-on-page", serviceType: "On-page, technical and structured-data optimisation for local search" },
      { name: "Local authority and entity signals", anchor: "local-authority", serviceType: "Local entity consistency, mentions and relevant authority development" },
      { name: "Local SEO measurement", anchor: "measurement", serviceType: "Google Business Profile, website and qualified-enquiry measurement" },
    ],
  },
  "/meta-ads-agency-in-nepal": {
    path: "/meta-ads-agency-in-nepal",
    pageName: "Meta Ads Agency in Nepal | Facebook & Instagram Ads",
    breadcrumbName: "Meta Ads Agency in Nepal",
    description: "Founder-led Meta Ads services in Nepal connecting Facebook and Instagram campaign strategy, creative testing, destinations, tracking, follow-up and lead quality.",
    serviceName: "Meta Ads management services in Nepal",
    serviceType: "Facebook and Instagram advertising strategy and campaign management",
    audience: "Businesses in Nepal seeking Meta Ads strategy, campaign management and paid-social optimisation",
    categories: ["Meta Ads", "Facebook Ads", "Instagram Ads", "Paid social", "Lead generation", "Conversion tracking"],
    offers: [
      { name: "Meta Ads account and journey audit", anchor: "account-audit", serviceType: "Meta Ads account, offer and conversion-journey audit" },
      { name: "Meta campaign architecture", anchor: "campaign-architecture", serviceType: "Facebook and Instagram campaign architecture" },
      { name: "Meta audience strategy", anchor: "audience-strategy", serviceType: "Meta Ads audience and retargeting strategy" },
      { name: "Performance creative system", anchor: "creative-system", serviceType: "Paid-social creative strategy and testing" },
      { name: "Lead form and landing-page strategy", anchor: "destination-strategy", serviceType: "Meta lead form and landing-page conversion strategy" },
      { name: "Meta conversion measurement", anchor: "measurement", serviceType: "Meta Pixel, Conversions API and analytics planning" },
      { name: "Lead-quality feedback", anchor: "lead-quality", serviceType: "Paid-social lead qualification and sales feedback loop" },
      { name: "Meta Ads optimisation and reporting", anchor: "optimisation", serviceType: "Meta Ads campaign optimisation and decision-led reporting" },
    ],
  },
  "/conversion-rate-optimization-services": {
    path: "/conversion-rate-optimization-services",
    pageName: "Conversion Rate Optimisation Services | GrowthLabs",
    breadcrumbName: "Conversion Rate Optimisation Services",
    description: "Research-led conversion rate optimisation across offers, messaging, landing pages, forms, mobile UX, analytics and responsible experimentation.",
    serviceName: "Conversion rate optimisation services",
    serviceType: "Website and landing-page conversion rate optimisation",
    audience: "Businesses seeking more qualified action from existing website and campaign traffic",
    categories: ["Conversion rate optimisation", "Landing-page optimisation", "User experience", "Analytics", "Experimentation"],
    offers: [
      { name: "Conversion and journey audit", anchor: "conversion-audit", serviceType: "Website conversion and customer-journey audit" },
      { name: "Offer and message optimisation", anchor: "message-clarity", serviceType: "Offer positioning and conversion-message optimisation" },
      { name: "Landing-page optimisation", anchor: "landing-pages", serviceType: "Landing-page conversion rate optimisation" },
      { name: "Form and contact-path optimisation", anchor: "forms", serviceType: "Form, call-to-action and contact-path optimisation" },
      { name: "Mobile UX and accessibility review", anchor: "mobile-ux", serviceType: "Mobile user-experience and accessibility optimisation" },
      { name: "Conversion measurement planning", anchor: "measurement", serviceType: "Analytics and conversion-event planning" },
      { name: "Conversion research", anchor: "research", serviceType: "Analytics, behaviour and customer-evidence synthesis" },
      { name: "Experimentation roadmap", anchor: "experimentation", serviceType: "Conversion experiment and implementation planning" },
    ],
  },
  "/seo-audit-services-in-nepal": {
    path: "/seo-audit-services-in-nepal",
    pageName: "SEO Audit Services in Nepal | GrowthLabs",
    breadcrumbName: "SEO Audit Services in Nepal",
    description: "SEO audit services in Nepal covering crawling, indexation, technical SEO, keyword mapping, on-page relevance, internal links, local search and implementation priorities.",
    serviceName: "SEO audit services in Nepal",
    serviceType: "Technical, on-page, content and local SEO audit",
    audience: "Businesses seeking an evidence-led SEO diagnosis and prioritised implementation roadmap",
    categories: ["SEO audit", "Technical SEO", "On-page SEO", "Content audit", "Local SEO", "Search measurement"],
    offers: [
      { name: "SEO discovery and baseline", anchor: "discovery", serviceType: "SEO baseline and business-context review" },
      { name: "Crawling and indexation audit", anchor: "indexation", serviceType: "Search crawling and indexation audit" },
      { name: "Technical SEO audit", anchor: "technical-seo", serviceType: "Technical SEO audit" },
      { name: "Keyword and page architecture audit", anchor: "keyword-mapping", serviceType: "Keyword ownership and website architecture audit" },
      { name: "On-page and entity relevance audit", anchor: "on-page-seo", serviceType: "On-page SEO and entity-relevance audit" },
      { name: "Internal-link audit", anchor: "internal-linking", serviceType: "Internal linking and crawl-path audit" },
      { name: "Local SEO audit", anchor: "local-seo", serviceType: "Google Business Profile and local SEO audit" },
      { name: "SEO implementation roadmap", anchor: "roadmap", serviceType: "Prioritised SEO implementation roadmap" },
    ],
  },
  "/digital-marketing-agency-in-kathmandu": {
    path: "/digital-marketing-agency-in-kathmandu",
    pageName: "Digital Marketing Agency in Kathmandu | GrowthLabs",
    breadcrumbName: "Digital Marketing Agency in Kathmandu",
    description: "Founder-led digital marketing for Kathmandu businesses connecting SEO, Google Ads, Meta Ads, social media, websites, local search, tracking and CRO.",
    serviceName: "Digital marketing services for Kathmandu Valley businesses",
    serviceType: "Digital marketing strategy and implementation for Kathmandu Valley",
    audience: "Businesses serving customers in Kathmandu and Kathmandu Valley",
    categories: ["Digital marketing in Kathmandu", "Local SEO", "Paid advertising", "Websites", "CRO"],
    areaServed: [{ "@type": "City", name: "Kathmandu" }, { "@type": "AdministrativeArea", name: "Kathmandu Valley" }],
    offers: [
      { name: "Kathmandu SEO", anchor: "seo", serviceType: "SEO and local search for Kathmandu businesses" },
      { name: "Google Ads", anchor: "google-ads", serviceType: "Google Ads for Kathmandu businesses" },
      { name: "Meta and TikTok Ads", anchor: "paid-social", serviceType: "Paid social advertising" },
      { name: "Social media marketing", anchor: "social", serviceType: "Social strategy and campaign planning" },
      { name: "Website strategy", anchor: "websites", serviceType: "Website and landing-page strategy" },
      { name: "Local SEO", anchor: "local-seo", serviceType: "Google Business Profile and local visibility" },
      { name: "Analytics and CRO", anchor: "cro", serviceType: "Analytics, tracking and conversion optimisation" },
    ],
  },
};

function pageUrl(path: string) {
  return path === "/" ? root : `${siteConfig.domain}${path}`;
}

function breadcrumb(url: string, label: string, includeServices = true): JsonLdNode {
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: root }];
  if (includeServices) items.push({ "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.domain}/services` });
  items.push({ "@type": "ListItem", position: includeServices ? 3 : 2, name: label, item: url });
  return { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: items };
}

function offer(url: string, spec: OfferSpec, providerId = organizationId, areaServed: JsonLdNode | JsonLdNode[] = country): JsonLdNode {
  const offerUrl = spec.url ?? (spec.anchor ? `${url}#${spec.anchor}` : url);
  return {
    "@type": "Offer",
    name: spec.name,
    url: offerUrl,
    seller: { "@id": organizationId },
    ...(spec.description ? { description: spec.description } : {}),
    itemOffered: {
      "@type": "Service",
      name: spec.name,
      serviceType: spec.serviceType,
      url: offerUrl,
      provider: { "@id": providerId },
      areaServed,
    },
  };
}

function servicePageSchema(config: ServiceSchemaConfig): JsonLdNode {
  const url = pageUrl(config.path);
  const webpageId = `${url}#webpage`;
  const serviceId = `${url}#service`;
  const catalogId = `${url}#offer-catalog`;
  const providerId = config.provider === "person" ? personId : organizationId;
  const areaServed = config.areaServed ?? country;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webpageId,
        url,
        name: config.pageName,
        description: config.description,
        isPartOf: { "@id": websiteId },
        publisher: { "@id": organizationId },
        inLanguage: "en-NP",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": serviceId },
        about: { "@id": serviceId },
      },
      breadcrumb(url, config.breadcrumbName),
      {
        "@type": "Service",
        "@id": serviceId,
        url,
        name: config.serviceName,
        serviceType: config.serviceType,
        description: config.description,
        provider: { "@id": providerId },
        areaServed,
        audience: { "@type": "BusinessAudience", audienceType: config.audience },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${siteConfig.domain}/contact`,
          servicePhone: { "@type": "ContactPoint", telephone: siteConfig.phone, contactType: "sales and service enquiries" },
        },
        mainEntityOfPage: { "@id": webpageId },
        category: config.categories,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "@id": catalogId,
          name: `${config.serviceName} deliverables`,
          itemListElement: config.offers.map((item) => offer(url, item, providerId, areaServed)),
        },
      },
    ],
  };
}

const servicesOffers: OfferSpec[] = [
  { name: "Digital Marketing Strategy", anchor: "digital-marketing-strategy", serviceType: "Digital marketing strategy and channel planning" },
  { name: "SEO Services", serviceType: "Search engine optimisation" },
  { name: "Google Ads, Meta Ads & Paid Media", serviceType: "Google Ads, Meta Ads and TikTok Ads management" },
  { name: "Social Media Marketing", serviceType: "Social media strategy, content and paid distribution" },
  { name: "Website Design and Strategy", serviceType: "SEO-friendly, conversion-focused website strategy and design" },
  { name: "Landing Page Strategy", serviceType: "Landing-page strategy and conversion optimisation" },
  { name: "Content Marketing", anchor: "content-marketing", serviceType: "Commercial and supporting content strategy" },
  { name: "Local SEO", url: `${siteConfig.domain}/local-seo-services-in-nepal`, serviceType: "Local SEO and Google Business Profile optimisation" },
  { name: "Conversion Rate Optimisation", anchor: "cro", serviceType: "Conversion rate optimisation" },
  { name: "Analytics and Tracking", anchor: "analytics", serviceType: "Analytics, tag management and conversion tracking" },
  { name: "Reporting and Performance Analysis", anchor: "reporting", serviceType: "Marketing reporting and performance analysis" },
  { name: "Marketing Automation", anchor: "automation", serviceType: "Basic marketing workflow and automation planning" },
];

function servicesSchema(): JsonLdNode {
  const url = `${siteConfig.domain}/services`;
  const catalogId = `${url}#offer-catalog`;
  const routeMap: Record<string, string> = {
    "SEO Services": `${siteConfig.domain}/seo-company-in-nepal`,
    "Google Ads, Meta Ads & Paid Media": `${siteConfig.domain}/advertising-agency-in-nepal`,
    "Social Media Marketing": `${siteConfig.domain}/social-media-marketing-agency-in-nepal`,
    "Website Design and Strategy": `${siteConfig.domain}/web-design-company-in-nepal`,
    "Landing Page Strategy": `${siteConfig.domain}/web-design-company-in-nepal#landing-pages`,
  };
  const catalogItems = servicesOffers.map((spec) => {
    const target = routeMap[spec.name] ?? url;
    return offer(target, spec);
  });
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: "GrowthLabs Services | SEO, Google Ads, Meta Ads & CRO",
        description: "Explore GrowthLabs services across SEO, Google Ads, Meta Ads, social media, websites, local SEO, CRO, analytics and tracking.",
        isPartOf: { "@id": websiteId },
        publisher: { "@id": organizationId },
        inLanguage: "en-NP",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": catalogId },
        about: { "@id": organizationId },
      },
      breadcrumb(url, "Services", false),
      { "@type": "OfferCatalog", "@id": catalogId, name: "GrowthLabs digital marketing services", itemListElement: catalogItems },
    ],
  };
}

function packagesSchema(): JsonLdNode {
  const url = `${siteConfig.domain}/social-media-marketing-packages`;
  const catalogId = `${url}#offer-catalog`;
  const packages = [
    { id: "foundation-offer", anchor: "foundation", name: "Foundation social media scope", description: "Audience and channel review, positioning, content pillars, campaign themes, example formats, measurement priorities and execution guidance.", serviceName: "Foundation social media strategy", serviceType: "Social media strategy and roadmap" },
    { id: "growth-offer", anchor: "growth", name: "Growth social media scope", description: "Ongoing organic social direction, content calendar, copy or briefs, production workflow, publishing or handoff and monthly insights.", serviceName: "Growth social media programme", serviceType: "Ongoing organic social media marketing" },
    { id: "performance-offer", anchor: "performance", name: "Performance social media scope", description: "Organic social, performance creative, Meta or TikTok campaigns, retargeting, landing-page review and deeper conversion measurement.", serviceName: "Performance social media programme", serviceType: "Organic and paid social media marketing" },
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: "Social Media Marketing Packages | Scope & Pricing",
        description: "Compare Foundation, Growth and Performance social media scopes, the work included, pricing drivers and separately quoted advertising spend.",
        isPartOf: { "@id": websiteId },
        publisher: { "@id": organizationId },
        inLanguage: "en-NP",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": catalogId },
        about: { "@id": `${siteConfig.domain}/social-media-marketing-agency-in-nepal#service` },
      },
      breadcrumb(url, "Social Media Marketing Packages"),
      {
        "@type": "OfferCatalog",
        "@id": catalogId,
        name: "GrowthLabs social media marketing packages",
        itemListElement: packages.map((item) => ({
          "@type": "Offer",
          "@id": `${url}#${item.id}`,
          name: item.name,
          url: `${url}#${item.anchor}`,
          seller: { "@id": organizationId },
          description: item.description,
          itemOffered: { "@type": "Service", name: item.serviceName, serviceType: item.serviceType, provider: { "@id": organizationId } },
        })),
      },
    ],
  };
}

export function pageSchema(path: string): JsonLdNode {
  if (path === "/") {
    return {
      "@context": "https://schema.org",
      "@graph": [{
        "@type": "WebPage",
        "@id": `${root}#webpage`,
        url: root,
        name: siteConfig.seo.title,
        description: siteConfig.seo.description,
        isPartOf: { "@id": websiteId },
        publisher: { "@id": organizationId },
        inLanguage: "en-NP",
        mainEntity: { "@id": organizationId },
        about: [{ "@id": organizationId }, { "@id": personId }],
      }],
    };
  }
  if (path === "/services") return servicesSchema();
  if (path === "/social-media-marketing-packages") return packagesSchema();
  if (serviceSchemas[path]) return servicePageSchema(serviceSchemas[path]);

  const simple: Record<string, { type: string; name: string; description: string; label: string; about: unknown; dateModified?: string }> = {
    "/about": { type: "AboutPage", name: "About Rohan Neure | SEO, Google Ads & Meta Ads", description: "Meet Rohan Neure, founder of GrowthLabs and a growth marketer working across SEO, Google Ads, Meta Ads, landing pages, analytics and CRO.", label: "About", about: [{ "@id": organizationId }, { "@id": personId }] },
    "/contact": { type: "ContactPage", name: "Contact GrowthLabs by Rohan Neure", description: "Contact GrowthLabs by Rohan Neure by phone, WhatsApp or email to discuss SEO, Google Ads, Meta Ads, websites, analytics or CRO.", label: "Contact", about: { "@id": organizationId } },
    "/privacy": { type: "WebPage", name: "Privacy Policy | GrowthLabs by Rohan Neure", description: "Learn what information GrowthLabs may collect through the website and enquiries, why it is used, how it is protected and how to contact GrowthLabs.", label: "Privacy Policy", about: { "@type": "Thing", name: "Privacy and website data handling" }, dateModified: "2026-08-24" },
  };
  const config = simple[path];
  if (!config) throw new Error(`No page schema configured for ${path}`);
  const url = pageUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": config.type,
        "@id": `${url}#webpage`,
        url,
        name: config.name,
        description: config.description,
        isPartOf: { "@id": websiteId },
        publisher: { "@id": organizationId },
        inLanguage: "en-NP",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        ...(path === "/about" ? { mainEntity: config.about } : path === "/contact" ? { mainEntity: { "@id": organizationId } } : {}),
        about: config.about,
        ...(config.dateModified ? { dateModified: config.dateModified } : {}),
      },
      breadcrumb(url, config.label, false),
    ],
  };
}

export function StructuredData({ data }: { data: JsonLdNode }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

function faqSchema(path: string, faqs: readonly FaqItem[]): JsonLdNode {
  const url = pageUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    isPartOf: { "@id": `${url}#webpage` },
    inLanguage: "en-NP",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function PageStructuredData({ faqs, path }: { faqs?: readonly FaqItem[]; path: string }) {
  return <>
    <StructuredData data={pageSchema(path)} />
    {faqs && faqs.length > 0 && <StructuredData data={faqSchema(path, faqs)} />}
  </>;
}
