import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Επικοινωνία | adinfinity - Επικοινωνήστε Μαζί Μας Άρτα',
  description: 'Επικοινωνήστε με την διαφημιστική εταιρεία adinfinity στην Άρτα. Τηλέφωνο: +30 2681 303007, Email: adenfinity@gmail.com, Διεύθυνση: Βασ. Πύρρου 30, Άρτα 471 32.',
  keywords: [
    'επικοινωνία adinfinity',
    'επαφή διαφήμιση Άρτα',
    'τηλέφωνο διαφήμισης',
    'email adinfinity',
    'διεύθυνση adinfinity Άρτα',
  ],
  openGraph: {
    title: 'Επικοινωνία | adinfinity - Επικοινωνήστε Μαζί Μας Άρτα',
    description: 'Επικοινωνήστε με την διαφημιστική εταιρεία adinfinity στην Άρτα. Τηλέφωνο: +30 2681 303007, Βασ. Πύρρου 30, Άρτα 471 32.',
    url: 'https://adinfinity.gr/contact',
    siteName: 'adinfinity',
    images: [
      {
        url: 'https://i.postimg.cc/2SygFYcf/Untitled-design-28.png',
        width: 1200,
        height: 630,
        alt: 'adinfinity - Επικοινωνία',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Επικοινωνία | adinfinity - Επικοινωνήστε Μαζί Μας Άρτα',
    description: 'Επικοινωνήστε με την διαφημιστική εταιρεία adinfinity στην Άρτα. Τηλέφωνο: +30 2681 303007.',
    images: ['https://i.postimg.cc/2SygFYcf/Untitled-design-28.png'],
  },
  alternates: {
    canonical: 'https://adinfinity.gr/contact',
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

export default function ContactLayout({
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
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'adinfinity',
              url: 'https://adinfinity.gr',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+30-2681-303007',
                contactType: 'customer service',
                email: 'adenfinity@gmail.com',
                areaServed: 'GR',
                availableLanguage: ['Greek', 'el'],
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Βασ. Πύρρου 30',
                addressLocality: 'Άρτα',
                postalCode: '471 32',
                addressCountry: 'GR',
              },
            },
          }),
        }}
      />
      {children}
    </>
  )
}

