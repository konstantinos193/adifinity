import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('landing_pages_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  // Dynamic content based on locale
  const structuredData = locale === 'el' ? {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Custom Landing Pages Development",
    "description": "Custom landing pages σε Next.js & React για Google Ads, καμπάνιες και νέα προϊόντα. High-converting, SEO-ready, mobile-first.",
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
    "serviceType": ["Landing Page Development", "Google Ads Optimization", "Conversion Rate Optimization", "Campaign Page Development"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Υπηρεσίες Landing Pages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Landing Pages",
            "description": "High-converting landing pages βελτιστοποιημένες για Google Ads campaigns"
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
            "name": "Product Launch Pages",
            "description": "Custom landing pages για νέα προϊόντα και ανακοινώσεις"
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
            "name": "Campaign Landing Pages",
            "description": "Εξειδικευμένες σελίδες για marketing καμπάνιες"
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
  } : {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Custom Landing Pages Development",
    "description": "High-converting landing pages in Next.js & React for Google Ads, campaigns and new products. Fast, SEO-ready, mobile-first.",
    "provider": {
      "@type": "Organization",
      "name": "adinfinity",
      "url": "https://adinfinity.gr",
      "telephone": "+30-2681-303007",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vas. Pyrrou 30",
        "addressLocality": "Arta",
        "postalCode": "471 32",
        "addressCountry": "GR",
      },
      "sameAs": [
        "https://www.facebook.com/adinfinity.gr",
        "https://www.instagram.com/adinfinity.gr"
      ]
    },
    "serviceType": ["Landing Page Development", "Google Ads Optimization", "Conversion Rate Optimization", "Campaign Page Development"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Landing Page Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Landing Pages",
            "description": "High-converting landing pages optimized for Google Ads campaigns"
          },
          "availableAtOrFrom": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Arta",
              "addressCountry": "GR"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product Launch Pages",
            "description": "Custom landing pages for new products and announcements"
          },
          "availableAtOrFrom": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Arta",
              "addressCountry": "GR"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Campaign Landing Pages",
            "description": "Specialized pages for marketing campaigns"
          },
          "availableAtOrFrom": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Arta",
              "addressCountry": "GR"
            }
          }
        }
      ]
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "€€€"
  }

  const localBusinessData = locale === 'el' ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "adinfinity - Landing Pages Άρτα",
    "description": "Custom landing pages και conversion optimization στην Άρτα",
    "url": "https://adinfinity.gr/website-development/landing-pages",
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
  } : {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "adinfinity - Landing Pages Arta",
    "description": "Custom landing pages and conversion optimization in Arta",
    "url": "https://adinfinity.gr/website-development/landing-pages",
    "telephone": "+30-2681-303007",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vas. Pyrrou 30",
      "addressLocality": "Arta",
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
  }
  
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
      
      // Landing page specific
      'landing page development',
      'landing page Greece',
      'κατασκευή landing page',
      'landing page Ελλάδα',
      'custom landing pages',
      'high converting landing pages',
      'landing page optimization',
      
      // Marketing & Ads
      'Google Ads landing pages',
      'campaign landing pages',
      'conversion optimization',
      'CRO optimization',
      'digital marketing pages',
      'lead generation pages',
      
      // Technology
      'Next.js landing pages',
      'React landing pages',
      'TypeScript landing pages',
      'static landing pages',
      'mobile-first landing pages',
      
      // Use cases
      'product launch pages',
      'event registration pages',
      'webinar landing pages',
      'lead magnet pages',
      'squeeze pages',
      
      // Greek market specific
      'greek landing pages',
      'ελληνικές landing pages',
      'landing pages Αθήνα',
      'landing pages Θεσσαλονίκη',
      'digital marketing Greece',
      
      // Business terms
      'conversion rate',
      'lead generation',
      'sales funnel',
      'marketing campaigns',
      'online advertising',
      'PPC landing pages'
    ],
    alternates: {
      canonical: 'https://adinfinity.gr/website-development/landing-pages',
      languages: {
        'el-GR': 'https://adinfinity.gr/website-development/landing-pages',
        'el': 'https://adinfinity.gr/website-development/landing-pages',
        'en': 'https://adinfinity.gr/website-development/landing-pages',
        'en-US': 'https://adinfinity.gr/website-development/landing-pages'
      },
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/website-development/landing-pages',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-landing-pages.svg",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Custom Landing Pages adinfinity - High-Converting Next.js React Pages'
            : 'Custom Landing Pages adinfinity - High-Converting Next.js React Pages',
        },
      ],
      locale: localeMap[locale as keyof typeof localeMap],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.title'),
      description: t('seo.description'),
      images: ['/images/og-landing-pages.svg'],
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

export default function LandingPagesLayout({
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
            "name": "Custom Landing Pages Development",
            "description": "Custom landing pages σε Next.js & React για Google Ads, καμπάνιες και νέα προϊόντα. High-converting, SEO-ready, mobile-first.",
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
            "serviceType": ["Landing Page Development", "Google Ads Optimization", "Conversion Rate Optimization", "Campaign Page Development"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Υπηρεσίες Landing Pages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Google Ads Landing Pages",
                    "description": "High-converting landing pages βελτιστοποιημένες για Google Ads campaigns"
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
                    "name": "Product Launch Pages",
                    "description": "Custom landing pages για νέα προϊόντα και ανακοινώσεις"
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
                    "name": "Campaign Landing Pages",
                    "description": "Εξειδικευμένες σελίδες για marketing καμπάνιες"
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
            "name": "adinfinity - Landing Pages Άρτα",
            "description": "Custom landing pages και conversion optimization στην Άρτα",
            "url": "https://adinfinity.gr/website-development/landing-pages",
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
