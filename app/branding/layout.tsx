import type { Metadata } from 'next'
import { faqNodeFromMessages } from '@/app/components/faqData'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

const URL = 'https://adinfinity.gr/branding'

const localeMap = {
  el: 'el_GR',
  en: 'en_US',
} as const

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('branding_page')

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
              ? 'Branding & Εταιρική Ταυτότητα Άρτα - adinfinity | Σχεδιασμός Λογοτύπου'
              : 'Branding & Corporate Identity Arta - adinfinity | Logo Design',
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
export default async function BrandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = serverT('branding_page')
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
          path: "/branding",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Branding", path: "/branding" },
          ],
          service: {
            path: "/branding",
            name: "Branding & Εταιρική Ταυτότητα Άρτα - adinfinity",
            description: "Σχεδιασμός λογοτύπου, εταιρικής ταυτότητας, brand guidelines και rebranding στην Άρτα. Πρωτότυπος σχεδιασμός με παράδοση όλων των διανυσματικών αρχείων.",
            serviceType: [
              "Branding",
              "Logo Design",
              "Corporate Identity",
              "Brand Strategy",
              "Rebranding",
              "Packaging Design",
            ],
            offers: [
              {
                name: "Σχεδιασμός Λογοτύπου",
                description: "Πρωτότυπο λογότυπο σε διανυσματική μορφή, με παραλλαγές για κάθε χρήση και πλήρη παράδοση αρχείων.",
              },
              {
                name: "Εταιρική Ταυτότητα",
                description: "Ολοκληρωμένο πακέτο ταυτότητας: κάρτες, έντυπα, social media assets και brand guidelines.",
              },
              {
                name: "Rebranding",
                description: "Ανανέωση υπάρχουσας ταυτότητας με πλάνο σταδιακής μετάβασης σε όλα τα υλικά.",
              },
            ],
          },
          // Same array the visible FAQ section renders, so schema and page
          // cannot drift apart.
          faq: faqNodeFromMessages(faq),
        }),
        )}
      />
      {children}
      <RelatedProjects projects={pickProjects('/branding')} />
    </>
  )
}
