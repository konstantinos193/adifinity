import type { Metadata } from 'next'
import { serverT } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export async function generateMetadata(): Promise<Metadata> {
  const t = serverT('custom_web_apps_page')
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/website-development/custom-web-apps',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/website-development/custom-web-apps',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: 'Custom Web Apps & Εταιρικές Ιστοσελίδες - adinfinity',
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

export default function CustomWebAppsLayout({
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
          path: "/website-development/custom-web-apps",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Κατασκευή Ιστοσελίδων", path: "/website-development" },
            { name: "Custom Εταιρικές Ιστοσελίδες", path: "/website-development/custom-web-apps" },
          ],
          service: {
            path: "/website-development/custom-web-apps",
            name: "Custom Web Apps & Εταιρικές Ιστοσελίδες",
            description: "Custom εταιρικές ιστοσελίδες και web applications σε React & Next.js. Καμία χρήση templates. Mobile-first design, SEO optimization, enterprise security για Greek businesses.",
            serviceType: [
              "Custom Web Development",
              "Web Application Development",
              "Corporate Websites",
              "E-commerce Solutions",
              "Booking Systems",
            ],
            offers: [
              {
                name: "Custom Corporate Websites",
                description: "Tailored websites for businesses with custom design and functionality",
              },
              {
                name: "Web Applications",
                description: "Custom web applications with advanced functionality and database integration",
              },
              {
                name: "E-commerce Solutions",
                description: "Complete online stores with payment integration and inventory management",
              },
            ],
          },
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Υπηρεσίες", path: "/services" }, { name: "Κατασκευή Ιστοσελίδων", path: "/website-development" }, { name: "Custom Εταιρικές Ιστοσελίδες", path: "/website-development/custom-web-apps" } ]} />

      {children}
      <RelatedProjects projects={pickProjects('/website-development/custom-web-apps')} />
    </>
  )
}
