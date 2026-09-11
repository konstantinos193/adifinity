import type { Metadata } from 'next'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('landing_pages_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/website-development/landing-pages',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/website-development/landing-pages',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-landing-pages.svg",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Custom Landing Pages adinfinity - High-Converting Next.js React Pages'
            : 'Custom Landing Pages adinfinity - High-Converting Next.js React Pages',
        },
      ],
      locale: localeMap[locale as keyof typeof localeMap],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.title'),
      description: t('seo.description'),
      images: ['/images/og-landing-pages.svg'],
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

export default function LandingPagesLayout({
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
          path: "/website-development/landing-pages",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Κατασκευή Ιστοσελίδων", path: "/website-development" },
            { name: "Landing Pages", path: "/website-development/landing-pages" },
          ],
          service: {
            path: "/website-development/landing-pages",
            name: "Custom Landing Pages Development",
            description: "Custom landing pages σε Next.js & React για Google Ads, καμπάνιες και νέα προϊόντα. High-converting, SEO-ready, mobile-first.",
            serviceType: [
              "Landing Page Development",
              "Google Ads Optimization",
              "Conversion Rate Optimization",
              "Campaign Page Development",
            ],
            offers: [
              {
                name: "Google Ads Landing Pages",
                description: "High-converting landing pages βελτιστοποιημένες για Google Ads campaigns",
              },
              {
                name: "Product Launch Pages",
                description: "Custom landing pages για νέα προϊόντα και ανακοινώσεις",
              },
              {
                name: "Campaign Landing Pages",
                description: "Εξειδικευμένες σελίδες για marketing καμπάνιες",
              },
            ],
          },
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Υπηρεσίες", path: "/services" }, { name: "Κατασκευή Ιστοσελίδων", path: "/website-development" }, { name: "Landing Pages", path: "/website-development/landing-pages" } ]} />

      {children}
    </>
  )
}
