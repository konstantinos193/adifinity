import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/** The one host Google should ever index. */
const CANONICAL_HOST = 'adinfinity.gr'

/**
 * Hosts that are *this site* and must collapse onto {@link CANONICAL_HOST}.
 *
 * Anything else — `localhost:3000`, a `*.vercel.app` preview deployment — is
 * left alone. Before this allow-list every non-canonical host was bounced to
 * production, which meant `next dev` redirected to adinfinity.gr and preview
 * URLs were unusable.
 */
const SITE_HOSTS = new Set([CANONICAL_HOST, `www.${CANONICAL_HOST}`])

/** Legacy Joomla query keys that still arrive from old backlinks and stale SERPs. */
const JOOMLA_PARAMS = ['option', 'view', 'task', 'id', 'itemlist', 'user']

/** Query keys allowed to survive on `/` (marketing attribution only). */
const ALLOWED_ROOT_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref', 'gclid', 'fbclid']

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = (request.headers.get('host') || '').toLowerCase()
  const protocol =
    request.headers.get('x-forwarded-proto') || (request.nextUrl.protocol === 'https:' ? 'https' : 'http')

  const isSiteHost = SITE_HOSTS.has(hostname)

  /*
   * Host + protocol normalization.
   *
   * Compared against the *raw* hostname on purpose. The previous version
   * stripped `www.` first and then asked "is what's left the canonical host?"
   * — which is true for `www.adinfinity.gr`, so www requests were treated as
   * canonical and served a 200. The whole site was a duplicate on two hosts,
   * and Search Console split the homepage's signals across `http://`, `https://`
   * and `www.` variants. 308 (not 301) so POST bodies survive the hop.
   */
  if (isSiteHost && (hostname !== CANONICAL_HOST || protocol !== 'https')) {
    const canonicalUrl = new URL(`https://${CANONICAL_HOST}${url.pathname}${url.search}`)
    return NextResponse.redirect(canonicalUrl, 308)
  }

  // Cleanup redirects below must stay on the *current* origin so they keep
  // working on localhost and preview deployments.
  const origin = isSiteHost ? `https://${CANONICAL_HOST}` : `${protocol}://${hostname}`
  const searchParams = url.searchParams

  // Legacy Joomla URLs (`?option=com_k2&view=item&id=…`) → clean homepage.
  // This is the ONLY place that handles them: the equivalent rule that used to
  // live in next.config.mjs redirected `/?option=com_k2` to
  // `https://adinfinity.gr` + the same query, i.e. to itself, forever.
  if (JOOMLA_PARAMS.some((param) => searchParams.has(param))) {
    return NextResponse.redirect(new URL('/', origin), 301)
  }

  // Strip unknown query params from `/` so `/?foo=bar` cannot be indexed as a
  // second homepage. Attribution params are kept — they never reach the index
  // (canonical is `/`) and analytics needs them.
  if (url.pathname === '/' && searchParams.toString()) {
    const hasAllowedParams = Array.from(searchParams.keys()).some((key) =>
      ALLOWED_ROOT_PARAMS.some((allowed) => key === allowed || key.startsWith(allowed)),
    )
    if (!hasAllowedParams) {
      return NextResponse.redirect(new URL('/', origin), 301)
    }
  }

  // Legacy `.html` URLs from the Joomla era.
  if (url.pathname.toLowerCase().endsWith('.html')) {
    return NextResponse.redirect(new URL('/', origin), 301)
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
