import { MetadataRoute } from 'next'
import { readdir, stat } from 'fs/promises'
import { join } from 'path'

// Dynamic page discovery with priority mapping based on Google Search Console data
const pagePriorities: Record<string, number> = {
  '': 1.0,                    // homepage - EXCELLENT (15.5% CTR)
  'about': 0.9,              // GOOD (2.7% CTR)
  'website-development': 0.85, // GOOD (4.1% CTR)
  'flyer-distribution': 0.85, // High-value service page (1.2% CTR but high value)
  'services': 0.85,         // High-value hub page
  'prints': 0.75,           // NEEDS IMPROVEMENT (1.3% CTR) - reduced priority
  'projects': 0.75,         // NEEDS IMPROVEMENT (2.2% CTR) - slight improvement
  'market-research': 0.7,   // NEEDS IMPROVEMENT (1.7% CTR)
  'graphic-design': 0.7,     // NEEDS IMPROVEMENT (1.3% CTR) - target for "γραφιστική"
  'contact': 0.6,            // LOW TRAFFIC (4.8% CTR)
  // Legal/compliance pages
  'report-content': 0.8,     // Important legal page
  'dsa-compliance': 0.8,     // DSA compliance
  'privacy-policy': 0.7,     // Legal page
  'cookie-policy': 0.7,      // Legal page
  'accessibility': 0.8,      // Legal page - INCREASED PRIORITY for SEO
  // Website development sub-pages
  'website-development/technical-seo': 0.8,
  'website-development/e-commerce': 0.8,
  'website-development/custom-web-apps': 0.8,
  'website-development/landing-pages': 0.8,
  'website-development/maintenance': 0.75,
  'website-development/web-apps': 0.8,
  // Other pages
  'pricing': 0.6,
}

const changeFrequencies: Record<string, 'daily' | 'weekly' | 'monthly'> = {
  '': 'daily',              // Homepage - frequent updates for SEO
  'about': 'weekly',
  'website-development': 'weekly',
  'services': 'weekly',
  'prints': 'weekly',        // INCREASED: Target for improvement
  'projects': 'weekly',     // INCREASED: Better performance
  'market-research': 'weekly',
  'graphic-design': 'weekly', // INCREASED: Target for "γραφιστική" keyword
  'flyer-distribution': 'weekly',
  'contact': 'monthly',
  'report-content': 'weekly',
  'dsa-compliance': 'weekly',
  'privacy-policy': 'monthly',
  'cookie-policy': 'monthly',
  'accessibility': 'weekly',    // UPDATED: More frequent updates for SEO
  'pricing': 'monthly',
}

async function getAllPages(): Promise<string[]> {
  const pages: string[] = []
  const appDir = join(process.cwd(), 'app')
  
  async function scanDirectory(dir: string, basePath = '') {
    const items = await readdir(dir)
    
    for (const item of items) {
      const fullPath = join(dir, item)
      const statResult = await stat(fullPath)
      
      if (statResult.isDirectory()) {
        // Check if this directory has a page.tsx
        const pagePath = join(fullPath, 'page.tsx')
        try {
          await stat(pagePath)
          // Add the page path
          const routePath = basePath ? `${basePath}/${item}` : item
          if (item !== 'api' && !item.startsWith('(') && !item.startsWith('_')) {
            pages.push(routePath === 'page' ? '' : routePath)
          }
        } catch {
          // No page.tsx, continue scanning subdirectories
          await scanDirectory(fullPath, basePath ? `${basePath}/${item}` : item)
        }
      }
    }
  }
  
  await scanDirectory(appDir)
  return pages.sort()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://adinfinity.gr'
  const pages = await getAllPages()
  
  const routes = pages.map(page => {
    const priority = pagePriorities[page] || 0.5
    const changeFreq = changeFrequencies[page] || 'weekly'
    const url = page ? `${baseUrl}/${page}` : baseUrl
    
    // Enhanced SEO for accessibility page
    if (page === 'accessibility') {
      return {
        url,
        lastModified: new Date(),
        changeFrequency: changeFreq,
        priority,
        alternates: {
          languages: {
            el: `${baseUrl}/${page}`,
            en: `${baseUrl}/en/${page}`,
          },
        },
        // Additional SEO metadata for accessibility
        images: [`${baseUrl}/images/accessibility-og.jpg`],
      }
    }
    
    return {
      url,
      lastModified: new Date(),
      changeFrequency: changeFreq,
      priority,
    }
  })

  return routes
}

