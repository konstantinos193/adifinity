"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useTranslations } from "@/components/useTranslations"
import type { Project } from "@/lib/projects"

/**
 * Proof for a service page: real projects, linked to their case studies.
 *
 * This is the missing half of the site's strongest asset. 32 case studies were
 * published with no route from any commercial page to any of them, so a visitor
 * who arrived on `/branding` from a search read a claim and had nowhere to go to
 * check it — and Google saw 32 URLs whose only inbound link was the portfolio
 * grid.
 *
 * Design
 * ------
 * Bento, not a three-card row. `pickProjects` scores and ranks these — the first
 * one is genuinely the strongest evidence for this particular service, usually
 * the one with a live site behind it. Three equal cards would throw that ranking
 * away and land on the most generic layout on the web. The lead project gets a
 * large image; the other two are compact rows beside it. Cards for different
 * things, rows for the same thing.
 *
 * The one thing on screen is the work itself, so the image carries the tile and
 * the chrome stays quiet. Depth is borders plus background steps only — no
 * shadows on top — matching the projects grid, and the cyan hairline and ambient
 * glow are the site's existing signature rather than a new visual language for
 * one section.
 *
 * Degrades honestly: one project renders as a single wide tile, two as lead plus
 * one, none renders nothing at all.
 *
 * No scroll-triggered entrance. The first build used framer-motion `whileInView`
 * and every tile stayed at `opacity: 0` in the browser — the observer never
 * fired, so the section rendered a heading above 640px of nothing. A section
 * whose entire job is proof cannot have its visibility depend on an
 * IntersectionObserver firing, and "everything fades up on scroll" is a generated
 * -UI reflex in any case. Motion lives in hover and focus, where it answers
 * something the user did, and is disabled under `prefers-reduced-motion`.
 */
export default function RelatedProjects({
  projects,
  headingEl = "Δείτε το σε πραγματικά έργα",
  headingEn = "See it on real work",
}: {
  projects: Project[]
  headingEl?: string
  headingEn?: string
}) {
  const { locale } = useTranslations()
  const isGreek = locale === "el"

  if (projects.length === 0) return null

  const [lead, ...rest] = projects

  const label = (project: Project) => ({
    name: isGreek ? project.name : project.nameEn ?? project.name,
    type: isGreek ? project.businessType : project.businessTypeEn ?? project.businessType,
    where: isGreek ? project.location : project.locationEn ?? project.location,
  })


  // One ring definition, so every tile is keyboard-visible the same way.
  const focus =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#01FFFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07141C]"

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#07141C] to-[#0A1A24] py-20 md:py-24"
      aria-labelledby="related-projects-heading"
    >
      {/* Ambient glow — the same treatment the projects grid uses. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#01FFFF]/5 blur-[110px]"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            {/* Eyebrow carries the count — a real number, not a decorative pill. */}
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#01FFFF]/70">
              {isGreek ? "Από το portfolio μας" : "From our portfolio"}
            </span>
            <h2
              id="related-projects-heading"
              className="mt-2 text-2xl font-bold text-white md:text-3xl"
            >
              {isGreek ? headingEl : headingEn}
            </h2>
          </div>

          <Link
            href="/projects"
            // min-h-11 = 44px. At `py-2` this was a 36px target, under the
            // minimum, and it is the one control here small enough to miss.
            className={`group inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-[#01FFFF] transition-colors hover:text-white ${focus}`}
          >
            {isGreek ? "Όλα τα έργα" : "All projects"}
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {/* ── Lead tile ────────────────────────────────────────────────── */}
          <article
            className={rest.length > 0 ? "lg:col-span-3" : "lg:col-span-5"}
          >
            <Link
              href={`/projects/${lead.slug}`}
              className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-cyan-900/30 bg-gradient-to-br from-[#0A1A24] to-[#0D2436] transition-colors duration-200 hover:border-[#01FFFF]/40 ${focus}`}
            >
              {/*
                Logo or screenshot — they need opposite treatments.

                27 of the 32 portfolio entries have no separate `logo` field,
                which per lib/projects.ts means `image` *is* the logo. Cropping a
                logo with `object-cover` cut "ENERGY HOUSE" in half and buried the
                dark Α.Π.Ο.Φ.Α linework against the dark tile. Logos are
                letterboxed on a faint plate that lifts dark artwork; the five
                real screenshots still fill the frame, which is what they want.
              */}
              <div
                className={`relative aspect-[16/9] overflow-hidden ${
                  isLogo(lead)
                    ? "bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent"
                    : "bg-[#07141C]"
                }`}
              >
                <Image
                  src={lead.image}
                  alt={buildAlt(lead, isGreek)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className={`transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-[1.04] motion-reduce:group-hover:scale-100 ${
                    isLogo(lead) ? "object-contain p-6 sm:p-10" : "object-cover"
                  }`}
                />
                {/* Scrim: the portfolio images are uncontrolled, so never trust
                    them to be dark enough behind the hairline. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A1A24] to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-white">{label(lead).name}</h3>
                <Meta {...label(lead)} />

                {lead.services && lead.services.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {lead.services.slice(0, 4).map((service) => (
                      <li
                        key={service}
                        className="rounded-md border border-cyan-500/20 bg-cyan-950/30 px-2 py-0.5 text-xs text-gray-300"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                )}

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#01FFFF]">
                  {isGreek ? "Δείτε το έργο" : "Read the case study"}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </Link>
          </article>

          {/* ── Supporting rows ──────────────────────────────────────────── */}
          {rest.length > 0 && (
            <div className="flex flex-col gap-4 lg:col-span-2">
              {rest.map((project, i) => {
                const { name, type, where } = label(project)

                return (
                  <article key={project.slug} className="flex-1">
                    {/*
                      The artwork sits in a fixed square, not a full-height
                      strip. When the column stretches to match the lead tile,
                      a strip turns into a tall empty band around a small logo;
                      a centred square just gains padding, which reads as
                      intentional.
                    */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className={`group flex h-full items-center gap-4 rounded-xl border border-cyan-900/30 bg-[#0A1A24] p-4 transition-colors duration-200 hover:border-[#01FFFF]/40 ${focus}`}
                    >
                      <div
                        className={`relative h-24 w-24 shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-28 ${
                          isLogo(project)
                            ? "bg-gradient-to-br from-white/[0.07] to-white/[0.02]"
                            : "bg-[#07141C]"
                        }`}
                      >
                        <Image
                          src={project.image}
                          alt={buildAlt(project, isGreek)}
                          fill
                          sizes="112px"
                          className={`transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-[1.06] motion-reduce:group-hover:scale-100 ${
                            isLogo(project) ? "object-contain p-2.5" : "object-cover"
                          }`}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium leading-snug text-white">{name}</h3>
                        <Meta type={type} where={where} name={name} compact />

                        {project.services && project.services.length > 0 && (
                          <ul className="mt-2.5 flex flex-wrap gap-1.5">
                            {project.services.slice(0, 2).map((service) => (
                              <li
                                key={service}
                                className="rounded border border-cyan-500/20 bg-cyan-950/30 px-1.5 py-0.5 text-[11px] text-gray-400"
                              >
                                {service}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 self-center text-gray-600 transition-colors duration-200 group-hover:text-[#01FFFF]"
                      />
                    </Link>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/**
 * Business type and place, separated only when both exist.
 *
 * Rendering "· Άρτα" for a project with no `businessType` is the kind of detail
 * that makes a section look generated.
 */
function Meta({
  type,
  where,
  compact = false,
}: {
  name: string
  type?: string
  where?: string
  compact?: boolean
}) {
  const parts = [type, where].filter(Boolean)
  if (parts.length === 0) return null

  return (
    <p className={`text-gray-400 ${compact ? "text-xs" : "mt-1 text-sm"}`}>
      {parts.join(" · ")}
    </p>
  )
}

/**
 * Whether `project.image` is a logo rather than a screenshot.
 *
 * `lib/projects.ts` defines `logo` as "set only when `image` is *not* a logo",
 * so the absence of `logo` is the signal. 27 of 32 entries fall this way.
 */
function isLogo(project: Project): boolean {
  return !project.logo
}

/**
 * Alt text that describes the image, not the target keyword.
 *
 * Google's image guidance asks for what the picture actually shows; repeating
 * "γραφιστική Άρτα" across every thumbnail would be stuffing.
 */
function buildAlt(project: Project, isGreek: boolean): string {
  const name = isGreek ? project.name : project.nameEn ?? project.name
  const type = isGreek ? project.businessType : project.businessTypeEn ?? project.businessType

  if (isGreek) return type ? `${name} — ${type}, έργο της adinfinity` : `${name} — έργο της adinfinity`
  return type ? `${name} — ${type}, project by adinfinity` : `${name} — project by adinfinity`
}
