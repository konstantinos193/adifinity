import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('custom_web_apps_page')
  
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
      
      // Core web development services
      'custom web apps',
      'εταιρικές ιστοσελίδες',
      'custom website development',
      'web application development',
      'εταιρική ιστοσελίδα',
      'custom ιστοσελίδα',
      'web εφαρμογές',
      'custom web applications',
      
      // Technology keywords
      'next.js development',
      'react development',
      'typescript development',
      'tailwind css',
      'custom development',
      'web design',
      'ui ux design',
      
      // Industry-specific
      'hospitality website',
      'education platform',
      'healthcare website',
      'e-commerce website',
      'booking system',
      'admin dashboard',
      'subscription system',
      
      // Service quality
      'professional web development',
      'custom web solutions',
      'mobile-first design',
      'seo optimization',
      'fast loading',
      'secure websites',
      
      // Geographic keywords
      'web development greece',
      'custom websites artas',
      'web development ioannina',
      'web development epirus',
      'custom web apps northern greece',
      
      // Related services
      'digital marketing',
      'graphic design',
      'printing',
      'flyer distribution',
      'business promotion',
      'online presence'
    ],
    alternates: {
      canonical: 'https://adinfinity.gr/website-development/custom-web-apps',
      languages: {
        'el-GR': 'https://adinfinity.gr/website-development/custom-web-apps',
        'el': 'https://adinfinity.gr/website-development/custom-web-apps',
        'en': 'https://adinfinity.gr/website-development/custom-web-apps',
        'en-US': 'https://adinfinity.gr/website-development/custom-web-apps'
      },
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/website-development/custom-web-apps',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: 'Custom Web Apps & Εταιρικές Ιστοσελίδες - adinfinity',
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

export default function CustomWebAppsLayout({
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
            "name": "Custom Web Apps & Εταιρικές Ιστοσελίδες",
            "description": "Custom εταιρικές ιστοσελίδες και web applications σε React & Next.js. Καμία χρήση templates. Mobile-first design, SEO optimization, enterprise security για Greek businesses.",
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
            "serviceType": ["Custom Web Development", "Web Application Development", "Corporate Websites", "E-commerce Solutions", "Booking Systems"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Custom Web Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Corporate Websites",
                    "description": "Tailored websites for businesses with custom design and functionality"
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
                    "name": "Web Applications",
                    "description": "Custom web applications with advanced functionality and database integration"
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
                    "name": "E-commerce Solutions",
                    "description": "Complete online stores with payment integration and inventory management"
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
            "priceRange": "€€€"
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
            "name": "adinfinity - Custom Web Development Άρτα",
            "description": "Custom web apps και εταιρικές ιστοσελίδες στην Άρτα",
            "url": "https://adinfinity.gr/website-development/custom-web-apps",
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
            "priceRange": "€€€",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "currenciesAccepted": "EUR"
          }),
        }}
      />
      {children}
    </>
  )
}
