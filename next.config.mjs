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
      // Block and redirect old Joomla URLs
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'option',
            value: ':option',
          },
        ],
        permanent: true,
        destination: 'https://adinfinity.gr',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'com_k2',
            value: ':k2',
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
