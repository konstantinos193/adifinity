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
                Accessibility Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Keyboard-friendly navigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Skip to main content links</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Clear focus indicators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Logical tab order</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Content</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Semantic HTML structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Alternative text for images</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Descriptive link text</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Readable font sizes</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Visual Design</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>High color contrast ratios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Responsive design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Text scaling support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Consistent layout</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">Technical</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>ARIA landmarks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Screen reader support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Form accessibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="text-[#01FFFF] mt-1 flex-shrink-0" size={16} />
                      <span>Error prevention</span>
                    </li>
                  </ul>
                </div>
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
                Keyboard Navigation
              </h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  Our website is designed to be fully navigable using only a keyboard:
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">Keyboard Shortcuts</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Tab</kbd> - Move to next focusable element</li>
                      <li><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Shift + Tab</kbd> - Move to previous focusable element</li>
                      <li><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Enter</kbd> - Activate links and buttons</li>
                      <li><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Space</kbd> - Activate buttons and toggle switches</li>
                      <li><kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Escape</kbd> - Close modals and menus</li>
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
              <h2 className="text-2xl font-bold text-white mb-4">Screen Reader Support</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  We optimize our website for popular screen readers:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">Supported Screen Readers</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li>• NVDA (Windows)</li>
                      <li>• JAWS (Windows)</li>
                      <li>• VoiceOver (macOS, iOS)</li>
                      <li>• TalkBack (Android)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">Accessibility Features</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li>• ARIA labels and descriptions</li>
                      <li>• Semantic HTML5 elements</li>
                      <li>• Heading structure</li>
                      <li>• Link context</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Limitations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Known Limitations</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  While we strive for full accessibility, we are aware of some limitations:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-white font-medium mb-1">Third-Party Content</h4>
                      <p className="text-gray-400 text-sm">
                        Some third-party widgets or embedded content may not be fully accessible. 
                        We are working with vendors to improve this.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-white font-medium mb-1">Complex Animations</h4>
                      <p className="text-gray-400 text-sm">
                        Some complex animations may be reduced for users who prefer reduced motion.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-white font-medium mb-1">PDF Documents</h4>
                      <p className="text-gray-400 text-sm">
                        Some PDF documents may not be fully accessible. We are working to make all PDFs accessible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Accessibility Testing</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  We regularly test our website using various methods:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">Automated Testing</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li>• WAVE Web Accessibility Evaluation</li>
                      <li>• axe DevTools</li>
                      <li>• Lighthouse Accessibility Audit</li>
                      <li>• Automated accessibility testing tools</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">Manual Testing</h4>
                    <ul className="space-y-1 text-gray-400">
                      <li>• Keyboard navigation testing</li>
                      <li>• Screen reader testing</li>
                      <li>• Color contrast verification</li>
                      <li>• User testing with assistive technology</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feedback and Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Feedback and Support</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  We welcome feedback on the accessibility of our website. If you encounter any accessibility barriers, 
                  please let us know:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="text-[#01FFFF]" size={20} />
                    <span><strong>Email:</strong> adenfinity@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="text-[#01FFFF]" size={20} />
                    <span><strong>Phone:</strong> +30-2681-303007</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-900/50 rounded">
                  <h4 className="text-white font-medium mb-2">What to Include in Your Feedback</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• The web page address where you encountered the issue</li>
                    <li>• Description of the accessibility barrier</li>
                    <li>• The assistive technology you were using</li>
                    <li>• Your preferred format for receiving information</li>
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
              <h2 className="text-2xl font-bold text-white mb-4">Legal Requirements</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed mb-4">
                  We are committed to complying with accessibility laws and regulations:
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">European Accessibility Act (EAA)</h4>
                    <p className="text-gray-400 text-sm">
                      We comply with the European Accessibility Act, which requires that websites and mobile applications 
                      of private sector entities meet accessibility standards.
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">Greek Law 4488/2017</h4>
                    <p className="text-gray-400 text-sm">
                      We comply with Greek law implementing the EAA, which sets accessibility requirements for products 
                      and services in Greece.
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="text-white font-medium mb-2">Enforcement Procedures</h4>
                    <p className="text-gray-400 text-sm">
                      If you believe we have not complied with accessibility requirements, you may contact the 
                      Hellenic Data Protection Authority or other relevant enforcement bodies.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ongoing Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Ongoing Commitment</h2>
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-gray-400 leading-relaxed">
                  Accessibility is an ongoing commitment at adinfinity. We regularly review and improve our website 
                  to ensure it remains accessible to all users. This accessibility statement will be updated as 
                  we make improvements and as accessibility standards evolve.
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
              Need Accessibility Assistance?
            </h2>
            <p className="text-gray-400 mb-8">
              We're here to help you access our information and services.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-medium py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              Contact Accessibility Support
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}
