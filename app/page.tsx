import type { Metadata } from 'next'
import HomePageClient from './components/HomePageClient'

export const metadata: Metadata = {
  title: 'adinfinity Άρτα | Διαφημιστική Εταιρεία & Marketing',
  description: 'Διαφημιστική εταιρεία στην Άρτα. Εκτυπώσεις, γραφιστική, ιστοσελίδες, διανομή εντύπων. Επικοινωνήστε: +30 2681 303007',
  keywords: [
    'adinfinity',
    'ad infinity',
    'διαφημιστική εταιρεία',
    'διαφημιστική',
    'διαφημιστικη',
    'διαφημιστική εταιρεία Άρτα',
    'διαφημιστικη εταιρεια',
    'marketing agency',
    'agency',
    'διαφήμιση Άρτα',
    'marketing Άρτα',
    'γραφιστικη',
    'γραφιστική',
    'γραφιστικο γραφειο',
    'γραφιστικά γραφεία',
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
    'infinity',
    'arta agency',
    'marketing company',
    'media agency',
  ],
  alternates: {
    canonical: 'https://adinfinity.gr/',
  },
  openGraph: {
    title: 'adinfinity Άρτα | Διαφημιστική Εταιρεία & Marketing',
    description: 'Διαφημιστική εταιρεία στην Άρτα. Εκτυπώσεις, γραφιστική, ιστοσελίδες, διανομή εντύπων. Επικοινωνήστε: +30 2681 303007',
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
    title: 'adinfinity Άρτα | Διαφημιστική Εταιρεία',
    description: 'Διαφημιστική εταιρεία στην Άρτα. Εκτυπώσεις, γραφιστική, ιστοσελίδες. Επικοινωνήστε: +30 2681 303007',
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
