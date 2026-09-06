"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "@/components/useTranslations"
import { COMPANY_FACTS } from "@/lib/company"

export default function ProofBar() {
  const { t: _t } = useTranslations()
  const shouldReduceMotion = useReducedMotion()

  /*
   * Every figure here traces to `lib/company.ts`.
   *
   * This component is not currently mounted anywhere, but it shipped with
   * numbers that contradicted the rest of the site by an order of magnitude:
   * "500+ Projects" against a 32-entry portfolio, "15+ Years" against a 2013
   * founding, "100+ Clients" against the homepage hero's 50+, and a "98%
   * Satisfaction / Client retention rate" that had no source at all. Publishing
   * an invented retention rate is the kind of claim Google's spam policy treats
   * as manufactured, so it is gone rather than rounded.
   */
  const metrics = [
    {
      value: `${COMPANY_FACTS.years}+`,
      label: "Χρόνια",
      description: `Στην Άρτα από το ${COMPANY_FACTS.foundedYear}`,
    },
    {
      value: `${COMPANY_FACTS.completedProjects}+`,
      label: "Ολοκληρωμένα Έργα",
      description: "Για επιχειρήσεις στην Ήπειρο",
    },
    {
      value: `${COMPANY_FACTS.clients}+`,
      label: "Πελάτες",
      description: "Τοπικές επιχειρήσεις",
    },
    {
      value: String(COMPANY_FACTS.projects),
      label: "Case Studies",
      description: "Δημοσιευμένα στο portfolio",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-[#07141C] to-[#0A1A24] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#01FFFF] mb-4">Η adinfinity με αριθμούς</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Στοιχεία που μπορείτε να ελέγξετε στο portfolio μας.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 0.5, 
                delay: shouldReduceMotion ? 0 : index * 0.1 
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#01FFFF] mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-400">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo strip */}
        <motion.div
          className="mt-16 pt-8 border-t border-[#01FFFF]/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center text-gray-400 mb-6">
            Μερικές από τις επιχειρήσεις που έχουμε συνεργαστεί
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechFix', 'Bohĕme', 'Energy House', 'Maxim Cafe', 'WEST GAS'].map((name, _index) => (
              <div key={name} className="text-white font-medium">
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
