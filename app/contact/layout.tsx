import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('contact_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    keywords: [
      // Contact specific keywords
      'επικοινωνία adinfinity',
      'contact adinfinity',
      'adinfinity τηλέφωνο',
      'adinfinity email',
      'επικοινωνία διαφημιστική',
      'contact advertising agency',
      'web development contact',
      'graphic design contact',
      'digital marketing contact',
      'Άρτα επικοινωνία',
      'Arta contact',
      
      // Brand variations
      'adinfinity',
      'ad infinity',
      'adinity',
      'adinfit',
      'infiniry',
      'infinity ad',
      
      // Service keywords
      'custom web development',
      'graphic design services',
      'digital marketing agency',
      'printing services',
      'flyer distribution',
      'web development Greece',
      'digital marketing Arta',
      
      // Location keywords
      'Arta advertising agency',
      'Άρτα διαφημιστική',
      'Greece web development',
      'Ελλάδα digital marketing'
    ],
    alternates: {
      canonical: 'https://adinfinity.gr/contact',
      languages: {
        'el-GR': 'https://adinfinity.gr/contact',
        'el': 'https://adinfinity.gr/contact',
        'en': 'https://adinfinity.gr/contact',
        'en-US': 'https://adinfinity.gr/contact'
      },
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/contact',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Επικοινωνία adinfinity - Μετατρέπουμε Ιδέες σε Επιτυχίες!'
            : 'Contact adinfinity - Transforming Ideas into Success!',
        },
      ],
      locale: localeMap[locale as keyof typeof localeMap],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.title'),
      description: t('seo.description'),
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

