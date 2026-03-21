import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom E-commerce Development | adinfinity — Next.js & React',
  description: 'Custom e-commerce development αποκλειστικά σε Next.js & React. Online stores με Stripe, διαχείριση παραγγελιών και αποθήκης — χωρίς Shopify ή WooCommerce.',
  keywords: [
    'custom e-commerce development',
    'e-shop κατασκευή Ελλάδα',
    'Next.js e-commerce',
    'React online store',
    'custom online store Greece',
    'e-commerce development without Shopify',
    'Stripe integration Greece',
    'κατασκευή e-shop',
  ],
  alternates: { canonical: 'https://adinfinity.gr/website-development/e-commerce' },
  openGraph: {
    title: 'Custom E-commerce Development | adinfinity',
    description: 'Custom e-commerce σε Next.js & React. Χωρίς Shopify ή WooCommerce — 100% custom code.',
    url: 'https://adinfinity.gr/website-development/e-commerce',
    siteName: 'adinfinity',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    locale: 'el_GR',
    type: 'website',
  },
}

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom E-commerce Development",
            "description": "Custom e-commerce development σε Next.js & React για επιχειρήσεις σε όλη την Ελλάδα.",
            "provider": { "@type": "Organization", "name": "adinfinity", "url": "https://adinfinity.gr" },
            "serviceType": "E-commerce Development",
            "areaServed": { "@type": "Country", "name": "Greece" },
          }),
        }}
      />
      {children}
    </>
  )
}
