import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "adinfinity Άρτα | #1 Διαφημιστική Εταιρεία & Marketing Agency",
    template: "%s | adinfinity",
  },
  description: "Κορυφαία διαφημιστική εταιρεία στην Άρτα με 100+ πελάτες. Εκτυπώσεις, γραφιστική, ιστοσελίδες, digital marketing. Αποτελέσματα που φαίνονται! +30 2681 303007",
  keywords: [
    "adinfinity",
    "ad infinity",
    "διαφημιστική εταιρεία",
    "διαφημιστική",
    "διαφημιστικη",
    "διαφημιστική εταιρεία Άρτα",
    "διαφημιστικη εταιρεια",
    "marketing agency",
    "agency",
    "διαφήμιση",
    "διαφήμιση Άρτα",
    "marketing",
    "marketing Άρτα",
    "γραφιστικη",
    "γραφιστική",
    "γραφιστικο γραφειο",
    "γραφικές τέχνες",
    "εκτυπώσεις",
    "εκτυπώσεις Άρτα",
    "διανομη εντυπων",
    "διανομή εντύπων",
    "διανομές εντύπων",
    "έντυποδιανομές",
    "ιστοσελίδες",
    "ιστοσελίδες Άρτα",
    "έρευνα αγοράς",
    "branding",
    "διαφημιστικές υπηρεσίες",
    "digital marketing",
    "digital advertising",
    "advertising agency",
    "social media agency",
    "infinity",
    "arta agency",
    "Άρτα",
    "Ελλάδα",
    "Greece",
    "creative agency",
    "graphic design",
    "web development",
    "flyer distribution",
    "print services",
  ],
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
      "el-GR": "https://adinfinity.gr",
      "el": "https://adinfinity.gr",
    },
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://adinfinity.gr",
    title: "adinfinity Άρτα | Διαφημιστική Εταιρεία & Marketing",
    description: "Διαφημιστική εταιρεία στην Άρτα. Εκτυπώσεις, γραφιστική, ιστοσελίδες, διανομή εντύπων. Επικοινωνήστε: +30 2681 303007",
    siteName: "adinfinity",
    images: [
      {
        url: "https://i.postimg.cc/2SygFYcf/Untitled-design-28.png",
        width: 1200,
        height: 630,
        alt: "adinfinity - Μετατρέπουμε Ιδέες σε Επιτυχίες!",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "adinfinity | Μετατρέπουμε Ιδέες σε Επιτυχίες!",
    description: "Επαγγελματικές υπηρεσίες διαφήμισης, εκτυπώσεων, γραφικών τεχνών και ανάπτυξης ιστοσελίδων.",
    images: ["https://i.postimg.cc/2SygFYcf/Untitled-design-28.png"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el">
      <head>
        {/* Hreflang tags for Greek language */}
        <link rel="alternate" hrefLang="el" href="https://adinfinity.gr" />
        <link rel="alternate" hrefLang="el-GR" href="https://adinfinity.gr" />
        <link rel="alternate" hrefLang="x-default" href="https://adinfinity.gr" />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "adinfinity",
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
            }),
          }}
        />
        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "adinfinity",
              image: "https://i.postimg.cc/2SygFYcf/Untitled-design-28.png",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
