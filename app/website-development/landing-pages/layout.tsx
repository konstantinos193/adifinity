import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Landing Pages | adinfinity — High-Converting React Pages',
  description: 'Κατασκευή high-converting landing pages σε Next.js & React για Google Ads, καμπάνιες και νέα προϊόντα. Fast, SEO-ready, mobile-first.',
  keywords: [
    'landing page development Greece',
    'κατασκευή landing page',
    'Google Ads landing page',
    'high converting landing page',
    'Next.js landing page',
    'React landing page',
    'campaign page development',
    'landing page Ελλάδα',
  ],
  alternates: { canonical: 'https://adinfinity.gr/website-development/landing-pages' },
  openGraph: {
    title: 'Custom Landing Pages | adinfinity',
    description: 'High-converting landing pages σε Next.js & React. Fast, SEO-ready, mobile-first.',
    url: 'https://adinfinity.gr/website-development/landing-pages',
    siteName: 'adinfinity',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    locale: 'el_GR',
    type: 'website',
  },
}

export default function LandingPagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Landing Page Development",
            "description": "High-converting landing pages σε Next.js & React για Google Ads και καμπάνιες.",
            "provider": { "@type": "Organization", "name": "adinfinity", "url": "https://adinfinity.gr" },
            "serviceType": "Landing Page Development",
            "areaServed": { "@type": "Country", "name": "Greece" },
          }),
        }}
      />
      {children}
    </>
  )
}
