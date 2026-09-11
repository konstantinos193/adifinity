import type { MetadataRoute } from 'next'

import { projects } from '@/lib/projects'
import { CONTENT_PAGES } from '@/lib/content'

const BASE_URL = 'https://adinfinity.gr'

/**
 * Bump when a route's *content* meaningfully changes.
 *
 * Deliberately a stable constant rather than `new Date()`: a sitemap whose
 * lastmod moves on every deploy is noise, and Google discounts lastmod it has
 * learned to distrust. Per-route overrides go in the `lastModified` field of
 * the route table below.
 */
const CONTENT_UPDATED = '2026-09-11'

/** Legal / boilerplate pages that changed when the policies were last reviewed. */
const LEGAL_UPDATED = '2026-08-25'

/** Last edit to `app/data/projects.json` — the only content the case studies render. */
const PROJECTS_UPDATED = '2026-09-11'

type Route = {
  path: string
  /** Relative to search intent & revenue, not a popularity contest. */
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  lastModified?: string
  /**
   * Absolute-from-root paths of images that are actually rendered *on* the page.
   *
   * Not the OG card. `<image:image>` feeds Google Images, which only indexes
   * an image it can also find in the page's HTML — `og-image.png` is never in
   * the body, yet it used to be listed under 25 different URLs, and the
   * `og-*.svg` cards under six more. That is 31 entries Google verified,
   * found nowhere, and learned to discount the file for.
   */
  images?: string[]
}

/**
 * Canonical, indexable routes only.
 *
 * Keep this list explicit so the sitemap cannot accidentally publish route
 * groups, API endpoints, or locale URLs that do not exist.
 * `__tests__/sitemap.test.ts` asserts every path here maps to a real
 * `app/**\/page.tsx` and to no redirect in next.config.mjs.
 */
const ROUTES: Route[] = [
  // ── Homepage ────────────────────────────────────────────────────────────
  {
    path: '/',
    priority: 1.0,
    changeFrequency: 'weekly',
    images: ['/images/office-showcase.png'],
  },

  // ── Core service pages ──────────────────────────────────────────────────
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/prints', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/graphic-design', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/website-development', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/digital-marketing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/branding', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/flyer-distribution', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/market-research', priority: 0.7, changeFrequency: 'monthly' },

  /*
   * ── Greek local-intent landing pages ─────────────────────────────────────
   *
   * One notch below the core service page each one supports. They were all
   * 0.9 — level with `/services` — which made the value meaningless and told
   * Google a 120-word local page mattered as much as the hub it points to.
   */
  { path: '/ektypwseis-arta', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/grafistas-arta', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/epigrafes-arta', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/diafimistika-dora', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/diafimistiki-eteria', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/diafimistiki', priority: 0.7, changeFrequency: 'monthly' },

  // ── Website-development sub-services ────────────────────────────────────
  { path: '/website-development/e-commerce', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/website-development/custom-web-apps', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/website-development/landing-pages', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/website-development/technical-seo', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/website-development/web-apps', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/website-development/maintenance', priority: 0.7, changeFrequency: 'monthly' },

  /*
   * ── Wedding-invitation funnel ─────────────────────────────────────────────
   *
   * One route only. `/psifiako-prosklitirio-gamou`, `/ilektroniko-prosklitirio-gamou`
   * and `/site-gamou-rsvp` were template clones of each other that also duplicated
   * the invitations product's own landing pages; they now 308 into `/invitations`
   * (see next.config.mjs). The product at invitations.adinfinity.gr owns the
   * wedding queries — it has the real pages, and its own sitemap.
   */
  { path: '/invitations', priority: 0.8, changeFrequency: 'monthly' },

  // ── Conversion & trust pages ────────────────────────────────────────────
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  {
    path: '/about',
    priority: 0.8,
    changeFrequency: 'yearly',
    images: ['/images/office-showcase.png', '/images/team-member-manos.jpg'],
  },
  {
    path: '/projects',
    priority: 0.8,
    changeFrequency: 'monthly',
    images: [
      '/images/asteriashome-preview.png',
      '/images/kyklosedu-preview.png',
      '/images/physioelpida-preview.png',
      '/images/smholdings-preview.png',
      '/images/lincanto-preview.png',
      '/images/apofa-branding.png',
    ],
  },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },

  // ── Editorial / supporting content ──────────────────────────────────────
  { path: '/guides', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/graphic-design-guide', priority: 0.6, changeFrequency: 'yearly' },
  /*
   * `/katastrifi-web-efarmogon` is gone — it 308s to `/website-development`
   * (see next.config.mjs). A redirecting URL in the sitemap is a soft error in
   * Search Console, so it must not be listed here.
   */

  // ── Legal & compliance ──────────────────────────────────────────────────
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly', lastModified: LEGAL_UPDATED },
  { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly', lastModified: LEGAL_UPDATED },
  { path: '/accessibility', priority: 0.3, changeFrequency: 'yearly', lastModified: LEGAL_UPDATED },
  { path: '/dsa-compliance', priority: 0.3, changeFrequency: 'yearly', lastModified: LEGAL_UPDATED },
  { path: '/report-content', priority: 0.3, changeFrequency: 'yearly', lastModified: LEGAL_UPDATED },
]

/**
 * One case-study URL per portfolio entry, generated from the same data the
 * `/projects/[slug]` route prerenders — so the sitemap cannot drift from what
 * is actually built. Before these existed the whole portfolio was a single
 * indexable URL.
 */
const PROJECT_ROUTES: Route[] = projects.map((project) => ({
  path: `/projects/${project.slug}`,
  priority: 0.6,
  changeFrequency: 'yearly',
  // Bump when app/data/projects.json changes, not when the rest of the site does.
  lastModified: PROJECTS_UPDATED,
  images: [project.image],
}))

/**
 * Guides, sub-services and vertical pages, generated from the content registry
 * so a page cannot exist without a sitemap entry or vice versa.
 */
const CONTENT_ROUTES: Route[] = CONTENT_PAGES.map((page) => ({
  path: page.path,
  priority: page.kind === 'guide' ? 0.6 : 0.7,
  changeFrequency: page.kind === 'guide' ? 'yearly' : 'monthly',
  lastModified: page.dateModified ?? CONTENT_UPDATED,
}))

const ALL_ROUTES = [...ROUTES, ...CONTENT_ROUTES, ...PROJECT_ROUTES]

/** Exported so other modules (and tests) can assert canonical-route parity. */
export const INDEXABLE_ROUTES = ALL_ROUTES.map((r) => r.path)

const absolute = (path: string) => (path === '/' ? `${BASE_URL}/` : `${BASE_URL}${path}`)

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_ROUTES.map(({ path, priority, changeFrequency, lastModified, images }) => ({
    url: absolute(path),
    lastModified: lastModified ?? CONTENT_UPDATED,
    changeFrequency,
    priority,
    // encodeURI, because portfolio filenames contain spaces and Greek letters
    // ("/images/box-bijou-logo-arta.png", "/images/apofa-logo-arta.png") and a raw
    // space makes the sitemap entry an invalid URL.
    ...(images ? { images: images.map((src) => encodeURI(`${BASE_URL}${src}`)) } : {}),
  }))
}
