import { motion } from 'framer-motion'
import { ChartBarIcon, MegaphoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const services = [
  { 
    title: 'Στρατηγική Μάρκετινγκ', 
    icon: ChartBarIcon,
    description: 'Αναπτύσσουμε εξατομικευμένες στρατηγικές που συνδέουν την επιχείρησή σας με το κοινό σας.'
  },
  { 
    title: 'Διαφημιστικές Καμπάνιες', 
    icon: MegaphoneIcon,
    description: 'Από την ιδέα μέχρι την υλοποίηση, δημιουργούμε καμπάνιες που αποδίδουν πραγματικά.'
  },
  { 
    title: 'Ψηφιακές Λύσεις', 
    icon: GlobeAltIcon,
    description: 'Εξοπλίζουμε την επιχείρησή σας με καινοτόμα εργαλεία για το ψηφιακό μέλλον.'
  },
]

export default function ServicesSection() {
  return (
    <section id="υπηρεσίες" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12">Οι Υπηρεσίες Μας</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-[#07141C] p-6 rounded-xl border border-transparent hover:border-[#01FFFF] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, borderColor: '#01FFFF' }}
              transition={{ duration: 0.5 }}
            >
              <service.icon className="w-12 h-12 text-[#01FFFF] mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="opacity-80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

