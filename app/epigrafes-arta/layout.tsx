import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('epigrafes_arta_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/epigrafes-arta',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/epigrafes-arta',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Επιγραφές Καταστημάτων Άρτα | Neon, LED & Store Signage | adinfinity'
            : 'Store Signage Arta | Neon, LED & Business Signs | adinfinity',
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

export default function EpigrafesArtaLayout({
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
            "name": "adinfinity - Επιγραφές Καταστημάτων Άρτα",
            "description": "Επαγγελματικές επιγραφές καταστημάτων στην Άρτα. Neon signs, LED signs, store signage, vehicle graphics, wayfinding και custom signage solutions.",
            "url": "https://adinfinity.gr/epigrafes-arta",
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
              "latitude": "39.1606",
              "longitude": "20.9853"
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
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Πόσο κοστίζουν οι επιγραφές καταστημάτων;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Οι τιμές εξαρτώνται από το υλικό και το μέγεθος. Ακρυλικές επιγραφές από €50/τμ², LED signs από €150, neon signs από €200. Παρέχουμε δωρεάν προσφορά."
                }
              },
              {
                "@type": "Question",
                "name": "Παρέχετε εγκατάσταση;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ναι, παρέχουμε επαγγελματική εγκατάσταση σε όλη την Ήπειρο. Η εγκατάσταση περιλαμβάνεται στην τιμή για επιγραφές άνω των €200."
                }
              },
              {
                "@type": "Question",
                "name": "Ποια υλικά χρησιμοποιείτε;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Χρησιμοποιούμε ακρυλικό, PVC, αλουμίνιο, LED, neon, και ανθεκτικά υλικά για εξωτερική χρήση με εγγύηση αντοχής."
                }
              }
            ]
          }),
        }}
      />
      {children}
    </>
  )
}
