import { motion } from 'framer-motion'
import { useTranslations } from '@/components/useTranslations'
import { useLocale } from '@/components/LocaleProvider'
import { useEffect, useState } from 'react'

export default function ContactSection() {
  const { t } = useTranslations()
  const { isReady } = useLocale()
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  if (!isReady) {
    // Render fallback to prevent hydration mismatch
    return (
      <section id="επικοινωνία" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Επικοινωνήστε Μαζί Μας</h2>
          <p className="text-center mb-8">
            Ενδιαφέρεστε να μάθετε πώς μπορούμε να σας υποστηρίξουμε; Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε σύντομα!
          </p>
          <div className="max-w-lg mx-auto">
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
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section id="επικοινωνία" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12">{t('contact.title')}</h2>
        <p className="text-center mb-8">
          {t('contact.subtitle')}
        </p>
        {isClient ? (
          <motion.form 
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">{t('contact.form.name')}</label>
              <input type="text" id="name" className="w-full px-4 py-2 bg-[#0A1A24] border border-[#01FFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#01FFFF]" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">{t('contact.form.email')}</label>
              <input type="email" id="email" className="w-full px-4 py-2 bg-[#0A1A24] border border-[#01FFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#01FFFF]" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">{t('contact.form.message')}</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 bg-[#0A1A24] border border-[#01FFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#01FFFF]"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">{t('contact.form.submit')}</button>
          </motion.form>
        ) : (
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">{t('contact.form.name')}</label>
              <input type="text" id="name" className="w-full px-4 py-2 bg-[#0A1A24] border border-[#01FFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#01FFFF]" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">{t('contact.form.email')}</label>
              <input type="email" id="email" className="w-full px-4 py-2 bg-[#0A1A24] border border-[#01FFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#01FFFF]" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">{t('contact.form.message')}</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 bg-[#0A1A24] border border-[#01FFFF] rounded-md focus:outline-none focus:ring-2 focus:ring-[#01FFFF]"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">{t('contact.form.submit')}</button>
          </form>
        )}
      </div>
    </section>
  )
}

