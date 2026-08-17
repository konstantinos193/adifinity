import type React from "react"
import "./globals.css"
import "flag-icons/css/flag-icons.min.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LocaleProvider from "../components/LocaleProvider"
import CookieConsent from "../components/ui/CookieConsent"
import SkipLinks from "../components/ui/SkipLinks"
import AccessibilityWidget from "../components/ui/AccessibilityWidget"
import GoogleAnalytics from "../components/GoogleAnalytics"
import StickyMobileCTA from "../components/ui/StickyMobileCTA"
import type { Metadata, Viewport } from "next"
import { getTranslations, getLocale } from 'next-intl/server'

const inter = Inter({ subsets: ["latin"] })

const SITE_URL = "https://adinfinity.gr"

/**
 * Services advertised in the Organization's OfferCatalog. Each entry must point
 * at a real, indexable route so Google can tie the service to a landing page.
 */
const SERVICES = [
  { el: "Γραφιστική", en: "Graphic Design", path: "/graphic-design" },
  { el: "Εκτυπώσεις", en: "Printing", path: "/prints" },
  { el: "Κατασκευή Ιστοσελίδων", en: "Website Development", path: "/website-development" },
  { el: "Διανομή Εντύπων", en: "Flyer Distribution", path: "/flyer-distribution" },
  { el: "Επιγραφές", en: "Signage", path: "/epigrafes-arta" },
  { el: "Έρευνα Αγοράς", en: "Market Research", path: "/market-research" },
  { el: "Διαφημιστικά Δώρα", en: "Promotional Gifts", path: "/diafimistika-dora" },
  { el: "Ψηφιακά Προσκλητήρια", en: "Digital Invitations", path: "/invitations" },
] as const

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('seo')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    // Each page already includes the brand in its own title, so we do NOT use a
    // `template` here (that previously produced duplicated "… | adinfinity | adinfinity").
    title: t('title.default'),
    description: t('description'),
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
      canonical: "/",
      // NOTE: no `languages`/hreflang here. Locale is negotiated per-request
      // (cookie + Accept-Language) and every locale is served from the SAME
      // URL — there is no /en URL space. Advertising hreflang to
      // https://adinfinity.gr/en previously pointed Google at a 404.
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Must reflect the locale actually rendered — hardcoding "el" mislabels the
  // page for English visitors, for screen readers and for Google alike.
  const locale = await getLocale()
  const isGreek = locale === 'el'

  return (
    <html lang={locale}>
      <head>
        {/* Preconnect hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://adinfinity.gr" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/*
          Structured data as a single cross-linked @graph.

          Previously this was three disconnected blocks, and the Organization
          node (the one carrying `sameAs` social profiles and the founder) was
          built inside generateMetadata but never rendered. Google needs one
          canonical business entity, so LocalBusiness/Organization are merged
          into a single AdvertisingAgency node that everything else references
          by @id.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  // AdvertisingAgency is a subtype of LocalBusiness -> Organization,
                  // so this one node satisfies all three.
                  "@type": "AdvertisingAgency",
                  "@id": `${SITE_URL}/#organization`,
                  name: isGreek ? "Διαφημιστική adinfinity" : "adinfinity Advertising Agency",
                  alternateName: "adinfinity",
                  legalName: "adinfinity",
                  url: SITE_URL,
                  description: isGreek
                    ? "Μετατρέπουμε Ιδέες σε Επιτυχίες! Επαγγελματικές υπηρεσίες διαφήμισης, εκτυπώσεων, γραφικών τεχνών, εντυποδιανομών, ανάπτυξης ιστοσελίδων και έρευνας αγοράς στην Άρτα."
                    : "Transforming Ideas into Success! Professional advertising, printing, graphic arts, flyer distribution, website development and market research services in Arta, Greece.",
                  logo: {
                    "@type": "ImageObject",
                    "@id": `${SITE_URL}/#logo`,
                    url: `${SITE_URL}/logo.png`,
                    width: 396,
                    height: 105,
                    caption: "adinfinity",
                  },
                  image: `${SITE_URL}/images/og-image.png`,
                  telephone: "+30-2681-303007",
                  email: "info@adinfinity.gr",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: isGreek ? "Βασ. Πύρρου 30" : "Vas. Pirrou 30",
                    addressLocality: isGreek ? "Άρτα" : "Arta",
                    addressRegion: isGreek ? "Ήπειρος" : "Epirus",
                    postalCode: "471 32",
                    addressCountry: "GR",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 39.1606,
                    longitude: 20.9853,
                  },
                  hasMap: "https://www.google.com/maps/search/?api=1&query=39.1606,20.9853",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+30-2681-303007",
                    email: "info@adinfinity.gr",
                    contactType: "customer service",
                    areaServed: "GR",
                    availableLanguage: ["el", "en"],
                  },
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
                  areaServed: [
                    { "@type": "City", name: isGreek ? "Άρτα" : "Arta" },
                    { "@type": "AdministrativeArea", name: isGreek ? "Ήπειρος" : "Epirus" },
                    { "@type": "Country", name: "Greece" },
                    { "@type": "Country", name: "Cyprus" },
                  ],
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
                  priceRange: "€€",
                  currenciesAccepted: "EUR",
                  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
                  founder: {
                    "@type": "Person",
                    "@id": `${SITE_URL}/#founder`,
                    name: isGreek ? "Μάνος Κόσμας" : "Manos Kosmas",
                    alternateName: isGreek ? "Manos Kosmas" : "Μάνος Κόσμας",
                    jobTitle: isGreek ? "Ιδρυτής" : "Founder",
                  },
                  knowsLanguage: ["el", "en"],
                  sameAs: [
                    "https://www.facebook.com/1.adinfinity",
                    "https://www.instagram.com/adinfinityads/",
                    "https://www.linkedin.com/in/adinfinity-ads-bb0a398a/?originalSubdomain=gr",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: isGreek ? "Υπηρεσίες adinfinity" : "adinfinity Services",
                    itemListElement: SERVICES.map((service) => ({
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: isGreek ? service.el : service.en,
                        url: `${SITE_URL}${service.path}`,
                        provider: { "@id": `${SITE_URL}/#organization` },
                        areaServed: { "@type": "City", name: isGreek ? "Άρτα" : "Arta" },
                      },
                    })),
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: "adinfinity",
                  alternateName: isGreek
                    ? "adinfinity - Διαφημιστική Εταιρεία Άρτα"
                    : "adinfinity - Advertising Agency Arta",
                  description: isGreek
                    ? "Διαφημιστική εταιρεία στην Άρτα. Επαγγελματικές υπηρεσίες διαφήμισης, γραφιστικής, εκτυπώσεων, διανομής εντύπων, ιστοσελίδων και digital marketing."
                    : "Advertising agency in Arta, Greece. Professional advertising, graphic design, printing, flyer distribution, web development and digital marketing services.",
                  inLanguage: isGreek ? "el-GR" : "en-US",
                  publisher: { "@id": `${SITE_URL}/#organization` },
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${SITE_URL}/#breadcrumb`,
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: isGreek ? "Αρχική" : "Home",
                      item: SITE_URL,
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LocaleProvider>
          <SkipLinks />
          <AccessibilityWidget />
          <Header />
          <main id="main-content" role="main">{children}</main>
          <Footer />
          <CookieConsent />
          <GoogleAnalytics />
          <StickyMobileCTA />
        </LocaleProvider>
      </body>
    </html>
  )
}
