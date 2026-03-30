"use client"

import { motion } from "framer-motion"
import { Cpu, Database, Users, Calendar, LayoutDashboard, Plug, ArrowRight, Code2 } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/components/useTranslations"

const AppTypeCard: React.FC<{
  icon: React.ReactNode
  title: string
  description: string
  examples: string[]
}> = ({ icon, title, description, examples }) => (
  <motion.div
    className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <div className="w-11 h-11 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#01FFFF]/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-white font-bold mb-2 group-hover:text-[#01FFFF] transition-colors">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
    <ul className="space-y-1">
      {examples.map((example) => (
        <li key={example} className="text-xs text-gray-500 flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-[#01FFFF]/40 flex-shrink-0" />
          {example}
        </li>
      ))}
    </ul>
  </motion.div>
)

const TechStackCard: React.FC<{
  label: string
  techs: string[]
}> = ({ label, techs }) => (
  <motion.div
    className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl p-5"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <span className="text-[#01FFFF]/60 text-xs uppercase tracking-widest mb-3 block">{label}</span>
    <div className="flex flex-wrap gap-2">
      {techs.map((tech) => (
        <span key={tech} className="text-xs bg-[#01FFFF]/8 text-[#01FFFF]/80 px-2.5 py-1 rounded-full border border-[#01FFFF]/15">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
)

export function WebAppsClient() {
  const { t } = useTranslations()

  const appTypes = (t('web_apps_page.app_types') as unknown) as Array<{
    title: string
    description: string
    examples: string[]
  }> || []

  const techStack = (t('web_apps_page.tech_stack') as unknown) as Array<{
    label: string
    techs: string[]
  }> || []

  const appTypeIcons = {
    "Admin Dashboards": <LayoutDashboard className="w-5 h-5 text-[#01FFFF]" />,
    "Booking Systems": <Calendar className="w-5 h-5 text-[#01FFFF]" />,
    "SaaS Platforms": <Users className="w-5 h-5 text-[#01FFFF]" />,
    "Data Platforms": <Database className="w-5 h-5 text-[#01FFFF]" />,
    "API & Integrations": <Plug className="w-5 h-5 text-[#01FFFF]" />,
    "Custom Tools": <Code2 className="w-5 h-5 text-[#01FFFF]" />
  }

  return (
      <main className="min-h-screen bg-[#07141C]">

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#01FFFF]/5 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#01A9FF]/5 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

                <span className="inline-block bg-[#01FFFF]/10 border border-[#01FFFF]/30 text-[#01FFFF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                  {t('web_apps_page.hero_badge')}
                </span>
                <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                  <span className="text-white">{String(t('web_apps_page.hero_title_line1'))}</span><br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
                    {String(t('web_apps_page.hero_title_line2'))}
                  </span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                  {t('web_apps_page.description')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact#contact-form">
                    <motion.button
                      className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3.5 px-8 rounded-full text-base shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                      whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,255,255,0.4)" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {t('web_apps_page.get_started')} <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <a href="tel:+302681303007">
                    <motion.button
                      className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3.5 px-8 rounded-full text-base hover:bg-[#01FFFF]/10 transition-colors"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {t('web_apps_page.phone')}
                    </motion.button>
                  </a>
                </div>
              </motion.div>

              {/* Right — tech stack breakdown */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="hidden lg:grid grid-cols-2 gap-4"
              >
                {Array.isArray(techStack) && techStack.map((layer, i) => (
                  <TechStackCard
                    key={layer.label}
                    label={layer.label}
                    techs={layer.techs}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* App Types */}
        <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-14"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-white mb-3">{t('web_apps_page.what_we_build')}</h2>
              <p className="text-gray-400 text-lg">{t('web_apps_page.what_we_build_desc')}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.isArray(appTypes) && appTypes.map((app, i) => {
                const Icon = appTypeIcons[app.title as keyof typeof appTypeIcons] || <Code2 className="w-5 h-5 text-[#01FFFF]" />
                return (
                  <AppTypeCard
                    key={app.title}
                    icon={Icon}
                    title={app.title}
                    description={app.description}
                    examples={app.examples}
                  />
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#07141C]">
          <div className="container mx-auto px-4">
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-[#01FFFF]/20 bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-10 md:p-16 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#01FFFF]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#01A9FF]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{t('web_apps_page.cta_title')}</h3>
                <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                  {t('web_apps_page.cta_description')}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact#contact-form">
                    <motion.button
                      className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-cyan-500/20 flex items-center gap-2 justify-center"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(1,255,255,0.5)" }}
                      whileTap={{ scale: 0.96 }}
                    >
                      {t('web_apps_page.book_discovery_call')} <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                  <a href="tel:+302681303007">
                    <motion.button
                      className="border-2 border-[#01FFFF]/60 text-[#01FFFF] font-bold py-4 px-10 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors w-full sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      {t('web_apps_page.phone')}
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
