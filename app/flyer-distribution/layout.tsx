import type { Metadata } from 'next'
import { serverT } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export async function generateMetadata(): Promise<Metadata> {
  const t = serverT('flyer_distribution_page')
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/flyer-distribution',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/flyer-distribution',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: 'Διανομή Φυλλαδίων adinfinity - Επαγγελματικές Υπηρεσίες Flyer Distribution',
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

export default function FlyerDistributionLayout({
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
          path: "/flyer-distribution",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Διανομή Εντύπων", path: "/flyer-distribution" },
          ],
          service: {
            path: "/flyer-distribution",
            name: "Διανομή Φυλλαδίων & Εντύπων",
            description: "Επαγγελματική στοχευμένη διανομή φυλλαδίων και εντύπων στην Άρτα και την Ήπειρο. Πόρτα-πόρτα διανομή σε κατοικίες και επιχειρήσεις.",
            serviceType: [
              "Flyer Distribution",
              "Leaflet Distribution",
              "Door to Door Distribution",
              "Targeted Distribution",
              "B2B Distribution",
            ],
            offers: [
              {
                name: "Πόρτα-Πόρτα Διανομή",
                description: "Διανομή φυλλαδίων σε κατοικίες και γραμματοκιβώτια",
              },
              {
                name: "Στοχευμένη Διανομή σε Επιχειρήσεις",
                description: "Διανομή εντύπων σε επιλεγμένες επιχειρήσεις και σημεία",
              },
              {
                name: "Targeted Distribution",
                description: "Στοχευμένη διανομή με βάση δημογραφικά και γεωγραφικά κριτήρια",
              },
            ],
          },
        }),
        )}
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
                "name": "Τι είναι η διανομή εντύπων και σε ποιες περιοχές δραστηριοποιείστε;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Η διανομή εντύπων είναι η επαγγελματική πόρτα-πόρτα παράδοση φυλλαδίων, καταλόγων και διαφημιστικού υλικού σε κατοικίες και επιχειρήσεις. Καλύπτουμε την Άρτα και την ευρύτερη περιοχή Ηπείρου."
                }
              },
              {
                "@type": "Question",
                "name": "Πόσα φυλλάδια μπορείτε να διανείμετε;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Αναλαμβάνουμε καμπάνιες από 500 έως 50.000+ έντυπα. Κάθε καμπάνια διανομής σχεδιάζεται στρατηγικά για μέγιστη απήχηση στο κοινό-στόχο σας."
                }
              },
              {
                "@type": "Question",
                "name": "Πόσος χρόνος χρειάζεται για τη διανομή;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Μια τυπική καμπάνια διανομής εντύπων στην Άρτα ολοκληρώνεται σε 1-5 εργάσιμες ημέρες. Παρέχουμε αναφορά ολοκλήρωσης μετά τη διανομή."
                }
              },
              {
                "@type": "Question",
                "name": "Προσφέρετε στοχευμένη διανομή σε συγκεκριμένες περιοχές;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ναι. Προσφέρουμε πλήρως στοχευμένη διανομή βάσει γεωγραφικής περιοχής, δημογραφικών χαρακτηριστικών ή τύπου επιχείρησης. Αναλύουμε το κοινό-στόχο σας και δημιουργούμε τη βέλτιστη διαδρομή."
                }
              },
              {
                "@type": "Question",
                "name": "Ποια υλικά αναλαμβάνετε;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Αναλαμβάνουμε διανομή φυλλαδίων, καταλόγων, μενού εστιατορίων, ενημερωτικών δελτίων, προωθητικών εντύπων — οποιοδήποτε έντυπο διαφημιστικό υλικό χρειάζεστε."
                }
              }
            ]
          }),
        }}
      />
      {children}
      <RelatedProjects projects={pickProjects('/flyer-distribution')} />
    </>
  )
}

