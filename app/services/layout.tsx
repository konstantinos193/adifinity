import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Υπηρεσίες Marketing & Διαφήμισης Άρτα | adinfinity',
  description: 'Αναπτύξτε την επιχείρησή σας με τις υπηρεσίες της adinfinity: εκτυπώσεις, γραφιστική, ιστοσελίδες, διανομή εντύπων & digital marketing. 100+ ικανοποιημένοι πελάτες. ☎ 2681 303007',
  keywords: [
    'υπηρεσίες διαφήμισης',
    'διαφημιστικές υπηρεσίες',
    'διαφημιστικη εταιρεια',
    'marketing services',
    'marketing agency',
    'agency Άρτα',
    'εκτυπώσεις Άρτα',
    'γραφιστικη',
    'γραφικές τέχνες',
    'διανομη εντυπων',
    'διανομή εντύπων',
    'έντυποδιανομές',
    'ανάπτυξη ιστοσελίδων',
    'ιστοσελίδες',
    'έρευνα αγοράς',
    'digital marketing',
    'advertising services',
  ],
  openGraph: {
    title: 'Υπηρεσίες Marketing & Διαφήμισης Άρτα | adinfinity',
    description: 'Αναπτύξτε την επιχείρησή σας: εκτυπώσεις, γραφιστική, ιστοσελίδες, διανομή εντύπων & digital marketing. 100+ ικανοποιημένοι πελάτες στην Άρτα.',
    url: 'https://adinfinity.gr/services',
    siteName: 'adinfinity',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Υπηρεσίες',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Υπηρεσίες Marketing & Διαφήμισης Άρτα | adinfinity',
    description: 'Εκτυπώσεις, γραφιστική, ιστοσελίδες, διανομή εντύπων & digital marketing στην Άρτα. 100+ πελάτες.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/services',
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Marketing and Advertising Services',
            provider: {
              '@type': 'Organization',
              name: 'adinfinity',
              url: 'https://adinfinity.gr',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Greece',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Marketing Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Εκτυπώσεις',
                    description: 'Επαγγελματικές εκτυπώσεις υψηλής ποιότητας',
                    url: 'https://adinfinity.gr/prints',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Γραφικές Τέχνες',
                    description: 'Εντυπωσιακός σχεδιασμός και branding',
                    url: 'https://adinfinity.gr/graphic-design',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Έντυποδιανομές',
                    description: 'Στοχευμένη διανομή εντύπων',
                    url: 'https://adinfinity.gr/flyer-distribution',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Ιστοσελίδες',
                    description: 'Ανάπτυξη και σχεδιασμός ιστοσελίδων',
                    url: 'https://adinfinity.gr/website-development',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Έρευνα Αγοράς',
                    description: 'Έρευνα αγοράς και ανάλυση δεδομένων',
                    url: 'https://adinfinity.gr/market-research',
                  },
                },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  )
}

