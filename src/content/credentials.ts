export type CredentialKey = "googleAds" | "metaAds" | "semrush" | "hubspot" | "amazonAds" | "googleReviews";

export type Credential = {
  key: CredentialKey;
  name: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  kind: "platform" | "review";
};

export const credentials: Record<CredentialKey, Credential> = {
  googleAds: { key: "googleAds", name: "Certified Google Ads Partner", src: "/images/Agency/Certified Google Ads Partner.jpg", width: 1200, height: 630, alt: "GrowthLabs Certified Google Ads Partner credential artwork", caption: "Certified Google Ads Partner credential supplied and confirmed by GrowthLabs founder Rohan Neure.", kind: "platform" },
  metaAds: { key: "metaAds", name: "Certified Meta Ads Partner", src: "/images/Agency/Certified Meta Ads Partner.jpg", width: 900, height: 550, alt: "GrowthLabs Certified Meta Ads Partner credential artwork", caption: "Certified Meta Ads Partner credential supplied and confirmed by GrowthLabs founder Rohan Neure.", kind: "platform" },
  semrush: { key: "semrush", name: "Semrush Certified Agency Partner", src: "/images/Agency/Semrush Certified Agency Partner.jpeg", width: 970, height: 459, alt: "GrowthLabs Semrush Certified Agency Partner credential artwork", caption: "Semrush Certified Agency Partner credential supplied and confirmed by GrowthLabs founder Rohan Neure.", kind: "platform" },
  hubspot: { key: "hubspot", name: "Certified HubSpot Agency Partner", src: "/images/Agency/Certified HubSpot Agency Partner.png", width: 840, height: 381, alt: "GrowthLabs Certified HubSpot Agency Partner credential artwork", caption: "Certified HubSpot Agency Partner credential supplied and confirmed by GrowthLabs founder Rohan Neure.", kind: "platform" },
  amazonAds: { key: "amazonAds", name: "Certified Amazon Ads Partner", src: "/images/Agency/Certified Amazon Ads Partner.png", width: 1200, height: 628, alt: "GrowthLabs Certified Amazon Ads Partner credential artwork", caption: "Certified Amazon Ads Partner credential supplied and confirmed by GrowthLabs founder Rohan Neure.", kind: "platform" },
  googleReviews: { key: "googleReviews", name: "5.0 Google Reviews rating", src: "/images/Agency/Google Reviews.jpg", width: 1121, height: 540, alt: "GrowthLabs Google Reviews artwork showing a 5.0 rating", caption: "GrowthLabs Google Reviews artwork displays a 5.0 rating; no review-count claim is added without a supplied count.", kind: "review" },
};

export const credentialKeysBySlug: Partial<Record<string, readonly CredentialKey[]>> = {
  "hotel-digital-marketing-agency": ["googleAds", "metaAds", "googleReviews"],
  "social-media-marketing-agency-in-nepal": ["metaAds", "googleReviews"],
  "web-design-company-in-nepal": ["hubspot", "semrush"],
  "seo-for-travel-agency": ["semrush", "googleReviews"],
  "advertising-agency-in-nepal": ["googleAds", "metaAds", "amazonAds"],
  "google-ads-agency-in-nepal": ["googleAds", "amazonAds", "googleReviews"],
  "local-seo-services-in-nepal": ["semrush", "googleReviews"],
  "digital-marketing-agency-in-kathmandu": ["googleAds", "metaAds", "semrush", "googleReviews"],
  "meta-ads-agency-in-nepal": ["metaAds", "googleReviews"],
  "conversion-rate-optimization-services": ["hubspot", "googleAds"],
  "seo-audit-services-in-nepal": ["semrush", "googleReviews"],
  "technical-seo-services-in-nepal": ["semrush"],
  "analytics-conversion-tracking-services": ["googleAds", "metaAds", "hubspot"],
  "content-marketing-agency-in-nepal": ["semrush", "hubspot"],
};

export const organizationAwards = [credentials.googleAds.name, credentials.metaAds.name, credentials.semrush.name, credentials.hubspot.name, credentials.amazonAds.name] as const;
