"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Star, Globe, Palette, Printer, MapPin, BarChart2 } from "lucide-react"
import Link from "next/link"

const categories = [
  { id: "websites", label: "Ιστοσελίδες", icon: Globe },
  { id: "design", label: "Γραφικές Τέχνες", icon: Palette },
  { id: "prints", label: "Εκτυπώσεις", icon: Printer },
  { id: "distribution", label: "Έντυποδιανομές", icon: MapPin },
  { id: "research", label: "Έρευνα Αγοράς", icon: BarChart2 },
]

const pricingData: Record<
  string,
  {
    plans: {
      name: string
      price: string
      period?: string
      description: string
      features: string[]
      popular?: boolean
      cta: string
    }[]
  }
> = {
  websites: {
    plans: [
      {
        name: "Starter",
        price: "από €1.200",
        description: "Ιδανικό για επαγγελματίες και μικρές επιχειρήσεις",
        features: [
          "Landing page έως 5 ενότητες",
          "Responsive design (mobile-friendly)",
          "Βασικό SEO on-page",
          "Φόρμα επικοινωνίας",
          "SSL πιστοποιητικό",
          "1 μήνας τεχνική υποστήριξη",
        ],
        cta: "Ξεκινήστε",
      },
      {
        name: "Business",
        price: "από €2.500",
        description: "Πλήρης εταιρική παρουσία με προηγμένες λειτουργίες",
        features: [
          "Πλήρης ιστοσελίδα έως 15 σελίδες",
          "Custom admin panel για εύκολη επεξεργασία",
          "Προηγμένο SEO & Google Analytics",
          "Blog / Νέα",
          "Social media integration",
          "SSL + Hosting 1 έτος",
          "3 μήνες τεχνική υποστήριξη",
        ],
        popular: true,
        cta: "Ξεκινήστε",
      },
      {
        name: "E-shop",
        price: "από €4.500",
        description: "Ολοκληρωμένο ηλεκτρονικό κατάστημα",
        features: [
          "Custom e-commerce (React/Next.js)",
          "Απεριόριστα προϊόντα",
          "Online πληρωμές (κάρτα, PayPal)",
          "Διαχείριση αποθήκης & παραγγελιών",
          "SEO βελτιστοποίηση",
          "SSL + Hosting 1 έτος",
          "6 μήνες τεχνική υποστήριξη",
        ],
        cta: "Ξεκινήστε",
      },
    ],
  },
  design: {
    plans: [
      {
        name: "Βασικό",
        price: "από €300",
        description: "Για νέες επιχειρήσεις που χτίζουν την ταυτότητά τους",
        features: [
          "Σχεδιασμός λογοτύπου",
          "2 εναλλακτικά σχέδια",
          "Αρχεία σε όλες τις μορφές (AI, PDF, PNG)",
          "Επαγγελματικές κάρτες",
          "1 αναθεώρηση",
        ],
        cta: "Ζητήστε Προσφορά",
      },
      {
        name: "Επαγγελματικό",
        price: "από €700",
        description: "Πλήρης εταιρική ταυτότητα για σοβαρές επιχειρήσεις",
        features: [
          "Σχεδιασμός λογοτύπου (3 εναλλακτικά)",
          "Εταιρική ταυτότητα (χρώματα, γραμματοσειρές)",
          "Επαγγελματικές κάρτες & επιστολόχαρτο",
          "Social media profile/cover",
          "Brand guidelines manual",
          "3 αναθεωρήσεις",
        ],
        popular: true,
        cta: "Ζητήστε Προσφορά",
      },
      {
        name: "Premium",
        price: "από €1.400",
        description: "Ολοκληρωμένο brand package για μεγάλες επιχειρήσεις",
        features: [
          "Όλα του Επαγγελματικού",
          "Σχεδιασμός διαφημιστικών & banners",
          "Εκτυπώσιμα υλικά (φυλλάδια, αφίσες)",
          "Social media templates",
          "Παρουσίαση (PowerPoint/Keynote)",
          "Απεριόριστες αναθεωρήσεις",
          "Προτεραιότητα υποστήριξης",
        ],
        cta: "Ζητήστε Προσφορά",
      },
    ],
  },
  prints: {
    plans: [
      {
        name: "Μικρή Τιράζ",
        price: "από €80",
        description: "Ιδανικό για δοκιμαστικές εκτυπώσεις",
        features: [
          "Έως 500 αντίτυπα",
          "Φυλλάδια / Κάρτες / Αφίσες",
          "Χαρτί υψηλής ποιότητας",
          "Επιλογή φινιρίσματος (ματ/γυαλιστερό)",
          "Παράδοση εντός 3-5 εργάσιμων",
        ],
        cta: "Ζητήστε Τιμή",
      },
      {
        name: "Μεσαία Τιράζ",
        price: "από €200",
        description: "Η καλύτερη σχέση ποιότητας-τιμής",
        features: [
          "500 – 2.000 αντίτυπα",
          "Όλοι οι τύποι εντύπων",
          "Χαρτί premium ποιότητας",
          "Επιλογή φινιρίσματος & κοπής",
          "Έκπτωση ποσότητας",
          "Παράδοση εντός 2-4 εργάσιμων",
        ],
        popular: true,
        cta: "Ζητήστε Τιμή",
      },
      {
        name: "Μεγάλη Τιράζ",
        price: "από €450",
        description: "Μαζικές εκτυπώσεις σε τιμή χονδρικής",
        features: [
          "2.000+ αντίτυπα",
          "Απεριόριστοι τύποι εντύπων",
          "Χαρτί & υλικά premium",
          "Πλήρης φινίρισμα & βιβλιοδεσία",
          "Μέγιστη έκπτωση ποσότητας",
          "Αφοσιωμένος υπεύθυνος παραγγελίας",
          "Παράδοση εντός 1-3 εργάσιμων",
        ],
        cta: "Ζητήστε Τιμή",
      },
    ],
  },
  distribution: {
    plans: [
      {
        name: "Τοπική",
        price: "από €150",
        description: "Διανομή σε μια συγκεκριμένη γειτονιά / περιοχή",
        features: [
          "Έως 1.000 φυλλάδια",
          "1 γεωγραφική ζώνη",
          "Επαλήθευση διανομής",
          "Αναφορά αποτελεσμάτων",
        ],
        cta: "Ζητήστε Προσφορά",
      },
      {
        name: "Διευρυμένη",
        price: "από €400",
        description: "Καλύψτε περισσότερες περιοχές αποτελεσματικά",
        features: [
          "1.000 – 5.000 φυλλάδια",
          "Έως 3 γεωγραφικές ζώνες",
          "GPS tracking διανομής",
          "Φωτογραφική τεκμηρίωση",
          "Αναλυτική αναφορά",
        ],
        popular: true,
        cta: "Ζητήστε Προσφορά",
      },
      {
        name: "Πανηπειρωτική",
        price: "από €900",
        description: "Κάλυψη ολόκληρης της πόλης & περιφέρειας",
        features: [
          "5.000+ φυλλάδια",
          "Απεριόριστες ζώνες",
          "GPS tracking & real-time αναφορές",
          "Φωτογραφική & βιντεο-τεκμηρίωση",
          "Dedicated project manager",
          "Εγγύηση 100% κάλυψης",
        ],
        cta: "Ζητήστε Προσφορά",
      },
    ],
  },
  research: {
    plans: [
      {
        name: "Βασική Ανάλυση",
        price: "από €450",
        description: "Γρήγορη ματιά στην αγορά σας",
        features: [
          "Ανάλυση 3 κύριων ανταγωνιστών",
          "SWOT ανάλυση",
          "Έρευνα τιμών αγοράς",
          "Βασική έκθεση αποτελεσμάτων",
          "Παράδοση εντός 5 ημερών",
        ],
        cta: "Ζητήστε Προσφορά",
      },
      {
        name: "Εκτεταμένη",
        price: "από €950",
        description: "Πλήρης εικόνα της αγοράς και του ανταγωνισμού",
        features: [
          "Ανάλυση έως 10 ανταγωνιστών",
          "Έρευνα κοινού & τάσεων αγοράς",
          "Ανάλυση social media ανταγωνισμού",
          "Σύσταση στρατηγικής",
          "Εκτενής έκθεση (PDF + παρουσίαση)",
          "Παράδοση εντός 10 ημερών",
        ],
        popular: true,
        cta: "Ζητήστε Προσφορά",
      },
      {
        name: "Πλήρης Audit",
        price: "από €2.200",
        description: "360° ανάλυση για μέγιστη ανταγωνιστικότητα",
        features: [
          "Απεριόριστη ανάλυση ανταγωνιστών",
          "Έρευνα αγοράς & πελατολογίου",
          "Mystery shopping",
          "Digital & offline ανάλυση",
          "Πλήρης στρατηγική ανάπτυξη",
          "Συνάντηση παρουσίασης αποτελεσμάτων",
          "Follow-up ανάλυση μετά 1 μήνα",
        ],
        cta: "Ζητήστε Προσφορά",
      },
    ],
  },
}

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState("websites")
  const activePlans = pricingData[activeCategory].plans

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#07141C]/90" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-[#01FFFF]/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] bg-[#01A9FF]/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-[#01FFFF]/10 border border-[#01FFFF]/30 text-[#01FFFF] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
              Διαφανείς Τιμές
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
              Τιμολόγιο
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Ξεκάθαρες τιμές, χωρίς κρυφές χρεώσεις. Επιλέξτε την υπηρεσία που σας ενδιαφέρει και βρείτε το πακέτο
              που ταιριάζει στις ανάγκες σας.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-[60px] z-50 bg-[#07141C]/95 backdrop-blur-md border-b border-cyan-900/20 shadow-lg shadow-black/20">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide gap-1 py-3">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = activeCategory === cat.id
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg whitespace-nowrap text-sm font-medium transition-all flex-shrink-0 ${
                    isActive
                      ? "bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C]"
                      : "text-gray-400 hover:text-[#01FFFF] hover:bg-[#01FFFF]/5"
                  }`}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {activePlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={`relative flex flex-col rounded-2xl border overflow-hidden ${
                  plan.popular
                    ? "border-[#01FFFF]/60 shadow-2xl shadow-cyan-500/20 scale-[1.02]"
                    : "border-cyan-900/30"
                } bg-gradient-to-b from-[#0A1A24] to-[#0D2436]`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]" />
                )}

                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] text-xs font-bold px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-current" />
                      Δημοφιλές
                    </span>
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-400 text-sm ml-1">/{plan.period}</span>
                    )}
                    <p className="text-[#01FFFF]/60 text-xs mt-1">* Τιμή εκκίνησης — η τελική τιμή εξαρτάται από το scope</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#01FFFF]/15 flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#01FFFF]" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact#contact-form">
                    <motion.button
                      className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                        plan.popular
                          ? "bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] shadow-lg shadow-cyan-500/20"
                          : "border border-[#01FFFF]/40 text-[#01FFFF] hover:bg-[#01FFFF]/10"
                      }`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {plan.cta}
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <motion.p
          className="text-center text-gray-500 text-sm mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Όλες οι τιμές είναι ενδεικτικές. Η τελική τιμολόγηση γίνεται κατόπιν αξιολόγησης των αναγκών σας.
          <br />
          Επικοινωνήστε μαζί μας για εξατομικευμένη προσφορά.
        </motion.p>
      </div>

      {/* FAQ / Note section */}
      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Χωρίς κρυφές χρεώσεις",
              text: "Η τιμή που συμφωνούμε είναι αυτή που πληρώνετε. Πλήρης διαφάνεια σε κάθε βήμα.",
            },
            {
              title: "Ευέλικτοι τρόποι πληρωμής",
              text: "Προσφέρουμε δυνατότητα τμηματικής πληρωμής για μεγαλύτερα projects.",
            },
            {
              title: "Εγγύηση ικανοποίησης",
              text: "Δουλεύουμε μέχρι να είστε απόλυτα ικανοποιημένοι με το αποτέλεσμα.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#0A1A24]/60 border border-cyan-900/20 rounded-xl p-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <h4 className="text-[#01FFFF] font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl border border-cyan-900/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#01FFFF]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#01A9FF]/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Δεν βρήκατε αυτό που ψάχνετε;
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Κάθε επιχείρηση έχει μοναδικές ανάγκες. Επικοινωνήστε μαζί μας για μια δωρεάν συμβουλευτική
              συνάντηση και εξατομικευμένη προσφορά.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20 w-full sm:w-auto"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ζητήστε Προσφορά
                </motion.button>
              </Link>
              <a href="tel:+302681303007">
                <motion.button
                  className="border-2 border-[#01FFFF] text-[#01FFFF] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2681 303007
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
