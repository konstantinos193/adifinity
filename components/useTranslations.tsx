'use client'

import { useLocale } from './LocaleProvider'
import { useMemo } from 'react'
import type { Messages } from '../types/messages'

// Import all message files statically for better performance
import enCommon from '../messages/en/common.json'
import elCommon from '../messages/el/common.json'
import enMarketResearchPage from '../messages/en/market_research_page.json'
import elMarketResearchPage from '../messages/el/market_research_page.json'
import enHero from '../messages/en/hero.json'
import elHero from '../messages/el/hero.json'
import enServices from '../messages/en/services.json'
import elServices from '../messages/el/services.json'
import enTestimonials from '../messages/en/testimonials.json'
import elTestimonials from '../messages/el/testimonials.json'
import enNavigation from '../messages/en/navigation.json'
import elNavigation from '../messages/el/navigation.json'
import enContact from '../messages/en/contact.json'
import elContact from '../messages/el/contact.json'
import enDsaCompliance from '../messages/en/dsa_compliance.json'
import elDsaCompliance from '../messages/el/dsa_compliance.json'
import enReportContent from '../messages/en/report_content.json'
import elReportContent from '../messages/el/report_content.json'
import enAccessibility from '../messages/en/accessibility.json'
import elAccessibility from '../messages/el/accessibility.json'

const messageCache: Record<string, Record<string, any>> = {
  en: {
    common: enCommon,
    market_research_page: enMarketResearchPage,
    hero: enHero,
    services: enServices,
    testimonials: enTestimonials,
    navigation: enNavigation,
    contact: enContact,
    dsa_compliance: enDsaCompliance,
    report_content: enReportContent,
    accessibility: enAccessibility
  },
  el: {
    common: elCommon,
    market_research_page: elMarketResearchPage,
    hero: elHero,
    services: elServices,
    testimonials: elTestimonials,
    navigation: elNavigation,
    contact: elContact,
    dsa_compliance: elDsaCompliance,
    report_content: elReportContent,
    accessibility: elAccessibility
  }
}

export function useTranslations() {
  const { locale, isReady } = useLocale()
  
  const getMessages = (section: string) => {
    try {
      return messageCache[locale]?.[section] || {}
    } catch (error) {
      console.error(`Failed to load ${section} messages`, error)
      return {}
    }
  }
  
  const t = (key: string): any => {
    // Handle keys that don't start with a section name (like 'footer.quick_links.links')
    // by defaulting to the 'common' section
    let section = 'common'
    let rest = key.split('.')
    
    // Check if the first part is a valid section
    const firstPart = rest[0]
    if (messageCache[locale]?.[firstPart]) {
      section = firstPart
      rest = rest.slice(1)
    }
    
    const messages = getMessages(section)
    
    let result: any = messages
    for (const k of rest) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return result || key
  }
  
  return { t, locale, isReady }
}
