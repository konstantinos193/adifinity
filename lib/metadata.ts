/**
 * Server-side translation lookup for `generateMetadata` — deliberately NOT
 * next-intl's `getTranslations`/`getLocale`.
 *
 * Why this exists
 * ---------------
 * next-intl's server APIs read request-scoped state (`headers()`), which is a
 * dynamic API. One call anywhere in a segment opts that segment — and every
 * route beneath it — out of static prerendering. Because `app/layout.tsx`
 * called `getLocale()`, *all 37 content routes* were rendered on demand and
 * served with `Cache-Control: private, no-cache, no-store`. Googlebot paid a
 * cold SSR render for every fetch, which throttles crawl rate and shows up in
 * Search Console as pages stuck on "Crawled — currently not indexed".
 *
 * The server render is Greek by definition: there is no `/en` URL space, and
 * `LocaleProvider` pins the SSR + first-client render to `el`, switching to
 * English purely client-side from localStorage. So the server-side locale is a
 * compile-time constant, and reading it from the request was never buying
 * anything — it was only forfeiting static rendering.
 *
 * Messages are imported statically here for the same reason they are in
 * `components/useTranslations.tsx`: no dynamic API, no request scope, fully
 * prerenderable.
 */
import aboutPage from '../messages/el/about_page.json'
import accessibility from '../messages/el/accessibility.json'
import brandingPage from '../messages/el/branding_page.json'
import contact from '../messages/el/contact.json'
import cookiePolicy from '../messages/el/cookie_policy.json'
import customWebAppsPage from '../messages/el/custom_web_apps_page.json'
import diafimistikaDoraPage from '../messages/el/diafimistika_dora_page.json'
import diafimistikiEteriaPage from '../messages/el/diafimistiki_eteria_page.json'
import diafimistikiPage from '../messages/el/diafimistiki_page.json'
import dianomiFylladionArtaPage from '../messages/el/dianomi_fylladion_arta_page.json'
import digitalMarketingPage from '../messages/el/digital_marketing_page.json'
import eCommercePage from '../messages/el/e_commerce_page.json'
import ektypwseisArtaPage from '../messages/el/ektypwseis_arta_page.json'
import epigrafesArtaPage from '../messages/el/epigrafes_arta_page.json'
import flyerDistributionPage from '../messages/el/flyer_distribution_page.json'
import grafistasArtaPage from '../messages/el/grafistas_arta_page.json'
import graphicDesignGuidePage from '../messages/el/graphic_design_guide_page.json'
import graphicDesignPage from '../messages/el/graphic_design_page.json'
import ilektronikoProsklitirioGamouPage from '../messages/el/ilektroniko_prosklitirio_gamou_page.json'
import landingPagesPage from '../messages/el/landing_pages_page.json'
import maintenancePage from '../messages/el/maintenance_page.json'
import marketResearchPage from '../messages/el/market_research_page.json'
import privacyPolicy from '../messages/el/privacy_policy.json'
import projectsPage from '../messages/el/projects_page.json'
import psifiakoProsklitirioGamouPage from '../messages/el/psifiako_prosklitirio_gamou_page.json'
import reportContent from '../messages/el/report_content.json'
import seo from '../messages/el/seo.json'
import siteGamouRsvpPage from '../messages/el/site_gamou_rsvp_page.json'
import webAppsPage from '../messages/el/web_apps_page.json'
import webDevelopmentArtaPage from '../messages/el/web_development_arta_page.json'
import websiteDevelopmentPage from '../messages/el/website_development_page.json'

/** The locale the server always renders. See the module doc above. */
export const SERVER_LOCALE = 'el' as const

/** OpenGraph form of {@link SERVER_LOCALE}. */
export const OG_LOCALE = 'el_GR' as const

/* eslint-disable @typescript-eslint/no-explicit-any */
const NAMESPACES: Record<string, any> = {
  about_page: aboutPage,
  accessibility,
  branding_page: brandingPage,
  contact,
  cookie_policy: cookiePolicy,
  custom_web_apps_page: customWebAppsPage,
  diafimistika_dora_page: diafimistikaDoraPage,
  diafimistiki_eteria_page: diafimistikiEteriaPage,
  diafimistiki_page: diafimistikiPage,
  dianomi_fylladion_arta_page: dianomiFylladionArtaPage,
  digital_marketing_page: digitalMarketingPage,
  e_commerce_page: eCommercePage,
  ektypwseis_arta_page: ektypwseisArtaPage,
  epigrafes_arta_page: epigrafesArtaPage,
  flyer_distribution_page: flyerDistributionPage,
  grafistas_arta_page: grafistasArtaPage,
  graphic_design_guide_page: graphicDesignGuidePage,
  graphic_design_page: graphicDesignPage,
  ilektroniko_prosklitirio_gamou_page: ilektronikoProsklitirioGamouPage,
  landing_pages_page: landingPagesPage,
  maintenance_page: maintenancePage,
  market_research_page: marketResearchPage,
  privacy_policy: privacyPolicy,
  projects_page: projectsPage,
  psifiako_prosklitirio_gamou_page: psifiakoProsklitirioGamouPage,
  report_content: reportContent,
  seo,
  site_gamou_rsvp_page: siteGamouRsvpPage,
  web_apps_page: webAppsPage,
  web_development_arta_page: webDevelopmentArtaPage,
  website_development_page: websiteDevelopmentPage,
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/** Resolves a dot path, mirroring next-intl's `t('seo.title')` addressing. */
function lookup(namespace: string, key: string): unknown {
  const messages = NAMESPACES[namespace]

  if (!messages) {
    throw new Error(
      `[metadata] Unknown namespace "${namespace}". Add its messages/el/*.json import to lib/metadata.ts.`,
    )
  }

  return key
    .split('.')
    .reduce<unknown>((node, part) => (node as Record<string, unknown>)?.[part], messages)
}

/**
 * A miss is fatal in dev/CI and loud in production. Returning the key path —
 * next-intl's default — is the worst outcome available here, because it ships
 * `<title>ektypwseis_arta_page.seo.title</title>` to Google and destroys the
 * page in search results.
 */
function missing(namespace: string, key: string): never | undefined {
  const message = `[metadata] Missing translation "${namespace}.${key}" for locale "${SERVER_LOCALE}".`
  if (process.env.NODE_ENV === 'production') {
    console.error(message)
    return undefined
  }
  throw new Error(message)
}

/**
 * Trims prose to a meta-description length Google will actually display.
 *
 * Google renders roughly 155-160 characters; beyond that the tail is dropped.
 * A blunt `slice()` also tends to cut mid-word, which puts a broken fragment in
 * the SERP snippet — so this prefers, in order: a sentence end, then a word
 * boundary, and only ever ellipsises when it had to cut mid-sentence.
 */
export function metaDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean

  const window = clean.slice(0, max + 1)

  // Prefer ending on a complete sentence if one lands reasonably deep in.
  const sentence = Math.max(window.lastIndexOf('. '), window.lastIndexOf('! '), window.lastIndexOf('; '))
  if (sentence >= max * 0.6) return clean.slice(0, sentence + 1)

  const space = window.lastIndexOf(' ')
  const cut = space > 0 ? space : max
  return clean.slice(0, cut).replace(/[,;:·\-—]$/, '') + '…'
}

/** Mirrors the shape of next-intl's `t`, including `t.raw` for arrays/objects. */
export interface ServerTranslator {
  (key: string): string
  /** Returns the value untouched — used for FAQ arrays fed into JSON-LD. */
  raw: (key: string) => unknown
}

/**
 * Drop-in replacement for `await getTranslations('<namespace>')` inside
 * `generateMetadata`, minus the dynamic-rendering opt-out.
 */
export function serverT(namespace: string): ServerTranslator {
  const t = ((key: string) => {
    const value = lookup(namespace, key)
    if (typeof value !== 'string') {
      missing(namespace, key)
      return ''
    }
    return value
  }) as ServerTranslator

  t.raw = (key: string) => {
    const value = lookup(namespace, key)
    if (value === undefined || value === null) {
      missing(namespace, key)
      return []
    }
    return value
  }

  return t
}
