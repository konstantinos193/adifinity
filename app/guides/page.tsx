import type { Metadata } from 'next'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import { withFacts } from '@/lib/company'
import { GUIDES, LEGACY_GUIDES } from '@/lib/content'
import { OG_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph, SITE_URL } from '@/lib/schema'
import { GuidesHubClient } from './GuidesHubClient'

const TITLE = 'Οδηγοί: Τι Κοστίζει Λογότυπο, Ιστοσελίδα, Επιγραφή | adinfinity'
const DESCRIPTION =
  'Οδηγοί κόστους και απόφασης από την adinfinity: πόσο κοστίζει ένα λογότυπο, μια ιστοσελίδα, μια επιγραφή, WordPress ή Next.js, και πώς διαφημίζεται μια μικρή επιχείρηση στην Άρτα. Με πραγματικές τιμές.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/guides`,
    siteName: 'adinfinity',
    type: 'website',
    locale: OG_LOCALE,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/images/og-image.png'] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function GuidesPage() {
  const trail = [{ name: 'Οδηγοί', path: '/guides' }]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          pageGraph({
            path: '/guides',
            breadcrumb: trail,
            extra: [
              {
                // The hub is a list; each item is the Article that page declares.
                '@type': 'ItemList',
                '@id': `${SITE_URL}/guides#list`,
                itemListElement: [
                  ...GUIDES.map((guide, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    url: `${SITE_URL}${guide.path}`,
                    name: withFacts(guide.h1.el),
                  })),
                  ...LEGACY_GUIDES.map((guide, i) => ({
                    '@type': 'ListItem',
                    position: GUIDES.length + i + 1,
                    url: `${SITE_URL}${guide.path}`,
                    name: guide.title.el,
                  })),
                ],
              },
            ],
          }),
        )}
      />
      <Breadcrumbs trail={trail} />
      <GuidesHubClient />
    </>
  )
}
