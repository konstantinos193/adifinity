import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Γραφιστική Άρτα | adinfinity - Γραφιστικό Γραφείο',
  description: 'Γραφιστική και γραφιστικό γραφείο στην Άρτα. Επαγγελματικός σχεδιασμός, branding, εταιρική ταυτότητα, logo design και διαφημιστικά σχέδια. Επικοινωνήστε στο +30 2681 303007.',
  keywords: [
    'γραφιστικη',
    'γραφιστική',
    'γραφιστικο γραφειο',
    'γραφιστικά γραφεία',
    'γραφικές τέχνες Άρτα',
    'graphic design',
    'graphic designs',
    'graphic art',
    'branding Άρτα',
    'εταιρική ταυτότητα',
    'logo design',
    'διαφημιστικός σχεδιασμός',
    'graphic design Άρτα',
    'ψηφιακός σχεδιασμός',
  ],
  openGraph: {
    title: 'Γραφικές Τέχνες | adinfinity',
    description: 'Εντυπωσιακός σχεδιασμός που κάνει τη διαφορά! Branding και εταιρική ταυτότητα.',
    url: 'https://adinfinity.gr/graphic-design',
    siteName: 'adinfinity',
    images: [
      {
        url: 'https://i.postimg.cc/2SygFYcf/Untitled-design-28.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Γραφικές Τέχνες',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Γραφικές Τέχνες | adinfinity',
    description: 'Εντυπωσιακός σχεδιασμός που κάνει τη διαφορά!',
    images: ['https://i.postimg.cc/2SygFYcf/Untitled-design-28.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/graphic-design',
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

export default function GraphicDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

