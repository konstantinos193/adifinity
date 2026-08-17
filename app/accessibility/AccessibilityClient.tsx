"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Keyboard, Phone, Mail, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { useTranslations } from "@/components/useTranslations"

export default function AccessibilityClient() {
  const { t } = useTranslations()
  
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t('accessibility.title'),
    "description": t('accessibility.description'),
    "url": "https://adinfinity.gr/accessibility",
    "inLanguage": ["el", "en"],
    "isPartOf": {
      "@type": "WebSite",
      "name": "adinfinity",
      "url": "https://adinfinity.gr"
    },
    "about": {
      "@type": "Thing",
      "name": "Web Accessibility",
      "description": "Digital accessibility and inclusive design practices"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": t('accessibility.title'),
      "description": t('accessibility.description'),
      "author": {
        "@type": "Organization",
        "name": "adinfinity",
        "url": "https://adinfinity.gr"
      },
      "publisher": {
        "@type": "Organization",
        "name": "adinfinity",
        "url": "https://adinfinity.gr"
      }
    }
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
              {t('accessibility.title')}
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              {t('accessibility.last_updated')}
            </p>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {t('accessibility.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            
            {/* Compliance Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t('accessibility.compliance_status')}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t('accessibility.wcag_compliance')}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t('accessibility.wcag_description')}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded p-4">
                  <h4 className="text-white font-medium mb-2">{t('accessibility.current_status')}</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span>{t('accessibility.semantic_html')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span>{t('accessibility.keyboard_navigation')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span>{t('accessibility.aria_labels')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span>{t('accessibility.color_contrast')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="text-yellow-500" size={16} />
                      <span>{t('accessibility.screen_reader')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Accessibility Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye className="text-[#01FFFF]" size={28} />
                {t('accessibility.accessibility_features')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: t('accessibility.navigation'),
                    items: ['keyboard_nav_desc', 'skip_links', 'focus_indicators', 'tab_order'],
                  },
                  {
                    title: t('accessibility.content'),
                    items: ['semantic_structure', 'alt_text', 'descriptive_links', 'readable_fonts'],
                  },
                  {
                    title: t('accessibility.visual_design'),
                    items: ['high_contrast', 'responsive_design', 'text_scaling', 'consistent_layout'],
                  },
                  {
                    title: t('accessibility.technical'),
                    items: ['aria_landmarks', 'screen_reader_support', 'form_accessibility', 'error_prevention'],
                  },
                ].map((group) => (
                  <div key={group.title} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">{group.title}</h3>
                    <ul className="space-y-2 text-gray-400">
                      {group.items.map((key) => (
                        <li key={key} className="flex items-start gap-2">
                          <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                          <span>{t(`accessibility.${key}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Keyboard Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Keyboard className="text-[#01FFFF]" size={28} />
                {t('accessibility.keyboard_navigation_title')}
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('accessibility.keyboard_desc')}
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">{t('accessibility.keyboard_shortcuts')}</h4>
                    <ul className="space-y-1 text-gray-400">
                      {[
                        { keys: 'Tab', desc: 'tab_key' },
                        { keys: 'Shift + Tab', desc: 'shift_tab' },
                        { keys: 'Enter', desc: 'enter_key' },
                        { keys: 'Space', desc: 'space_key' },
                        { keys: 'Escape', desc: 'escape_key' },
                      ].map((shortcut) => (
                        <li key={shortcut.keys}>
                          <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">{shortcut.keys}</kbd>
                          {' - '}
                          {t(`accessibility.${shortcut.desc}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Screen Reader Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t('accessibility.screen_reader_title')}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('accessibility.screen_reader_desc')}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: t('accessibility.supported_screen_readers'),
                      items: ['nvda', 'jaws', 'voiceover', 'talkback'],
                    },
                    {
                      title: t('accessibility.accessibility_features_list'),
                      items: ['aria_labels', 'semantic_html5', 'heading_structure', 'link_context'],
                    },
                  ].map((group) => (
                    <div key={group.title} className="bg-gray-900/50 rounded p-4">
                      <h4 className="text-white font-medium mb-2">{group.title}</h4>
                      <ul className="space-y-1 text-gray-400">
                        {group.items.map((key) => (
                          <li key={key}>• {t(`accessibility.${key}`)}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Limitations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t('accessibility.limitations')}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('accessibility.limitations_desc')}
                </p>
                <div className="space-y-3">
                  {[
                    { title: 'third_party_title', body: 'third_party' },
                    { title: 'animations_title', body: 'animations' },
                    { title: 'pdfs_title', body: 'pdfs' },
                  ].map((limitation) => (
                    <div key={limitation.title} className="flex items-start gap-3">
                      <AlertCircle className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="text-white font-medium mb-1">{t(`accessibility.${limitation.title}`)}</h4>
                        <p className="text-gray-400 text-sm">
                          {t(`accessibility.${limitation.body}`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Testing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t('accessibility.testing')}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('accessibility.testing_desc')}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: t('accessibility.automated_testing'),
                      items: ['wave', 'axe', 'lighthouse', 'automated_tools'],
                    },
                    {
                      title: t('accessibility.manual_testing'),
                      items: ['keyboard_testing', 'screen_reader_testing', 'contrast_testing', 'user_testing'],
                    },
                  ].map((group) => (
                    <div key={group.title} className="bg-gray-900/50 rounded p-4">
                      <h4 className="text-white font-medium mb-2">{group.title}</h4>
                      <ul className="space-y-1 text-gray-400">
                        {group.items.map((key) => (
                          <li key={key}>• {t(`accessibility.${key}`)}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Feedback and Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t('accessibility.feedback')}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('accessibility.feedback_desc')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="text-[#01FFFF]" size={20} />
                    <span><strong>{t('accessibility.email_label')}:</strong> info@adinfinity.gr</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="text-[#01FFFF]" size={20} />
                    <span><strong>{t('accessibility.phone_label')}:</strong> +30-2681-303007</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-900/50 rounded">
                  <h4 className="text-white font-medium mb-2">{t('accessibility.what_to_include')}</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {['web_page', 'barrier_description', 'assistive_tech', 'preferred_format'].map((key) => (
                      <li key={key}>• {t(`accessibility.${key}`)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Enforcement and Legal Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t('accessibility.legal_requirements')}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t('accessibility.legal_desc')}
                </p>
                <div className="space-y-3">
                  {[
                    { title: 'eaa_compliance', body: 'eaa_desc' },
                    { title: 'greek_law', body: 'greek_law_desc' },
                    { title: 'enforcement', body: 'enforcement_desc' },
                  ].map((item) => (
                    <div key={item.title} className="bg-gray-900/50 rounded p-4">
                      <h4 className="text-white font-medium mb-2">{t(`accessibility.${item.title}`)}</h4>
                      <p className="text-gray-400 text-sm">
                        {t(`accessibility.${item.body}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Ongoing Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{t('accessibility.ongoing_commitment')}</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed">
                  {t('accessibility.ongoing_desc')}
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
              {t('accessibility.need_assistance')}
            </h2>
            <p className="text-gray-400 mb-8">
              {t('accessibility.assistance_desc')}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-medium py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              {t('accessibility.contact_support')}
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}
