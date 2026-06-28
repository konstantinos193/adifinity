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
      // WWW to non-www redirect (HTTPS)
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'host',
            value: 'www.adinfinity.gr',
          },
        ],
        permanent: true,
        destination: 'https://adinfinity.gr/:path*',
      },
      // WWW to non-www redirect (HTTP)
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'host',
            value: 'www.adinfinity.gr:80',
          },
        ],
        permanent: true,
        destination: 'https://adinfinity.gr/:path*',
      },
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
