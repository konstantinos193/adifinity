import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="επικοινωνία" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12">Επικοινωνήστε Μαζί Μας</h2>
        <p className="text-center mb-8">
          Ενδιαφέρεστε να μάθετε πώς μπορούμε να σας υποστηρίξουμε; Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε σύντομα!
        </p>
        <motion.form 
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Όνομα</label>
            <input type="text" id="name" className="w-full px-4 py-2 bg-[#0A1A24] border border-[#01FFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#01FFFF]" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 bg-[#0A1A24] border border-[#01FFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#01FFFF]" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Μήνυμα</label>
            <textarea id="message" rows={4} className="w-full px-4 py-2 bg-[#0A1A24] border border-[#01FFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#01FFFF]"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">Αποστολή</button>
        </motion.form>
      </div>
    </section>
  )
}

