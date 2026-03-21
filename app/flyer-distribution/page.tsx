import type { Metadata } from 'next'
import { FlyerDistributionClient } from './FlyerDistributionClient'

export const metadata: Metadata = {
  title: 'Έντυποδιανομές | adinfinity - Διανομή Εντύπων Άρτα',
  description: 'Επαγγελματικές διανομές εντύπων στην Άρτα: Πόρτα-πόρτα, B2B, στοχευμένη διανομή. Μέγιστη προβολή & αποτελέσματα. +30 2681 303007',
  keywords: [
    'εντυποδιανομές',
    'διανομή εντύπων',
    'διανομή φυλλαδίων',
    'flyer distribution',
    'door to door',
    'διανομή Άρτα',
    'διαφημιστικά έντυπα',
    'προβολή επιχείρησης',
    'marketing Άρτα',
    'διανομή σε οικίες',
    'διανομή σε επιχειρήσεις',
    'στοχευμένη διανομή',
    'leaflet distribution',
    'print advertising',
    'direct marketing',
  ],
  alternates: {
    canonical: 'https://adinfinity.gr/flyer-distribution',
    languages: {
      'el-GR': 'https://adinfinity.gr/flyer-distribution',
      'el': 'https://adinfinity.gr/flyer-distribution',
    },
  },
  openGraph: {
    title: 'Έντυποδιανομές | adinfinity - Διανομή Εντύπων Άρτα',
    description: 'Επαγγελματικές διανομές εντύπων: Πόρτα-πόρτα, B2B, στοχευμένη διανομή. Μέγιστη προβολή & αποτελέσματα.',
    url: 'https://adinfinity.gr/flyer-distribution',
    siteName: 'adinfinity',
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: 'Έντυποδιανομές adinfinity - Διανομή Εντύπων',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Έντυποδιανομές | adinfinity',
    description: 'Επαγγελματικές διανομές εντύπων στην Άρτα. Πόρτα-πόρτα, B2B, στοχευμένη διανομή.',
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

export default function FlyerDistributionPage() {
  return <FlyerDistributionClient />
}
