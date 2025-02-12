'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Failed to send message')

      setSubmitStatus({
        message: 'Το μήνυμά σας στάλθηκε με επιτυχία!',
        isError: false
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus({
        message: 'Παρουσιάστηκε σφάλμα κατά την αποστολή του μηνύματος.',
        isError: true
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Όνομα</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-[#0A1A24] border border-[#01FFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#01FFFF]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-[#0A1A24] border border-[#01FFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#01FFFF]"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Μήνυμα</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 bg-[#0A1A24] border border-[#01FFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#01FFFF]"
        ></textarea>
      </div>
      
      {submitStatus && (
        <div className={`text-sm ${submitStatus.isError ? 'text-red-500' : 'text-green-500'}`}>
          {submitStatus.message}
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 bg-[#01FFFF] text-[#07141C] font-bold rounded-md hover:bg-opacity-80 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Αποστολή...' : 'Αποστολή'}
      </button>
    </form>
  )
}

