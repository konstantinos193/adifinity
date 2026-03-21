"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Code2, Layers, Smartphone, Globe, Palette, ArrowRight, Check, Star, Quote, Phone, Moon, Sun, Menu, X, Zap, Shield, Rocket, TrendingUp, Lock, Database, Cloud, Clock, Users, Award, Calendar, BarChart3, CreditCard } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import Head from "next/head"
import FeatureShowcase from "@/components/ui/FeatureShowcase"

const whatWeDeliver = [
  {
    icon: Globe,
    title: "Εταιρική Ιστοσελίδα",
    desc: "Πλήρης online παρουσία — about, υπηρεσίες, portfolio, blog, επικοινωνία. Custom design, custom code.",
  },
  {
    icon: Layers,
    title: "Multi-page Platforms",
    desc: "Σύνθετες ιστοσελίδες με δεκάδες σελίδες, dynamic content και custom routing.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Κάθε project σχεδιάζεται πρώτα για κινητά — 70%+ traffic έρχεται από mobile.",
  },
  {
    icon: Palette,
    title: "Custom UI/UX",
    desc: "Figma mockups, animation με Framer Motion, unique design που δεν μοιάζει με κανέναν άλλο.",
  },
  {
    icon: Code2,
    title: "Clean, Maintainable Code",
    desc: "TypeScript, component architecture, proper state management. Code που μπορεί να κλιμακωθεί.",
  },
  {
    icon: ArrowRight,
    title: "SEO & Performance",
    desc: "Server-side rendering, image optimization, Core Web Vitals. Γρήγορο από την πρώτη μέρα.",
  },
]

const portfolio = [
  {
    name: "Αστεριας Κορωνησία",
    category: "Hospitality",
    image: "/images/asteriashome-preview.png",
    url: "https://asteriashome.gr",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    metrics: { performance: "95", seo: "92", speed: "1.2s" },
    description: "Custom booking system για ξενοδοχείο με real-time διαθεσιμότητα και online payments."
  },
  {
    name: "ΚΥΚΛΟΣ Εκπαίδευση",
    category: "Education",
    image: "/images/kyklosedu-preview.png",
    url: "https://kyklosedu.gr",
    tags: ["Next.js", "TypeScript", "SEO"],
    metrics: { performance: "98", seo: "94", pages: "50+" },
    description: "Πλήρης εκπαιδευτική πλατφόρμα με course management, student portals και online exams."
  },
  {
    name: "Physio Elpida",
    category: "Healthcare",
    image: "/images/physioelpida-preview.png",
    url: "https://physioelpida.gr",
    tags: ["Next.js", "TypeScript", "Booking"],
    metrics: { performance: "96", seo: "91", bookings: "85%" },
    description: "Patient portal με appointment booking, telemedicine features και HIPAA compliant security."
  },
]

const included = [
  "Custom design σε Figma — εγκρίνετε πριν ξεκινήσει ο κώδικας",
  "Development σε Next.js & TypeScript",
  "Responsive για κινητά, tablet, desktop",
  "SEO on-page (titles, meta, schema, sitemap)",
  "Google Analytics 4 setup",
  "Contact form με email notifications",
  "SSL + deploy σε Vercel ή δικό σας hosting",
  "3 μήνες technical support post-launch",
]

const industries = [
  {
    icon: Globe,
    title: "Φιλοξενία",
    desc: "Booking systems, room management, tour packages - ολοκληρωμένες λύσεις για hotels & rentals.",
    features: ["Online Booking", "Room Management", "Tour Packages", "Multi-language"]
  },
  {
    icon: Code2,
    title: "Εκπαίδευση",
    desc: "E-learning platforms, course management, student portals - ψηφιακή μεταμόρφωση για εκπαιδευτικούς φορείς.",
    features: ["E-learning", "Course Management", "Student Portals", "Online Exams"]
  },
  {
    icon: Shield,
    title: "Υγεία",
    desc: "Patient portals, appointment booking, telemedicine - ασφαλείς λύσεις για ιατρικούς φορείς.",
    features: ["Patient Portals", "Appointment Booking", "Telemedicine", "HIPAA Compliant"]
  },
  {
    icon: Rocket,
    title: "E-commerce",
    desc: "Online shops, payment integration, inventory management - πλήρη e-commerce λύσεις για κάθε επιχείρηση.",
    features: ["Online Shops", "Payment Integration", "Inventory", "Multi-currency"]
  },
]

const faqs = [
  {
    q: "Πόσο χρόνο παίρνει η ανάπτυξη μιας custom ιστοσελίδας;",
    a: "Ένα πλήρες custom website συνήθως ολοκληρώνεται σε 4-8 εβδομάδες, ανάλογα με την πολυπλοκότητα και τις απαιτήσεις."
  },
  {
    q: "Ποια είναι η διαφορά μεταξύ custom website και template;",
    a: "Custom website είναι φτιαγμένο από το μηδέν για τις δικές σας ανάγκες, ενώ τα templates περιορίζονται σε προκαθορισμένα σχέδια και λειτουργίες."
  },
  {
    q: "Παρέχετε υποστήριξη μετά την παράδοση;",
    a: "Ναι, παρέχουμε 3 μήνες δωρεάν τεχνική υποστήριξη και συντήρηση μετά την παράδοση του project."
  },
  {
    q: "Η ιστοσελίδα θα είναι φιλική προς τις μηχανές αναζήτησης;",
    a: "Απολύτως! Όλες οι ιστοσελίδες μας είναι βελτιστοποιημένες για SEO από την πρώτη μέρα με τεχνικές SEO, schema markup και γρήγορους χρόνους φόρτωσης."
  },
  {
    q: "Ποια μέτρα ασφαλείας εφαρμόζετε;",
    a: "Χρησιμοποιούμε end-to-end encryption, OAuth authentication, secure APIs, και τακτικά security updates για μέγιστη προστασία δεδομένων."
  },
  {
    q: "Μπορώ να ενσωματώσω τρίτες υπηρεσίες;",
    a: "Ναι, ενσωματώνουμε payment gateways (Stripe, PayPal), CRM systems, marketing automation tools, και οποιαδήποτε άλλη υπηρεσία χρειάζεστε."
  },
]

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "Όλα τα δεδομένα κρυπτογραφούνται από τον client μέχρι τον server για μέγιστη ασφάλεια."
  },
  {
    icon: Shield,
    title: "OAuth & MFA",
    desc: "Multi-factor authentication και OAuth integration για ασφαλή πρόσβαση χρηστών."
  },
  {
    icon: Database,
    title: "Secure Database",
    desc: "Encrypted databases με τακτικά backups και disaster recovery plans."
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    desc: "AWS/Azure security best practices με DDoS protection και 24/7 monitoring."
  },
]

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    desc: "Ανάλυση απαιτήσεων, competitor research, και τεχνική αρχιτεκτονική.",
    duration: "1-2 εβδομάδες"
  },
  {
    number: "02",
    title: "UX/UI Design",
    desc: "Wireframes, mockups σε Figma, και user testing πριν την ανάπτυξη.",
    duration: "1-2 εβδομάδες"
  },
  {
    number: "03",
    title: "Development",
    desc: "Agile development με τακτικά demos και feedback sessions.",
    duration: "2-4 εβδομάδες"
  },
  {
    number: "04",
    title: "Testing & Launch",
    desc: "QA testing, security audit, deployment και post-launch monitoring.",
    duration: "1 εβδομάδα"
  },
]

const integrations = [
  { name: "Stripe", category: "Payments" },
  { name: "PayPal", category: "Payments" },
  { name: "Google Analytics", category: "Analytics" },
  { name: "Meta Pixel", category: "Marketing" },
  { name: "SendGrid", category: "Email" },
  { name: "Twilio", category: "Communications" },
  { name: "Zapier", category: "Automation" },
  { name: "Slack", category: "Productivity" },
  { name: "Calendly", category: "Booking" },
  { name: "Mailchimp", category: "Email" },
]

const premiumFeatures = [
  {
    title: "Σύστημα Κρατήσεων",
    price: "Ζητήστε Προσφορά",
    description: "Real-time booking engine για ραντεβού, κρατήσεις, υπηρεσίες.",
    features: [
      "Real-time calendar διαθεσιμότητας",
      "Συγχρονισμός ημερολογίου (Google/Outlook)",
      "Αυτόματες επιβεβαιώσεις μέσω email/SMS",
      "Ενσωμάτωση πληρωμών με καταθέσεις",
      "Προγραμματισμός πολλαπλού προσωπικού",
      "Προσαρμοσμένοι κανόνες & περιορισμοί κρατήσεων"
    ],
    icon: Calendar,
    timeline: "2-3 εβδομάδες"
  },
  {
    title: "Admin Dashboard",
    price: "Ζητήστε Προσφορά",
    description: "Custom analytics & management dashboard για business intelligence.",
    features: [
      "Real-time analytics & μέτρικα",
      "Διαχείριση χρηστών & ρόλων",
      "Σύστημα διαχείρισης περιεχομένου",
      "Διαχείριση παραγγελιών/κρατήσεων",
      "Προσαρμοσμένες αναφορές & εξαγωγές",
      "Γραφήματα οπτικοποίησης δεδομένων"
    ],
    icon: BarChart3,
    timeline: "3-4 εβδομάδες"
  },
  {
    title: "Σύστημα Συνδρομών",
    price: "Ζητήστε Προσφορά",
    description: "Recurring revenue platform με πολλαπλά επίπεδα & επεξεργασία πληρωμών.",
    features: [
      "Ευέλικτα πακέτα συνδρομών",
      "Αυτόματη χρέωση & επαναπροσπάθειες",
      "Portal πελατών & self-service",
      "Χρέωση βάσει χρήσης",
      "Dashboard μελών & προφίλ"
    ],
    icon: CreditCard,
    recurring: "Ζητήστε Προσφορά",
    timeline: "4-5 εβδομάδες"
  },
  {
    title: "AI Chatbot",
    price: "Ζητήστε Προσφορά",
    description: "Intelligent customer service automation με AI & επεξεργασία φυσικής γλώσσας.",
    features: [
      "Συνομιλίες με φυσική γλώσσα",
      "Αυτόματη υποστήριξη 24/7",
      "Προσέγγιση & κατηγοριοποίηση leads",
      "Υποστήριξη πολλαπλών γλωσσών",
      "Ενσωμάτωση με CRM"
    ],
    icon: Zap,
    timeline: "6-8 εβδομάδες"
  }
]

export default function CustomWebAppsPage() {
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [expandedCase, setExpandedCase] = useState<string | null>(null)
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
        <title>Custom Web Apps & Εταιρικές Ιστοσελίδες | Ανάπτυξη Web Εφαρμογών | adinfinity</title>
        <meta name="description" content="Custom εταιρικές ιστοσελίδες και web applications σε React & Next.js. Καμία χρήση templates. Mobile-first design, SEO optimization, enterprise security για Greek businesses." />
        <meta name="keywords" content="custom web apps, εταιρικες ιστοσελιδες, react development, nextjs, custom development, greek web developer, διαφημιστικε ιστοσελιδες, γραφικη υποστηριξη, κατασκευη ιστοσελιδων, web development, SEO optimization, custom design, adfinity, adinity, mobile first, custom web solutions, business websites, professional web development, custom applications, enterprise web development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#07141C" />
        <link rel="canonical" href="https://adinfinity.gr/website-development/custom-web-apps" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Custom Web Apps & Εταιρικές Ιστοσελίδες | Ανάπτυξη Web Εφαρμογών | adinfinity" />
        <meta property="og:description" content="Custom εταιρικές ιστοσελίδες και web applications σε React & Next.js. Καμία χρήση templates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adinfinity.gr/website-development/custom-web-apps" />
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
                Next.js · React · TypeScript · Tailwind
              </motion.span>
              
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                <motion.span 
                  className="text-white block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Εταιρικές
                </motion.span>
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Ιστοσελίδες
                </motion.span>
                <motion.span 
                  className="text-white block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  100% Custom
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Κάθε ιστοσελίδα ξεκινά από λευκή σελίδα. Κανένα theme, κανένα template, κανένας page builder —
                μόνο <span className="text-[#01FFFF] font-semibold">React & Next.js</span> γραμμένα ειδικά για Greek market.
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
                <a href="#portfolio">
                  <motion.button
                    className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3.5 px-8 rounded-full text-base hover:bg-[#01FFFF]/10 transition-all group"
                    whileHover={{ scale: 1.04, borderColor: "rgba(1,255,255,0.6)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">Δείτε Projects</span>
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>

            {/* Included checklist */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="hidden lg:block">
              <div className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-6">Κάθε project περιλαμβάνει</h3>
                <div className="space-y-3">
                  {included.map((item, i) => (
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
            <h2 className="text-4xl font-black text-white mb-3">Custom Web Development</h2>
            <p className="text-gray-400 text-lg">Κάθε τύπος custom website που χρειάζεται η Greek επιχείρησή σας.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDeliver.map((item, i) => {
              const Icon = item.icon
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
            <h2 className="text-4xl font-black text-white mb-3">Case Studies & Αποτελέσματα</h2>
            <p className="text-gray-400 text-lg">Real projects — με μετρήσιμα αποτελέσματα για Greek market.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolio.map((p, i) => (
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
                      {p.tags.map((t) => (
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
                        Δείτε Project
                      </motion.a>
                      <motion.button
                        onClick={() => setExpandedCase(expandedCase === p.name ? null : p.name)}
                        className="bg-[#0A1A24] text-gray-300 font-semibold py-2 px-4 rounded-xl border border-cyan-900/40 hover:border-[#01FFFF]/40 transition-colors text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {expandedCase === p.name ? 'Λιγότερα' : 'Περισσότερα'}
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
                              <h4 className="text-white font-semibold mb-1">Τεχνολογίες</h4>
                              <p className="text-gray-400 text-sm">Next.js, TypeScript, Tailwind CSS, Vercel hosting</p>
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-1">Βασικά Χαρακτηριστικά</h4>
                              <p className="text-gray-400 text-sm">{p.description}</p>
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-1">Τεχνικές Μετρήσεις</h4>
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
            <h2 className="text-4xl font-black text-white mb-3">Greek Industry Solutions</h2>
            <p className="text-gray-400 text-lg">Custom λύσεις για κάθε κλάδο — με βαθιά κατανόηση των Greek market αναγκών.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon
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
                        {industry.features.map((feature) => (
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
        title="Premium Features & Add-ons"
        subtitle="Μεταμορφώστε την custom ιστοσελίδα σας με powerful business features που οδηγούν έσοδα και αυτοματισμό."
        features={premiumFeatures}
        ctaText="Προσθήκη στο Project"
        showComparison={true}
      />

      {/* FAQ Section */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <motion.div className="mb-14 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-white mb-3">Συχνές Ερωτήσεις</h2>
            <p className="text-gray-400 text-lg">Όλα όσα χρειάζεται να ξέρετε για custom ιστοσελίδες.</p>
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
      {/* Security Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-[#01FFFF]" />
              <h2 className="text-4xl font-black text-white mb-3">Ασφάλεια Επίπεδας Enterprise</h2>
            </div>
            <p className="text-gray-400 text-lg">Τα δεδομένα σας προστατεύονται με τα πιο σύγχρονα security protocols.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -3, boxShadow: "0 0 30px rgba(1,255,255,0.1)" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center group-hover:bg-[#01FFFF]/20 transition-colors mb-4">
                    <Icon className="w-6 h-6 text-[#01FFFF]" />
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#01FFFF] transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Workflow Section */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-[#01FFFF]" />
              <h2 className="text-4xl font-black text-white mb-3">Η Διαδικασία μας</h2>
            </div>
            <p className="text-gray-400 text-lg">Από την ιδέα μέχρι την παράδοση - διαφανής και predictable διαδικασία.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 h-full hover:border-[#01FFFF]/40 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#01FFFF]/20">{step.number}</span>
                    <span className="text-xs bg-[#01FFFF]/10 text-[#01FFFF]/70 px-2 py-1 rounded-full border border-[#01FFFF]/15">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#01FFFF]/50 to-transparent transform -translate-y-1/2" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 text-[#01FFFF]" />
              <h2 className="text-4xl font-black text-white mb-3">Integrations & APIs</h2>
            </div>
            <p className="text-gray-400 text-lg">Ενσωματώνουμε οτιδήποτε χρειάζεστε - payment systems, CRMs, marketing tools, και πολλά άλλα.</p>
          </motion.div>
          
          <div className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {integrations.map((integration, i) => (
                <motion.div
                  key={integration.name}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-[#07141C] border border-cyan-900/40 rounded-xl p-4 group-hover:border-[#01FFFF]/40 transition-all">
                    <div className="w-12 h-12 bg-[#01FFFF]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#01FFFF]/20 transition-colors">
                      <Database className="w-6 h-6 text-[#01FFFF]" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">{integration.name}</h4>
                    <p className="text-gray-400 text-xs">{integration.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-gray-400 text-sm mb-4">Και πολλές άλλες - ενσωματώνουμε οποιαδήποτε υπηρεσία χρειάζεστε</p>
              <Link href="/contact#contact-form">
                <motion.button
                  className="inline-flex items-center gap-2 text-[#01FFFF] font-semibold hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Ρωτήστε για integration <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
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
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Θέλετε custom ιστοσελίδα;</h3>
                <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">Πείτε μας για το project σας και σας απαντάμε εντός 24 ωρών με ενδεικτική τιμή.</p>
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
                  <span>24h Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#01FFFF]" />
                  <span>3 Months Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-[#01FFFF]" />
                  <span>Fast Delivery</span>
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
            "name": "Custom Web Development",
            "description": "Professional custom website development using Next.js, React, and TypeScript for businesses in Greece.",
            "provider": {
              "@type": "Organization",
              "name": "adinfinity",
              "url": "https://adinfinity.gr",
              "telephone": "+30-2681-303007"
            },
            "serviceType": "Web Development",
            "areaServed": {
              "@type": "Country",
              "name": "Greece"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Business Websites",
                    "description": "Tailored websites for businesses with custom design and functionality"
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
                    "name": "E-commerce Solutions",
                    "description": "Complete online stores with payment integration and inventory management"
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
