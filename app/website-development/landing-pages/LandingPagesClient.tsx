"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Zap, Target, TrendingUp, Smartphone, Search, MousePointer, ArrowRight, Check, ChevronRight, Phone, Moon, Sun, Menu, X, Star, Quote, Rocket, Shield } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTranslations } from "@/components/useTranslations"

export default function LandingPagesClient() {
  const { t } = useTranslations()
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const features = [
    {
      icon: Zap,
      titleKey: "landing_pages_page.features.0.title",
      descKey: "landing_pages_page.features.0.desc",
    },
    {
      icon: Target,
      titleKey: "landing_pages_page.features.1.title",
      descKey: "landing_pages_page.features.1.desc",
    },
    {
      icon: TrendingUp,
      titleKey: "landing_pages_page.features.2.title",
      descKey: "landing_pages_page.features.2.desc",
    },
    {
      icon: Smartphone,
      titleKey: "landing_pages_page.features.3.title",
      descKey: "landing_pages_page.features.3.desc",
    },
    {
      icon: Search,
      titleKey: "landing_pages_page.features.4.title",
      descKey: "landing_pages_page.features.4.desc",
    },
    {
      icon: MousePointer,
      titleKey: "landing_pages_page.features.5.title",
      descKey: "landing_pages_page.features.5.desc",
    },
  ]

  const useCases = [
    { titleKey: "landing_pages_page.use_cases.0.title", descKey: "landing_pages_page.use_cases.0.desc" },
    { titleKey: "landing_pages_page.use_cases.1.title", descKey: "landing_pages_page.use_cases.1.desc" },
    { titleKey: "landing_pages_page.use_cases.2.title", descKey: "landing_pages_page.use_cases.2.desc" },
    { titleKey: "landing_pages_page.use_cases.3.title", descKey: "landing_pages_page.use_cases.3.desc" },
    { titleKey: "landing_pages_page.use_cases.4.title", descKey: "landing_pages_page.use_cases.4.desc" },
    { titleKey: "landing_pages_page.use_cases.5.title", descKey: "landing_pages_page.use_cases.5.desc" },
  ]

  const deliverables = [
    {
      titleKey: "landing_pages_page.deliverables.0.title",
      itemKeys: ["landing_pages_page.deliverables.0.items.0", "landing_pages_page.deliverables.0.items.1"],
    },
    {
      titleKey: "landing_pages_page.deliverables.1.title",
      itemKeys: ["landing_pages_page.deliverables.1.items.0", "landing_pages_page.deliverables.1.items.1"],
    },
    {
      titleKey: "landing_pages_page.deliverables.2.title",
      itemKeys: ["landing_pages_page.deliverables.2.items.0", "landing_pages_page.deliverables.2.items.1"],
    },
    {
      titleKey: "landing_pages_page.deliverables.3.title",
      itemKeys: ["landing_pages_page.deliverables.3.items.0"],
    },
    {
      titleKey: "landing_pages_page.deliverables.4.title",
      itemKeys: ["landing_pages_page.deliverables.4.items.0"],
    },
  ]

  const whyUs = [
    { titleKey: "landing_pages_page.why_us.0.title", descKey: "landing_pages_page.why_us.0.desc" },
    { titleKey: "landing_pages_page.why_us.1.title", descKey: "landing_pages_page.why_us.1.desc" },
    { titleKey: "landing_pages_page.why_us.2.title", descKey: "landing_pages_page.why_us.2.desc" },
  ]

  const faqs = [
    {
      qKey: "landing_pages_page.faqs.0.q",
      aKey: "landing_pages_page.faqs.0.a",
    },
    {
      qKey: "landing_pages_page.faqs.1.q",
      aKey: "landing_pages_page.faqs.1.a",
    },
    {
      qKey: "landing_pages_page.faqs.2.q",
      aKey: "landing_pages_page.faqs.2.a",
    },
    {
      qKey: "landing_pages_page.faqs.3.q",
      aKey: "landing_pages_page.faqs.3.a",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <main className="min-h-screen bg-[#07141C]">

      {/* Sticky CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 lg:block hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/contact#contact-form">
              <motion.button
                className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-6 rounded-full shadow-2xl shadow-cyan-500/30 flex items-center gap-2 border border-[#01FFFF]/20"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(1,255,255,0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="whitespace-nowrap">{t("landing_pages_page.get_started")}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bar */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#07141C]/95 backdrop-blur-lg border-t border-cyan-900/30"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between p-4">
              <a href="tel:+302681303007" className="flex-1">
                <motion.button
                  className="w-full bg-[#0A1A24] text-[#01FFFF] font-semibold py-3 px-4 rounded-xl border border-cyan-900/40 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="w-4 h-4" />
                  <span>{t("landing_pages_page.phone")}</span>
                </motion.button>
              </a>
              <div className="w-3"></div>
              <Link href="/contact#contact-form" className="flex-1">
                <motion.button
                  className="w-full bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{t("landing_pages_page.get_started")}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

              <motion.span 
                className="inline-block bg-[#01FFFF]/10 border border-[#01FFFF]/30 text-[#01FFFF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {t("landing_pages_page.hero_badge")}
              </motion.span>
              
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                <motion.span 
                  className="text-white block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {t("landing_pages_page.hero_title_line1")}
                </motion.span>
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {t("landing_pages_page.hero_title_line2")}
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                dangerouslySetInnerHTML={{ __html: t("landing_pages_page.description") }}
              />
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3.5 px-8 rounded-full text-base shadow-lg shadow-cyan-500/20 flex items-center gap-2 group"
                    whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,255,255,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{t("landing_pages_page.get_started")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <a href="tel:+302681303007">
                  <motion.button
                    className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3.5 px-8 rounded-full text-base hover:bg-[#01FFFF]/10 transition-all group"
                    whileHover={{ scale: 1.04, borderColor: "rgba(1,255,255,0.6)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    {t("landing_pages_page.phone")}
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right — deliverables checklist */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-6">{t("landing_pages_page.what_we_deliver")}</h3>
                <div className="space-y-5">
                  {deliverables.map((group, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.07 }}
                    >
                      <div className="flex items-start gap-3 mb-1.5">
                        <span className="w-5 h-5 rounded-full bg-[#01FFFF]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#01FFFF]" />
                        </span>
                        <span className="text-white text-sm font-semibold">{t(group.titleKey)}</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        {group.itemKeys.map((itemKey, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <ChevronRight className="w-3 h-3 text-[#01FFFF]/50 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-400 text-xs leading-relaxed">{t(itemKey)}</span>
                          </div>
                        ))}
                      </div>
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
          <motion.div className="mb-14" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-white mb-3">{t("landing_pages_page.features_title")}</h2>
            <p className="text-gray-400 text-lg">{t("landing_pages_page.features_subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.titleKey}
                  className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#01FFFF]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#01FFFF]" />
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#01FFFF] transition-colors">{t(f.titleKey)}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{t(f.descKey)}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-white mb-3">{t("landing_pages_page.use_cases_title")}</h2>
            <p className="text-gray-400 text-lg">{t("landing_pages_page.use_cases_subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.titleKey}
                className="bg-[#0A1A24] border border-cyan-900/30 rounded-xl p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <h3 className="text-[#01FFFF] font-bold mb-2">{t(uc.titleKey)}</h3>
                <p className="text-gray-400 text-sm">{t(uc.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-white mb-3">{t("landing_pages_page.why_choose_title")}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.titleKey}
                className="bg-[#0A1A24] border border-[#01FFFF]/20 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#01FFFF]/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-5 h-5 text-[#01FFFF]" />
                </div>
                <h3 className="text-white font-bold mb-2">{t(item.titleKey)}</h3>
                <p className="text-gray-400 text-sm">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-white mb-3">{t("landing_pages_page.faq_title")}</h2>
            <p className="text-gray-400 text-lg">{t("landing_pages_page.faq_subtitle")}</p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <motion.button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#01FFFF]/5 transition-colors"
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  whileHover={{ backgroundColor: "rgba(1,255,255,0.05)" }}
                >
                  <h3 className="text-white font-semibold text-lg pr-4">{t(faq.qKey)}</h3>
                  <motion.div
                    animate={{ rotate: expandedFAQ === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#01FFFF] flex-shrink-0"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {expandedFAQ === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-cyan-900/30"
                    >
                      <div className="p-6 pt-0">
                        <p className="text-gray-300 leading-relaxed">{t(faq.aKey)}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  {t("landing_pages_page.cta_title")}
                </h3>
                <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                  {t("landing_pages_page.cta_description")}
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contact#contact-form">
                  <motion.button 
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-cyan-500/20 flex items-center gap-2 justify-center group" 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(1,255,255,0.5)" }} 
                    whileTap={{ scale: 0.96 }}
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{t("landing_pages_page.get_started")}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <a href="tel:+302681303007">
                  <motion.button 
                    className="border-2 border-[#01FFFF]/60 text-[#01FFFF] font-bold py-4 px-10 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-all w-full sm:w-auto group" 
                    whileHover={{ scale: 1.05, borderColor: "rgba(1,255,255,0.8)" }} 
                    whileTap={{ scale: 0.96 }}
                  >
                    <Phone className="w-5 h-5 inline mr-2 group-hover:animate-pulse" />
                    {t("landing_pages_page.phone")}
                  </motion.button>
                </a>
              </motion.div>
              
              <motion.div 
                className="mt-8 flex items-center justify-center gap-8 text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#01FFFF]" />
                  <span>{t("landing_pages_page.response_time")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#01FFFF]" />
                  <span>{t("landing_pages_page.support_period")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-[#01FFFF]" />
                  <span>{t("landing_pages_page.fast_delivery")}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Landing Pages",
            "description": "Professional custom landing page development using Next.js for marketing campaigns and lead generation.",
            "provider": {
              "@type": "Organization",
              "name": "adinfinity",
              "url": "https://adinfinity.gr",
              "telephone": "+30-2681-303007"
            },
            "serviceType": "Landing Page Development",
            "areaServed": {
              "@type": "Country",
              "name": "Greece"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Landing Page Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Google Ads Landing Pages",
                    "description": "High-converting landing pages optimized for Google Ads campaigns"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceCurrency": "EUR"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Product Launch Pages",
                    "description": "Custom landing pages for new product launches and announcements"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceCurrency": "EUR"
                  }
                }
              ]
            },
            "faqPage": faqs.map(faq => ({
              "@type": "Question",
              "name": t(faq.qKey),
              "acceptedAnswer": {
                "@type": "Answer",
                "text": t(faq.aKey)
              }
            }))
          })
        }}
      />

    </main>
    </>
  )
}
