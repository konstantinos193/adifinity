import type { Metadata } from 'next'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import { faqNodeFromMessages } from '@/app/components/faqData'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import RelatedProjects from '@/app/components/RelatedProjects'
import RelatedLinks from '@/app/components/RelatedLinks'
import { SIGNAGE_RELATED } from '@/app/components/relatedLinksData'
import { pickProjects } from '@/lib/serviceProjects'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('epigrafes_arta_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/epigrafes-arta',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/epigrafes-arta',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Επιγραφές Καταστημάτων Άρτα | Neon, LED & Store Signage | adinfinity'
            : 'Store Signage Arta | Neon, LED & Business Signs | adinfinity',
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

export default function EpigrafesArtaLayout({
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
          path: "/epigrafes-arta",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Επιγραφές Άρτα", path: "/epigrafes-arta" },
          ],
          service: {
            path: "/epigrafes-arta",
            name: "Επιγραφές Καταστημάτων Άρτα",
            description: "Επαγγελματικές επιγραφές καταστημάτων στην Άρτα. Neon signs, LED signs, store signage, vehicle graphics, wayfinding και custom signage solutions.",
          },
          // Same array the visible FAQ section renders. The previous
          // hand-copied FAQPage block carried hardcoded euro figures that the
          // page no longer shows (every price is now on quotation), so the
          // schema had drifted from the visible content.
          faq: faqNodeFromMessages(
            serverT('epigrafes_arta_page').raw('faq') as { question: string; answer: string }[],
          ),
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Υπηρεσίες", path: "/services" }, { name: "Επιγραφές Άρτα", path: "/epigrafes-arta" } ]} />
      {children}
      <RelatedProjects projects={pickProjects('/epigrafes-arta')} />
      {/* Cluster links: LED/neon sub-service and the cost guide (audit §15). */}
      <RelatedLinks links={SIGNAGE_RELATED} />
    </>
  )
}
