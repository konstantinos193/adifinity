import type { Metadata } from 'next'
import { serverT, SERVER_LOCALE } from "@/lib/metadata"
import { jsonLd, ORG_REF, pageGraph, SITE_URL } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('contact')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/contact',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/contact',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Επικοινωνία adinfinity - Μετατρέπουμε Ιδέες σε Επιτυχίες!'
            : 'Contact adinfinity - Transforming Ideas into Success!',
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/*
        ContactPage pointing at the one business entity.

        `mainEntity` used to be an inline Organization restating the address,
        telephone and contact point. That made a second, @id-less company node
        on the page — the duplication that costs a local business its entity
        consolidation. It now references the node in app/layout.tsx, which
        already carries all of those facts.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          pageGraph({
            path: '/contact',
            breadcrumb: [{ name: 'Επικοινωνία', path: '/contact' }],
            extra: [
              {
                '@type': 'ContactPage',
                '@id': `${SITE_URL}/contact#contactpage`,
                mainEntity: ORG_REF,
              },
            ],
          }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[{ name: 'Επικοινωνία', path: '/contact' }]} />
      {children}
    </>
  )
}

