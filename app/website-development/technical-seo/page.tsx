"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Search, Zap, BarChart3, Code2, Globe, FileText, ArrowRight, Check, Star, Quote, Phone, Award, TrendingUp, Clock, Target, Shield, AlertCircle, Info } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

// Disable Framer Motion SSR warnings
if (typeof window === "undefined") {
  (motion as any).useReducedMotion = true
}

const audits = [
  { icon: Zap, title: "Core Web Vitals", desc: "LCP, FID, CLS — τα metrics που μετρά η Google για ranking. Optimizations για sub-2s load." },
  { icon: Code2, title: "Schema Markup", desc: "Structured data (JSON-LD) για rich results στη Google — ratings, FAQs, breadcrumbs." },
  { icon: Globe, title: "Crawlability", desc: "Sitemap, robots.txt, canonical tags, internal linking. Η Google βλέπει ακριβώς τι θέλετε." },
  { icon: BarChart3, title: "Lighthouse Audit", desc: "Performance, Accessibility, Best Practices, SEO score. Στοχεύουμε 90+ σε όλες τις κατηγορίες." },
  { icon: FileText, title: "On-page SEO", desc: "Titles, meta descriptions, H1-H6 hierarchy, keyword optimization, image alt texts." },
  { icon: Search, title: "Technical Fixes", desc: "Broken links, redirect chains, duplicate content, mobile usability issues — όλα διορθωμένα." },
]

const process = [
  { step: "01", title: "Audit", desc: "Πλήρης technical audit με Lighthouse, Google Search Console και Screaming Frog." },
  { step: "02", title: "Ανάλυση", desc: "Εντοπισμός των κρίσιμων προβλημάτων που επηρεάζουν περισσότερο το ranking σας." },
  { step: "03", title: "Υλοποίηση", desc: "Διορθώσεις απευθείας στον κώδικα — όχι plugins, όχι workarounds." },
  { step: "04", title: "Monitoring", desc: "Παρακολούθηση αποτελεσμάτων στο Google Search Console για 30 ημέρες post-implementation." },
]

const caseStudies: Array<{company: string, industry: string, before: any, after: any, timeframe: string, quote: string}> = []

const testimonials: Array<{name: string, company: string, text: string, rating: number}> = []

const expectedResults = [
  { icon: TrendingUp, title: "+40 Positions", desc: "Μέσος όρος βελτίωσης θέσεων μετά από technical SEO fixes" },
  { icon: Clock, title: "-60% Load Time", desc: "Γρηγορότεροι χρόνοι φόρτωσης για καλύτερη user experience" },
  { icon: Target, title: "+200% Traffic", desc: "Αύξηση organic traffic μέσω καλύτερου ranking" },
  { icon: Shield, title: "100% Compliance", desc: "Πλήρης συμμόρφωση με Google guidelines και best practices" },
]

const tools = [
  { name: "Lighthouse", category: "Performance Testing", description: "Core Web Vitals και performance metrics" },
  { name: "Google Search Console", category: "Monitoring", description: "Rankings και indexing data" },
  { name: "Screaming Frog", category: "Crawling", description: "Comprehensive site audit" },
  { name: "PageSpeed Insights", category: "Speed Analysis", description: "Mobile και desktop performance" },
  { name: "GTmetrix", category: "Performance", description: "Detailed speed optimization" },
  { name: "Schema.org Validator", category: "Schema", description: "Structured data validation" },
]

const faqs = [
  {
    q: "Πόσο χρόνο παίρνει ένα technical SEO audit;",
    a: "Ένα πλήρες technical audit συνήθως ολοκληρώνεται σε 2-3 εργάσιμες ημέρες. Οι διορθώσεις μπορεί να πάρουν 1-2 εβδομάδες ανάλογα με την πολυπλοκότητα."
  },
  {
    q: "Τι διαφορά έχει από άλλες SEO υπηρεσίες;",
    a: "Εμείς διορθώνουμε προβλήματα απευθείας στον κώδικα, όχι με plugins. Αυτό εξασφαλίζει μακροπρόθεσμα αποτελέσματα χωρίς εξαρτήσεις από third-party tools."
  },
  {
    q: "Θα δω άμεσα αποτελέσματα;",
    a: "Οι τεχνικές βελτιώσεις συνήθως φαίνονται σε 2-4 εβδομάδες. Μερικοί clients είδαν βελτίωση μέσα σε 10 ημέρες."
  },
  {
    q: "Περιλαμβάνετε post-audit support;",
    a: "Ναι, παρακολουθούμε τα αποτελέσματα για 30 ημέρες μετά την υλοποίηση και παρέχουμε υποστήριξη για οποιαδήποτε ερώτηση."
  },
]

export default function TechnicalSEOPage() {
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [showScoreDemo, setShowScoreDemo] = useState(false)
  const [isClient, setIsClient] = useState(false)

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
        <title>Technical SEO Services | Core Web Vitals | Τεχνικό SEO | adinfinity</title>
        <meta name="description" content="Technical SEO optimization για Greek market. Core Web Vitals, schema markup, Lighthouse audit. Code-level fixes χωρίς plugins. Βελτιστοποίηση για Google rankings." />
        <meta name="keywords" content="technical SEO, core web vitals, schema markup, SEO optimization, greek SEO, SEO services, Lighthouse audit, Google Search Console, crawling optimization, SEO audit, react development, nextjs, adfinity, adinity, τεχνικο SEO, βελτιστοποιηση SEO, Google ranking, SEO analysis, page speed optimization, structured data, SEO Greece, search engine optimization" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#07141C" />
        <link rel="canonical" href="https://adinfinity.gr/website-development/technical-seo" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Technical SEO Services | Core Web Vitals | Τεχνικό SEO | adinfinity" />
        <meta property="og:description" content="Technical SEO optimization για Greek market. Core Web Vitals, schema markup, Lighthouse audit." />
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
                <span className="whitespace-nowrap">Δωρεάν SEO Audit</span>
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
                  <span>2681 303007</span>
                </motion.button>
              </a>
              <div className="w-3"></div>
              <Link href="/contact#contact-form" className="flex-1">
                <motion.button
                  className="w-full bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Δωρεάν SEO Audit</span>
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
                Core Web Vitals · Schema · Speed · Rankings
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
                  Optimization
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Η τεχνική βάση για top Google rankings. <span className="text-[#01FFFF] font-semibold">Core Web Vitals, schema markup, speed optimization</span> — διορθώσεις απευθείας στον κώδικα, όχι plugins.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Link href="/contact#contact-form">
                  <motion.button className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3.5 px-8 rounded-full text-base shadow-lg shadow-cyan-500/20 flex items-center gap-2 group" whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,255,255,0.4)" }} whileTap={{ scale: 0.97 }}>
                    <span className="group-hover:translate-x-1 transition-transform">Ζητήστε SEO Audit</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <a href="tel:+302681303007">
                  <motion.button className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3.5 px-8 rounded-full text-base hover:bg-[#01FFFF]/10 transition-all group" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Phone className="w-4 h-4 inline mr-2" />
                    2681 303007
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
                  <span className="text-[#01FFFF] font-semibold">Μοναδική Προσέγγιση</span>
                </div>
                <p className="text-gray-400 text-sm">Αντί για plugins, διορθώνουμε απευθείας τον κώδικα για μακροπρόθεσμα αποτελέσματα.</p>
              </motion.div>
            </motion.div>

            {/* Enhanced Score visual */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="hidden lg:block">
              <div className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-500 text-xs uppercase tracking-widest">Lighthouse Score Target</p>
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
                    { label: "Απόδοση", score: "95+", tooltip: "Χρόνος φόρτωσης < 2s" },
                    { label: "Προσβασιμότητα", score: "98+", tooltip: "WCAG 2.1 AA" },
                    { label: "Βέλτιστες Πρακτικές", score: "100", tooltip: "Σύγχρονες web standards" },
                    { label: "SEO", score: "100", tooltip: "Τέλεια βελτιστοποίηση" },
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
                    <p className="text-gray-400 text-sm">Μέσος όρος improvement:</p>
                    <span className="text-[#01FFFF] font-bold text-lg">+40 positions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-sm">Χρόνος για αποτελέσματα:</p>
                    <span className="text-[#01FFFF] font-bold text-lg">2-4 εβδομάδες</span>
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
                      <p className="text-gray-400 text-xs mb-3">Τι σημαίνουν αυτά τα scores:</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300 text-xs">Απόδοση: Γρήγοροι χρόνοι φόρτωσης (&lt; 2s)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300 text-xs">Προσβασιμότητα: Πλήρης προσβασιμότητα για όλους</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300 text-xs">Βέλτιστες Πρακτικές: Σύγχρονος, ασφαλής κώδικας</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300 text-xs">SEO: Τέλεια βελτιστοποίηση για Google</span>
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
            <h2 className="text-4xl font-black text-white mb-3">Τι βελτιστοποιούμε</h2>
            <p className="text-gray-400 text-lg">Κάθε τεχνικό πρόβλημα που επηρεάζει το ranking σας.</p>
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
            <h2 className="text-4xl font-black text-white mb-3">Πώς δουλεύουμε</h2>
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
            <h2 className="text-4xl font-black text-white mb-3">Τι να Περιμένετε</h2>
            <p className="text-gray-400 text-lg">Μετρήσιμα αποτελέσματα που παραδίδουμε σε κάθε project.</p>
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
            <h2 className="text-4xl font-black text-white mb-3">Εργαλεία που Χρησιμοποιούμε</h2>
            <p className="text-gray-400 text-lg">Τα πιο σύγχρονα SEO tools για data-backed αποτελέσματα.</p>
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
            <h2 className="text-4xl font-black text-white mb-3">Συχνές Ερωτήσεις</h2>
            <p className="text-gray-400 text-lg">Όλα όσα χρειάζεται να ξέρετε για technical SEO.</p>
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
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Θέλετε δωρεάν SEO audit;</h3>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">Στείλτε μας το URL σας και σας στέλνουμε πλήρη technical SEO report εντός 24 ωρών.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact#contact-form">
                  <motion.button className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-cyan-500/20 flex items-center gap-2 justify-center" whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(1,255,255,0.5)" }} whileTap={{ scale: 0.96 }}>
                    Δωρεάν SEO Audit <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <a href="tel:+302681303007">
                  <motion.button className="border-2 border-[#01FFFF]/60 text-[#01FFFF] font-bold py-4 px-10 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                    2681 303007
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
