import type { Metadata } from 'next'
import HomePageClient from './components/HomePageClient'

export const metadata: Metadata = {
  title: 'adinfinity | Διαφημιστική Εταιρεία Άρτα - Marketing Agency & Digital Services',
  description: 'Η adfinity είναι κορυφαία διαφημιστική εταιρεία στην Άρτα. Marketing, digital advertising, εκτυπώσεις, γραφιστική, ιστοσελίδες. Μετατρέπουμε ιδέες σε επιτυχίες! +30 2681 303007',
  keywords: [
    'adinfinity',
    'ad infinity',
    'infinity',
    'διαφημιστική εταιρεία',
    'διαφημιστικη',
    'διαφημιστική εταιρεία Άρτα',
    'διαφημιστικη εταιρεια',
    'marketing agency',
    'agency',
    'εταιρεία',
    'διαφήμιση Άρτα',
    'marketing Άρτα',
    'γραφιστικη',
    'γραφιστική',
    'γραφιστικο γραφειο',
    'γραφικά γραφεία',
    'διανομη εντυπων',
    'διανομή εντύπων',
    'διανομές εντύπων',
    'εκτυπώσεις Άρτα',
    'εκτυπωσεισ κοντα μου',
    'γραφικές τέχνες Άρτα',
    'ιστοσελίδες Άρτα',
    'έντυποδιανομές Άρτα',
    'έρευνα αγοράς',
    'διαφημιστικές υπηρεσίες',
    'digital marketing',
    'digital advertising',
    'advertising agency',
    'social media agency',
    'arta agency',
    'marketing company',
    'media agency',
    'business services',
    'creative agency',
    'brand development',
  ],
  alternates: {
    canonical: 'https://adinfinity.gr/',
  },
  openGraph: {
    title: 'adinfinity | Διαφημιστική Εταιρεία Άρτα - Marketing & Digital Services',
    description: 'Η adinfinity είναι κορυφαία διαφημιστική εταιρεία στην Άρτα. Marketing, digital advertising, εκτυπώσεις, γραφιστική. Μετατρέπουμε ιδέες σε επιτυχίες!',
    url: 'https://adinfinity.gr',
    siteName: 'adinfinity',
    images: [
      {
        url: 'https://i.postimg.cc/2SygFYcf/Untitled-design-28.png',
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
    description: 'Κορυφαία διαφημιστική εταιρεία στην Άρτα. Marketing, digital services, εκτυπώσεις, γραφιστική.',
    images: ['https://i.postimg.cc/2SygFYcf/Untitled-design-28.png'],
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
