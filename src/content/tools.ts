import type { AgencyAssetKey } from "@/content/agency-assets";

export type ToolKind = "seo-roi" | "google-ads-break-even" | "meta-budget" | "utm-builder" | "conversion-rate" | "funnel-economics" | "campaign-metrics";

export type MarketingTool = {
  slug: string;
  kind: ToolKind;
  title: string;
  shortTitle: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  visual: AgencyAssetKey;
  answer: string;
  formula: string;
  inputs: string[];
  cautions: string[];
  steps: { title: string; copy: string }[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
};

export const marketingTools: MarketingTool[] = [
  {
    slug: "seo-roi-calculator",
    kind: "seo-roi",
    title: "SEO ROI calculator for scenario planning",
    shortTitle: "SEO ROI calculator",
    metaTitle: "SEO ROI Calculator | Estimate Traffic & Conversion Value",
    description: "Model an SEO scenario using organic sessions, conversion rate, close rate, gross profit and monthly SEO investment. Planning estimate—not a forecast.",
    eyebrow: "Free SEO tool / Scenario model",
    visual: "seoRanking",
    answer: "The calculator estimates how a change in organic conversion volume could affect customers, gross profit and return after SEO cost. It does not predict rankings, traffic growth or guaranteed revenue.",
    formula: "Estimated incremental gross profit = organic sessions × conversion-rate change × close rate × average gross profit per customer. Estimated ROI = (incremental gross profit − SEO cost) ÷ SEO cost.",
    inputs: ["Monthly organic sessions", "Current and scenario conversion rates", "Lead-to-customer close rate", "Average gross profit per customer", "Monthly SEO investment"],
    cautions: ["Traffic quality and branded versus non-brand demand can change the result.", "Gross profit is more decision-useful than revenue when costs vary.", "SEO can influence assisted journeys that a simple monthly model cannot reconstruct.", "Use multiple conservative scenarios instead of presenting one output as a forecast."],
    steps: [{ title: "Use a consistent baseline", copy: "Take sessions and conversions from the same period and keep the conversion definition unchanged." }, { title: "Use gross profit", copy: "Enter expected profit after direct delivery or product costs rather than headline revenue." }, { title: "Model a range", copy: "Compare conservative, working and upside scenarios instead of assuming one conversion-rate change." }, { title: "Validate later", copy: "Reconcile the model with qualified leads, customers and business records after implementation." }],
    faqs: [{ question: "Can an SEO ROI calculator predict revenue?", answer: "No. It models the arithmetic of stated assumptions. Rankings, traffic, conversion quality, implementation and market conditions remain uncertain." }, { question: "Should I use revenue or profit?", answer: "Gross profit or contribution margin usually produces a more useful break-even view because revenue ignores delivery or product cost." }, { question: "What conversion should I enter?", answer: "Use the primary organic action that can be defined consistently, then apply a close rate if that action is a lead rather than a customer." }, { question: "Does the calculation include lifetime value?", answer: "Not automatically. Enter a defensible gross-profit value that reflects the period and customer economics you intend to model." }],
    related: [{ label: "SEO audit services", href: "/seo-audit-services-in-nepal" }, { label: "SEO expert in Nepal", href: "/seo-expert-in-nepal" }, { label: "Advantages of SEO", href: "/insights/advantages-of-seo" }],
  },
  {
    slug: "google-ads-break-even-calculator",
    kind: "google-ads-break-even",
    title: "Google Ads break-even calculator for ROAS, CPA, CPL and CPC",
    shortTitle: "Google Ads break-even calculator",
    metaTitle: "Google Ads Break-Even CPA & ROAS Calculator",
    description: "Estimate break-even ROAS, maximum customer CPA, maximum lead CPL and maximum CPC from gross revenue, margin and conversion assumptions.",
    eyebrow: "Free Google Ads tool / Unit economics",
    visual: "googleAds",
    answer: "This tool translates gross revenue, margin, lead close rate and landing-page conversion into break-even acquisition thresholds. It helps frame budget decisions but does not include every operating cost or attribution limitation.",
    formula: "Break-even ROAS = 1 ÷ gross-margin rate. Maximum customer CPA = customer revenue × gross-margin rate. Maximum CPL = maximum customer CPA × lead close rate. Maximum CPC = maximum customer CPA × page conversion rate.",
    inputs: ["Average gross revenue per customer", "Gross margin percentage", "Lead-to-customer close rate", "Landing-page conversion rate", "Currency symbol"],
    cautions: ["Include refunds, fulfilment, sales and variable costs when they materially affect contribution.", "Lead CPL only makes sense when close-rate definitions are reliable.", "Platform attribution may count conversions differently from finance or CRM systems.", "A campaign normally needs headroom below break-even to fund overhead and profit."],
    steps: [{ title: "Start with customer economics", copy: "Use a representative customer value and the margin remaining after direct costs." }, { title: "Define the funnel", copy: "State whether the campaign produces purchases or leads and use a consistent lead-to-customer rate." }, { title: "Set a working target", copy: "Choose a target below the mathematical break-even CPA to allow for overhead, uncertainty and profit." }, { title: "Reconcile quality", copy: "Compare platform conversions with qualified leads, sales, refunds and margin before scaling." }],
    faqs: [{ question: "What is break-even ROAS?", answer: "It is the revenue-to-ad-spend ratio at which gross profit equals advertising cost under the stated margin assumptions. It is not automatically the business's profitable target." }, { question: "What is maximum CPA?", answer: "It is the most the model can spend to acquire the defined customer before the included gross profit is consumed. Overhead and desired profit usually require a lower working CPA." }, { question: "How is maximum CPC calculated?", answer: "The simplified model multiplies maximum customer CPA by the landing-page conversion rate. Real bidding decisions also depend on query quality, delays, attribution and auction conditions." }, { question: "Can I use this for lead generation?", answer: "Yes. The maximum lead CPL multiplies customer CPA by the expected lead-to-customer close rate. Use qualified and consistently defined leads." }],
    related: [{ label: "Google Ads agency in Nepal", href: "/google-ads-agency-in-nepal" }, { label: "Advertising agency in Nepal", href: "/advertising-agency-in-nepal" }, { label: "Google Ads evidence", href: "/insights/case-studies" }],
  },
  {
    slug: "meta-ads-budget-planner",
    kind: "meta-budget",
    title: "Meta Ads budget planner for Facebook and Instagram campaigns",
    shortTitle: "Meta Ads budget planner",
    metaTitle: "Meta Ads Budget Calculator | Facebook & Instagram",
    description: "Estimate a monthly and daily Meta Ads planning budget from desired qualified outcomes, target CPA, testing buffer and campaign duration.",
    eyebrow: "Free Meta Ads tool / Budget scenario",
    visual: "metaAds",
    answer: "The planner works backwards from desired qualified outcomes and a target acquisition cost, then adds an explicit testing buffer. It is a budgeting scenario—not a promise that Meta will deliver the selected result.",
    formula: "Base media budget = desired qualified outcomes × target CPA. Planning budget = base budget × (1 + testing buffer). Daily planning budget = planning budget ÷ campaign days.",
    inputs: ["Desired qualified outcomes", "Target cost per qualified outcome", "Testing and uncertainty buffer", "Campaign duration", "Currency symbol"],
    cautions: ["A target CPA must be grounded in margin, close rate and customer value.", "Creative production and agency fees are separate unless deliberately added.", "Reported platform leads need business-side qualification.", "Small budgets may not collect enough evidence across many audiences and creative variables."],
    steps: [{ title: "Define the qualified outcome", copy: "Use a qualified lead, purchase or booking definition—not every click, message or form submission." }, { title: "Ground the CPA", copy: "Use customer economics and close-rate evidence to set an affordable working target." }, { title: "Protect learning budget", copy: "Add a visible buffer for early creative, audience and destination uncertainty." }, { title: "Reduce fragmentation", copy: "Keep the campaign structure focused enough that the available budget can collect interpretable evidence." }],
    faqs: [{ question: "How much should I spend on Meta Ads?", answer: "Budget should follow the value and number of qualified outcomes needed, the affordable acquisition cost, market conditions, creative resources and the amount of evidence required to make a decision." }, { question: "Does the planner include creative production?", answer: "No. The output represents media budget. Add strategy, management, design, filming, editing, talent and landing-page costs separately." }, { question: "What testing buffer should I use?", answer: "There is no universal percentage. Use a larger buffer when the offer, audience, tracking, creative or destination has little reliable evidence." }, { question: "Can the budget guarantee a number of leads?", answer: "No. The selected outcomes and CPA are assumptions used to frame a scenario. Delivery and quality depend on the complete campaign and market." }],
    related: [{ label: "Meta Ads agency in Nepal", href: "/meta-ads-agency-in-nepal" }, { label: "Facebook lead ads guide", href: "/insights/facebook-lead-generation-ads" }, { label: "Social media marketing", href: "/social-media-marketing-agency-in-nepal" }],
  },
  {
    slug: "utm-builder",
    kind: "utm-builder",
    title: "UTM campaign URL builder with consistent source tracking",
    shortTitle: "UTM URL builder",
    metaTitle: "Free UTM Builder | Campaign URL Generator",
    description: "Create a campaign URL with encoded utm_source, utm_medium, utm_campaign, utm_term and utm_content parameters—entirely in your browser.",
    eyebrow: "Free analytics tool / Campaign tagging",
    visual: "analytics",
    answer: "The UTM builder adds consistently encoded campaign parameters to a valid destination URL. Nothing is submitted to GrowthLabs; the URL is generated locally in your browser.",
    formula: "Final URL = destination URL + utm_source + utm_medium + utm_campaign + optional utm_term and utm_content parameters.",
    inputs: ["Destination website URL", "Campaign source", "Campaign medium", "Campaign name", "Optional term and content labels"],
    cautions: ["Never place personal data, passwords, private IDs or secrets in UTM values.", "Use one documented lowercase naming convention across the team.", "UTM parameters classify visits; they do not prove causation or replace conversion tracking.", "Avoid tagging internal website links because it can overwrite acquisition context."],
    steps: [{ title: "Agree the taxonomy", copy: "Document allowed source, medium and campaign naming before many people create links." }, { title: "Use lowercase labels", copy: "Consistent casing avoids splitting reports into values such as Facebook and facebook." }, { title: "Describe the campaign", copy: "Use content and term fields only when they help distinguish meaningful variants." }, { title: "Test the destination", copy: "Open the completed URL, confirm the page loads and verify campaign values in the analytics debugging workflow." }],
    faqs: [{ question: "What does utm_source mean?", answer: "It identifies the platform, publisher or origin used in your reporting convention, such as google, linkedin or newsletter." }, { question: "What does utm_medium mean?", answer: "It identifies the broad channel or distribution method, such as cpc, paid_social, email or referral, according to your documented taxonomy." }, { question: "Should UTM values contain spaces?", answer: "The builder safely encodes spaces, but consistent lowercase labels with hyphens or underscores are easier to govern and compare." }, { question: "Does this tool store my URL?", answer: "No. The page generates the URL in your browser and does not submit the form values to GrowthLabs." }],
    related: [{ label: "Digital marketing questions", href: "/insights/questions" }, { label: "Digital marketing process", href: "/insights/digital-marketing-process" }, { label: "Conversion rate optimisation", href: "/conversion-rate-optimization-services" }],
  },
];

marketingTools.push(
  {
    slug: "conversion-rate-calculator",
    kind: "conversion-rate",
    title: "Conversion rate calculator for leads, sales and landing pages",
    shortTitle: "Conversion rate calculator",
    metaTitle: "Free Conversion Rate Calculator | Leads & Sales",
    description: "Calculate conversion rate, non-converting visits and the additional outcomes required to reach a scenario target without confusing the model with a forecast.",
    eyebrow: "Free CRO tool / Conversion scenario",
    visual: "conversion",
    answer: "Conversion rate is completed outcomes divided by eligible visits or users, multiplied by 100. Keep the numerator, denominator, period and traffic definition consistent when comparing performance.",
    formula: "Conversion rate = conversions ÷ visits × 100. Additional conversions at scenario rate = visits × scenario rate − current conversions.",
    inputs: ["Eligible visits or users", "Completed qualified conversions", "Scenario conversion rate"],
    cautions: ["Do not compare different traffic definitions or conversion events.", "A higher rate can accompany lower qualified volume or revenue.", "Bot, internal and consent-limited traffic can affect the denominator.", "A scenario output is arithmetic, not a prediction."],
    steps: [{ title: "Define the action", copy: "Use a stable qualified lead, purchase, booking or another meaningful event." }, { title: "Choose the denominator", copy: "Use eligible sessions or users consistently across the comparison." }, { title: "Model a range", copy: "Compare conservative and upside rates without presenting them as expected results." }, { title: "Check quality", copy: "Reconcile volume with sales, revenue, margin and customer quality." }],
    faqs: [{ question: "What is a good conversion rate?", answer: "There is no universal benchmark. Intent, offer, channel, device, market, event definition and business model change the useful range." }, { question: "Should I use users or sessions?", answer: "Either can be useful when its definition is documented and applied consistently. Do not silently switch denominators." }, { question: "Can conversion rate rise while performance worsens?", answer: "Yes. Traffic or conversion volume, lead quality, revenue or margin can decline while the percentage increases." }, { question: "Does this calculator predict conversions?", answer: "No. It shows the arithmetic of your inputs and a scenario rate." }],
    related: [{ label: "CRO services", href: "/conversion-rate-optimization-services" }, { label: "CRO backlog", href: "/resources/cro-experiment-backlog" }, { label: "Marketing glossary", href: "/insights/glossary" }],
  },
  {
    slug: "marketing-funnel-calculator",
    kind: "funnel-economics",
    title: "Marketing funnel calculator for leads, customers, revenue and CAC",
    shortTitle: "Marketing funnel calculator",
    metaTitle: "Marketing Funnel Calculator | Leads, Sales & CAC",
    description: "Model visits, lead rate, close rate, customer volume, revenue and customer acquisition cost across a simple measurable funnel.",
    eyebrow: "Free growth tool / Funnel economics",
    visual: "growthSystem",
    answer: "The calculator makes funnel assumptions explicit from visit to lead to customer. It is most useful when platform events are reconciled with CRM, sales and finance definitions.",
    formula: "Leads = visits × lead rate. Customers = leads × close rate. Revenue = customers × average customer revenue. CAC = marketing cost ÷ customers.",
    inputs: ["Monthly visits", "Visit-to-lead rate", "Lead-to-customer close rate", "Average revenue per customer", "Marketing cost"],
    cautions: ["A linear funnel simplifies assisted and repeat journeys.", "Use qualified leads rather than every form or message.", "Revenue is not profit and CAC may exclude important costs.", "Attribution systems can assign the same customer differently."],
    steps: [{ title: "Use one period", copy: "Keep visits, leads, customers and spend aligned to a comparable cohort or period." }, { title: "Define qualification", copy: "Document the point at which an enquiry becomes a useful lead." }, { title: "Use business records", copy: "Validate customer and revenue assumptions outside ad-platform reporting." }, { title: "Stress-test", copy: "Change one rate at a time to see which assumption drives the scenario." }],
    faqs: [{ question: "What is funnel conversion rate?", answer: "It is the proportion moving between defined stages, such as visits to leads or qualified leads to customers." }, { question: "What is CAC?", answer: "Customer acquisition cost is included acquisition spend divided by acquired customers, with the cost scope stated clearly." }, { question: "Is revenue the same as return?", answer: "No. Profitability also depends on margin, fulfilment, overhead, refunds and customer lifetime behaviour." }, { question: "Why compare stage rates?", answer: "Stage rates help locate where a system loses qualified demand instead of blaming one channel for the entire journey." }],
    related: [{ label: "Digital marketing services", href: "/services" }, { label: "Marketing brief", href: "/resources/digital-marketing-brief-template" }, { label: "Digital marketing process", href: "/insights/digital-marketing-process" }],
  },
  {
    slug: "cpc-cpm-ctr-calculator",
    kind: "campaign-metrics",
    title: "CPC, CPM and CTR calculator for paid media reporting",
    shortTitle: "CPC, CPM & CTR calculator",
    metaTitle: "Free CPC, CPM & CTR Calculator for Paid Ads",
    description: "Calculate cost per click, cost per thousand impressions and click-through rate from spend, impressions and clicks for Google, Meta and other paid media.",
    eyebrow: "Free paid media tool / Delivery metrics",
    visual: "analytics",
    answer: "CPC, CPM and CTR describe media delivery and response. They help diagnose auction and creative behaviour but do not prove lead quality, sales or profitable growth.",
    formula: "CPC = spend ÷ clicks. CPM = spend ÷ impressions × 1,000. CTR = clicks ÷ impressions × 100.",
    inputs: ["Advertising spend", "Recorded impressions", "Recorded clicks", "Currency symbol"],
    cautions: ["Platform definitions and invalid-traffic controls can differ.", "A cheap click can still be irrelevant.", "CTR comparisons require similar placements, audiences and objectives.", "Reconcile campaign metrics with qualified conversion economics."],
    steps: [{ title: "Align the period", copy: "Export spend, impressions and clicks from the same dates and scope." }, { title: "Segment responsibly", copy: "Compare like-for-like campaigns, placements, devices and audiences." }, { title: "Read the relationship", copy: "Use CPM for delivery cost, CTR for response and CPC for their combined effect." }, { title: "Go deeper", copy: "Connect the delivery layer to conversion rate, CPA, value and margin." }],
    faqs: [{ question: "What is CPC?", answer: "Cost per click is advertising spend divided by recorded clicks." }, { question: "What is CPM?", answer: "Cost per mille is advertising spend per one thousand recorded impressions." }, { question: "What is CTR?", answer: "Click-through rate is recorded clicks divided by recorded impressions, multiplied by 100." }, { question: "Which metric matters most?", answer: "None is sufficient alone. Use them to diagnose delivery, then make commercial decisions with qualified outcomes and economics." }],
    related: [{ label: "Google Ads services", href: "/google-ads-agency-in-nepal" }, { label: "Meta Ads services", href: "/meta-ads-agency-in-nepal" }, { label: "Case-study evidence", href: "/insights/case-studies" }],
  },
);

export const marketingToolBySlug = Object.fromEntries(marketingTools.map((tool) => [tool.slug, tool])) as Record<string, MarketingTool>;
