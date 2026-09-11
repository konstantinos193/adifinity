/**
 * Conversion events for GA4.
 *
 * Why this exists
 * ---------------
 * Analytics recorded page views and nothing else, so "organic clicks" could
 * never be connected to "someone called" or "someone sent the form" — the one
 * chain the 2026-09-11 audit (§33) says SEO should be judged by:
 *
 *   impression → click → landing page → phone / email / form → lead
 *
 * Every event goes through {@link track}, which is a no-op until the visitor
 * has granted analytics consent and gtag has loaded (see
 * `components/GoogleAnalytics.tsx`). Nothing here runs on the server.
 *
 * Event names follow GA4's recommended vocabulary where one exists
 * (`generate_lead`) so they show up in the built-in reports; the rest are
 * prefixed so they are easy to find in DebugView.
 */

export type ConversionEvent =
  | 'generate_lead'
  | 'click_to_call'
  | 'click_to_email'
  | 'click_to_whatsapp'
  | 'contact_cta_click'
  | 'pricing_tab_view'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function track(event: ConversionEvent, params: Record<string, string | number | undefined> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', event, {
    // Where the conversion happened, so a lead can be attributed to the page
    // that earned the click — /prints and /flyer-distribution, say — rather
    // than only to /contact.
    page_path: window.location.pathname,
    ...params,
  })
}

/**
 * Classifies an anchor for click tracking. Returns `null` for anchors that are
 * not a conversion (ordinary navigation).
 */
export function conversionFor(anchor: HTMLAnchorElement): { event: ConversionEvent; params: Record<string, string> } | null {
  const href = anchor.getAttribute('href') ?? ''
  if (href.startsWith('tel:')) return { event: 'click_to_call', params: { link_url: href } }
  if (href.startsWith('mailto:')) return { event: 'click_to_email', params: { link_url: href } }
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return { event: 'click_to_whatsapp', params: { link_url: href } }
  if (/^\/contact(#|\?|$)/.test(href)) {
    return { event: 'contact_cta_click', params: { link_text: (anchor.textContent ?? '').trim().slice(0, 80) } }
  }
  return null
}
