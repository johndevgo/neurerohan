export type AgencyAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  position?: string;
};

export const agencyAssets = {
  growthSystem: {
    src: "/images/Agency/digital-marketing-agency-in-nepal-growthlabs-rohan-neure-seo-ads-growth-system.webp",
    width: 1536,
    height: 1024,
    alt: "Yellow GrowthLabs visual showing search, analytics, growth and targeting objects",
    caption: "Search demand, paid acquisition, measurement and conversion—designed as one connected growth system.",
    position: "center",
  },
  seoServices: {
    src: "/images/Agency/seo-services-hero.webp",
    width: 1800,
    height: 1200,
    alt: "Colourful SEO strategy visual with search letters, growth chart and launch objects",
    caption: "Technical foundations, search intent, useful pages and measurement working towards discoverability.",
    position: "center",
  },
  localSeo: {
    src: "/images/Agency/local seo.webp",
    width: 1024,
    height: 1024,
    alt: "Local SEO concept with a map pin, local map and upward visibility graph",
    caption: "Local SEO connects Google Business Profile, accurate business information, local pages and conversion actions.",
    position: "center",
  },
  googleAds: {
    src: "/images/Agency/google ads.webp",
    width: 2501,
    height: 1252,
    alt: "Google Ads concept showing campaign monitoring, search advertising and performance signals",
    caption: "Google Ads planning spans demand, search terms, campaign structure, landing pages and reliable conversion signals.",
    position: "center",
  },
  metaAds: {
    src: "/images/Agency/meta ads.jpg",
    width: 740,
    height: 492,
    alt: "Meta advertising illustration with campaign creative and an Ads interface",
    caption: "Meta Ads combines audience strategy, creative testing, controlled distribution and a clear conversion route.",
    position: "center",
  },
  tiktokAds: {
    src: "/images/Agency/Tiktok Advertising.jpg",
    width: 855,
    height: 570,
    alt: "TikTok advertising illustration with short-form video screens and social interactions",
    caption: "Short-form advertising needs platform-native creative, an appropriate audience and a measurable next action.",
    position: "center",
  },
  conversion: {
    src: "/images/Agency/Conversion Rate Optimization.jpg",
    width: 3000,
    height: 2000,
    alt: "Conversion rate optimisation illustration showing a funnel and structured inputs",
    caption: "Conversion optimisation finds and reduces friction between qualified attention and meaningful action.",
    position: "center",
  },
  analytics: {
    src: "/images/Agency/Analytics and Reporting.webp",
    width: 900,
    height: 600,
    alt: "Analytics and reporting illustration across desktop and mobile dashboards",
    caption: "Measurement is useful when events, reporting and commercial decisions share the same definitions.",
    position: "center",
  },
  contentStrategy: {
    src: "/images/Agency/Content Strategy.jpg",
    width: 2000,
    height: 1200,
    alt: "Content strategy diagram connecting planning, understanding, engagement and delivery",
    caption: "Content earns its place by answering a real question, supporting a decision or moving a customer journey forward.",
    position: "center",
  },
  brandStrategy: {
    src: "/images/Agency/Brand Startegy.png",
    width: 1600,
    height: 1249,
    alt: "Brand strategy framework illustration centred on a connected idea system",
    caption: "Positioning, audience, offer, message and proof need one recognisable strategic centre.",
    position: "center",
  },
  seoAudit: {
    src: "/images/Agency/SEO-Audit.jpg",
    width: 800,
    height: 560,
    alt: "SEO audit illustration showing desktop and mobile pages, charts and inspection tools",
    caption: "A useful SEO audit prioritises issues by impact, evidence, implementation effort and business relevance.",
    position: "center",
  },
  seoRanking: {
    src: "/images/Agency/seo ranking.jpg",
    width: 1700,
    height: 1100,
    alt: "SEO ranking illustration with a search page, analysis lens and upward trend",
    caption: "Rankings matter when they create relevant visibility, qualified visits and a credible path to conversion.",
    position: "center",
  },
  technicalSeo: {
    src: "/images/Agency/technical seo.jpg",
    width: 1280,
    height: 720,
    alt: "Technical SEO illustration with connected gears",
    caption: "Technical SEO supports crawling, indexing, rendering, internal discovery and reliable page experience.",
    position: "center",
  },
  linkBuilding: {
    src: "/images/Agency/Link Building.png",
    width: 1150,
    height: 650,
    alt: "Link building illustration connecting two relevant websites",
    caption: "Authority work should prioritise relevance, editorial value and legitimate relationships over link volume.",
    position: "center",
  },
  userExperience: {
    src: "/images/Agency/User Experience.jpg",
    width: 900,
    height: 486,
    alt: "User experience illustration with people evaluating a digital interface",
    caption: "Clear information, responsive interaction and low-friction journeys help visitors understand and act.",
    position: "center",
  },
  shopify: {
    src: "/images/Agency/Shopify Solution Image.jpg",
    width: 1000,
    height: 800,
    alt: "Shopify ecommerce website planning illustration",
    caption: "Ecommerce growth connects storefront structure, product discovery, checkout usability, tracking and retention.",
    position: "center",
  },
} satisfies Record<string, AgencyAsset>;

export type AgencyAssetKey = keyof typeof agencyAssets;

export const insightVisuals = {
  SEO: "seoServices",
  "Local SEO": "localSeo",
  "Social media": "contentStrategy",
  "Paid media": "metaAds",
  "Web strategy": "userExperience",
  "Growth strategy": "growthSystem",
} satisfies Record<string, AgencyAssetKey>;
