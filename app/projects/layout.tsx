import type { Metadata } from 'next'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('projects_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/projects',
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/projects',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Portfolio & Έργα adinfinity - Branding & Graphic Design Projects'
            : 'Portfolio & Projects adinfinity - Branding & Graphic Design Projects',
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

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /*
   * No structured data at this level.
   *
   * This layout also wraps the 30 `/projects/[slug]` case studies, each of
   * which builds its own breadcrumb. A trail emitted here gave every case study
   * two competing BreadcrumbLists — Google renders neither in that case — so the
   * listing page's graph moved to page.tsx.
   */
  return <>{children}</>
}
