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
          '/admin/',
          // Disallow old Joomla query parameters
          '/*?option=com_k2*',
          '/*?option=com_content*',
          '/*?option=com_users*',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/*?option=com_k2*',
          '/*?option=com_content*',
          '/*?option=com_users*',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

