# Structured-data strategy

The site uses one connected JSON-LD entity graph. Markup describes visible, supplied facts; it is not a place to add claims, prices, ratings or reviews that the page cannot substantiate.

## Global graph

Every public page includes:

- `WebSite` for `https://neurerohan.com.np/`;
- `LocalBusiness` and `ProfessionalService` for GrowthLabs, including the Bhaktapur address, map, verified coordinates, opening hours, contact points, founder, service area, logo and service catalogue reference;
- `Person` for Rohan Neure, including founder relationship, role, profile image, public profiles and supplied expertise.

Schema.org has no dedicated `DigitalMarketingAgency` or `SEOExpert` type. The accurate model is a described `LocalBusiness` plus page-level `Service` entities, and a `Person` who provides the SEO-expert service.

## Page graphs

- Home: `WebPage` about GrowthLabs and Rohan.
- Services: `CollectionPage`, `BreadcrumbList`, `OfferCatalog`, `Offer` and nested `Service` entities.
- Agency, SEO, advertising, analytics, content, technical SEO, social, website, hotel, travel and Kathmandu landing pages: `WebPage`, `BreadcrumbList`, primary `Service`, `BusinessAudience`, `ServiceChannel`, `OfferCatalog`, `Offer` and nested `Service` entities.
- Social packages: `CollectionPage`, `BreadcrumbList`, three transparent `Offer` scopes and nested `Service` entities. No price is emitted because no approved rate has been supplied.
- About: `AboutPage` and `BreadcrumbList` connected to the organization and person.
- Contact: `ContactPage` and `BreadcrumbList` connected to the organization.
- Insights index and case-study library: `CollectionPage`, `BreadcrumbList` and `ItemList` for the visible resources and supplied evidence captures.
- Insight articles: `WebPage`, `Article` and `BreadcrumbList`, connected to the global Rohan Neure author and GrowthLabs publisher entities with visible publication/review dates and primary sources.
- Glossary: `DefinedTermSet`, nested `DefinedTerm` entities, `WebPage`, and `BreadcrumbList`, matching the visible definitions.
- Questions library: `FAQPage`, `WebPage`, and `BreadcrumbList`, matching the visible answers.
- Downloadable resource pages: `CreativeWork`, `WebPage`, and `BreadcrumbList` describing the visible checklist or template and repository-hosted CSV.
- Browser tools: `SoftwareApplication`, `WebPage`, `FAQPage`, and `BreadcrumbList`. The tools are free, execute locally in the browser, expose their assumptions, and make no performance guarantee.
- Pages with visible authored questions and answers: matching `FAQPage`, `Question` and `Answer` entities. Google currently limits FAQ rich-result visibility, so this markup describes content without promising a search enhancement.
- Privacy: `WebPage`, `BreadcrumbList` and a maintained modification date.

## Intentionally excluded

- `Product`: GrowthLabs currently offers custom professional-service scopes and free utilities, not fixed purchasable products with approved price and availability data. Free browser tools use the more accurate `SoftwareApplication` type.
- `Review` and `AggregateRating`: no permissioned, attributable, visibly published client reviews and ratings were supplied. Search Console screenshots are performance evidence, not reviews.
- invented price ranges, awards, client names, aggregate outcomes or guaranteed results.

If real reviews are added later, publish the permissioned review text, reviewer identity, date and rating visibly before considering matching markup. Do not scrape or repackage Google Business Profile ratings, and do not expect self-serving business review stars.

## Validation

After each production deployment:

1. Parse every JSON-LD block and confirm all `@id` references use the canonical domain.
2. Use [Schema.org Validator](https://validator.schema.org/) for the complete graph, including `Service` and `OfferCatalog` vocabulary.
3. Use [Google Rich Results Test](https://search.google.com/test/rich-results) only for Google-supported search features. A valid generic `Service` entity may correctly return no eligible Google rich result.
4. Confirm structured facts still match the visible page, Google Business Profile and approved business information.
