"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { AlertTriangle, Mail, Phone, ArrowLeft, ArrowRight, Shield, Clock } from "lucide-react"
import { useTranslations } from "@/components/useTranslations"

interface ReportContentClientProps {
  locale?: string
}

export default function ReportContentClient({ locale }: ReportContentClientProps) {
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
                <AlertTriangle className="text-[#01FFFF]" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              {t('hero.subtitle')}
            </p>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reporting Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            
            {/* Quick Reporting Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">{t('report_content.how_to_report')}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Email Reporting */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-[#01FFFF]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/20 rounded-lg border border-[#01FFFF]/30">
                      <Mail className="text-[#01FFFF]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{t('report_content.email_report')}</h3>
                      <p className="text-gray-400 text-sm">{t('report_content.email_description')}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="text-gray-400 text-sm">
                      <strong>{t('report_content.to')}</strong> adenfinity@gmail.com
                    </div>
                    <div className="text-gray-400 text-sm">
                      <strong>{t('report_content.subject')}</strong> {t('report_content.form.title')} - [Brief Description]
                    </div>
                    <div className="text-gray-400 text-sm">
                      <strong>{t('report_content.include')}:</strong>
                      <ul className="mt-1 ml-4 space-y-1">
                        <li>• {t('report_content.form.content_url_label')}</li>
                        <li>• {t('report_content.form.description_label')}</li>
                        <li>• {t('report_content.contact_info')}</li>
                        <li>• {t('report_content.supporting_evidence')}</li>
                      </ul>
                    </div>
                  </div>
                  
                  <a 
                    href="mailto:adenfinity@gmail.com?subject=Content Report&body=URL of content:%0A%0ADescription of issue:%0A%0AContact information (optional):%0A%0AAdditional details:"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#01FFFF]/20 to-[#01A9FF]/20 text-[#01FFFF] border border-[#01FFFF]/30 px-4 py-2 rounded-lg hover:bg-[#01FFFF]/10 transition-colors"
                  >
                    {t('report_content.send_email_report')}
                    <ArrowRight size={16} />
                  </a>
                </div>

                {/* Phone Reporting */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-[#01FFFF]/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/20 rounded-lg border border-[#01FFFF]/30">
                      <Phone className="text-[#01FFFF]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{t('report_content.phone_report')}</h3>
                      <p className="text-gray-400 text-sm">{t('report_content.phone_description')}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="text-gray-400 text-sm">
                      <strong>{t('report_content.number')}</strong> 2681 303007
                    </div>
                    <div className="text-gray-400 text-sm">
                      <strong>{t('report_content.hours')}</strong> Monday-Friday, 9:00 AM - 5:00 PM (EET)
                    </div>
                    <div className="text-gray-400 text-sm">
                      <strong>{t('report_content.for')}</strong> Urgent safety concerns or illegal content requiring immediate attention
                    </div>
                  </div>
                  
                  <a 
                    href="tel:+302681303007"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#01FFFF]/20 to-[#01A9FF]/20 text-[#01FFFF] border border-[#01FFFF]/30 px-4 py-2 rounded-lg hover:bg-[#01FFFF]/10 transition-colors"
                  >
                    {t('report_content.call_now')}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* What Happens Next */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="text-[#01FFFF]" size={28} />
                {t('report_content.what_happens_next')}
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#01FFFF] text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t('report_content.report_received')}</h4>
                    <p className="text-gray-400 text-sm">
                      {t('report_content.info.response_time')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#01FFFF] text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t('report_content.content_review')}</h4>
                    <p className="text-gray-400 text-sm">
                      {t('report_content.content_review_desc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#01FFFF] text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t('report_content.action_taken')}</h4>
                    <p className="text-gray-400 text-sm">
                      {t('report_content.action_taken_desc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#01FFFF] text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{t('report_content.response_sent')}</h4>
                    <p className="text-gray-400 text-sm">
                      {t('report_content.response_sent_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Protection Measures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="text-[#01FFFF]" size={28} />
                {t('report_content.your_protection')}
              </h2>
              
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('report_content.protection_description')}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t('report_content.confidentiality')}</h4>
                    <p className="text-gray-400 text-sm">
                      {t('report_content.confidentiality_desc')}
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t('report_content.no_retaliation')}</h4>
                    <p className="text-gray-400 text-sm">
                      {t('report_content.no_retaliation_desc')}
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t('report_content.anonymous_reporting')}</h4>
                    <p className="text-gray-400 text-sm">
                      {t('report_content.anonymous_reporting_desc')}
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t('report_content.legal_protection')}</h4>
                    <p className="text-gray-400 text-sm">
                      {t('report_content.legal_protection_desc')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Back to DSA Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <Link
                href="/dsa-compliance"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                {t('report_content.back_to_dsa')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
