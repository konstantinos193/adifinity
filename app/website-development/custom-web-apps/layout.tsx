import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Web App Development | adinfinity — React & Next.js',
  description: 'Κατασκευή custom web applications αποκλειστικά σε React & Next.js. Εταιρικές ιστοσελίδες, portals, και platforms χτισμένα από μηδέν.',
  keywords: ['custom web development Greece', 'React development', 'Next.js development', 'κατασκευή ιστοσελίδων', 'custom website Greece'],
  alternates: { canonical: 'https://adinfinity.gr/website-development/custom-web-apps' },
  openGraph: {
    title: 'Custom Web App Development | adinfinity',
    description: 'Custom web apps αποκλειστικά σε React & Next.js. Χωρίς templates, χωρίς page builders.',
    url: 'https://adinfinity.gr/website-development/custom-web-apps',
    siteName: 'adinfinity',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    locale: 'el_GR',
    type: 'website',
  },
}

export default function CustomWebAppsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
