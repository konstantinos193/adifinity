import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('psifiako_prosklitirio_gamou_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/psifiako-prosklitirio-gamou',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/psifiako-prosklitirio-gamou',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Ψηφιακό Προσκλητήριο Γάμου | adinfinity'
            : 'Digital Wedding Invitation | adinfinity',
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

export default function PsifiakoProsklitirioGamouLayout({
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
            "name": "Ψηφιακό Προσκλητήριο Γάμου",
            "description": "Δημιουργήστε εντυπωσιακά ψηφιακά προσκλητήρια γάμου με video, RSVP και πλήρη διαχείριση καλεσμένων.",
            "url": "https://adinfinity.gr/psifiako-prosklitirio-gamou",
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
            "serviceType": ["Digital Wedding Invitation", "Video Invitation", "Online RSVP"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Τύποι Ψηφιακών Προσκλήσεων",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Video Πρόσκληση",
                    "description": "Κομψή βίντεο πρόσκληση με RSVP και εύκολη κοινοποίηση.",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Video Πρόσκληση Pro",
                    "description": "Βίντεο πρόσκληση με αντίστροφη μέτρηση, γρήγορες ενέργειες και RSVP.",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mini Γαμήλια Ιστοσελίδα",
                    "description": "Πλήρης mini-ιστοσελίδα με ιστορία, γκαλερί, εκδηλώσεις και RSVP.",
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
