import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Με τη βοήθειά τους, καταφέραμε να διπλασιάσουμε την απήχησή μας σε μόλις 3 μήνες. Εξαιρετικοί συνεργάτες!',
    name: 'Γιώργος Παπαδόπουλος',
    title: 'Επιχειρηματίας'
  },
  {
    quote: 'Η ομάδα τους μας καθοδήγησε σε κάθε βήμα, προσφέροντας στρατηγικές που πραγματικά έκαναν τη διαφορά.',
    name: 'Μαρία Καραγιάννη',
    title: 'Ιδιοκτήτρια Καταστήματος'
  },
  {
    quote: 'Ευχαριστούμε που μας βοηθήσατε να κάνουμε την ιδέα μας πραγματικότητα. Το αποτέλεσμα ξεπέρασε τις προσδοκίες μας!',
    name: 'Κώστας Δημητρίου',
    title: 'Startup Founder'
  }
]

export default function TestimonialsSection() {
  return (
    <section id="μαρτυρίες" className="py-20 bg-gradient-to-b from-[#0A1A24] to-[#07141C]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-[#01FFFF]">Η Φωνή των Πελατών μας</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#0A1A24] p-8 rounded-lg shadow-lg border border-transparent hover:border-[#01FFFF] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="mb-4 text-lg italic text-white">"{testimonial.quote}"</p>
              <h4 className="text-xl font-bold text-[#01FFFF]">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

