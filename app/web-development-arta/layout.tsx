import type { Metadata } from 'next'
import { faqNode, WEB_DEV_ARTA_FAQ } from '@/app/components/faqData'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('web_development_arta_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/web-development-arta',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/web-development-arta',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Κατασκευή Ιστοσελίδων Άρτα - adinfinity Web Development'
            : 'Web Development Arta - adinfinity Website Development',
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

export default function WebDevelopmentArtaLayout({
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
          path: "/web-development-arta",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Κατασκευή Ιστοσελίδων Άρτα", path: "/web-development-arta" },
          ],
          service: {
            path: "/web-development-arta",
            name: "Κατασκευή Ιστοσελίδων Άρτα",
            description: "Επαγγελματική κατασκευή ιστοσελίδων και web applications στην Άρτα, Ήπειρος. Custom development React Next.js.",
          },
          faq: faqNode(WEB_DEV_ARTA_FAQ),
        }),
        )}
      />

      {children}
      <RelatedProjects projects={pickProjects('/web-development-arta')} />
    </>
  )
}
