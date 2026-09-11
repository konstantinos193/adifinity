import type { Metadata } from 'next'
import { serverT, OG_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph, ORG_ID, ORG_REF, SITE_URL } from '@/lib/schema'
import { COMPANY_FACTS } from '@/lib/company'
import Breadcrumbs from '@/app/components/Breadcrumbs'

/**
 * The people behind the work, as schema.org Persons bound to the one business
 * entity (E-E-A-T — 2026-09-11 audit §12, §26).
 *
 * The founder already exists in the root graph as `#founder`; that node is
 * referenced here by @id, not re-declared, so the site never describes him
 * twice. The developer is declared here, on the only page that presents him.
 *
 * This file used to build a second `Organization` — with the wrong Facebook
 * and Instagram URLs — inside generateMetadata and then never render it. The
 * About page also described itself as a `Service`, which it is not.
 */
const TEAM = [
  {
    '@type': 'Person',
    '@id': `${SITE_URL}/#founder`,
    name: 'Μάνος Κόσμας',
    alternateName: 'Manos Kosmas',
    jobTitle: 'Ιδρυτής & Διευθύνων Σύμβουλος',
    worksFor: ORG_REF,
    knowsAbout: ['Διαφήμιση', 'Branding', 'Εκτυπώσεις', 'Επιγραφές', 'Digital Marketing'],
    image: `${SITE_URL}/images/team-member-manos.jpg`,
    url: `${SITE_URL}/about`,
  },
  {
    '@type': 'Person',
    '@id': `${SITE_URL}/about#konstantinos-blavakis`,
    name: 'Κωνσταντίνος Μπλαβάκης',
    alternateName: 'Konstantinos Blavakis',
    jobTitle: 'Web Developer',
    worksFor: ORG_REF,
    knowsAbout: ['Κατασκευή Ιστοσελίδων', 'React', 'Next.js', 'TypeScript', 'Συστήματα Κρατήσεων', 'Technical SEO'],
    url: `${SITE_URL}/about`,
  },
]

export async function generateMetadata(): Promise<Metadata> {
  const t = serverT('about_page')

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/about',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/about',
      siteName: 'adinfinity',
      images: [
        {
          url: '/images/office-showcase.png',
          width: 1200,
          height: 630,
          alt: 'Το γραφείο της adinfinity στη Βασ. Πύρρου 30, Άρτα',
        },
      ],
      locale: OG_LOCALE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.title'),
      description: t('seo.description'),
      images: ['/images/office-showcase.png'],
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

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const trail = [{ name: 'Η Εταιρεία', path: '/about' }]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          pageGraph({
            path: '/about',
            breadcrumb: trail,
            extra: [
              ...TEAM,
              {
                // Facts a visitor can check, stated once from lib/company.ts.
                '@type': 'Organization',
                '@id': ORG_ID,
                foundingDate: `${COMPANY_FACTS.foundedYear}-10`,
                // The named, public team — not a headcount claim.
                employee: TEAM.map((person) => ({ '@id': person['@id'] })),
              },
            ],
          }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={trail} />
      {children}
    </>
  )
}
