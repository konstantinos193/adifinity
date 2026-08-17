import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

const URL = 'https://adinfinity.gr/digital-marketing'

const localeMap = {
  el: 'el_GR',
  en: 'en_US',
} as const

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('digital_marketing_page')

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: URL,
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: URL,
      siteName: 'adinfinity',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt:
            locale === 'el'
              ? 'Digital Marketing Άρτα - adinfinity | Social Media, Google Ads, SEO'
              : 'Digital Marketing Arta - adinfinity | Social Media, Google Ads, SEO',
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

/**
 * Structured data is intentionally authored in Greek and rendered for every
 * locale: it describes a single physical business in Arta, and Google reads one
 * canonical entity per URL rather than one per visitor language.
 */
export default async function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = await getTranslations('digital_marketing_page')
  const faq = t.raw('faq') as Array<{ question: string; answer: string }>

  return (
    <>
      {/* Structured Data - Professional Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Digital Marketing Άρτα - adinfinity',
            description:
              'Υπηρεσίες digital marketing στην Άρτα: διαχείριση social media, Google & Meta Ads, SEO, παραγωγή περιεχομένου και μηνιαία αναφορά απόδοσης.',
            url: URL,
            provider: {
              '@type': 'Organization',
              name: 'adinfinity',
              url: 'https://adinfinity.gr',
              telephone: '+30-2681-303007',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Βασ. Πύρρου 30',
                addressLocality: 'Άρτα',
                postalCode: '471 32',
                addressCountry: 'GR',
              },
              sameAs: [
                'https://www.facebook.com/adinfinity.gr',
                'https://www.instagram.com/adinfinity.gr',
              ],
            },
            serviceType: [
              'Digital Marketing',
              'Social Media Management',
              'Google Ads',
              'Meta Ads',
              'Search Engine Optimization',
              'Content Marketing',
            ],
            areaServed: [
              { '@type': 'City', name: 'Άρτα' },
              { '@type': 'AdministrativeArea', name: 'Ήπειρος' },
              { '@type': 'Country', name: 'Greece' },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Υπηρεσίες Digital Marketing',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Διαχείριση Social Media',
                    description:
                      'Πλάνο περιεχομένου, σχεδιασμός δημιουργικών και community management σε Facebook, Instagram και TikTok.',
                  },
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: '250',
                    priceCurrency: 'EUR',
                    valueAddedTaxIncluded: false,
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Διαχείριση Google & Meta Ads',
                    description:
                      'Στήσιμο καμπανιών, conversion tracking και συνεχής βελτιστοποίηση με στόχο leads και πωλήσεις.',
                  },
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: '300',
                    priceCurrency: 'EUR',
                    valueAddedTaxIncluded: false,
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'SEO & Τοπική Προβολή',
                    description:
                      'Technical SEO, on-page βελτιστοποίηση, στρατηγική περιεχομένου και Google Business Profile.',
                  },
                  priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: '350',
                    priceCurrency: 'EUR',
                    valueAddedTaxIncluded: false,
                  },
                },
              ],
            },
            openingHours: 'Mo-Fr 09:00-17:00',
            priceRange: '€€',
          }),
        }}
      />
      {/* Structured Data - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
      {/* Structured Data - Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://adinfinity.gr' },
              { '@type': 'ListItem', position: 2, name: 'Υπηρεσίες', item: 'https://adinfinity.gr/services' },
              { '@type': 'ListItem', position: 3, name: 'Digital Marketing', item: URL },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
