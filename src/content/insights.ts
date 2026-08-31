import { authorityInsights } from "./insights-authority";

export type InsightTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type InsightSection = {
  id: string;
  title: string;
  answer?: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; copy: string }[];
  table?: InsightTable;
  callout?: string;
};

export type InsightLink = {
  label: string;
  href: string;
  copy: string;
};

export type InsightSource = {
  label: string;
  publisher: string;
  href: string;
  usedFor: string;
};

export type InsightArticle = {
  slug: string;
  category: "SEO" | "Local SEO" | "Social media" | "Web strategy" | "Paid media" | "Growth strategy";
  title: string;
  shortTitle: string;
  metaTitle: string;
  description: string;
  primaryKeyword: string;
  supportingKeywords: string[];
  answer: string;
  summaryPoints: string[];
  datePublished: string;
  dateModified: string;
  readingTime: string;
  sections: InsightSection[];
  faqs: { question: string; answer: string }[];
  related: InsightLink[];
  sources: InsightSource[];
  download?: { label: string; href: string; description: string };
  cta: { title: string; copy: string; label: string; href: string };
};

const published = "2026-08-25";
const reviewed = "2026-08-26";

export const insights: InsightArticle[] = [
  {
    slug: "what-is-seo",
    category: "SEO",
    title: "What is SEO? A practical definition, process and business guide",
    shortTitle: "What is SEO?",
    metaTitle: "What Is SEO? Definition, Examples & How It Works",
    description: "Understand what SEO means, how search engines discover pages, what an SEO specialist actually improves and how businesses can evaluate search performance.",
    primaryKeyword: "what is SEO",
    supportingKeywords: ["SEO definition", "what is an SEO", "what is SEO for a website", "what is SEO friendly", "SEO platform"],
    answer: "SEO, or search engine optimisation, is the work of making a website easier for search engines to crawl and understand, and more useful for people searching for its information, products or services. It combines technical accessibility, search-intent research, page structure, content, internal links, reputation signals and measurement.",
    summaryPoints: [
      "SEO connects a real search need to the most useful page.",
      "Crawling, indexing and ranking are different stages; an indexed page is not guaranteed to rank.",
      "Good SEO improves both search understanding and the visitor's decision experience.",
      "Rankings, qualified organic visits, enquiries and revenue contribution need different measurements.",
    ],
    datePublished: published,
    dateModified: reviewed,
    readingTime: "9 min read",
    sections: [
      {
        id: "definition",
        title: "SEO definition in one sentence",
        answer: "Search engine optimisation helps search systems understand a page and helps the right searcher decide that the page is worth visiting.",
        paragraphs: [
          "The phrase is sometimes reduced to rankings. That is incomplete. A page can rank for an irrelevant query, attract unqualified visits or create no clear next step. Useful SEO begins with the audience, the search problem and the page that can resolve it.",
          "Google describes SEO as helping search engines understand content and helping users find a site and decide whether to visit it. That definition includes technical work and communication work; neither is enough alone.",
        ],
        callout: "SEO is not a payment to Google, a hidden switch or a guarantee of first position. Organic inclusion is free, while the work required to earn and improve visibility has a cost.",
      },
      {
        id: "how-search-works",
        title: "How does SEO work?",
        answer: "SEO improves the signals and experience around discovery, crawling, indexing, relevance and usefulness. Search systems still decide whether and where a page appears.",
        steps: [
          { title: "Discover", copy: "Search crawlers find URLs through links, sitemaps and other discovery paths." },
          { title: "Crawl", copy: "The crawler requests the page and the resources needed to understand its rendered content." },
          { title: "Index", copy: "The search engine evaluates and stores information about eligible pages; crawling does not guarantee indexing." },
          { title: "Retrieve and rank", copy: "For a query, systems compare eligible content using many signals to return useful results." },
          { title: "Earn the action", copy: "The title, snippet and page experience must then help a person choose, understand and act." },
        ],
      },
      {
        id: "types",
        title: "What are the main parts of SEO?",
        table: {
          caption: "Core SEO workstreams and the questions they answer",
          headers: ["Workstream", "Question", "Typical work"],
          rows: [
            ["Technical SEO", "Can search systems access and interpret the site?", "Crawl controls, status codes, canonicals, rendering, sitemaps, performance"],
            ["On-page SEO", "Does this page clearly match the intended need?", "Titles, headings, copy, entities, media, links, structured information"],
            ["Content strategy", "Which questions and decisions deserve a page?", "Keyword clustering, intent mapping, briefs, editorial planning, consolidation"],
            ["Authority", "Why should this source be trusted?", "Original expertise, references, brand mentions, earned links, author and business transparency"],
            ["Local SEO", "Is this business relevant to a nearby searcher?", "Business Profile, location information, reviews, local pages, consistency"],
            ["SEO measurement", "Is visibility producing useful business movement?", "Search Console, analytics, conversions, lead quality, assisted outcomes"],
          ],
        },
      },
      {
        id: "seo-friendly",
        title: "What does SEO-friendly mean?",
        answer: "SEO-friendly means a page is accessible, understandable, useful and connected to the rest of the site. It does not mean repeating one keyword as often as possible.",
        bullets: [
          "One clear purpose and a descriptive title and main heading",
          "Original information that satisfies the searcher's next questions",
          "Readable HTML, crawlable internal links and no accidental indexing blocks",
          "Useful supporting media with descriptive alternative text where needed",
          "A logical URL, canonical handling and appropriate structured data",
          "A fast, stable, accessible experience across mobile and desktop",
          "A relevant next step instead of a forced sales interruption",
        ],
      },
      {
        id: "platform",
        title: "What is an SEO platform?",
        answer: "An SEO platform is software that collects or organises search data. It supports decisions; it does not replace access to the site, judgement or implementation.",
        paragraphs: [
          "Google Search Console reports how a verified property appears in Google Search and helps diagnose indexing issues. Crawlers can audit site structure. Keyword databases estimate demand and competition. Analytics tools measure on-site behaviour and agreed actions.",
          "Each dataset has limits. Search-volume figures are estimates, rank trackers observe selected locations and devices, and attribution cannot perfectly explain every customer journey. Use tools to investigate a question, then validate the answer against the site and business data.",
        ],
      },
      {
        id: "measurement",
        title: "How should a business measure SEO?",
        answer: "Measure SEO as a chain: indexability, relevant visibility, qualified visits, meaningful actions and commercial quality.",
        bullets: [
          "Eligible priority URLs indexed without avoidable duplication",
          "Non-brand impressions and clicks for commercially relevant topics",
          "Visibility by page cluster, location, device and intent where useful",
          "Engagement with service, product, location and decision-support pages",
          "Calls, messages, forms, purchases or other agreed key events",
          "Lead quality, assisted conversions and revenue contribution where reliable data exists",
        ],
        callout: "Do not promise a fixed ranking date. Google notes that changes may take from hours to several months to be reflected, and not every change creates a visible effect.",
      },
    ],
    faqs: [
      { question: "What does SEO stand for?", answer: "SEO stands for search engine optimisation, also written search engine optimization." },
      { question: "Is SEO the same as paid search?", answer: "No. SEO works on organic search eligibility and visibility. Paid search buys eligible ad exposure through an advertising platform." },
      { question: "Can a website rank without SEO?", answer: "A page can be discovered and rank without a formal SEO project, but sound technical, content and information practices make important pages easier to understand and improve." },
      { question: "How long does SEO take?", answer: "There is no universal timeline. Site history, technical condition, competition, content, implementation speed and search-system processing all matter." },
      { question: "Does keyword density determine ranking?", answer: "No fixed keyword-density percentage guarantees rankings. Repeating terms unnaturally can become keyword stuffing and make the page less useful." },
    ],
    related: [
      { label: "SEO expert in Nepal", href: "/seo-expert-in-nepal", copy: "See the founder-led SEO process and evidence." },
      { label: "Advantages of SEO", href: "/insights/advantages-of-seo", copy: "Evaluate the benefits, limits and right use cases." },
      { label: "SEO-friendly content", href: "/insights/seo-friendly-content", copy: "Turn search intent into a useful editorial brief." },
    ],
    sources: [
      { label: "SEO Starter Guide", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", usedFor: "SEO definition, discovery and practical search guidance" },
      { label: "Google Search Essentials", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/essentials", usedFor: "Eligibility, people-first content and spam guidance" },
      { label: "How Search works", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/fundamentals/how-search-works", usedFor: "Crawling, indexing and serving distinctions" },
    ],
    cta: { title: "Need the definition applied to your website?", copy: "Send your site and the organic-search constraint. We will identify the clearest technical, page or content priority.", label: "Request an SEO review", href: "/contact" },
  },
  {
    slug: "social-media-content-calendar",
    category: "Social media",
    title: "How to create a social media content calendar that your team can actually run",
    shortTitle: "Social media content calendar",
    metaTitle: "How to Create a Social Media Content Calendar (+ CSV)",
    description: "Build a practical social media content calendar with goals, pillars, formats, owners, approvals, publishing dates, tracking and a free CSV template.",
    primaryKeyword: "how to create a social media content calendar",
    supportingKeywords: ["social media planning", "content calendar for social media", "social media marketing schedule", "example content calendar"],
    answer: "Create a social media content calendar by defining the business outcome, audience and channel job; choosing a small set of content pillars; mapping campaigns and decision stages; then assigning each post a format, owner, deadline, call to action and measurement signal. A calendar is an operating system, not just a list of dates.",
    summaryPoints: [
      "Plan from objectives and audience questions, not blank calendar squares.",
      "Give every idea a channel, format, owner, status and next action.",
      "Separate evergreen themes from time-sensitive campaigns.",
      "Review quality and business signals, then change the next calendar."],
    datePublished: published,
    dateModified: reviewed,
    readingTime: "11 min read",
    download: { label: "Download the CSV calendar template", href: "/downloads/growthlabs-social-media-content-calendar.csv", description: "An original, tool-agnostic template for Excel, Google Sheets or your project system." },
    sections: [
      {
        id: "definition",
        title: "What is a social media content calendar?",
        answer: "A social media content calendar is a shared schedule that records what will be published, where, why, when and by whom.",
        paragraphs: [
          "A useful calendar connects strategy to production. It should show the audience, journey stage, content pillar, format, working title, hook, message, call to action, asset owner, approval owner, status, destination and tracking notes.",
          "A calendar that contains only dates and captions hides the work that usually causes delays: research, filming, design, review, legal approval, publishing and community response.",
        ],
      },
      {
        id: "before-calendar",
        title: "Decide four things before brainstorming posts",
        table: {
          caption: "Strategic inputs that keep a calendar focused",
          headers: ["Decision", "Question to answer", "Example"],
          rows: [
            ["Outcome", "What business movement should social support?", "Qualified product enquiries"],
            ["Audience", "Whose problem, context and language matter?", "Operations managers comparing suppliers"],
            ["Channel job", "What should this platform do in the journey?", "Demonstrate expertise and retarget interest"],
            ["Next action", "What should an interested person do?", "Read a guide, view proof or message the team"],
          ],
        },
      },
      {
        id: "steps",
        title: "Build the calendar in eight steps",
        steps: [
          { title: "Audit the last 60 to 90 days", copy: "Record formats, themes, reach, meaningful engagement, qualified visits, messages and production effort. Do not copy a high-reach post without understanding why it worked." },
          { title: "Define channel roles", copy: "Decide whether Facebook, Instagram, LinkedIn, TikTok or another channel should create discovery, demonstrate proof, nurture familiarity or drive an action." },
          { title: "Choose three to five content pillars", copy: "Use audience questions, product education, proof, objections, culture and offers. Every pillar needs a reason to exist." },
          { title: "Map campaigns and fixed dates", copy: "Add launches, events, seasonal demand, deadlines and required lead time before filling evergreen slots." },
          { title: "Generate ideas by decision stage", copy: "Create topics for problem recognition, solution understanding, comparison, confidence and action." },
          { title: "Assign format and production owner", copy: "Match each idea to the format that explains it best, then name who writes, records, designs, approves and publishes it." },
          { title: "Write the hook, message and CTA", copy: "One post should have one primary communication job. Make the next action proportionate to the audience's readiness." },
          { title: "Review and adapt", copy: "After publishing, record the signal that matters and turn the learning into the next plan." },
        ],
      },
      {
        id: "example",
        title: "A one-week social media calendar example",
        table: {
          caption: "Example for a service business; adapt the mix to your real audience and capacity",
          headers: ["Day", "Journey job", "Idea", "Format", "CTA"],
          rows: [
            ["Monday", "Problem recognition", "Three signs the current process is leaking time", "Short video", "Save the checklist"],
            ["Tuesday", "Education", "Explain one misunderstood service decision", "Carousel", "Read the full guide"],
            ["Wednesday", "Proof", "Show a real before-and-after workflow with context", "Document post", "View the method"],
            ["Thursday", "Objection", "Answer the most common cost or timing concern", "Talking-head video", "Compare options"],
            ["Friday", "Action", "Present a defined review and who it fits", "Static + caption", "Send the brief"],
          ],
        },
      },
      {
        id: "brainstorming",
        title: "How to brainstorm without producing repetitive ideas",
        bullets: [
          "List the questions asked before a customer buys, not just the topics your team enjoys discussing.",
          "Turn one useful subject into a definition, checklist, mistake, comparison, demonstration, story and FAQ.",
          "Interview sales, delivery and support teams for real objections and language.",
          "Use search queries, site-search data, comments and messages as research inputs without copying private information.",
          "Revisit strong evergreen ideas with a better example or format instead of chasing novelty every day.",
        ],
      },
      {
        id: "governance",
        title: "Add ownership, approval and measurement",
        answer: "The calendar becomes usable when every handoff has an owner and a deadline.",
        paragraphs: [
          "Define who owns the brief, source material, copy, design or edit, factual review, brand approval, publishing and comment response. If one person owns several steps, keep the fields; the workload remains visible.",
          "Meta Business Suite can support planning and publishing for eligible connected Facebook and Instagram assets. Interface and feature availability can change, so keep the master calendar portable rather than making one platform the only record.",
        ],
        callout: "A sustainable schedule is better than an impressive calendar that cannot be produced. Start with the weekly capacity you can protect, then expand only when quality and response remain reliable.",
      },
    ],
    faqs: [
      { question: "How far ahead should a social media calendar be planned?", answer: "A monthly view is useful for campaigns and capacity, while detailed copy and assets can move through a weekly production cycle. Fast-moving brands may keep more flexible space." },
      { question: "How often should a business post?", answer: "There is no universal posting number. Choose a rhythm the team can sustain with relevant, well-produced content and timely community response." },
      { question: "What columns should a content calendar include?", answer: "At minimum include date, platform, objective, audience, pillar, format, topic, owner, status and CTA. Add approvals, assets, URLs and tracking when the workflow needs them." },
      { question: "Can the same post be used on every platform?", answer: "The core idea can often be reused, but the hook, format, length, context and action should fit the platform and audience." },
      { question: "Is the CSV template free?", answer: "Yes. It is a static original template with no form, account or email requirement." },
    ],
    related: [
      { label: "Social media marketing agency in Nepal", href: "/social-media-marketing-agency-in-nepal", copy: "See strategy, production and paid-distribution scope." },
      { label: "Social media packages", href: "/social-media-marketing-packages", copy: "Understand scope, ownership and pricing logic." },
      { label: "SEO vs social media", href: "/insights/seo-vs-social-media-marketing", copy: "Choose the job each channel should perform." },
    ],
    sources: [
      { label: "Meta Business Suite", publisher: "Meta", href: "https://www.facebook.com/business/tools/meta-business-suite", usedFor: "Current first-party publishing and management tool reference" },
      { label: "About Facebook Page access", publisher: "Meta Help Center", href: "https://www.facebook.com/help/289207354498410/", usedFor: "Content, ads, insights and task-access responsibilities" },
    ],
    cta: { title: "Need the calendar connected to strategy and production?", copy: "Share your channels, audience, content capacity and next campaign. GrowthLabs will map the clearest operating rhythm.", label: "Request a social media review", href: "/contact" },
  },
  {
    slug: "google-business-profile-optimization",
    category: "Local SEO",
    title: "Google Business Profile optimisation: a practical local visibility checklist",
    shortTitle: "Google Business Profile optimisation",
    metaTitle: "Google Business Profile Optimization Checklist",
    description: "Improve Google Business Profile accuracy, relevance and customer usefulness with a practical verification, categories, services, photos, reviews and tracking checklist.",
    primaryKeyword: "Google Business Profile optimization",
    supportingKeywords: ["best practices for Google My Business", "how to get my business on top of Google", "local SEO checklist"],
    answer: "Optimise a Google Business Profile by verifying it, keeping the real business name and contact details accurate, choosing the most specific eligible categories, completing hours and services, adding representative media, responding to reviews and connecting the profile to a useful local landing page. No legitimate action guarantees the top local position.",
    summaryPoints: [
      "Accuracy and eligibility come before keywords or posting frequency.",
      "Google explains local results mainly through relevance, distance and prominence.",
      "Reviews, photos and service information should help customers evaluate the real business.",
      "Track calls, website visits and direction requests with their limitations in mind."],
    datePublished: published,
    dateModified: reviewed,
    readingTime: "10 min read",
    sections: [
      {
        id: "ranking",
        title: "What determines local ranking on Google?",
        answer: "Google says local results are mainly based on relevance, distance and prominence. You can improve information and reputation signals, but you cannot control the searcher's distance or buy a better organic local ranking.",
        table: {
          caption: "Google's three stated local ranking considerations",
          headers: ["Factor", "Meaning", "What the business can improve"],
          rows: [
            ["Relevance", "How well the profile matches the search", "Accurate categories, services, attributes and detailed business information"],
            ["Distance", "How far the business is from the search location", "Accurate address or eligible service-area settings; distance itself cannot be optimised away"],
            ["Prominence", "How well known the business appears", "Real reviews, helpful responses, links, mentions and complete online information"],
          ],
        },
      },
      {
        id: "foundation",
        title: "Start with eligibility, ownership and accurate identity",
        bullets: [
          "Confirm the business is eligible under Google's current Business Profile guidelines.",
          "Verify the profile through an available method and limit access to trusted owners and managers.",
          "Use the real-world business name; do not add locations, services or promotional phrases that are not part of it.",
          "Use a precise address for a customer-facing location, or configure a service area when the current rules allow it.",
          "Keep the primary phone number, website, regular hours and special hours current.",
          "Remove or resolve unintended duplicates instead of maintaining competing versions of one business.",
        ],
        callout: "Do not create a virtual-office or false-location profile to target another city. Eligibility and representation rules matter more than a temporary visibility tactic.",
      },
      {
        id: "categories-services",
        title: "Choose categories, services and attributes that describe the real business",
        answer: "Use the most specific available primary category for the core business, then add only secondary categories that represent genuine customer-facing services.",
        paragraphs: [
          "Categories describe what the business is, not every term it hopes to rank for. Service entries, descriptions and relevant attributes can add useful detail, but they should remain consistent with the website and what customers can actually buy or visit.",
          "Review categories periodically because available options and platform interfaces can change. Record the selected primary and secondary categories so an accidental edit can be diagnosed.",
        ],
      },
      {
        id: "customer-evidence",
        title: "Strengthen customer evidence without manufacturing it",
        steps: [
          { title: "Add representative photos and video", copy: "Show the real premises, team, products, work or experience. Use clear, current media rather than stock images presented as the business." },
          { title: "Create a consistent review request", copy: "Ask real customers for honest feedback at a suitable moment. Do not buy, gate or invent reviews." },
          { title: "Respond usefully", copy: "Thank reviewers, address specific concerns without exposing personal information and explain a next step when resolution is needed." },
          { title: "Keep questions and updates maintained", copy: "Where the current profile supports them, publish accurate changes, offers or updates and retire expired information." },
        ],
      },
      {
        id: "website",
        title: "Connect the profile to a useful local landing page",
        bullets: [
          "State the business name, service, location or service area and contact route clearly.",
          "Explain the relevant services in enough depth for a visitor to judge fit.",
          "Show genuine local proof, directions, access information and opening details where appropriate.",
          "Keep phone, address and hours aligned with the profile and other authoritative listings.",
          "Use crawlable internal links and LocalBusiness structured data only for facts visible and true on the site.",
          "Make calls, messages and directions easy on mobile without covering the content.",
        ],
      },
      {
        id: "measurement",
        title: "Measure actions, not an isolated map position",
        answer: "Review profile interactions alongside local landing-page quality, Search Console data and real enquiry outcomes.",
        paragraphs: [
          "Local results vary by searcher's location, query, device and time. A single manual search from one place is not a complete ranking report.",
          "Use the profile's available performance data, tagged website links where appropriate, call records that respect privacy and lead-quality notes. Compare periods carefully because seasonality, operating hours and profile changes affect demand.",
        ],
      },
    ],
    faqs: [
      { question: "Is Google My Business now Google Business Profile?", answer: "Google uses the name Google Business Profile for the product previously known as Google My Business." },
      { question: "Can I pay Google to rank my Business Profile first?", answer: "Google states there is no way to request or pay for a better local organic ranking. Advertising is separate from organic local results." },
      { question: "How many categories should I add?", answer: "Use the most specific primary category and only genuinely relevant secondary categories. More categories are not automatically better." },
      { question: "Do reviews help local visibility?", answer: "Google says review count and positive ratings can factor into prominence. Reviews should still be genuine, representative and acquired without incentives that violate policy." },
      { question: "How often should the profile be updated?", answer: "Update it whenever hours, contact details, services or important customer information changes, and schedule a regular accuracy review." },
    ],
    related: [
      { label: "Digital marketing in Kathmandu", href: "/digital-marketing-agency-in-kathmandu", copy: "Connect local visibility to the wider customer journey." },
      { label: "SEO company in Nepal", href: "/seo-company-in-nepal", copy: "Review technical, content and local SEO scope." },
      { label: "Contact GrowthLabs", href: "/contact", copy: "Send the profile and the local visibility problem." },
    ],
    sources: [
      { label: "Tips to improve your local ranking on Google", publisher: "Google Business Profile Help", href: "https://support.google.com/business/answer/7091?hl=en", usedFor: "Relevance, distance, prominence and profile completeness" },
      { label: "Guidelines for representing your business on Google", publisher: "Google Business Profile Help", href: "https://support.google.com/business/answer/3038177?hl=en", usedFor: "Eligibility, business names, addresses and service-area practices" },
      { label: "Edit your Business Profile", publisher: "Google Business Profile Help", href: "https://support.google.com/business/answer/3039617?hl=en", usedFor: "Keeping profile information current" },
    ],
    cta: { title: "Want a founder-led local visibility review?", copy: "Send the Business Profile and website. We will review accuracy, local relevance, customer evidence and conversion paths.", label: "Request a local SEO review", href: "/contact" },
  },
  {
    slug: "seo-vs-social-media-marketing",
    category: "Growth strategy",
    title: "SEO vs social media marketing: which channel should your business use?",
    shortTitle: "SEO vs social media marketing",
    metaTitle: "SEO vs Social Media Marketing: Differences & Fit",
    description: "Compare SEO and social media marketing by audience intent, content, speed, lifespan, measurement and business fit, then decide how the two channels can work together.",
    primaryKeyword: "SEO vs social media marketing",
    supportingKeywords: ["SEO and SMM", "SEO vs SMM", "SMM vs SEO", "what is SMM in SEO"],
    answer: "Use SEO when people already search for the problem, category, product or service and you can build pages that answer that demand. Use social media marketing when discovery, repeated exposure, community, visual explanation or demand creation matters. Many businesses need both, but each channel should have a different job and measurement plan.",
    summaryPoints: [
      "SEO usually begins with expressed search intent; social can create or shape attention before a search.",
      "Search content is organised around queries and durable pages; social content is organised around feeds, formats and conversation.",
      "Neither channel is free: strategy, production, distribution, tools and management require resources.",
      "Choose from the customer journey and operational capacity, not channel popularity."],
    datePublished: published,
    dateModified: reviewed,
    readingTime: "9 min read",
    sections: [
      {
        id: "comparison",
        title: "SEO and SMM compared",
        table: {
          caption: "Practical differences between search engine optimisation and social media marketing",
          headers: ["Decision factor", "SEO", "Social media marketing"],
          rows: [
            ["Primary discovery", "A person searches a query", "A person encounters content in a feed, profile, community or ad"],
            ["Typical intent", "Ranges from learning to high-intent comparison", "Ranges from passive discovery to community and direct response"],
            ["Core asset", "A crawlable website page", "A post, video, story, profile, conversation or ad"],
            ["Content lifespan", "Useful pages can continue earning discovery and need maintenance", "Feed distribution is often concentrated near publication, though formats vary"],
            ["Control", "Search systems decide organic crawling, indexing and ranking", "Platforms decide distribution; paid campaigns can buy eligible reach"],
            ["Best evidence", "Relevant queries, pages, qualified organic actions", "Audience quality, content response, qualified visits, messages and paid outcomes"],
          ],
        },
      },
      {
        id: "use-seo",
        title: "Choose SEO first when these conditions are true",
        bullets: [
          "Customers already search for the category, problem, location, comparison or solution.",
          "The business can create a useful page that deserves to answer that search.",
          "Important services, products or locations need durable discovery beyond campaign periods.",
          "The website can be improved technically and commercially, not treated as a passive brochure.",
          "The team can wait for search systems to process changes and continue improving the asset.",
        ],
      },
      {
        id: "use-social",
        title: "Choose social media first when these conditions are true",
        bullets: [
          "The offer benefits from demonstration, personality, community or repeated visual exposure.",
          "The audience can be reached through identifiable interests, roles, creators or platform behaviours.",
          "Demand must be created or educated before people know what to search.",
          "The business can consistently produce native formats and respond to comments or messages.",
          "Time-sensitive campaigns need faster distribution and paid social is commercially viable.",
        ],
      },
      {
        id: "together",
        title: "How SEO and social media work together",
        steps: [
          { title: "Research the same customer", copy: "Combine search questions, sales objections, comments and community language into one audience model." },
          { title: "Give the website durable answers", copy: "Publish complete definitions, service pages, comparisons, tools and case evidence at stable URLs." },
          { title: "Turn useful ideas into social formats", copy: "Extract hooks, demonstrations, objections and examples without reducing the source into empty teasers." },
          { title: "Route attention to the right destination", copy: "Link to a page, offer, message or profile action that matches readiness; not every post needs a hard sale." },
          { title: "Learn across channels", copy: "Use qualified search queries and social responses to refine future pages, creative and offers." },
        ],
      },
      {
        id: "budget",
        title: "How should a small business split effort?",
        answer: "Fund the strongest customer-acquisition constraint first, then protect enough capacity to maintain the assets already launched.",
        paragraphs: [
          "If high-intent demand exists but the site cannot be found, prioritise technical and commercial SEO. If the category is unfamiliar or visual trust is decisive, social may need the first production investment. If the website cannot explain or convert the offer, repair that destination before scaling either source.",
          "Do not divide time evenly merely to appear active everywhere. A focused 90-day plan with clear channel roles usually creates better learning than fragmented weekly activity.",
        ],
      },
      {
        id: "measurement",
        title: "Use a shared measurement chain",
        table: {
          caption: "A cross-channel measurement model",
          headers: ["Stage", "SEO signal", "Social signal", "Business check"],
          rows: [
            ["Discovery", "Relevant impressions and pages", "Qualified reach and video or post exposure", "Is the intended audience being reached?"],
            ["Consideration", "Useful visits and content paths", "Saves, profile actions, site visits, messages", "Is interest becoming informed evaluation?"],
            ["Action", "Calls, forms, sales or key events", "Messages, leads, purchases or assisted actions", "Is the action qualified and economically useful?"],
            ["Learning", "Queries, pages and conversion paths", "Creative, audiences and response patterns", "What should change next?"],
          ],
        },
      },
    ],
    faqs: [
      { question: "Is SMM part of SEO?", answer: "No. Social media marketing and SEO are different disciplines, although promotion, audience learning and brand discovery can support the wider search journey." },
      { question: "Which is faster, SEO or social media marketing?", answer: "Social publishing and paid distribution can create exposure immediately, while organic search changes often require more processing time. Fast exposure does not guarantee useful business outcomes." },
      { question: "Is SEO cheaper than social media?", answer: "Neither has a universal cost advantage. Compare strategy, content, implementation, creative production, paid distribution, tools and the value of the resulting customers." },
      { question: "Does social engagement improve Google rankings?", answer: "Do not treat likes or follows as a direct ranking lever. Social can help real people discover and discuss useful content, but search visibility still depends on search-specific systems and signals." },
      { question: "Can one person manage both channels?", answer: "A person can lead both in a small operation, but research, technical work, writing, design, video, community response and measurement still require realistic capacity." },
    ],
    related: [
      { label: "What is SEO?", href: "/insights/what-is-seo", copy: "Understand the search process and workstreams." },
      { label: "Social media content calendar", href: "/insights/social-media-content-calendar", copy: "Build a sustainable publishing system." },
      { label: "GrowthLabs services", href: "/services", copy: "Compare SEO, social media and paid distribution scope." },
    ],
    sources: [
      { label: "SEO Starter Guide", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", usedFor: "Organic search discovery, content and timing guidance" },
      { label: "Meta Business Suite", publisher: "Meta", href: "https://www.facebook.com/business/tools/meta-business-suite", usedFor: "First-party social publishing and management context" },
    ],
    cta: { title: "Not sure which channel deserves the next investment?", copy: "Send your offer, audience, website and current channels. GrowthLabs will map SEO, social and paid media to distinct jobs.", label: "Request a channel review", href: "/contact" },
  },
  {
    slug: "why-web-design-matters",
    category: "Web strategy",
    title: "Why web design matters for trust, conversion, accessibility and search",
    shortTitle: "Why web design matters",
    metaTitle: "Why Is Web Design Important for Business?",
    description: "Learn why web design matters for business clarity, trust, mobile usability, accessibility, conversion paths, search visibility and maintainable growth.",
    primaryKeyword: "why is web design important",
    supportingKeywords: ["why web design matters", "why website design matters"],
    answer: "Web design matters because it determines how quickly a visitor can understand the offer, verify trust, navigate information and complete the next action. It also shapes accessibility, mobile usability, performance and the HTML structure search engines use to understand a page.",
    summaryPoints: [
      "Design is the organisation of decisions, not decoration added at the end.",
      "Clear hierarchy reduces the work required to understand an offer.",
      "Responsive, accessible interaction protects more users and more journeys.",
      "Performance, content and conversion should be designed together."],
    datePublished: published,
    dateModified: reviewed,
    readingTime: "8 min read",
    sections: [
      {
        id: "business-clarity",
        title: "Design makes the business easier or harder to understand",
        answer: "A strong page answers who it is for, what it offers, why it is credible and what to do next without making the visitor decode the layout.",
        bullets: [
          "A descriptive headline communicates the offer before a clever slogan.",
          "Visual hierarchy separates the primary decision from supporting detail.",
          "Navigation reflects customer tasks rather than the internal organisation chart.",
          "Proof appears beside the claim it supports.",
          "Calls to action use specific language and set an honest expectation.",
        ],
      },
      {
        id: "trust",
        title: "Design affects how evidence is evaluated",
        paragraphs: [
          "Visitors do not trust a colour palette by itself. They trust coherent information: real contact details, specific services, representative images, visible authorship, current policies, verifiable proof and a consistent experience across pages.",
          "Good design gives those facts order and proportion. Poor design can make genuine evidence look disconnected, hide qualifications in small text or place unsupported claims where proof should be.",
        ],
      },
      {
        id: "conversion",
        title: "Design creates or removes conversion friction",
        table: {
          caption: "Common page-design decisions and their conversion effect",
          headers: ["Decision", "Helpful execution", "Avoidable friction"],
          rows: [
            ["Offer", "One clear promise with scope and fit", "Several vague claims competing above the fold"],
            ["Proof", "Specific evidence near the relevant claim", "Logo walls or numbers with no context"],
            ["CTA", "A clear action and expectation", "Generic buttons such as Submit or Learn more"],
            ["Form or contact", "Only necessary fields and transparent follow-up", "Sensitive or excessive fields before trust exists"],
            ["Mobile", "Readable content and reachable controls", "Desktop layouts squeezed into a narrow viewport"],
          ],
        },
      },
      {
        id: "accessibility",
        title: "Accessible design expands who can complete the journey",
        answer: "Accessibility supports people using keyboards, assistive technology, zoom, alternative input, captions or higher contrast, and often makes the interface clearer for everyone.",
        bullets: [
          "Use semantic headings, landmarks, labels and buttons for their intended purpose.",
          "Maintain sufficient contrast and visible keyboard focus.",
          "Provide text alternatives for meaningful images and captions for required audio or video content.",
          "Do not make hover, colour, sound or motion the only way to receive essential information.",
          "Keep controls large enough, spaced and unobscured across responsive layouts.",
        ],
        callout: "WCAG 2.2 is a W3C Recommendation. Treat automated checks as a starting point and manually test real journeys with keyboard, zoom and assistive-technology considerations.",
      },
      {
        id: "performance-search",
        title: "Web design, performance and SEO are connected",
        paragraphs: [
          "The design system influences image weight, font loading, layout movement, JavaScript, responsive behaviour and interaction delay. Google's current Core Web Vitals use LCP for loading, INP for responsiveness and CLS for visual stability. The published good thresholds are 2.5 seconds or less for LCP, 200 milliseconds or less for INP and 0.1 or less for CLS at the 75th percentile.",
          "Performance scores do not replace useful content. A fast page that does not answer the search need remains weak. A useful page that shifts, blocks interaction or fails on mobile also creates avoidable risk.",
        ],
      },
      {
        id: "review",
        title: "A five-question website design review",
        steps: [
          { title: "Can the right visitor identify the offer in five seconds?", copy: "Check the first heading, supporting sentence, context and primary action without relying on a carousel." },
          { title: "Can they verify important claims?", copy: "Map each claim to evidence, methodology, source, demonstration or a clear qualification." },
          { title: "Can they find decision information?", copy: "Test services, scope, process, fit, location, pricing logic, FAQs and contact expectations." },
          { title: "Can they complete the task on mobile and keyboard?", copy: "Test navigation, forms, buttons, focus, zoom, long text and error recovery." },
          { title: "Can the team maintain it?", copy: "A design that requires a developer for every copy correction or campaign page can become a growth constraint." },
        ],
      },
    ],
    faqs: [
      { question: "Is web design only about appearance?", answer: "No. Web design includes information hierarchy, interaction, responsive behaviour, accessibility, content presentation and conversion paths as well as visual style." },
      { question: "Can a redesign improve SEO?", answer: "It can improve structure, content, internal links, accessibility and performance, but migrations can also remove or change valuable URLs. SEO requirements should be part of the redesign plan." },
      { question: "Does every business website need animation?", answer: "No. Motion should clarify state or hierarchy. Decorative animation should never block reading, interaction or reduced-motion preferences." },
      { question: "What makes a website mobile friendly?", answer: "A responsive layout, readable text, correctly sized media, usable controls, fast interaction and no horizontal overflow are core requirements." },
      { question: "How often should a website be redesigned?", answer: "Redesign when business, user or technical evidence justifies it. Continuous content and usability improvement is usually more useful than redesigning on a fixed calendar." },
    ],
    related: [
      { label: "Web design company in Nepal", href: "/web-design-company-in-nepal", copy: "Review the SEO, CRO and development process." },
      { label: "Website development checklist", href: "/insights/website-development-checklist", copy: "Use the launch and handoff checklist." },
      { label: "Digital marketing process", href: "/insights/digital-marketing-process", copy: "Connect the website to acquisition and measurement." },
    ],
    sources: [
      { label: "Web Content Accessibility Guidelines 2.2", publisher: "W3C", href: "https://www.w3.org/TR/WCAG22/", usedFor: "Accessibility principles and conformance criteria" },
      { label: "Web Vitals", publisher: "web.dev / Google", href: "https://web.dev/articles/vitals", usedFor: "Current Core Web Vitals metrics and thresholds" },
      { label: "SEO Starter Guide", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", usedFor: "Site organisation, page experience and search understanding" },
    ],
    cta: { title: "Is the website helping your marketing convert?", copy: "Send the URL and the most important customer action. GrowthLabs will identify the clearest hierarchy, trust, SEO or conversion issue.", label: "Request a website review", href: "/contact" },
  },
  {
    slug: "advantages-of-seo",
    category: "SEO",
    title: "The advantages of search engine optimisation for business - and the limits worth understanding",
    shortTitle: "Advantages of SEO",
    metaTitle: "Advantages of Search Engine Optimisation for Business",
    description: "Explore the advantages of search engine optimisation for qualified discovery, durable content, customer research, trust and lower channel dependence - with honest limits.",
    primaryKeyword: "advantages of search engine optimisation",
    supportingKeywords: ["advantage of search engine optimization", "benefits of SEO for business"],
    answer: "The main advantage of SEO is that it connects a business with people who are actively searching for information, products, services or locations. Strong SEO also creates durable website assets, reveals customer language, improves site structure and can reduce dependence on paid reach. It requires sustained work and never guarantees rankings, traffic or sales.",
    summaryPoints: [
      "SEO can capture existing demand at several decision stages.",
      "A useful page can continue earning discovery after its initial production period.",
      "Search data improves language, offer and content decisions beyond SEO.",
      "Commercial value depends on relevance, conversion and customer quality - not traffic alone."],
    datePublished: published,
    dateModified: reviewed,
    readingTime: "9 min read",
    sections: [
      {
        id: "benefits",
        title: "Eight practical advantages of SEO",
        steps: [
          { title: "Reach expressed demand", copy: "Search queries reveal an active question, need or comparison. The right page can meet that intent when it matters." },
          { title: "Build durable discovery assets", copy: "A well-maintained service page, guide, tool or comparison can remain useful beyond one campaign flight." },
          { title: "Cover the full decision journey", copy: "Definitions, problem guides, alternatives, service pages, proof and local pages can support different stages without forcing one page to do everything." },
          { title: "Improve customer understanding", copy: "Queries, page paths and on-site behaviour expose vocabulary, objections and information gaps that can improve sales and product communication." },
          { title: "Strengthen website architecture", copy: "Keyword and intent mapping encourages clearer navigation, page ownership and internal linking." },
          { title: "Reduce single-channel dependence", copy: "Organic discovery can diversify acquisition when a business otherwise depends on one ad platform, marketplace or referral source." },
          { title: "Support credibility", copy: "Specific, transparent and well-sourced pages give customers more evidence during comparison. Ranking alone is not proof of quality." },
          { title: "Improve other campaigns", copy: "SEO landing pages, customer language and content assets can support paid search, social distribution, email and sales enablement." },
        ],
      },
      {
        id: "commercial-value",
        title: "Where does SEO create commercial value?",
        table: {
          caption: "SEO value by search intent and page type",
          headers: ["Search intent", "Useful page", "Business value to measure"],
          rows: [
            ["Learn", "Definition, guide, checklist", "Qualified discovery, assisted journeys, audience learning"],
            ["Compare", "Alternative, process, pricing logic, case evidence", "Return visits, evaluation actions, qualified enquiries"],
            ["Act", "Product, service, category or booking page", "Leads, purchases, bookings and customer quality"],
            ["Visit locally", "Location page and accurate Business Profile", "Calls, directions, local enquiries and visits"],
            ["Find a brand", "Clear home, about and contact pages", "Successful navigation, trust and branded conversion"],
          ],
        },
      },
      {
        id: "compounding",
        title: "Does SEO compound over time?",
        answer: "SEO can compound when a business keeps useful pages accurate, earns relevant recognition and improves the site from real performance data. It is not automatic or permanent.",
        paragraphs: [
          "A page may gain internal links, external references, search history and broader query coverage as it proves useful. A strong topic structure can also help new pages become discoverable. That is why a maintained content library can become more valuable than isolated posts.",
          "Visibility can also fall because search behaviour, competitors, the website, the business or search systems change. Outdated content, broken migrations and mass-produced pages can erase earlier gains. Treat SEO as an owned operating capability, not a one-time installation.",
        ],
      },
      {
        id: "limits",
        title: "The limits and disadvantages of SEO",
        bullets: [
          "Search engines control crawling, indexing, presentation and ranking; no provider owns the result page.",
          "Results can take time, and the timeline cannot be promised responsibly.",
          "High search volume can still produce low commercial value when intent is weak.",
          "Technical and content recommendations create no value until someone implements them.",
          "Competitive topics may require stronger expertise, evidence, products and reputation - not simply more words.",
          "Measurement is imperfect across devices, long buying journeys and offline sales.",
          "Search demand cannot capture a category that people do not yet know to search for; demand creation may need other channels.",
        ],
      },
      {
        id: "fit",
        title: "When should a business invest in SEO?",
        answer: "SEO is a strong fit when relevant demand exists, the business has a credible answer and it can maintain the website and measurement required to learn.",
        table: {
          caption: "A simple SEO-fit assessment",
          headers: ["Condition", "Strong fit", "Investigate first"],
          rows: [
            ["Demand", "Customers search for the need or category", "The category is new and needs education"],
            ["Offer", "Clear, competitive and deliverable", "Weak differentiation or unresolved service issues"],
            ["Website", "Editable and technically sound enough to improve", "No access, unstable platform or imminent migration"],
            ["Content", "Real expertise and evidence are available", "The plan relies on generic mass production"],
            ["Operations", "Enquiries can be answered and qualified", "No owner for leads, updates or implementation"],
          ],
        },
      },
      {
        id: "measure",
        title: "How to evaluate the return from SEO",
        bullets: [
          "Define the page groups and customer actions that matter before reporting begins.",
          "Separate brand and non-brand search when it helps answer a real decision.",
          "Connect relevant queries to landing pages instead of celebrating aggregate impressions.",
          "Track key events and verify they work; a configured event is not automatically a valuable conversion.",
          "Review lead quality, sales outcomes and assisted journeys with the limitations stated.",
          "Compare the cost of strategy, production, development and maintenance with the value created over a suitable period.",
        ],
      },
    ],
    faqs: [
      { question: "What is the biggest advantage of SEO?", answer: "It can connect a useful website page with a person who is already expressing a relevant need through search." },
      { question: "Is SEO free?", answer: "Organic clicks are not charged per click by the search engine, but research, content, development, tools, expertise and maintenance require resources." },
      { question: "Can SEO replace Google Ads?", answer: "Sometimes SEO can reduce paid dependence for certain queries, but ads and organic search have different controls, timing and result formats. The right mix depends on the market." },
      { question: "Does more traffic mean SEO worked?", answer: "Not necessarily. Traffic should be relevant to the audience and connected to useful engagement, qualified actions and business outcomes." },
      { question: "Are SEO benefits permanent?", answer: "No. Useful assets can continue performing, but rankings and demand change. Pages and technical foundations need monitoring and maintenance." },
    ],
    related: [
      { label: "What is SEO?", href: "/insights/what-is-seo", copy: "Start with the definition and search process." },
      { label: "SEO expert in Nepal", href: "/seo-expert-in-nepal", copy: "See the process, evidence and service fit." },
      { label: "SEO company in Nepal", href: "/seo-company-in-nepal", copy: "Compare agency scope and selection criteria." },
    ],
    sources: [
      { label: "SEO Starter Guide", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", usedFor: "Organic search, content quality, timing and ranking limitations" },
      { label: "Google Search Essentials", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/essentials", usedFor: "Eligibility, best practices and spam boundaries" },
      { label: "Search Console performance report", publisher: "Google Search Console Help", href: "https://support.google.com/webmasters/answer/7576553?hl=en", usedFor: "Search-performance measurement context" },
    ],
    cta: { title: "Want to know whether SEO fits the business case?", copy: "Send the website, offer and target market. We will assess demand, page readiness, competition and measurement before recommending scope.", label: "Request an SEO opportunity review", href: "/contact" },
  },
  {
    slug: "website-development-checklist",
    category: "Web strategy",
    title: "Website development checklist: strategy, build, launch and handoff",
    shortTitle: "Website development checklist",
    metaTitle: "Website Development Checklist: Build to Launch",
    description: "Use a practical website development checklist covering requirements, content, responsive UX, accessibility, SEO, analytics, security, launch QA and handoff.",
    primaryKeyword: "website development checklist",
    supportingKeywords: ["web development checklist", "website development checklist template"],
    answer: "A complete website development checklist covers the business objective, audience tasks, content and URL architecture, responsive design, accessibility, component development, technical SEO, performance, forms, analytics, security, launch controls and post-launch ownership. Test real journeys before changing DNS or announcing launch.",
    summaryPoints: [
      "Define page purpose, owner and success signal before development.",
      "Test content, interactions and failure states across real viewport sizes.",
      "Protect URLs, metadata and measurement during redesigns or migrations.",
      "A launch is complete only when monitoring, access and handoff are clear."],
    datePublished: published,
    dateModified: reviewed,
    readingTime: "13 min read",
    sections: [
      {
        id: "discovery",
        title: "1. Strategy and requirements checklist",
        bullets: [
          "Name the primary business objective and no more than a few supporting outcomes.",
          "Define priority audiences, their context, tasks, objections and accessibility needs.",
          "Inventory required pages, languages, legal content, integrations and content owners.",
          "Record the current domain, DNS, hosting, CMS, analytics, Search Console and account ownership.",
          "Set scope boundaries for ecommerce, bookings, payments, user accounts, uploads and third-party services.",
          "Define acceptance criteria, approval owners, launch authority and a rollback decision path.",
        ],
      },
      {
        id: "architecture",
        title: "2. Content and information architecture checklist",
        bullets: [
          "Assign one clear purpose and primary audience task to every planned page.",
          "Map search intent and customer questions without creating near-duplicate keyword pages.",
          "Use descriptive, stable URLs and record redirects for every changed or removed valuable URL.",
          "Write unique titles, descriptions, headings and answer-first introductions.",
          "Place claims beside real evidence and remove placeholders, fake testimonials and unsupported numbers.",
          "Create crawlable contextual links between related services, guides, locations and conversion pages.",
          "Prepare descriptive filenames, dimensions, alt text decisions and rights information for media.",
        ],
      },
      {
        id: "ux-accessibility",
        title: "3. Responsive UX and accessibility checklist",
        table: {
          caption: "Minimum manual journeys to test",
          headers: ["Journey", "Test", "Failure to catch"],
          rows: [
            ["Navigation", "Keyboard, touch, active state, escape and focus return", "Trapped focus, hidden pages, tiny targets"],
            ["Reading", "320px mobile, zoom, long headings and long URLs", "Overflow, clipped text, unreadable measure"],
            ["Forms", "Labels, required fields, invalid input, errors and success", "Silent failure or error messages not associated with fields"],
            ["Media", "Missing image, slow image, captions and text alternatives", "Layout shift or essential information available only in an image"],
            ["Motion", "Reduced-motion preference and paused content", "Animation that blocks or disorients"],
            ["Contrast", "Text, controls, focus and disabled states", "Low-contrast information or colour-only meaning"],
          ],
        },
      },
      {
        id: "development",
        title: "4. Development checklist",
        bullets: [
          "Use semantic HTML before adding ARIA and keep heading order meaningful.",
          "Build reusable components with typed inputs and explicit empty, loading, success and error states.",
          "Keep client-side JavaScript limited to interactions that need it.",
          "Reserve image dimensions, serve responsive sizes and optimise formats without destroying quality.",
          "Prevent secrets, private keys and environment-specific credentials from entering client bundles or version control.",
          "Validate and sanitise untrusted input on the server when forms or APIs exist.",
          "Handle not-found routes, unexpected data and third-party service failure honestly.",
        ],
      },
      {
        id: "seo-performance",
        title: "5. Technical SEO and performance checklist",
        bullets: [
          "Return an appropriate 200, redirect, 404 or error response; do not serve every missing page as success.",
          "Confirm canonical URLs, robots directives, sitemap inclusion and crawlable internal links.",
          "Keep important rendered text and links available to search crawlers without requiring hidden interactions.",
          "Add structured data only when it matches visible content and a specific applicable type.",
          "Check LCP, INP and CLS with lab and field data where available; investigate causes rather than chasing a score alone.",
          "Test metadata and social-sharing previews for each public page type.",
          "For migrations, preserve valuable URLs or map one-to-one permanent redirects and monitor errors after launch.",
        ],
      },
      {
        id: "measurement-security",
        title: "6. Measurement, privacy and security checklist",
        bullets: [
          "Create an event plan from business questions before installing tags.",
          "Verify each key event once in the intended journey and prevent duplicate firing.",
          "Exclude sensitive content and personal data from analytics parameters.",
          "Document cookies, storage, embeds, processors and consent behaviour accurately.",
          "Use HTTPS, current dependencies, least-privilege account access and multifactor authentication where available.",
          "Define backups, restore ownership, incident contacts and dependency-update responsibility.",
          "Run security review proportional to risk; brochure sites and payment or account systems do not share the same threat model.",
        ],
      },
      {
        id: "launch",
        title: "7. Launch-day checklist",
        steps: [
          { title: "Freeze and verify the candidate", copy: "Build the exact release, record the commit and confirm production environment variables and integrations." },
          { title: "Run route and link checks", copy: "Test priority URLs, redirects, navigation, downloads, contact channels, forms and external destinations." },
          { title: "Inspect three responsive widths", copy: "At minimum check a small mobile, tablet and large desktop, then test orientation, zoom and real devices where available." },
          { title: "Validate search controls", copy: "Review titles, canonicals, indexability, robots, sitemap, structured data and status codes on the production host." },
          { title: "Validate measurement and consent", copy: "Confirm tags respect the documented consent state and key actions record once with no personal data." },
          { title: "Change traffic carefully", copy: "When DNS or routing changes are needed, confirm the exact records, SSL state and rollback path before mutation." },
          { title: "Monitor", copy: "Watch availability, errors, real journeys, indexing reports and analytics anomalies after launch." },
        ],
      },
      {
        id: "handoff",
        title: "8. Handoff checklist",
        bullets: [
          "Repository, hosting, DNS and analytics ownership transferred to named people",
          "Setup, build, deployment and rollback instructions tested by someone other than the author",
          "Environment variables documented without exposing values",
          "Content editing and media guidelines recorded",
          "Licences, third-party terms and renewal dates listed",
          "Known limitations, deferred work and risk accepted explicitly",
          "Post-launch support scope, response expectations and maintenance owner agreed",
        ],
      },
    ],
    faqs: [
      { question: "When should the website checklist begin?", answer: "Before design. Requirements, content ownership, URLs, integrations and launch authority affect every later decision." },
      { question: "What should be tested after deployment?", answer: "Test status codes, navigation, contact actions, forms, redirects, metadata, structured data, measurement, consent, responsive layouts, keyboard journeys and production console errors." },
      { question: "Is an automated accessibility score enough?", answer: "No. Automated tools find only some issues. Manual keyboard, zoom, screen-reader-informed and task-based testing remains necessary." },
      { question: "Should every page be in the XML sitemap?", answer: "Include canonical public URLs you want search engines to consider. Utility, duplicate, private or intentionally non-indexed URLs usually do not belong." },
      { question: "Do simple websites need security work?", answer: "Yes, although risk differs. Protect accounts and dependencies, use HTTPS, avoid exposing secrets and maintain a recovery path." },
    ],
    related: [
      { label: "Web design company in Nepal", href: "/web-design-company-in-nepal", copy: "See GrowthLabs' web strategy and delivery scope." },
      { label: "Why web design matters", href: "/insights/why-web-design-matters", copy: "Understand the business reasoning behind the checks." },
      { label: "SEO-friendly content", href: "/insights/seo-friendly-content", copy: "Prepare useful page copy before development." },
    ],
    sources: [
      { label: "SEO Starter Guide", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", usedFor: "URLs, links, metadata, crawl access and useful content" },
      { label: "Web Vitals", publisher: "web.dev / Google", href: "https://web.dev/articles/vitals", usedFor: "LCP, INP and CLS performance checks" },
      { label: "Web Content Accessibility Guidelines 2.2", publisher: "W3C", href: "https://www.w3.org/TR/WCAG22/", usedFor: "Accessibility requirements" },
      { label: "OWASP Application Security Verification Standard", publisher: "OWASP", href: "https://owasp.org/www-project-application-security-verification-standard/", usedFor: "Risk-based web application security reference" },
    ],
    cta: { title: "Planning a website build or migration?", copy: "Send the scope, current URL and launch constraint. GrowthLabs will map the information, SEO, conversion and measurement requirements before build risk grows.", label: "Discuss the website project", href: "/contact" },
  },
  {
    slug: "digital-marketing-process",
    category: "Growth strategy",
    title: "A digital marketing process that connects strategy, execution and learning",
    shortTitle: "Digital marketing process",
    metaTitle: "Digital Marketing Process: 8 Practical Steps",
    description: "Follow an eight-step digital marketing process across objectives, research, journey mapping, channel roles, assets, measurement, launch and optimisation.",
    primaryKeyword: "digital marketing process",
    supportingKeywords: ["digital marketing processes", "digital marketing strategy process"],
    answer: "A useful digital marketing process has eight connected steps: define the business objective, research the market and customer, map the decision journey, assign channel roles, build the offer and destination, plan measurement, launch controlled work, then use evidence to decide what to continue, change or stop.",
    summaryPoints: [
      "Begin with a business constraint, not a channel wish list.",
      "Give SEO, paid media, social, content and the website distinct jobs.",
      "Define key events and data limitations before launch.",
      "Optimisation is a decision loop, not constant random change."],
    datePublished: published,
    dateModified: reviewed,
    readingTime: "11 min read",
    sections: [
      {
        id: "overview",
        title: "The eight-step digital marketing strategy process",
        steps: [
          { title: "Define the commercial objective", copy: "Name the customer action, value, time horizon, constraints and owner. 'Increase awareness' is incomplete until the intended audience and next behaviour are clear." },
          { title: "Research market and customer", copy: "Review demand, competitors, category language, customer interviews, sales objections, seasonality and current performance." },
          { title: "Map the decision journey", copy: "Identify what people need to recognise, understand, compare, trust and do - including offline steps." },
          { title: "Assign channel roles", copy: "Decide where SEO captures demand, social creates familiarity, ads distribute offers, content resolves questions and the website converts." },
          { title: "Build the offer and destination", copy: "Align the promise, proof, page, form or contact route, follow-up and operational capacity." },
          { title: "Plan measurement", copy: "Define events, parameters, data owners, consent, quality checks and attribution limitations." },
          { title: "Launch controlled work", copy: "Use focused campaigns and page groups with enough stability to produce interpretable evidence." },
          { title: "Learn and prioritise", copy: "Compare evidence with the objective, diagnose the largest constraint and choose the next action." },
        ],
      },
      {
        id: "objective",
        title: "Turn a broad goal into a measurable decision",
        table: {
          caption: "From vague marketing language to an operational objective",
          headers: ["Incomplete goal", "Questions to add", "Decision-ready version"],
          rows: [
            ["Get more leads", "Which offer, market, quality and capacity?", "Increase qualified consultation requests for the Nepal service line without exceeding response capacity"],
            ["Grow SEO", "Which non-brand demand and pages?", "Improve qualified discovery for three priority service clusters and their conversion paths"],
            ["Run Meta Ads", "Which audience, offer, action and follow-up?", "Test two offer-message combinations for eligible prospects with verified lead handling"],
            ["Improve the website", "Which journey is failing?", "Reduce confusion between service comparison and direct contact on mobile"],
          ],
        },
      },
      {
        id: "research",
        title: "Use five evidence streams",
        bullets: [
          "Business evidence: margins, capacity, seasonality, sales cycle and customer value",
          "Customer evidence: interviews, calls, messages, objections, reviews and support questions",
          "Demand evidence: search queries, trend direction, location and competitor visibility",
          "Experience evidence: analytics, recordings where consented, usability tests and conversion paths",
          "Channel evidence: campaign, audience, creative, placement and landing-page performance",
        ],
        callout: "Platform reports describe activity inside a measurement model. They do not automatically prove incremental revenue or customer quality.",
      },
      {
        id: "channel-roles",
        title: "Give each channel one primary job",
        table: {
          caption: "Example channel roles in one connected journey",
          headers: ["Channel", "Primary job", "Destination or handoff"],
          rows: [
            ["SEO", "Capture category, problem, comparison and local demand", "Useful website page"],
            ["Google Ads", "Reach eligible high-intent demand with controlled messages", "Intent-matched landing page"],
            ["Meta Ads", "Create, retarget or convert demand with suitable creative", "Page, instant form, message or commerce flow"],
            ["Organic social", "Build recognition, demonstration and conversation", "Profile action, guide, offer or message"],
            ["Email or follow-up", "Continue an invited relationship", "Relevant content, qualification or sales step"],
            ["Website", "Explain, prove, qualify and enable action", "Sales, booking, purchase or direct contact"],
          ],
        },
      },
      {
        id: "measurement",
        title: "Create a measurement plan before creating dashboards",
        paragraphs: [
          "GA4 defines an event as a measured interaction or occurrence, such as a page load, link click or purchase. That technical definition does not decide business importance. Mark and report only the events that answer a useful question, and verify them against the real journey.",
          "Document the event name, trigger, parameters, consent requirement, expected count, owner and business interpretation. Separate leading signals from outcomes and state where cross-device, offline or platform attribution remains incomplete.",
        ],
        table: {
          caption: "A compact measurement hierarchy",
          headers: ["Level", "Examples", "Decision"],
          rows: [
            ["Delivery", "Impressions, eligible reach, crawl and spend", "Did the activity run as intended?"],
            ["Response", "Qualified clicks, content engagement, page paths", "Did the intended audience respond?"],
            ["Key action", "Message, form, call, booking, purchase", "Did the journey produce an agreed action?"],
            ["Quality", "Qualified lead, retained customer, margin", "Was the action commercially useful?"],
          ],
        },
      },
      {
        id: "experiments",
        title: "Run controlled learning cycles",
        steps: [
          { title: "State the observation", copy: "Example: high-intent visitors reach the pricing section but rarely start contact." },
          { title: "Form a specific hypothesis", copy: "Example: unclear scope and follow-up expectations create hesitation." },
          { title: "Choose one meaningful change", copy: "Clarify inclusions, fit and what happens after contact while keeping the acquisition mix stable enough to read." },
          { title: "Define success and guardrails", copy: "Track qualified contact starts and completion without reducing lead quality or accessibility." },
          { title: "Record the result and limitation", copy: "Document period, segments, implementation quality, confounders and the next decision." },
        ],
      },
      {
        id: "cadence",
        title: "Use different review cadences for different decisions",
        bullets: [
          "Daily: delivery failures, budget anomalies, broken journeys and urgent reputation issues",
          "Weekly: campaign search terms, creative response, lead quality and implementation status",
          "Monthly: channel contribution, page groups, customer quality, production capacity and next priorities",
          "Quarterly: market assumptions, offer, positioning, budget allocation, technical roadmap and measurement design",
        ],
      },
    ],
    faqs: [
      { question: "What is the first step in digital marketing?", answer: "Define the business objective, audience, desired action, constraints and owner before choosing channels." },
      { question: "How many channels should a small business use?", answer: "Use only the channels the business can resource and connect to a useful customer journey. There is no minimum number." },
      { question: "What is digital marketing optimisation?", answer: "It is the disciplined process of using evidence to improve targeting, message, creative, page experience, follow-up, measurement or allocation." },
      { question: "How often should a strategy change?", answer: "Fix delivery problems quickly, but change strategic assumptions only when sufficient evidence or a material business change justifies it." },
      { question: "Does every campaign need a new landing page?", answer: "No. Use a new page when the audience, offer or intent requires a distinct experience that an existing page cannot provide clearly." },
    ],
    related: [
      { label: "Digital marketing agency in Nepal", href: "/digital-marketing-agency-in-nepal", copy: "See the national service model and process." },
      { label: "Advertising agency in Nepal", href: "/advertising-agency-in-nepal", copy: "Review Google Ads, Meta Ads and full-funnel scope." },
      { label: "Website development checklist", href: "/insights/website-development-checklist", copy: "Turn campaign requirements into a reliable destination." },
    ],
    sources: [
      { label: "GA4 events", publisher: "Google Analytics Help", href: "https://support.google.com/analytics/answer/9356037?hl=en", usedFor: "Definition and examples of Analytics events" },
      { label: "GA4 recommended events", publisher: "Google Analytics Help", href: "https://support.google.com/analytics/answer/9267735?hl=en", usedFor: "Prescribed event-name and parameter context" },
      { label: "Creating helpful, reliable, people-first content", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content", usedFor: "Audience-first content and quality evaluation" },
    ],
    cta: { title: "Need one connected growth process instead of channel activity?", copy: "Send the offer, audience, current channels and biggest constraint. We will identify the clearest next operating priority.", label: "Request a founder-led growth review", href: "/contact" },
  },
  {
    slug: "facebook-lead-generation-ads",
    category: "Paid media",
    title: "Facebook lead generation ads: setup, form strategy and quality control",
    shortTitle: "Facebook lead generation ads",
    metaTitle: "Facebook Lead Generation Ads: Setup & Examples",
    description: "Plan Facebook lead generation ads with a clear offer, qualified audience, instant form, privacy notice, follow-up, CRM handoff and lead-quality measurement.",
    primaryKeyword: "Facebook lead generation ads",
    supportingKeywords: ["lead generation through Facebook ads", "Facebook lead ad example", "Facebook lead generation terms of service"],
    answer: "Facebook lead generation ads use Meta advertising to collect or initiate enquiries through destinations such as an instant form, website, message or call. A sound setup aligns the campaign objective, audience, creative, questions, privacy information, consent, follow-up and sales capacity. Cheap leads alone do not prove success.",
    summaryPoints: [
      "Choose the lead destination from the customer journey, not setup convenience.",
      "Use the fewest questions needed to qualify and follow up responsibly.",
      "Connect lead delivery to a named owner and response process before launch.",
      "Optimise for qualified and commercially useful outcomes, not form volume alone."],
    datePublished: published,
    dateModified: reviewed,
    readingTime: "11 min read",
    sections: [
      {
        id: "destinations",
        title: "Choose the right lead destination",
        table: {
          caption: "Common Meta lead destinations and fit",
          headers: ["Destination", "Strong fit", "Watch for"],
          rows: [
            ["Instant form", "Low-friction mobile enquiry and simple qualification", "Low-intent submissions, privacy wording and CRM handoff"],
            ["Website form", "More explanation, stronger qualification or existing conversion flow", "Page speed, tracking, form friction and cookie consent"],
            ["Messaging", "Questions and conversational qualification matter", "Response time, staff coverage and personal-data handling"],
            ["Calls", "Urgent or high-consideration enquiries with ready staff", "Operating hours, missed calls and attribution limitations"],
          ],
        },
      },
      {
        id: "setup",
        title: "Facebook lead ad setup checklist",
        steps: [
          { title: "Define the qualified lead", copy: "Write the geography, need, timing, budget or eligibility conditions sales actually uses. Do not collect a field merely because it is available." },
          { title: "Confirm assets and permissions", copy: "Verify the business portfolio, Page, ad account, payment, pixel or dataset, domain and people responsible for lead access." },
          { title: "Review Meta's current terms", copy: "An authorised person may need to accept Meta's Lead Ads Terms. Use Meta's current interface and official terms rather than an old screenshot guide." },
          { title: "Choose objective and conversion location", copy: "Select the current Leads setup and the destination that matches the intended journey." },
          { title: "Build audience and exclusions", copy: "Use geography, eligibility and customer information lawfully, and exclude unsuitable existing or converted audiences when appropriate." },
          { title: "Create message-matched ads", copy: "Align hook, offer, proof, qualification and form promise. Do not hide important eligibility or cost context until after submission." },
          { title: "Build the form or destination", copy: "Use a clear introduction, necessary questions, accurate privacy link, consent language and a useful completion screen." },
          { title: "Connect delivery and test", copy: "Send a test lead through the complete route to the named owner or CRM and verify field mapping, alerts and response." },
          { title: "Launch and inspect quality", copy: "Review delivery, creative, placement, form completion, duplicates, contactability, qualification and downstream outcomes." },
        ],
      },
      {
        id: "example",
        title: "A lead ad example built around qualification",
        table: {
          caption: "Illustrative structure for a consultation offer - not a performance claim",
          headers: ["Element", "Example", "Reason"],
          rows: [
            ["Hook", "Know which part of your acquisition journey is leaking demand", "Names a recognisable problem"],
            ["Offer", "Founder-led review of channel, landing page and tracking", "Defines the work instead of saying free audit with no scope"],
            ["Proof", "Use a relevant, verifiable account or process example", "Supports the exact claim without borrowed logos"],
            ["Questions", "Website, target market, primary constraint, contact details", "Provides enough context for a useful response"],
            ["Completion", "Explain response channel and expected next step", "Reduces uncertainty after submission"],
          ],
        },
      },
      {
        id: "form",
        title: "Write an instant form that earns informed consent",
        bullets: [
          "Use a form name and introduction that identify the business and specific offer.",
          "Collect only information needed for delivery, qualification or a clearly stated purpose.",
          "Avoid prefilled convenience when a deliberate answer is important to lead quality.",
          "Link to a current privacy policy that explains collection, use, retention and contact choices.",
          "Use custom disclaimers or consent wording when the business, jurisdiction or data requires it; obtain legal advice where appropriate.",
          "Tell the person what happens next, who responds and through which channel.",
          "Provide an honest destination on the thank-you screen rather than implying a booking or response already occurred.",
        ],
      },
      {
        id: "follow-up",
        title: "Design follow-up before buying the first impression",
        answer: "A lead-generation campaign is incomplete until eligible submissions reach a responsible person quickly, securely and with enough context to respond.",
        bullets: [
          "Name the lead owner, backup owner and operating hours.",
          "Map fields into the CRM or secure record with least-privilege access.",
          "Define first response, qualification, nurture, rejection and deletion paths.",
          "Prevent repeated calls or messages after an opt-out.",
          "Return qualified and downstream outcome data to the reporting process where consent and platform setup permit.",
        ],
      },
      {
        id: "measurement",
        title: "Measure cost per qualified outcome, not only cost per lead",
        table: {
          caption: "Lead-quality measurement chain",
          headers: ["Metric", "Question", "Common limitation"],
          rows: [
            ["Form completion", "Did the destination collect a submission?", "Duplicates, mistakes and accidental submissions"],
            ["Contactable lead", "Can the team reach a real eligible person?", "Invalid information or delayed follow-up"],
            ["Qualified lead", "Does the need fit the agreed criteria?", "Qualification can be inconsistent without definitions"],
            ["Opportunity or sale", "Did the lead create commercial movement?", "Offline matching and long sales cycles are incomplete"],
            ["Unit economics", "Is the value greater than acquisition and delivery cost?", "Margin, retention and fulfilment data may sit elsewhere"],
          ],
        },
        callout: "A lower cost per form can be worse when contactability or qualification falls. Keep volume, quality and sales capacity in the same review.",
      },
    ],
    faqs: [
      { question: "What are Facebook lead generation ads?", answer: "They are Meta ads designed to generate enquiries through a selected conversion location such as an instant form, website, message or call." },
      { question: "How do I accept Facebook lead generation terms?", answer: "Use Meta's official Lead Ads Terms page or the current setup prompt while signed into an authorised account. Interfaces and permission requirements can change." },
      { question: "Are instant forms better than website forms?", answer: "Neither is always better. Instant forms reduce steps; website forms allow more context and control. Test quality, completion, privacy and follow-up for the actual offer." },
      { question: "Why are my Facebook leads low quality?", answer: "Possible causes include broad eligibility, weak message match, too little deliberate qualification, misleading creative, accidental submissions or poor follow-up. Diagnose the complete path." },
      { question: "How quickly should leads be contacted?", answer: "Respond within the expectation stated to the user and the hours the team can reliably cover. Faster is useful only when the response remains accurate, respectful and consent-aware." },
    ],
    related: [
      { label: "Advertising agency in Nepal", href: "/advertising-agency-in-nepal", copy: "See Meta Ads, Google Ads, creative and tracking scope." },
      { label: "Social media marketing agency", href: "/social-media-marketing-agency-in-nepal", copy: "Connect paid distribution to content and community." },
      { label: "Digital marketing process", href: "/insights/digital-marketing-process", copy: "Place lead ads inside a complete operating system." },
    ],
    sources: [
      { label: "Lead generation advertising", publisher: "Meta for Business", href: "https://www.facebook.com/business/ads/ad-objectives/lead-generation", usedFor: "Current Meta lead destination and objective context" },
      { label: "Lead Ads Terms", publisher: "Meta", href: "https://www.facebook.com/ads/leadgen/tos", usedFor: "Current first-party lead-ad terms and acceptance route" },
      { label: "Lead Ads guide for the Marketing API", publisher: "Meta for Developers", href: "https://developers.facebook.com/docs/marketing-api/guides/lead-ads/", usedFor: "Lead retrieval, testing and integration context" },
    ],
    cta: { title: "Need a Meta lead system, not just a form campaign?", copy: "Send the offer, audience, qualification rules and current follow-up path. GrowthLabs will review the ad, destination, tracking and lead-quality chain.", label: "Request a Meta Ads review", href: "/contact" },
  },
  {
    slug: "seo-friendly-content",
    category: "SEO",
    title: "How to create SEO-friendly content that is useful, specific and conversion-aware",
    shortTitle: "SEO-friendly content",
    metaTitle: "How to Write SEO-Friendly Content That Helps Users",
    description: "Create SEO-friendly content with search intent, original expertise, entity coverage, answer-first structure, internal links, accurate metadata, review and conversion context.",
    primaryKeyword: "SEO-friendly content",
    supportingKeywords: ["SEO-friendly blogs", "SEO-friendly writing", "SEO-friendly content writing tips", "content writing in digital marketing"],
    answer: "SEO-friendly content clearly satisfies a real search need, demonstrates original knowledge, uses the language and entities needed to explain the topic, is easy to crawl and navigate, and gives readers a proportionate next step. It is written for people first and structured so search systems can understand it.",
    summaryPoints: [
      "Start with the reader's task, not a target word count or density percentage.",
      "Map the primary answer, supporting questions, entities and evidence before drafting.",
      "Use clear titles, headings, paragraphs, tables and lists because the topic needs them.",
      "Review factual accuracy, originality, internal links and conversion fit before publishing."],
    datePublished: published,
    dateModified: reviewed,
    readingTime: "12 min read",
    sections: [
      {
        id: "definition",
        title: "What makes content SEO friendly?",
        answer: "A page is SEO friendly when its purpose is clear, its main content is accessible, its information is useful and trustworthy, and its structure helps both readers and search systems understand relationships.",
        paragraphs: [
          "Google's Search Essentials recommends helpful, reliable, people-first content and using the words people would use in prominent places such as the title, main heading, alt text and link text. It also explicitly warns against keyword stuffing.",
          "That means optimisation is editorial discipline, not mechanical repetition. A good page can cover synonyms and related entities naturally because it explains the subject completely. A weak page can repeat the exact keyword dozens of times and still fail the reader.",
        ],
      },
      {
        id: "brief",
        title: "Build a decision-ready content brief",
        table: {
          caption: "Fields for an SEO content brief",
          headers: ["Field", "Question", "Output"],
          rows: [
            ["Audience and task", "Who is searching and what must they accomplish?", "One-sentence reader job"],
            ["Primary intent", "Learn, compare, act, visit or navigate?", "Page type and CTA stage"],
            ["Main answer", "What is the shortest accurate response?", "Answer-first introduction"],
            ["Supporting questions", "What will the reader ask next?", "Section and FAQ map"],
            ["Entities", "Which concepts, products, organisations, locations or standards are necessary?", "Coverage map, not a stuffing list"],
            ["Evidence", "What makes this page original and trustworthy?", "Experience, examples, data, sources and qualifications"],
            ["Internal role", "Which pages should this support and be supported by?", "Contextual link plan"],
            ["Success", "What useful reader and business outcome matters?", "Measurement plan"],
          ],
        },
      },
      {
        id: "workflow",
        title: "An eight-step SEO writing workflow",
        steps: [
          { title: "Inspect the search task", copy: "Review query language and result types, but do not simply reproduce the current results. Identify what the reader still needs." },
          { title: "Choose the right page type", copy: "A definition, checklist, comparison, service page and tool solve different tasks. Do not force every query into a long blog post." },
          { title: "Write the main answer first", copy: "Give a direct, qualified response before background. This helps readers, excerpts and answer systems understand the page." },
          { title: "Create a complete question path", copy: "Order sections from the first answer through mechanism, choices, examples, risks, implementation and next steps." },
          { title: "Add first-hand value", copy: "Include a real framework, demonstration, template, decision table, process or insight that cannot be created by rearranging other articles." },
          { title: "Cite primary evidence", copy: "For changing technical facts, policies and standards, link to the organisation responsible for them and state any limitation." },
          { title: "Optimise page elements", copy: "Refine the title, description, H1, headings, URL, links, media, alternative text and structured data without changing the meaning." },
          { title: "Review and maintain", copy: "Check accuracy, usefulness, originality, accessibility and performance after publication; update only when the content genuinely changes." },
        ],
      },
      {
        id: "entities",
        title: "Use semantic entities to explain, not inflate",
        answer: "Entity coverage means naming the concepts a reader needs to understand the subject and their relationships. It is not a requirement to insert every related phrase from a tool.",
        paragraphs: [
          "For a Google Business Profile guide, relevant entities may include Google Maps, local results, primary category, service area, reviews, relevance, distance and prominence. Those terms belong because they define the product and decision. Unrelated cities, services or repeated variants do not add topical depth.",
          "Build an entity map from the topic definition, responsible organisations, components, inputs, outputs, alternatives, standards and common failure modes. Then remove any term the page cannot explain accurately.",
        ],
      },
      {
        id: "structure",
        title: "Structure for readers, AEO and generative retrieval",
        bullets: [
          "Use one descriptive H1 that matches the page's actual task.",
          "Open important sections with a concise answer, then add reasoning, examples and limits.",
          "Keep paragraphs focused on one idea and use descriptive H2 and H3 headings.",
          "Use tables for repeated comparisons, ordered lists for sequence and checklists for verification.",
          "Make dates, authorship, sources and update history visible where freshness matters.",
          "Define acronyms before using them and distinguish facts, recommendations, examples and opinions.",
          "Add structured data only when it accurately represents visible content; markup does not make weak content authoritative.",
        ],
      },
      {
        id: "on-page",
        title: "On-page SEO content checklist",
        bullets: [
          "Unique, concise title that describes the page rather than listing keyword variants",
          "Meta description that communicates the specific value and context",
          "One main heading and logical section hierarchy",
          "Answer-first introduction with the necessary qualification",
          "Original examples, process, data or judgement",
          "Descriptive internal links to real next questions and commercial pages",
          "External primary sources for changing technical claims",
          "Useful alternative text for meaningful images; empty alt for decorative images",
          "Visible author, publish or modified date and correction path where appropriate",
          "A CTA aligned with intent rather than an aggressive interruption",
        ],
      },
      {
        id: "avoid",
        title: "What to avoid in SEO-friendly writing",
        bullets: [
          "A fixed 5 percent keyword-density rule or unnatural exact-match repetition",
          "Changing publication dates without substantial content changes",
          "Invented experts, results, customer stories, quotes or citations",
          "Mass-producing adjacent pages that answer the same intent",
          "Adding length after the question is already completely answered",
          "Copying competitor outlines without an original contribution",
          "Hiding the real answer behind a long generic introduction",
          "Using FAQ schema for questions or answers visitors cannot see",
        ],
        callout: "Google states that it has no preferred word count and identifies search-engine-first mass production and keyword stuffing as warning signs. Depth means completing the task, not reaching an arbitrary length.",
      },
      {
        id: "measurement",
        title: "Measure content as part of a page system",
        table: {
          caption: "Content measurements by purpose",
          headers: ["Page purpose", "Leading signal", "Outcome to investigate"],
          rows: [
            ["Definition", "Relevant impressions, qualified entrances, next-page paths", "Assisted discovery and topic understanding"],
            ["Comparison", "Engagement with criteria, return visits, CTA interaction", "Qualified evaluation and sales conversations"],
            ["Service", "Relevant queries, proof engagement, contact starts", "Qualified enquiries and customer fit"],
            ["Checklist or template", "Downloads, saves, repeat visits", "Useful adoption and related service interest"],
          ],
        },
      },
    ],
    faqs: [
      { question: "What is SEO-friendly writing?", answer: "It is clear, useful, trustworthy writing that satisfies a search task and is structured so people and search systems can understand the page." },
      { question: "What keyword density is best for SEO?", answer: "There is no universal ideal percentage. Use the topic language naturally and completely; avoid keyword stuffing and repetitive phrasing." },
      { question: "How long should an SEO article be?", answer: "Long enough to complete the reader's task with original value, and no longer. Google states it has no preferred word count." },
      { question: "Can AI write SEO content?", answer: "Tools can support research or drafting, but the publisher remains responsible for originality, accuracy, expertise, sources and usefulness. Automation does not excuse mass-produced low-value pages." },
      { question: "Should every article include FAQs?", answer: "No. Include concise FAQs when they answer genuine follow-up questions that are not already clearer in the main sections." },
    ],
    related: [
      { label: "What is SEO?", href: "/insights/what-is-seo", copy: "Understand the complete optimisation system." },
      { label: "Advantages of SEO", href: "/insights/advantages-of-seo", copy: "Connect content work to business value and limits." },
      { label: "SEO company in Nepal", href: "/seo-company-in-nepal", copy: "See content strategy inside a wider SEO engagement." },
    ],
    sources: [
      { label: "Creating helpful, reliable, people-first content", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content", usedFor: "Quality, expertise, originality, word-count and update guidance" },
      { label: "Google Search Essentials", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/essentials", usedFor: "People-first content, prominent language and crawlable links" },
      { label: "SEO Starter Guide", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", usedFor: "Titles, descriptions, site organisation, links and keyword-stuffing warning" },
      { label: "Article structured data", publisher: "Google Search Central", href: "https://developers.google.com/search/docs/appearance/structured-data/article", usedFor: "Article markup and visible author/date context" },
    ],
    cta: { title: "Need an intent-led content system, not a pile of posts?", copy: "Send the target service, audience and current content. We will identify the page cluster, evidence and conversion path worth building next.", label: "Request an SEO content review", href: "/contact" },
  },
  ...authorityInsights,
];

export const insightBySlug: Record<string, InsightArticle> = Object.fromEntries(
  insights.map((article) => [article.slug, article]),
);
