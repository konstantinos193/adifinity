"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    subject: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    message: string
    isError: boolean
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to send message")

      setSubmitStatus({
        message: "Το μήνυμά σας στάλθηκε με επιτυχία!",
        isError: false,
      })
      setFormData({ name: "", email: "", message: "", phone: "", subject: "" })
    } catch (error) {
      setSubmitStatus({
        message: "Παρουσιάστηκε σφάλμα κατά την αποστολή του μηνύματος.",
        isError: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-[#01FFFF] text-sm font-medium mb-1">
              Ονοματεπώνυμο *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors"
              placeholder="Το ονοματεπώνυμό σας"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#01FFFF] text-sm font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors"
              placeholder="Το email σας"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-[#01FFFF] text-sm font-medium mb-1">
              Τηλέφωνο
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors"
              placeholder="Το τηλέφωνό σας"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-[#01FFFF] text-sm font-medium mb-1">
              Θέμα
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors"
            >
              <option value="" disabled>
                Επιλέξτε θέμα
              </option>
              <option value="Γενική Πληροφορία">Γενική Πληροφορία</option>
              <option value="Προσφορά">Ζήτηση Προσφοράς</option>
              <option value="Συνεργασία">Συνεργασία</option>
              <option value="Άλλο">Άλλο</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-[#01FFFF] text-sm font-medium mb-1">
            Μήνυμα *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors resize-none"
            placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
          ></textarea>
        </div>

        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg ${
              submitStatus.isError
                ? "bg-red-900/20 border border-red-500/50 text-red-200"
                : "bg-green-900/20 border border-green-500/50 text-green-200"
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}

        <div className="flex justify-end">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#071218] font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-cyan-500/20 flex items-center justify-center min-w-[140px]"
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(1, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="mr-2 animate-spin" />
                Αποστολή...
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                Αποστολή
              </>
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}
