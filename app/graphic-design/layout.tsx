import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('graphic_design_page')
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/graphic-design',
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
              "latitude": "39.1606",
              "longitude": "20.9853"
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
                "name": "Πόσο κοστίζει το logo design;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Logo design ξεκινά από €150 για basic concepts και φτάνει €300+ για premium packages με full branding."
                }
              },
              {
                "@type": "Question",
                "name": "Ποια αρχεία λαμβάνω;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Λαμβάνετε όλα τα source αρχεία: AI, EPS, PDF, PNG, JPG formats, μαζί με font files και color codes."
                }
              },
              {
                "@type": "Question",
                "name": "Πόσο χρόνο παίρνει ένα project;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Logo design σε 3-5 εργάσιμες. Complete branding projects σε 2-4 εβδομάδες ανάλογα με την πολυπλοκότητα."
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

