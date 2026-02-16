import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://adinfinity.gr'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/images/',
          '/public/',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/node_modules/',
          '/.git/',
          '/*.json$',
          // Block old Joomla query parameters
          '/*?option=com_k2*',
          '/*?option=com_content*',
          '/*?option=com_users*',
          '/*?view=itemlist*',
          '/*?task=user*',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/node_modules/',
          '/.git/',
          '/*.json$',
          '/*?option=com_k2*',
          '/*?option=com_content*',
          '/*?option=com_users*',
          '/*?view=itemlist*',
          '/*?task=user*',
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

