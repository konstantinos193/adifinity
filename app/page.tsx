import type { Metadata } from 'next'
import FAQSection from "@/app/components/FAQSection"
import { faqPageSchema, HOME_FAQ } from "@/app/components/faqData"
import HomePageClient from './components/HomePageClient'

export const metadata: Metadata = {
  // Kept under ~60 chars so the differentiator ("από το 2013") survives Google's
  // SERP truncation instead of being cut off mid-title.
  title: 'Διαφημιστική Εταιρεία Άρτα από το 2013 | adinfinity',
  // "50+", not "100+": the hero on this same page says 50, and a description
  // that contradicts the content below it is a trust problem before it is an
  // SEO one. The one figure now lives in lib/company.ts.
  description:
    'Διαφήμιση, γραφιστική, εκτυπώσεις και ιστοσελίδες στην Άρτα, από το 2013. Πάνω από 50 επιχειρήσεις μάς εμπιστεύονται. Δωρεάν προσφορά σε 24 ώρες: 2681 303007',
  alternates: {
    canonical: 'https://adinfinity.gr/',
  },
  openGraph: {
    title: 'adinfinity | Διαφημιστική Εταιρεία Άρτα - Advertising & Digital Services',
    // "κορυφαία" dropped. It asserts a ranking nobody can check; the founding
    // year and the project count are checkable on the site itself.
    description:
      'Διαφημιστικό γραφείο στην Άρτα από το 2013. Γραφιστική, εκτυπώσεις, επιγραφές, ιστοσελίδες και digital marketing — πάνω από 200 ολοκληρωμένα έργα.',
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
    title: 'adinfinity | Διαφημιστική Εταιρεία Άρτα',
    description:
      'Διαφημιστικό γραφείο στην Άρτα από το 2013. Γραφιστική, εκτυπώσεις, επιγραφές, ιστοσελίδες και digital marketing.',
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
      <HomePageClient />
      {/* Must be rendered, not just declared above: Google requires FAQ
          structured data to match content visible on the page. */}
      <FAQSection items={HOME_FAQ} />
    </>
  )
}
