import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio & Έργα | adinfinity - Διαφημιστικά Έργα Άρτα',
  description: 'Εξερευνήστε το portfolio και τα διαφημιστικά έργα μας στην Άρτα. Case studies, branding projects, ιστοσελίδες και marketing campaigns. Επικοινωνήστε στο +30 2681 303007.',
  keywords: [
    'έργα adinfinity',
    'portfolio διαφήμισης',
    'case studies',
    'διαφημιστικά έργα Άρτα',
    'marketing portfolio',
  ],
  openGraph: {
    title: 'Portfolio & Έργα | adinfinity - Διαφημιστικά Έργα Άρτα',
    description: 'Εξερευνήστε το portfolio και τα διαφημιστικά έργα μας στην Άρτα. Case studies, branding και marketing campaigns.',
    url: 'https://adinfinity.gr/projects',
    siteName: 'adinfinity',
    images: [
      {
        url: 'https://i.postimg.cc/2SygFYcf/Untitled-design-28.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Τα Έργα μας',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio & Έργα | adinfinity',
    description: 'Εξερευνήστε το portfolio και τα διαφημιστικά έργα μας στην Άρτα.',
    images: ['https://i.postimg.cc/2SygFYcf/Untitled-design-28.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/projects',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

