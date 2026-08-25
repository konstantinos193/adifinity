import type { Metadata } from 'next'
import { ServicesPageClient } from './ServicesPageClient'

export const metadata: Metadata = {
  // Head term kept distinct from the homepage ("Διαφημιστική Εταιρεία Άρτα")
  // and from /diafimistiki-eteria ("Υπηρεσίες Διαφημιστικής Άρτα").
  title: 'Υπηρεσίες | Εκτυπώσεις, Γραφιστική & Websites',
  description:
    'Όλες οι υπηρεσίες της adinfinity: εκτυπώσεις, γραφιστική, επιγραφές, ιστοσελίδες, digital marketing και διανομή εντύπων. Τηλ. 2681 303007',
  alternates: {
    canonical: 'https://adinfinity.gr/services',
  },
  openGraph: {
    title: 'Υπηρεσίες | adinfinity - Διαφημιστικές Υπηρεσίες Άρτα',
    description: 'Πλήρες φάσμα διαφημιστικών υπηρεσιών: Εκτυπώσεις, γραφιστική, ιστοσελίδες, digital marketing, διανομή εντύπων.',
    url: 'https://adinfinity.gr/services',
    siteName: 'adinfinity',
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: 'Υπηρεσίες adinfinity - Διαφημιστικές Υπηρεσίες',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Υπηρεσίες | adinfinity',
    description: 'Πλήρες φάσμα διαφημιστικών υπηρεσιών στην Άρτα. Εκτυπώσεις, γραφιστική, ιστοσελίδες, digital marketing.',
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

export default function ServicesPage() {
  return <ServicesPageClient />
}
