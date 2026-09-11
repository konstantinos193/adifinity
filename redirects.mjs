/**
 * Application-level redirects, consumed by next.config.mjs.
 *
 * Kept in its own module so `__tests__/sitemap.test.ts` can import the table
 * without loading next.config.mjs (which pulls in the next-intl plugin) and
 * assert that no redirected URL is ever listed in the sitemap.
 *
 * Host normalization (www → apex) lives here; protocol normalization
 * (http → https) is done by Vercel before the request reaches Next.js; and
 * legacy Joomla query-string URLs are handled in proxy.ts.
 *
 * @type {import('next/dist/lib/load-custom-routes').Redirect[]}
 */
export const redirects = [
  /*
   * www → apex.
   *
   * Declared here — not only in proxy.ts — because config redirects are
   * evaluated at the edge *before* the proxy runs, so the duplicate host
   * never reaches a render. Until 2026-09-11 `https://www.adinfinity.gr/*`
   * answered 200 for every route (the proxy's host check had a bug) and
   * Google was choosing between four homepages. Query strings carry over
   * automatically.
   */
  {
    source: '/:path*',
    has: [{ type: 'host', value: 'www.adinfinity.gr' }],
    destination: 'https://adinfinity.gr/:path*',
    permanent: true,
  },
  /*
   * Legacy Joomla `?option=com_k2…` URLs are handled in proxy.ts, and ONLY
   * there. The rule that used to sit here — `source: '/'` + `has` query
   * `option=com_k2` → `https://adinfinity.gr` — re-appended the matched
   * query to its own destination and looped forever (curl gave up after
   * 50 hops). Every old-site URL Google still remembered was a "Redirect
   * error" in Search Console.
   */
  /*
   * Wedding-funnel consolidation.
   *
   * These three routes were spun from one 220-line template — identical
   * markup, differing only in an i18n key prefix and four icons — and each
   * duplicated a properly-built landing page on the invitations product at
   * invitations.adinfinity.gr (one of them, `/ilektroniko-prosklitirio-gamou`,
   * shared its slug verbatim). Nine pages across the two hosts competed for
   * the same Greek queries; Google resolved that by declining to index the
   * product's own homepage ("Crawled - currently not indexed").
   *
   * The agency site keeps exactly one wedding page — `/invitations` — as the
   * service entry that hands off to the product. Everything else folds into it.
   */
  { source: '/psifiako-prosklitirio-gamou', destination: '/invitations', permanent: true },
  { source: '/ilektroniko-prosklitirio-gamou', destination: '/invitations', permanent: true },
  { source: '/site-gamou-rsvp', destination: '/invitations', permanent: true },
  /*
   * `/katastrifi-web-efarmogon` folds into `/website-development`.
   *
   * Three URLs targeted "κατασκευή web εφαρμογών" (47 impressions, 0 clicks
   * over 16 months): this one, `/website-development` — whose title is
   * literally "Κατασκευή Web Εφαρμογών & E-shop" — and
   * `/website-development/web-apps`. This was the thinnest by a wide margin:
   * ~130 words of unique body copy, 86% token overlap with
   * `/website-development` against a ~48% shared-chrome baseline, and every
   * one of its headings a subset of that page's. It has never recorded a
   * single impression.
   *
   * Kept deliberately narrow: `/ektypwseis-arta` overlaps `/prints` at 69%
   * and is the obvious next candidate, but it was re-scoped to large-format
   * printing on 2026-08-25 and has not yet had a crawl cycle to prove the
   * split works. Redirecting it now would discard that test and confound
   * attribution for the indexing fix shipped the same day.
   */
  { source: '/katastrifi-web-efarmogon', destination: '/website-development', permanent: true },
  /*
   * Keyword clones folded into the page that owns the intent (2026-09-11 audit,
   * §6 "Do NOT create keyword clones", §43 information architecture).
   *
   * `/web-development-arta` (127 words) targeted "κατασκευή ιστοσελίδων Άρτα"
   * against `/website-development`, which now carries that title; its
   * "local support / you own the code" body and FAQ moved into the parent.
   * `/dianomi-fylladion-arta` (130 words) did the same to `/flyer-distribution`
   * for "διανομή φυλλαδίων Άρτα"; its GPS-tracking process and FAQ moved too.
   * Nothing was deleted from the site — only the duplicate URL.
   */
  { source: '/web-development-arta', destination: '/website-development', permanent: true },
  { source: '/dianomi-fylladion-arta', destination: '/flyer-distribution', permanent: true },
]
