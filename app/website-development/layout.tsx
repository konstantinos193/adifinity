import type { Metadata } from 'next'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('website_development_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/website-development',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/website-development',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Κατασκευή Ιστοσελίδων & Web Apps adinfinity - Custom Development React Next.js'
            : 'Website Development & Web Apps adinfinity - Custom Development React Next.js',
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

export default function WebsiteDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /*
   * No structured data at this level.
   *
   * This layout wraps six sub-services (/e-commerce, /web-apps, …), so anything
   * emitted here renders on seven URLs. The FAQ was moved to page.tsx for that
   * reason already; the JSON-LD graph followed it, because every sub-page was
   * carrying this route's breadcrumb *and* its own — and Google renders neither
   * when a page declares two BreadcrumbLists.
   */
  return <>{children}</>
}
