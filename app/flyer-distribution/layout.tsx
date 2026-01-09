import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Διανομή Εντύπων Άρτα | adinfinity - Έντυποδιανομές',
  description: 'Διανομή εντύπων και έντυποδιανομές στην Άρτα. Πόρτα-πόρτα, διανομή φυλλαδίων, διανομή σε επιχειρήσεις και στοχευμένη διανομή. Επικοινωνήστε στο +30 2681 303007.',
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
    title: 'Έντυποδιανομές | adinfinity',
    description: 'Στοχευμένη διανομή εντύπων για μέγιστη προβολή και απήχηση.',
    url: 'https://adinfinity.gr/flyer-distribution',
    siteName: 'adinfinity',
    images: [
      {
        url: 'https://i.postimg.cc/2SygFYcf/Untitled-design-28.png',
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
    title: 'Έντυποδιανομές | adinfinity',
    description: 'Στοχευμένη διανομή εντύπων για μέγιστη προβολή.',
    images: ['https://i.postimg.cc/2SygFYcf/Untitled-design-28.png'],
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
  return children
}

