'use client'

import { useEffect } from 'react'
import { conversionFor, track } from '@/lib/analytics'

/**
 * One delegated click listener for every conversion link on the site.
 *
 * `tel:` and `mailto:` anchors appear in the header, footer, sticky mobile bar,
 * pricing CTA and several page bodies. Instrumenting each one would mean
 * touching a dozen components and forgetting the next one; delegation on
 * `document` catches them all, including links rendered later.
 *
 * Renders nothing. Mounted once, in the root layout.
 */
export default function ConversionTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.('a[href]')
      if (!(anchor instanceof HTMLAnchorElement)) return
      const conversion = conversionFor(anchor)
      if (conversion) track(conversion.event, conversion.params)
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
