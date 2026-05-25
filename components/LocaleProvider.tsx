'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

type Locale = 'el' | 'en'
type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  isReady: boolean
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('el')
  const [isReady, setIsReady] = useState(false)
  const [messages, setMessages] = useState<any>(null)

  useEffect(() => {
    // Detect locale from browser or localStorage only on client
    const browserLocale = navigator.language.split('-')[0] as Locale
    const storedLocale = localStorage.getItem('locale') as Locale
    
    // Always default to Greek unless explicitly set to English
    const detectedLocale = storedLocale === 'en' ? 'en' : 'el'
    
    setLocale(detectedLocale)
    setIsReady(true)
    
    // Load messages for the detected locale
    loadMessages(detectedLocale)
  }, [])

  const loadMessages = async (locale: Locale) => {
    try {
      // Import all message files and merge them
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
        'privacy_policy'
      ]

      const allMessages: any = {}
      
      for (const file of messageFiles) {
        try {
          const fileMessages = (await import(`../messages/${locale}/${file}.json`)).default
          allMessages[file] = fileMessages
        } catch (error) {
          console.warn(`Failed to load ${file} messages for locale: ${locale}`)
        }
      }
      
      setMessages(allMessages)
    } catch (error) {
      console.error('Failed to load messages:', error)
    }
  }

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
    loadMessages(newLocale)
    // NO URL CHANGE - Pure client-side language switching
  }

  if (!isReady || !messages) {
    return <div>Loading...</div>
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleLocaleChange, isReady }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  )
}

export const useLocale = () => {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return context
}
