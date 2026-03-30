import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('e_commerce_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  // Dynamic content based on locale
  const structuredData = locale === 'el' ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ανάπτυξη Custom E-commerce",
    "description": "Custom ανάπτυξη e-commerce χωρίς Shopify/WooCommerce. Next.js, React, Stripe payments. Μηδενικές μηνιαίες χρεώσεις. Εξειδίκευση στην ελληνική αγορά για online καταστήματα.",
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
    "serviceType": ["E-commerce Development", "Custom Online Stores", "Stripe Integration", "Payment Systems", "Web Development"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Υπηρεσίες E-commerce Development",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom E-commerce Development",
            "description": "Πλήρως custom online καταστήματα χωρίς platform fees"
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
            "name": "Stripe Payment Integration",
            "description": "Ενσωμάτωση πληρωμών με Stripe και εναλλακτικές μεθόδους"
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
            "name": "Custom Admin Dashboard",
            "description": "Προσαρμοσμένο panel διαχείρισης παραγγελιών και αποθέματος"
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
    "@type": "Service",
    "name": "Custom E-commerce Development",
    "description": "Custom e-commerce development without Shopify/WooCommerce. Next.js, React, Stripe payments. Zero monthly fees. Greek market expertise for online stores.",
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
    "serviceType": ["E-commerce Development", "Custom Online Stores", "Stripe Integration", "Payment Systems", "Web Development"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "E-commerce Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom E-commerce Development",
            "description": "Fully custom online stores without platform fees"
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
            "name": "Stripe Payment Integration",
            "description": "Payment integration with Stripe and alternative methods"
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
            "name": "Custom Admin Dashboard",
            "description": "Custom admin panel for order and inventory management"
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
    "name": "adinfinity - E-commerce Development Άρτα",
    "description": "Custom ανάπτυξη e-commerce και online καταστήματα στην Άρτα",
    "url": "https://adinfinity.gr/website-development/e-commerce",
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
    "name": "adinfinity - E-commerce Development Arta",
    "description": "Custom e-commerce development and online stores in Arta",
    "url": "https://adinfinity.gr/website-development/e-commerce",
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
      
      // Core e-commerce services
      'κατασκευή eshop',
      'ecommerce development',
      'online store development',
      'custom ecommerce',
      'e-shop κατασκευή Ελλάδα',
      'custom online stores',
      
      // Technology stack
      'next.js ecommerce',
      'react ecommerce',
      'stripe integration',
      'typescript development',
      'custom web development',
      
      // Platform alternatives
      'shopify alternative',
      'woocommerce alternative',
      'no platform fees',
      'custom ecommerce solution',
      'zero monthly fees',
      
      // Payment systems
      'payment gateway integration',
      'stripe payments greece',
      'online payment systems',
      'apple pay integration',
      'google pay integration',
      
      // Greek market specific
      'greek ecommerce developer',
      'ελληνική κατασκευή eshop',
      'ecommerce greece',
      'online stores athens',
      'professional ecommerce greece',
      
      // Features
      'custom admin panel',
      'inventory management',
      'order management system',
      'analytics dashboard',
      'automated workflows',
      
      // Business terms
      'online business',
      'digital store',
      'e-commerce solution',
      'professional online store',
      'custom development'
    ],
    alternates: {
      canonical: 'https://adinfinity.gr/website-development/e-commerce',
      languages: {
        'el-GR': 'https://adinfinity.gr/website-development/e-commerce',
        'el': 'https://adinfinity.gr/website-development/e-commerce',
        'en': 'https://adinfinity.gr/website-development/e-commerce',
        'en-US': 'https://adinfinity.gr/website-development/e-commerce'
      },
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/website-development/e-commerce',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Ανάπτυξη Custom E-commerce adinfinity - Online Καταστήματα Next.js React'
            : 'Custom E-commerce Development adinfinity - Online Stores Next.js React',
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

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Structured Data - Professional Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ανάπτυξη Custom E-commerce",
            "description": "Custom ανάπτυξη e-commerce χωρίς Shopify/WooCommerce. Next.js, React, Stripe payments. Μηδενικές μηνιαίες χρεώσεις. Εξειδίκευση στην ελληνική αγορά για online καταστήματα.",
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
            "serviceType": ["E-commerce Development", "Custom Online Stores", "Stripe Integration", "Payment Systems", "Web Development"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Υπηρεσίες E-commerce Development",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom E-commerce Development",
                    "description": "Πλήρως custom online καταστήματα χωρίς platform fees"
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
                    "name": "Stripe Payment Integration",
                    "description": "Ενσωμάτωση πληρωμών με Stripe και εναλλακτικές μεθόδους"
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
                    "name": "Custom Admin Dashboard",
                    "description": "Προσαρμοσμένο panel διαχείρισης παραγγελιών και αποθέματος"
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
            "name": "adinfinity - E-commerce Development Άρτα",
            "description": "Custom ανάπτυξη e-commerce και online καταστήματα στην Άρτα",
            "url": "https://adinfinity.gr/website-development/e-commerce",
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
