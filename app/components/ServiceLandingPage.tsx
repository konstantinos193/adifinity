"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { useTranslations, asArray } from "@/components/useTranslations"

/**
 * Shared layout for the top-level service landing pages (/digital-marketing,
 * /branding). Everything is driven off a message-file namespace so a new
 * landing page is a JSON file plus an icon map, not another 600-line client.
 */

type Service = {
  key: string
  title: string
  description: string
  tags: string[]
}

type Stat = { num: string; label: string }
type ProcessStep = { step: string; title: string; desc: string }
type Feature = { title: string; description: string }
type Plan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
}
type FaqItem = { question: string; answer: string }

export function ServiceLandingPage({
  namespace,
  serviceIcons,
  featureIcons,
}: {
  /** Message-file section, e.g. `digital_marketing_page`. */
  namespace: string
  /** Keyed by the `key` field of each service in the message file. */
  serviceIcons: Record<string, React.ReactNode>
  /** Positional, one per entry in `features`. */
  featureIcons: React.ReactNode[]
}) {
  const { t } = useTranslations()
  const key = (name: string) => `${namespace}.${name}`

  const stats = asArray<Stat>(t(key('stats')))
  const services = asArray<Service>(t(key('services')))
  const process = asArray<ProcessStep>(t(key('process')))
  const features = asArray<Feature>(t(key('features')))
  const deliverables = asArray<string>(t(key('deliverables')))
  const plans = asArray<Plan>(t(key('pricing_plans')))
  const faq = asArray<FaqItem>(t(key('faq')))

  const heroTitle = String(t(key('hero_title')))
  const [firstWord, ...restWords] = heroTitle.split(' ')

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
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#01FFFF]/10 border border-[#01FFFF]/30 text-[#01FFFF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              {t(key('hero_badge'))}
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
              <span className="text-white">{firstWord}</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
                {restWords.join(' ')}
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t(key('description'))}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3.5 px-8 rounded-full text-base shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                  whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,255,255,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  {t(key('get_started'))} <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <a href="#services">
                <motion.button
                  className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3.5 px-8 rounded-full text-base hover:bg-[#01FFFF]/10 transition-colors"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {t(key('see_services'))}
                </motion.button>
              </a>
            </div>

            {stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-[#0A1A24]/80 border border-cyan-900/30 rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-[#01FFFF]">{stat.num}</div>
                    <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section id="services" className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24] scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-3">{t(key('our_services'))}</h2>
            <p className="text-gray-400 text-lg">{t(key('services_description'))}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.key}
                className="group bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all duration-200 hover:shadow-[0_0_20px_rgba(1,255,255,0.08)] h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#01FFFF]/20 transition-colors">
                  {serviceIcons[service.key]}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#01FFFF]/8 text-[#01FFFF]/80 px-3 py-1.5 rounded-full border border-[#01FFFF]/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-3">{t(key('process_title'))}</h2>
            <p className="text-gray-400 text-lg">{t(key('process_description'))}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#01FFFF]/20 to-transparent z-0" />
                )}
                <div className="bg-[#07141C] border border-cyan-900/30 rounded-2xl p-6 relative z-10 h-full">
                  <span className="text-5xl font-black text-[#01FFFF]/15 block mb-4 leading-none">{item.step}</span>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-3">{t(key('why_choose_us'))}</h2>
            <p className="text-gray-400 text-lg">{t(key('why_choose_description'))}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-[#0A1A24]/80 border border-cyan-900/20 rounded-2xl p-6 flex gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center flex-shrink-0">
                  {featureIcons[index]}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deliverables (optional) ──────────────────────────────────────── */}
      {deliverables.length > 0 && (
        <section className="py-20 bg-[#0A1A24]">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-black text-white mb-3">{t(key('deliverables_title'))}</h2>
              <p className="text-gray-400 text-lg">{t(key('deliverables_description'))}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
              {deliverables.map((item) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3 bg-[#07141C] border border-cyan-900/20 rounded-xl p-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                >
                  <Check className="w-5 h-5 text-[#01FFFF] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-3">{t(key('pricing_title'))}</h2>
            <p className="text-gray-400 text-lg max-w-3xl">{t(key('pricing_description'))}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col h-full border ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-[#0D2436] to-[#0A1A24] border-[#01FFFF]/40 shadow-[0_0_30px_rgba(1,255,255,0.08)]"
                    : "bg-[#0A1A24] border-cyan-900/30"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-white font-bold text-xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-black text-[#01FFFF]">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 text-sm">{plan.period}</span>}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-[#01FFFF] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact#contact-form" className="mt-auto">
                  <span
                    className={`block text-center font-bold py-3 px-6 rounded-full transition-all ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] hover:shadow-lg hover:shadow-cyan-500/20"
                        : "border border-[#01FFFF]/40 text-[#01FFFF] hover:bg-[#01FFFF]/10"
                    }`}
                  >
                    {t(key('get_started'))}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-8">{t(key('pricing_note'))}</p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#061218]/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#01FFFF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t(key('faq_title'))}
          </motion.h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="border border-cyan-900/40 rounded-xl p-6 bg-[#0A1A24]"
              >
                <h3 className="font-semibold text-white mb-2">{item.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
              </motion.div>
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
                {t(key('cta_title'))}
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                {t(key('cta_description'))}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3.5 px-8 rounded-full text-base shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                    whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,255,255,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t(key('cta_button'))} <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link href="/projects">
                  <motion.button
                    className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3.5 px-8 rounded-full text-base hover:bg-[#01FFFF]/10 transition-colors"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t(key('cta_secondary'))}
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
