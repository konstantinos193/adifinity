import type { Metadata } from 'next'
import { faqNode, GRAPHIC_DESIGN_FAQ } from '@/app/components/faqData'
import { serverT } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export async function generateMetadata(): Promise<Metadata> {
  const t = serverT('graphic_design_page')

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/graphic-design',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/graphic-design',
      siteName: 'adinfinity',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Γραφικές Τέχνες adinfinity - Επαγγελματικές Υπηρεσίες Graphic Design',
        },
      ],
      locale: 'el_GR',
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

export default function GraphicDesignLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/*
        One graph, one business entity.

        This route previously rendered three separate blocks: a
        `ProfessionalService`, a `LocalBusiness` and an FAQPage — the first two
        with no `@id`, each restating the company's address and telephone, and
        advertising `facebook.com/adinfinity.gr` / `instagram.com/adinfinity.gr`,
        neither of which is a real adinfinity profile. Together with the root
        layout's `AdvertisingAgency` that put four businesses on one page.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          pageGraph({
            path: '/graphic-design',
            breadcrumb: [
              { name: 'Υπηρεσίες', path: '/services' },
              { name: 'Γραφιστική', path: '/graphic-design' },
            ],
            service: {
              path: '/graphic-design',
              name: 'Γραφιστική & Graphic Design',
              description:
                'Επαγγελματικές γραφικές τέχνες στην Άρτα. Branding, logo design, εταιρική ταυτότητα, διαφημιστικό υλικό, social media graphics.',
              serviceType: [
                'Graphic Design',
                'Branding',
                'Logo Design',
                'Corporate Identity',
                'Social Media Graphics',
              ],
              offers: [
                {
                  name: 'Branding & Εταιρική Ταυτότητα',
                  description: 'Logo design, εταιρική ταυτότητα, branding, οπτική επικοινωνία',
                },
                {
                  name: 'Διαφημιστικός & Έντυπος Σχεδιασμός',
                  description: 'Flyers, αφίσες, brochures, καταλόγοι, διαφημιστικό υλικό',
                },
                {
                  name: 'Ψηφιακός Σχεδιασμός & Social Media',
                  description:
                    'Social media graphics, digital design, web graphics, content creation',
                },
              ],
            },
            faq: faqNode(GRAPHIC_DESIGN_FAQ),
          }),
        )}
      />
      {children}
      <RelatedProjects projects={pickProjects('/graphic-design')} />
    </>
  )
}
