import type { Metadata } from 'next'
import FAQSection from "@/app/components/FAQSection"
import { faqPageSchema, HOME_FAQ } from "@/app/components/faqData"
import { COMPANY_FACTS } from "@/lib/company"
import RelatedProjects from "@/app/components/RelatedProjects"
import { getProjectBySlug } from "@/lib/projects"
import HomePageClient from './components/HomePageClient'

/*
 * The proof the homepage leads with (audit §11): two accommodation sites with
 * booking systems, the property platform, and one identity, so the first
 * screen of real work covers web, bookings and branding.
 */
const FEATURED_PROJECTS = ['asterias-koronisia', 'lincanto-apartments', 'smh-real-estate', 'apofa']
  .map((slug) => getProjectBySlug(slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project))

/*
 * The homepage owns the broad brand/local query — "διαφημιστική εταιρεία Άρτα"
 * — and nothing else. Service queries belong to the service pages.
 *
 * "Διαφημιστικό γραφείο" is in the description because Search Console shows
 * 48 impressions for that exact phrasing at position 52: the site never used
 * the words. Figures come from lib/company.ts so they cannot disagree with
 * the hero beneath them.
 */
const TITLE = 'Διαφημιστική Εταιρεία Άρτα | Branding, Εκτυπώσεις & Digital | adinfinity'
const DESCRIPTION = `Διαφημιστικό γραφείο στην Άρτα από το ${COMPANY_FACTS.foundedYear}: branding, γραφιστική, εκτυπώσεις, επιγραφές, ιστοσελίδες και digital marketing. ${COMPANY_FACTS.clients}+ επιχειρήσεις στην Ήπειρο. Τηλ. 2681 303007`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://adinfinity.gr/',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://adinfinity.gr',
    siteName: 'adinfinity',
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: 'adinfinity - Μετατρέπουμε Ιδέες σε Επιτυχίες!',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
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

export default function Home() {
  return (
    <>
      {/* FAQ Schema for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(HOME_FAQ)),
        }}
      />
      <HomePageClient
        proof={
          <RelatedProjects
            projects={FEATURED_PROJECTS}
            headingEl="Επιλεγμένα έργα"
            headingEn="Selected work"
          />
        }
      />
      {/* Must be rendered, not just declared above: Google requires FAQ
          structured data to match content visible on the page. */}
      <FAQSection items={HOME_FAQ} />
    </>
  )
}
