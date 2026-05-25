import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('graphic_design_page')
  
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
      
      // Core graphic design services
      'γραφικές τέχνες',
      'γραφιστική',
      'graphic design',
      'γραφιστική άρτα',
      'graphic design artas',
      'design services',
      
      // Specific services
      'branding',
      'εταιρική ταυτότητα',
      'corporate identity',
      'logo design',
      'σχεδιασμός λογοτύπων',
      'διαφημιστικό υλικό',
      'advertising design',
      'social media graphics',
      'digital design',
      
      // Design applications
      'επαγγελματικές κάρτες',
      'business cards',
      'flyers',
      'αφίσες',
      'posters',
      'brochures',
      'κατάλογοι',
      'catalogs',
      'παquetaging',
      'συσκευασία',
      
      // Digital design
      'web design',
      'ui design',
      'ux design',
      'social media design',
      'digital marketing',
      'content creation',
      
      // Geographic keywords
      'γραφιστική άρτα',
      'graphic design artas',
      'γραφιστική ιωαννίνων',
      'graphic design ioannina',
      'γραφιστική ηπείρου',
      'graphic design epirus',
      'γραφιστική βόρειου ελλάδας',
      
      // Quality indicators
      'επαγγελματική γραφιστική',
      'ποιοτικό design',
      'creative design',
      'custom design',
      'original design',
      'καινοτόμος σχεδιασμός',
      
      // Related services
      'εκτυπώσεις',
      'printing',
      'διαφημιστική εταιρεία',
      'advertising agency',
      'marketing',
      'digital marketing',
      'branding agency'
    ],
    alternates: {
      canonical: 'https://adinfinity.gr/graphic-design',
      languages: {
        'el-GR': 'https://adinfinity.gr/graphic-design',
        'el': 'https://adinfinity.gr/graphic-design',
        'en': 'https://adinfinity.gr/graphic-design',
        'en-US': 'https://adinfinity.gr/graphic-design'
      },
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/graphic-design',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: 'Γραφικές Τέχνες adinfinity - Επαγγελματικές Υπηρεσίες Graphic Design',
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

export default function GraphicDesignLayout({
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
            "name": "Γραφικές Τέχνες & Graphic Design",
            "description": "Επαγγελματικές γραφικές τέχνες στην Άρτα. Branding, logo design, εταιρική ταυτότητα, διαφημιστικό υλικό, social media graphics.",
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
            "serviceType": ["Graphic Design", "Branding", "Logo Design", "Corporate Identity", "Digital Design", "Social Media Graphics"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Υπηρεσίες Graphic Design",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Branding & Εταιρική Ταυτότητα",
                    "description": "Logo design, εταιρική ταυτότητα, branding, οπτική επικοινωνία",
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
                    "name": "Διαφημιστικό & Έντυπο Σχεδιασμό",
                    "description": "Flyers, αφίσες, brochures, καταλόγοι, διαφημιστικό υλικό",
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
                    "name": "Ψηφιακός Σχεδιασμός & Social Media",
                    "description": "Social media graphics, digital design, web graphics, content creation",
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
            "name": "adinfinity - Γραφικές Τέχνες Άρτα",
            "description": "Επαγγελματικές γραφικές τέχνες και design υπηρεσίες στην Άρτα",
            "url": "https://adinfinity.gr/graphic-design",
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

