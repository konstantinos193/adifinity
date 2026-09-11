import type { Metadata } from 'next'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import RelatedProjects from '@/app/components/RelatedProjects'
import { pickProjects } from '@/lib/serviceProjects'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('e_commerce_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/website-development/e-commerce',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/website-development/e-commerce',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Ανάπτυξη Custom E-commerce adinfinity - Online Καταστήματα Next.js React'
            : 'Custom E-commerce Development adinfinity - Online Stores Next.js React',
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

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
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
          path: "/website-development/e-commerce",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Κατασκευή Ιστοσελίδων", path: "/website-development" },
            { name: "E-shop", path: "/website-development/e-commerce" },
          ],
          service: {
            path: "/website-development/e-commerce",
            name: "Ανάπτυξη Custom E-commerce",
            description: "Custom ανάπτυξη e-commerce χωρίς Shopify/WooCommerce. Next.js, React, Stripe payments. Μηδενικές μηνιαίες χρεώσεις. Εξειδίκευση στην ελληνική αγορά για online καταστήματα.",
            serviceType: [
              "E-commerce Development",
              "Custom Online Stores",
              "Stripe Integration",
              "Payment Systems",
              "Web Development",
            ],
            offers: [
              {
                name: "Custom E-commerce Development",
                description: "Πλήρως custom online καταστήματα χωρίς platform fees",
              },
              {
                name: "Stripe Payment Integration",
                description: "Ενσωμάτωση πληρωμών με Stripe και εναλλακτικές μεθόδους",
              },
              {
                name: "Custom Admin Dashboard",
                description: "Προσαρμοσμένο panel διαχείρισης παραγγελιών και αποθέματος",
              },
            ],
          },
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Υπηρεσίες", path: "/services" }, { name: "Κατασκευή Ιστοσελίδων", path: "/website-development" }, { name: "E-shop", path: "/website-development/e-commerce" } ]} />

      {children}
      <RelatedProjects projects={pickProjects('/website-development/e-commerce')} />
    </>
  )
}
