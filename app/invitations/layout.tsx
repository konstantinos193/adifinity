import type { Metadata } from 'next'
import { faqNode, INVITATIONS_FAQ } from "@/app/components/faqData"
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Ψηφιακές Προσκλήσεις Γάμου | adinfinity',
  description:
    'Ψηφιακές προσκλήσεις γάμου με RSVP, video και mini-site. Στέλνετε ένα link και βλέπετε ποιος έρχεται, σε πραγματικό χρόνο. Τηλ. 2681 303007',
  openGraph: {
    title: 'Ψηφιακές Γαμήλιες Προσκλήσεις | adinfinity',
    description: 'Εντυπωσιακές ψηφιακές γαμήλιες προσκλήσεις με RSVP tracking, βίντεο και mini-website. Δημιουργήστε τη δική σας τώρα!',
    url: 'https://adinfinity.gr/invitations',
    siteName: 'adinfinity',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Ψηφιακές Γαμήλιες Προσκλήσεις',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ψηφιακές Γαμήλιες Προσκλήσεις | adinfinity',
    description: 'Εντυπωσιακές ψηφιακές γαμήλιες προσκλήσεις με RSVP tracking, βίντεο και mini-website.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/invitations',
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

export default function InvitationsLayout({
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
          path: "/invitations",
          breadcrumb: [
            { name: "Υπηρεσίες", path: "/services" },
            { name: "Ψηφιακά Προσκλητήρια", path: "/invitations" },
          ],
          service: {
            path: "/invitations",
            name: "Ψηφιακές Γαμήλιες Προσκλήσεις",
            description: "Δημιουργήστε εντυπωσιακές ψηφιακές γαμήλιες προσκλήσεις με παρακολούθηση RSVP, βίντεο, mini-website και πλήρη διαχείριση καλεσμένων.",
            serviceType: [
              "Digital Wedding Invitations",
              "Online RSVP Management",
              "Mini Wedding Website",
              "Video Wedding Invitation",
            ],
            offers: [
              {
                name: "Mini Γαμήλια Ιστοσελίδα",
                description: "Πλήρης mini-ιστοσελίδα με ιστορία, γκαλερί, εκδηλώσεις, μητρώο δώρων και RSVP.",
              },
              {
                name: "Video Πρόσκληση Pro",
                description: "Βίντεο πρόσκληση με αντίστροφη μέτρηση, γρήγορες ενέργειες και RSVP.",
              },
              {
                name: "Video Πρόσκληση",
                description: "Κομψή βίντεο πρόσκληση με απλό RSVP και εύκολη κοινοποίηση.",
              },
            ],
          },
          faq: faqNode(INVITATIONS_FAQ),
        }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[ { name: "Υπηρεσίες", path: "/services" }, { name: "Ψηφιακά Προσκλητήρια", path: "/invitations" } ]} />


      {children}
    </>
  )
}
