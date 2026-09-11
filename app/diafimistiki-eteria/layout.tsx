import type { Metadata } from 'next'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import { faqNodeFromMessages } from '@/app/components/faqData'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('diafimistiki_eteria_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/diafimistiki-eteria',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/diafimistiki-eteria',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Διαφημιστική Εταιρεία Άρτα | Full-Service Agency | adinfinity'
            : 'Advertising Agency Arta | Full-Service Agency | adinfinity',
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

export default function DiafimistikiEteriaLayout({
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
          path: "/diafimistiki-eteria",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Διαφημιστική Εταιρεία Άρτα", path: "/diafimistiki-eteria" },
          ],
          service: {
            path: "/diafimistiki-eteria",
            name: "Διαφημιστική Εταιρεία Άρτα",
            description: "Full-service διαφημιστική εταιρεία στην Άρτα. Graphic design, printing, websites, digital marketing και ολοκληρωμένες λύσεις για επιχειρήσεις.",
          },
          // Same array the visible FAQ section renders. The previous
          // hand-copied FAQPage block carried hardcoded euro figures that the
          // page no longer shows (every price is now on quotation), so the
          // schema had drifted from the visible content.
          faq: faqNodeFromMessages(
            serverT('diafimistiki_eteria_page').raw('faq') as { question: string; answer: string }[],
          ),
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Υπηρεσίες", path: "/services" }, { name: "Διαφημιστική Εταιρεία Άρτα", path: "/diafimistiki-eteria" } ]} />
      {children}
      <RelatedProjects projects={pickProjects('/diafimistiki-eteria')} />
    </>
  )
}
