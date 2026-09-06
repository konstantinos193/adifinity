'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'

import { useTranslations } from '@/components/useTranslations'
import { localizeProject, type Project } from '@/lib/projects'
import { serviceHref } from '@/lib/serviceProjects'

interface ProjectCaseStudyClientProps {
  project: Project
  nextProject: Project
}

/** Sections rendered only when the project actually carries that field. */
const SECTIONS = [
  { key: 'challenge', label: 'projects_page.challenge' },
  { key: 'solution', label: 'projects_page.solution' },
  { key: 'results', label: 'projects_page.results' },
] as const

export function ProjectCaseStudyClient({ project, nextProject }: ProjectCaseStudyClientProps) {
  const { t, locale } = useTranslations()

  const localized = localizeProject(project, locale)
  const localizedNext = localizeProject(nextProject, locale)

  // Website projects store a wide site screenshot; everything else stores a logo.
  const isScreenshot = project.category === 'Website'

  const facts = [
    { label: t('projects_page.business_type'), value: localized.businessType },
    { label: t('projects_page.location'), value: localized.location },
    { label: t('projects_page.year'), value: localized.year },
    { label: t('projects_page.duration'), value: localized.duration },
  ].filter((fact) => Boolean(fact.value))

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#07141C] to-[#0A1A24] py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#01FFFF] transition-colors"
          >
            <ArrowLeft size={16} />
            {t('projects_page.back_to_projects')}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full border border-cyan-500/30 text-[#01FFFF] bg-cyan-950/40 tracking-wider uppercase mb-4">
            {localized.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] mb-4">
            {localized.name}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">{localized.description}</p>

          {localized.liveUrl && (
            <a
              href={localized.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-2.5 px-6 rounded-full text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow"
            >
              {t('projects_page.visit_website')}
              <ExternalLink size={16} />
            </a>
          )}
        </motion.header>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`relative w-full mb-12 rounded-2xl overflow-hidden border border-cyan-900/30 ${
            isScreenshot ? 'aspect-[19/9] bg-[#050D12]' : 'aspect-[16/10] bg-white'
          }`}
        >
          <Image
            src={project.image}
            alt={localized.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className={isScreenshot ? 'object-cover object-top' : 'object-contain p-10'}
          />
        </motion.div>

        {/* Facts + services */}
        {(facts.length > 0 || (project.services?.length ?? 0) > 0) && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 p-6 md:p-8 rounded-2xl border border-cyan-900/30 bg-[#071218]/60"
          >
            <h2 className="text-lg font-bold text-[#01FFFF] mb-6">{t('projects_page.project_details')}</h2>

            {facts.length > 0 && (
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs uppercase tracking-wider text-gray-500 mb-1">{fact.label}</dt>
                    <dd className="text-white text-sm font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {(project.services?.length ?? 0) > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                  {t('projects_page.services')}
                </p>
                {/*
                  Each tag links to the page that sells that service.

                  These were plain <span>s, which made the portfolio a sink: the
                  service pages now send equity to the case studies, and nothing
                  came back. A reader who likes the work also gets an obvious
                  next step instead of a dead label.
                */}
                <div className="flex flex-wrap gap-2">
                  {project.services?.map((service) => {
                    const href = serviceHref(service)
                    const chip =
                      "text-xs px-3 py-1 rounded-full border border-cyan-500/20 text-gray-300 bg-cyan-950/30"

                    return href ? (
                      <Link
                        key={service}
                        href={href}
                        className={`${chip} transition-colors hover:border-[#01FFFF]/60 hover:text-white`}
                      >
                        {service}
                      </Link>
                    ) : (
                      <span key={service} className={chip}>
                        {service}
                      </span>
                    )
                  })}
                </div>
              </div>
            )}
          </motion.section>
        )}

        {/* Narrative sections */}
        <div className="space-y-10 mb-16">
          {SECTIONS.map(({ key, label }) => {
            const value = localized[key]
            if (!value) return null

            return (
              <motion.section
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-[#01FFFF] mb-3">{t(label)}</h2>
                <p className="text-gray-300 leading-relaxed">{value}</p>
              </motion.section>
            )
          })}
        </div>

        {/* Next project */}
        <Link
          href={`/projects/${nextProject.slug}`}
          className="flex items-center justify-between gap-4 p-5 rounded-2xl border border-cyan-900/30 bg-[#071218]/60 hover:border-cyan-500/40 transition-colors mb-16 group"
        >
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
              {t('projects_page.next_project')}
            </p>
            <p className="text-white font-medium truncate">{localizedNext.name}</p>
          </div>
          <ArrowRight
            size={20}
            className="text-[#01FFFF] shrink-0 group-hover:translate-x-1 transition-transform"
          />
        </Link>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl shadow-2xl border border-cyan-900/30"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#01FFFF]/10 to-transparent rounded-full blur-3xl" />
          <div className="relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t('projects_page.cta_title')}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">{t('projects_page.cta_description')}</p>
            <Link
              href="/contact#contact-form"
              className="inline-block bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20"
            >
              {t('projects_page.contact_us')}
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}