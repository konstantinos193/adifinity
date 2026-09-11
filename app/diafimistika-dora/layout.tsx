import type { Metadata } from 'next'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('diafimistika_dora_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/diafimistika-dora',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/diafimistika-dora',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Διαφημιστικά Δώρα Επιχειρήσεων Άρτα | Branded Merchandise | adinfinity'
            : 'Promotional Gifts Arta | Branded Merchandise | adinfinity',
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

export default function DiafimistikaDoraLayout({
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
          path: "/diafimistika-dora",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Διαφημιστικά Δώρα", path: "/diafimistika-dora" },
          ],
          service: {
            path: "/diafimistika-dora",
            name: "Διαφημιστικά Δώρα Επιχειρήσεων Άρτα",
            description: "Επαγγελματικά διαφημιστικά δώρα και branded merchandise στην Άρτα. Corporate gifts, promotional items, branded merchandise, custom printing και personalized gifts για επιχειρήσεις.",
          },
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Υπηρεσίες", path: "/services" }, { name: "Διαφημιστικά Δώρα", path: "/diafimistika-dora" } ]} />
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
                "name": "Πόσο κοστίζουν τα διαφημιστικά δώρα;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Οι τιμές εξαρτώνται από το είδος και την ποσότητα. Στυλό από €0.50/τεμ., μπλοκ από €1.50/τεμ., κούπες από €2/τεμ. Παρέχουμε δωρεάν προσφορά για bulk orders."
                }
              },
              {
                "@type": "Question",
                "name": "Ποια minimum order quantity;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Minimum order εξαρτάται από το προϊόν. Στυλό: 50 τεμ., μπλοκ: 25 τεμ., κούπες: 25 τεμ. Custom items: 100+ τεμ."
                }
              },
              {
                "@type": "Question",
                "name": "Παρέχετε custom design;",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ναι, παρέχουμε custom design services για όλα τα branded merchandise. Μπορείτε να μας στείλετε το δικό σας logo ή να δημιουργήσουμε design για εσάς."
                }
              }
            ]
          }),
        }}
      />
      {children}
      <RelatedProjects projects={pickProjects('/diafimistika-dora')} />
    </>
  )
}
