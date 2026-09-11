import type { Metadata } from 'next'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('web_apps_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/website-development/web-apps',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/website-development/web-apps',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-web-apps.svg",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Custom Web Applications adinfinity - React & Node.js Development'
            : 'Custom Web Applications adinfinity - React & Node.js Development',
        },
      ],
      locale: localeMap[locale as keyof typeof localeMap],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.title'),
      description: t('seo.description'),
      images: ['/images/og-web-apps.svg'],
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

export default function WebAppsLayout({ children }: { children: React.ReactNode }) {
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
          path: "/website-development/web-apps",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Κατασκευή Ιστοσελίδων", path: "/website-development" },
            { name: "Web Εφαρμογές", path: "/website-development/web-apps" },
          ],
          service: {
            path: "/website-development/web-apps",
            name: "Custom Web Applications Development",
            description: "Κατασκευή custom web applications, SaaS platforms, dashboards και booking systems σε React & Node.js. Full-stack development για επιχειρήσεις.",
            serviceType: [
              "Web Application Development",
              "SaaS Development",
              "Custom Dashboard Development",
              "Booking System Development",
            ],
            offers: [
              {
                name: "Admin Dashboards",
                description: "Προσαρμοσμένα εργαλεία back-office για τη διαχείριση της επιχείρησής σας",
              },
              {
                name: "SaaS Platforms",
                description: "Multi-tenant applications με subscription billing και custom workflows",
              },
              {
                name: "Booking Systems",
                description: "Online κράτηση ραντεβού, χώρων ή πόρων με real-time availability",
              },
            ],
          },
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Υπηρεσίες", path: "/services" }, { name: "Κατασκευή Ιστοσελίδων", path: "/website-development" }, { name: "Web Εφαρμογές", path: "/website-development/web-apps" } ]} />

      {children}
      <RelatedProjects projects={pickProjects('/website-development/web-apps')} />
    </>
  )
}
