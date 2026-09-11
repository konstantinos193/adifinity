/**
 * Which case studies prove which service.
 *
 * Why this exists
 * ---------------
 * The site publishes 32 case studies at `/projects/[slug]` and, before this,
 * not one commercial page linked to a single one of them. Every money page
 * asserted competence and then offered nothing to check it against, while the
 * proof sat one directory away with no path leading to it.
 *
 * That breaks the loop the whole portfolio exists to serve:
 *
 *   query → service page → a real project → screenshots and outcome → contact
 *
 * It also wastes the case studies as an internal-linking asset. 32 URLs whose
 * only inbound link is the `/projects` grid are 32 URLs Google has little reason
 * to treat as important, which is consistent with none of them ever recording an
 * impression.
 *
 * The mapping keys off the `services` tags already present on each project in
 * `app/data/projects.json`, so adding a project to the portfolio automatically
 * surfaces it on the right service pages — no second list to maintain.
 */
import { projects, type Project } from '@/lib/projects'

/**
 * Service-tag vocabulary per route, most specific tag first.
 *
 * These strings are the values that actually appear in `projects.json` — not an
 * idealised taxonomy. `Logo Design` and `Branding` carry 27 projects each and so
 * would swamp any page that accepted them loosely; routes that legitimately want
 * them list them last, and `pickProjects` prefers earlier tags.
 */
const SERVICE_TAGS: Record<string, string[]> = {
  '/graphic-design': [
    'Menu Design',
    'Stationery Design',
    'Print Design',
    'Social Media Graphics',
    'Visual Identity',
    'Logo Design',
    'Branding',
  ],
  '/grafistas-arta': [
    'Logo Design',
    'Corporate Identity',
    'Visual Identity',
    'Stationery Design',
    'Branding',
  ],
  '/branding': ['Corporate Identity', 'Visual Identity', 'Branding', 'Logo Design'],
  '/prints': [
    'Print Design',
    'Packaging Design',
    'Stationery Design',
    'Menu Design',
    'Event Materials',
  ],
  '/ektypwseis-arta': ['Packaging Design', 'Print Design', 'Event Materials', 'Menu Design'],
  '/epigrafes-arta': ['Interior Signage', 'Vehicle Graphics'],
  '/website-development': [
    'Web Development',
    'Booking System',
    'Payments Integration',
    'Content Management',
    'SEO',
  ],
  '/website-development/e-commerce': ['Payments Integration', 'Web Development'],
  '/website-development/web-apps': ['Booking System', 'Content Management', 'Web Development'],
  '/website-development/custom-web-apps': ['Web Development', 'Content Management'],
  '/website-development/technical-seo': ['SEO', 'Web Development'],
  '/digital-marketing': ['Digital Marketing', 'SEO', 'Social Media Graphics'],
  '/diafimistika-dora': ['Uniform Design', 'Stationery Design', 'Event Materials'],
  '/flyer-distribution': ['Print Design', 'Event Materials'],
  '/diafimistiki-eteria': ['Corporate Identity', 'Branding', 'Web Development', 'Print Design'],
}

/**
 * Case studies that genuinely demonstrate a route's service, best match first.
 *
 * Scored rather than filtered: a project tagged `Menu Design` outranks one
 * tagged only `Branding` on `/graphic-design`, because the specific tag is what
 * makes it evidence for *that* page. Projects with a live URL get a small nudge
 * — a reachable site is stronger proof than a logo image.
 *
 * Returns `[]` for unmapped routes, and the component renders nothing, rather
 * than padding the section with whatever happened to be first in the file.
 *
 * Four by default — one lead tile and three supporting rows. Three left the
 * supporting column visibly short against the lead tile, and four is also more
 * proof, which is the point of the section. Every mapped route can supply at
 * least three; `/flyer-distribution` has exactly that, and the component lays
 * out whatever it is given.
 */
export function pickProjects(path: string, limit = 4): Project[] {
  const tags = SERVICE_TAGS[path]
  if (!tags) return []

  return projects
    .map((project) => {
      const owned = project.services ?? []
      // Earlier tags score higher; `tags.length - i` makes the first tag worth most.
      const score = owned.reduce((total, tag) => {
        const i = tags.indexOf(tag)
        return i === -1 ? total : total + (tags.length - i)
      }, 0)
      return { project, score: score === 0 ? 0 : score + (project.liveUrl ? 1 : 0) }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.project)
}

/** Routes that have a proof section, for tests and audits. */
export const MAPPED_SERVICE_ROUTES = Object.keys(SERVICE_TAGS)

/**
 * The page that sells a given service tag — the return leg of the loop.
 *
 * A case study lists the services it used ("Booking System", "Packaging
 * Design"); those were plain text, so the portfolio absorbed link equity from
 * the service pages and passed none back. Turning each tag into a link closes
 * the circuit and gives a reader who liked the work somewhere to go.
 *
 * Explicit rather than derived from {@link SERVICE_TAGS}: several tags appear
 * under more than one route, and a tag should resolve to the single page that
 * best answers "I want this", not to whichever route happens to be first.
 */
const TAG_DESTINATION: Record<string, string> = {
  'Logo Design': '/graphic-design',
  Branding: '/branding',
  'Corporate Identity': '/branding',
  'Visual Identity': '/branding',
  'Menu Design': '/graphic-design',
  'Social Media Graphics': '/graphic-design',
  'Stationery Design': '/prints',
  'Print Design': '/prints',
  'Packaging Design': '/ektypwseis-arta',
  'Event Materials': '/prints',
  'Uniform Design': '/diafimistika-dora',
  'Interior Signage': '/epigrafes-arta',
  'Vehicle Graphics': '/epigrafes-arta',
  'Web Development': '/website-development',
  'Booking System': '/website-development/booking-systems',
  'Content Management': '/website-development/custom-web-apps',
  'Payments Integration': '/website-development/e-commerce',
  SEO: '/website-development/technical-seo',
  'Digital Marketing': '/digital-marketing',
}

/** Where a case study's service tag should link, or `null` if nowhere sensible. */
export function serviceHref(tag: string): string | null {
  return TAG_DESTINATION[tag] ?? null
}
