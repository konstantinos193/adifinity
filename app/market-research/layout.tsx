import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'
import { getKeywords } from '@/lib/keywords'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('market_research_page')
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    keywords: getKeywords('market-research'),
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/market-research',
      siteName: 'adinfinity',
      images: [
        {
          url: '/images/og-image.png',
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
      title: t('seo.title'),
      description: t('seo.description'),
      images: ['/images/og-image.png'],
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
      {/* Structured Data - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Τι είναι η έρευνα ανταγωνισμού και γιατί χρειάζεται;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Η έρευνα ανταγωνισμού αναλύει τις στρατηγικές, τα δυνατά και αδύνατα σημεία των ανταγωνιστών σας. Σας βοηθά να βρείτε το ανταγωνιστικό πλεονέκτημά σας, να τοποθετηθείτε σωστά στην αγορά και να λάβετε τεκμηριωμένες αποφάσεις."
                }
              },
              {
                "@type": "Question",
                "name": "Πόσο διαρκεί μια έρευνα αγοράς;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ανάλογα με το εύρος, μια έρευνα αγοράς διαρκεί 1-4 εβδομάδες. Παραδίδουμε λεπτομερή αναφορά με στατιστικά, γραφήματα και στρατηγικές προτάσεις για την επιχείρησή σας."
                }
              },
              {
                "@type": "Question",
                "name": "Τι περιλαμβάνει η έρευνα καταναλωτών;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Η έρευνα καταναλωτών περιλαμβάνει δημοσκοπήσεις, ανάλυση αγοραστικής συμπεριφοράς και αξιολόγηση προτιμήσεων. Αξιοποιείτε πραγματικά δεδομένα για να προσαρμόσετε τα προϊόντα και υπηρεσίες σας."
                }
              },
              {
                "@type": "Question",
                "name": "Σε ποιες επιχειρήσεις απευθύνεστε;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Εξυπηρετούμε ΜΜΕ, τοπικές και περιφερειακές επιχειρήσεις στην Ήπειρο και σε όλη την Ελλάδα που θέλουν τεκμηριωμένες αποφάσεις ανάπτυξης. Ειδικευόμαστε στην ελληνική αγορά."
                }
              },
              {
                "@type": "Question",
                "name": "Ποια η διαφορά ανάλυσης αγοράς και SWOT Analysis;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Η ανάλυση αγοράς χαρτογραφεί το συνολικό περιβάλλον — ανταγωνισμός, τάσεις, κοινό. Το SWOT Analysis αξιολογεί την ίδια την επιχείρηση: δυνατά, αδύνατα σημεία, ευκαιρίες, απειλές. Παρέχουμε και τα δύο."
                }
              }
            ]
          }),
        }}
      />
      {children}
    </>
  )
}

