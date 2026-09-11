/**
 * Verified company facts — the single source of truth for every number the site
 * states about itself.
 *
 * Why this exists
 * ---------------
 * The same business was described three different ways depending on which page
 * you landed on:
 *
 *   messages/el/hero.json          "50+"  Ικανοποιημένοι Πελάτες
 *   messages/el/homepage.json      "100+" επιχειρήσεις
 *   app/components/ProofBar.tsx    "100+" Clients        (hard-coded)
 *   app/services/layout.tsx        "100+" ικανοποιημένοι πελάτες (in the meta description)
 *   messages/en/seo.json           "100+" clients since 2013
 *   .../website_development_page   "3+"   live projects
 *
 * A visitor who reads two pages sees the company contradict itself, and a
 * contradiction in the one claim a business makes about its own size is a
 * straightforward trust problem — the kind that shows up as impressions without
 * clicks. Google's guidance on people-first content is explicit that claims
 * should be verifiable rather than inflated for search.
 *
 * The rule: every figure below is derived from data that exists on this site, so
 * a visitor can check it. `projectCount` counts the case studies actually
 * published in `app/data/projects.json`; `liveSiteCount` counts the ones with a
 * reachable URL; `yearsOperating` counts from the founding date on the About
 * page. Nothing here is a marketing round-up.
 *
 * If a real, defensible client total exists, add it as `clientCount` and use it.
 * Until then the site cites the portfolio it can show, not a number nobody can
 * check.
 */
// Via `lib/projects`, not the raw JSON: that module is the declared single
// accessor for `app/data/projects.json`, and the file is `{ projects, categories }`
// rather than a bare array — reading it directly here produced a build-time
// `filter is not a function`.
import { projects } from '@/lib/projects'

/** October 2013 — stated on the About page and in the company history timeline. */
export const FOUNDED_YEAR = 2013
export const FOUNDED_MONTH = 10

/**
 * Case studies published at `/projects/[slug]`.
 *
 * Counted, not asserted: this is exactly how many the visitor can click through
 * and inspect. It replaces the "3+ live projects" claim on the web-development
 * page, which was already stale.
 */
export const projectCount: number = projects.length

/** Portfolio entries with a reachable live URL. */
export const liveSiteCount: number = projects.filter((p) => p.liveUrl).length

/**
 * Full years of operation.
 *
 * Recomputed per build rather than written into copy, so "12 χρόνια" cannot go
 * stale the way "νεοσύστατη" did — the About page called the company
 * newly-founded while its own timeline started in 2013.
 */
export function yearsOperating(now: Date = new Date()): number {
  const years = now.getFullYear() - FOUNDED_YEAR
  // Not yet past the founding month this year, so the anniversary hasn't landed.
  return now.getMonth() + 1 >= FOUNDED_MONTH ? years : years - 1
}

/**
 * Round *down* to a defensible "N+" floor, never up.
 *
 * 32 projects becomes "30+", not "50+". The claim stays true as the portfolio
 * grows and is checkable against the page it links to.
 */
export function floorClaim(value: number, step = 10): number {
  return Math.max(step, Math.floor(value / step) * step)
}

/**
 * Figures the company asserts about work that predates the portfolio.
 *
 * These are not derivable from anything in the repo — 32 case studies are
 * published, but the business has been trading since 2013 and most of that work
 * was never written up. They are kept here, as constants, for one reason: so the
 * site states them *once*.
 *
 * The values chosen are the conservative end of what the site already claimed.
 * Clients appeared as both "50+" (homepage hero) and "100+" (four meta
 * descriptions and a benefit blurb); 50+ is kept, because if the larger figure
 * is true the smaller one is true as well, and the reverse is not. Completed
 * projects appeared as both "200+" (homepage hero) and "100+"
 * (`diafimistiki_eteria_page`); 200+ is kept as the primary, most-visible claim.
 *
 * Adjust these if the business has firmer numbers — but adjust them *here*, and
 * they change everywhere at once.
 */
export const CLIENTS_CLAIM = 50
export const COMPLETED_PROJECTS_CLAIM = 200

/** Ready-made values for copy and metadata. */
export const COMPANY_FACTS = {
  foundedYear: FOUNDED_YEAR,
  get years() {
    return yearsOperating()
  },
  /** Case studies published at /projects/[slug] — counted, not asserted. */
  get projects() {
    return projectCount
  },
  get projectsFloor() {
    return floorClaim(projectCount)
  },
  /** Portfolio entries with a reachable live URL — counted, not asserted. */
  get liveSites() {
    return liveSiteCount
  },
  clients: CLIENTS_CLAIM,
  completedProjects: COMPLETED_PROJECTS_CLAIM,
} as const

/* ------------------------------------------------------------------ */
/* Prices                                                              */
/* ------------------------------------------------------------------ */

/**
 * Canonical starting prices, in euros. The pricing page is the reference; every
 * other mention on the site must resolve to these.
 *
 * Why this exists
 * ---------------
 * The 2026-09-11 audit found the same service priced three ways: a logo was
 * "από €150" in the graphic-design guide FAQ, "από €250" on the branding page
 * and part of a "από €300" package on the pricing page; a website was "από
 * €800" in the web-development FAQ and "από €1.200" on the pricing page; social
 * media management was "από €200/μήνα" on one page and "από €250/μήνα" on
 * another. A prospect who reads two pages sees the company contradict itself
 * on the one thing they came to check.
 *
 * Message files and FAQ arrays now carry `{price:key}` placeholders (see
 * {@link withFacts}) rather than digits, so a price changes in exactly one
 * place. Where two figures conflicted, the *pricing page* figure won — it is the
 * page a visitor is sent to for the answer — except for the logo, where the
 * standalone "από €250" on the branding page is kept as the logo-only price and
 * the €300 "Βασικό" package (logo + cards) stays a package.
 *
 * Verify these against what the business actually invoices before changing
 * them; they are stated here as found on the site, not re-priced.
 */
export const PRICES = {
  // Design & branding
  logo: 250,
  brandBasicPackage: 300,
  brandIdentity: 700,
  brandPremium: 1400,
  // Websites
  websiteStarter: 1200,
  websiteBusiness: 2500,
  eshop: 4500,
  // Printing
  printsSmall: 80,
  printsMedium: 200,
  printsLarge: 450,
  businessCardsPer100: 5,
  flyersPer500: 20,
  bannerPerSqm: 30,
  // Flyer distribution
  distributionLocal: 150,
  distributionExtended: 400,
  distributionRegional: 900,
  // Market research
  researchBasic: 450,
  researchExtended: 950,
  researchAudit: 2200,
  // Digital marketing (management fee per month, ad spend excluded)
  socialMonthly: 250,
  adsMonthly: 300,
  fullDigitalMonthly: 350,
  adSpendMin: 150,
  adSpendMax: 300,
  // Signage
  signageAcrylicPerSqm: 50,
  signageLed: 150,
  signageNeon: 200,
  signageInstallIncludedFrom: 200,
  // Promotional gifts (per item, in quantity)
  promoGiftMin: 0.5,
} as const

export type PriceKey = keyof typeof PRICES

/**
 * Greek-locale euro formatting: `€1.200`, `€0,50`, `€250`.
 *
 * Thousands take a dot and decimals a comma, which is how every price on the
 * site was already typed by hand.
 */
export function euro(value: number): string {
  const [whole, fraction] = value.toFixed(value % 1 === 0 ? 0 : 2).split('.')
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `€${grouped}${fraction ? `,${fraction}` : ''}`
}

/**
 * Substitutes the fact placeholders in a copy string.
 *
 * Supports `{years}`, `{projects}`, `{projectsFloor}`, `{liveSites}`,
 * `{clients}`, `{completedProjects}`, `{founded}` and `{price:<key>}` for any
 * key of {@link PRICES}. Message files carry the placeholder rather than the
 * digits, so a number can never be updated on one page and missed on another.
 *
 * An unknown price key is left in place verbatim so it is visible in the
 * rendered page and fails `__tests__/facts.test.ts`, rather than silently
 * rendering an empty price.
 */
export function withFacts(template: string): string {
  return template
    .replace(/\{years\}/g, String(COMPANY_FACTS.years))
    .replace(/\{projectsFloor\}/g, String(COMPANY_FACTS.projectsFloor))
    .replace(/\{projects\}/g, String(COMPANY_FACTS.projects))
    .replace(/\{liveSites\}/g, String(COMPANY_FACTS.liveSites))
    .replace(/\{completedProjects\}/g, String(COMPANY_FACTS.completedProjects))
    .replace(/\{clients\}/g, String(COMPANY_FACTS.clients))
    .replace(/\{founded\}/g, String(COMPANY_FACTS.foundedYear))
    .replace(/\{price:(\w+)\}/g, (match, key: string) =>
      key in PRICES ? euro(PRICES[key as PriceKey]) : match,
    )
}

/**
 * {@link withFacts} applied to every string inside a message tree.
 *
 * Message namespaces are run through this once, when they are loaded (see
 * `components/useTranslations.tsx`, `lib/metadata.ts`, `i18n/request.ts`), so
 * a FAQ answer or a hero paragraph can carry `{price:logo}` without each
 * rendering component having to remember to substitute it.
 */
export function withFactsDeep<T>(value: T): T {
  if (typeof value === 'string') return withFacts(value) as T
  if (Array.isArray(value)) return value.map(withFactsDeep) as T
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) out[k] = withFactsDeep(v)
    return out as T
  }
  return value
}
