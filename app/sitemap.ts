import type { MetadataRoute } from 'next'

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

  // ── Wedding-invitation funnel ───────────────────────────────────────────
  { path: '/invitations', priority: 0.8, changeFrequency: 'monthly', images: [OG] },
  { path: '/psifiako-prosklitirio-gamou', priority: 0.8, changeFrequency: 'monthly', images: [OG] },
  { path: '/ilektroniko-prosklitirio-gamou', priority: 0.8, changeFrequency: 'monthly', images: [OG] },
  { path: '/site-gamou-rsvp', priority: 0.8, changeFrequency: 'monthly', images: [OG] },

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
      '/images/apofa-branding.png',
    ],
  },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly', images: [OG] },

  // ── Editorial / supporting content ──────────────────────────────────────
  { path: '/graphic-design-guide', priority: 0.6, changeFrequency: 'yearly', images: [OG] },
  { path: '/katastrifi-web-efarmogon', priority: 0.6, changeFrequency: 'yearly', images: [OG] },

  // ── Legal & compliance ──────────────────────────────────────────────────
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly', lastModified: LEGAL_UPDATED },
  { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly', lastModified: LEGAL_UPDATED },
  { path: '/accessibility', priority: 0.3, changeFrequency: 'yearly', lastModified: LEGAL_UPDATED },
  { path: '/dsa-compliance', priority: 0.3, changeFrequency: 'yearly', lastModified: LEGAL_UPDATED },
  { path: '/report-content', priority: 0.3, changeFrequency: 'yearly', lastModified: LEGAL_UPDATED },
]

/** Exported so other modules (and tests) can assert canonical-route parity. */
export const INDEXABLE_ROUTES = ROUTES.map((r) => r.path)

const absolute = (path: string) => (path === '/' ? `${BASE_URL}/` : `${BASE_URL}${path}`)

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency, lastModified, images }) => ({
    url: absolute(path),
    lastModified: lastModified ?? CONTENT_UPDATED,
    changeFrequency,
    priority,
    ...(images ? { images: images.map((src) => `${BASE_URL}${src}`) } : {}),
  }))
}
