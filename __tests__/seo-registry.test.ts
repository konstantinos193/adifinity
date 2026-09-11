/**
 * Governance: every hand-built route has one owner, one primary keyword and a
 * review date; no two pages target the same query (audit §31, §42, §44).
 *
 * Guides, sub-services and case studies are derived from their own data and
 * are checked for the same properties from `lib/content`.
 */
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

import { INDEXABLE_ROUTES } from '@/app/sitemap'
import * as faqData from '@/app/components/faqData'
import * as relatedLinks from '@/app/components/relatedLinksData'
import { CONTENT_PAGES } from '@/lib/content'
import { withFacts } from '@/lib/company'
import { SEO_REGISTRY } from '@/lib/seo-registry'

const derived = new Set(CONTENT_PAGES.map((page) => page.path))
const isCaseStudy = (path: string) => /^\/projects\/[^/]+$/.test(path)

describe('seo registry', () => {
  it('has a record for every hand-built sitemap route', () => {
    const registered = new Set(SEO_REGISTRY.map((r) => r.path))
    for (const path of INDEXABLE_ROUTES) {
      if (derived.has(path) || isCaseStudy(path)) continue
      assert.ok(registered.has(path), `${path} is in the sitemap but has no seo-registry record`)
    }
  })

  it('has no record for a route that is not in the sitemap', () => {
    const indexable = new Set(INDEXABLE_ROUTES)
    for (const record of SEO_REGISTRY) {
      assert.ok(indexable.has(record.path), `${record.path} is registered but not indexable`)
    }
  })

  it('gives every page a distinct primary keyword', () => {
    const seen = new Map<string, string>()
    for (const record of SEO_REGISTRY) {
      const key = record.primaryKeyword.toLowerCase()
      assert.ok(!seen.has(key), `${record.path} and ${seen.get(key)} both target "${record.primaryKeyword}"`)
      seen.set(key, record.path)
    }
    for (const page of CONTENT_PAGES) {
      const key = withFacts(page.h1.el).toLowerCase()
      assert.ok(!seen.has(key), `${page.path} and ${seen.get(key)} both target "${key}"`)
      seen.set(key, page.path)
    }
  })

  it('dates are ISO and not in the future', () => {
    const today = new Date().toISOString().slice(0, 10)
    for (const record of SEO_REGISTRY) {
      const date = record.lastReviewed
      assert.match(date, /^\d{4}-\d{2}-\d{2}$/, record.path)
      assert.ok(date <= today, `${record.path}: ${date} is in the future`)
    }
  })
})

/**
 * The site publishes no prices: every service is quoted per project (see
 * `QUOTE_TURNAROUND_HOURS` in lib/company.ts). This walks every string a page
 * can render from data and fails on anything that reads as a first-party
 * price, so a figure cannot creep back in through a content file, a FAQ array
 * or a translation.
 */
const PRICE_PATTERNS: [RegExp, string][] = [
  [/\{price:/, 'the removed {price:key} placeholder'],
  [/€/, 'a euro sign'],
  [/\b\d[\d.,]*\s?(ευρώ|euros?|EUR)\b/i, 'a euro amount'],
  [/\b(από|from)\s+\d[\d.,]*\s?(€|ευρώ|euro)/i, 'a "from N euro" starting price'],
]

/** Third-party figures the copy may quote: they are not our prices. */
const THIRD_PARTY_PRICE_ALLOWLIST = [
  /Shopify/i, // "Shopify costs €30-500/month" on the e-commerce page
  /κρατήσεις αξίας|bookings a year|χιλιάδες ευρώ|thousand euros/i, // client revenue examples on booking pages
]

function assertNoFirstPartyPrice(value: unknown, where: string) {
  if (typeof value === 'string') {
    if (THIRD_PARTY_PRICE_ALLOWLIST.some((re) => re.test(value))) return
    for (const [re, what] of PRICE_PATTERNS) {
      assert.ok(!re.test(value), `${where} contains ${what}: "${value.slice(0, 80)}"`)
    }
  } else if (Array.isArray(value)) value.forEach((v, i) => assertNoFirstPartyPrice(v, `${where}[${i}]`))
  else if (value && typeof value === 'object') for (const [k, v] of Object.entries(value)) assertNoFirstPartyPrice(v, `${where}.${k}`)
}

describe('no published prices', () => {
  it('content pages carry no first-party price', () => {
    for (const page of CONTENT_PAGES) assertNoFirstPartyPrice(page, page.path)
  })

  it('FAQ arrays and related-link descriptions carry no first-party price', () => {
    assertNoFirstPartyPrice(faqData, 'faqData')
    assertNoFirstPartyPrice(relatedLinks, 'relatedLinksData')
  })

  it('message files carry no first-party price', () => {
    const root = fileURLToPath(new URL('../messages/', import.meta.url))
    for (const locale of readdirSync(root)) {
      const dir = path.join(root, locale)
      for (const file of readdirSync(dir)) {
        if (!file.endsWith('.json')) continue
        const json = JSON.parse(readFileSync(path.join(dir, file), 'utf8'))
        assertNoFirstPartyPrice(json, `messages/${locale}/${file}`)
      }
    }
  })
})

describe('content pages', () => {
  it('keep seo titles and descriptions within SERP limits', () => {
    for (const page of CONTENT_PAGES) {
      const title = withFacts(page.seoTitle)
      const description = withFacts(page.seoDescription)
      assert.ok(title.length <= 70, `${page.path} title is ${title.length} chars`)
      assert.ok(description.length >= 100 && description.length <= 175, `${page.path} description is ${description.length} chars`)
    }
  })

  it('carry the cluster: a breadcrumb, at least three related links and an FAQ', () => {
    for (const page of CONTENT_PAGES) {
      assert.ok(page.breadcrumb.length >= 2, `${page.path} breadcrumb too short`)
      assert.equal(page.breadcrumb[page.breadcrumb.length - 1]?.path, page.path, `${page.path} last crumb must be itself`)
      assert.ok(page.related.length >= 3, `${page.path} needs at least 3 related links`)
      assert.ok(page.faq.length >= 3, `${page.path} needs at least 3 FAQ items`)
    }
  })

  it('never use an em dash or en dash in visible copy', () => {
    const scan = (value: unknown, where: string) => {
      if (typeof value === 'string') assert.ok(!/[—–]/.test(value), `${where} contains an em/en dash: "${value.slice(0, 60)}"`)
      else if (Array.isArray(value)) value.forEach((v, i) => scan(v, `${where}[${i}]`))
      else if (value && typeof value === 'object') for (const [k, v] of Object.entries(value)) scan(v, `${where}.${k}`)
    }
    for (const page of CONTENT_PAGES) scan(page, page.path)
  })
})
