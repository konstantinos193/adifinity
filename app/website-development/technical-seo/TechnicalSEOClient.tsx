"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Search, Zap, BarChart3, Code2, Globe, FileText, ArrowRight, Check, Star, Quote, Phone, Award, TrendingUp, Clock, Target, Shield, AlertCircle, Info } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"
import { useTranslations } from "@/components/useTranslations"

// Disable Framer Motion SSR warnings
if (typeof window === "undefined") {
  (motion as any).useReducedMotion = true
}

export function TechnicalSEOClient() {
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [showScoreDemo, setShowScoreDemo] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const { t: translate } = useTranslations()

  const t = (key: string): string => {
    const result = translate(key)
    return Array.isArray(result) ? result[0] : result
  }

  const audits = [
    { icon: Zap, title: t('technical_seo_page.audits.core_web_vitals.title'), desc: t('technical_seo_page.audits.core_web_vitals.desc') },
    { icon: Code2, title: t('technical_seo_page.audits.schema_markup.title'), desc: t('technical_seo_page.audits.schema_markup.desc') },
    { icon: Globe, title: t('technical_seo_page.audits.crawlability.title'), desc: t('technical_seo_page.audits.crawlability.desc') },
    { icon: BarChart3, title: t('technical_seo_page.audits.lighthouse_audit.title'), desc: t('technical_seo_page.audits.lighthouse_audit.desc') },
    { icon: FileText, title: t('technical_seo_page.audits.on_page_seo.title'), desc: t('technical_seo_page.audits.on_page_seo.desc') },
    { icon: Search, title: t('technical_seo_page.audits.technical_fixes.title'), desc: t('technical_seo_page.audits.technical_fixes.desc') },
  ]

  const process = [
    { step: "01", title: t('technical_seo_page.process.audit.title'), desc: t('technical_seo_page.process.audit.desc') },
    { step: "02", title: t('technical_seo_page.process.analysis.title'), desc: t('technical_seo_page.process.analysis.desc') },
    { step: "03", title: t('technical_seo_page.process.implementation.title'), desc: t('technical_seo_page.process.implementation.desc') },
    { step: "04", title: t('technical_seo_page.process.monitoring.title'), desc: t('technical_seo_page.process.monitoring.desc') },
  ]

  const expectedResults = [
    { icon: TrendingUp, title: t('technical_seo_page.expected_results.positions.title'), desc: t('technical_seo_page.expected_results.positions.desc') },
    { icon: Clock, title: t('technical_seo_page.expected_results.load_time.title'), desc: t('technical_seo_page.expected_results.load_time.desc') },
    { icon: Target, title: t('technical_seo_page.expected_results.traffic.title'), desc: t('technical_seo_page.expected_results.traffic.desc') },
    { icon: Shield, title: t('technical_seo_page.expected_results.compliance.title'), desc: t('technical_seo_page.expected_results.compliance.desc') },
  ]

  const tools = [
    { name: t('technical_seo_page.tools.lighthouse.name'), category: t('technical_seo_page.tools.lighthouse.category'), description: t('technical_seo_page.tools.lighthouse.description') },
    { name: t('technical_seo_page.tools.gsc.name'), category: t('technical_seo_page.tools.gsc.category'), description: t('technical_seo_page.tools.gsc.description') },
    { name: t('technical_seo_page.tools.screaming_frog.name'), category: t('technical_seo_page.tools.screaming_frog.category'), description: t('technical_seo_page.tools.screaming_frog.description') },
    { name: t('technical_seo_page.tools.pagespeed.name'), category: t('technical_seo_page.tools.pagespeed.category'), description: t('technical_seo_page.tools.pagespeed.description') },
    { name: t('technical_seo_page.tools.gtmetrix.name'), category: t('technical_seo_page.tools.gtmetrix.category'), description: t('technical_seo_page.tools.gtmetrix.description') },
    { name: t('technical_seo_page.tools.schema_validator.name'), category: t('technical_seo_page.tools.schema_validator.category'), description: t('technical_seo_page.tools.schema_validator.description') },
  ]

  const faqs = [
    {
      q: t('technical_seo_page.faqs.duration.q'),
      a: t('technical_seo_page.faqs.duration.a')
    },
    {
      q: t('technical_seo_page.faqs.difference.q'),
      a: t('technical_seo_page.faqs.difference.a')
    },
    {
      q: t('technical_seo_page.faqs.results.q'),
      a: t('technical_seo_page.faqs.results.a')
    },
    {
      q: t('technical_seo_page.faqs.support.q'),
      a: t('technical_seo_page.faqs.support.a')
    },
  ]

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>{t('technical_seo_page.title') as string}</title>
        <meta name="description" content={t('technical_seo_page.description') as string} />
        <meta name="keywords" content={t('technical_seo_page.keywords') as string} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#07141C" />
        <link rel="canonical" href="https://adinfinity.gr/website-development/technical-seo" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('technical_seo_page.title') as string} />
        <meta property="og:description" content={t('technical_seo_page.description') as string} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adinfinity.gr/website-development/technical-seo" />
        <meta property="og:image" content="https://adinfinity.gr/images/og-image.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="adinfinity" />
        <meta name="language" content="el" />
      </Head>
      
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
                <span className="whitespace-nowrap">{t('technical_seo_page.free_audit')}</span>
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
                  <span>{t('technical_seo_page.phone_number')}</span>
                </motion.button>
              </a>
              <div className="w-3"></div>
              <Link href="/contact#contact-form" className="flex-1">
                <motion.button
                  className="w-full bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{t('technical_seo_page.free_audit')}</span>
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
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
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
                {t('technical_seo_page.hero_badge')}
              </motion.span>
              
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                <motion.span 
                  className="text-white block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Technical
                </motion.span>
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  SEO
                </motion.span>
                <motion.span 
                  className="text-white block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {t('technical_seo_page.hero_title').toString().split(' ')[2]}
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                dangerouslySetInnerHTML={{ __html: t('technical_seo_page.hero_description') }}
              />
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link href="/contact#contact-form">
                  <motion.button className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3.5 px-8 rounded-full text-base shadow-lg shadow-cyan-500/20 flex items-center gap-2 group" whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,255,255,0.4)" }} whileTap={{ scale: 0.97 }}>
                    <span className="group-hover:translate-x-1 transition-transform">{t('technical_seo_page.request_audit')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <a href="tel:+302681303007">
                  <motion.button className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3.5 px-8 rounded-full text-base hover:bg-[#01FFFF]/10 transition-all group" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Phone className="w-4 h-4 inline mr-2" />
                    {t('technical_seo_page.phone_number')}
                  </motion.button>
                </a>
              </motion.div>
              
              <motion.div
                className="bg-[#0A1A24]/50 border border-cyan-900/30 rounded-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-[#01FFFF]" />
                  <span className="text-[#01FFFF] font-semibold">{t('technical_seo_page.unique_approach_title')}</span>
                </div>
                <p className="text-gray-400 text-sm">{t('technical_seo_page.unique_approach_desc')}</p>
              </motion.div>
            </motion.div>

            {/* Enhanced Score visual */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="hidden lg:block">
              <div className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-500 text-xs uppercase tracking-widest">{t('technical_seo_page.lighthouse_target')}</p>
                  <motion.button
                    onClick={() => setShowScoreDemo(!showScoreDemo)}
                    className="text-[#01FFFF]/60 hover:text-[#01FFFF] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Info className="w-4 h-4" />
                  </motion.button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: t('technical_seo_page.performance'), score: "95+", tooltip: t('technical_seo_page.performance_tooltip') },
                    { label: t('technical_seo_page.accessibility'), score: "98+", tooltip: t('technical_seo_page.accessibility_tooltip') },
                    { label: t('technical_seo_page.best_practices'), score: "100", tooltip: t('technical_seo_page.best_practices_tooltip') },
                    { label: t('technical_seo_page.seo_score'), score: "100", tooltip: t('technical_seo_page.seo_tooltip') },
                  ].map((item, i) => (
                    <motion.div 
                      key={item.label} 
                      className="bg-[#0D2030] rounded-xl p-4 text-center relative group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(1,255,255,0.3)" }}
                    >
                      <div className="text-3xl font-black text-[#01FFFF] mb-1">{item.score}</div>
                      <div className="text-gray-400 text-xs">{item.label}</div>
                      
                      {/* Tooltip */}
                      <motion.div
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-[#07141C] border border-cyan-900/40 rounded-lg px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10"
                        initial={{ opacity: 0, y: 5 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        {item.tooltip}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-cyan-900/20">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-400 text-sm">{t('technical_seo_page.avg_improvement')}</p>
                    <span className="text-[#01FFFF] font-bold text-lg">{t('technical_seo_page.improvement_value')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-sm">{t('technical_seo_page.time_to_results')}</p>
                    <span className="text-[#01FFFF] font-bold text-lg">{t('technical_seo_page.results_time')}</span>
                  </div>
                </div>
                
                <AnimatePresence>
                  {showScoreDemo && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-cyan-900/20"
                    >
                      <p className="text-gray-400 text-xs mb-3">{t('technical_seo_page.scores_explanation')}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300 text-xs">{t('technical_seo_page.performance_desc')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300 text-xs">{t('technical_seo_page.accessibility_desc')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300 text-xs">{t('technical_seo_page.best_practices_desc')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300 text-xs">{t('technical_seo_page.seo_desc')}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we fix */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 16 }} animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <h2 className="text-4xl font-black text-white mb-3">{t('technical_seo_page.what_we_optimize')}</h2>
            <p className="text-gray-400 text-lg">{t('technical_seo_page.optimize_desc')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {audits.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all group" initial={{ opacity: 0, y: 20 }} animate={isClient ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: isClient ? i * 0.07 : 0 }}>
                  <div className="w-11 h-11 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#01FFFF]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#01FFFF]" />
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#01FFFF] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 16 }} animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
            <h2 className="text-4xl font-black text-white mb-3">{t('technical_seo_page.how_we_work')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div key={step.step} className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} animate={isClient ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: isClient ? i * 0.1 : 0 }}>
                <span className="text-5xl font-black text-[#01FFFF]/15 block mb-4 leading-none">{step.step}</span>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results Section */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 16 }} animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
            <h2 className="text-4xl font-black text-white mb-3">{t('technical_seo_page.what_to_expect')}</h2>
            <p className="text-gray-400 text-lg">{t('technical_seo_page.expect_desc')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectedResults.map((result, i) => {
              const Icon = result.icon
              return (
                <motion.div
                  key={result.title}
                  className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isClient ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: isClient ? i * 0.1 : 0 }}
                  whileHover={{ y: -3, boxShadow: "0 0 30px rgba(1,255,255,0.1)" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center group-hover:bg-[#01FFFF]/20 transition-colors mb-4">
                    <Icon className="w-6 h-6 text-[#01FFFF]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#01FFFF] transition-colors">{result.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{result.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 16 }} animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
            <h2 className="text-4xl font-black text-white mb-3">{t('technical_seo_page.tools_we_use')}</h2>
            <p className="text-gray-400 text-lg">{t('technical_seo_page.tools_desc')}</p>
          </motion.div>
          
          <div className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  className="bg-[#0D2030] rounded-xl p-4 hover:bg-[#0A2A3A] transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isClient ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: isClient ? i * 0.05 : 0 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-[#01FFFF]/10 rounded-lg flex items-center justify-center">
                      <Search className="w-4 h-4 text-[#01FFFF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{tool.name}</h4>
                      <span className="text-[#01FFFF]/70 text-xs">{tool.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 16 }} animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <h2 className="text-4xl font-black text-white mb-3">{t('technical_seo_page.faq_title')}</h2>
            <p className="text-gray-400 text-lg">{t('technical_seo_page.faq_desc')}</p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isClient ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: isClient ? i * 0.05 : 0 }}
              >
                <motion.button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#01FFFF]/5 transition-colors"
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  whileHover={{ backgroundColor: "rgba(1,255,255,0.05)" }}
                >
                  <h3 className="text-white font-semibold text-lg pr-4">{faq.q}</h3>
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
                        <p className="text-gray-300 leading-relaxed">{faq.a}</p>
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
          <motion.div className="relative overflow-hidden rounded-3xl border border-[#01FFFF]/20 bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-10 md:p-16 text-center max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#01FFFF]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#01A9FF]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{t('technical_seo_page.cta_title')}</h3>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">{t('technical_seo_page.cta_desc')}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact#contact-form">
                  <motion.button className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-cyan-500/20 flex items-center gap-2 justify-center" whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(1,255,255,0.5)" }} whileTap={{ scale: 0.96 }}>
                    {t('technical_seo_page.free_audit')} <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <a href="tel:+302681303007">
                  <motion.button className="border-2 border-[#01FFFF]/60 text-[#01FFFF] font-bold py-4 px-10 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                    {t('technical_seo_page.phone_number')}
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
    </>
  )
}
