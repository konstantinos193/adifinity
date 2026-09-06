import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getProjectBySlug, projects } from '@/lib/projects'
import { OG_LOCALE, metaDescription } from '@/lib/metadata'

import { ProjectCaseStudyClient } from './ProjectCaseStudyClient'

const BASE_URL = 'https://adinfinity.gr'

type PageProps = { params: Promise<{ slug: string }> }

/**
 * Every case study is prerendered at build time, and an unknown slug 404s
 * instead of triggering an on-demand render — same reasoning as
 * `lib/metadata.ts`: keep the whole `/projects` subtree statically served so
 * Googlebot never pays for an SSR render.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return {}

  // Greek, because the server render is Greek by definition. See lib/metadata.ts.
  const title = `${project.name} — Case Study | adinfinity`
  const description = metaDescription(project.description)
  const url = `${BASE_URL}/projects/${project.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'adinfinity',
      type: 'article',
      locale: OG_LOCALE,
      images: [{ url: project.image, alt: `${project.name} — ${project.category}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.image],
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

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const index = projects.findIndex((candidate) => candidate.slug === project.slug)
  const nextProject = projects[(index + 1) % projects.length]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    headline: `${project.name} — ${project.category}`,
    description: project.description,
    url: `${BASE_URL}/projects/${project.slug}`,
    image: `${BASE_URL}${project.image}`,
    genre: project.category,
    // `year` is a display string and can be a range — only the ISO field is safe here.
    ...(project.dateCreated ? { dateCreated: project.dateCreated } : {}),
    creator: { '@id': `${BASE_URL}/#organization` },
    ...(project.businessType
      ? {
          about: {
            '@type': 'Organization',
            name: project.name,
            ...(project.location ? { address: { '@type': 'PostalAddress', addressLocality: project.location } } : {}),
            ...(project.liveUrl ? { url: project.liveUrl } : {}),
          },
        }
      : {}),
    isPartOf: {
      '@type': 'CollectionPage',
      name: 'Portfolio & Έργα',
      url: `${BASE_URL}/projects`,
    },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      // "Αρχική", not "adinfinity" — the crumb name is what Google prints in
      // the result, and every other trail on the site starts with this word.
      { '@type': 'ListItem', position: 1, name: 'Αρχική', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Έργα', item: `${BASE_URL}/projects` },
      { '@type': 'ListItem', position: 3, name: project.name, item: `${BASE_URL}/projects/${project.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ProjectCaseStudyClient project={project} nextProject={nextProject} />
    </>
  )
}
