"use client"

import { Metadata } from "next"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, AlertTriangle, Users, FileText, Mail, ArrowRight, CheckCircle } from "lucide-react"
import { useTranslations } from "@/components/useTranslations"

export default function DSAContentClient() {
  const { t } = useTranslations()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07141C] to-[#030B10]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/20 rounded-full border border-[#01FFFF]/30">
                <Shield className="text-[#01FFFF]" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('dsa_compliance.hero.title')}
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              {t('dsa_compliance.hero.last_updated')}
            </p>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {t('dsa_compliance.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            
            {/* Content Moderation Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText className="text-[#01FFFF]" size={28} />
                {t('dsa_compliance.content_moderation.title')}
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('dsa_compliance.content_moderation.description')}
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t('dsa_compliance.content_moderation.prohibited_content.title')}</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {t('dsa_compliance.content_moderation.prohibited_content.items').map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t('dsa_compliance.content_moderation.moderation_process.title')}</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {t('dsa_compliance.content_moderation.moderation_process.items').map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* User Reporting Mechanisms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="text-[#01FFFF]" size={28} />
                {t('dsa_compliance.user_reporting.title')}
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('dsa_compliance.user_reporting.description')}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t('dsa_compliance.user_reporting.online_form.title')}</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      {t('dsa_compliance.user_reporting.online_form.description')}
                    </p>
                    <Link 
                      href="/report-content" 
                      className="inline-flex items-center gap-2 text-[#01FFFF] hover:underline text-sm"
                    >
                      {t('dsa_compliance.user_reporting.online_form.link')}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t('dsa_compliance.user_reporting.email_report.title')}</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      {t('dsa_compliance.user_reporting.email_report.description')}
                    </p>
                    <a 
                      href="mailto:adenfinity@gmail.com" 
                      className="inline-flex items-center gap-2 text-[#01FFFF] hover:underline text-sm"
                    >
                      adenfinity@gmail.com
                      <ArrowRight size={14} />
                    </a>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t('dsa_compliance.user_reporting.phone_report.title')}</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      {t('dsa_compliance.user_reporting.phone_report.description')}
                    </p>
                    <a 
                      href="tel:+302681303007" 
                      className="inline-flex items-center gap-2 text-[#01FFFF] hover:underline text-sm"
                    >
                      2681 303007
                      <ArrowRight size={14} />
                    </a>
                  </div>
                  
                  </div>
              </div>
            </motion.div>

            {/* Transparency Reports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="text-[#01FFFF]" size={28} />
                {t('dsa_compliance.transparency_reports.title')}
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('dsa_compliance.transparency_reports.description')}
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t('dsa_compliance.transparency_reports.q1_2026.title')}</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      {t('dsa_compliance.transparency_reports.q1_2026.description')}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div className="text-center">
                        <div className="text-[#01FFFF] font-bold text-lg">0</div>
                        <div className="text-gray-400">{t('dsa_compliance.transparency_reports.q1_2026.stats.content_reports')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#01FFFF] font-bold text-lg">0</div>
                        <div className="text-gray-400">{t('dsa_compliance.transparency_reports.q1_2026.stats.removed_items')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#01FFFF] font-bold text-lg">0</div>
                        <div className="text-gray-400">{t('dsa_compliance.transparency_reports.q1_2026.stats.account_suspensions')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#01FFFF] font-bold text-lg">100%</div>
                        <div className="text-gray-400">{t('dsa_compliance.transparency_reports.q1_2026.stats.response_rate')}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t('dsa_compliance.transparency_reports.annual_report.title')}</h4>
                    <p className="text-gray-400 text-sm mb-3">
                      {t('dsa_compliance.transparency_reports.annual_report.description')}
                    </p>
                    <Link 
                      href="/transparency-report-2025" 
                      className="inline-flex items-center gap-2 text-[#01FFFF] hover:underline text-sm"
                    >
                      {t('dsa_compliance.transparency_reports.annual_report.link')}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Mail className="text-[#01FFFF]" size={28} />
                {t('dsa_compliance.contact.title')}
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('dsa_compliance.contact.description')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="text-[#01FFFF]" size={20} />
                    <span><strong>{t('dsa_compliance.contact.compliance_email')}:</strong> adenfinity@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="text-[#01FFFF]" size={20} />
                    <span><strong>{t('dsa_compliance.contact.content_reports')}:</strong> adenfinity@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Users className="text-[#01FFFF]" size={20} />
                    <span><strong>{t('dsa_compliance.contact.dsa_officer')}:</strong> adenfinity@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="text-[#01FFFF]" size={20} />
                    <span><strong>{t('dsa_compliance.contact.address')}:</strong> Vas. Pyrrou 30, Arta</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('dsa_compliance.cta.title')}
            </h2>
            <p className="text-gray-400 mb-8">
              {t('dsa_compliance.cta.description')}
            </p>
            <Link
              href="/report-content"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-medium py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              {t('dsa_compliance.cta.button')}
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
