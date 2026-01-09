import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Εκτυπώσεις Άρτα | adinfinity - Επαγγελματικές Εκτυπώσεις',
  description: 'Εκτυπώσεις κοντά σας στην Άρτα. Επαγγελματικές εκτυπώσεις υψηλής ποιότητας: banners, flyers, premium εκτυπώσεις, συσκευασία και προωθητικό υλικό. Επικοινωνήστε στο +30 2681 303007.',
  keywords: [
    'εκτυπώσεις Άρτα',
    'εκτυπωσεισ κοντα μου',
    'εκτυπώσεις κοντά μου',
    'εκτυπώσεις adinfinity',
    'διαφημιστικές εκτυπώσεις',
    'premium εκτυπώσεις',
    'banner εκτυπώσεις',
    'flyers εκτυπώσεις',
    'επαγγελματικές εκτυπώσεις',
  ],
  openGraph: {
    title: 'Εκτυπώσεις Άρτα | adinfinity - Επαγγελματικές Εκτυπώσεις',
    description: 'Εκτυπώσεις κοντά σας στην Άρτα. Επαγγελματικές εκτυπώσεις υψηλής ποιότητας: banners, flyers, premium εκτυπώσεις.',
    url: 'https://adinfinity.gr/prints',
    siteName: 'adinfinity',
    images: [
      {
        url: 'https://i.postimg.cc/2SygFYcf/Untitled-design-28.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Εκτυπώσεις',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Εκτυπώσεις Άρτα | adinfinity',
    description: 'Εκτυπώσεις κοντά σας στην Άρτα. Επαγγελματικές εκτυπώσεις υψηλής ποιότητας.',
    images: ['https://i.postimg.cc/2SygFYcf/Untitled-design-28.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/prints',
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

export default function PrintsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

