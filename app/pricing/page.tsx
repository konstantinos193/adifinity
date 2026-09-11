"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Star, Globe, Palette, Printer, MapPin, BarChart2, Megaphone } from "lucide-react"
import Link from "next/link"
import { QUOTE_TURNAROUND_HOURS } from "@/lib/company"
import { track } from "@/lib/analytics"
import { useTranslations, asArray } from "@/components/useTranslations"

/*
 * This page publishes no prices. Every package is quoted per project (see the
 * note on `QUOTE_TURNAROUND_HOURS` in lib/company.ts). What the page does commit
 * to is scope: what each package includes and how long it takes, so a visitor
 * can pick the right tier before asking for a quote.
 *
 * All copy lives in `messages/<locale>/pricing_page.json`. The page used to
 * carry its Greek inline, which made it the one page on the site that stayed
 * Greek after the language switch. Only the category ids/icons are here — they
 * are structure, not copy, and the analytics event keys on the id.
 */
const CATEGORIES = [
  { id: "websites", icon: Globe },
  { id: "design", icon: Palette },
  { id: "prints", icon: Printer },
  { id: "distribution", icon: MapPin },
  { id: "research", icon: BarChart2 },
  { id: "digital", icon: Megaphone },
] as const

type Plan = {
  name: string
  description: string
  features: string[]
  popular?: boolean
  /** Monthly engagement — renders "/ month" after the quote label. */
  monthly?: boolean
}

type ComparisonRow = { service: string; href: string; priced: string; scope: string; delivery: string }

/** The quote turnaround is a company fact, not copy, so it is substituted here. */
const hours = (text: string) => text.replace(/\{hours\}/g, String(QUOTE_TURNAROUND_HOURS))

export default function PricingPage() {
  const { t } = useTranslations()
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]["id"]>("websites")
  const activePlans = asArray<Plan>(t(`pricing_page.plans.${activeCategory}`))
  const comparison = asArray<ComparisonRow>(t("pricing_page.comparison.rows"))
  const guarantees = asArray<{ title: string; text: string }>(t("pricing_page.guarantees"))
  const quoteLabel = t("pricing_page.quote_label") as string
  const ctaButton = t("pricing_page.cta_button") as string

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#07141C]/90" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-[#01FFFF]/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] bg-[#01A9FF]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-[#01FFFF]/10 border border-[#01FFFF]/30 text-[#01FFFF] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
              {t("pricing_page.hero.badge")}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-none">
              {t("pricing_page.hero.title")}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-[65ch]">{hours(t("pricing_page.hero.description"))}</p>
          </motion.div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-[60px] z-50 bg-[#07141C]/95 backdrop-blur-md border-b border-cyan-900/20 shadow-lg shadow-black/20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide gap-1 py-3">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              const isActive = activeCategory === cat.id
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id)
                    // Which package list a visitor opened — the "pricing-page interaction" the audit asks to measure.
                    track("pricing_tab_view", { tab: cat.id })
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg whitespace-nowrap text-sm font-medium transition-all flex-shrink-0 ${
                    isActive
                      ? "bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C]"
                      : "text-gray-400 hover:text-[#01FFFF] hover:bg-[#01FFFF]/5"
                  }`}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon className="w-4 h-4" />
                  {t(`pricing_page.categories.${cat.id}`)}
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Package cards */}
      <div className="container mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {activePlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={`relative flex flex-col rounded-2xl border overflow-hidden ${
                  plan.popular
                    ? "border-[#01FFFF]/60 shadow-2xl shadow-cyan-500/20 scale-[1.02]"
                    : "border-cyan-900/30"
                } bg-gradient-to-b from-[#0A1A24] to-[#0D2436]`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]" />
                )}

                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] text-xs font-bold px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-current" />
                      {t("pricing_page.popular")}
                    </span>
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-2xl font-extrabold text-white">{quoteLabel}</span>
                    {plan.monthly && (
                      <span className="text-gray-400 text-sm ml-1">/ {t("pricing_page.per_month")}</span>
                    )}
                    <p className="text-[#01FFFF]/60 text-xs mt-1">{hours(t("pricing_page.quote_note"))}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#01FFFF]/15 flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#01FFFF]" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact#contact-form">
                    <motion.button
                      className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                        plan.popular
                          ? "bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] shadow-lg shadow-cyan-500/20"
                          : "border border-[#01FFFF]/40 text-[#01FFFF] hover:bg-[#01FFFF]/10"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {ctaButton}
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Comparison table — every service on one screen */}
        <section className="max-w-6xl mx-auto mt-20" aria-labelledby="pricing-comparison">
          <h2 id="pricing-comparison" className="text-3xl md:text-4xl font-bold text-white mb-3">
            {t("pricing_page.comparison.title")}
          </h2>
          <p className="text-gray-400 mb-8 max-w-3xl">{t("pricing_page.comparison.description")}</p>
          <div className="overflow-x-auto rounded-2xl border border-cyan-900/30">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#0A1A24] text-[#01FFFF] uppercase text-xs tracking-wide">
                <tr>
                  <th scope="col" className="px-4 py-3">{t("pricing_page.comparison.headers.service")}</th>
                  <th scope="col" className="px-4 py-3 whitespace-nowrap">{t("pricing_page.comparison.headers.priced")}</th>
                  <th scope="col" className="px-4 py-3">{t("pricing_page.comparison.headers.scope")}</th>
                  <th scope="col" className="px-4 py-3 whitespace-nowrap">{t("pricing_page.comparison.headers.delivery")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-900/20 bg-[#07141C]/60">
                {comparison.map((row) => (
                  <tr key={`${row.href}-${row.service}`} className="hover:bg-[#01FFFF]/5 transition-colors">
                    <th scope="row" className="px-4 py-3 font-medium text-white">
                      <Link href={row.href} className="hover:text-[#01FFFF] transition-colors">
                        {row.service}
                      </Link>
                    </th>
                    <td className="px-4 py-3 whitespace-nowrap text-[#01FFFF] font-semibold">{row.priced}</td>
                    <td className="px-4 py-3 text-gray-300">{row.scope}</td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{row.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Note */}
        <motion.p
          className="text-center text-gray-500 text-sm mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {t("pricing_page.note.line1")}
          <br />
          {hours(t("pricing_page.note.line2"))}
        </motion.p>
      </div>

      {/* FAQ / Note section */}
      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {guarantees.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#0A1A24]/60 border border-cyan-900/20 rounded-xl p-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <h4 className="text-[#01FFFF] font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl border border-cyan-900/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#01FFFF]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#01A9FF]/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("pricing_page.cta.title")}</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">{hours(t("pricing_page.cta.description"))}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20 w-full sm:w-auto"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("pricing_page.cta.button")}
                </motion.button>
              </Link>
              <a href="tel:+302681303007">
                <motion.button
                  className="border-2 border-[#01FFFF] text-[#01FFFF] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2681 303007
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
