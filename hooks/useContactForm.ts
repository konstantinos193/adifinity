"use client"

import { useState, useCallback } from "react"

interface ContactFormData {
  name: string
  email: string
  message: string
  phone: string
  subject: string
  file: File | null
}

interface SubmitStatus {
  message: string
  isError: boolean
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
    subject: "",
    file: null,
  })

  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null)

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, file: files[0] }))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }))
    }
  }

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "", phone: "", subject: "", file: null })
    setSubmitStatus(null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formDataToSend.append(key, value)
        }
      })

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      })

      if (!response.ok) throw new Error("Failed to send message")

      setSubmitStatus({
        message: "Το μήνυμά σας στάλθηκε με επιτυχία!",
        isError: false,
      })
      resetForm()
    } catch (error) {
      setSubmitStatus({
        message: "Παρουσιάστηκε σφάλμα κατά την αποστολή του μηνύματος.",
        isError: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    isDragging,
    isSubmitting,
    submitStatus,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleChange,
    handleFileChange,
    handleSubmit,
  }
}
