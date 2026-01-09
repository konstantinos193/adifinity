import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || (request.nextUrl.protocol === 'https:' ? 'https' : 'http')
  
  // Target canonical domain: https://adinfinity.gr (no www)
  const canonicalHost = 'adinfinity.gr'
  const needsRedirect = 
    hostname !== canonicalHost || 
    protocol !== 'https' ||
    hostname.startsWith('www.')

  // Handle old Joomla URLs with query parameters - redirect to clean homepage
  const searchParams = url.searchParams
  const hasJoomlaParams = searchParams.has('option') &&
    (searchParams.get('option')?.includes('com_k2') ||
      searchParams.get('option')?.includes('com_content') ||
      searchParams.get('option')?.includes('com_users'))

  // If it's a Joomla URL or needs protocol/domain redirect, redirect to canonical
  if (hasJoomlaParams || needsRedirect) {
    const canonicalUrl = new URL(`https://${canonicalHost}${url.pathname}`)
    
    // For Joomla URLs, always redirect to homepage
    if (hasJoomlaParams) {
      canonicalUrl.pathname = '/'
      canonicalUrl.search = ''
    } else {
      // Keep pathname and only allowed query parameters
      const allowedParams = ['utm_source', 'utm_medium', 'utm_campaign', 'ref', 'gclid', 'fbclid']
      allowedParams.forEach((param) => {
        const value = searchParams.get(param)
        if (value) {
          canonicalUrl.searchParams.set(param, value)
        }
      })
    }
    
    return NextResponse.redirect(canonicalUrl, 301) // Permanent redirect
  }

  // Handle other unwanted query parameters on root (but keep allowed ones)
  if (url.pathname === '/' && searchParams.toString() && !needsRedirect && !hasJoomlaParams) {
    const allowedParams = ['utm_source', 'utm_medium', 'utm_campaign', 'ref', 'gclid', 'fbclid']
    const hasAllowedParams = Array.from(searchParams.keys()).some((key) =>
      allowedParams.some((allowed) => key.startsWith(allowed) || key === allowed)
    )

    // If no allowed params, redirect to clean URL
    if (!hasAllowedParams && searchParams.toString()) {
      const cleanUrl = new URL(`https://${canonicalHost}/`)
      return NextResponse.redirect(cleanUrl, 301)
    }
  }

  // Handle old/spam URLs that don't exist - redirect to homepage
  // These are old URLs from previous site versions or spam content
  const pathname = url.pathname.toLowerCase()
  const oldUrlPatterns = [
    '/sofpiti/',
    '/disability-acellories-gauss/',
    '/nitrile-von-poisson/',
    '.html', // Old HTML files
  ]
  
  // Check if path matches old URL patterns
  const isOldUrl = oldUrlPatterns.some((pattern) => pathname.includes(pattern))
  
  // Also check for paths that look like old content (multiple segments, .html extension, etc.)
  const pathSegments = pathname.split('/').filter(Boolean)
  const hasOldStructure = 
    pathSegments.length > 2 || // More than 2 segments (e.g., /category/subcategory/page.html)
    pathname.endsWith('.html') || // Old HTML files
    pathname.match(/\/[a-z0-9-]+\/[a-z0-9-]+\.html$/) // Pattern like /category/page.html

  // Redirect old/spam URLs to homepage
  if (isOldUrl || hasOldStructure) {
    const homepageUrl = new URL(`https://${canonicalHost}/`)
    return NextResponse.redirect(homepageUrl, 301) // Permanent redirect
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

