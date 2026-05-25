"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Database, Mail, Phone, MapPin, FileText, Users, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function PrivacyPolicyContent() {
  const t = useTranslations("privacy_policy")
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
              {t("title")}
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              {t("lastUpdated")}
            </p>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {t("description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            
            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Database className="text-[#01FFFF]" size={28} />
                {t("sections.informationWeCollect.title")}
              </h2>
              <div className="space-y-4">
                
                {/* Personal Information */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{t("sections.informationWeCollect.personal.title")}</h3>
                  <p className="text-gray-400 leading-relaxed mb-3">
                    {t("sections.informationWeCollect.personal.description")}
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span><strong>Contact Information:</strong> {t("sections.informationWeCollect.personal.items.contact")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span><strong>Business Information:</strong> {t("sections.informationWeCollect.personal.items.business")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span><strong>Communication Data:</strong> {t("sections.informationWeCollect.personal.items.communication")}</span>
                    </li>
                  </ul>
                </div>

                {/* Technical Information */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{t("sections.informationWeCollect.technical.title")}</h3>
                  <p className="text-gray-400 leading-relaxed mb-3">
                    {t("sections.informationWeCollect.technical.description")}
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span><strong>Usage Data:</strong> {t("sections.informationWeCollect.technical.items.usage")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span><strong>Device Information:</strong> {t("sections.informationWeCollect.technical.items.device")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span><strong>Cookies and Tracking:</strong> {t("sections.informationWeCollect.technical.items.cookies")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye className="text-[#01FFFF]" size={28} />
                {t("sections.howWeUse.title")}
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.howWeUse.description")}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t("sections.howWeUse.categories.service.title")}</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• {t("sections.howWeUse.categories.service.items.0")}</li>
                      <li>• {t("sections.howWeUse.categories.service.items.1")}</li>
                      <li>• {t("sections.howWeUse.categories.service.items.2")}</li>
                      <li>• {t("sections.howWeUse.categories.service.items.3")}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t("sections.howWeUse.categories.communication.title")}</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• {t("sections.howWeUse.categories.communication.items.0")}</li>
                      <li>• {t("sections.howWeUse.categories.communication.items.1")}</li>
                      <li>• {t("sections.howWeUse.categories.communication.items.2")}</li>
                      <li>• {t("sections.howWeUse.categories.communication.items.3")}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t("sections.howWeUse.categories.analytics.title")}</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• {t("sections.howWeUse.categories.analytics.items.0")}</li>
                      <li>• {t("sections.howWeUse.categories.analytics.items.1")}</li>
                      <li>• {t("sections.howWeUse.categories.analytics.items.2")}</li>
                      <li>• {t("sections.howWeUse.categories.analytics.items.3")}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t("sections.howWeUse.categories.legal.title")}</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• {t("sections.howWeUse.categories.legal.items.0")}</li>
                      <li>• {t("sections.howWeUse.categories.legal.items.1")}</li>
                      <li>• {t("sections.howWeUse.categories.legal.items.2")}</li>
                      <li>• {t("sections.howWeUse.categories.legal.items.3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Legal Basis for Processing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t("sections.legalBasis.title")}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.legalBasis.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#01FFFF] text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">{t("sections.legalBasis.bases.0.title")}</p>
                      <p className="text-gray-400 text-sm">
                        {t("sections.legalBasis.bases.0.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#01FFFF] text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">{t("sections.legalBasis.bases.1.title")}</p>
                      <p className="text-gray-400 text-sm">
                        {t("sections.legalBasis.bases.1.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#01FFFF] text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">{t("sections.legalBasis.bases.2.title")}</p>
                      <p className="text-gray-400 text-sm">
                        {t("sections.legalBasis.bases.2.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#01FFFF] text-xs font-bold">4</span>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">{t("sections.legalBasis.bases.3.title")}</p>
                      <p className="text-gray-400 text-sm">
                        {t("sections.legalBasis.bases.3.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Sharing and Disclosure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="text-[#01FFFF]" size={28} />
                {t("sections.dataSharing.title")}
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.dataSharing.description")}
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t("sections.dataSharing.categories.0.title")}</h4>
                    <p className="text-gray-400 text-sm">
                      {t("sections.dataSharing.categories.0.description")}
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t("sections.dataSharing.categories.1.title")}</h4>
                    <p className="text-gray-400 text-sm">
                      {t("sections.dataSharing.categories.1.description")}
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t("sections.dataSharing.categories.2.title")}</h4>
                    <p className="text-gray-400 text-sm">
                      {t("sections.dataSharing.categories.2.description")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lock className="text-[#01FFFF]" size={28} />
                {t("sections.dataSecurity.title")}
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.dataSecurity.description")}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t("sections.dataSecurity.categories.technical.title")}</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• {t("sections.dataSecurity.categories.technical.items.0")}</li>
                      <li>• {t("sections.dataSecurity.categories.technical.items.1")}</li>
                      <li>• {t("sections.dataSecurity.categories.technical.items.2")}</li>
                      <li>• {t("sections.dataSecurity.categories.technical.items.3")}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t("sections.dataSecurity.categories.organizational.title")}</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• {t("sections.dataSecurity.categories.organizational.items.0")}</li>
                      <li>• {t("sections.dataSecurity.categories.organizational.items.1")}</li>
                      <li>• {t("sections.dataSecurity.categories.organizational.items.2")}</li>
                      <li>• {t("sections.dataSecurity.categories.organizational.items.3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Your GDPR Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t("sections.gdprRights.title")}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.gdprRights.description")}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Eye className="text-[#01FFFF]" size={16} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{t("sections.gdprRights.rights.0.title")}</h4>
                      <p className="text-gray-400 text-sm">
                        {t("sections.gdprRights.rights.0.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FileText className="text-[#01FFFF]" size={16} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{t("sections.gdprRights.rights.1.title")}</h4>
                      <p className="text-gray-400 text-sm">
                        {t("sections.gdprRights.rights.1.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Database className="text-[#01FFFF]" size={16} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{t("sections.gdprRights.rights.2.title")}</h4>
                      <p className="text-gray-400 text-sm">
                        {t("sections.gdprRights.rights.2.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="text-[#01FFFF]" size={16} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{t("sections.gdprRights.rights.3.title")}</h4>
                      <p className="text-gray-400 text-sm">
                        {t("sections.gdprRights.rights.3.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="text-[#01FFFF]" size={16} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{t("sections.gdprRights.rights.4.title")}</h4>
                      <p className="text-gray-400 text-sm">
                        {t("sections.gdprRights.rights.4.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t("sections.dataRetention.title")}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.dataRetention.description")}
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t("sections.dataRetention.periods.title")}</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li dangerouslySetInnerHTML={{ __html: t("sections.dataRetention.periods.items.0") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("sections.dataRetention.periods.items.1") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("sections.dataRetention.periods.items.2") }}></li>
                      <li dangerouslySetInnerHTML={{ __html: t("sections.dataRetention.periods.items.3") }}></li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* International Data Transfers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t("sections.internationalTransfers.title")}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed">
                  {t("sections.internationalTransfers.description")}
                </p>
                <ul className="mt-4 space-y-2 text-gray-400">
                  <li>• {t("sections.internationalTransfers.safeguards.0")}</li>
                  <li>• {t("sections.internationalTransfers.safeguards.1")}</li>
                  <li>• {t("sections.internationalTransfers.safeguards.2")}</li>
                  <li>• {t("sections.internationalTransfers.safeguards.3")}</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Mail className="text-[#01FFFF]" size={28} />
                {t("sections.contact.title")}
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.contact.description")}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="text-[#01FFFF]" size={20} />
                    <span><strong>Email:</strong> {t("sections.contact.details.email")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="text-[#01FFFF]" size={20} />
                    <span><strong>Phone:</strong> {t("sections.contact.details.phone")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="text-[#01FFFF]" size={20} />
                    <span><strong>Address:</strong> {t("sections.contact.details.address")}</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-900/50 rounded">
                  <h4 className="text-white font-medium mb-2">{t("sections.contact.dpo.title")}</h4>
                  <p className="text-gray-400 text-sm">
                    {t("sections.contact.dpo.description")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Complaints */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t("sections.complaints.title")}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed">
                  {t("sections.complaints.description")}
                </p>
                <div className="mt-4 bg-gray-900/50 rounded p-4">
                  <h4 className="text-white font-medium mb-2">{t("sections.complaints.authority.name")}</h4>
                  <p className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: t("sections.complaints.authority.details") }}>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Policy Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t("sections.policyUpdates.title")}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed">
                  {t("sections.policyUpdates.description")}
                </p>
                <ul className="mt-4 space-y-2 text-gray-400">
                  <li>• {t("sections.policyUpdates.methods.0")}</li>
                  <li>• {t("sections.policyUpdates.methods.1")}</li>
                  <li>• {t("sections.policyUpdates.methods.2")}</li>
                  <li>• {t("sections.policyUpdates.methods.3")}</li>
                </ul>
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
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-gray-400 mb-8">
              {t("cta.description")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-medium py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              {t("cta.button")}
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
