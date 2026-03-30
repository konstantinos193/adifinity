"use client"

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export function DynamicSEO() {
  const t = useTranslations('common')
  const pathname = usePathname()

  useEffect(() => {
    // Update html lang attribute based on current locale
    const html = document.documentElement
    const currentLang = html.getAttribute('lang')
    
    // Only update if different to avoid unnecessary updates
    if (currentLang !== (html.lang === 'en' ? 'en' : 'el')) {
      html.lang = html.lang === 'en' ? 'en' : 'el'
    }
    
    // Update canonical URL for current page
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `https://adinfinity.gr${pathname}`
    
    // Update hreflang tags for bilingual support
    const updateHreflang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`) as HTMLLinkElement
      if (!link) {
        link = document.createElement('link')
        link.rel = 'alternate'
        link.setAttribute('hreflang', hreflang)
        document.head.appendChild(link)
      }
      link.href = href
    }
    
    // Add hreflang tags for current page (no locale prefixes in URLs)
    updateHreflang('el', `https://adinfinity.gr${pathname}`)
    updateHreflang('el-GR', `https://adinfinity.gr${pathname}`)
    updateHreflang('en', `https://adinfinity.gr${pathname}`)
    updateHreflang('x-default', `https://adinfinity.gr${pathname}`)
    
    // Update page-specific meta if needed
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[${name}]`) as HTMLMetaElement
      if (!meta) {
        meta = document.createElement('meta')
        if (name.startsWith('property:')) {
          meta.setAttribute('property', name.replace('property:', ''))
        } else {
          meta.name = name.replace('name:', '')
        }
        document.head.appendChild(meta)
      }
      meta.content = content
    }
    
    // Dynamic page-specific SEO updates can be added here
    // For now, the static metadata in layout.tsx handles most SEO
    
  }, [pathname])

  return null // This component doesn't render anything
}
