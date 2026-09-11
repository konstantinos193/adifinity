import type { Crumb } from '@/lib/schema'

/**
 * Bilingual content pages — guides, sub-services and vertical pages.
 *
 * Why this exists
 * ---------------
 * The 2026-09-11 audit asks for a guides hub, buying guides, sub-service pages
 * and a hospitality vertical (§8, §9, §17, §24, §43, §47) — and, in the same
 * breath, warns against "SEO wallpaper": pages that could be published
 * unchanged by any other agency. The way to keep that promise across a dozen
 * pages is to make each one *only* content: prose, prices from
 * `lib/company.ts`, real projects, FAQs, and the links that tie it into its
 * cluster. Layout, metadata, JSON-LD and breadcrumbs are generated once from
 * this shape (see `app/components/ContentRoute.tsx`), so a new page cannot
 * ship without a canonical, a trail, an FAQ node or a related-links block.
 *
 * Every string is `{ el, en }`. The server always renders Greek (see
 * `lib/metadata.ts`); English is the client-side toggle. Strings may carry
 * `{clients}` / `{founded}` placeholders, substituted at render.
 *
 * No prices, anywhere: the site quotes per project (see `lib/company.ts`).
 * A page says what is included, what determines the cost, and how fast a
 * written quote arrives; `quoteNote` is the one-line version of that.
 */
export interface L {
  el: string
  en: string
}

export interface ContentFaq {
  q: L
  a: L
}

export interface ContentTable {
  head: L[]
  rows: L[][]
}

export interface ContentSection {
  heading: L
  paragraphs?: L[]
  bullets?: L[]
  table?: ContentTable
  /** Route-absolute path to link the heading's subject to, e.g. a case study. */
  link?: { path: string; label: L }
}

export interface ContentLink {
  path: string
  label: L
  description?: L
}

export type ContentKind = 'guide' | 'service' | 'vertical'

export interface ContentPage {
  path: string
  kind: ContentKind
  /** Greek — what the server renders into <title>. Under ~62 characters. */
  seoTitle: string
  /** Greek — under ~158 characters after placeholder substitution. */
  seoDescription: string
  /** Short eyebrow above the H1. */
  badge: L
  h1: L
  /** One-paragraph summary for hub cards and the meta description's sibling. */
  summary: L
  /** The direct answer, in the first ~150 words (AI retrieval is passage-level). */
  intro: L[]
  sections: ContentSection[]
  faq: ContentFaq[]
  /** Service pages: one line under "Κατόπιν προσφοράς" (what determines the cost, quote turnaround). */
  quoteNote?: L
  /** Cluster links: one related service, one case study route, one guide, the conversion path. */
  related: ContentLink[]
  /** Key for `pickProjects()` — which case studies prove this page. */
  projectsRoute?: string
  /** Hand-picked case studies (slugs), when tag scoring would pull in the wrong ones. */
  projectSlugs?: string[]
  /** Trail below the site root; the last crumb is this page. */
  breadcrumb: Crumb[]
  /** Only for `service` / `vertical`: the schema.org Service node, in Greek. */
  service?: {
    name: string
    description: string
    serviceType: string[]
  }
  /** Only for `guide`: Article dates (ISO). */
  datePublished?: string
  dateModified?: string
  /** Guide-hub card only. */
  readingMinutes?: number
}
