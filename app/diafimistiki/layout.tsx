import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('diafimistiki_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/diafimistiki',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/diafimistiki',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Διαφημιστική - Οδηγός Digital Marketing & Διαφήμισης | adinfinity'
            : 'Advertising Guide - Digital Marketing & Advertising Guide | adinfinity',
        },
      ],
      locale: localeMap[locale as keyof typeof localeMap],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.title'),
      description: t('seo.description'),
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
}

export default function DiafimistikiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Οδηγός Διαφημιστικής για Επιχειρήσεις",
            "description": "Ολοκληρωμένος οδηγός διαφημιστικής για επιχειρήσεις: digital marketing, social media, διαφημιστικά υλικά και στρατηγικές.",
            "author": {
              "@type": "Organization",
              "name": "adinfinity",
              "url": "https://adinfinity.gr"
            },
            "publisher": {
              "@type": "Organization",
              "name": "adinfinity",
              "url": "https://adinfinity.gr",
              "logo": {
                "@type": "ImageObject",
                "url": "https://adinfinity.gr/logo.png"
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString().split('T')[0]
          }),
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Τι είναι η διαφημιστική;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Η διαφημιστική είναι η τέχνη και η επιστήμη της προώθησης προϊόντων, υπηρεσιών και brands μέσω διαφόρων καναλιών επικοινωνίας για να αυξήσουν τις πωλήσεις και την αναγνωρισιμότητα."
                }
              },
              {
                "@type": "Question",
                "name": "Πόσο κοστίζει η διαφημιστική;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Το κόστος διαφημιστικής ποικίλλει ανάλογα με το κανάλι και το budget. Social media campaigns ξεκινούν από €200/μήνα, ενώ complete advertising packages από €500/μήνα."
                }
              },
              {
                "@type": "Question",
                "name": "Ποια κανάλια διαφημιστικής είναι πιο αποτελεσματικά;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Τα πιο αποτελεσματικά κανάλια εξαρτώνται από το target audience. Για B2C: social media, Google Ads, influencers. Για B2B: LinkedIn, email marketing, content marketing."
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
