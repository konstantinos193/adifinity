import type { Metadata } from 'next'
import { faqNode, GUIDE_FAQ } from "@/app/components/faqData"
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('graphic_design_guide_page')
  
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/graphic-design-guide',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/graphic-design-guide',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Graphic Design Guide - Πλήρης Οδηγός Graphic Design | adinfinity'
            : 'Graphic Design Guide - Complete Graphic Design Guide | adinfinity',
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

export default function GraphicDesignGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Complete Guide to Graphic Design Services",
            "description": "Comprehensive guide covering logo design, branding, corporate identity, and graphic design services for businesses.",
            "author": {
              "@type": "Organization",
              "name": "adinfinity",
              "url": "https://adinfinity.gr"
            },
            "publisher": {
              "@type": "Organization",
              "name": "adinfinity",
              "url": "https://adinfinity.gr",
              "logo": {
                "@type": "ImageObject",
                "url": "https://adinfinity.gr/logo.png"
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString().split('T')[0]
          }),
        }}
      />
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
          path: "/graphic-design-guide",
          breadcrumb: [
            { name: "Οδηγοί", path: "/guides" },
            { name: "Οδηγός Γραφιστικής", path: "/graphic-design-guide" },
          ],
          faq: faqNode(GUIDE_FAQ),
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Οδηγοί", path: "/guides" }, { name: "Οδηγός Γραφιστικής", path: "/graphic-design-guide" } ]} />
      {children}
    </>
  )
}
