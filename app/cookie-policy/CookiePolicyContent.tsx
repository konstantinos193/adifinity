"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Cookie, Eye, Settings, FileText, Mail, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function CookiePolicyContent() {
  const t = useTranslations("cookie_policy")
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
                <Cookie className="text-[#01FFFF]" size={48} />
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
            
            {/* What are Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Cookie className="text-[#01FFFF]" size={28} />
                {t("sections.whatAreCookies.title")}
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.whatAreCookies.description")}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {t("sections.whatAreCookies.secondParagraph")}
                </p>
              </div>
            </motion.div>

            {/* Types of Cookies We Use */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Settings className="text-[#01FFFF]" size={28} />
                {t("sections.typesWeUse.title")}
              </h2>
              <div className="space-y-4">
                
                {/* Necessary Cookies */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Shield className="text-[#01FFFF]" size={20} />
                    {t("sections.typesWeUse.categories.necessary.title")}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-3">
                    {t("sections.typesWeUse.categories.necessary.description")}
                  </p>
                  <div className="bg-gray-900/50 rounded p-3">
                    <p className="text-sm text-gray-500 mb-2">{t("sections.typesWeUse.categories.necessary.examples")}</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {t.raw("sections.typesWeUse.categories.necessary.items").map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Eye className="text-[#01FFFF]" size={20} />
                    {t("sections.typesWeUse.categories.analytics.title")}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-3">
                    {t("sections.typesWeUse.categories.analytics.description")}
                  </p>
                  <div className="bg-gray-900/50 rounded p-3">
                    <p className="text-sm text-gray-500 mb-2">{t("sections.typesWeUse.categories.analytics.examples")}</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {t.raw("sections.typesWeUse.categories.analytics.items").map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="text-[#01FFFF]" size={20} />
                    {t("sections.typesWeUse.categories.marketing.title")}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-3">
                    {t("sections.typesWeUse.categories.marketing.description")}
                  </p>
                  <div className="bg-gray-900/50 rounded p-3">
                    <p className="text-sm text-gray-500 mb-2">{t("sections.typesWeUse.categories.marketing.examples")}</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {t.raw("sections.typesWeUse.categories.marketing.items").map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How We Use Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t("sections.howWeUse.title")}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.howWeUse.description")}
                </p>
                <ul className="space-y-3 text-gray-400">
                  {t.raw("sections.howWeUse.items").map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Managing Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t("sections.managing.title")}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.managing.description")}
                </p>
                <div className="space-y-3">
                  {t.raw("sections.managing.options").map((option: any, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#01FFFF]/20 border border-[#01FFFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#01FFFF] text-xs font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">{option.title}</p>
                        <p className="text-gray-400 text-sm">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Third-Party Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t("sections.thirdParty.title")}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.thirdParty.description")}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {t.raw("sections.thirdParty.services").map((service: any, index: number) => (
                    <div key={index} className="bg-gray-900/50 rounded p-4">
                      <h4 className="text-white font-medium mb-2">{service.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Cookie Duration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t("sections.duration.title")}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <div className="space-y-4">
                  {t.raw("sections.duration.types").map((type: any, index: number) => (
                    <div key={index}>
                      <h4 className="text-white font-medium mb-2">{type.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {type.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t("sections.gdprRights.title")}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.gdprRights.description")}
                </p>
                <ul className="space-y-2 text-gray-400">
                  {t.raw("sections.gdprRights.rights").map((right: string, index: number) => (
                    <li key={index}>• {right}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Mail className="text-[#01FFFF]" size={28} />
                {t("sections.contact.title")}
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t("sections.contact.description")}
                </p>
                <div className="space-y-2 text-gray-400">
                  <p><strong>Email:</strong> {t("sections.contact.email")}</p>
                  <p><strong>Phone:</strong> {t("sections.contact.phone")}</p>
                  <p><strong>Address:</strong> {t("sections.contact.address")}</p>
                </div>
              </div>
            </motion.div>

            {/* Policy Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t("sections.policyUpdates.title")}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed">
                  {t("sections.policyUpdates.description")}
                </p>
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
            transition={{ duration: 0.5, delay: 1.0 }}
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
