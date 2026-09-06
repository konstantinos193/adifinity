/**
 * One entity graph for the whole site.
 *
 * Why this exists
 * ---------------
 * Every service route used to emit its own free-standing `ProfessionalService`,
 * `LocalBusiness` and `Organization` blocks — none of them carrying an `@id`,
 * and several carrying *contradictory* facts (the graphic-design page advertised
 * `facebook.com/adinfinity.gr` and `instagram.com/adinfinity.gr`; the real
 * profiles in `app/layout.tsx` are `facebook.com/1.adinfinity` and
 * `instagram.com/adinfinityads/`). A single page therefore described four
 * different businesses at four different social addresses.
 *
 * Google reconciles that by picking one entity and discarding the rest, which is
 * the opposite of what a local business wants on queries like
 * "διαφημιστικό γραφείο" or "διαφημιστική εταιρεία" — exactly the terms that
 * accumulate impressions and zero clicks in Search Console.
 *
 * The rule here: `app/layout.tsx` owns the business entity, once, under
 * {@link ORG_ID}. Every other node in the site *references* it rather than
 * restating it. A `Service` says who provides it with `{ '@id': ORG_ID }` and
 * nothing else about the company — no address, no telephone, no `sameAs`. Facts
 * live in exactly one place, so they cannot drift apart again.
 */

export const SITE_URL = 'https://adinfinity.gr'

/** The single business entity, defined in `app/layout.tsx`. Reference, never redefine. */
export const ORG_ID = `${SITE_URL}/#organization`

/** Reference to the one business entity — the only shape a provider should take. */
export const ORG_REF = { '@id': ORG_ID } as const

/** Arta first, then the region actually served. Matches the root Organization. */
export const AREA_SERVED = [
  { '@type': 'City', name: 'Άρτα' },
  { '@type': 'AdministrativeArea', name: 'Ήπειρος' },
  { '@type': 'Country', name: 'Greece' },
] as const

/* ------------------------------------------------------------------ */
/* Breadcrumbs                                                         */
/* ------------------------------------------------------------------ */

/** One level of a breadcrumb trail. The final crumb is the current page. */
export interface Crumb {
  name: string
  /** Route-absolute path, e.g. `/website-development`. Omit on the current page. */
  path?: string
}

/**
 * A real, multi-level BreadcrumbList for one route.
 *
 * The root layout previously emitted a *single-item* breadcrumb — just
 * "Αρχική" — on all 67 URLs. Search Console counted those as 10 valid
 * breadcrumb items while Search Appearance reported "No data", because a
 * one-item trail describes no hierarchy and Google will not render it.
 *
 * Google reads the trail from the site root, so `Αρχική` is prepended here and
 * must not be passed in. The last crumb is the current page and deliberately
 * carries no `item` URL, per Google's breadcrumb guidance.
 */
export function breadcrumbSchema(trail: Crumb[]) {
  const items: Crumb[] = [{ name: 'Αρχική', path: '/' }, ...trail]

  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${trail[trail.length - 1]?.path ?? '/'}#breadcrumb`,
    itemListElement: items.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      // The current page (last crumb) omits `item` — it is where the user
      // already is, and Google's own examples leave it off.
      ...(i < items.length - 1 && crumb.path
        ? { item: crumb.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${crumb.path}` }
        : {}),
    })),
  }
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export interface ServiceInput {
  /** Route-absolute path this service is sold on, e.g. `/graphic-design`. */
  path: string
  name: string
  description: string
  /** Free-text service categories. Kept short and honest — not a keyword dump. */
  serviceType?: string[]
  /** Individual deliverables. Rendered as an OfferCatalog when present. */
  offers?: { name: string; description?: string }[]
  /** Only set where the page publicly commits to a figure. */
  priceRange?: string
}

/**
 * A `Service` node bound to the one business entity.
 *
 * Note what is *absent*: address, geo, telephone, sameAs, paymentAccepted. Those
 * belong to the organisation, are stated once in the root layout, and are
 * reachable from here through `provider`. Repeating them per page is how the
 * contradictory social profiles got in.
 */
export function serviceSchema(input: ServiceInput) {
  const { path, name, description, serviceType, offers, priceRange } = input

  return {
    '@type': 'Service',
    '@id': `${SITE_URL}${path}#service`,
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: ORG_REF,
    areaServed: AREA_SERVED,
    ...(serviceType?.length ? { serviceType } : {}),
    ...(priceRange ? { offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR' }, description: priceRange } } : {}),
    ...(offers?.length
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name,
            itemListElement: offers.map((offer) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: offer.name,
                ...(offer.description ? { description: offer.description } : {}),
                provider: ORG_REF,
              },
            })),
          },
        }
      : {}),
  }
}

/* ------------------------------------------------------------------ */
/* WebPage + page graph                                                */
/* ------------------------------------------------------------------ */

export interface PageGraphInput {
  /** Route-absolute path, e.g. `/prints`. */
  path: string
  /** Breadcrumb trail *below* the site root — "Αρχική" is added automatically. */
  breadcrumb: Crumb[]
  /** The commercial service this page sells, if any. */
  service?: ServiceInput
  /** A pre-built FAQPage node from `faqPageSchema`, minus its `@context`. */
  faq?: Record<string, unknown>
  /** Extra nodes (Article, ItemList, …) already shaped as schema.org objects. */
  extra?: Record<string, unknown>[]
}

/**
 * The single JSON-LD block a route should render.
 *
 * One `<script>` carrying one `@graph`, every node cross-referenced by `@id`.
 * That is the shape Google's own documentation uses, and it lets the crawler
 * resolve "this Service is provided by that Organization, and this page is
 * about it" without guessing.
 */
export function pageGraph(input: PageGraphInput) {
  const { path, breadcrumb, service, faq, extra } = input
  const url = `${SITE_URL}${path}`

  const nodes: Record<string, unknown>[] = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: ORG_REF,
      breadcrumb: { '@id': `${url}#breadcrumb` },
      inLanguage: 'el-GR',
    },
    breadcrumbSchema(breadcrumb),
  ]

  if (service) nodes.push(serviceSchema(service))
  if (faq) nodes.push(faq)
  if (extra?.length) nodes.push(...extra)

  return { '@context': 'https://schema.org', '@graph': nodes }
}

/** Serialises a page graph for `dangerouslySetInnerHTML`. */
export function jsonLd(value: unknown) {
  return { __html: JSON.stringify(value) }
}
