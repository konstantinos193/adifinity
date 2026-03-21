"use client"

import { motion } from "framer-motion"
import {
  Code2, ShoppingCart, Zap, Shield, BarChart3, Headphones,
  ArrowRight, ExternalLink, Cpu, GitBranch, Layers
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

// ─── Data ────────────────────────────────────────────────────────────────────

const codeSnippet = `// adinfinity stack
const project = {
  framework: "Next.js 16",
  language:  "TypeScript",
  styling:   "Tailwind CSS",
  database:  "PostgreSQL",
  deploy:    "Vercel / VPS",
  approach:  "100% custom — no templates"
}`

const services = [
  {
    icon: Code2,
    title: "Custom Web Apps",
    description: "Πλήρως custom React/Next.js εφαρμογές. Καμία χρήση template ή page builder — μόνο clean code.",
    tags: ["Next.js", "React", "TypeScript"],
    href: "/website-development/custom-web-apps",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Custom online stores με Stripe, διαχείριση παραγγελιών και αποθήκης. Χτισμένο από μηδέν.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    href: "/website-development/e-commerce",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "High-converting pages για καμπάνιες και διαφημίσεις. Fast, SEO-ready, mobile-first.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    href: "/website-development/landing-pages",
  },
  {
    icon: Cpu,
    title: "Web Applications",
    description: "SaaS tools, dashboards, booking systems, portals. Ό,τι χρειάζεται η επιχείρησή σας.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "/website-development/web-apps",
  },
  {
    icon: BarChart3,
    title: "Technical SEO",
    description: "Core Web Vitals, schema markup, speed optimization. Η τεχνική βάση για top Google rankings.",
    tags: ["Lighthouse", "Schema.org", "GSC"],
    href: "/website-development/technical-seo",
  },
  {
    icon: GitBranch,
    title: "Maintenance & Updates",
    description: "Ongoing development retainer. Νέα features, performance monitoring, security updates.",
    tags: ["CI/CD", "Vercel", "Monitoring"],
    href: "/website-development/maintenance",
  },
]

const techStack = [
  "Next.js 15", "React 19", "TypeScript", "Tailwind CSS",
  "Node.js", "PostgreSQL", "Prisma", "Stripe",
  "Vercel", "Framer Motion", "Figma",
]

const portfolio = [
  {
    name: "Αστεριας Κορωνησία",
    category: "Ιστοσελίδα Φιλοξενίας",
    description: "Ιστοσελίδα με σύστημα online κρατήσεων για οικογενειακό κατάλυμα. Responsive, SEO-optimized, mobile-first.",
    image: "/images/asteriashome-preview.png",
    url: "https://asteriashome.gr",
    tags: ["Next.js", "TypeScript", "Booking System"],
  },
  {
    name: "ΚΥΚΛΟΣ Εκπαίδευση",
    category: "Εκπαιδευτική Πλατφόρμα",
    description: "Εκπαιδευτική πλατφόρμα για φροντιστήριο με 30+ χρόνια ιστορίας. Παρουσίαση μαθημάτων, επιτυχίες, επικοινωνία.",
    image: "/images/kyklosedu-preview.png",
    url: "https://kyklosedu.gr",
    tags: ["Next.js", "TypeScript", "SEO"],
  },
  {
    name: "Physio Elpida",
    category: "Ιστοσελίδα Υγειονομικής Περίθαλψης",
    description: "Επαγγελματική ιστοσελίδα για φυσιοθεραπευτήριο. Υπηρεσίες, εξοπλισμός, online ραντεβού.",
    image: "/images/physioelpida-preview.png",
    url: "https://physioelpida.gr",
    tags: ["Next.js", "TypeScript", "Booking"],
  },
]

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "30 λεπτά για να καταλάβουμε τι χρειάζεστε, τους στόχους σας και το budget.",
  },
  {
    step: "02",
    title: "Design & Wireframes",
    desc: "Mockups σε Figma πριν γραφτεί μια γραμμή κώδικα. Εγκρίνετε την εμφάνιση πρώτα.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Clean code, Next.js, TypeScript. Σταδιακές παραδόσεις για review σε κάθε βήμα.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "Deploy, testing, SEO setup. Εκπαίδευση στη διαχείριση και ongoing support.",
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <Head>
        <title>Κατασκευή Ιστοσελίδων & Web Apps | Custom Development | adinfinity</title>
        <meta name="description" content="Custom κατασκευή ιστοσελίδων, e-shops και web applications σε React & Next.js. Καμία χρήση templates. Performance-first SEO optimization για Greek market." />
        <meta name="keywords" content="κατασκευη ιστοσελιδων, web development, custom web apps, react development, nextjs, ecommerce, κατασκευη eshop, greek web developer, διαφημιστικε ιστοσελιδες, γραφικη υποστηριξη, SEO optimization, technical SEO, custom development, adfinity, adinity, ιστοσελιδες επιχειρησεων, professional web development, custom websites, business websites, web applications, online presence" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#07141C" />
        <link rel="canonical" href="https://adinfinity.gr/website-development" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Κατασκευή Ιστοσελίδων & Web Apps | Custom Development | adinfinity" />
        <meta property="og:description" content="Custom κατασκευή ιστοσελίδων, e-shops και web applications σε React & Next.js. Καμία χρήση templates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adinfinity.gr/website-development" />
        <meta property="og:image" content="https://adinfinity.gr/images/og-image.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="adinfinity" />
        <meta name="language" content="el" />
      </Head>
      
      <main className="min-h-screen bg-[#07141C]">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#01FFFF]/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#01A9FF]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-[#01FFFF]/10 border border-[#01FFFF]/30 text-[#01FFFF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                100% Custom · Καμία Χρήση Templates · React Development
              </span>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                <span className="text-white">Κατασκευή</span><br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
                  Ιστοσελίδων
                </span><br />
                <span className="text-white">που Αποδίδουν</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                Custom web apps, e-shops και platforms χτισμένα αποκλειστικά σε{" "}
                <span className="text-[#01FFFF] font-semibold">React & Next.js</span>.{" "}
                Καμία χρήση WordPress, Wix ή templates — μόνο clean, scalable code για Greek market.
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
                <a href="#portfolio">
                  <motion.button
                    className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3.5 px-8 rounded-full text-base hover:bg-[#01FFFF]/10 transition-colors"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Δείτε Projects
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* Right — Code block */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl overflow-hidden shadow-2xl">
                {/* Window bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#0D2030] border-b border-cyan-900/30">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-gray-500 text-xs font-mono">stack.config.ts</span>
                </div>
                <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
                  {codeSnippet.split("\n").map((line, i) => {
                    const key = line.includes(":") ? line.split(":")[0].trim() : null
                    const val = line.includes(":") ? line.split(":").slice(1).join(":") : null
                    if (key && val) {
                      return (
                        <div key={i}>
                          <span className="text-[#01A9FF]">{key}</span>
                          <span className="text-gray-500">:</span>
                          <span className="text-[#01FFFF]">{val}</span>
                        </div>
                      )
                    }
                    return <div key={i} className="text-gray-500">{line}</div>
                  })}
                </pre>
              </div>

              {/* Stats row below code block */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {[
                  { num: "100%", label: "Custom Code" },
                  { num: "3+", label: "Live Projects" },
                  { num: "24h", label: "Response Time" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#0A1A24]/80 border border-cyan-900/30 rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-[#01FFFF]">{stat.num}</div>
                    <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-3">Υπηρεσίες Web Development</h2>
            <p className="text-gray-400 text-lg">Από landing pages έως πλήρη web applications — πάντα custom, πάντα React για Greek businesses.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon
              const card = (
                <motion.div
                  key={s.title}
                  className="group bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all duration-200 hover:shadow-[0_0_20px_rgba(1,255,255,0.08)] h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#01FFFF]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#01FFFF]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#01FFFF] transition-colors flex items-center gap-2">
                    {s.title}
                    {s.href && <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="text-xs bg-[#01FFFF]/8 text-[#01FFFF]/80 px-2.5 py-1 rounded-full border border-[#01FFFF]/15">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
              return s.href ? (
                <Link key={s.title} href={s.href}>{card}</Link>
              ) : (
                <div key={s.title}>{card}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────────────── */}
      <section className="py-12 border-y border-cyan-900/20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="text-gray-500 text-sm uppercase tracking-widest whitespace-nowrap flex-shrink-0 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Stack
            </span>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="bg-[#0A1A24] border border-cyan-900/30 text-gray-300 text-sm px-4 py-1.5 rounded-full"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio ────────────────────────────────────────────────────── */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-3">Portfolio Projects</h2>
            <p className="text-gray-400 text-lg">Real projects, real results — όλα custom-built για Greek market.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0A1A24] border border-cyan-900/30 rounded-2xl overflow-hidden hover:border-[#01FFFF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(1,255,255,0.1)] block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#0D2030]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A24] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-[#01FFFF] text-[#07141C] p-1.5 rounded-full flex items-center justify-center">
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-[#01FFFF]/70 text-xs uppercase tracking-widest">{p.category}</span>
                  <h3 className="text-white font-bold text-lg mt-1 mb-2 group-hover:text-[#01FFFF] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs bg-[#01FFFF]/8 text-[#01FFFF]/70 px-2.5 py-1 rounded-full border border-[#01FFFF]/15">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-black text-white mb-3">Διαδικασία Development</h2>
            <p className="text-gray-400 text-lg">Απλό, διαφανές, αποτελεσματικό — από idea έως launch.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#01FFFF]/20 to-transparent z-0" />
                )}
                <div className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 relative z-10">
                  <span className="text-5xl font-black text-[#01FFFF]/15 block mb-4 leading-none">{step.step}</span>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Zero templates",
                text: "Κάθε project ξεκινά από λευκή σελίδα. Καμία επαναχρησιμοποίηση θεμάτων ή page builders.",
              },
              {
                icon: Zap,
                title: "Performance-first",
                text: "Next.js, server components, edge caching. Sites που φορτώνουν σε < 1 δευτερόλεπτο.",
              },
              {
                icon: Headphones,
                title: "Direct developer access",
                text: "Μιλάτε απευθείας με τον developer — χωρίς account managers και ενδιάμεσους.",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  className="bg-[#0A1A24]/80 border border-cyan-900/20 rounded-2xl p-6 flex gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#01FFFF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-[#01FFFF]/20 bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-10 md:p-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#01FFFF]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#01A9FF]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Έχετε project στο μυαλό σας;
              </h3>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                Στείλτε μας μια σύντομη περιγραφή και σας απαντάμε εντός 24 ωρών με ενδεικτική τιμή και χρονοδιάγραμμα.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-cyan-500/20 flex items-center gap-2 justify-center"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(1,255,255,0.5)" }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Ζητήστε Δωρεάν Προσφορά <ArrowRight className="w-5 h-5" />
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
    </>
  )
}
