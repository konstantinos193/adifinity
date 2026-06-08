import type { Metadata } from 'next'
import { getKeywords } from '@/lib/keywords'
import HomePageClient from './components/HomePageClient'

export const metadata: Metadata = {
  title: 'adinfinity | Διαφημιστική Εταιρεία Άρτα - Advertising & Digital Services',
  description: 'Διαφημιστική εταιρεία στην Άρτα με 100+ πελάτες. Γραφιστική, εκτυπώσεις, ιστοσελίδες, digital marketing & διανομή εντύπων. Μετατρέπουμε ιδέες σε επιτυχίες.',
  keywords: getKeywords('home'),
  alternates: {
    canonical: 'https://adinfinity.gr/',
    languages: {
      'el-GR': 'https://adinfinity.gr',
      'el': 'https://adinfinity.gr',
    },
  },
  openGraph: {
    title: 'adinfinity | Διαφημιστική Εταιρεία Άρτα - Advertising & Digital Services',
    description: 'Η adinfinity είναι κορυφαία διαφημιστική εταιρεία στην Άρτα. Διαφημιστικές υπηρεσίες, digital advertising, εκτυπώσεις, γραφιστική. Μετατρέπουμε ιδέες σε επιτυχίες!',
    url: 'https://adinfinity.gr',
    siteName: 'adinfinity',
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: 'adinfinity - Μετατρέπουμε Ιδέες σε Επιτυχίες!',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'adinfinity | Διαφημιστική Εταιρεία Άρτα',
    description: 'Κορυφαία διαφημιστική εταιρεία στην Άρτα. Διαφημιστικές υπηρεσίες, digital services, εκτυπώσεις, γραφιστική.',
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

export default function Home() {
  return <HomePageClient />
}
