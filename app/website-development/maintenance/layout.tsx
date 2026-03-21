import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Maintenance & Retainer | adinfinity — Ongoing Dev',
  description: 'Ongoing development retainer για ιστοσελίδες και web apps. Νέα features, performance monitoring, security updates και συνεχής βελτίωση.',
  keywords: ['website maintenance Greece', 'ongoing web development', 'development retainer', 'website updates', 'web app maintenance'],
  alternates: { canonical: 'https://adinfinity.gr/website-development/maintenance' },
  openGraph: {
    title: 'Website Maintenance & Retainer | adinfinity',
    description: 'Ongoing development retainer. Νέα features, monitoring, security updates.',
    url: 'https://adinfinity.gr/website-development/maintenance',
    siteName: 'adinfinity',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    locale: 'el_GR',
    type: 'website',
  },
}

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
