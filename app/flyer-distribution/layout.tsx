import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('flyer_distribution_page')
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    keywords: [
      // Brand variations
      'adinfinity',
      'ad infinity',
      'adinity',
      'adinfit',
      'infiniry',
      'infinity ad',
      'adi infinity',
      
      // Core flyer distribution services
      'διανομή φυλλαδίων',
      'διανομη εντυπων',
      'flyer distribution',
      'leaflet distribution',
      'έντυποδιανομές',
      'εντυποδιανομές άρτα',
      'flyer distribution artas',
      
      // Distribution methods
      'πόρτα πόρτα διανομή',
      'door to door distribution',
      'στοχευμένη διανομή',
      'targeted distribution',
      'διανομή σε οικίες',
      'residential distribution',
      'διανομή σε επιχειρήσεις',
      'business distribution',
      'B2B distribution',
      
      // Marketing terms
      'διαφημιστική διανομή',
      'advertising distribution',
      'διαφημιστικά φυλλάδια',
      'marketing flyers',
      'προβολή επιχείρησης',
      'business promotion',
      'direct marketing',
      'print advertising',
      
      // Geographic keywords
      'διανομή άρτα',
      'διανομή artas',
      'διανομή ιωαννίνων',
      'distribution ioannina',
      'διανομή ηπείρου',
      'distribution epirus',
      'διανομή βόρειου ελλάδας',
      'distribution northern greece',
      
      // Service quality
      'επαγγελματική διανομή',
      'professional distribution',
      'αποτελεσματική διανομή',
      'effective distribution',
      'γρήγορη διανομή',
      'fast distribution',
      'αξιόπιστη διανομή',
      'reliable distribution',
      
      // Related services
      'εκτυπώσεις',
      'printing',
      'διαφημιστική εταιρεία',
      'advertising agency',
      'marketing',
      'digital marketing',
      'promotional materials'
    ],
    alternates: {
      canonical: 'https://adinfinity.gr/flyer-distribution',
      languages: {
        'el-GR': 'https://adinfinity.gr/flyer-distribution',
        'el': 'https://adinfinity.gr/flyer-distribution',
        'en': 'https://adinfinity.gr/flyer-distribution',
        'en-US': 'https://adinfinity.gr/flyer-distribution'
      },
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/flyer-distribution',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: 'Διανομή Φυλλαδίων adinfinity - Επαγγελματικές Υπηρεσίες Flyer Distribution',
        },
      ],
      locale: 'el_GR',
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

export default function FlyerDistributionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data - Professional Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Διανομή Φυλλαδίων & Εντύπων",
            "description": "Επαγγελματική στοχευμένη διανομή φυλλαδίων και εντύπων στην Άρτα και την Ήπειρο. Πόρτα-πόρτα διανομή σε κατοικίες και επιχειρήσεις.",
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
              "sameAs": [
                "https://www.facebook.com/adinfinity.gr",
                "https://www.instagram.com/adinfinity.gr"
              ]
            },
            "serviceType": ["Flyer Distribution", "Leaflet Distribution", "Door to Door Distribution", "Targeted Distribution", "B2B Distribution"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Υπηρεσίες Διανομής Εντύπων",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Πόρτα-Πόρτα Διανομή",
                    "description": "Διανομή φυλλαδίων σε κατοικίες και γραμματοκιβώτια",
                  },
                  "availableAtOrFrom": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Άρτα",
                      "addressCountry": "GR"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Στοχευμένη Διανομή σε Επιχειρήσεις",
                    "description": "Διανομή εντύπων σε επιλεγμένες επιχειρήσεις και σημεία",
                  },
                  "availableAtOrFrom": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Άρτα",
                      "addressCountry": "GR"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Targeted Distribution",
                    "description": "Στοχευμένη διανομή με βάση δημογραφικά και γεωγραφικά κριτήρια",
                  },
                  "availableAtOrFrom": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Άρτα",
                      "addressCountry": "GR"
                    }
                  }
                }
              ]
            },
            "openingHours": "Mo-Fr 09:00-17:00",
            "priceRange": "€€"
          }),
        }}
      />
      {/* Structured Data - Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "adinfinity - Διανομή Φυλλαδίων Άρτα",
            "description": "Επαγγελματική διανομή φυλλαδίων και εντύπων στην Άρτα",
            "url": "https://adinfinity.gr/flyer-distribution",
            "telephone": "+30-2681-303007",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Βασ. Πύρρου 30",
              "addressLocality": "Άρτα",
              "postalCode": "471 32",
              "addressCountry": "GR",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.1262",
              "longitude": "20.9373"
            },
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

