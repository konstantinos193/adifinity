import MaintenanceClient from './MaintenanceClient'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('maintenance_page')
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    keywords: "web maintenance, συντηρηση ιστοσελιδων, website support, security updates, performance monitoring, retainer services, greek web developer, διαφημιστικε ιστοσελιδες, κατασκευη ιστοσελιδων, web development, ongoing support, adfinity, adinity, συνεχης υποστηριξη",
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      type: 'website',
      url: 'https://adinfinity.gr/website-development/maintenance',
      images: [
        {
          url: 'https://adinfinity.gr/images/og-image.png',
          width: 1200,
          height: 630,
          alt: t('seo.title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.title'),
      description: t('seo.description'),
      images: ['https://adinfinity.gr/images/og-image.png'],
    },
    alternates: {
      canonical: 'https://adinfinity.gr/website-development/maintenance',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function MaintenancePage() {
  return <MaintenanceClient />
}
