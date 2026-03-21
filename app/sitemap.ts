import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adinfinity.gr'
  
  // Define all routes with optimized priorities based on actual Google Search Console performance
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-21'), // Updated to current date
      changeFrequency: 'daily' as const,
      priority: 1.0, // 15.8% CTR (71 clicks, 449 impressions) - EXCELLENT
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9, // 2.8% CTR (3 clicks, 108 impressions) - GOOD
    },
    {
      url: `${baseUrl}/website-development`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85, // 2.9% CTR (2 clicks, 70 impressions) - GOOD
    },
    {
      url: `${baseUrl}/prints`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8, // 1.4% CTR (2 clicks, 148 impressions) - NEEDS IMPROVEMENT
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8, // 1.2% CTR (1 click, 83 impressions) - NEEDS IMPROVEMENT
    },
    {
      url: `${baseUrl}/market-research`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.75, // 1.8% CTR (1 click, 55 impressions) - NEEDS IMPROVEMENT
    },
    {
      url: `${baseUrl}/graphic-design`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7, // 1.4% CTR (1 click, 70 impressions) - NEEDS IMPROVEMENT
    },
    {
      url: `${baseUrl}/flyer-distribution`,
      lastModified: new Date('2026-03-21'),
      changeFrequency: 'weekly' as const,
      priority: 0.85, // High-value service page - meta optimized for CTR improvement
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-03-21'),
      changeFrequency: 'weekly' as const,
      priority: 0.85, // High-value hub page - meta optimized for CTR improvement
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6, // 4.8% CTR (1 click, 21 impressions) - LOW TRAFFIC
    },
  ]

  return routes
}

