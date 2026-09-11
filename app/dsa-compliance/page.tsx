import { Metadata } from "next"
import DSAContentClient from "./DSAContentClient"
import { jsonLd, pageGraph } from "@/lib/schema"
import Breadcrumbs from '@/app/components/Breadcrumbs'

// Greek, like every other served page — this shipped in English on a page whose
// <html lang="el"> body is Greek, which reads to Google as a language mismatch.
const TITLE = "Συμμόρφωση DSA (Digital Services Act) | adinfinity"
const DESCRIPTION =
  "Τα μέτρα συμμόρφωσης της adinfinity με τον Κανονισμό Ψηφιακών Υπηρεσιών (DSA): πολιτικές περιεχομένου, διαδικασίες αναφοράς και προστασία χρηστών."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://adinfinity.gr/dsa-compliance",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DSA Compliance - adinfinity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://adinfinity.gr/dsa-compliance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function DSACompliancePage() {
  return (
    <>
      {/*
        One graph, one business entity. This block used to restate the
        Organization with its own (transliterated) address and a nested
        `breadcrumbList` property that is not a schema.org term. See lib/schema.ts.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          pageGraph({
            path: "/dsa-compliance",
            breadcrumb: [{ name: "Συμμόρφωση DSA", path: "/dsa-compliance" }],
          }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[{ name: "Συμμόρφωση DSA", path: "/dsa-compliance" }]} />
      <DSAContentClient />
    </>
  )
}
