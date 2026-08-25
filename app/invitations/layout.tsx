import type { Metadata } from 'next'
import { faqPageSchema, INVITATIONS_FAQ } from "@/app/components/faqData"

export const metadata: Metadata = {
  title: 'Ψηφιακές Προσκλήσεις Γάμου | adinfinity',
  description:
    'Ψηφιακές προσκλήσεις γάμου με RSVP, video και mini-site. Στέλνετε ένα link και βλέπετε ποιος έρχεται, σε πραγματικό χρόνο. Τηλ. 2681 303007',
  openGraph: {
    title: 'Ψηφιακές Γαμήλιες Προσκλήσεις | adinfinity',
    description: 'Εντυπωσιακές ψηφιακές γαμήλιες προσκλήσεις με RSVP tracking, βίντεο και mini-website. Δημιουργήστε τη δική σας τώρα!',
    url: 'https://adinfinity.gr/invitations',
    siteName: 'adinfinity',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Ψηφιακές Γαμήλιες Προσκλήσεις',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ψηφιακές Γαμήλιες Προσκλήσεις | adinfinity',
    description: 'Εντυπωσιακές ψηφιακές γαμήλιες προσκλήσεις με RSVP tracking, βίντεο και mini-website.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/invitations',
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

export default function InvitationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data - SoftwareApplication + Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ψηφιακές Γαμήλιες Προσκλήσεις",
            "description": "Δημιουργήστε εντυπωσιακές ψηφιακές γαμήλιες προσκλήσεις με παρακολούθηση RSVP, βίντεο, mini-website και πλήρη διαχείριση καλεσμένων.",
            "url": "https://invitations.adinfinity.gr",
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
            },
            "serviceType": [
              "Digital Wedding Invitations",
              "Online RSVP Management",
              "Mini Wedding Website",
              "Video Wedding Invitation",
            ],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Τύποι Ψηφιακών Γαμήλιων Προσκλήσεων",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mini Γαμήλια Ιστοσελίδα",
                    "description": "Πλήρης mini-ιστοσελίδα με ιστορία, γκαλερί, εκδηλώσεις, μητρώο δώρων και RSVP.",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Video Πρόσκληση Pro",
                    "description": "Βίντεο πρόσκληση με αντίστροφη μέτρηση, γρήγορες ενέργειες και RSVP.",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Video Πρόσκληση",
                    "description": "Κομψή βίντεο πρόσκληση με απλό RSVP και εύκολη κοινοποίηση.",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(INVITATIONS_FAQ)),
        }}
      />
      {children}
    </>
  )
}
