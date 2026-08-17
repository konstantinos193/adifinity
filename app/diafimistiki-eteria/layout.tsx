import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('diafimistiki_eteria_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/diafimistiki-eteria',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/diafimistiki-eteria',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Διαφημιστική Εταιρεία Άρτα | Full-Service Agency | adinfinity'
            : 'Advertising Agency Arta | Full-Service Agency | adinfinity',
        },
      ],
      locale: localeMap[locale as keyof typeof localeMap],
      type: 'article',
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

export default function DiafimistikiEteriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "adinfinity - Διαφημιστική Εταιρεία Άρτα",
            "description": "Full-service διαφημιστική εταιρεία στην Άρτα. Graphic design, printing, websites, digital marketing και ολοκληρωμένες λύσεις για επιχειρήσεις.",
            "url": "https://adinfinity.gr",
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
            "sameAs": [
              "https://www.facebook.com/adinfinity",
              "https://www.instagram.com/adinfinity"
            ]
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
                "name": "Τι προσφέρει μια διαφημιστική εταιρεία;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Μια διαφημιστική εταιρεία προσφέρει ολοκληρωμένες λύσεις marketing: graphic design, printing, websites, digital marketing, social media και strategic consulting για την ανάπτυξη της επιχείρησής σας."
                }
              },
              {
                "@type": "Question",
                "name": "Πώς να επιλέξετε τη σωστή διαφημιστική εταιρεία;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ελέγξτε το portfolio, τις κριτικές πελατών, την εμπειρία στον κλάδο σας και την προσέγγιση στο strategy. Επιλέξτε μια agency που καταλαβαίνει το business σας."
                }
              },
              {
                "@type": "Question",
                "name": "Πόσο κοστίζει η συνεργασία με διαφημιστική εταιρεία;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Το κόστος εξαρτάται από το project και το scope. Project-based pricing από €500, monthly retainers από €500/μήνα, και custom packages ανάλογα με τις ανάγκες."
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
