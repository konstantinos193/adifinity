import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Διανομή Φυλλαδίων Άρτα | Στοχευμένη Διανομή Εντύπων | adinfinity',
  description: 'Επαγγελματική διανομή φυλλαδίων & εντύπων στην Άρτα. Πόρτα-πόρτα, στοχευμένη διανομή σε επιχειρήσεις και κατοικίες. Μέγιστη προβολή για την επιχείρησή σας. ☎ 2681 303007',
  keywords: [
    'διανομη εντυπων',
    'διανομή εντύπων',
    'διανομές εντύπων',
    'έντυποδιανομές',
    'έντυποδιανομές Άρτα',
    'διανομή flyers',
    'διανομή φυλλαδίων',
    'εταιρειεσ διανομησ φυλλαδιων',
    'πόρτα πόρτα διανομή',
    'διαφημιστική διανομή',
    'διανομή εντύπων Άρτα',
    'marketing διανομή',
    'διαφημιστικα φυλλαδια',
  ],
  openGraph: {
    title: 'Διανομή Φυλλαδίων Άρτα | adinfinity',
    description: 'Επαγγελματική διανομή φυλλαδίων & εντύπων στην Άρτα. Πόρτα-πόρτα, στοχευμένη διανομή για μέγιστη προβολή της επιχείρησής σας.',
    url: 'https://adinfinity.gr/flyer-distribution',
    siteName: 'adinfinity',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Έντυποδιανομές',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Διανομή Φυλλαδίων Άρτα | adinfinity',
    description: 'Επαγγελματική διανομή φυλλαδίων & εντύπων στην Άρτα. Στοχευμένη διανομή για μέγιστη προβολή.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/flyer-distribution',
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

export default function FlyerDistributionLayout({
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
            name: 'Διανομή Φυλλαδίων & Εντύπων',
            description: 'Επαγγελματική στοχευμένη διανομή φυλλαδίων και εντύπων στην Άρτα και την Ήπειρο. Πόρτα-πόρτα διανομή σε κατοικίες και επιχειρήσεις.',
            provider: {
              '@type': 'Organization',
              name: 'adinfinity',
              url: 'https://adinfinity.gr',
              telephone: '+30-2681-303007',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Βασ. Πύρρου 30',
                addressLocality: 'Άρτα',
                postalCode: '471 32',
                addressCountry: 'GR',
              },
            },
            serviceType: 'Flyer Distribution',
            areaServed: [
              { '@type': 'City', name: 'Άρτα' },
              { '@type': 'State', name: 'Ήπειρος' },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Υπηρεσίες Διανομής Εντύπων',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Πόρτα-Πόρτα Διανομή',
                    description: 'Διανομή φυλλαδίων σε κατοικίες και γραμματοκιβώτια',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Στοχευμένη Διανομή σε Επιχειρήσεις',
                    description: 'Διανομή εντύπων σε επιλεγμένες επιχειρήσεις και σημεία',
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

