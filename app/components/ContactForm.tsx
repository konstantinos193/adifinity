'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
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
      <button
        type="submit"
        className="w-full px-4 py-2 bg-[#01FFFF] text-[#07141C] font-bold rounded-md hover:bg-opacity-80 transition-colors"
      >
        Αποστολή
      </button>
    </form>
  )
}

