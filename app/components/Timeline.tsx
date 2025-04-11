"use client"

import { motion } from "framer-motion"

interface Milestone {
  year: number
  event: string
  description?: string
}

export function Timeline() {
  const milestones: Milestone[] = [
    {
      year: 2013,
      event: "Ίδρυση της εταιρείας στην Άρτα",
      description:
        "Ξεκινήσαμε το ταξίδι μας με όραμα να προσφέρουμε καινοτόμες λύσεις μάρκετινγκ στις τοπικές επιχειρήσεις.",
    },
    {
      year: 2014,
      event: "Επέκταση δραστηριοτήτων σε όλη την Άρτα",
      description: "Διευρύναμε το πελατολόγιό μας και αναπτύξαμε νέες υπηρεσίες για να καλύψουμε περισσότερες ανάγκες.",
    },
    {
      year: 2016,
      event: "Λανσάρισμα του τμήματος ψηφιακού μάρκετινγκ",
      description: "Προσαρμοστήκαμε στις νέες τάσεις της αγοράς, προσφέροντας ολοκληρωμένες ψηφιακές λύσεις.",
    },
    {
      year: 2018,
      event: "Βράβευση για την Καλύτερη Διαφημιστική Καμπάνια στην Ήπειρο",
      description:
        "Η δημιουργικότητα και η αποτελεσματικότητα της δουλειάς μας αναγνωρίστηκε με αυτή τη σημαντική διάκριση.",
    },
    {
      year: 2020,
      event: "Επέτειος 7 ετών και δημιουργία τμήματος σχεδίασης προϊόντων",
      description: "Γιορτάσαμε την επταετία μας επεκτείνοντας τις υπηρεσίες μας στον τομέα του product design.",
    },
    {
      year: 2023,
      event: "Συνεργασία με μεγάλες εταιρείες σε όλη την Ελλάδα",
      description: "Η φήμη μας ξεπέρασε τα όρια της Ηπείρου, με συνεργασίες που επεκτείνονται σε όλη τη χώρα.",
    },
  ]

  return (
    <div className="relative">
      {/* Timeline line */}
      <motion.div
        className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#01FFFF] via-[#01A9FF] to-[#01FFFF]"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />

      {milestones.map((milestone, index) => (
        <motion.div
          key={index}
          className="mb-12 flex items-start relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {/* Year bubble */}
          <motion.div
            className="flex-shrink-0 z-10"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] flex items-center justify-center text-[#07141C] font-bold shadow-lg shadow-cyan-500/20">
              {milestone.year}
            </div>
          </motion.div>

          {/* Content */}
          <div className="ml-6 flex-grow">
            <div className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-4 rounded-lg border border-cyan-900/30 shadow-md hover:border-[#01FFFF]/30 transition-colors">
              <h3 className="text-xl font-bold text-white">{milestone.event}</h3>
              {milestone.description && <p className="mt-2 text-gray-300 text-sm">{milestone.description}</p>}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
