"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Zap, Target, TrendingUp, Smartphone, Search, MousePointer, ArrowRight, Check, ChevronRight, Phone, Moon, Sun, Menu, X, Star, Quote, Rocket, Shield } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

const features = [
  {
    icon: Zap,
    title: "Χρόνος Φόρτωσης < 1s",
    desc: "Next.js static generation + image optimization = κεραυνοβόλα απόδοση. Οι μηχανές αναζήτησης και οι επισκέπτες αγαπούν τις γρήγορες σελίδες.",
  },
  {
    icon: Target,
    title: "Design Εστιασμένο σε Μετατροπές",
    desc: "Δομικός σχεδιασμός με αποδεδειγμένα στοιχεία όπως hero section, social proof, CTAs, και επείγοντα για οδήγηση μετατροπών.",
  },
  {
    icon: TrendingUp,
    title: "Έτοιμο για Google Ads",
    desc: "Tracking pixels, conversion events, και υποστήριξη A/B testing. Μεγιστοποιήστε το ROI των διαφημίσεών σας.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Σχεδιασμός",
    desc: "Πάνω από 70% της κίνησης έρχεται από κινητά. Οι σχεδιασμοί μας είναι βελτιστοποιημένοι πρώτα για κινητά, μετά για desktop.",
  },
  {
    icon: Search,
    title: "Τεχνική Βάση SEO",
    desc: "Έτοιμο για οργανική κίνηση με Schema markup, meta tags, Open Graph, και sitemap.",
  },
  {
    icon: MousePointer,
    title: "Analytics & Heatmaps",
    desc: "Ενσωμάτωση με Google Analytics 4, Meta Pixel, και Hotjar για παρακολούθηση αλληλεπιδράσεων χρηστών και βελτιστοποίηση απόδοσης.",
  },
]

const useCases = [
  { title: "Google / Meta Ads", desc: "Δημιουργήστε εξειδικευμένη landing page για κάθε καμπάνια για βελτίωση Quality Score και μείωση CPC." },
  { title: "Νέες Κυκλοφορίες Προϊόντων", desc: "Παρουσιάστε νέο προϊόν ή υπηρεσία με launch page πριν το πλήρες website είναι ζωντανό." },
  { title: "Εγγραφές Events / Webinars", desc: "Προωθήστε events με countdowns, social proof, και φόρμα συλλογής emails." },
  { title: "Lead Generation", desc: "Συλλέξτε leads με υψηλής μετατροπής φόρμες επικοινωνίας ή αιτήσεις προσφορών." },
  { title: "Εποχιακές Καμπάνιες", desc: "Δημιουργήστε φρέσκες landing pages για εκδηλώσεις όπως Black Friday, Πάσχα, Καλοκαίρι, κλπ." },
  { title: "Startup MVP", desc: "Coming Soon ή Waitlist Pages για μέτρηση ενδιαφέροντος πριν την κατασκευή πλήρους προϊόντος." },
]

const deliverables = [
  {
    title: "Custom Design σε Figma",
    items: ["Προσαρμοσμένο στο brand και τους στόχους σας.", "Έγκριση σχεδιασμού πριν την έναρξη κώδικα."],
  },
  {
    title: "Next.js Development",
    items: ["Γρήγορες, static σελίδες για βέλτιστη απόδοση SEO και ταχύτητα.", "Πλήρως mobile-responsive, εξασφαλίζοντας εξαιρετική εμπειρία χρήστη σε όλες τις συσκευές."],
  },
  {
    title: "Google Analytics 4 Setup",
    items: ["Conversion tracking setup από την πρώτη μέρα.", "Meta Pixel ενσωμάτωση (αν χρειάζεται) για Facebook και Instagram καμπάνιες."],
  },
  {
    title: "SSL + Deployment",
    items: ["Ασφαλής και γρήγορη deployment σε Vercel ή preferred hosting."],
  },
  {
    title: "1 Μήνας Δωρεάν Μικρών Αλλαγών",
    items: ["Εξασφαλίζουμε ομαλή λειτουργία post-launch με μικρές προσαρμογές όπως χρειάζεται."],
  },
]

const whyUs = [
  { title: "Αποδεδειγμένη Απόδοση", desc: "Γρήγορες, mobile-first σελίδες που οδηγούν σε μετατροπές." },
  { title: "Πλήρης Διαφάνεια", desc: "Εγκρίνετε τον σχεδιασμό πριν ξεκινήσουμε τον κώδικα." },
  { title: "Υποστήριξη Post-Launch", desc: "Ένας μήνας προσαρμογών για ομαλή λειτουργία." },
]

const faqs = [
  {
    q: "Πόσο χρόνο παίρνει η δημιουργία μιας landing page;",
    a: "Μια custom landing page συνήθως παραδίδεται σε 3-5 εργάσιμες ημέρες, ανάλογα με την πολυπλοκότητα και τις απαιτήσεις."
  },
  {
    q: "Ποια είναι η διαφορά μεταξύ landing page και ιστοσελίδας;",
    a: "Η landing page είναι εξειδικευμένη σελίδα για μία συγκεκριμένη ενέργεια (π.χ. καμπάνια), ενώ η ιστοσελίδα είναι η πλήρης online παρουσία της επιχείρησης."
  },
  {
    q: "Μπορώ να χρησιμοποιήσω τη landing page για Google Ads;",
    a: "Απολύτως! Οι landing pages μας είναι βελτιστοποιημένες για Google Ads με υψηλό Quality Score και γρήγορους χρόνους φόρτωσης."
  },
  {
    q: "Παρέχετε υποστήριξη μετά την παράδοση;",
    a: "Ναι, παρέχουμε 1 μήνα δωρεάν υποστήριξης για μικρές αλλαγές και διασφάλιση ομαλής λειτουργίας."
  },
]

export default function LandingPagesPage() {
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Landing Pages Development | Υψηλές Μετατροπές | Google Ads Ready | adinfinity</title>
        <meta name="description" content="Custom landing pages για Google Ads και conversion optimization. Next.js, mobile-first design, SEO ready. Greek market expertise για high-converting pages." />
        <meta name="keywords" content="landing pages, conversion optimization, google ads, custom landing pages, react development, nextjs, greek web developer, διαφημιστικε ιστοσελιδες, κατασκευη ιστοσελιδων, web development, SEO optimization, adfinity, adinity, mobile first, σελιδες προσοσης, βελτιστοποιηση μετατροπων, google ads campaigns, διαφημιστικες καμπανιες, lead generation, conversion rate optimization, digital marketing" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#07141C" />
        <link rel="canonical" href="https://adinfinity.gr/website-development/landing-pages" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Landing Pages Development | Υψηλές Μετατροπές | Google Ads Ready | adinfinity" />
        <meta property="og:description" content="Custom landing pages για Google Ads και conversion optimization. Next.js, mobile-first design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adinfinity.gr/website-development/landing-pages" />
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
                <span className="whitespace-nowrap">Ζητήστε Προσφορά</span>
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
                  <span>Ζητήστε Προσφορά</span>
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
                Γρήγορες · SEO-Ready · Εστιασμένες σε Μετατροπές
              </motion.span>
              
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                <motion.span 
                  className="text-white block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Custom
                </motion.span>
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Landing Pages
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Σχεδιάζουμε custom landing pages φτιαγμένες σε <span className="text-[#01FFFF] font-semibold">Next.js</span> που είναι γρήγορες, φιλικές προς SEO και βελτιστοποιημένες για να μετατρέπουν επισκέπτες σε leads. Τέλειες για Google Ads καμπάνιες, κυκλοφορίες προϊόντων, ή οποιονδήποτε marketing στόχο.
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
                    <span className="group-hover:translate-x-1 transition-transform">Ζητήστε Προσφορά</span>
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
                    2681 303007
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
                <h3 className="text-white font-bold text-lg mb-6">Τι Παραδίδουμε</h3>
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
                        <span className="text-white text-sm font-semibold">{group.title}</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        {group.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <ChevronRight className="w-3 h-3 text-[#01FFFF]/50 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-400 text-xs leading-relaxed">{item}</span>
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
            <h2 className="text-4xl font-black text-white mb-3">Φτιαγμένες για Απόδοση</h2>
            <p className="text-gray-400 text-lg">Κάθε landing page χτίζεται με βάση αυτές τις αρχές.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon
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
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
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
            <h2 className="text-4xl font-black text-white mb-3">Πότε Χρειάζεστε Landing Page;</h2>
            <p className="text-gray-400 text-lg">Κάθε καμπάνια αξίζει τη δική της εξειδικευμένη σελίδα.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                className="bg-[#0A1A24] border border-cyan-900/30 rounded-xl p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <h3 className="text-[#01FFFF] font-bold mb-2">{uc.title}</h3>
                <p className="text-gray-400 text-sm">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-white mb-3">Γιατί να Επιλέξετε Εμάς;</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-[#0A1A24] border border-[#01FFFF]/20 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-[#01FFFF]/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-5 h-5 text-[#01FFFF]" />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-white mb-3">Συχνές Ερωτήσεις</h2>
            <p className="text-gray-400 text-lg">Όλα όσα χρειάζεται να ξέρετε για landing pages.</p>
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
                  Έτοιμοι να Εκκινήσετε την Καμπάνια σας;
                </h3>
                <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                  Ας συζητήσουμε το επόμενο project σας. Είτε πρόκειται για Google Ads καμπάνια, νέα κυκλοφορία προϊόντος, ή οτιδήποτε ενδιάμεσο, θα έχουμε μια landing page υψηλής μετατροπής λειτουργική σε λίγες μέρες.
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
                    <span className="group-hover:translate-x-1 transition-transform">Ζητήστε Προσφορά</span>
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
                    2681 303007
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
                  <span>24ωρη Απόκριση</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#01FFFF]" />
                  <span>1 Μήνας Υποστήριξη</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-[#01FFFF]" />
                  <span>Γρήγορη Παράδοση</span>
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
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />

    </main>
    </>
  )
}
