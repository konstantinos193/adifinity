import type { MetadataRoute } from 'next'

const BASE_URL = 'https://adinfinity.gr'

/**
 * Canonical, indexable routes only.
 *
 * Keep this list explicit so the sitemap cannot accidentally publish route
 * groups, API endpoints, or locale URLs that do not exist. Add `lastModified`
 * only when it comes from a real content timestamp.
 */
export const INDEXABLE_ROUTES = [
  '/',
  '/about',
  '/accessibility',
  '/contact',
  '/cookie-policy',
  '/dsa-compliance',
  '/flyer-distribution',
  '/graphic-design',
  '/invitations',
  '/katastrifi-web-efarmogon',
  '/market-research',
  '/pricing',
  '/prints',
  '/privacy-policy',
  '/projects',
  '/report-content',
  '/services',
  '/website-development',
  '/website-development/custom-web-apps',
  '/website-development/e-commerce',
  '/website-development/landing-pages',
  '/website-development/maintenance',
  '/website-development/technical-seo',
  '/website-development/web-apps',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_ROUTES.map((route) => ({
    url: route === '/' ? `${BASE_URL}/` : `${BASE_URL}${route}`,
  }))
}
