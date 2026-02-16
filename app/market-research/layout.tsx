import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Έρευνα Αγοράς Άρτα | Market Research & Ανάλυση Ανταγωνισμού | adinfinity',
  description: 'Επαγγελματική έρευνα αγοράς στην Άρτα. Market research, ανάλυση ανταγωνισμού, έρευνα καταναλωτών, στρατηγικές προτάσεις. Βασισμένα σε δεδομένα! +30 2681 303007',
  keywords: [
    'έρευνα αγοράς Άρτα',
    'ανάλυση αγοράς',
    'έρευνα καταναλωτών',
    'έρευνα ανταγωνισμού',
    'market research Greece',
    'marketing research',
    'ανάλυση δεδομένων',
    'business intelligence',
    'competitor analysis',
    'consumer insights',
    'market analysis',
    'στρατηγική μάρκετινγκ',
  ],
  openGraph: {
    title: 'Έρευνα Αγοράς Άρτα | Market Research & Ανάλυση Ανταγωνισμού | adinfinity',
    description: 'Επαγγελματική έρευνα αγοράς στην Άρτα. Market research, ανάλυση ανταγωνισμού, έρευνα καταναλωτών. Βασισμένα σε δεδομένα!',
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
    title: 'Έρευνα Αγοράς Άρτα | Market Research | adinfinity',
    description: 'Επαγγελματική έρευνα αγοράς. Market research, ανάλυση ανταγωνισμού, έρευνα καταναλωτών.',
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
  return (
    <>
      {/* Structured Data - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Έρευνα Αγοράς & Market Research",
            "description": "Επαγγελματική έρευνα αγοράς στην Άρτα. Market research, ανάλυση ανταγωνισμού, έρευνα καταναλωτών, στρατηγικές προτάσεις.",
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
            "serviceType": ["Market Research", "Competitor Analysis", "Consumer Insights", "Business Intelligence"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Υπηρεσίες Έρευνας Αγοράς",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ανάλυση Ανταγωνισμού",
                    "description": "Πλήρης ανάλυση του ανταγωνιστικού περιβάλλοντος και θέση στην αγορά",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Έρευνα Καταναλωτών",
                    "description": "Κατανόηση των αναγκών και συμπεριφοράς των καταναλωτών",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Market Analysis",
                    "description": "Ανάλυση τάσεων αγοράς και ευκαιριών για ανάπτυξη",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Στρατηγικές Προτάσεις",
                    "description": "Βασισμένες σε δεδομένα προτάσεις για στρατηγική μάρκετινγκ",
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

