import type { Metadata } from 'next'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('epigrafes_arta_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/epigrafes-arta',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/epigrafes-arta',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Επιγραφές Καταστημάτων Άρτα | Neon, LED & Store Signage | adinfinity'
            : 'Store Signage Arta | Neon, LED & Business Signs | adinfinity',
        },
      ],
      locale: localeMap[locale as keyof typeof localeMap],
      type: 'website',
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

export default function EpigrafesArtaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/*
        One JSON-LD graph for this route, every node cross-referenced by @id.

        Previously this file emitted free-standing ProfessionalService /
        LocalBusiness / Organization blocks with no @id, restating the
        company's address, telephone and social profiles — several of which
        contradicted the real ones in app/layout.tsx. Google saw three or four
        different businesses per page and had to pick one.

        The business entity is now stated once, in the root layout, and
        referenced here through `provider`. See lib/schema.ts.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
        pageGraph({
          path: "/epigrafes-arta",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Επιγραφές Άρτα", path: "/epigrafes-arta" },
          ],
          service: {
            path: "/epigrafes-arta",
            name: "Επιγραφές Καταστημάτων Άρτα",
            description: "Επαγγελματικές επιγραφές καταστημάτων στην Άρτα. Neon signs, LED signs, store signage, vehicle graphics, wayfinding και custom signage solutions.",
          },
        }),
        )}
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
                "name": "Πόσο κοστίζουν οι επιγραφές καταστημάτων;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Οι τιμές εξαρτώνται από το υλικό και το μέγεθος. Ακρυλικές επιγραφές από €50/τμ², LED signs από €150, neon signs από €200. Παρέχουμε δωρεάν προσφορά."
                }
              },
              {
                "@type": "Question",
                "name": "Παρέχετε εγκατάσταση;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ναι, παρέχουμε επαγγελματική εγκατάσταση σε όλη την Ήπειρο. Η εγκατάσταση περιλαμβάνεται στην τιμή για επιγραφές άνω των €200."
                }
              },
              {
                "@type": "Question",
                "name": "Ποια υλικά χρησιμοποιείτε;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Χρησιμοποιούμε ακρυλικό, PVC, αλουμίνιο, LED, neon, και ανθεκτικά υλικά για εξωτερική χρήση με εγγύηση αντοχής."
                }
              }
            ]
          }),
        }}
      />
      {children}
      <RelatedProjects projects={pickProjects('/epigrafes-arta')} />
    </>
  )
}
