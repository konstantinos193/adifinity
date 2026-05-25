"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Code2, Layers, Smartphone, Globe, Palette, ArrowRight, Check, Star, Phone, Shield, Rocket, Lock, Database, Cloud, Calendar, BarChart3, CreditCard, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import FeatureShowcase from "@/components/ui/FeatureShowcase"
import { useTranslations } from "@/components/useTranslations"

const CustomWebAppsClient = () => {
  const { t, locale } = useTranslations()
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [expandedCase, setExpandedCase] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return Globe
      case 'Layers': return Layers
      case 'Smartphone': return Smartphone
      case 'Palette': return Palette
      case 'Code2': return Code2
      case 'ArrowRight': return ArrowRight
      case 'Shield': return Shield
      case 'Rocket': return Rocket
      case 'Lock': return Lock
      case 'Database': return Database
      case 'Cloud': return Cloud
      case 'Calendar': return Calendar
      case 'BarChart3': return BarChart3
      case 'CreditCard': return CreditCard
      case 'Zap': return Zap
      default: return Code2
    }
  }

  const whatWeDeliver = t('custom_web_apps_page.what_we_deliver') as any[]
  const portfolio = t('custom_web_apps_page.portfolio_items') as any[]
  const included = t('custom_web_apps_page.included_features') as string[]
  const industries = t('custom_web_apps_page.industries') as any[]
  const premiumFeatures = t('custom_web_apps_page.premium_features') as any[]

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
                <span className="whitespace-nowrap">{t('custom_web_apps_page.get_started') as string}</span>
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
                  <span>{t('custom_web_apps_page.phone') as string}</span>
                </motion.button>
              </a>
              <div className="w-3"></div>
              <Link href="/contact#contact-form" className="flex-1">
                <motion.button
                  className="w-full bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{t('custom_web_apps_page.get_started') as string}</span>
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
                {t('custom_web_apps_page.hero_badge') as string}
              </motion.span>
              
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                <motion.span 
                  className="text-white block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {t('custom_web_apps_page.hero_title_line1') as string}
                </motion.span>
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {t('custom_web_apps_page.hero_title_line2') as string}
                </motion.span>
                <motion.span 
                  className="text-white block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {t('custom_web_apps_page.hero_title_line3') as string}
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {t('custom_web_apps_page.description') as string}
              </motion.p>
              
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
                    <span className="group-hover:translate-x-1 transition-transform">{t('custom_web_apps_page.get_started') as string}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <a href="#portfolio">
                  <motion.button
                    className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3.5 px-8 rounded-full text-base hover:bg-[#01FFFF]/10 transition-all group"
                    whileHover={{ scale: 1.04, borderColor: "rgba(1,255,255,0.6)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">{t('custom_web_apps_page.see_projects') as string}</span>
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>

            {/* Included checklist */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="hidden lg:block">
              <div className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-6">{t('custom_web_apps_page.every_project_includes') as string}</h3>
                <div className="space-y-3">
                  {included.map((item: string, i: number) => (
                    <motion.div key={i} className="flex items-start gap-3" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.07 }}>
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

      {/* What we deliver */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-white mb-3">{t('custom_web_apps_page.custom_web_development') as string}</h2>
            <p className="text-gray-400 text-lg">{t('custom_web_apps_page.custom_web_development_desc') as string}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDeliver.map((item: any, i: number) => {
              const Icon = getIcon(item.icon || 'Code2')
              return (
                <motion.div key={item.title} className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
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

      {/* Enhanced Portfolio/Case Studies */}
      <section id="portfolio" className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-white mb-3">{t('custom_web_apps_page.case_studies_title') as string}</h2>
            <p className="text-gray-400 text-lg">{t('custom_web_apps_page.case_studies_desc') as string}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolio.map((p: any, i: number) => (
              <motion.div 
                key={p.name} 
                className="group"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
              >
                <motion.div 
                  className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl overflow-hidden hover:border-[#01FFFF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(1,255,255,0.1)]"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden bg-[#0D2030]">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A24] via-transparent to-transparent" />
                    
                    {/* Metrics Overlay */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {Object.entries(p.metrics).map(([key, value]) => (
                        <motion.div
                          key={key}
                          className="bg-[#07141C]/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-cyan-900/40"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                        >
                          <div className="text-[#01FFFF] text-xs font-bold">{value}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#01FFFF]/70 text-xs uppercase tracking-widest">{p.category}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#01FFFF] transition-colors">{p.name}</h3>
                    
                    <motion.div className="mb-4">
                      <p className="text-gray-300 text-sm leading-relaxed">{p.description}</p>
                    </motion.div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tags.map((t: string) => (
                        <span key={t} className="text-xs bg-[#01FFFF]/8 text-[#01FFFF]/70 px-2.5 py-1 rounded-full border border-[#01FFFF]/15">{t}</span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <motion.a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-[#01FFFF]/20 to-[#01A9FF]/20 text-[#01FFFF] font-semibold py-2 px-4 rounded-xl border border-[#01FFFF]/30 text-center text-sm hover:bg-[#01FFFF]/30 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t('custom_web_apps_page.see_project') as string}
                      </motion.a>
                      <motion.button
                        onClick={() => setExpandedCase(expandedCase === p.name ? null : p.name)}
                        className="bg-[#0A1A24] text-gray-300 font-semibold py-2 px-4 rounded-xl border border-cyan-900/40 hover:border-[#01FFFF]/40 transition-colors text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {expandedCase === p.name ? (t('custom_web_apps_page.less') as string) : (t('custom_web_apps_page.more') as string)}
                      </motion.button>
                    </div>
                    
                    <AnimatePresence>
                      {expandedCase === p.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-cyan-900/30"
                        >
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-white font-semibold mb-1">{t('custom_web_apps_page.technologies') as string}</h4>
                              <p className="text-gray-400 text-sm">{t('custom_web_apps_page.technologies_list') as string}</p>
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-1">{t('custom_web_apps_page.key_features') as string}</h4>
                              <p className="text-gray-400 text-sm">{p.description}</p>
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-1">{t('custom_web_apps_page.technical_metrics') as string}</h4>
                              <div className="grid grid-cols-3 gap-2 text-center">
                                {Object.entries(p.metrics).map(([key, value]) => (
                                  <div key={key} className="bg-[#01FFFF]/10 rounded-lg p-2">
                                    <div className="text-[#01FFFF] font-bold">{value}</div>
                                    <div className="text-gray-400 text-xs capitalize">{key}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-white mb-3">{t('custom_web_apps_page.greek_industry_solutions') as string}</h2>
            <p className="text-gray-400 text-lg">{t('custom_web_apps_page.greek_industry_solutions_desc') as string}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry: any, i: number) => {
              const Icon = getIcon(industry.icon || 'Code2')
              return (
                <motion.div
                  key={industry.title}
                  className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -3, boxShadow: "0 0 30px rgba(1,255,255,0.1)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center group-hover:bg-[#01FFFF]/20 transition-colors flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#01FFFF]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#01FFFF] transition-colors">{industry.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{industry.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.features.map((feature: string) => (
                          <span key={feature} className="text-xs bg-[#01FFFF]/8 text-[#01FFFF]/70 px-2.5 py-1 rounded-full border border-[#01FFFF]/15">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <FeatureShowcase
        title={t('custom_web_apps_page.premium_features_title') as string}
        subtitle={t('custom_web_apps_page.premium_features_title') as string}
        features={premiumFeatures.map((feature: any) => ({
          ...feature,
          icon: getIcon(feature.icon || 'Zap')
        }))}
        ctaText={t('custom_web_apps_page.request_quote') as string}
        locale={locale}
        lessText={t('custom_web_apps_page.less') as string}
        moreText={t('custom_web_apps_page.more') as string}
        additionalText={locale === 'el' ? 'Πρόσθετων' : 'Additional'}
        deliveryText={locale === 'el' ? 'Παράδοση:' : 'Delivery:'}
        popularText={locale === 'el' ? 'ΔΗΜΟΦΙΛΕΣ' : 'POPULAR'}
      />

      </main>
    </>
  )
}

export default CustomWebAppsClient
