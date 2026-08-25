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
- Agency, SEO, advertising, social, website, hotel, travel and Kathmandu landing pages: `WebPage`, `BreadcrumbList`, primary `Service`, `BusinessAudience`, `ServiceChannel`, `OfferCatalog`, `Offer` and nested `Service` entities.
- Social packages: `CollectionPage`, `BreadcrumbList`, three transparent `Offer` scopes and nested `Service` entities. No price is emitted because no approved rate has been supplied.
- About: `AboutPage` and `BreadcrumbList` connected to the organization and person.
- Contact: `ContactPage` and `BreadcrumbList` connected to the organization.
- Insights index: `CollectionPage`, `BreadcrumbList` and `ItemList` for the ten real launch resources.
- Insight articles: `WebPage`, `Article` and `BreadcrumbList`, connected to the global Rohan Neure author and GrowthLabs publisher entities with visible publication/review dates and primary sources.
- Pages with visible authored questions and answers: matching `FAQPage`, `Question` and `Answer` entities. Google currently limits FAQ rich-result visibility, so this markup describes content without promising a search enhancement.
- Privacy: `WebPage`, `BreadcrumbList` and a maintained modification date.

## Intentionally excluded

- `Product`: GrowthLabs currently offers custom professional-service scopes, not fixed purchasable products with approved price and availability data.
- `Review` and `AggregateRating`: no permissioned, attributable, visibly published client reviews and ratings were supplied. Search Console screenshots are performance evidence, not reviews.
- invented price ranges, awards, client names, aggregate outcomes or guaranteed results.

If real reviews are added later, publish the permissioned review text, reviewer identity, date and rating visibly before considering matching markup. Do not scrape or repackage Google Business Profile ratings, and do not expect self-serving business review stars.

## Validation

After each production deployment:

1. Parse every JSON-LD block and confirm all `@id` references use the canonical domain.
2. Use [Schema.org Validator](https://validator.schema.org/) for the complete graph, including `Service` and `OfferCatalog` vocabulary.
3. Use [Google Rich Results Test](https://search.google.com/test/rich-results) only for Google-supported search features. A valid generic `Service` entity may correctly return no eligible Google rich result.
4. Confirm structured facts still match the visible page, Google Business Profile and approved business information.
