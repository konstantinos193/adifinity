import type { MetadataRoute } from 'next'

import { projects } from '@/lib/projects'

const BASE_URL = 'https://adinfinity.gr'

/**
 * Bump when a route's *content* meaningfully changes.
 *
 * Deliberately a stable constant rather than `new Date()`: a sitemap whose
 * lastmod moves on every deploy is noise, and Google discounts lastmod it has
 * learned to distrust. Per-route overrides go in the `lastModified` field of
 * the route table below.
 */
const CONTENT_UPDATED = '2026-08-17'

/** Legal / boilerplate pages that changed when the policies were last reviewed. */
const LEGAL_UPDATED = '2026-06-29'

type Route = {
  path: string
  /** Relative to search intent & revenue, not a popularity contest. */
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  lastModified?: string
  /** Absolute-from-root image paths surfaced in Google Images. */
  images?: string[]
}

const OG = '/images/og-image.png'

/**
 * Canonical, indexable routes only.
 *
 * Keep this list explicit so the sitemap cannot accidentally publish route
 * groups, API endpoints, or locale URLs that do not exist.
 */
const ROUTES: Route[] = [
  // ── Homepage ────────────────────────────────────────────────────────────
  {
    path: '/',
    priority: 1.0,
    changeFrequency: 'weekly',
    images: [OG, '/images/office-showcase.png'],
  },

  // ── Greek local-intent landing pages (primary local SEO surface) ────────
  { path: '/diafimistiki-eteria', priority: 0.9, changeFrequency: 'monthly', images: [OG] },
  { path: '/diafimistiki', priority: 0.9, changeFrequency: 'monthly', images: [OG] },
  { path: '/ektypwseis-arta', priority: 0.9, changeFrequency: 'monthly', images: [OG] },
  { path: '/grafistas-arta', priority: 0.9, changeFrequency: 'monthly', images: [OG] },
  { path: '/epigrafes-arta', priority: 0.9, changeFrequency: 'monthly', images: [OG] },
  { path: '/web-development-arta', priority: 0.9, changeFrequency: 'monthly', images: [OG] },
  { path: '/dianomi-fylladion-arta', priority: 0.9, changeFrequency: 'monthly', images: [OG] },
  { path: '/diafimistika-dora', priority: 0.8, changeFrequency: 'monthly', images: [OG] },

  // ── Core service pages ──────────────────────────────────────────────────
  { path: '/services', priority: 0.9, changeFrequency: 'monthly', images: [OG] },
  { path: '/prints', priority: 0.9, changeFrequency: 'monthly', images: [OG] },
  { path: '/graphic-design', priority: 0.9, changeFrequency: 'monthly', images: [OG] },
  {
    path: '/website-development',
    priority: 0.9,
    changeFrequency: 'monthly',
    images: [OG, '/images/og-web-development.svg'],
  },
  { path: '/digital-marketing', priority: 0.9, changeFrequency: 'monthly', images: [OG] },
  { path: '/branding', priority: 0.9, changeFrequency: 'monthly', images: [OG] },
  { path: '/flyer-distribution', priority: 0.8, changeFrequency: 'monthly', images: [OG] },
  { path: '/market-research', priority: 0.7, changeFrequency: 'monthly', images: [OG] },

  // ── Website-development sub-services ────────────────────────────────────
  {
    path: '/website-development/e-commerce',
    priority: 0.7,
    changeFrequency: 'monthly',
    images: ['/images/og-ecommerce.svg'],
  },
  {
    path: '/website-development/custom-web-apps',
    priority: 0.7,
    changeFrequency: 'monthly',
    images: ['/images/og-custom-web-apps.svg'],
  },
  {
    path: '/website-development/landing-pages',
    priority: 0.7,
    changeFrequency: 'monthly',
    images: ['/images/og-landing-pages.svg'],
  },
  {
    path: '/website-development/technical-seo',
    priority: 0.7,
    changeFrequency: 'monthly',
    images: ['/images/og-technical-seo.svg'],
  },
  {
    path: '/website-development/web-apps',
    priority: 0.7,
    changeFrequency: 'monthly',
    images: ['/images/og-web-apps.svg'],
  },
  {
    path: '/website-development/maintenance',
    priority: 0.7,
    changeFrequency: 'monthly',
    images: ['/images/og-maintenance.svg'],
  },

  /*
   * ── Wedding-invitation funnel ─────────────────────────────────────────────
   *
   * One route only. `/psifiako-prosklitirio-gamou`, `/ilektroniko-prosklitirio-gamou`
   * and `/site-gamou-rsvp` were template clones of each other that also duplicated
   * the invitations product's own landing pages; they now 308 into `/invitations`
   * (see next.config.mjs). The product at invitations.adinfinity.gr owns the
   * wedding queries — it has the real pages, and its own sitemap.
   */
  { path: '/invitations', priority: 0.8, changeFrequency: 'monthly', images: [OG] },

  // ── Conversion & trust pages ────────────────────────────────────────────
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly', images: [OG] },
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
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly', images: [OG] },

  // ── Editorial / supporting content ──────────────────────────────────────
  { path: '/graphic-design-guide', priority: 0.6, changeFrequency: 'yearly', images: [OG] },
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
  images: [project.image],
}))

const ALL_ROUTES = [...ROUTES, ...PROJECT_ROUTES]

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
    // ("/images/box biju.png", "/images/Α.Π.Ο.Φ.Α-Photoroom.png") and a raw
    // space makes the sitemap entry an invalid URL.
    ...(images ? { images: images.map((src) => encodeURI(`${BASE_URL}${src}`)) } : {}),
  }))
}
