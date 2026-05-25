import { Metadata } from "next"
import DSAContentClient from "./DSAContentClient"

export const metadata: Metadata = {
  title: {
    default: "DSA Compliance | adinfinity",
    template: "%s | adinfinity",
  },
  description: "Our Digital Services Act compliance measures, content policies, and user protection procedures.",
  keywords: [
    "DSA compliance",
    "Digital Services Act",
    "content moderation",
    "user reporting",
    "transparency report",
    "safety measures",
    "content policy",
    "illegal content",
    "user protection",
    "Greek DSA compliance",
    "EU regulations",
    "online safety",
    "content removal",
    "reporting mechanisms",
    "DSA officer",
    "compliance procedures"
  ],
  openGraph: {
    title: "DSA Compliance | adinfinity",
    description: "Our Digital Services Act compliance measures, content policies, and user protection procedures.",
    url: "https://adinfinity.gr/dsa-compliance",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DSA Compliance - adinfinity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DSA Compliance | adinfinity",
    description: "Our Digital Services Act compliance measures, content policies, and user protection procedures.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://adinfinity.gr/dsa-compliance",
    languages: {
      "el-GR": "https://adinfinity.gr/dsa-compliance",
      "el": "https://adinfinity.gr/dsa-compliance",
      "en": "https://adinfinity.gr/dsa-compliance",
    },
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
}

export default function DSACompliancePage() {
  return (
    <>
      {/* Structured Data for DSA Compliance Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "DSA Compliance | adinfinity",
            description: "Our Digital Services Act compliance measures, content policies, and user protection procedures.",
            url: "https://adinfinity.gr/dsa-compliance",
            isPartOf: {
              "@type": "WebSite",
              name: "adinfinity",
              url: "https://adinfinity.gr",
            },
            about: {
              "@type": "Thing",
              name: "Digital Services Act",
              description: "EU regulation for digital services and online platforms",
            },
            mainEntity: {
              "@type": "Organization",
              name: "adinfinity",
              url: "https://adinfinity.gr",
              contactPoint: {
                "@type": "ContactPoint",
                email: "adenfinity@gmail.com",
                telephone: "+30-2681-303007",
                contactType: "DSA compliance",
                availableLanguage: ["Greek", "English"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vas. Pyrrou 30",
                addressLocality: "Arta",
                addressCountry: "GR",
              },
            },
            breadcrumbList: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Αρχική",
                  item: "https://adinfinity.gr",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "DSA Compliance",
                  item: "https://adinfinity.gr/dsa-compliance",
                },
              ],
            },
          }),
        }}
      />
      <DSAContentClient />
    </>
  )
}
