import type { MetadataRoute } from 'next'

const BASE_URL = 'https://adinfinity.gr'

/**
 * AI search / answer-engine crawlers we explicitly welcome.
 *
 * These are the bots that *cite* pages inside AI answers (as opposed to
 * training-only scrapers). Listing them explicitly keeps adinfinity eligible
 * for AI-surfaced local queries such as "διαφημιστική εταιρεία Άρτα".
 */
const AI_SEARCH_AGENTS = [
  'OAI-SearchBot', // ChatGPT search index
  'ChatGPT-User', // ChatGPT browsing on a user's behalf
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'Google-Extended', // Gemini / AI Overviews grounding
  'Applebot-Extended',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // NOTE: /_next/ is deliberately NOT disallowed. Googlebot must fetch
        // the build's CSS/JS to render the page; blocking it makes pages look
        // unstyled/empty to the renderer and suppresses indexing.
        disallow: [
          '/api/',
          '/.git/',
        ],
      },
      // Explicit allow so AI answer engines can read and cite the site.
      ...AI_SEARCH_AGENTS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'],
      })),
    ],
    // `host` is intentionally omitted — it is a non-standard directive Google
    // ignores. The apex host is declared via canonical tags + 308 redirects.
    // Image entries are embedded inline in sitemap.xml via the <image:image>
    // extension, so a separate image sitemap is not needed.
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
