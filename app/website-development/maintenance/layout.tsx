import type { Metadata } from 'next'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('maintenance_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/website-development/maintenance',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/website-development/maintenance',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Συντήρηση Ιστοσελίδων & Υποστήριξη adinfinity - Web Maintenance Support'
            : 'Website Maintenance & Support adinfinity - Web Maintenance Support',
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

export default function MaintenanceLayout({
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
          path: "/website-development/maintenance",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Κατασκευή Ιστοσελίδων", path: "/website-development" },
            { name: "Συντήρηση Ιστοσελίδας", path: "/website-development/maintenance" },
          ],
          service: {
            path: "/website-development/maintenance",
            name: "Συντήρηση Ιστοσελίδων & Υποστήριξη",
            description: "Επαγγελματικές υπηρεσίες συντήρησης και υποστήριξης ιστοσελίδων. Ενημερώσεις ασφαλείας, παρακολούθηση απόδοσης, συνεχής ανάπτυξη.",
            serviceType: [
              "Website Maintenance",
              "Web Support",
              "Security Updates",
              "Performance Monitoring",
              "Ongoing Development",
            ],
            offers: [
              {
                name: "Βασικό Πακέτο Συντήρησης",
                description: "2 ώρες ανάπτυξης/μήνα, ενημερώσεις ασφαλείας, παρακολούθηση διαθεσιμότητας",
              },
              {
                name: "Πακέτο Ανάπτυξης",
                description: "5 ώρες ανάπτυξης/μήνα, προτεραιότητα υποστήριξης, μηνιαίες αναφορές",
              },
              {
                name: "Επαγγελματικό Πακέτο",
                description: "10 ώρες ανάπτυξης/μήνα, πλήρης παρακολούθηση, εβδομαδιαίες συναντήσεις",
              },
            ],
          },
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Υπηρεσίες", path: "/services" }, { name: "Κατασκευή Ιστοσελίδων", path: "/website-development" }, { name: "Συντήρηση Ιστοσελίδας", path: "/website-development/maintenance" } ]} />

      {children}
    </>
  )
}
