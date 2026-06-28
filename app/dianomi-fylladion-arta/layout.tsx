import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('dianomi_fylladion_arta_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/dianomi-fylladion-arta',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/dianomi-fylladion-arta',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Διανομή Φυλλαδίων Άρτα - Flyer Distribution & Leaflet Distribution adinfinity'
            : 'Flyer Distribution Arta - Leaflet Distribution & Door-to-Door Marketing adinfinity',
        },
      ],
      locale: localeMap[locale as keyof typeof localeMap],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.title'),
      description: t('seo.description'),
      images: ['/images/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function DianomiFylladionArtaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data - LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "adinfinity - Διανομή Φυλλαδίων Άρτα",
            "description": "Επαγγελματική διανομή φυλλαδίων στην Άρτα και Ήπειρο. Door-to-door distribution, flyer distribution, leaflet distribution, τοπικό marketing.",
            "url": "https://adinfinity.gr/dianomi-fylladion-arta",
            "telephone": "+30-2681-303007",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Βασ. Πύρρου 30",
              "addressLocality": "Άρτα",
              "addressRegion": "Ήπειρος",
              "postalCode": "471 32",
              "addressCountry": "GR",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.1262",
              "longitude": "20.9373"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Άρτα"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Ήπειρος"
              }
            ],
            "openingHours": [
              "Mo 09:00-17:00",
              "Tu 09:00-17:00", 
              "We 09:00-17:00",
              "Th 09:00-17:00",
              "Fr 09:00-17:00"
            ],
            "priceRange": "€€",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "currenciesAccepted": "EUR"
          }),
        }}
      />
      {children}
    </>
  )
}
