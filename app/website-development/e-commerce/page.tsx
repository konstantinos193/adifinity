"use client"

import { motion } from "framer-motion"
import { ShoppingCart, CreditCard, Package, BarChart3, RefreshCw, Lock, ArrowRight, Check, Zap, TrendingUp, Users, Calendar } from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import FeatureShowcase from "@/components/ui/FeatureShowcase"

const features = [
  {
    icon: ShoppingCart,
    title: "Custom Product Catalog",
    desc: "Κατηγορίες, filters, search, variants — σχεδιασμένο ακριβώς για τα προϊόντα σας.",
  },
  {
    icon: CreditCard,
    title: "Stripe Payments",
    desc: "Κάρτες, Apple Pay, Google Pay, IBAN. Secure checkout χωρίς redirects.",
  },
  {
    icon: Package,
    title: "Order Management",
    desc: "Custom admin panel για παραγγελίες, αποθήκη, αποστολές και invoicing.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Revenue, conversion rate, top products. Όλα σε ένα custom dashboard.",
  },
  {
    icon: RefreshCw,
    title: "Automations",
    desc: "Emails επιβεβαίωσης, low-stock alerts, abandoned cart — αυτόματα.",
  },
  {
    icon: Lock,
    title: "Security by Design",
    desc: "HTTPS, rate limiting, secure sessions, PCI-compliant payment flow.",
  },
]

const whyCustom = [
  "Πλήρης έλεγχος του design — ακριβώς όπως το θέλετε",
  "Zero μηνιαίες χρεώσεις πλατφόρμας (Shopify κοστίζει €30-500/μήνα)",
  "Ταχύτερο loading — χωρίς bloat από plugins",
  "Custom features που δεν υπάρχουν σε έτοιμες πλατφόρμες",
  "Το codebase ανήκει σε εσάς — 100%",
  "Εύκολη κλιμάκωση καθώς μεγαλώνει η επιχείρηση",
]

const ecommercePremiumFeatures = [
  {
    title: "Προηγμένη Αναλυτικά",
    price: "Ζητήστε Προσφορά",
    description: "Βαθιές γνώσεις για τη συμπεριφορά πελατών, απόδοση πωλήσεων, και βελτιστοποίηση μετατροπών.",
    features: [
      "Παρακολούθηση ταξιδιού πελάτη",
      "Αναλυτική απόδοσης προϊόντων",
      "Ανάλυση μετατροπών (conversion funnel)",
      "Μοντέλο απόδοσης εσόδων",
      "Προσαρμοσμένο dashboard & αναφορές"
    ],
    icon: BarChart3,
    popular: true,
    timeline: "2-3 εβδομάδες"
  },
  {
    title: "Σύστημα Συνδρομών",
    price: "Ζητήστε Προσφορά",
    description: "Recurring revenue platform για subscription boxes, memberships, και επαναλαμβανόμενες παραγγελίες.",
    features: [
      "Ευέλικτα επίπεδα συνδρομών",
      "Αυτόματη χρέωση & επαναπροσπάθειες",
      "Portal πελατών & self-service",
      "Χρέωση βάσει χρήσης",
      "Ροές εργασιών αναβάθμισης/υποβάθμισης"
    ],
    icon: RefreshCw,
    recurring: "Ζητήστε Προσφορά",
    timeline: "3-4 εβδομάδες"
  },
  {
    title: "Marketplace Πολλαπλών Πωλητών",
    price: "Ζητήστε Προσφορά",
    description: "Πλατφόρμα πολλαπλών πωλητών με διαχείριση vendors, παρακολούθηση προμήθειας, και επίλυση διαφορών.",
    features: [
      "Εγγραφή & ενσωμάτωση vendors",
      "Σύστημα διαχείρισης προμηθειών",
      "Ροές εργασιών έγκρισης προϊόντων",
      "Dashboard vendors & αναλυτικά",
      "Σύστημα αξιολόγησης & κριτικών vendors"
    ],
    icon: Users,
    timeline: "6-8 εβδομάδες"
  },
  {
    title: "Διαχείριση Αποθέματος",
    price: "Ζητήστε Προσφορά",
    description: "Παρακολούθηση αποθέματος σε πραγματικό χρόνο, αυτόματη επαναπαραγγελία, και ενσωμάτωση διαχείρισης αποθήκης.",
    features: [
      "Παρακολούθηση αποθέματος σε πραγματικό χρόνο",
      "Ειδοποιήσεις χαμηλού αποθέματος & επαναπαραγγελία",
      "Διαχείριση τοποθεσιών αποθήκης",
      "Σάρωση barcode/QR κώδικα",
      "Σύστημα διαχείρισης προμηθευτών"
    ],
    icon: Package,
    timeline: "3-4 εβδομάδες"
  }
]

export default function EcommercePage() {
  return (
    <>
      <Head>
        <title>Custom E-commerce Development | Online Shops | Ανάπτυξη E-shop | adinfinity</title>
        <meta name="description" content="Custom e-commerce development χωρίς Shopify/WooCommerce. Next.js, React, Stripe payments. Zero monthly fees. Greek market expertise για online shops." />
        <meta name="keywords" content="e-commerce development, κατασκευη eshop, online shops, custom e-commerce, stripe integration, react development, nextjs, greek web developer, διαφημιστικε ιστοσελιδες, κατασκευη ιστοσελιδων, online store, payment integration, adfinity, adinity, eshop development, ηλεκτρονικο καταστηματα, payment gateway, custom online store, stripe payments, paypal integration, greek market, custom ecommerce solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#07141C" />
        <link rel="canonical" href="https://adinfinity.gr/website-development/e-commerce" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Custom E-commerce Development | Online Shops | Ανάπτυξη E-shop | adinfinity" />
        <meta property="og:description" content="Custom e-commerce development χωρίς Shopify/WooCommerce. Next.js, React, Stripe payments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adinfinity.gr/website-development/e-commerce" />
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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

              <span className="inline-block bg-[#01FFFF]/10 border border-[#01FFFF]/30 text-[#01FFFF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                Χωρίς Shopify · Καμία Μηνιαία Χρέωση · 100% Custom
              </span>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-[1.1]">
                <span className="text-white">Custom</span><br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">E-commerce</span><br />
                <span className="text-white">Development</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                Online stores χτισμένα αποκλειστικά σε <span className="text-[#01FFFF] font-semibold">Next.js & React</span> με
                Stripe payments. Χωρίς μηνιαίες χρεώσεις πλατφόρμας, χωρίς limitations, χωρίς templates για Greek market.
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

            {/* Right — why custom breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="bg-[#0A1A24] border border-cyan-900/40 rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-6">Custom vs. Shopify/WooCommerce</h3>
                <div className="space-y-3">
                  {whyCustom.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                    >
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

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-3">Τι περιλαμβάνει</h2>
            <p className="text-gray-400 text-lg">Κάθε e-shop χτίζεται από μηδέν με αυτά τα building blocks.</p>
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

      {/* Payments */}
      <section className="py-20 bg-[#07141C]">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-3">Payment Methods</h2>
            <p className="text-gray-400 text-lg">Κάθε τρόπος πληρωμής που χρειάζεται ο πελάτης σας — built in.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              {
                category: "Cards & Core",
                color: "from-[#01FFFF]/20 to-[#01FFFF]/5",
                border: "border-[#01FFFF]/30",
                providers: ["Stripe", "Adyen", "Checkout.com", "Viva Wallet"],
                desc: "Visa, Mastercard, Amex — η βάση κάθε e-shop.",
              },
              {
                category: "Digital Wallets",
                color: "from-[#01A9FF]/20 to-[#01A9FF]/5",
                border: "border-[#01A9FF]/30",
                providers: ["Apple Pay", "Google Pay", "PayPal", "Revolut Pay"],
                desc: "One-tap checkout. Μέγιστο conversion rate.",
              },
              {
                category: "Buy Now Pay Later",
                color: "from-purple-500/20 to-purple-500/5",
                border: "border-purple-500/30",
                providers: ["Klarna", "Scalapay", "Afterpay"],
                desc: "BNPL αυξάνει το average order value κατά 30-50%.",
              },
              {
                category: "Bank Payments",
                color: "from-green-500/20 to-green-500/5",
                border: "border-green-500/30",
                providers: ["SEPA", "GoCardless", "IRIS", "iDEAL"],
                desc: "EU bank transfers & instant payments. Κρίσιμο για Ελλάδα.",
              },
              {
                category: "Offline & Local",
                color: "from-orange-500/20 to-orange-500/5",
                border: "border-orange-500/30",
                providers: ["Cash on Delivery", "Bank Transfer", "IRIS Instant"],
                desc: "Ακόμα δημοφιλές στην Ελλάδα — δεν το αγνοούμε.",
              },
              {
                category: "Enterprise & Global",
                color: "from-[#01FFFF]/15 to-transparent",
                border: "border-cyan-900/40",
                providers: ["Adyen", "Checkout.com", "Mollie", "Crypto (optional)"],
                desc: "Για scale σε EU & παγκόσμιες αγορές.",
              },
            ].map((group, i) => (
              <motion.div
                key={group.category}
                className={`bg-gradient-to-b ${group.color} border ${group.border} rounded-2xl p-6`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <h3 className="text-white font-bold mb-1">{group.category}</h3>
                <p className="text-gray-400 text-xs mb-4">{group.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {group.providers.map((p) => (
                    <span key={p} className="text-xs bg-white/5 text-gray-200 px-2.5 py-1 rounded-full border border-white/10">
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary strip */}
          <motion.div
            className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 justify-between"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-sm md:text-base">
              <span className="text-[#01FFFF] font-semibold">Το e-shop σας δέχεται:</span>{" "}
              κάρτες · Apple/Google Pay · PayPal · Klarna · SEPA · αντικαταβολή · IRIS
            </p>
            <Link href="/contact#contact-form" className="flex-shrink-0">
              <motion.button
                className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-2.5 px-6 rounded-full text-sm flex items-center gap-2 whitespace-nowrap"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Ζητήστε Προσφορά <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Premium E-commerce Features */}
      <FeatureShowcase
        title="E-commerce Premium Features"
        subtitle="Ενισχύστε το online store σας με advanced features που οδηγούν πωλήσεις και αυτοματοποιούν λειτουργίες."
        features={ecommercePremiumFeatures}
        ctaText="Προσθήκη στο Store"
        showComparison={true}
      />

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
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Ετοιμάζετε online store;</h3>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                Πείτε μας τι θέλετε να πουλάτε και σας στέλνουμε πρόταση εντός 24 ωρών.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact#contact-form">
                  <motion.button
                    className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-cyan-500/20 flex items-center gap-2 justify-center"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(1,255,255,0.5)" }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Ζητήστε Προσφορά <ArrowRight className="w-5 h-5" />
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
