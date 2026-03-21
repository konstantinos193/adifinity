let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  async redirects() {
    if (process.env.NODE_ENV !== 'production') {
      return []
    }
    return [
      // Force HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        permanent: true,
        destination: 'https://adinfinity.gr/:path*',
      },
      // WWW to non-www redirect
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
      // Block and redirect specific old Joomla URLs with exact patterns
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'option',
            value: 'com_k2',
          },
          {
            type: 'query',
            key: 'view',
            value: 'itemlist',
          },
          {
            type: 'query',
            key: 'task',
            value: 'user',
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

export default nextConfig
