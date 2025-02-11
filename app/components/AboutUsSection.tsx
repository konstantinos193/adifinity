import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutUsSection() {
  return (
    <section id="ποιοι-είμαστε" className="py-20 bg-[#0A1A24]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12">Γνωρίστε μας</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/placeholder.svg" 
              alt="Our Team" 
              width={500} 
              height={300} 
              className="rounded-lg"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Η Αποστολή Μας</h3>
            <p className="mb-4 opacity-80">
              Είμαστε μια ομάδα ειδικών στο μάρκετινγκ που συνδυάζει δημιουργικότητα, τεχνογνωσία και πάθος.
            </p>
            <p className="opacity-80">
              Στόχος μας είναι να αναδείξουμε την επιχείρησή σας και να δημιουργήσουμε αξία για τους πελάτες σας. Πιστεύουμε σε συνεργασίες που βασίζονται στην εμπιστοσύνη και στα αποτελέσματα.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

