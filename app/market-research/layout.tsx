import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Έρευνα Αγοράς Άρτα | adinfinity - Ανάλυση Αγοράς & Marketing Research',
  description: 'Έρευνα αγοράς και ανάλυση στην Άρτα. Έρευνα ανταγωνισμού, έρευνα καταναλωτών, market research και στρατηγικές προτάσεις. Επικοινωνήστε στο +30 2681 303007.',
  keywords: [
    'έρευνα αγοράς Άρτα',
    'ανάλυση αγοράς',
    'έρευνα καταναλωτών',
    'έρευνα ανταγωνισμού',
    'market research Greece',
    'marketing research',
    'ανάλυση δεδομένων',
  ],
  openGraph: {
    title: 'Έρευνα Αγοράς Άρτα | adinfinity - Ανάλυση Αγοράς',
    description: 'Έρευνα αγοράς και ανάλυση στην Άρτα. Έρευνα ανταγωνισμού, έρευνα καταναλωτών και market research.',
    url: 'https://adinfinity.gr/market-research',
    siteName: 'adinfinity',
    images: [
      {
        url: 'https://i.postimg.cc/2SygFYcf/Untitled-design-28.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Έρευνα Αγοράς',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Έρευνα Αγοράς Άρτα | adinfinity',
    description: 'Έρευνα αγοράς και ανάλυση στην Άρτα. Έρευνα ανταγωνισμού και market research.',
    images: ['https://i.postimg.cc/2SygFYcf/Untitled-design-28.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/market-research',
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

export default function MarketResearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

