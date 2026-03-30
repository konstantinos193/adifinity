import { getRequestConfig } from 'next-intl/server'
import { routing } from '../i18n'
import { notFound } from 'next/navigation'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as 'el' | 'en')) {
    locale = routing.defaultLocale
  }

  // Load all message files and merge them
  const messageFiles = [
    'navigation',
    'hero', 
    'about',
    'services',
    'services_page',
    'prints_page',
    'flyer_distribution_page',
    'website_development_page',
    'e_commerce_page',
    'custom_web_apps_page',
    'landing_pages_page',
    'market_research_page',
    'contact',
    'footer',
    'seo',
    'common',
    'carousel',
    'testimonials',
    'maintenance_page',
    'privacy_policy',
    'cookie_policy'
  ]

  const messages: Record<string, any> = {}
  
  for (const file of messageFiles) {
    try {
      const fileMessages = (await import(`../messages/${locale}/${file}.json`)).default
      messages[file] = fileMessages
    } catch (error) {
      console.warn(`Failed to load ${file} messages for locale: ${locale}`)
    }
  }

  return {
    locale: locale as string,
    messages
  }
})
