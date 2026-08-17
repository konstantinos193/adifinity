import type { Metadata } from 'next'
import HomePageClient from './components/HomePageClient'

export const metadata: Metadata = {
  title: 'Διαφημιστική Εταιρεία Άρτα | adinfinity - Graphic Design, Web Development',
  description: 'Κορυφαία διαφημιστική εταιρεία στην Άρτα. Graphic design, κατασκευή ιστοσελίδων, εκτυπώσεις, digital marketing. 100+ πελάτες. 2681 303007',
  alternates: {
    canonical: 'https://adinfinity.gr/',
  },
  openGraph: {
    title: 'adinfinity | Διαφημιστική Εταιρεία Άρτα - Advertising & Digital Services',
    description: 'Η adinfinity είναι κορυφαία διαφημιστική εταιρεία στην Άρτα. Διαφημιστικές υπηρεσίες, digital advertising, εκτυπώσεις, γραφιστική. Μετατρέπουμε ιδέες σε επιτυχίες!',
    url: 'https://adinfinity.gr',
    siteName: 'adinfinity',
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: 'adinfinity - Μετατρέπουμε Ιδέες σε Επιτυχίες!',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'adinfinity | Διαφημιστική Εταιρεία Άρτα',
    description: 'Κορυφαία διαφημιστική εταιρεία στην Άρτα. Διαφημιστικές υπηρεσίες, digital services, εκτυπώσεις, γραφιστική.',
    images: ['/images/og-image.png'],
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

export default function Home() {
  return (
    <>
      {/* FAQ Schema for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Ποιες υπηρεσίες προσφέρει η adinfinity;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Η adinfinity προσφέρει πλήρες φάσμα διαφημιστικών υπηρεσιών: graphic design και branding, επαγγελματικές εκτυπώσεις, κατασκευή ιστοσελίδων και web εφαρμογών, διανομή φυλλαδίων, έρευνα αγοράς και digital marketing."
                }
              },
              {
                "@type": "Question",
                "name": "Πού βρίσκεται η adinfinity;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Η adfinity εδρεύει στην Άρτα, στην οδό Βασιλείου Πύρρου 30. Εξυπηρετούμε πελάτες σε όλη την Ελλάδα, Κύπρο και την ελληνική διασπορά."
                }
              },
              {
                "@type": "Question",
                "name": "Πόσο καιρό λειτουργεί η adinfinity;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Η adinfinity λειτουργεί από το 2013, εξυπηρετώντας πάνω από 100 πελάτες με επιτυχία σε διάφορους τομείς."
                }
              },
              {
                "@type": "Question",
                "name": "Πώς μπορώ να επικοινωνήσω μαζί σας;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Μπορείτε να μας καλέσετε στο +30 2681 303007, να στείλετε email στο info@adinfinity.gr, ή να επισκεφθείτε το γραφείο μας στην Άρτα."
                }
              }
            ]
          }),
        }}
      />
      <HomePageClient />
    </>
  )
}
