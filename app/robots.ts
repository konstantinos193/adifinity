import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://adinfinity.gr'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/node_modules/',
          '/.git/',
          // Block only specific old Joomla URL patterns
          '/?option=com_k2*',
          '/?view=itemlist*',
          '/?task=user*',
          '/?com_k2*',
          '/?itemlist*',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

