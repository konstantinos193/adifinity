import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Εκτυπώσεις Άρτα | Επαγγελματικές Εκτυπώσεις & Digital Printing | adinfinity',
  description: 'Επαγγελματικές εκτυπώσεις στην Άρτα. Digital printing, banners, flyers, premium εκτυπώσεις, διαφημιστικά δώρα, συσκευασία. Γρήγορη παράδοση! +30 2681 303007',
  keywords: [
    'εκτυπώσεις Άρτα',
    'εκτυπωσεισ κοντα μου',
    'εκτυπώσεις κοντά μου',
    'digital printing',
    'διαφημιστικές εκτυπώσεις',
    'premium εκτυπώσεις',
    'banner εκτυπώσεις',
    'flyers εκτυπώσεις',
    'επαγγελματικές εκτυπώσεις',
    'διαφημιστικά δώρα',
    'εκτυπώσεις φυλλάδια',
    'εκτυπώσεις εντυπα',
    'business cards printing',
    'poster printing',
    'large format printing',
  ],
  openGraph: {
    title: 'Εκτυπώσεις Άρτα | Digital Printing & Premium Εκτυπώσεις | adinfinity',
    description: 'Επαγγελματικές εκτυπώσεις στην Άρτα. Digital printing, banners, flyers, premium εκτυπώσεις. Γρήγορη παράδοση!',
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
    title: 'Εκτυπώσεις Άρτα | Digital Printing | adinfinity',
    description: 'Επαγγελματικές εκτυπώσεις στην Άρτα. Digital printing, banners, flyers. Γρήγορη παράδοση!',
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
  return (
    <>
      {/* Structured Data - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Επαγγελματικές Εκτυπώσεις & Digital Printing",
            "description": "Επαγγελματικές εκτυπώσεις στην Άρτα. Digital printing, banners, flyers, premium εκτυπώσεις, διαφημιστικά δώρα, συσκευασία.",
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
            "serviceType": ["Digital Printing", "Large Format Printing", "Premium Printing", "Packaging"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Υπηρεσίες Εκτυπώσεων",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Εκτυπώσεις Μεγάλου Μεγέθους & Προβολής",
                    "description": "Επαγγελματικές κάρτες, flyers, banners, αφίσες, roll-up banners",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Εξειδικευμένες & Premium Εκτυπώσεις",
                    "description": "Χρυσοτυπία, ανάγλυφες εκτυπώσεις, UV spot, πλαστικοποιήσεις",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Συσκευασία & Προωθητικό Υλικό",
                    "description": "Ετικέτες προϊόντων, διαφημιστικά δώρα, εκτυπώσεις σε υφάσματα",
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

