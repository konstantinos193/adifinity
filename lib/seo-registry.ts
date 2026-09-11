/**
 * SEO governance registry (2026-09-11 audit, §42, §44).
 *
 * One record per hand-built indexable route: the single query the page is for,
 * the intent behind it, who owns the copy, and when the copy and prices were
 * last checked. It is the "one page, one job" rule written down, so two pages
 * cannot quietly end up targeting the same query, and the cannibalisation
 * audit (§31) is a diff of this table rather than a re-crawl.
 *
 * `__tests__/seo-registry.test.ts` asserts every route in the sitemap has an
 * entry here (guides, sub-services and case studies are derived) and that no
 * two entries share a primary keyword.
 */
export type Intent = 'brand' | 'local-commercial' | 'commercial' | 'informational' | 'transactional' | 'trust' | 'legal'

export interface SeoRecord {
  path: string
  primaryKeyword: string
  secondaryKeywords?: string[]
  intent: Intent
  /** Who signs off copy changes. */
  owner: 'manos' | 'konstantinos'
  /**
   * ISO date the copy was last read end to end. There is no separate
   * price-verification date: the site publishes no prices (every service is
   * quoted per project), so there is nothing to check against invoices.
   */
  lastReviewed: string
}

const REVIEWED = '2026-09-11'

export const SEO_REGISTRY: SeoRecord[] = [
  { path: '/', primaryKeyword: 'διαφημιστική εταιρεία άρτα', secondaryKeywords: ['διαφημιστικό γραφείο', 'διαφημιστική άρτα'], intent: 'brand', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/diafimistiki-eteria', primaryKeyword: 'διαφημιστική εταιρεία στην άρτα υπηρεσίες', secondaryKeywords: ['διαφημιστική ήπειρος'], intent: 'local-commercial', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/diafimistiki', primaryKeyword: 'τι κάνει μια διαφημιστική εταιρεία', intent: 'informational', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/services', primaryKeyword: 'υπηρεσίες adinfinity', intent: 'commercial', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/grafistas-arta', primaryKeyword: 'γραφίστας άρτα', intent: 'local-commercial', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/graphic-design', primaryKeyword: 'graphic design', secondaryKeywords: ['γραφιστική άρτα'], intent: 'commercial', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/branding', primaryKeyword: 'branding άρτα', secondaryKeywords: ['σχεδιασμός λογοτύπου άρτα'], intent: 'commercial', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/prints', primaryKeyword: 'εκτυπώσεις άρτα', secondaryKeywords: ['τυπογραφείο άρτα'], intent: 'local-commercial', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/ektypwseis-arta', primaryKeyword: 'ψηφιακές εκτυπώσεις μεγάλου μεγέθους άρτα', intent: 'local-commercial', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/epigrafes-arta', primaryKeyword: 'επιγραφές άρτα', secondaryKeywords: ['επιγραφές καταστημάτων', 'διαφημιστική πινακίδα'], intent: 'local-commercial', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/website-development', primaryKeyword: 'κατασκευή ιστοσελίδων άρτα', secondaryKeywords: ['κατασκευή web εφαρμογών'], intent: 'local-commercial', owner: 'konstantinos', lastReviewed: REVIEWED },
  { path: '/website-development/custom-web-apps', primaryKeyword: 'custom εταιρικές ιστοσελίδες', intent: 'commercial', owner: 'konstantinos', lastReviewed: REVIEWED },
  { path: '/website-development/e-commerce', primaryKeyword: 'κατασκευή e-shop', intent: 'commercial', owner: 'konstantinos', lastReviewed: REVIEWED },
  { path: '/website-development/landing-pages', primaryKeyword: 'landing pages', intent: 'commercial', owner: 'konstantinos', lastReviewed: REVIEWED },
  { path: '/website-development/technical-seo', primaryKeyword: 'τεχνικό seo', intent: 'commercial', owner: 'konstantinos', lastReviewed: REVIEWED },
  { path: '/website-development/web-apps', primaryKeyword: 'web εφαρμογές', intent: 'commercial', owner: 'konstantinos', lastReviewed: REVIEWED },
  { path: '/website-development/maintenance', primaryKeyword: 'συντήρηση ιστοσελίδας', intent: 'commercial', owner: 'konstantinos', lastReviewed: REVIEWED },
  { path: '/digital-marketing', primaryKeyword: 'digital marketing άρτα', intent: 'local-commercial', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/flyer-distribution', primaryKeyword: 'διανομή φυλλαδίων άρτα', secondaryKeywords: ['διανομή εντύπων'], intent: 'local-commercial', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/diafimistika-dora', primaryKeyword: 'διαφημιστικά δώρα', secondaryKeywords: ['διαφημιστικά είδη'], intent: 'commercial', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/market-research', primaryKeyword: 'έρευνα αγοράς', secondaryKeywords: ['μελέτη ανάλυσης ανταγωνισμού'], intent: 'commercial', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/invitations', primaryKeyword: 'ψηφιακό προσκλητήριο γάμου', intent: 'commercial', owner: 'konstantinos', lastReviewed: REVIEWED },
  { path: '/pricing', primaryKeyword: 'πακέτα υπηρεσιών adinfinity', secondaryKeywords: ['τι περιλαμβάνει πακέτο ιστοσελίδας'], intent: 'transactional', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/guides', primaryKeyword: 'οδηγοί κόστους διαφήμισης', intent: 'informational', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/graphic-design-guide', primaryKeyword: 'οδηγός γραφιστικής', intent: 'informational', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/projects', primaryKeyword: 'έργα adinfinity', intent: 'trust', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/about', primaryKeyword: 'σχετικά με adinfinity', intent: 'trust', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/contact', primaryKeyword: 'επικοινωνία adinfinity', intent: 'transactional', owner: 'manos', lastReviewed: REVIEWED },
  { path: '/privacy-policy', primaryKeyword: 'πολιτική απορρήτου adinfinity', intent: 'legal', owner: 'konstantinos', lastReviewed: '2026-08-25' },
  { path: '/cookie-policy', primaryKeyword: 'πολιτική cookies adinfinity', intent: 'legal', owner: 'konstantinos', lastReviewed: '2026-08-25' },
  { path: '/accessibility', primaryKeyword: 'δήλωση προσβασιμότητας adinfinity', intent: 'legal', owner: 'konstantinos', lastReviewed: '2026-08-25' },
  { path: '/dsa-compliance', primaryKeyword: 'συμμόρφωση dsa adinfinity', intent: 'legal', owner: 'konstantinos', lastReviewed: REVIEWED },
  { path: '/report-content', primaryKeyword: 'αναφορά περιεχομένου adinfinity', intent: 'legal', owner: 'konstantinos', lastReviewed: '2026-08-25' },
]

export const registryFor = (path: string) => SEO_REGISTRY.find((record) => record.path === path)
