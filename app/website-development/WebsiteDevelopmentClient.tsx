"use client"

import { motion } from "framer-motion"
import {
  Code2, ShoppingCart, Zap, Shield, BarChart3, Headphones,
  ArrowRight, ExternalLink, Cpu, GitBranch, Layers, X
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "@/components/useTranslations"
import { useState } from "react"

const CodeSnippet: React.FC = () => {
  const { t } = useTranslations()
  
  const codeSnippet = `// adinfinity stack
const project = {
  framework: "Next.js 16",
  language:  "TypeScript",
  styling:   "Tailwind CSS",
  database:  "PostgreSQL",
  deploy:    "Vercel / VPS",
  approach:  "100% custom — no templates"
}`

  return (
    <div className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl overflow-hidden shadow-2xl">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0D2030] border-b border-cyan-900/30">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-gray-500 text-xs font-mono">stack.config.ts</span>
      </div>
      <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
        {codeSnippet.split("\n").map((line, i) => {
          const key = line.includes(":") ? line.split(":")[0].trim() : null
          const val = line.includes(":") ? line.split(":").slice(1).join(":") : null
          if (key && val) {
            return (
              <div key={i}>
                <span className="text-[#01A9FF]">{key}</span>
                <span className="text-gray-500">:</span>
                <span className="text-[#01FFFF]">{val}</span>
              </div>
            )
          }
          return <div key={i} className="text-gray-500">{line}</div>
        })}
      </pre>
    </div>
  )
}

const ServiceCard: React.FC<{
  icon: React.ReactNode
  title: string
  description: string
  tags: string[]
  href?: string
}> = ({ icon, title, description, tags, href }) => {
  const card = (
    <motion.div
      className="group bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all duration-200 hover:shadow-[0_0_20px_rgba(1,255,255,0.08)] h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-11 h-11 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#01FFFF]/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#01FFFF] transition-colors flex items-center gap-2">
        {title}
        {href && <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs bg-[#01FFFF]/8 text-[#01FFFF]/80 px-2.5 py-1 rounded-full border border-[#01FFFF]/15">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )

  return href ? <Link href={href}>{card}</Link> : <div>{card}</div>
}

const PortfolioModal: React.FC<{
  project: {
    name: string
    category: string
    description: string
    image: string
    url: string
    tags: string[]
    client?: string
    duration?: string
    team?: string
    technologies?: string[]
    features?: string[]
    results?: string[]
    challenge?: string
  }
  isOpen: boolean
  onClose: () => void
}> = ({ project, isOpen, onClose }) => {
  const { t } = useTranslations()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
         onClick={onClose}>
      <motion.div
        className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-80 overflow-hidden bg-[#0D2030]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A24] via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#07141C]/80 border border-cyan-900/40 text-[#01FFFF] p-2 rounded-full hover:bg-[#07141C] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="text-[#01FFFF]/70 text-xs uppercase tracking-widest">{project.category}</span>
          <h2 className="text-4xl font-black text-white mt-2 mb-4">{project.name}</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">{project.description}</p>
          
          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#07141C]/50 border border-cyan-900/20 rounded-xl p-4">
              <h4 className="text-[#01FFFF] font-semibold mb-2">{t('website_development_page.modal.client')}</h4>
              <p className="text-white">{project.client || 'N/A'}</p>
            </div>
            <div className="bg-[#07141C]/50 border border-cyan-900/20 rounded-xl p-4">
              <h4 className="text-[#01FFFF] font-semibold mb-2">{t('website_development_page.modal.duration')}</h4>
              <p className="text-white">{project.duration || 'N/A'}</p>
            </div>
            <div className="bg-[#07141C]/50 border border-cyan-900/20 rounded-xl p-4">
              <h4 className="text-[#01FFFF] font-semibold mb-2">{t('website_development_page.modal.team_size')}</h4>
              <p className="text-white">{project.team || 'N/A'}</p>
            </div>
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-white mb-4">{t('website_development_page.modal.technologies_used')}</h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-[#01FFFF]/10 text-[#01FFFF] border border-[#01FFFF]/30 px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-white mb-4">{t('website_development_page.modal.key_features')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#01FFFF] rounded-full flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-white mb-4">{t('website_development_page.modal.results_achieved')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenge */}
          {project.challenge && (
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-white mb-4">{t('website_development_page.modal.the_challenge')}</h4>
              <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
            </div>
          )}

          {/* Original Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs bg-[#01FFFF]/8 text-[#01FFFF]/80 px-3 py-1.5 rounded-full border border-[#01FFFF]/15">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-4 px-8 rounded-full text-center flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all text-lg"
            >
              {t('website_development_page.modal.visit_live_website')} <ExternalLink className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="border-2 border-[#01FFFF]/60 text-[#01FFFF] font-bold py-4 px-8 rounded-full hover:bg-[#01FFFF]/10 transition-colors text-lg"
            >
              {t('website_development_page.modal.close')}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const PortfolioCard: React.FC<{
  name: string
  category: string
  description: string
  image: string
  url: string
  tags: string[]
  client?: string
  duration?: string
  team?: string
  technologies?: string[]
  features?: string[]
  results?: string[]
  challenge?: string
}> = ({ name, category, description, image, url, tags, client, duration, team, technologies, features, results, challenge }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        className="group bg-[#0A1A24] border border-cyan-900/30 rounded-2xl overflow-hidden hover:border-[#01FFFF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(1,255,255,0.1)] block cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-[#0D2030]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A24] via-transparent to-transparent" />
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="bg-[#01FFFF] text-[#07141C] p-1.5 rounded-full flex items-center justify-center">
              <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-[#01FFFF]/70 text-xs uppercase tracking-widest">{category}</span>
          <h3 className="text-white font-bold text-lg mt-1 mb-2 group-hover:text-[#01FFFF] transition-colors">
            {name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="text-xs bg-[#01FFFF]/8 text-[#01FFFF]/70 px-2.5 py-1 rounded-full border border-[#01FFFF]/15">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <PortfolioModal
        project={{
          name,
          category,
          description,
          image,
          url,
          tags,
          client,
          duration,
          team,
          technologies,
          features,
          results,
          challenge
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

const ProcessStep: React.FC<{
  step: string
  title: string
  desc: string
  isLast: boolean
}> = ({ step, title, desc, isLast }) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    {/* Connector line */}
    {!isLast && (
      <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#01FFFF]/20 to-transparent z-0" />
    )}
    <div className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 relative z-10">
      <span className="text-5xl font-black text-[#01FFFF]/15 block mb-4 leading-none">{step}</span>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
)

const WhyUsCard: React.FC<{
  icon: React.ReactNode
  title: string
  text: string
}> = ({ icon, title, text }) => (
  <motion.div
    className="bg-[#0A1A24]/80 border border-cyan-900/20 rounded-2xl p-6 flex gap-4"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="w-10 h-10 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
    </div>
  </motion.div>
)

export function WebsiteDevelopmentClient() {
  const { t } = useTranslations()

  const services = t('website_development_page.services') as Record<string, any>
  const portfolio = t('website_development_page.portfolio_items') as Array<any>
  const process = t('website_development_page.process') as Array<any>
  const techStack = t('website_development_page.tech_stack') as string[]
  const stats = t('website_development_page.stats') as Array<{num: string, label: string}>
  const features = t('website_development_page.features') as Array<{title: string, description: string}>

  const serviceIcons = {
    custom_web_apps: <Code2 className="w-5 h-5 text-[#01FFFF]" />,
    "e-commerce": <ShoppingCart className="w-5 h-5 text-[#01FFFF]" />,
    landing_pages: <Zap className="w-5 h-5 text-[#01FFFF]" />,
    web_applications: <Cpu className="w-5 h-5 text-[#01FFFF]" />,
    technical_seo: <BarChart3 className="w-5 h-5 text-[#01FFFF]" />,
    maintenance: <GitBranch className="w-5 h-5 text-[#01FFFF]" />
  }

  const serviceUrls = {
    custom_web_apps: '/website-development/custom-web-apps',
    "e-commerce": '/website-development/e-commerce',
    landing_pages: '/website-development/landing-pages',
    web_applications: '/website-development/web-apps',
    technical_seo: '/website-development/technical-seo',
    maintenance: '/website-development/maintenance'
  }

  const featureIcons = [
    <Shield className="w-5 h-5 text-[#01FFFF]" />,
    <Zap className="w-5 h-5 text-[#01FFFF]" />,
    <Headphones className="w-5 h-5 text-[#01FFFF]" />
  ]

  return (
    <main className="min-h-screen bg-[#07141C]">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#01FFFF]/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#01A9FF]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-[#01FFFF]/10 border border-[#01FFFF]/30 text-[#01FFFF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                {t('website_development_page.hero_badge')}
              </span>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                <span className="text-white">{String(t('website_development_page.hero_title')).split(' ')[0]}</span><br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
                  {String(t('website_development_page.hero_title')).split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                {t('website_development_page.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3.5 px-8 rounded-full text-base shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                    whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,255,255,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t('website_development_page.get_started')} <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <a href="#portfolio">
                  <motion.button
                    className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3.5 px-8 rounded-full text-base hover:bg-[#01FFFF]/10 transition-colors"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t('website_development_page.see_portfolio')}
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* Right — Code block */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <CodeSnippet />

              {/* Stats row below code block */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-[#0A1A24]/80 border border-cyan-900/30 rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-[#01FFFF]">{stat.num}</div>
                    <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-3">{t('website_development_page.our_services')}</h2>
            <p className="text-gray-400 text-lg">{t('website_development_page.services_description')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(services).map(([key, service], i) => (
              <ServiceCard
                key={key}
                icon={serviceIcons[key as keyof typeof serviceIcons]}
                title={service.title}
                description={service.description}
                tags={service.tags}
                href={serviceUrls[key as keyof typeof serviceUrls]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────────────── */}
      <section className="py-12 border-y border-cyan-900/20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="text-gray-500 text-sm uppercase tracking-widest whitespace-nowrap flex-shrink-0 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Stack
            </span>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="bg-[#0A1A24] border border-cyan-900/30 text-gray-300 text-sm px-4 py-1.5 rounded-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio ────────────────────────────────────────────────────── */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-3">{t('website_development_page.portfolio_title')}</h2>
            <p className="text-gray-400 text-lg">{t('website_development_page.portfolio_description')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <PortfolioCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-3">{t('website_development_page.process_title')}</h2>
            <p className="text-gray-400 text-lg">{t('website_development_page.process_description')}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <ProcessStep
                key={step.step}
                step={step.step}
                title={step.title}
                desc={step.desc}
                isLast={i === process.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {features.map((item, i) => (
              <WhyUsCard
                key={i}
                icon={featureIcons[i]}
                title={item.title}
                text={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-[#01FFFF]/20 bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-10 md:p-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#01FFFF]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#01A9FF]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                {t('website_development_page.cta.title')}
              </h3>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                {t('website_development_page.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-cyan-500/20 flex items-center gap-2 justify-center"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(1,255,255,0.5)" }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {t('website_development_page.request_quote')} <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <a href="tel:+302681303007">
                  <motion.button
                    className="border-2 border-[#01FFFF]/60 text-[#01FFFF] font-bold py-4 px-10 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    2681 303007
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
