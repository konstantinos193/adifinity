"use client"

import { motion } from "framer-motion"
import { RefreshCw, ShieldCheck, Zap, GitPullRequest, Bell, Headphones, ArrowRight, Check, Star, Clock, Users, TrendingUp, Award, MessageSquare, Phone, Calendar, BarChart3, Activity, Shield, Cpu, Globe, ZapOff } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"

const included = [
  {
    icon: GitPullRequest,
    title: "Νέα Features & Αλλαγές",
    desc: "Προσθήκη νέων σελίδων, sections, φορμών ή λειτουργιών. Όσες αλλαγές χρειάζεστε εντός του retainer budget σας.",
    benefit: "Αυξήστε τις conversions με νέα features χωρίς να ανησυχείτε για το technical implementation"
  },
  {
    icon: ShieldCheck,
    title: "Security Updates",
    desc: "Ενημερώσεις dependencies, patching vulnerabilities, monitoring για unusual activity. Το site σας παραμένει ασφαλές.",
    benefit: "Προστατέψτε τα δεδομένα των πελατών σας και διατηρήστε την εμπιστοσύνη τους"
  },
  {
    icon: Zap,
    title: "Performance Monitoring",
    desc: "Παρακολούθηση Core Web Vitals, uptime monitoring, Lighthouse scores. Alerts αν κάτι χαλάσει.",
    benefit: "Μέγιστο uptime και γρήγορη απόδοση για καλύτερη εμπειρία χρήστη και SEO"
  },
  {
    icon: RefreshCw,
    title: "Dependency Management",
    desc: "Ενημερώσεις Next.js, React, packages. Compatibility testing μετά από κάθε update.",
    benefit: "Μείνετε updated με τις τελευταίες τεχνολογίες χωρίς compatibility προβλήματα"
  },
  {
    icon: Bell,
    title: "Uptime Alerts",
    desc: "24/7 monitoring. Αν το site πέσει, ειδοποιούμαστε αμέσως και το επαναφέρουμε.",
    benefit: "Άμεση ανταπόκριση σε downtime για να μη χάνετε πελάτες και έσοδα"
  },
  {
    icon: Headphones,
    title: "Priority Support",
    desc: "Direct access στον developer. Απαντάμε σε ερωτήσεις και bugs με priority handling.",
    benefit: "Γρήγορες λύσεις στα προβλήματά σας χωρίς αναμονή και καθυστερήσεις"
  },
]

const plans = [
  {
    name: "Basic",
    hours: "2 ώρες/μήνα",
    ideal: "Για μικρές ιστοσελίδες",
    useCase: "Βασική συντήρηση και security updates.",
    features: [
      "2 ώρες development/μήνα",
      "Security updates",
      "Uptime monitoring",
      "Email support (48h)",
    ],
    taskExamples: [
      "Contact forms",
      "Αλλαγές κειμένων",
      "Security checks",
      "Basic fixes"
    ],
    highlight: false,
  },
  {
    name: "Growth",
    hours: "5 ώρες/μήνα",
    ideal: "Για εταιρικές ιστοσελίδες",
    useCase: "Τακτικά updates και performance monitoring.",
    features: [
      "5 ώρες development/μήνα",
      "Security updates",
      "Performance monitoring",
      "Priority support (24h)",
      "Monthly reports",
    ],
    taskExamples: [
      "Νέες σελίδες",
      "Content updates",
      "Performance fixes",
      "UX improvements"
    ],
    highlight: true,
  },
  {
    name: "Pro",
    hours: "10 ώρες/μήνα",
    ideal: "Για web apps & e-shops",
    useCase: "Πλήρης υποστήριξη για high traffic.",
    features: [
      "10 ώρες development/μήνα",
      "Security updates",
      "Full monitoring",
      "Priority support (4h)",
      "Weekly check-ins",
    ],
    taskExamples: [
      "Custom features",
      "API integrations",
      "Advanced UX",
      "Strategy meetings"
    ],
    highlight: false,
  },
]

const whyRetainer = [
  "Δεν χρειάζεται να βρίσκετε developer κάθε φορά",
  "Γνωρίζουμε ήδη τον κώδικα — χωρίς onboarding χρόνο",
  "Προτεραιότητα έναντι νέων πελατών",
  "Σταθερό κόστος — χωρίς εκπλήξεις",
  "Το site σας εξελίσσεται μαζί με την επιχείρησή σας",
  "Ένα σημείο επικοινωνίας για όλα",
]

const testimonials = [
  {
    name: "Γιάννης Παπαδόπουλος",
    company: "Tech Solutions SA",
    content: "Χάρη στο ongoing maintenance της adinfinity, έχουμε σταθερά βελτιώσει την απόδοση του site μας και δεν ανησυούμε ποτέ για απρόσμενο downtime.",
    rating: 5,
    results: "99.9% uptime, 40% γρηγορότερος loading χρόνος"
  },
  {
    name: "Ελένη Νικολάου",
    company: "E-Shop Plus",
    content: "Το retainer μας έσωσε από πολλές κρίσεις. Η άμεση υποστήριξη και τα τακτικά updates κράτησαν το e-shop μας να λειτουργεί άψογα κατά τις peak περιόδους.",
    rating: 5,
    results: "25% αύξηση conversions, μηδενικά security θέματα"
  },
  {
    name: "Μιχάλης Γεωργίου",
    company: "Startup Hub",
    content: "Η ομάδα της adinfinity δεν μας έκανε απλά maintenance, αλλά μας βοήθησε να στρατηγική εξελίξουμε το platform μας μαζί με την ανάπτυξη της επιχείρησής μας.",
    rating: 5,
    results: "3 κυρίως features λανσαρισμένα, 50% αύξηση χρηστών"
  }
]

const addOns = [
  {
    name: "Emergency Support",
    desc: "Άμεση υποστήριξη για κρίσιμα ζητήματα εκτός ωραρίου",
    price: "Διαθέσιμο 24/7",
    icon: ZapOff
  },
  {
    name: "Extra Development Hours",
    desc: "Πρόσθετες ώρες development όταν χρειάζεστε περισσότερες από τις included",
    price: "Ευέλικτη Προσθήκη",
    icon: Clock
  },
  {
    name: "SEO Optimization",
    desc: "Μηνιαίο SEO audit και optimization",
    price: "Μηνιαία Βελτιστοποίηση",
    icon: TrendingUp
  }
]

const performanceMetrics = [
  { label: "Μέσο Uptime", value: "99.9%", icon: Activity },
  { label: "Χρόνος Απόκρισης", value: "<4 ώρες", icon: Clock },
  { label: "Ικανοποίηση Πελατών", value: "4.9/5", icon: Star },
  { label: "Επιλυμένα Θέματα", value: "500+", icon: Check }
]

export default function MaintenancePage() {
  const [selectedPlans, setSelectedPlans] = useState(["Basic", "Growth", "Pro"])
  const [showComparison, setShowComparison] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)

  const togglePlan = (planName: string) => {
    setSelectedPlans(prev => 
      prev.includes(planName) 
        ? prev.filter(p => p !== planName)
        : [...prev, planName]
    )
  }

  const filteredPlans = plans.filter(plan => selectedPlans.includes(plan.name))

  // Handle scroll for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 500)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Web Maintenance & Support | Συντήρηση Ιστοσελίδων | Retainer Services | adinfinity</title>
        <meta name="description" content="Professional web maintenance and support services για Greek market. Security updates, performance monitoring, ongoing development. Retainer plans για συνεχή υποστήριξη." />
        <meta name="keywords" content="web maintenance, συντηρηση ιστοσελιδων, website support, security updates, performance monitoring, retainer services, greek web developer, διαφημιστικε ιστοσελιδες, κατασκευη ιστοσελιδων, web development, ongoing support, adfinity, adinity, συνεχης υποστηριξη" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#07141C" />
        <link rel="canonical" href="https://adinfinity.gr/website-development/maintenance" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Web Maintenance & Support | Συντήρηση Ιστοσελίδων | Retainer Services | adinfinity" />
        <meta property="og:description" content="Professional web maintenance and support services για Greek market. Security updates, performance monitoring, ongoing development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adinfinity.gr/website-development/maintenance" />
        <meta property="og:image" content="https://adinfinity.gr/images/og-image.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="adinfinity" />
        <meta name="language" content="el" />
      </Head>
      
      <main className="min-h-screen bg-[#07141C]">
      {/* Sticky CTA */}
      {showStickyCTA && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#0A1A24] border border-[#01FFFF]/40 rounded-full px-6 py-3 shadow-2xl shadow-cyan-500/20"
        >
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-sm">Ενδιαφέρεστε για maintenance;</span>
            <Link href="/contact#contact-form">
              <motion.button
                className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-2 px-6 rounded-full text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ζητήστε Προσφορά <ArrowRight className="w-3 h-3" />
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
                Συνεχής Dev · Monitoring · Support
              </span>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                <span className="text-white">Maintenance</span><br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">&amp; Retainer</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                <span className="text-[#01FFFF] font-semibold">Συνεχής Web Maintenance & Support</span> για να διατηρείτε το site σας στο καλύτερο δυνατό.
                Εξασφαλίστε ομαλή λειτουργία και ανάπτυξη μαζί με την επιχείρησή σας — χωρίς να ψάχνετε developer κάθε φορά.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3.5 px-8 rounded-full text-base shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                    whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,255,255,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Ζητήστε Προσφορά <ArrowRight className="w-4 h-4" />
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
                <h3 className="text-white font-bold text-lg mb-6">Γιατί retainer αντί για one-off;</h3>
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
                <h4 className="text-white font-bold mb-4">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {performanceMetrics.map((metric, i) => {
                    const Icon = metric.icon
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
            <h2 className="text-4xl font-black text-white mb-3">Τι περιλαμβάνει</h2>
            <p className="text-gray-400 text-lg">Κάθε retainer καλύπτει αυτές τις ανάγκες.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {included.map((item, i) => {
              const Icon = item.icon
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
            <h2 className="text-4xl font-black text-white mb-3">Επίπεδα Retainer</h2>
            <p className="text-gray-400 text-lg">Χρειάζεστε custom retainer; Επικοινωνήστε μαζί μας.</p>
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
                    Δημοφιλές
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
                  <h4 className="text-gray-400 text-xs font-semibold mb-3 uppercase tracking-wider">Παραδείγματα Εργασιών</h4>
                  <div className="space-y-1.5">
                    {plan.taskExamples.map((task, i) => (
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
                    {plan.name === "Basic" ? "Προγραμματίστε Basic Plan" : 
                     plan.name === "Growth" ? "Αναπτύξτε με Growth Plan" : 
                     "Κορυφαία Απόδοση με Pro"} <ArrowRight className="w-4 h-4" />
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
            Χρειάζεστε custom retainer; Επικοινωνήστε μαζί μας για tailored πρόταση.
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
            <h2 className="text-4xl font-black text-white mb-3">Service Add-ons</h2>
            <p className="text-gray-400 text-lg">Ενισχύστε το retainer σας με επιπλέον υπηρεσίες</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addOn, i) => {
              const Icon = addOn.icon
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
                <span className="text-[#01FFFF] text-xs font-bold uppercase tracking-widest">Περιορισμένη Προσφορά</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Ασφαλίστε την τιμολόγηση του 2026</h3>
              <p className="text-gray-300 text-lg mb-4 max-w-xl mx-auto">
                Κλειδώστε το retainer plan σας πριν τις αυξήσεις. Ξεκινήστε με δωρεάν ανάλυση του site σας.
              </p>
              <p className="text-[#01FFFF] font-semibold mb-10">
                Κλείστε Δωρεάν Συμβουλευτική - Περιορισμένες θέσεις διαθέσιμες
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-6 rounded-full text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(1,255,255,0.5)" }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Calendar className="w-4 h-4" />
                    Δωρεάν Συμβουλευτική
                  </motion.button>
                </Link>
                <Link href="/contact#contact-form">
                  <motion.button
                    className="border-2 border-[#01FFFF]/60 text-[#01FFFF] font-bold py-3 px-6 rounded-full text-sm hover:bg-[#01FFFF]/10 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Προσαρμοσμένη Πρόταση
                  </motion.button>
                </Link>
                <a href="tel:+302681303007">
                  <motion.button
                    className="border-2 border-[#01FFFF]/60 text-[#01FFFF] font-bold py-3 px-6 rounded-full text-sm hover:bg-[#01FFFF]/10 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Phone className="w-4 h-4" />
                    Καλέστε Τώρα
                  </motion.button>
                </a>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">
                  Έχετε ήδη site που χρειάζεται συντήρηση;
                </p>
                <p className="text-gray-500 text-xs">
                  Δεν χρειάζεται να το έχουμε φτιάξει εμείς. Αναλαμβάνουμε τη συντήρηση και εξέλιξη οποιουδήποτε Next.js site.
                </p>
              </div>
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
            "name": "Web Maintenance & Support Services",
            "description": "Professional web maintenance, security updates, performance monitoring, and ongoing development support for websites.",
            "provider": {
              "@type": "Organization",
              "name": "adinfinity",
              "url": "https://adinfinity.gr",
              "telephone": "+30-2681-303007"
            },
            "serviceType": "Website Maintenance",
            "areaServed": {
              "@type": "Country",
              "name": "Greece"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Maintenance Plans",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Basic Maintenance Plan",
                    "description": "2 hours/month development time, security updates, uptime monitoring"
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
                    "name": "Growth Maintenance Plan",
                    "description": "5 hours/month development time, priority support, monthly reports"
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
                    "name": "Pro Maintenance Plan",
                    "description": "10 hours/month development time, full monitoring, weekly check-ins"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "priceCurrency": "EUR"
                  }
                }
              ]
            }
          })
        }}
      />

    </main>
    </>
  )
}
