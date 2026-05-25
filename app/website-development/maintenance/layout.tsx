import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('maintenance_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  // Dynamic content based on locale
  const structuredData = locale === 'el' ? {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Συντήρηση Ιστοσελίδων & Υποστήριξη",
    "description": "Επαγγελματικές υπηρεσίες συντήρησης και υποστήριξης ιστοσελίδων. Ενημερώσεις ασφαλείας, παρακολούθηση απόδοσης, συνεχής ανάπτυξη.",
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
    "serviceType": ["Website Maintenance", "Web Support", "Security Updates", "Performance Monitoring", "Ongoing Development"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Πακέτα Συντήρησης",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Βασικό Πακέτο Συντήρησης",
            "description": "2 ώρες ανάπτυξης/μήνα, ενημερώσεις ασφαλείας, παρακολούθηση διαθεσιμότητας"
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
            "name": "Πακέτο Ανάπτυξης",
            "description": "5 ώρες ανάπτυξης/μήνα, προτεραιότητα υποστήριξης, μηνιαίες αναφορές"
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
            "name": "Επαγγελματικό Πακέτο",
            "description": "10 ώρες ανάπτυξης/μήνα, πλήρης παρακολούθηση, εβδομαδιαίες συναντήσεις"
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
    "name": "Website Maintenance & Support",
    "description": "Professional website maintenance and support services. Security updates, performance monitoring, ongoing development.",
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
    "serviceType": ["Website Maintenance", "Web Support", "Security Updates", "Performance Monitoring", "Ongoing Development"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Maintenance Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Maintenance Plan",
            "description": "2 hours development/month, security updates, uptime monitoring"
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
            "name": "Growth Maintenance Plan",
            "description": "5 hours development/month, priority support, monthly reports"
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
            "name": "Pro Maintenance Plan",
            "description": "10 hours development/month, full monitoring, weekly check-ins"
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
    "name": "adinfinity - Συντήρηση Ιστοσελίδων Άρτα",
    "description": "Επαγγελματικές υπηρεσίες συντήρησης ιστοσελίδων στην Άρτα",
    "url": "https://adinfinity.gr/website-development/maintenance",
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
    "name": "adinfinity - Website Maintenance Arta",
    "description": "Professional website maintenance services in Arta",
    "url": "https://adinfinity.gr/website-development/maintenance",
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
      
      // Core maintenance services
      'συντήρηση ιστοσελίδων',
      'website maintenance',
      'web support',
      'ongoing development',
      'retainer services',
      'website updates',
      'technical support',
      'website management',
      
      // Security & Performance
      'security updates',
      'performance monitoring',
      'uptime monitoring',
      'website security',
      'web performance',
      'core web vitals',
      'speed optimization',
      
      // Development & Updates
      'continuous development',
      'website improvements',
      'feature updates',
      'bug fixes',
      'content updates',
      'website enhancements',
      
      // Maintenance plans
      'maintenance packages',
      'support plans',
      'retainer agreements',
      'monthly maintenance',
      'website care plans',
      'ongoing support',
      
      // Technology specific
      'next.js maintenance',
      'react maintenance',
      'web app maintenance',
      'ecommerce maintenance',
      'cms maintenance',
      'database maintenance',
      
      // Greek market specific
      'greek web maintenance',
      'συντήρηση ιστοσελίδων ελλάδα',
      'web support greece',
      'maintenance athens',
      'professional maintenance greece',
      
      // Business terms
      'website reliability',
      'business continuity',
      'digital presence maintenance',
      'online business support',
      'website uptime',
      'professional web care'
    ],
    alternates: {
      canonical: 'https://adinfinity.gr/website-development/maintenance',
      languages: {
        'el-GR': 'https://adinfinity.gr/website-development/maintenance',
        'el': 'https://adinfinity.gr/website-development/maintenance',
        'en': 'https://adinfinity.gr/website-development/maintenance',
        'en-US': 'https://adinfinity.gr/website-development/maintenance'
      },
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/website-development/maintenance',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Συντήρηση Ιστοσελίδων & Υποστήριξη adinfinity - Web Maintenance Support'
            : 'Website Maintenance & Support adinfinity - Web Maintenance Support',
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

export default function MaintenanceLayout({
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
            "name": "Συντήρηση Ιστοσελίδων & Υποστήριξη",
            "description": "Επαγγελματικές υπηρεσίες συντήρησης και υποστήριξης ιστοσελίδων. Ενημερώσεις ασφαλείας, παρακολούθηση απόδοσης, συνεχής ανάπτυξη.",
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
            "serviceType": ["Website Maintenance", "Web Support", "Security Updates", "Performance Monitoring", "Ongoing Development"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Πακέτα Συντήρησης",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Βασικό Πακέτο Συντήρησης",
                    "description": "2 ώρες ανάπτυξης/μήνα, ενημερώσεις ασφαλείας, παρακολούθηση διαθεσιμότητας"
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
                    "name": "Πακέτο Ανάπτυξης",
                    "description": "5 ώρες ανάπτυξης/μήνα, προτεραιότητα υποστήριξης, μηνιαίες αναφορές"
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
                    "name": "Επαγγελματικό Πακέτο",
                    "description": "10 ώρες ανάπτυξης/μήνα, πλήρης παρακολούθηση, εβδομαδιαίες συναντήσεις"
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
            "name": "adinfinity - Συντήρηση Ιστοσελίδων Άρτα",
            "description": "Επαγγελματικές υπηρεσίες συντήρησης ιστοσελίδων στην Άρτα",
            "url": "https://adinfinity.gr/website-development/maintenance",
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
