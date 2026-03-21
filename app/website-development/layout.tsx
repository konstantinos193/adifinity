import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Κατασκευή Ιστοσελίδων Ελλάδα | adinfinity - Web Development',
  description: 'Επαγγελματική κατασκευή ιστοσελίδων για επιχειρήσεις σε όλη την Ελλάδα. Web development, e-commerce, responsive design και SEO. Από €1.200.',
  keywords: [
    'κατασκευή ιστοσελίδων Ελλάδα',
    'web development Ελλάδα',
    'κατασκευή ιστοσελίδων',
    'e-shop κατασκευή',
    'responsive websites',
    'e-commerce development',
    'SEO βελτιστοποίηση',
    'Next.js development',
    'custom React development',
  ],
  openGraph: {
    title: 'Κατασκευή Ιστοσελίδων Ελλάδα | adinfinity',
    description: 'Επαγγελματική κατασκευή ιστοσελίδων για επιχειρήσεις σε όλη την Ελλάδα. Από €1.200.',
    url: 'https://adinfinity.gr/website-development',
    siteName: 'adinfinity',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Κατασκευή Ιστοσελίδων',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Κατασκευή Ιστοσελίδων Ελλάδα | adinfinity',
    description: 'Επαγγελματική κατασκευή ιστοσελίδων για επιχειρήσεις σε όλη την Ελλάδα. Από €1.200.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/website-development',
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

export default function WebsiteDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Κατασκευή Ιστοσελίδων & Web Development",
            "description": "Επαγγελματική κατασκευή ιστοσελίδων για επιχειρήσεις σε όλη την Ελλάδα. Web development, responsive design, SEO και e-commerce.",
            "provider": {
              "@type": "Organization",
              "name": "adinfinity",
              "url": "https://adinfinity.gr",
              "telephone": "+30-2681-303007",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Βασ. Πύρρου 30",
                "addressLocality": "Άρτα",
                "postalCode": "471 32",
                "addressCountry": "GR",
              },
            },
            "serviceType": ["Web Development", "Website Design", "SEO", "E-commerce"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
          }),
        }}
      />
      {children}
    </>
  )
}
