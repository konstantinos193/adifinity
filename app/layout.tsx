import type React from "react"
import "./globals.css"
import "flag-icons/css/flag-icons.min.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LocaleProvider from "../components/LocaleProvider"
import { DynamicSEO } from "../components/DynamicSEO"
import CookieConsent from "../components/ui/CookieConsent"
import SkipLinks from "../components/ui/SkipLinks"
import AccessibilityWidget from "../components/ui/AccessibilityWidget"
import type { Metadata, Viewport } from "next"
import { getTranslations, getLocale } from 'next-intl/server'

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('seo')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  // Dynamic structured data based on locale
  const structuredData = locale === 'el' ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Διαφημιστική adinfinity",
    alternateName: "adinfinity",
    url: "https://adinfinity.gr",
    logo: {
      "@type": "ImageObject",
      url: "https://adinfinity.gr/logo.png",
      width: 200,
      height: 200,
    },
    description: "Μετατρέπουμε Ιδέες σε Επιτυχίες! Επαγγελματικές υπηρεσίες διαφήμισης, εκτυπώσεων, γραφικών τεχνών, έντυποδιανομών, ανάπτυξης ιστοσελίδων και έρευνας αγοράς.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Βασ. Πύρρου 30",
      addressLocality: "Άρτα",
      postalCode: "471 32",
      addressCountry: "GR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+30-2681-303007",
      contactType: "customer service",
      email: "adenfinity@gmail.com",
      areaServed: {
        "@type": "Country",
        name: "Greece",
      },
      availableLanguage: ["Greek", "el"],
    },
    areaServed: {
      "@type": "Country",
      name: "Greece",
    },
    sameAs: [
      "https://www.facebook.com/1.adinfinity",
      "https://www.instagram.com/adinfinityads/",
      "https://www.linkedin.com/in/adinfinity-ads-bb0a398a/?originalSubdomain=gr",
    ],
  } : {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "adinfinity Advertising Agency",
    alternateName: "adinfinity",
    url: "https://adinfinity.gr",
    logo: {
      "@type": "ImageObject",
      url: "https://adinfinity.gr/logo.png",
      width: 200,
      height: 200,
    },
    description: "Transforming Ideas into Success! Professional advertising, printing, graphic arts, flyer distribution, website development and market research services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vas. Pirrou 30",
      addressLocality: "Arta",
      postalCode: "471 32",
      addressCountry: "GR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+30-2681-303007",
      contactType: "customer service",
      email: "adenfinity@gmail.com",
      areaServed: {
        "@type": "Country",
        name: "Greece",
      },
      availableLanguage: ["English", "en"],
    },
    areaServed: {
      "@type": "Country",
      name: "Greece",
    },
    sameAs: [
      "https://www.facebook.com/1.adinfinity",
      "https://www.instagram.com/adinfinityads/",
      "https://www.linkedin.com/in/adinfinity-ads-bb0a398a/?originalSubdomain=gr",
    ],
  }
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: "adinfinity" }],
    creator: "adinfinity",
    publisher: "adinfinity",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://adinfinity.gr"),
    alternates: {
      canonical: "https://adinfinity.gr/",
      languages: {
        'el-GR': 'https://adinfinity.gr',
        'el': 'https://adinfinity.gr',
        'en': 'https://adinfinity.gr',
        'en-US': 'https://adinfinity.gr',
      },
    },
    openGraph: {
      type: "website",
      locale: localeMap[locale as keyof typeof localeMap],
      url: "https://adinfinity.gr",
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      siteName: "adinfinity",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: t('openGraph.imageAlt'),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: ["/images/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "jtMtOJZf8BIpM68R5nn5ZSR4YqqnbplmWlIjHlzPArA",
    },
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#07141C',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Διαφημιστική adinfinity",
              alternateName: "adinfinity",
              image: "/images/og-image.png",
              "@id": "https://adinfinity.gr",
              url: "https://adinfinity.gr",
              telephone: "+30-2681-303007",
              email: "adenfinity@gmail.com",
              potentialAction: {
                "@type": "CommunicateAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "tel:+302681303007",
                  actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform",
                  ],
                },
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Βασ. Πύρρου 30",
                addressLocality: "Άρτα",
                addressRegion: "Ήπειρος",
                postalCode: "471 32",
                addressCountry: "GR",
              },
              areaServed: {
                "@type": "Country",
                name: "Greece",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 39.1606,
                longitude: 20.9853,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday"],
                  opens: "09:00",
                  closes: "14:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "14:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Thursday", "Friday"],
                  opens: "18:00",
                  closes: "21:00",
                },
              ],
              priceRange: "$$",
            }),
          }}
        />
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "adinfinity",
              alternateName: "adinfinity - Διαφημιστική Εταιρεία Άρτα",
              url: "https://adinfinity.gr",
              description: "Διαφημιστική εταιρεία στην Άρτα. Επαγγελματικές υπηρεσίες διαφήμισης, γραφιστικής, εκτυπώσεων, διανομής εντύπων, ιστοσελίδων και digital marketing.",
              publisher: {
                "@type": "Organization",
                name: "adinfinity",
                logo: {
                  "@type": "ImageObject",
                  url: "https://adinfinity.gr/logo.png",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://adinfinity.gr/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* Structured Data - BreadcrumbList for homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Αρχική",
                  item: "https://adinfinity.gr",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LocaleProvider>
          <SkipLinks />
          <DynamicSEO />
          <AccessibilityWidget />
          <Header />
          <main id="main-content" role="main">{children}</main>
          <Footer id="footer" />
          <CookieConsent />
        </LocaleProvider>
      </body>
    </html>
  )
}
