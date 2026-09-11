/**
 * Sitemap ↔ filesystem ↔ redirects parity.
 *
 * A sitemap URL that 404s, 308s, or lists an image that is not on disk is a
 * direct quality signal to Google — "Page with redirect" / "Not found" rows
 * in Search Console that count against the site. The route table in
 * app/sitemap.ts is hand-maintained, so this is the guard against it drifting
 * from what `next build` actually emits.
 */
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it } from 'node:test'

import sitemap, { INDEXABLE_ROUTES } from '@/app/sitemap'
import { projects } from '@/lib/projects'
import { redirects } from '../redirects.mjs'

const ROOT = fileURLToPath(new URL('../', import.meta.url))
const BASE_URL = 'https://adinfinity.gr'

const entries = sitemap()

/** The `app/**\/page.tsx` a route-absolute path is served by, if any. */
function pageFileFor(routePath: string): string | null {
  const segment = routePath === '/' ? '' : routePath.slice(1)
  const literal = path.join(ROOT, 'app', segment, 'page.tsx')
  if (existsSync(literal)) return literal

  // One level of dynamic segment is enough for this site (/projects/[slug]).
  const parts = segment.split('/')
  if (parts.length >= 2) {
    const dynamic = path.join(ROOT, 'app', ...parts.slice(0, -1), '[slug]', 'page.tsx')
    if (existsSync(dynamic)) return dynamic
  }
  return null
}

describe('sitemap routes', () => {
  it('lists each URL exactly once', () => {
    const urls = entries.map((e) => e.url)
    assert.deepEqual(urls, [...new Set(urls)])
  })

  it('only lists URLs on the canonical https host, without trailing slashes', () => {
    for (const { url } of entries) {
      assert.ok(url.startsWith(`${BASE_URL}/`), url)
      assert.ok(url === `${BASE_URL}/` || !url.endsWith('/'), `trailing slash: ${url}`)
      assert.ok(!/[A-Z]/.test(new URL(url).pathname), `uppercase path: ${url}`)
    }
  })

  it('maps every path to a real app/**/page.tsx', () => {
    for (const routePath of INDEXABLE_ROUTES) {
      assert.ok(pageFileFor(routePath), `no page.tsx serves ${routePath}`)
    }
  })

  it('lists every case study and only real slugs', () => {
    const listed = INDEXABLE_ROUTES.filter((p) => p.startsWith('/projects/')).map((p) => p.slice('/projects/'.length))
    const real = projects.map((p) => p.slug)
    assert.deepEqual([...listed].sort(), [...real].sort())
  })

  it('never lists a URL that next.config.mjs redirects', () => {
    // Only literal sources matter; the www host rule is scoped by `has` and
    // matches every path on purpose.
    const literalSources = new Set(
      redirects.filter((r) => !('has' in r) && !/[:*()]/.test(r.source)).map((r) => r.source),
    )
    for (const routePath of INDEXABLE_ROUTES) {
      assert.ok(!literalSources.has(routePath), `${routePath} is in the sitemap but redirects`)
    }
  })

  it('carries a real, non-future lastmod on every entry', () => {
    const today = new Date().toISOString().slice(0, 10)
    for (const { url, lastModified } of entries) {
      assert.match(String(lastModified), /^\d{4}-\d{2}-\d{2}$/, url)
      assert.ok(String(lastModified) <= today, `${url} lastmod ${lastModified} is in the future`)
    }
  })
})

describe('sitemap images', () => {
  it('points only at files that exist under public/', () => {
    for (const entry of entries) {
      for (const image of entry.images ?? []) {
        assert.ok(image.startsWith(`${BASE_URL}/`), image)
        const rel = decodeURI(new URL(image).pathname)
        assert.ok(existsSync(path.join(ROOT, 'public', rel)), `${entry.url} lists missing image ${rel}`)
      }
    }
  })

  it('does not list the OG card as page content', () => {
    // og-image.png and og-*.svg are <meta property="og:image"> assets, never
    // rendered in the body, so Google Images can't index them from the page.
    for (const entry of entries) {
      for (const image of entry.images ?? []) {
        assert.doesNotMatch(image, /\/og-[\w-]*\.(png|svg)$/, `${entry.url} lists OG asset ${image}`)
      }
    }
  })
})
