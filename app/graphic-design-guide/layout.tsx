import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('graphic_design_guide_page')
  
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
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is graphic design?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Graphic design is the art of visual communication through the use of typography, imagery, color, and layout to convey messages and create brand identity."
                }
              },
              {
                "@type": "Question",
                "name": "How much does graphic design cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Graphic design costs vary based on project scope. Logo design starts from €150, while complete branding packages range from €300-€1000+."
                }
              },
              {
                "@type": "Question",
                "name": "What files do I receive?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You receive all source files including AI, EPS, PDF, PNG, and JPG formats, along with font files and color codes."
                }
              }
            ]
          }),
        }}
      />
      {children}
    </>
  )
}
