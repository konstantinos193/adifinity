import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Γραφιστική Άρτα | Graphic Design & Branding | adinfinity',
  description: 'Επαγγελματική γραφιστική και graphic design στην Άρτα. Logo design, branding, εταιρική ταυτότητα, διαφημιστικά σχέδια. Αποτελέσματα που ξεχωρίζουν! +30 2681 303007',
  keywords: [
    'γραφιστικη',
    'γραφιστική',
    'γραφιστικο γραφειο',
    'γραφικά γραφεία',
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
    'digital design',
    'visual identity',
    'creative design',
  ],
  openGraph: {
    title: 'Γραφιστική Άρτα | Graphic Design & Branding | adinfinity',
    description: 'Επαγγελματική γραφιστική και graphic design στην Άρτα. Logo design, branding, εταιρική ταυτότητα. Αποτελέσματα που ξεχωρίζουν!',
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
    title: 'Γραφιστική Άρτα | Graphic Design | adinfinity',
    description: 'Επαγγελματική γραφιστική και graphic design. Logo design, branding, εταιρική ταυτότητα.',
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
  return (
    <>
      {/* Structured Data - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Γραφιστική & Graphic Design",
            "description": "Επαγγελματικές υπηρεσίες γραφιστικής και graphic design στην Άρτα. Logo design, branding, εταιρική ταυτότητα, διαφημιστικά σχέδια.",
            "provider": {
              "@type": "Organization",
              "name": "adinfinity",
              "url": "https://adinfinity.gr",
              "telephone": "+30-2681-303007",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Βασ. Πύρρου 30",
                "addressLocality": "Άρτα",
                "postalCode": "471 32",
                "addressCountry": "GR",
              },
            },
            "serviceType": ["Graphic Design", "Branding", "Logo Design", "Visual Identity"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Υπηρεσίες Γραφιστικής",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Branding & Εταιρική Ταυτότητα",
                    "description": "Δημιουργία μοναδικών εταιρικών ταυτοτήτων που ξεχωρίζουν",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Διαφημιστικά & Έντυπα Σχέδια",
                    "description": "Εντυπωσιακά σχέδια που προσελκύουν το κοινό",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ψηφιακά & Social Media Graphics",
                    "description": "Δυναμική παρουσία στον ψηφιακό κόσμο",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Εξειδικευμένες Δημιουργίες",
                    "description": "Καινοτόμες λύσεις για κάθε ανάγκη",
                  },
                },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  )
}

