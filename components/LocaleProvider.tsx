'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { messageCache } from './useTranslations'

type Locale = 'el' | 'en'
type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  isReady: boolean
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Greek is the default for both the server render and the first client render,
  // so SSR output and hydration always match for the (vast majority) Greek audience.
  const [locale, setLocale] = useState<Locale>('el')

  useEffect(() => {
    // Client-side only: honor a previously chosen language. Default stays Greek.
    const storedLocale = localStorage.getItem('locale') as Locale | null
    if (storedLocale === 'en') {
      setLocale('en')
    }
  }, [])

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
    // No URL change - pure client-side language switching.
  }

  // Messages are statically bundled (see useTranslations.tsx), so they are
  // available synchronously during SSR and the first client render. This lets
  // the full page render on the server with real content - critical for SEO -
  // instead of the previous "Loading..." shell that crawlers were seeing.
  const messages = messageCache[locale]

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleLocaleChange, isReady: true }}>
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
