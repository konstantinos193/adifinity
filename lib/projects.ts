/**
 * Single source of truth for reading `app/data/projects.json`.
 *
 * The JSON is imported by the projects grid, the case-study routes, the
 * sitemap and the partner carousel. Each of those used to re-derive the shape
 * on its own, which is how the carousel ended up rendering site screenshots as
 * if they were client logos. Everything goes through here now.
 */
import projectData from '@/app/data/projects.json'

export type Project = {
  id: string
  /** Stable URL segment for `/projects/[slug]`. Generated from `nameEn`. */
  slug: string
  name: string
  nameEn?: string
  category: string
  categoryEn?: string
  /** The portfolio visual: a logo for branding work, a screenshot for websites. */
  image: string
  /** Set only when `image` is *not* a logo. See {@link carouselProjects}. */
  logo?: string
  liveUrl?: string
  description: string
  descriptionEn?: string
  challenge?: string
  challengeEn?: string
  solution?: string
  solutionEn?: string
  results?: string
  resultsEn?: string
  businessType?: string
  businessTypeEn?: string
  location?: string
  locationEn?: string
  services?: string[]
  year?: string
  duration?: string
  durationEn?: string
}

export const projects = projectData.projects as Project[]

/** Categories whose `image` is a site screenshot rather than a logo. */
const SCREENSHOT_CATEGORIES = new Set(['Website'])

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/**
 * Applies the English fields when the client locale is `en`.
 *
 * Returns the full project — the previous inline version in `ProjectsClient`
 * returned only the six fields it spread, which is why the modal lost `id`,
 * `image` and `liveUrl` and TypeScript complained at every call site.
 */
export function localizeProject(project: Project, locale: string): Project {
  if (locale !== 'en') return project

  return {
    ...project,
    name: project.nameEn || project.name,
    category: project.categoryEn || project.category,
    description: project.descriptionEn || project.description,
    challenge: project.challengeEn || project.challenge,
    solution: project.solutionEn || project.solution,
    results: project.resultsEn || project.results,
    businessType: project.businessTypeEn || project.businessType,
    location: project.locationEn || project.location,
    duration: project.durationEn || project.duration,
  }
}

/**
 * The "Our Partners" carousel is a wall of client logos, so a project only
 * belongs there if the asset it would show actually *is* a logo: either an
 * explicit `logo`, or an `image` from a category that stores logos.
 *
 * A website project with no `logo` is skipped rather than shown as a 1900px
 * screenshot squeezed into a 400px logo frame.
 */
export const carouselProjects: Array<Project & { logoSrc: string }> = projects
  .map((project) => {
    const logoSrc = project.logo ?? (SCREENSHOT_CATEGORIES.has(project.category) ? null : project.image)
    return logoSrc ? { ...project, logoSrc } : null
  })
  .filter((entry): entry is Project & { logoSrc: string } => entry !== null)
