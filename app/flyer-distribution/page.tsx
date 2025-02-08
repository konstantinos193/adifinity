'use client'

import { motion } from 'framer-motion'
import { MapPin, Building, Target, CheckCircle } from 'lucide-react'
import { DistributionType } from '../components/DistributionType'
import { BenefitCard } from '../components/BenefitCard'
import { CTASection } from '../components/CTASection'

export default function FlyerDistributionPage() {
  const distributionTypes = [
    {
      icon: MapPin,
      title: "Πόρτα-πόρτα",
      description: "Διανομή φυλλαδίων σε οικίες & πολυκατοικίες",
      items: [
        "Στοχευμένη κάλυψη συγκεκριμένων περιοχών",
        "Ενημέρωση κατοίκων για προσφορές & νέες επιχειρήσεις"
      ]
    },
    {
      icon: Building,
      title: "Διανομή σε επιχειρήσεις",
      description: "Παράδοση εντύπων σε επαγγελματικούς χώρους",
      items: [
        "Ενημέρωση επαγγελματιών για προϊόντα & υπηρεσίες",
        "Τοποθέτηση διαφημιστικού υλικού σε σημεία υψηλής επισκεψιμότητας"
      ]
    },
    {
      icon: Target,
      title: "Στοχευμένη διανομή",
      description: "Χειροδιανομή σε πολυσύχναστα σημεία",
      items: [
        "Τοποθέτηση εντύπων σε stands & σημεία ενδιαφέροντος",
        "Ειδικές προωθητικές καμπάνιες με brand ambassadors"
      ]
    }
  ]

  const benefits = [
    "Στρατηγικός σχεδιασμός διανομής για μέγιστη αποτελεσματικότητα",
    "Αναφορές & reporting για την πορεία της καμπάνιας σας",
    "Έμπειρη ομάδα διανομέων με επαγγελματισμό",
    "Συνδυαστικές υπηρεσίες με εκτύπωση & σχεδιασμό"
  ]

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
            Έντυποδιανομές
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-[#01FFFF]">
            Στοχευμένη διανομή εντύπων για μέγιστη προβολή!
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Η έντυπη διαφήμιση παραμένει ένας από τους πιο αποτελεσματικούς τρόπους προώθησης, αρκεί να φτάσει στο σωστό κοινό. Η εταιρεία μας αναλαμβάνει τη στρατηγική διανομή φυλλαδίων, καταλόγων και διαφημιστικών εντύπων σε στοχευμένες τοποθεσίες, εξασφαλίζοντας μέγιστη απήχηση και άμεσα αποτελέσματα.
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Τύποι Έντυποδιανομής που προσφέρουμε:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {distributionTypes.map((type, index) => (
              <DistributionType key={index} {...type} />
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Γιατί να επιλέξετε εμάς;</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </motion.div>

        <CTASection />
      </div>
    </main>
  )
}
