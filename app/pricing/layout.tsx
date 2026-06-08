import type { Metadata } from 'next'
import { getKeywords } from '@/lib/keywords'

export const metadata: Metadata = {
  title: 'Τιμοκατάλογος Υπηρεσιών Άρτα | adinfinity',
  description: 'Διαφανείς τιμές για ιστοσελίδες, γραφιστική, εκτυπώσεις, διανομή εντύπων & έρευνα αγοράς στην Άρτα. Δείτε τα πακέτα της adinfinity. ☎ 2681 303007',
  keywords: getKeywords('pricing'),
  openGraph: {
    title: 'Τιμοκατάλογος Υπηρεσιών Άρτα | adinfinity',
    description: 'Διαφανείς τιμές για ιστοσελίδες, γραφιστική, εκτυπώσεις, διανομή εντύπων & έρευνα αγοράς στην Άρτα.',
    url: 'https://adinfinity.gr/pricing',
    siteName: 'adinfinity',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Τιμοκατάλογος Υπηρεσιών',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Τιμοκατάλογος Υπηρεσιών Άρτα | adinfinity',
    description: 'Διαφανείς τιμές για ιστοσελίδες, γραφιστική, εκτυπώσεις & διανομή εντύπων στην Άρτα.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/pricing',
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

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Αρχική',
                item: 'https://adinfinity.gr',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Τιμοκατάλογος',
                item: 'https://adinfinity.gr/pricing',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
