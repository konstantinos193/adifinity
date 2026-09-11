import type { Metadata } from 'next'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export const metadata: Metadata = {
  title: 'Technical SEO | Ταχύτητα & Schema',
  description:
    'Technical SEO για ιστοσελίδες: Core Web Vitals, schema markup, ταχύτητα φόρτωσης και crawlability. Αναφορά με τι διορθώθηκε και γιατί.',
  alternates: { canonical: 'https://adinfinity.gr/website-development/technical-seo' },
  openGraph: {
    title: 'Technical SEO Services | adinfinity',
    description: 'Core Web Vitals, schema markup, speed optimization. Η τεχνική βάση για top Google rankings.',
    url: 'https://adinfinity.gr/website-development/technical-seo',
    siteName: 'adinfinity',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    locale: 'el_GR',
    type: 'website',
  },
}

export default function TechnicalSEOLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* This route shipped with no structured data at all. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          pageGraph({
            path: '/website-development/technical-seo',
            breadcrumb: [
              { name: 'Υπηρεσίες', path: '/services' },
              { name: 'Κατασκευή Ιστοσελίδων', path: '/website-development' },
              { name: 'Technical SEO', path: '/website-development/technical-seo' },
            ],
            service: {
              path: '/website-development/technical-seo',
              name: 'Technical SEO',
              description:
                'Technical SEO για ιστοσελίδες: Core Web Vitals, schema markup, ταχύτητα φόρτωσης και crawlability. Αναφορά με τι διορθώθηκε και γιατί.',
              serviceType: ['Technical SEO', 'Core Web Vitals', 'Schema Markup', 'Site Speed'],
            },
          }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: 'Υπηρεσίες', path: '/services' }, { name: 'Κατασκευή Ιστοσελίδων', path: '/website-development' }, { name: 'Technical SEO', path: '/website-development/technical-seo' } ]} />
      {children}
      <RelatedProjects projects={pickProjects('/website-development/technical-seo')} />
    </>
  )
}
