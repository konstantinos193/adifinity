"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Send, Loader2, Upload } from "lucide-react"
import { useContactForm } from "@/hooks/useContactForm"
import { useTranslations } from "@/components/useTranslations"

export default function ContactForm() {
  const { t } = useTranslations()

  const {
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
  } = useContactForm()

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
              {t('contact_page.form.name')} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors"
              placeholder={t('contact_page.form.name_placeholder')}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#01FFFF] text-sm font-medium mb-1">
              {t('contact_page.form.email')} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors"
              placeholder={t('contact_page.form.email_placeholder')}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-[#01FFFF] text-sm font-medium mb-1">
              {t('contact_page.form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors"
              placeholder={t('contact_page.form.phone_placeholder')}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-[#01FFFF] text-sm font-medium mb-1">
              {t('contact_page.form.subject')}
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors"
            >
              <option value="" disabled>
                {t('contact_page.form.subject_placeholder')}
              </option>
              <option value="Γενική Πληροφορία">{t('contact_page.form.subject_options.general_info')}</option>
              <option value="Προσφορά">{t('contact_page.form.subject_options.request_quote')}</option>
              <option value="Συνεργασία">{t('contact_page.form.subject_options.partnership')}</option>
              <option value="Άλλο">{t('contact_page.form.subject_options.other')}</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-[#01FFFF] text-sm font-medium mb-1">
            {t('contact_page.form.message')} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-[#071218] border border-cyan-900/50 focus:border-[#01FFFF] rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-[#01FFFF]/50 transition-colors resize-none"
            placeholder={t('contact_page.form.message_placeholder')}
          ></textarea>
        </div>

        <div>
          <label className="block text-[#01FFFF] text-sm font-medium mb-1">
            {t('contact_page.form.attachment')}
          </label>
          <div
            className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
              isDragging
                ? "border-[#01FFFF] bg-[#01FFFF]/5"
                : "border-cyan-900/50 hover:border-[#01FFFF]/50 hover:bg-[#01FFFF]/5"
            }`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="text-center">
              <Upload className="mx-auto h-8 w-8 text-[#01FFFF] mb-2" />
              <p className="text-sm text-gray-300">
                {t('contact_page.form.attachment_drag')}
              </p>
              {formData.file && (
                <p className="mt-2 text-sm text-[#01FFFF]">
                  {t('contact_page.form.selected_file')}: {formData.file.name}
                </p>
              )}
            </div>
          </div>
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
            className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#071218] font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-cyan-500/20 flex items-center justify-center min-w-[140px] disabled:opacity-50"
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(1, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="mr-2 animate-spin" />
                {t('contact_page.form.submit')}...
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                {t('contact_page.form.submit')}
              </>
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}
