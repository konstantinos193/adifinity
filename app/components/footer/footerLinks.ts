import type { ComponentType } from "react"
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons"

/** A navigation entry read from the `footer.*.links` translation arrays. */
export interface FooterLink {
  path: string
  name: string
}

export interface SocialProfile {
  href: string
  /** Used verbatim as the link's accessible name. */
  label: string
  Icon: ComponentType<{ size?: number }>
}

/** A footer entry whose label is defined here rather than in the message files. */
export interface LocalServiceLink {
  path: string
  el: string
  en: string
  /**
   * Absolute URL to another adinfinity property rather than a route on this
   * site. Rendered as a plain `<a>` — and deliberately **without** `nofollow`
   * or `target="_blank"`, so the link passes equity to the subdomain.
   */
  external?: boolean
}

/**
 * The local-intent landing pages, linked sitewide from the footer.
 *
 * These 14 routes shipped in the sitemap but with **zero inbound internal
 * links** — discoverable only by sitemap, which is a weak crawl signal that
 * passes no link equity. That is a large part of why Search Console reported
 * 40 not-indexed against 12 indexed pages.
 *
 * Labels live here instead of in the per-locale footer.json on purpose: these are
 * the exact Greek query strings the pages target (`εκτυπώσεις Άρτα`,
 * `επιγραφές καταστημάτων`, `διανομή εντύπων`), so the anchor text is a
 * ranking signal, not decoration. Keeping it out of the translation files also
 * avoids the silent-fallback failure mode where a missing namespace turns the
 * anchor into a raw key path.
 */
export const localServiceLinks: LocalServiceLink[] = [
  { path: '/ektypwseis-arta', el: 'Εκτυπώσεις Άρτα', en: 'Printing Arta' },
  { path: '/grafistas-arta', el: 'Γραφίστας Άρτα', en: 'Graphic Designer Arta' },
  { path: '/epigrafes-arta', el: 'Επιγραφές Καταστημάτων Άρτα', en: 'Store Signage Arta' },
  { path: '/website-development', el: 'Κατασκευή Ιστοσελίδων Άρτα', en: 'Web Development Arta' },
  { path: '/diafimistiki-eteria', el: 'Διαφημιστική Εταιρεία Άρτα', en: 'Advertising Agency Arta' },
  { path: '/flyer-distribution', el: 'Διανομή Φυλλαδίων Άρτα', en: 'Flyer Distribution Arta' },
  { path: '/diafimistika-dora', el: 'Διαφημιστικά Δώρα', en: 'Promotional Gifts' },
  { path: '/diafimistiki', el: 'Διαφημιστική & Digital Marketing', en: 'Advertising & Digital Marketing' },
  /*
   * `/katastrifi-web-efarmogon` was here. It now 308s to `/website-development`,
   * and a sitewide footer link pointing at a redirect wastes the crawl on every
   * page. The web-app intent it targeted is served by
   * `/website-development/web-apps`, linked from the header nav.
   */
  { path: '/sxediasmos-logotypou', el: 'Σχεδιασμός Λογοτύπου', en: 'Logo Design' },
  { path: '/etairiki-tautotita', el: 'Εταιρική Ταυτότητα', en: 'Corporate Identity' },
  { path: '/epaggelmatikes-kartes', el: 'Επαγγελματικές Κάρτες', en: 'Business Cards' },
  { path: '/flyers', el: 'Φυλλάδια', en: 'Flyers' },
  { path: '/banners-roll-up', el: 'Banner & Roll-up', en: 'Banners & Roll-ups' },
  { path: '/led-neon', el: 'Φωτεινές Επιγραφές LED & Neon', en: 'LED & Neon Signs' },
  { path: '/website-development/booking-systems', el: 'Συστήματα Κρατήσεων', en: 'Booking Systems' },
  { path: '/istoselides-xenodoxeion', el: 'Ιστοσελίδες Καταλυμάτων', en: 'Hotel Websites' },
  { path: '/guides', el: 'Οδηγοί', en: 'Guides' },
  { path: '/pricing', el: 'Πακέτα Υπηρεσιών', en: 'Service Packages' },
  /*
   * The invitations product, linked sitewide.
   *
   * This replaces the three wedding clone routes that used to sit here. Those
   * competed with the product for the same queries; this points at it instead.
   * A subdomain is a separate site to Google and starts with no authority of
   * its own — before this, links ran 14-to-almost-nothing in the wrong
   * direction, which is why its homepage sat "Crawled - currently not indexed".
   */
  {
    path: 'https://invitations.adinfinity.gr',
    el: 'Ψηφιακά Προσκλητήρια Γάμου',
    en: 'Digital Wedding Invitations',
    external: true,
  },
]

export const socialProfiles: SocialProfile[] = [
  {
    href: "https://www.facebook.com/1.adinfinity",
    label: "Visit adinfinity on Facebook",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/adinfinityads/",
    label: "Visit adinfinity on Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://www.linkedin.com/in/adinfinity-ads-bb0a398a/?originalSubdomain=gr",
    label: "Visit adinfinity on LinkedIn",
    Icon: LinkedinIcon,
  },
]
