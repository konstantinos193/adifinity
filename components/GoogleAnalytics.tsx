'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

// GA4 measurement ID for adinfinity.gr
const GA_MEASUREMENT_ID = 'G-8E0N3V4XR7'

/** Reads the analytics-consent flag persisted by the cookie-consent banner. */
function analyticsConsented(): boolean {
  try {
    const saved = localStorage.getItem('adinfinity-cookie-settings')
    if (!saved) return false
    return JSON.parse(saved).analytics === true
  } catch {
    return false
  }
}

/**
 * Consent-first Google Analytics 4.
 *
 * The previous GA snippet lived in `app/_app.tsx`, a Pages-Router file the App
 * Router never loads — so analytics was effectively dead. This component loads
 * gtag ONLY after the visitor has granted analytics consent (GDPR), and reacts
 * to consent changes broadcast by the cookie banner via the
 * `cookieConsentUpdated` event.
 */
export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(analyticsConsented())
    const onConsentChange = () => setEnabled(analyticsConsented())
    window.addEventListener('cookieConsentUpdated', onConsentChange)
    return () => window.removeEventListener('cookieConsentUpdated', onConsentChange)
  }, [])

  if (!enabled) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}
