import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('website_development_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  // Dynamic content based on locale
  const structuredData = locale === 'el' ? {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Κατασκευή Ιστοσελίδων & Web Applications",
    "description": "Custom κατασκευή ιστοσελίδων, web applications και e-shops σε React & Next.js. Καμία χρήση templates, μόνο clean code.",
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
    "serviceType": ["Web Development", "Custom Web Applications", "E-commerce Development", "Landing Pages", "Technical SEO", "Web Application Development"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Υπηρεσίες Web Development",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Applications",
            "description": "Πλήρως custom React/Next.js εφαρμογές χωρίς templates"
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
            "name": "E-commerce Development",
            "description": "Custom online stores με Stripe και διαχείριση παραγγελιών"
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
            "name": "Technical SEO Optimization",
            "description": "Core Web Vitals, schema markup, speed optimization"
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
    "name": "Website Development & Web Applications",
    "description": "Custom website development, web applications and e-shops in React & Next.js. No templates, only clean code.",
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
    "serviceType": ["Web Development", "Custom Web Applications", "E-commerce Development", "Landing Pages", "Technical SEO", "Web Application Development"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Applications",
            "description": "Fully custom React/Next.js applications without templates"
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
            "name": "E-commerce Development",
            "description": "Custom online stores with Stripe and order management"
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
            "name": "Technical SEO Optimization",
            "description": "Core Web Vitals, schema markup, speed optimization"
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
    "name": "adinfinity - Web Development Άρτα",
    "description": "Custom κατασκευή ιστοσελίδων και web applications στην Άρτα",
    "url": "https://adinfinity.gr/website-development",
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
    "name": "adinfinity - Web Development Arta",
    "description": "Custom website development and web applications in Arta",
    "url": "https://adinfinity.gr/website-development",
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
      
      // Core web development services
      'κατασκευή ιστοσελίδων',
      'web development',
      'custom web apps',
      'react development',
      'nextjs development',
      'typescript development',
      'custom websites',
      'business websites',
      'professional web development',
      
      // E-commerce
      'κατασκευή eshop',
      'ecommerce development',
      'online store development',
      'custom ecommerce',
      'stripe integration',
      'payment systems',
      
      // Technical services
      'technical SEO',
      'SEO optimization',
      'web performance',
      'core web vitals',
      'schema markup',
      'speed optimization',
      'mobile optimization',
      
      // Development types
      'landing pages',
      'web applications',
      'SaaS development',
      'dashboard development',
      'booking systems',
      'portal development',
      
      // Technology stack
      'react developer',
      'next.js developer',
      'typescript developer',
      'tailwind css',
      'node.js development',
      'postgresql database',
      'vercel deployment',
      
      // Greek market specific
      'greek web developer',
      'ελληνική κατασκευή ιστοσελίδων',
      'development ελλάδα',
      'web development greece',
      'custom development athens',
      'professional websites greece',
      
      // Related services
      'digital marketing',
      'graphic design',
      'ui/ux design',
      'figma design',
      'responsive design',
      'mobile-first development',
      
      // Business terms
      'online presence',
      'business website',
      'company website',
      'professional website',
      'custom solutions',
      'web solutions'
    ],
    alternates: {
      canonical: 'https://adinfinity.gr/website-development',
      languages: {
        'el-GR': 'https://adinfinity.gr/website-development',
        'el': 'https://adinfinity.gr/website-development',
        'en': 'https://adinfinity.gr/website-development',
        'en-US': 'https://adinfinity.gr/website-development'
      },
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/website-development',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Κατασκευή Ιστοσελίδων & Web Apps adinfinity - Custom Development React Next.js'
            : 'Website Development & Web Apps adinfinity - Custom Development React Next.js',
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

export default function WebsiteDevelopmentLayout({
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
            "name": "Κατασκευή Ιστοσελίδων & Web Applications",
            "description": "Custom κατασκευή ιστοσελίδων, web applications και e-shops σε React & Next.js. Καμία χρήση templates, μόνο clean code.",
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
            "serviceType": ["Web Development", "Custom Web Applications", "E-commerce Development", "Landing Pages", "Technical SEO", "Web Application Development"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Υπηρεσίες Web Development",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Web Applications",
                    "description": "Πλήρως custom React/Next.js εφαρμογές χωρίς templates"
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
                    "name": "E-commerce Development",
                    "description": "Custom online stores με Stripe και διαχείριση παραγγελιών"
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
                    "name": "Technical SEO Optimization",
                    "description": "Core Web Vitals, schema markup, speed optimization"
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
            "name": "adinfinity - Web Development Άρτα",
            "description": "Custom κατασκευή ιστοσελίδων και web applications στην Άρτα",
            "url": "https://adinfinity.gr/website-development",
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
