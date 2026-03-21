import type { Metadata } from 'next'
import { ServicesPageClient } from './ServicesPageClient'

export const metadata: Metadata = {
  title: 'Υπηρεσίες | adinfinity - Διαφημιστική Εταιρεία Άρτα',
  description: 'Πλήρες φάσμα διαφημιστικών υπηρεσιών στην Άρτα: Εκτυπώσεις, γραφιστική, ιστοσελίδες, digital marketing, διανομή εντύπων, έρευνα αγοράς. Επαγγελματικές λύσεις +30 2681 303007',
  keywords: [
    'διαφημιστικές υπηρεσίες',
    'marketing υπηρεσίες',
    'digital marketing Άρτα',
    'εκτυπώσεις Άρτα',
    'γραφιστική Άρτα',
    'ιστοσελίδες Άρτα',
    'διανομή εντύπων',
    'έρευνα αγοράς',
    'advertising services',
    'creative agency',
    'business solutions',
    'επαγγελματικές υπηρεσίες',
    'εταιρικές λύσεις',
    'προβολή επιχείρησης',
    'digital strategy',
  ],
  alternates: {
    canonical: 'https://adinfinity.gr/services',
    languages: {
      'el-GR': 'https://adinfinity.gr/services',
      'el': 'https://adinfinity.gr/services',
    },
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
