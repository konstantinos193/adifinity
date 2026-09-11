import type { Metadata } from 'next'
import { faqNode, PRINTS_FAQ } from '@/app/components/faqData'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export const metadata: Metadata = {
  // This page owns the head "εκτυπώσεις Άρτα" query: it is the one Google
  // already ranks (468 impressions, pos 7.5) and it has 12 months of history.
  // /ektypwseis-arta is narrowed to large-format so the two stop competing.
  title: 'Εκτυπώσεις Άρτα | Κάρτες & Φυλλάδια σε 24ω | adinfinity',
  description:
    'Επαγγελματικές εκτυπώσεις στην Άρτα: επαγγελματικές κάρτες, φυλλάδια, αφίσες και καταλόγους. Προσφορά την ίδια μέρα, παράδοση σε 24 ώρες. Τηλ. 2681 303007',
  openGraph: {
    title: 'Εκτυπώσεις Άρτα | Digital Printing & Premium Εκτυπώσεις | adinfinity',
    description: 'Επαγγελματικές εκτυπώσεις στην Άρτα. Digital printing, banners, flyers, premium εκτυπώσεις. Γρήγορη παράδοση!',
    url: 'https://adinfinity.gr/prints',
    siteName: 'adinfinity',
    images: [
      {
        url: '/images/og-image.png',
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
    images: ['/images/og-image.png'],
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
          path: "/prints",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Εκτυπώσεις Άρτα", path: "/prints" },
          ],
          service: {
            path: "/prints",
            name: "Επαγγελματικές Εκτυπώσεις & Digital Printing",
            description: "Επαγγελματικές εκτυπώσεις στην Άρτα. Digital printing, banners, flyers, premium εκτυπώσεις, διαφημιστικά δώρα, συσκευασία.",
            serviceType: [
              "Digital Printing",
              "Large Format Printing",
              "Premium Printing",
              "Packaging",
            ],
            offers: [
              {
                name: "Εκτυπώσεις Μεγάλου Μεγέθους & Προβολής",
                description: "Επαγγελματικές κάρτες, flyers, banners, αφίσες, roll-up banners",
              },
              {
                name: "Εξειδικευμένες & Premium Εκτυπώσεις",
                description: "Χρυσοτυπία, ανάγλυφες εκτυπώσεις, UV spot, πλαστικοποιήσεις",
              },
              {
                name: "Συσκευασία & Προωθητικό Υλικό",
                description: "Ετικέτες προϊόντων, διαφημιστικά δώρα, εκτυπώσεις σε υφάσματα",
              },
            ],
          },
          faq: faqNode(PRINTS_FAQ),
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Υπηρεσίες", path: "/services" }, { name: "Εκτυπώσεις Άρτα", path: "/prints" } ]} />

      {children}
      <RelatedProjects projects={pickProjects('/prints')} />
    </>
  )
}

