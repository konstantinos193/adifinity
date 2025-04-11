"use client"
import { motion } from "framer-motion"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link"
import { DistributionType } from "../components/DistributionType"
import { BenefitCard } from "../components/BenefitCard"
import {
  DoorToDoorIcon,
  BusinessDistributionIcon,
  TargetedDistributionIcon,
  StrategicPlanningIcon,
  ReportingIcon,
  ProfessionalTeamIcon,
  CombinedServicesIcon,
} from "../components/DistributionIcons"

const FlyerDistributionIllustration: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flyer distribution in houses illustration"
    >
      {/* Ground line */}
      <path
        d="M10 60 H70"
        stroke="#01FFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Houses */}
      <path
        d="M15 60 V45 H25 L30 40 H40 V60"
        fill="#01A9FF"
        fillOpacity="0.2"
        stroke="#01FFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M45 60 V48 H55 L60 43 H65 V60"
        fill="#01A9FF"
        fillOpacity="0.2"
        stroke="#01FFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Mailbox */}
      <path
        d="M35 60 V50 A5 5 0 0 1 40 45 H45 A5 5 0 0 1 50 50 V60"
        fill="url(#mailbox-gradient)"
        stroke="#01FFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
        filter="url(#mailbox-shadow)"
      />

      {/* Hand distributing flyer */}
      <path
        d="M30 48 C28 48 26 46 26 44 C26 42 28 40 30 40 H34 C36 40 38 42 38 44 V46 C38 47 37 48 36 48 Z"
        fill="#FF4081"
        stroke="#01FFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Flyer stack in hand */}
      <rect
        x="28"
        y="40"
        width="12"
        height="8"
        rx="1"
        fill="white"
        stroke="#01FFFF"
        strokeWidth="1.5"
        transform="rotate(-10 28 40)"
        filter="url(#flyer-shadow)"
      />
      <rect
        x="29"
        y="42"
        width="10"
        height="6"
        rx="1"
        fill="white"
        stroke="#01FFFF"
        strokeWidth="1.5"
        transform="rotate(-5 29 42)"
      />

      {/* Flyer in mailbox */}
      <rect
        x="40"
        y="46"
        width="10"
        height="6"
        rx="1"
        fill="white"
        stroke="#FF4081"
        strokeWidth="1.5"
        transform="rotate(5 40 46)"
      />

      {/* Flying flyer */}
      <rect
        x="50"
        y="38"
        width="8"
        height="4"
        rx="1"
        fill="white"
        stroke="#01FFFF"
        strokeWidth="1"
        transform="rotate(15 50 38)"
      />

      <defs>
        {/* Gradient for mailbox */}
        <linearGradient id="mailbox-gradient" x1="35" y1="45" x2="50" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#01FFFF" stopOpacity="0.3" />
          <stop offset="1" stopColor="#01A9FF" stopOpacity="0.3" />
        </linearGradient>

        {/* Shadow for mailbox */}
        <filter id="mailbox-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Shadow for flyer stack */}
        <filter id="flyer-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  </div>
)

export default function FlyerDistributionPage() {
  const distributionTypes = [
    {
      icon: <DoorToDoorIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]" />,
      title: "Πόρτα-πόρτα",
      description: "Διανομή φυλλαδίων σε οικίες & πολυκατοικίες με στοχευμένη κάλυψη συγκεκριμένων περιοχών.",
      items: [
        "Στοχευμένη κάλυψη συγκεκριμένων περιοχών",
        "Ενημέρωση κατοίκων για προσφορές & νέες επιχειρήσεις",
        "Εξατομικευμένη προσέγγιση για κάθε γειτονιά",
        "Αναφορά κάλυψης με λεπτομερή στοιχεία",
      ],
    },
    {
      icon: <BusinessDistributionIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]" />,
      title: "Διανομή σε επιχειρήσεις",
      description: "Παράδοση εντύπων σε επαγγελματικούς χώρους για στοχευμένη προώθηση B2B.",
      items: [
        "Ενημέρωση επαγγελματιών για προϊόντα & υπηρεσίες",
        "Τοποθέτηση διαφημιστικού υλικού σε σημεία υψηλής επισκεψιμότητας",
        "Προσέγγιση επιχειρήσεων συγκεκριμένου κλάδου",
        "Δημιουργία επαγγελματικών συνεργασιών",
      ],
    },
    {
      icon: <TargetedDistributionIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]" />,
      title: "Στοχευμένη διανομή",
      description: "Χειροδιανομή σε πολυσύχναστα σημεία με μέγιστη προβολή και απήχηση.",
      items: [
        "Τοποθέτηση εντύπων σε stands & σημεία ενδιαφέροντος",
        "Ειδικές προωθητικές καμπάνιες με brand ambassadors",
        "Διανομή σε εκδηλώσεις, φεστιβάλ και εμπορικά κέντρα",
        "Συνδυασμός με άμεση επικοινωνία με το κοινό",
      ],
    },
  ]

  const benefits = [
    {
      icon: <StrategicPlanningIcon className="w-8 h-8 text-[#01FFFF]" />,
      title: "Στρατηγικός Σχεδιασμός",
      description:
        "Αναλύουμε το κοινό-στόχο σας και σχεδιάζουμε τη διανομή για μέγιστη αποτελεσματικότητα και απόδοση της επένδυσής σας.",
    },
    {
      icon: <ReportingIcon className="w-8 h-8 text-[#01FFFF]" />,
      title: "Αναφορές & Reporting",
      description:
        "Παρέχουμε λεπτομερείς αναφορές για την πορεία της καμπάνιας σας, με στοιχεία κάλυψης και αποτελεσματικότητας.",
    },
    {
      icon: <ProfessionalTeamIcon className="w-8 h-8 text-[#01FFFF]" />,
      title: "Έμπειρη Ομάδα",
      description:
        "Η ομάδα διανομέων μας διαθέτει εμπειρία και επαγγελματισμό, εξασφαλίζοντας άψογη εκτέλεση κάθε καμπάνιας.",
    },
    {
      icon: <CombinedServicesIcon className="w-8 h-8 text-[#01FFFF]" />,
      title: "Ολοκληρωμένες Λύσεις",
      description:
        "Συνδυάζουμε τις υπηρεσίες διανομής με εκτύπωση και σχεδιασμό, προσφέροντας ολοκληρωμένες λύσεις προώθησης.",
    },
  ]

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      {/* Hero Section with Subtle Background */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#07141C]/90"></div>
          <div className="absolute inset-0">
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
            {/* Subtle glow in top-right */}
            <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-[#01FFFF]/5 rounded-full blur-[100px]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6 inline-block"
            >
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D2436] to-[#071218] rounded-md shadow-lg overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                    }}
                  ></div>
                  <FlyerDistributionIllustration />
                </div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
              Έντυποδιανομές
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-[#01FFFF]">Στοχευμένη διανομή εντύπων για μέγιστη προβολή!</h2>
            <motion.p
              className="text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Η έντυπη διαφήμιση παραμένει ένας από τους πιο αποτελεσματικούς τρόπους προώθησης, αρκεί να φτάσει στο
              σωστό κοινό. Η εταιρεία μας αναλαμβάνει τη στρατηγική διανομή φυλλαδίων, καταλόγων και διαφημιστικών
              εντύπων σε στοχευμένες τοποθεσίες, εξασφαλίζοντας μέγιστη απήχηση και άμεσα αποτελέσματα.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8"
            >
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ζητήστε Προσφορά
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Rest of the page content remains the same */}
      {/* Distribution Types Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Οι Υπηρεσίες μας
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {distributionTypes.map((type, index) => (
            <DistributionType key={index} {...type} />
          ))}
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-[#061218]/50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#01FFFF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Γιατί να μας επιλέξετε
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl shadow-2xl border border-cyan-900/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#01FFFF]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#01A9FF]/10 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">Ξεκινήστε την καμπάνια σας σήμερα!</h3>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
              Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες σας και να σχεδιάσουμε την ιδανική στρατηγική
              διανομής για την επιχείρησή σας.
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
              <Link href="/projects">
                <motion.button
                  className="border-2 border-[#01FFFF] text-[#01FFFF] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Δείτε Περισσότερα Έργα
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <SpeedInsights />
    </main>
  )
}
