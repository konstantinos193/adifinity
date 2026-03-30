import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('web_apps_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  // Dynamic content based on locale
  const structuredData = locale === 'el' ? {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Custom Web Applications Development",
    "description": "Κατασκευή custom web applications, SaaS platforms, dashboards και booking systems σε React & Node.js. Full-stack development για επιχειρήσεις.",
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
    "serviceType": ["Web Application Development", "SaaS Development", "Custom Dashboard Development", "Booking System Development"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Υπηρεσίες Web Applications",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Admin Dashboards",
            "description": "Προσαρμοσμένα εργαλεία back-office για τη διαχείριση της επιχείρησής σας"
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
            "name": "SaaS Platforms",
            "description": "Multi-tenant applications με subscription billing και custom workflows"
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
            "name": "Booking Systems",
            "description": "Online κράτηση ραντεβού, χώρων ή πόρων με real-time availability"
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
    "name": "Custom Web Applications Development",
    "description": "Custom web applications, SaaS platforms, dashboards and booking systems in React & Node.js. Full-stack development for businesses.",
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
    "serviceType": ["Web Application Development", "SaaS Development", "Custom Dashboard Development", "Booking System Development"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Application Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Admin Dashboards",
            "description": "Custom back-office tools for business management"
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
            "name": "SaaS Platforms",
            "description": "Multi-tenant applications with subscription billing and custom workflows"
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
            "name": "Booking Systems",
            "description": "Online appointment, venue or resource booking with real-time availability"
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
      
      // Web app specific
      'web applications',
      'SaaS platforms',
      'custom dashboards',
      'react development',
      'nodejs development',
      'full-stack development',
      'custom web apps',
      'web app development',
      'business applications',
      
      // Greek market specific
      'web εφαρμογές',
      'SaaS πλατφόρμες',
      'custom dashboards',
      'react development',
      'nodejs',
      'full-stack development',
      'ελληνικός web developer',
      'συστήματα κρατήσεων',
      'admin tools',
      'web εφαρμογές',
      'ανάπτυξη εφαρμογών',
      'custom software',
      'business applications',
      
      // Technology specific
      'React 19',
      'Next.js 16.2',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Express.js',
      'REST APIs',
      'WebSockets',
      
      // Use cases
      'booking systems',
      'admin dashboards',
      'data platforms',
      'API integrations',
      'custom tools',
      'internal tools',
      'automation workflows',
      
      // Business terms
      'business solutions',
      'digital transformation',
      'enterprise applications',
      'cloud applications',
      'scalable web apps'
    ],
    alternates: {
      canonical: 'https://adinfinity.gr/website-development/web-apps',
      languages: {
        'el-GR': 'https://adinfinity.gr/website-development/web-apps',
        'el': 'https://adinfinity.gr/website-development/web-apps',
        'en': 'https://adinfinity.gr/website-development/web-apps',
        'en-US': 'https://adinfinity.gr/website-development/web-apps'
      },
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/website-development/web-apps',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-web-apps.svg",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Custom Web Applications adinfinity - React & Node.js Development'
            : 'Custom Web Applications adinfinity - React & Node.js Development',
        },
      ],
      locale: localeMap[locale as keyof typeof localeMap],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.title'),
      description: t('seo.description'),
      images: ['/images/og-web-apps.svg'],
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

export default function WebAppsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Structured Data - Professional Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Custom Web Applications Development",
            "description": "Κατασκευή custom web applications, SaaS platforms, dashboards και booking systems σε React & Node.js. Full-stack development για επιχειρήσεις.",
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
            "serviceType": ["Web Application Development", "SaaS Development", "Custom Dashboard Development", "Booking System Development"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Υπηρεσίες Web Applications",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Admin Dashboards",
                    "description": "Προσαρμοσμένα εργαλεία back-office για τη διαχείριση της επιχείρησής σας"
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
                    "name": "SaaS Platforms",
                    "description": "Multi-tenant applications με subscription billing και custom workflows"
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
                    "name": "Booking Systems",
                    "description": "Online κράτηση ραντεβού, χώρων ή πόρων με real-time availability"
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
            "name": "adinfinity - Web Applications Άρτα",
            "description": "Custom web applications και SaaS development στην Άρτα",
            "url": "https://adinfinity.gr/website-development/web-apps",
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
