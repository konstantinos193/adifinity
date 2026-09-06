import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || (request.nextUrl.protocol === 'https:' ? 'https' : 'http')

  // Target canonical domain: https://adinfinity.gr (no www)
  const canonicalHost = 'adinfinity.gr'
  const isWww = hostname.startsWith('www.')
  const hostWithoutWww = isWww ? hostname.slice(4) : hostname
  const isCanonical = hostWithoutWww === canonicalHost && protocol === 'https'

  // Handle protocol/www normalization - fix GSC indexing issues
  // Uses 308 (not 301) to preserve request method for POST/PUT requests
  if (!isCanonical) {
    const canonicalUrl = new URL(`https://${canonicalHost}${url.pathname}${url.search}`)
    console.log(`[SEO] Normalizing: ${protocol}://${hostname}${url.pathname} -> ${canonicalUrl.toString()}`)
    return NextResponse.redirect(canonicalUrl, 308) // Permanent redirect, preserves method
  }

  const searchParams = url.searchParams

  // Handle old Joomla URLs with query parameters - redirect to clean homepage
  const joomlaParams = ['option', 'view', 'task', 'id', 'itemlist', 'user']
  const hasJoomlaParams = joomlaParams.some(param => searchParams.has(param)) ||
    (searchParams.has('option') &&
      (searchParams.get('option')?.includes('com_k2') ||
        searchParams.get('option')?.includes('com_content') ||
        searchParams.get('option')?.includes('com_users')))

  // If it's a Joomla URL, redirect to homepage
  if (hasJoomlaParams) {
    const homepageUrl = new URL(`https://${canonicalHost}/`)
    console.log(`[SEO] Removing Joomla params: ${url.toString()} -> ${homepageUrl.toString()}`)
    return NextResponse.redirect(homepageUrl, 301) // Permanent redirect
  }

  // Handle unwanted query parameters on root (keep marketing tracking params only)
  if (url.pathname === '/' && searchParams.toString()) {
    const allowedParams = ['utm_source', 'utm_medium', 'utm_campaign', 'ref', 'gclid', 'fbclid']
    const hasAllowedParams = Array.from(searchParams.keys()).some((key) =>
      allowedParams.some((allowed) => key.startsWith(allowed) || key === allowed)
    )

    // If no allowed params, redirect to clean URL
    if (!hasAllowedParams) {
      const cleanUrl = new URL(`https://${canonicalHost}/`)
      console.log(`[SEO] Removing unwanted query params from /: ${url.toString()} -> ${cleanUrl.toString()}`)
      return NextResponse.redirect(cleanUrl, 301)
    }
  }

  // Handle legacy .html URLs (old Joomla artifacts)
  const pathname = url.pathname.toLowerCase()
  const isLegacyHtmlUrl = pathname.endsWith('.html')

  if (isLegacyHtmlUrl) {
    const homepageUrl = new URL(`https://${canonicalHost}/`)
    console.log(`[SEO] Removing legacy .html extension: ${url.toString()} -> ${homepageUrl.toString()}`)
    return NextResponse.redirect(homepageUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}

