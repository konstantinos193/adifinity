import type { Metadata } from 'next'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Πακέτα Υπηρεσιών Άρτα | Τι Περιλαμβάνει Κάθε Πακέτο | adinfinity',
  description: 'Τα πακέτα της adinfinity για ιστοσελίδες, γραφιστική, εκτυπώσεις, διανομή εντύπων και έρευνα αγοράς στην Άρτα: τι περιλαμβάνει το καθένα, πόσο χρόνο παίρνει, πώς κοστολογείται. Γραπτή προσφορά σε 24 ώρες.',
  openGraph: {
    title: 'Πακέτα Υπηρεσιών Άρτα | adinfinity',
    description: 'Τι περιλαμβάνει κάθε πακέτο για ιστοσελίδες, γραφιστική, εκτυπώσεις, διανομή εντύπων και έρευνα αγοράς στην Άρτα. Γραπτή προσφορά σε 24 ώρες.',
    url: 'https://adinfinity.gr/pricing',
    siteName: 'adinfinity',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Πακέτα Υπηρεσιών',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Πακέτα Υπηρεσιών Άρτα | adinfinity',
    description: 'Τι περιλαμβάνει κάθε πακέτο για ιστοσελίδες, γραφιστική, εκτυπώσεις και διανομή εντύπων στην Άρτα.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/pricing',
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

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/*
        This route already had a correct two-level breadcrumb — but the root
        layout emitted a *second*, one-item BreadcrumbList on every page, so
        Google saw two competing trails here and rendered neither. The root one
        is gone; this is now the only breadcrumb on the page.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          pageGraph({
            path: '/pricing',
            breadcrumb: [{ name: 'Πακέτα υπηρεσιών', path: '/pricing' }],
          }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[{ name: 'Πακέτα υπηρεσιών', path: '/pricing' }]} />
      {children}
    </>
  )
}
