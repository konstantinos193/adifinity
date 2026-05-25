"use client"

import { motion } from "framer-motion"
import { RefreshCw, ShieldCheck, Zap, GitPullRequest, Bell, Headphones, ArrowRight, Check, Star, Clock, Users, TrendingUp, Award, MessageSquare, Phone, Calendar, BarChart3, Activity, Shield, Cpu, Globe, ZapOff } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTranslations } from "@/components/useTranslations"

const MaintenanceClient: React.FC = () => {
  const { t } = useTranslations()

  const [selectedPlans, setSelectedPlans] = useState(["Basic", "Growth", "Pro"])
  const [showComparison, setShowComparison] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)

  const included = t('maintenance_page.included') as unknown as Array<{
    title: string
    desc: string
    benefit: string
  }>

  const plans = t('maintenance_page.plans') as unknown as Array<{
    name: string
    hours: string
    ideal: string
    useCase: string
    features: string[]
    task_examples: string[]
    highlight?: boolean
  }>

  const whyRetainer = t('maintenance_page.why_retainer') as unknown as string[]
  const testimonials = t('maintenance_page.testimonials') as unknown as Array<{
    name: string
    company: string
    content: string
    rating: number
    results: string
  }>
  const addOns = t('maintenance_page.addons') as unknown as Array<{
    name: string
    desc: string
    price: string
  }>
  const performanceMetrics = t('maintenance_page.performance_metrics') as unknown as Array<{
    label: string
    value: string
  }>

  const includedIcons = [
    GitPullRequest,
    ShieldCheck,
    Zap,
    RefreshCw,
    Bell,
    Headphones
  ]

  const addOnIcons = [
    ZapOff,
    Clock,
    TrendingUp
  ]

  const performanceIcons = [
    Activity,
    Clock,
    Star,
    Check
  ]

  const togglePlan = (planName: string) => {
    setSelectedPlans(prev => 
      prev.includes(planName) 
        ? prev.filter(p => p !== planName)
        : [...prev, planName]
    )
  }

  const filteredPlans = Array.isArray(plans) ? plans.filter(plan => selectedPlans.includes(plan.name)) : []

  // Handle scroll for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 500)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-[#07141C]">
      {/* Sticky CTA */}
      {showStickyCTA && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#0A1A24] border border-[#01FFFF]/40 rounded-full px-6 py-3 shadow-2xl shadow-cyan-500/20"
        >
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-sm">{t('maintenance_page.sticky_cta_text')}</span>
            <Link href="/contact#contact-form">
              <motion.button
                className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-2 px-6 rounded-full text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('maintenance_page.sticky_cta_button')} <ArrowRight className="w-3 h-3" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}

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
                {t('maintenance_page.hero_badge')}
              </span>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                <span className="text-white">Maintenance</span><br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">&amp; Retainer</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                <span className="text-[#01FFFF] font-semibold">{t('maintenance_page.description')}</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3.5 px-8 rounded-full text-base shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                    whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,255,255,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t('maintenance_page.get_started')} <ArrowRight className="w-4 h-4" />
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

            {/* Right — why retainer checklist */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-6">{t('maintenance_page.why_retainer_title')}</h3>
                <div className="space-y-3">
                  {whyRetainer.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.07 }}
                    >
                      <span className="w-5 h-5 rounded-full bg-[#01FFFF]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#01FFFF]" />
                      </span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-6 bg-[#0A1A24] border border-cyan-900/40 rounded-2xl p-6">
                <h4 className="text-white font-bold mb-4">{t('maintenance_page.performance_metrics_title')}</h4>
                <div className="grid grid-cols-2 gap-4">
                  {performanceMetrics.map((metric, i) => {
                    const Icon = performanceIcons[i]
                    return (
                      <div key={i} className="text-center">
                        <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-[#01FFFF]/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#01FFFF]" />
                        </div>
                        <div className="text-[#01FFFF] font-bold text-lg">{metric.value}</div>
                        <div className="text-gray-500 text-xs">{metric.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-3">{t('maintenance_page.whats_included_title')}</h2>
            <p className="text-gray-400 text-lg">{t('maintenance_page.whats_included_desc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {included.map((item, i) => {
              const Icon = includedIcons[i]
              return (
                <motion.div
                  key={item.title}
                  className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#01FFFF]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#01FFFF]" />
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#01FFFF] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <div className="bg-[#01FFFF]/5 rounded-lg p-3 border border-[#01FFFF]/10">
                    <p className="text-[#01FFFF] text-xs font-medium">{item.benefit}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-3">{t('maintenance_page.plans_title')}</h2>
            <p className="text-gray-400 text-lg">{t('maintenance_page.plans_desc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`rounded-2xl p-7 border transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-b from-[#01FFFF]/10 to-[#0A1A24] border-[#01FFFF]/40 shadow-[0_0_40px_rgba(1,255,255,0.1)]"
                    : "bg-[#0A1A24] border-cyan-900/30"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {plan.highlight && (
                  <span className="inline-block bg-[#01FFFF] text-[#07141C] text-xs font-black px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                    {t('maintenance_page.popular')}
                  </span>
                )}
                <h3 className="text-white font-black text-2xl mb-1">{plan.name}</h3>
                <p className="text-[#01FFFF] font-semibold text-sm mb-1">{plan.hours}</p>
                <p className="text-gray-500 text-xs mb-4">{plan.ideal}</p>
                <div className="bg-[#01FFFF]/5 rounded-lg p-3 mb-6 border border-[#01FFFF]/10">
                  <p className="text-[#01FFFF] text-xs font-medium">{plan.useCase}</p>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#01FFFF] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Task Examples */}
                <div className="mb-6">
                  <h4 className="text-gray-400 text-xs font-semibold mb-3 uppercase tracking-wider">{t('maintenance_page.task_examples')}</h4>
                  <div className="space-y-1.5">
                    {plan.task_examples.map((task, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#01FFFF]/60 flex-shrink-0" />
                        <span className="text-gray-400 text-xs">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link href="/contact#contact-form" className="block mt-8">
                  <motion.button
                    className={`w-full py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 ${
                      plan.highlight
                        ? "bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] shadow-lg shadow-cyan-500/20"
                        : "border border-[#01FFFF]/40 text-[#01FFFF] hover:bg-[#01FFFF]/10 transition-colors"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {plan.name === "Basic" ? t('maintenance_page.plan_buttons.basic') : 
                     plan.name === "Growth" ? t('maintenance_page.plan_buttons.growth') : 
                     t('maintenance_page.plan_buttons.pro')} <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-500 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('maintenance_page.custom_plan_note')}
          </motion.p>
        </div>
      </section>

      {/* Service Add-ons */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-3">{t('maintenance_page.addons_title')}</h2>
            <p className="text-gray-400 text-lg">{t('maintenance_page.addons_desc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addOn, i) => {
              const Icon = addOnIcons[i]
              return (
                <motion.div
                  key={i}
                  className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#01FFFF]" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{addOn.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{addOn.desc}</p>
                  <div className="text-[#01FFFF] font-bold text-lg">{addOn.price}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

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
                <div className="bg-[#01FFFF]/10 border border-[#01FFFF]/30 rounded-full px-4 py-2 inline-block mb-6">
                <span className="text-[#01FFFF] text-xs font-bold uppercase tracking-widest">{t('maintenance_page.cta_badge')}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{t('maintenance_page.cta_title')}</h3>
              <p className="text-gray-300 text-lg mb-4 max-w-xl mx-auto">
                {t('maintenance_page.cta_desc')}
              </p>
              <p className="text-[#01FFFF] font-semibold mb-10">
                {t('maintenance_page.cta_subtext')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-6 rounded-full text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(1,255,255,0.5)" }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Calendar className="w-4 h-4" />
                    {t('maintenance_page.cta_buttons.consultation')}
                  </motion.button>
                </Link>
                <Link href="/contact#contact-form">
                  <motion.button
                    className="border-2 border-[#01FFFF]/60 text-[#01FFFF] font-bold py-3 px-6 rounded-full text-sm hover:bg-[#01FFFF]/10 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <MessageSquare className="w-4 h-4" />
                    {t('maintenance_page.cta_buttons.proposal')}
                  </motion.button>
                </Link>
                <a href="tel:+302681303007">
                  <motion.button
                    className="border-2 border-[#01FFFF]/60 text-[#01FFFF] font-bold py-3 px-6 rounded-full text-sm hover:bg-[#01FFFF]/10 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Phone className="w-4 h-4" />
                    {t('maintenance_page.cta_buttons.call')}
                  </motion.button>
                </a>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">
                  {t('maintenance_page.existing_site_note')}
                </p>
                <p className="text-gray-500 text-xs">
                  {t('maintenance_page.existing_site_subnote')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default MaintenanceClient
