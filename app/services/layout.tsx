import type { Metadata } from 'next'
import { jsonLd, ORG_REF, pageGraph, SITE_URL } from '@/lib/schema'

/**
 * The services this hub lists, each pointing at its own indexable page.
 *
 * The old catalogue named five; these nine are every service route the header
 * nav and footer already link, so the markup matches what a visitor can
 * actually reach from here. Every `@id` matches the `#service` node that route
 * emits, which lets Google merge the two rather than treat them as separate.
 */
const HUB_SERVICES = [
  { name: 'Εκτυπώσεις', description: 'Επαγγελματικές εκτυπώσεις υψηλής ποιότητας', path: '/prints' },
  { name: 'Γραφιστική', description: 'Εντυπωσιακός σχεδιασμός και branding', path: '/graphic-design' },
  { name: 'Branding & Εταιρική Ταυτότητα', description: 'Λογότυπο, χρώματα και brand guidelines', path: '/branding' },
  { name: 'Επιγραφές Καταστημάτων', description: 'Neon, LED και ακρυλικές επιγραφές με εγκατάσταση', path: '/epigrafes-arta' },
  { name: 'Διανομή Εντύπων', description: 'Στοχευμένη διανομή εντύπων πόρτα-πόρτα', path: '/flyer-distribution' },
  { name: 'Κατασκευή Ιστοσελίδων', description: 'Ανάπτυξη και σχεδιασμός ιστοσελίδων και e-shop', path: '/website-development' },
  { name: 'Digital Marketing', description: 'Social media, Google Ads και SEO', path: '/digital-marketing' },
  { name: 'Διαφημιστικά Δώρα', description: 'Εταιρικά δώρα με το λογότυπό σας', path: '/diafimistika-dora' },
  { name: 'Έρευνα Αγοράς', description: 'Έρευνα αγοράς και ανάλυση ανταγωνισμού', path: '/market-research' },
] as const

export const metadata: Metadata = {
  title: 'Υπηρεσίες Marketing & Διαφήμισης Άρτα | adinfinity',
  description:
    'Εκτυπώσεις, γραφιστική, επιγραφές, ιστοσελίδες, διανομή εντύπων και digital marketing από ένα γραφείο στην Άρτα. Τηλ. 2681 303007',
  openGraph: {
    title: 'Υπηρεσίες Marketing & Διαφήμισης Άρτα | adinfinity',
    description: 'Αναπτύξτε την επιχείρησή σας: εκτυπώσεις, γραφιστική, ιστοσελίδες, διανομή εντύπων & digital marketing. 50+ ικανοποιημένοι πελάτες στην Άρτα, από το 2013.',
    url: 'https://adinfinity.gr/services',
    siteName: 'adinfinity',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Υπηρεσίες',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Υπηρεσίες Marketing & Διαφήμισης Άρτα | adinfinity',
    description: 'Εκτυπώσεις, γραφιστική, ιστοσελίδες, διανομή εντύπων & digital marketing στην Άρτα. 50+ πελάτες από το 2013.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/services',
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/*
        The services hub, marked up as what it is: a page listing other pages.

        This route previously carried an `OfferCatalog` hung off a nameless
        `Service` with its own inline Organization provider. As an `ItemList` of
        `Service` nodes that each point at their own URL and reference the one
        business, it says the same thing in the shape Google reads for a hub —
        and every entry resolves to a page that exists.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          pageGraph({
            path: '/services',
            breadcrumb: [{ name: 'Υπηρεσίες', path: '/services' }],
            extra: [
              {
                '@type': 'ItemList',
                '@id': `${SITE_URL}/services#services`,
                name: 'Υπηρεσίες adinfinity',
                itemListElement: HUB_SERVICES.map((entry, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  item: {
                    '@type': 'Service',
                    '@id': `${SITE_URL}${entry.path}#service`,
                    name: entry.name,
                    description: entry.description,
                    url: `${SITE_URL}${entry.path}`,
                    provider: ORG_REF,
                  },
                })),
              },
            ],
          }),
        )}
      />
      {children}
    </>
  )
}

