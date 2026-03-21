import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Web App Development | adinfinity — React & Node.js',
  description: 'Κατασκευή custom web applications, SaaS tools, dashboards και booking systems σε React & Node.js. Full-stack development για επιχειρήσεις σε όλη την Ελλάδα.',
  keywords: [
    'custom web app development Greece',
    'SaaS development',
    'React web application',
    'Node.js development',
    'custom dashboard development',
    'booking system development',
    'web application Ελλάδα',
    'full stack development',
  ],
  alternates: { canonical: 'https://adinfinity.gr/website-development/web-apps' },
  openGraph: {
    title: 'Custom Web App Development | adinfinity',
    description: 'Custom web apps, SaaS tools και dashboards σε React & Node.js.',
    url: 'https://adinfinity.gr/website-development/web-apps',
    siteName: 'adinfinity',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    locale: 'el_GR',
    type: 'website',
  },
}

export default function WebAppsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Web Application Development",
            "description": "Κατασκευή custom web applications, SaaS tools και dashboards σε React & Node.js.",
            "provider": { "@type": "Organization", "name": "adinfinity", "url": "https://adinfinity.gr" },
            "serviceType": "Web Application Development",
            "areaServed": { "@type": "Country", "name": "Greece" },
          }),
        }}
      />
      {children}
    </>
  )
}
