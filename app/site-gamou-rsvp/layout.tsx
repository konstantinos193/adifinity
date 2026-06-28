import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('site_gamou_rsvp_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/site-gamou-rsvp',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/site-gamou-rsvp',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Site Γάμου με RSVP & Χάρτη | adinfinity'
            : 'Wedding Website with RSVP & Map | adinfinity',
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

export default function SiteGamouRsvpLayout({
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
            "name": "Site Γάμου με RSVP & Χάρτη",
            "description": "Δημιουργήστε mini γαμήλια ιστοσελίδα με RSVP, χάρτη, γκαλερί φωτογραφιών, χρονοδιάγραμμα και μητρώο δώρων.",
            "url": "https://adinfinity.gr/site-gamou-rsvp",
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
            "serviceType": ["Wedding Website", "Mini Wedding Site", "RSVP Management", "Gift Registry"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Wedding Website Features",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mini Γαμήλια Ιστοσελίδα",
                    "description": "Πλήρης mini-ιστοσελίδα με RSVP, χάρτη, γκαλερί, χρονοδιάγραμμα και μητρώο δώρων.",
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
