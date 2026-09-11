/**
 * English names for every route that appears in a breadcrumb trail.
 *
 * Why this exists
 * ---------------
 * Every layout passes a Greek `Crumb[]` to both `pageGraph()` (the
 * BreadcrumbList JSON-LD, Greek by design — the server always renders Greek,
 * see `lib/metadata.ts`) and to the visible `<Breadcrumbs>`. The visible trail
 * used to be a server component, so it stayed Greek after a visitor switched
 * the site to English: the one strip of text on every page that never
 * translated.
 *
 * Rather than adding an `nameEn` to forty trails, the visible component looks
 * the English name up here by path. A crumb whose path is missing from this
 * table falls back to its Greek name, so a new route degrades to the old
 * behaviour rather than to a blank crumb — but add the route here when you add
 * the page.
 */
export const ROUTE_NAMES_EN: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/contact': 'Contact',
  '/services': 'Services',
  '/projects': 'Projects',
  '/pricing': 'Service Packages',
  '/guides': 'Guides',
  '/dsa-compliance': 'DSA Compliance',
  '/report-content': 'Report Content',
  '/accessibility': 'Accessibility',
  '/privacy-policy': 'Privacy Policy',
  '/cookie-policy': 'Cookie Policy',

  // Services
  '/graphic-design': 'Graphic Design',
  '/graphic-design-guide': 'Graphic Design Guide',
  '/branding': 'Branding',
  '/prints': 'Printing Arta',
  '/ektypwseis-arta': 'Large Format Digital Printing',
  '/grafistas-arta': 'Graphic Designer Arta',
  '/epigrafes-arta': 'Signage Arta',
  '/led-neon': 'LED & Neon Lit Signs',
  '/flyer-distribution': 'Flyer Distribution',
  '/flyers': 'Flyers',
  '/banners-roll-up': 'Banners & Roll-ups',
  '/epaggelmatikes-kartes': 'Business Cards',
  '/etairiki-tautotita': 'Corporate Identity',
  '/sxediasmos-logotypou': 'Logo Design',
  '/market-research': 'Market Research',
  '/digital-marketing': 'Digital Marketing',
  '/diafimistiki': 'What an Advertising Agency Does',
  '/diafimistiki-eteria': 'Advertising Agency Arta',
  '/diafimistika-dora': 'Promotional Gifts',
  '/invitations': 'Digital Invitations',
  '/istoselides-xenodoxeion': 'Hotel & Accommodation Websites',

  // Website development cluster
  '/website-development': 'Website Development',
  '/website-development/custom-web-apps': 'Custom Business Websites',
  '/website-development/e-commerce': 'E-shop',
  '/website-development/landing-pages': 'Landing Pages',
  '/website-development/maintenance': 'Website Maintenance',
  '/website-development/technical-seo': 'Technical SEO',
  '/website-development/web-apps': 'Web Applications',
  '/website-development/booking-systems': 'Booking Systems',

  // Guides
  '/guides/odigos-diafimisis-mikris-epixeirisis-arta': 'Advertising a Small Business in Arta',
  '/guides/poso-kostizei-epigrafi': 'How Much Does a Sign Cost',
  '/guides/poso-kostizei-istoselida': 'How Much Does a Website Cost',
  '/guides/poso-kostizei-logo': 'How Much Does a Logo Cost',
  '/guides/wordpress-i-nextjs': 'WordPress or Next.js',
}

/**
 * The name a crumb should display in `locale`.
 *
 * Greek is the crumb's own `name` (what the JSON-LD carries); English comes
 * from {@link ROUTE_NAMES_EN} by path, or `nameEn` when a trail sets one
 * explicitly (e.g. a project case study, whose name is data, not a route).
 */
export function routeName(crumb: { name: string; path?: string; nameEn?: string }, locale: string): string {
  if (locale === 'el') return crumb.name
  return crumb.nameEn ?? (crumb.path ? ROUTE_NAMES_EN[crumb.path] : undefined) ?? crumb.name
}
