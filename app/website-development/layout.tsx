import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ιστοσελίδες Άρτα | adinfinity - Κατασκευή Ιστοσελίδων & Web Development',
  description: 'Κατασκευή ιστοσελίδων στην Άρτα. Web development, responsive design, SEO, e-commerce και τεχνική υποστήριξη. Επικοινωνήστε στο +30 2681 303007.',
  keywords: [
    'ιστοσελίδες Άρτα',
    'κατασκευή ιστοσελίδων',
    'web development Άρτα',
    'SEO Άρτα',
    'responsive websites',
    'e-commerce websites',
    'διαφημιστικές ιστοσελίδες',
  ],
  openGraph: {
    title: 'Ιστοσελίδες Άρτα | adinfinity - Κατασκευή Ιστοσελίδων',
    description: 'Κατασκευή ιστοσελίδων στην Άρτα. Web development, responsive design, SEO και e-commerce.',
    url: 'https://adinfinity.gr/website-development',
    siteName: 'adinfinity',
    images: [
      {
        url: 'https://i.postimg.cc/2SygFYcf/Untitled-design-28.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Ιστοσελίδες',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ιστοσελίδες Άρτα | adinfinity',
    description: 'Κατασκευή ιστοσελίδων στην Άρτα. Web development, responsive design και SEO.',
    images: ['https://i.postimg.cc/2SygFYcf/Untitled-design-28.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/website-development',
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

export default function WebsiteDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

