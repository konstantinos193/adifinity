import type { ContentPage, L } from './types'

import { page as posoKostizeiLogo } from './guides/poso-kostizei-logo'
import { page as posoKostizeiIstoselida } from './guides/poso-kostizei-istoselida'
import { page as wordpressINextjs } from './guides/wordpress-i-nextjs'
import { page as posoKostizeiEpigrafi } from './guides/poso-kostizei-epigrafi'
import { page as odigosDiafimisisArta } from './guides/odigos-diafimisis-arta'

import { page as sxediasmosLogotypou } from './services/sxediasmos-logotypou'
import { page as etairikiTautotita } from './services/etairiki-tautotita'
import { page as epaggelmatikesKartes } from './services/epaggelmatikes-kartes'
import { page as flyers } from './services/flyers'
import { page as bannersRollUp } from './services/banners-roll-up'
import { page as ledNeon } from './services/led-neon'
import { page as bookingSystems } from './services/booking-systems'
import { page as istoselidesXenodoxeion } from './services/istoselides-xenodoxeion'

/** Buying and decision guides, in the order the hub lists them. */
export const GUIDES: ContentPage[] = [
  posoKostizeiIstoselida,
  posoKostizeiLogo,
  posoKostizeiEpigrafi,
  wordpressINextjs,
  odigosDiafimisisArta,
]

/** Sub-service and vertical pages. */
export const SERVICE_PAGES: ContentPage[] = [
  sxediasmosLogotypou,
  etairikiTautotita,
  epaggelmatikesKartes,
  flyers,
  bannersRollUp,
  ledNeon,
  bookingSystems,
  istoselidesXenodoxeion,
]

export const CONTENT_PAGES: ContentPage[] = [...GUIDES, ...SERVICE_PAGES]

/**
 * Guides that predate the content system and keep their own routes and
 * components. Listed on the hub alongside the new ones.
 */
export interface LegacyGuide {
  path: string
  title: L
  summary: L
}

export const LEGACY_GUIDES: LegacyGuide[] = [
  {
    path: '/graphic-design-guide',
    title: { el: 'Οδηγός γραφιστικής', en: 'Graphic design guide' },
    summary: {
      el: 'Τι περιλαμβάνει ένα λογότυπο, πόσο διαρκεί ο σχεδιασμός και τι να ζητήσετε πριν αναθέσετε τη δουλειά σε γραφίστα.',
      en: 'What a logo includes, how long design takes, and what to ask before you commission a designer.',
    },
  },
  {
    path: '/diafimistiki',
    title: { el: 'Τι κάνει μια διαφημιστική εταιρεία', en: 'What an advertising agency does' },
    summary: {
      el: 'Τι αναλαμβάνει μια διαφημιστική, πώς κοστολογείται κάθε υπηρεσία και τι να ρωτήσετε πριν υπογράψετε.',
      en: 'What an agency handles, how each service is priced, and what to ask before you sign.',
    },
  },
]

export const contentByPath = (path: string) => CONTENT_PAGES.find((page) => page.path === path)
