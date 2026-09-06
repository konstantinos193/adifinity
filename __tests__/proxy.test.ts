/**
 * Tests for proxy.ts redirect logic
 *
 * Verifies that protocol and www normalization work correctly
 * to fix GSC indexing issues.
 */

import { NextRequest } from 'next/server'
import { proxy } from '../proxy'

/**
 * Helper to create a mock NextRequest
 */
function createRequest(url: string, headers: Record<string, string> = {}) {
  const defaultHeaders = {
    'host': new URL(url).hostname,
    'x-forwarded-proto': new URL(url).protocol.slice(0, -1), // Remove trailing ':'
    ...headers,
  }

  return new NextRequest(url, {
    headers: new Headers(defaultHeaders),
  }) as NextRequest & { nextUrl: URL }
}

describe('Proxy Redirects', () => {
  describe('Protocol/WWW normalization', () => {
    it('redirects http://adinfinity.gr to https://adinfinity.gr', () => {
      const req = createRequest('http://adinfinity.gr/', {
        'x-forwarded-proto': 'http',
      })

      const res = proxy(req)

      expect(res).toBeDefined()
      expect(res?.status).toBe(308)
      // Check the Location header
      const location = res?.headers.get('location')
      expect(location).toBe('https://adinfinity.gr/')
    })

    it('redirects https://www.adinfinity.gr to https://adinfinity.gr', () => {
      const req = createRequest('https://www.adinfinity.gr/', {
        'host': 'www.adinfinity.gr',
      })

      const res = proxy(req)

      expect(res).toBeDefined()
      expect(res?.status).toBe(308)
      const location = res?.headers.get('location')
      expect(location).toBe('https://adinfinity.gr/')
    })

    it('redirects http://www.adinfinity.gr to https://adinfinity.gr', () => {
      const req = createRequest('http://www.adinfinity.gr/', {
        'host': 'www.adinfinity.gr',
        'x-forwarded-proto': 'http',
      })

      const res = proxy(req)

      expect(res).toBeDefined()
      expect(res?.status).toBe(308)
      const location = res?.headers.get('location')
      expect(location).toBe('https://adinfinity.gr/')
    })

    it('preserves path and query params on redirect', () => {
      const req = createRequest('http://www.adinfinity.gr/services?utm_source=google', {
        'host': 'www.adinfinity.gr',
        'x-forwarded-proto': 'http',
      })

      const res = proxy(req)

      expect(res).toBeDefined()
      expect(res?.status).toBe(308)
      const location = res?.headers.get('location')
      expect(location).toBe('https://adinfinity.gr/services?utm_source=google')
    })

    it('does not redirect canonical domain (https://adinfinity.gr)', () => {
      const req = createRequest('https://adinfinity.gr/')

      const res = proxy(req)

      // Should return NextResponse.next(), which doesn't set a status
      expect(res?.status).not.toBe(308)
      expect(res?.status).not.toBe(301)
    })
  })

  describe('Joomla URL cleanup', () => {
    it('removes Joomla com_k2 param and redirects to homepage', () => {
      const req = createRequest('https://adinfinity.gr/?option=com_k2&view=item')

      const res = proxy(req)

      expect(res).toBeDefined()
      expect(res?.status).toBe(301)
      const location = res?.headers.get('location')
      expect(location).toBe('https://adinfinity.gr/')
    })

    it('removes various Joomla params', () => {
      const testCases = [
        '?option=com_content&view=article&id=123',
        '?option=com_users',
        '?view=item&task=user',
      ]

      testCases.forEach(queryString => {
        const req = createRequest(`https://adinfinity.gr/${queryString}`)
        const res = proxy(req)

        expect(res?.status).toBe(301)
        const location = res?.headers.get('location')
        expect(location).toBe('https://adinfinity.gr/')
      })
    })
  })

  describe('Legacy URL cleanup', () => {
    it('removes .html extension', () => {
      const req = createRequest('https://adinfinity.gr/old-page.html')

      const res = proxy(req)

      expect(res).toBeDefined()
      expect(res?.status).toBe(301)
      const location = res?.headers.get('location')
      expect(location).toBe('https://adinfinity.gr/')
    })
  })

  describe('Query param cleanup', () => {
    it('removes unwanted query params from homepage', () => {
      const req = createRequest('https://adinfinity.gr/?param=unwanted&another=value')

      const res = proxy(req)

      expect(res).toBeDefined()
      expect(res?.status).toBe(301)
      const location = res?.headers.get('location')
      expect(location).toBe('https://adinfinity.gr/')
    })

    it('preserves UTM params on homepage', () => {
      const req = createRequest('https://adinfinity.gr/?utm_source=google&utm_medium=cpc')

      const res = proxy(req)

      // Should NOT redirect, allowed params are kept
      expect(res?.status).not.toBe(301)
    })
  })
})
