/**
 * Tests for proxy.ts redirect logic.
 *
 * Run with `pnpm test`. These used to be written against Jest globals with no
 * Jest installed, so they never ran — which is how the www bug shipped: the
 * "redirects https://www.adinfinity.gr" case below would have failed.
 */
import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { NextRequest } from 'next/server'

import { proxy } from '../proxy'

function createRequest(url: string, headers: Record<string, string> = {}) {
  const parsed = new URL(url)
  return new NextRequest(url, {
    headers: new Headers({
      host: parsed.host,
      'x-forwarded-proto': parsed.protocol.slice(0, -1),
      ...headers,
    }),
  })
}

const location = (res: Response) => res.headers.get('location')

describe('host + protocol normalization', () => {
  it('redirects http://adinfinity.gr to https://adinfinity.gr', () => {
    const res = proxy(createRequest('http://adinfinity.gr/'))
    assert.equal(res.status, 308)
    assert.equal(location(res), 'https://adinfinity.gr/')
  })

  it('redirects https://www.adinfinity.gr to https://adinfinity.gr', () => {
    const res = proxy(createRequest('https://www.adinfinity.gr/'))
    assert.equal(res.status, 308)
    assert.equal(location(res), 'https://adinfinity.gr/')
  })

  it('redirects http://www.adinfinity.gr to https://adinfinity.gr', () => {
    const res = proxy(createRequest('http://www.adinfinity.gr/'))
    assert.equal(res.status, 308)
    assert.equal(location(res), 'https://adinfinity.gr/')
  })

  it('preserves path and query params on redirect', () => {
    const res = proxy(createRequest('http://www.adinfinity.gr/services?utm_source=google'))
    assert.equal(res.status, 308)
    assert.equal(location(res), 'https://adinfinity.gr/services?utm_source=google')
  })

  it('does not redirect the canonical host', () => {
    const res = proxy(createRequest('https://adinfinity.gr/prints'))
    assert.equal(location(res), null)
  })

  it('treats the host header case-insensitively', () => {
    const res = proxy(createRequest('https://adinfinity.gr/', { host: 'WWW.Adinfinity.GR' }))
    assert.equal(res.status, 308)
    assert.equal(location(res), 'https://adinfinity.gr/')
  })

  it('leaves localhost alone so `next dev` works', () => {
    const res = proxy(createRequest('http://localhost:3000/prints'))
    assert.equal(location(res), null)
  })

  it('leaves Vercel preview deployments alone', () => {
    const res = proxy(createRequest('https://adifinity-git-feature-abc.vercel.app/prints'))
    assert.equal(location(res), null)
  })
})

describe('legacy Joomla URLs', () => {
  it('redirects ?option=com_k2 to the clean homepage', () => {
    const res = proxy(createRequest('https://adinfinity.gr/?option=com_k2&view=item'))
    assert.equal(res.status, 301)
    assert.equal(location(res), 'https://adinfinity.gr/')
  })

  it('redirects every Joomla param family', () => {
    for (const query of ['?option=com_content&view=article&id=123', '?option=com_users', '?view=item&task=user']) {
      const res = proxy(createRequest(`https://adinfinity.gr/${query}`))
      assert.equal(res.status, 301, query)
      assert.equal(location(res), 'https://adinfinity.gr/', query)
    }
  })

  it('does not loop: the redirect target itself passes through', () => {
    const res = proxy(createRequest('https://adinfinity.gr/'))
    assert.equal(location(res), null)
  })

  it('keeps the cleanup on the current origin in dev', () => {
    const res = proxy(createRequest('http://localhost:3000/?option=com_k2'))
    assert.equal(res.status, 301)
    assert.equal(location(res), 'http://localhost:3000/')
  })
})

describe('legacy .html URLs', () => {
  it('redirects to the homepage', () => {
    const res = proxy(createRequest('https://adinfinity.gr/old-page.html'))
    assert.equal(res.status, 301)
    assert.equal(location(res), 'https://adinfinity.gr/')
  })
})

describe('homepage query cleanup', () => {
  it('strips unknown params from /', () => {
    const res = proxy(createRequest('https://adinfinity.gr/?param=unwanted&another=value'))
    assert.equal(res.status, 301)
    assert.equal(location(res), 'https://adinfinity.gr/')
  })

  it('keeps attribution params on /', () => {
    const res = proxy(createRequest('https://adinfinity.gr/?utm_source=google&utm_medium=cpc'))
    assert.equal(location(res), null)
  })

  it('does not touch query strings on deeper routes', () => {
    const res = proxy(createRequest('https://adinfinity.gr/projects?category=web'))
    assert.equal(location(res), null)
  })
})
