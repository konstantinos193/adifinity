import type { Metadata } from 'next'
import { serverT } from '@/lib/metadata'
import { faqNode, FLYER_DISTRIBUTION_FAQ } from '@/app/components/faqData'
import { PRICES, euro } from '@/lib/company'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'

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
            priceRange: `από ${euro(PRICES.distributionLocal)}`,
          },
          // Same array the page renders via <FAQSection>, so schema and visible
          // content cannot drift — the previous hand-copied block had already.
          faq: faqNode(FLYER_DISTRIBUTION_FAQ),
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Υπηρεσίες", path: "/services" }, { name: "Διανομή Εντύπων", path: "/flyer-distribution" } ]} />

      {children}
    </>
  )
}

