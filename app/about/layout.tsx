import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ποιοι Είμαστε | adinfinity - Διαφημιστική Εταιρεία Άρτα',
  description: 'Γνωρίστε την διαφημιστική εταιρεία adinfinity στην Άρτα. Η ομάδα μας, η ιστορία μας και η πορεία μας στον χώρο της διαφήμισης από το 2013. Επικοινωνήστε στο +30 2681 303007.',
  keywords: [
    'adinfinity ομάδα',
    'διαφημιστική εταιρεία Άρτα',
    'ιστορία adinfinity',
    'ομάδα διαφήμισης',
    'marketing team Άρτα',
  ],
  openGraph: {
    title: 'Ποιοι Είμαστε | adinfinity - Διαφημιστική Εταιρεία Άρτα',
    description: 'Γνωρίστε την διαφημιστική εταιρεία adinfinity στην Άρτα. Η ομάδα μας και η πορεία μας από το 2013.',
    url: 'https://adinfinity.gr/about',
    siteName: 'adinfinity',
    images: [
      {
        url: 'https://i.postimg.cc/2SygFYcf/Untitled-design-28.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Ποιοι Είμαστε',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ποιοι Είμαστε | adinfinity',
    description: 'Μετατρέπουμε Ιδέες σε Επιτυχίες!',
    images: ['https://i.postimg.cc/2SygFYcf/Untitled-design-28.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/about',
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

