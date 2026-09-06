let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (_e) {
  // ignore error
}

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
  },
  webpack: (config, { isServer }) => {
    // Reduce bundle size by optimizing imports
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Enable tree shaking
    config.optimization = {
      ...config.optimization,
      usedExports: true,
      sideEffects: false,
      moduleIds: 'deterministic',
    };
    
    return config;
  },
  async redirects() {
    return [
      // Protocol + www normalization now handled by middleware.ts at the edge.
      // These application-level redirects handle URL consolidation & old routes only.

      // Redirect old Joomla URLs with query parameters to homepage
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'option',
            value: 'com_k2',
          },
        ],
        permanent: true,
        destination: 'https://adinfinity.gr',
      },
      /*
       * Wedding-funnel consolidation.
       *
       * These three routes were spun from one 220-line template — identical
       * markup, differing only in an i18n key prefix and four icons — and each
       * duplicated a properly-built landing page on the invitations product at
       * invitations.adinfinity.gr (one of them, `/ilektroniko-prosklitirio-gamou`,
       * shared its slug verbatim). Nine pages across the two hosts competed for
       * the same Greek queries; Google resolved that by declining to index the
       * product's own homepage ("Crawled - currently not indexed").
       *
       * The agency site keeps exactly one wedding page — `/invitations` — as the
       * service entry that hands off to the product. Everything else folds into it.
       */
      {
        source: '/psifiako-prosklitirio-gamou',
        destination: '/invitations',
        permanent: true,
      },
      {
        source: '/ilektroniko-prosklitirio-gamou',
        destination: '/invitations',
        permanent: true,
      },
      {
        source: '/site-gamou-rsvp',
        destination: '/invitations',
        permanent: true,
      },
      /*
       * `/katastrifi-web-efarmogon` folds into `/website-development`.
       *
       * Three URLs targeted "κατασκευή web εφαρμογών" (47 impressions, 0 clicks
       * over 16 months): this one, `/website-development` — whose title is
       * literally "Κατασκευή Web Εφαρμογών & E-shop" — and
       * `/website-development/web-apps`. This was the thinnest by a wide margin:
       * ~130 words of unique body copy, 86% token overlap with
       * `/website-development` against a ~48% shared-chrome baseline, and every
       * one of its headings a subset of that page's. It has never recorded a
       * single impression.
       *
       * Kept deliberately narrow: `/ektypwseis-arta` overlaps `/prints` at 69%
       * and is the obvious next candidate, but it was re-scoped to large-format
       * printing on 2026-08-25 and has not yet had a crawl cycle to prove the
       * split works. Redirecting it now would discard that test and confound
       * attribution for the indexing fix shipped the same day.
       */
      {
        source: '/katastrifi-web-efarmogon',
        destination: '/website-development',
        permanent: true,
      },
    ]
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default withNextIntl(nextConfig)
