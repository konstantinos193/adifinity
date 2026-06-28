import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('ilektroniko_prosklitirio_gamou_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/ilektroniko-prosklitirio-gamou',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/ilektroniko-prosklitirio-gamou',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Ηλεκτρονικό Προσκλητήριο Γάμου με RSVP | adinfinity'
            : 'Electronic Wedding Invitation with RSVP | adinfinity',
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

export default function IlektronikoProsklitirioGamouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ηλεκτρονικό Προσκλητήριο Γάμου με RSVP",
            "description": "Δημιουργήστε ηλεκτρονικά προσκλητήρια γάμου με advanced RSVP, ειδοποιήσεις και πλήρη διαχείριση καλεσμένων.",
            "url": "https://adinfinity.gr/ilektroniko-prosklitirio-gamou",
            "provider": {
              "@type": "Organization",
              "name": "adinfinity",
              "url": "https://adinfinity.gr",
              "telephone": "+30-2681-303007",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Βασ. Πύρρου 30",
                "addressLocality": "Άρτα",
                "postalCode": "471 32",
                "addressCountry": "GR",
              },
            },
            "serviceType": ["Electronic Wedding Invitation", "RSVP Management", "Guest List Management"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Τύποι Ηλεκτρονικών Προσκλήσεων",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Video Πρόσκληση Pro",
                    "description": "Βίντεο πρόσκληση με advanced RSVP, ειδοποιήσεις και export λίστας.",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mini Γαμήλια Ιστοσελίδα",
                    "description": "Πλήρης mini-ιστοσελίδα με advanced RSVP, γκαλερί και μητρώο δώρων.",
                  },
                },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  )
}
