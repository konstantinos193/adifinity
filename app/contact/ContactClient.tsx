"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import ContactForm from "../components/ContactForm"
import { MapPin, Phone, Mail, Clock, Globe, Share2, Users } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/components/useTranslations"

// Dynamically import the map component
const Map = dynamic(() => import("../components/Map"), { ssr: false })

export function ContactClient() {
  const { t } = useTranslations()

  const schedule = [
    { day: t('contact_page.schedule.monday'), hours: ['09:00 - 14:30'] },
    { day: t('contact_page.schedule.tuesday'), hours: ['09:00 - 14:30', '18:00 - 21:00'] },
    { day: t('contact_page.schedule.wednesday'), hours: ['09:00 - 14:30'] },
    { day: t('contact_page.schedule.thursday'), hours: ['09:00 - 14:30', '18:00 - 21:00'] },
    { day: t('contact_page.schedule.friday'), hours: ['09:00 - 14:30', '18:00 - 21:00'] },
    { day: t('contact_page.schedule.saturday'), hours: [t('contact_page.closed')] },
    { day: t('contact_page.schedule.sunday'), hours: [t('contact_page.closed')] }
  ]

  const formatHours = (hours: string[]) => {
    return hours.join(' & ')
  }

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24] overflow-hidden">
      {/* Hero Section with Subtle Background */}
      <div className="relative mb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#07141C]/90"></div>
          <div className="absolute inset-0">
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
            {/* Subtle glow in top-right */}
            <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-[#01FFFF]/5 rounded-full blur-[100px]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('contact_page.hero_title')}
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t('contact_page.hero_description')}
            </motion.p>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Form - 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div id="contact-form">
              <h2 className="text-2xl font-bold mb-6 text-[#01FFFF]">{t('contact_page.form.title')}</h2>
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Info & Map - 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Info Card */}
            <motion.div
              className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30 mb-8"
              whileHover={{ boxShadow: "0 10px 25px rgba(1, 255, 255, 0.1)", borderColor: "rgba(1, 255, 255, 0.3)" }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[#01FFFF]">{t('contact_page.contact_info')}</h2>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-[#01FFFF]/10 p-2 rounded-lg mr-4">
                    <MapPin className="text-[#01FFFF] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{t('contact_page.address')}</h3>
                    <p className="text-gray-300 text-sm">{t('contact_page.contact_details.address_text')}</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-[#01FFFF]/10 p-2 rounded-lg mr-4">
                    <Phone className="text-[#01FFFF] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{t('contact_page.phone')}</h3>
                    <p className="text-gray-300 text-sm">{t('contact_page.contact_details.phone_text')}</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-[#01FFFF]/10 p-2 rounded-lg mr-4">
                    <Mail className="text-[#01FFFF] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{t('contact_page.email')}</h3>
                    <p className="text-gray-300 text-sm">{t('contact_page.contact_details.email_text')}</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-[#01FFFF]/10 p-2 rounded-lg mr-4">
                    <Clock className="text-[#01FFFF] h-5 w-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-medium text-white mb-3">{t('contact_page.working_hours')}</h3>
                    <div className="space-y-2">
                      {schedule.map((scheduleItem, index) => (
                        <div 
                          key={scheduleItem.day}
                          className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                            scheduleItem.hours[0] === t('contact_page.closed') 
                              ? 'bg-red-500/10 border border-red-500/20' 
                              : 'bg-[#071218] hover:bg-[#01FFFF]/5 border border-cyan-900/30'
                          }`}
                        >
                          <span className="text-sm font-medium text-white">{scheduleItem.day}</span>
                          <div className="text-right">
                            {formatHours(scheduleItem.hours).split(' & ').map((time, idx) => (
                              <span 
                                key={idx} 
                                className={`text-sm ${
                                  time === t('contact_page.closed') 
                                    ? 'text-red-400' 
                                    : 'text-[#01FFFF]'
                                }`}
                              >
                                {time}
                                {idx < formatHours(scheduleItem.hours).split(' & ').length - 1 && (
                                  <span className="mx-1 text-gray-500">&</span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-cyan-900/30">
                <h3 className="font-medium text-white mb-4">{t('contact_page.follow_us')}</h3>
                <div className="flex space-x-4">
                  <Link href={t('contact_page.social_links.facebook')} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      className="bg-[#071218] hover:bg-[#01FFFF]/10 border border-cyan-900/50 hover:border-[#01FFFF]/50 p-2 rounded-full transition-colors"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Globe className="text-[#01FFFF] h-5 w-5" />
                    </motion.div>
                  </Link>

                  <Link href={t('contact_page.social_links.instagram')} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      className="bg-[#071218] hover:bg-[#01FFFF]/10 border border-cyan-900/50 hover:border-[#01FFFF]/50 p-2 rounded-full transition-colors"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Share2 className="text-[#01FFFF] h-5 w-5" />
                    </motion.div>
                  </Link>

                  <Link
                    href={t('contact_page.social_links.linkedin')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      className="bg-[#071218] hover:bg-[#01FFFF]/10 border border-cyan-900/50 hover:border-[#01FFFF]/50 p-2 rounded-full transition-colors"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Users className="text-[#01FFFF] h-5 w-5" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Map Card */}
            <motion.div
              className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30 h-[300px]"
              whileHover={{ boxShadow: "0 10px 25px rgba(1, 255, 255, 0.1)", borderColor: "rgba(1, 255, 255, 0.3)" }}
            >
              <Map />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
