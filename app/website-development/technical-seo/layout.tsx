import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical SEO Services | adinfinity — Core Web Vitals & Speed',
  description: 'Technical SEO υπηρεσίες για ιστοσελίδες σε Ελλάδα. Core Web Vitals, schema markup, speed optimization, Lighthouse audits. Τεχνική βελτιστοποίηση για top Google rankings.',
  keywords: ['technical SEO Greece', 'Core Web Vitals', 'SEO βελτιστοποίηση', 'speed optimization', 'schema markup', 'Lighthouse audit'],
  alternates: { canonical: 'https://adinfinity.gr/website-development/technical-seo' },
  openGraph: {
    title: 'Technical SEO Services | adinfinity',
    description: 'Core Web Vitals, schema markup, speed optimization. Η τεχνική βάση για top Google rankings.',
    url: 'https://adinfinity.gr/website-development/technical-seo',
    siteName: 'adinfinity',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    locale: 'el_GR',
    type: 'website',
  },
}

export default function TechnicalSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
