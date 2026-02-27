import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adinfinity.gr'
  
  // Define all routes with optimized priorities based on Google Search Console data
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date('2026-02-28'), // Updated to match your last update
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/graphic-design`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9, // High priority based on search performance
    },
    {
      url: `${baseUrl}/prints`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85, // Good performance (2 clicks, 125 impressions)
    },
    {
      url: `${baseUrl}/website-development`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85, // Good performance (2 clicks, 61 impressions)
    },
    {
      url: `${baseUrl}/flyer-distribution`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8, // Target for "διανομη εντυπων" searches
    },
    {
      url: `${baseUrl}/market-research`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8, // Good performance (1 click, 51 impressions)
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8, // Good performance (1 click, 77 impressions)
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Good performance (3 clicks, 99 impressions)
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7, // Lower priority (1 click, 21 impressions)
    },
    // Add new content pages targeting high-impression keywords
    {
      url: `${baseUrl}/services/graphic-design-agency-arta`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85, // Target "γραφιστικο γραφειο" searches
    },
  ]

  return routes
}

