import type { Metadata } from 'next'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Τιμοκατάλογος Υπηρεσιών Άρτα | adinfinity',
  description: 'Διαφανείς τιμές για ιστοσελίδες, γραφιστική, εκτυπώσεις, διανομή εντύπων & έρευνα αγοράς στην Άρτα. Δείτε τα πακέτα της adinfinity. ☎ 2681 303007',
  openGraph: {
    title: 'Τιμοκατάλογος Υπηρεσιών Άρτα | adinfinity',
    description: 'Διαφανείς τιμές για ιστοσελίδες, γραφιστική, εκτυπώσεις, διανομή εντύπων & έρευνα αγοράς στην Άρτα.',
    url: 'https://adinfinity.gr/pricing',
    siteName: 'adinfinity',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Τιμοκατάλογος Υπηρεσιών',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Τιμοκατάλογος Υπηρεσιών Άρτα | adinfinity',
    description: 'Διαφανείς τιμές για ιστοσελίδες, γραφιστική, εκτυπώσεις & διανομή εντύπων στην Άρτα.',
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
            breadcrumb: [{ name: 'Τιμοκατάλογος', path: '/pricing' }],
          }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[{ name: 'Τιμοκατάλογος', path: '/pricing' }]} />
      {children}
    </>
  )
}
