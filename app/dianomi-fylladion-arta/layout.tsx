import type { Metadata } from 'next'
import { faqNode, DIANOMI_FAQ } from '@/app/components/faqData'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('dianomi_fylladion_arta_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/dianomi-fylladion-arta',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/dianomi-fylladion-arta',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Διανομή Φυλλαδίων Άρτα - Flyer Distribution & Leaflet Distribution adinfinity'
            : 'Flyer Distribution Arta - Leaflet Distribution & Door-to-Door Marketing adinfinity',
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

export default function DianomiFylladionArtaLayout({
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
          path: "/dianomi-fylladion-arta",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Διανομή Φυλλαδίων Άρτα", path: "/dianomi-fylladion-arta" },
          ],
          service: {
            path: "/dianomi-fylladion-arta",
            name: "Διανομή Φυλλαδίων Άρτα",
            description: "Επαγγελματική διανομή φυλλαδίων στην Άρτα και Ήπειρο. Door-to-door distribution, flyer distribution, leaflet distribution, τοπικό marketing.",
          },
          faq: faqNode(DIANOMI_FAQ),
        }),
        )}
      />

      {children}
      <RelatedProjects projects={pickProjects('/dianomi-fylladion-arta')} />
    </>
  )
}
