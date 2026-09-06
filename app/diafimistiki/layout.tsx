import type { Metadata } from 'next'
import { faqNodeFromMessages } from '@/app/components/faqData'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, ORG_REF, pageGraph, SITE_URL } from '@/lib/schema'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('diafimistiki_page')
  
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
      {/*
        Editorial route: an Article, not a second sales page.

        `author` and `publisher` were inline Organization literals — two more
        @id-less company nodes. They now reference the single entity, which
        already carries the logo Google wants on an Article publisher.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          pageGraph({
            path: '/diafimistiki',
            breadcrumb: [
              { name: 'Οδηγοί', path: '/services' },
              { name: 'Τι Κάνει μια Διαφημιστική', path: '/diafimistiki' },
            ],
            // Read from the same message array the visible FAQ section renders.
            // The old hand-copied block had drifted to three questions while the
            // page displayed more, which is the drift Google penalises.
            // `.raw` — the plain callable coerces non-strings to '' and the
            // array would arrive as an empty string, which is the silent i18n
            // failure this codebase keeps hitting.
            faq: faqNodeFromMessages(
              serverT('diafimistiki_page').raw('faq') as { question: string; answer: string }[],
            ),
            extra: [
              {
                '@type': 'Article',
                '@id': `${SITE_URL}/diafimistiki#article`,
                headline: 'Οδηγός Διαφημιστικής για Επιχειρήσεις',
                description:
                  'Ολοκληρωμένος οδηγός διαφημιστικής για επιχειρήσεις: digital marketing, social media, διαφημιστικά υλικά και στρατηγικές.',
                author: ORG_REF,
                publisher: ORG_REF,
                isPartOf: { '@id': `${SITE_URL}/diafimistiki#webpage` },
                datePublished: '2024-01-01',
                // A pinned date, not `new Date()`. Rebuilding the site is not
                // editing the article, and a dateModified that advances on every
                // deploy is a signal Google learns to discount.
                dateModified: '2026-08-17',
              },
            ],
          }),
        )}
      />
      {children}
    </>
  )
}
