import type { Metadata } from 'next'
import { faqNodeFromMessages } from '@/app/components/faqData'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

const URL = 'https://adinfinity.gr/digital-marketing'

const localeMap = {
  el: 'el_GR',
  en: 'en_US',
} as const

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('digital_marketing_page')

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: URL,
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: URL,
      siteName: 'adinfinity',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt:
            locale === 'el'
              ? 'Digital Marketing Άρτα - adinfinity | Social Media, Google Ads, SEO'
              : 'Digital Marketing Arta - adinfinity | Social Media, Google Ads, SEO',
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

/**
 * Structured data is intentionally authored in Greek and rendered for every
 * locale: it describes a single physical business in Arta, and Google reads one
 * canonical entity per URL rather than one per visitor language.
 */
export default async function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = serverT('digital_marketing_page')
  const faq = t.raw('faq') as Array<{ question: string; answer: string }>

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
          path: "/digital-marketing",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Digital Marketing", path: "/digital-marketing" },
          ],
          service: {
            path: "/digital-marketing",
            name: "Digital Marketing Άρτα - adinfinity",
            description: "Υπηρεσίες digital marketing στην Άρτα: διαχείριση social media, Google & Meta Ads, SEO, παραγωγή περιεχομένου και μηνιαία αναφορά απόδοσης.",
            serviceType: [
              "Digital Marketing",
              "Social Media Management",
              "Google Ads",
              "Meta Ads",
              "Search Engine Optimization",
              "Content Marketing",
            ],
            offers: [
              {
                name: "Διαχείριση Social Media",
                description: "Πλάνο περιεχομένου, σχεδιασμός δημιουργικών και community management σε Facebook, Instagram και TikTok.",
              },
              {
                name: "Διαχείριση Google & Meta Ads",
                description: "Στήσιμο καμπανιών, conversion tracking και συνεχής βελτιστοποίηση με στόχο leads και πωλήσεις.",
              },
              {
                name: "SEO & Τοπική Προβολή",
                description: "Technical SEO, on-page βελτιστοποίηση, στρατηγική περιεχομένου και Google Business Profile.",
              },
            ],
          },
          // Same array the visible FAQ section renders, so schema and page
          // cannot drift apart.
          faq: faqNodeFromMessages(faq),
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Υπηρεσίες", path: "/services" }, { name: "Digital Marketing", path: "/digital-marketing" } ]} />
      {children}
      <RelatedProjects projects={pickProjects('/digital-marketing')} />
    </>
  )
}
