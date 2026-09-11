import type { Metadata } from 'next'
import { faqNode, EKTYPWSEIS_FAQ } from '@/app/components/faqData'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('ektypwseis_arta_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/ektypwseis-arta',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/ektypwseis-arta',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Εκτυπώσεις Άρτα - Κάρτες, Φυλλάδια, Κατάλογοι & Έντυπα adinfinity'
            : 'Prints Arta - Business Cards, Flyers, Catalogs & Print Materials adinfinity',
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

export default function EktypwseisArtaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/*
        The LocalBusiness node here was a second company — its own address, geo,
        telephone and payment terms — sitting alongside the AdvertisingAgency in
        app/layout.tsx. This route is a *service* of that one business, so it
        says so and points at it.

        The page also had no breadcrumb of its own, which left it relying on the
        root layout's one-item trail. It now declares the real hierarchy.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          pageGraph({
            path: '/ektypwseis-arta',
            breadcrumb: [
              { name: 'Υπηρεσίες', path: '/services' },
              { name: 'Εκτυπώσεις Άρτα', path: '/prints' },
              { name: 'Ψηφιακές Εκτυπώσεις Μεγάλου Μεγέθους', path: '/ektypwseis-arta' },
            ],
            service: {
              path: '/ektypwseis-arta',
              name: 'Ψηφιακές Εκτυπώσεις Μεγάλου Μεγέθους',
              description:
                'Ψηφιακή εκτύπωση μεγάλου μεγέθους στην Άρτα: banner, roll-up, αφίσες, αυτοκόλλητα και συσκευασία. Δείγμα πριν την παραγωγή.',
              serviceType: [
                'Large Format Printing',
                'Banner Printing',
                'Poster Printing',
                'Sticker Printing',
                'Packaging',
              ],
            },
            faq: faqNode(EKTYPWSEIS_FAQ),
          }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: 'Υπηρεσίες', path: '/services' }, { name: 'Εκτυπώσεις Άρτα', path: '/prints' }, { name: 'Ψηφιακές Εκτυπώσεις Μεγάλου Μεγέθους', path: '/ektypwseis-arta' } ]} />
      {children}
      <RelatedProjects projects={pickProjects('/ektypwseis-arta')} />
    </>
  )
}
