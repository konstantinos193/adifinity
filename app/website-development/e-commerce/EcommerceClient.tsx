"use client"

import { motion } from "framer-motion"
import { ShoppingCart, CreditCard, Package, BarChart3, RefreshCw, Lock, ArrowRight, Check, Zap, TrendingUp, Users, Calendar } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/components/useTranslations"
import FeatureShowcase from "@/components/ui/FeatureShowcase"

const EcommerceClient = () => {
  const { t, locale } = useTranslations()

  const features = t('e_commerce_page.features') as any[]
  const whyCustom = t('e_commerce_page.why_custom') as string[]
  const ecommercePremiumFeatures = t('e_commerce_page.premium_features') as any[]
  const paymentCategories = t('e_commerce_page.payment_categories') as any[]

  const featureIcons = [
    ShoppingCart,
    CreditCard,
    Package,
    BarChart3,
    RefreshCw,
    Lock
  ]

  const premiumFeatureIcons = [
    BarChart3,
    RefreshCw,
    Users,
    Package
  ]

  const paymentCategoryColors = [
    { color: "from-[#01FFFF]/20 to-[#01FFFF]/5", border: "border-[#01FFFF]/30" },
    { color: "from-[#01A9FF]/20 to-[#01A9FF]/5", border: "border-[#01A9FF]/30" },
    { color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/30" },
    { color: "from-green-500/20 to-green-500/5", border: "border-green-500/30" },
    { color: "from-orange-500/20 to-orange-500/5", border: "border-orange-500/30" },
    { color: "from-[#01FFFF]/15 to-transparent", border: "border-cyan-900/40" }
  ]

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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

              <span className="inline-block bg-[#01FFFF]/10 border border-[#01FFFF]/30 text-[#01FFFF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                {t('e_commerce_page.hero_badge')}
              </span>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                {String(t('e_commerce_page.hero_title')).split(' ').map((word, index) => (
                  <span key={index} className={index === 0 ? "text-white" : index === 1 ? "bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]" : "text-white"}>
                    {word}
                    {index < 2 && <br />}
                  </span>
                ))}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                {t('e_commerce_page.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3.5 px-8 rounded-full text-base shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                    whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,255,255,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t('e_commerce_page.get_started')} <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <a href="tel:+302681303007">
                  <motion.button
                    className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3.5 px-8 rounded-full text-base hover:bg-[#01FFFF]/10 transition-colors"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    2681 303007
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* Right — why custom breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-6">{t('e_commerce_page.custom_vs_title')}</h3>
                <div className="space-y-3">
                  {whyCustom.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                    >
                      <span className="w-5 h-5 rounded-full bg-[#01FFFF]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#01FFFF]" />
                      </span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-3">{t('e_commerce_page.features_title')}</h2>
            <p className="text-gray-400 text-lg">{t('e_commerce_page.features_description')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const Icon = featureIcons[i]
              return (
                <motion.div
                  key={f.title}
                  className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#01FFFF]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#01FFFF]" />
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#01FFFF] transition-colors">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Payments */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-3">{t('e_commerce_page.payment_methods_title')}</h2>
            <p className="text-gray-400 text-lg">{t('e_commerce_page.payment_methods_description')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {paymentCategories.map((group, i) => (
              <motion.div
                key={group.category}
                className={`bg-gradient-to-b ${paymentCategoryColors[i].color} border ${paymentCategoryColors[i].border} rounded-2xl p-6`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <h3 className="text-white font-bold mb-1">{group.category}</h3>
                <p className="text-gray-400 text-xs mb-4">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.providers.map((p: string) => (
                    <span key={p} className="text-xs bg-white/5 text-gray-200 px-2.5 py-1 rounded-full border border-white/10">
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary strip */}
          <motion.div
            className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 justify-between"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-sm md:text-base">
              <span className="text-[#01FFFF] font-semibold">{t('e_commerce_page.payment_summary')}</span>{" "}
              κάρτες · Apple/Google Pay · PayPal · Klarna · SEPA · αντικαταβολή · IRIS
            </p>
            <Link href="/contact#contact-form" className="flex-shrink-0">
              <motion.button
                className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-2.5 px-6 rounded-full text-sm flex items-center gap-2 whitespace-nowrap"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('e_commerce_page.get_started')} <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Premium E-commerce Features */}
      <FeatureShowcase
        title={t('e_commerce_page.premium_features_title')}
        subtitle={t('e_commerce_page.premium_features_subtitle')}
        features={ecommercePremiumFeatures.map((feature, i) => ({
          ...feature,
          icon: premiumFeatureIcons[i]
        }))}
        ctaText={t('e_commerce_page.cta_button')}
        showComparison={true}
        locale={locale}
      />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
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
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{t('e_commerce_page.cta_title')}</h3>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                {t('e_commerce_page.cta_description')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-cyan-500/20 flex items-center gap-2 justify-center"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(1,255,255,0.5)" }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {t('e_commerce_page.cta_button')} <ArrowRight className="w-5 h-5" />
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

export default EcommerceClient
