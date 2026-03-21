"use client"

import { motion } from "framer-motion"
import { Cpu, Database, Users, Calendar, LayoutDashboard, Plug, ArrowRight, Code2 } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

const appTypes = [
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    desc: "Custom back-office tools για τη διαχείριση της επιχείρησής σας. Data visualization, reports, user management.",
    examples: ["Dashboards αναλυτικών", "Διαχείριση αποθέματος", "Συστήματα CRM"],
  },
  {
    icon: Calendar,
    title: "Booking Systems",
    desc: "Online κράτηση ραντεβού, χώρων ή πόρων. Real-time availability, email notifications, payment integration.",
    examples: ["Ραντεβού κλινικής", "Κρατήσεις ξενοδοχείου/δωματίου", "Προγραμματισμός υπηρεσιών"],
  },
  {
    icon: Users,
    title: "SaaS Platforms",
    desc: "Multi-tenant applications με subscription billing, user roles και custom workflows.",
    examples: ["Εργαλεία συνεργασίας ομάδας", "Portals πελατών", "Υπηρεσίες συνδρομών"],
  },
  {
    icon: Database,
    title: "Data Platforms",
    desc: "Applications για συλλογή, επεξεργασία και οπτικοποίηση δεδομένων σε real time.",
    examples: ["Πλατφόρμες αναφορών", "Διοχέτευση δεδομένων", "BI dashboards"],
  },
  {
    icon: Plug,
    title: "API & Integrations",
    desc: "Σύνδεση συστημάτων, webhooks, third-party APIs. Αυτοματισμός data flows μεταξύ εργαλείων.",
    examples: ["Ενσωματώσεις ERP", "APIs πληρωμών", "Ροές εργασιών αυτοματισμού"],
  },
  {
    icon: Code2,
    title: "Custom Tools",
    desc: "Οτιδήποτε άλλο χρειάζεται η επιχείρησή σας και δεν υπάρχει σε έτοιμο software.",
    examples: ["Εσωτερικά εργαλεία", "Scripts αυτοματισμού", "Προσαρμοσμένες ροές εργασιών"],
  },
]

const stack = [
  { label: "Frontend", techs: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { label: "Backend", techs: ["Node.js", "Express", "REST APIs", "WebSockets"] },
  { label: "Database", techs: ["PostgreSQL", "Prisma ORM", "Redis"] },
  { label: "Deploy", techs: ["Vercel", "VPS", "Docker", "CI/CD"] },
]

export default function WebAppsPage() {
  return (
    <>
      <Head>
        <title>Custom Web Applications | SaaS Platforms | Web Εφαρμογές | adinfinity</title>
        <meta name="description" content="Custom web applications, SaaS platforms, dashboards σε React & Node.js. Full-stack development για Greek market. Booking systems, admin tools, data platforms." />
        <meta name="keywords" content="web applications, SaaS platforms, custom dashboards, react development, nodejs, full-stack development, greek web developer, διαφημιστικε ιστοσελιδες, κατασκευη ιστοσελιδων, booking systems, admin tools, web εφαρμογες, προγραμματισμος εφαρμογων, custom software, business applications, adfinity, adinity, web app development, custom business solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#07141C" />
        <link rel="canonical" href="https://adinfinity.gr/website-development/web-apps" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Custom Web Applications | SaaS Platforms | Web Εφαρμογές | adinfinity" />
        <meta property="og:description" content="Custom web applications, SaaS platforms, dashboards σε React & Node.js. Full-stack development για Greek market." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adinfinity.gr/website-development/web-apps" />
        <meta property="og:image" content="https://adinfinity.gr/images/og-image.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="adinfinity" />
        <meta name="language" content="el" />
      </Head>
      
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
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#01A9FF]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

              <span className="inline-block bg-[#01FFFF]/10 border border-[#01FFFF]/30 text-[#01FFFF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                Full-Stack · React · Node.js · PostgreSQL
              </span>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                <span className="text-white">Custom</span><br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">Web Applications</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                Dashboards, booking systems, SaaS platforms, internal tools — αν το φανταστείτε,
                το χτίζουμε. <span className="text-[#01FFFF] font-semibold">Full-stack React & Node.js</span>,
                100% custom, zero off-the-shelf limitations για Greek market.
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

            {/* Right — tech stack breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {stack.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl p-5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <span className="text-[#01FFFF]/60 text-xs uppercase tracking-widest mb-3 block">{layer.label}</span>
                  <div className="flex flex-wrap gap-2">
                    {layer.techs.map((t) => (
                      <span key={t} className="text-xs bg-[#01FFFF]/8 text-[#01FFFF]/80 px-2.5 py-1 rounded-full border border-[#01FFFF]/15">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-3">Τι χτίζουμε</h2>
            <p className="text-gray-400 text-lg">Από απλά internal tools έως πλήρη SaaS platforms.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {appTypes.map((app, i) => {
              const Icon = app.icon
              return (
                <motion.div
                  key={app.title}
                  className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 hover:border-[#01FFFF]/40 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#01FFFF]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#01FFFF]" />
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#01FFFF] transition-colors">{app.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{app.desc}</p>
                  <ul className="space-y-1">
                    {app.examples.map((ex) => (
                      <li key={ex} className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#01FFFF]/40 flex-shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#07141C]">
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
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Έχετε ιδέα για app;</h3>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                Περιγράψτε μας τι θέλετε να χτίσετε — ακόμα και αν δεν ξέρετε ακριβώς τι χρειάζεστε. Θα σας βοηθήσουμε να το ορίσετε.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-cyan-500/20 flex items-center gap-2 justify-center"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(1,255,255,0.5)" }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Κλείστε Discovery Call <ArrowRight className="w-5 h-5" />
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

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Web Applications Development",
            "description": "Professional custom web applications, SaaS platforms, and dashboards development using React, Node.js, and modern technologies.",
            "provider": {
              "@type": "Organization",
              "name": "adinfinity",
              "url": "https://adinfinity.gr",
              "telephone": "+30-2681-303007"
            },
            "serviceType": "Web Application Development",
            "areaServed": {
              "@type": "Country",
              "name": "Greece"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Application Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Admin Dashboards",
                    "description": "Custom back-office tools for business management"
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
                    "name": "Booking Systems",
                    "description": "Online booking and reservation systems"
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
                    "name": "SaaS Platforms",
                    "description": "Multi-tenant SaaS applications with subscription billing"
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
                    "name": "Data Platforms",
                    "description": "Data collection and visualization platforms"
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
