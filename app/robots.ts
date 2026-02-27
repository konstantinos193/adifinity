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
          // Block old Joomla query parameters more aggressively
          '/?option=*',
          '/?view=*',
          '/?task=*',
          '/?id=*',
          '/?com_k2*',
          '/?com_content*',
          '/?com_users*',
          '/?itemlist*',
          '/?user*',
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
          '/?option=*',
          '/?view=*',
          '/?task=*',
          '/?id=*',
          '/?com_k2*',
          '/?com_content*',
          '/?com_users*',
          '/?itemlist*',
          '/?user*',
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

