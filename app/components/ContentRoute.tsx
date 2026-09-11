import type { Metadata } from "next"
import Breadcrumbs from "./Breadcrumbs"
import { ContentPage } from "./ContentPage"
import RelatedProjects from "./RelatedProjects"
import { faqNode } from "./faqData"
import { withFacts, withFactsDeep } from "@/lib/company"
import { OG_LOCALE } from "@/lib/metadata"
import { jsonLd, pageGraph, ORG_REF, SITE_URL } from "@/lib/schema"
import { pickProjects } from "@/lib/serviceProjects"
import { getProjectBySlug } from "@/lib/projects"
import type { ContentPage as ContentPageData } from "@/lib/content/types"

/**
 * Everything a content route needs besides its prose.
 *
 * A route file is three lines: import the page data, `export const metadata =
 * contentMetadata(page)`, render `<ContentRoute page={page} />`. Metadata,
 * canonical, Open Graph, the JSON-LD graph (Article or Service, FAQPage,
 * BreadcrumbList, WebPage), the visible trail and the proof section are all
 * derived here — so they are the same on every page and cannot be forgotten.
 */
export function contentMetadata(page: ContentPageData): Metadata {
  const url = `${SITE_URL}${page.path}`
  const title = withFacts(page.seoTitle)
  const description = withFacts(page.seoDescription)
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "adinfinity",
      type: page.kind === "guide" ? "article" : "website",
      locale: OG_LOCALE,
      images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/og-image.png"] },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
  }
}

export function ContentRoute({ page }: { page: ContentPageData }) {
  const url = `${SITE_URL}${page.path}`
  const faq = faqNode(page.faq.map((item) => ({ q: withFacts(item.q.el), a: withFacts(item.a.el) })))

  const extra: Record<string, unknown>[] = []
  if (page.kind === "guide") {
    extra.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: withFacts(page.h1.el),
      description: withFacts(page.summary.el),
      inLanguage: "el-GR",
      mainEntityOfPage: { "@id": `${url}#webpage` },
      // The founder is the named author (E-E-A-T, audit §26); the node lives in the root graph.
      author: { "@id": `${SITE_URL}/#founder` },
      publisher: ORG_REF,
      ...(page.datePublished ? { datePublished: page.datePublished } : {}),
      ...(page.dateModified ? { dateModified: page.dateModified } : {}),
    })
  }

  const graph = pageGraph({
    path: page.path,
    breadcrumb: page.breadcrumb,
    faq,
    extra,
    ...(page.service
      ? {
          service: {
            path: page.path,
            name: page.service.name,
            description: withFacts(page.service.description),
            serviceType: page.service.serviceType,
          },
        }
      : {}),
  })

  const projects = page.projectSlugs
    ? page.projectSlugs.map((slug) => getProjectBySlug(slug)).filter((p): p is NonNullable<typeof p> => Boolean(p))
    : page.projectsRoute
      ? pickProjects(page.projectsRoute)
      : []

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />
      <Breadcrumbs trail={page.breadcrumb} />
      {/* Substituted here so the RSC payload carries the company facts, not placeholders. */}
      <ContentPage page={withFactsDeep(page)} />
      {projects.length > 0 && <RelatedProjects projects={projects} />}
    </>
  )
}
