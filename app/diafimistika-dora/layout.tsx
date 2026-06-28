import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('diafimistika_dora_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/diafimistika-dora',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/diafimistika-dora',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Διαφημιστικά Δώρα Επιχειρήσεων Άρτα | Branded Merchandise | adinfinity'
            : 'Promotional Gifts Arta | Branded Merchandise | adinfinity',
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

export default function DiafimistikaDoraLayout({
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
            "name": "adinfinity - Διαφημιστικά Δώρα Επιχειρήσεων Άρτα",
            "description": "Επαγγελματικά διαφημιστικά δώρα και branded merchandise στην Άρτα. Corporate gifts, promotional items, branded merchandise, custom printing και personalized gifts για επιχειρήσεις.",
            "url": "https://adinfinity.gr/diafimistika-dora",
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
                "name": "Πόσο κοστίζουν τα διαφημιστικά δώρα;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Οι τιμές εξαρτώνται από το είδος και την ποσότητα. Στυλό από €0.50/τεμ., μπλοκ από €1.50/τεμ., κούπες από €2/τεμ. Παρέχουμε δωρεάν προσφορά για bulk orders."
                }
              },
              {
                "@type": "Question",
                "name": "Ποια minimum order quantity;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Minimum order εξαρτάται από το προϊόν. Στυλό: 50 τεμ., μπλοκ: 25 τεμ., κούπες: 25 τεμ. Custom items: 100+ τεμ."
                }
              },
              {
                "@type": "Question",
                "name": "Παρέχετε custom design;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ναι, παρέχουμε custom design services για όλα τα branded merchandise. Μπορείτε να μας στείλετε το δικό σας logo ή να δημιουργήσουμε design για εσάς."
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
