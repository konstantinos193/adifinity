"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { asArray, useTranslations } from "@/components/useTranslations"
import { openCookieSettings } from "@/components/ui/CookieConsent"
import FooterMobile from "./footer/FooterMobile"
import { localServiceLinks, socialProfiles, type FooterLink } from "./footer/footerLinks"

export default function Footer() {
  const { t, locale } = useTranslations()
  const currentYear = new Date().getFullYear()

  const quickLinks = asArray<FooterLink>(t('footer.quick_links.links'))
  const serviceLinks = asArray<FooterLink>(t('footer.services.links'))

  return (
    // pb-24 clears the StickyMobileCTA bar, which is fixed to the bottom below `md`.
    <footer className="relative bg-gradient-to-b from-[#071218] to-[#030B10] pt-10 pb-24 md:pb-6 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop Footer */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="mb-4">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Image src="/logo.png" alt="adinfinity logo" width={256} height={68} className="mb-4 h-auto" />
              </motion.div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('footer.about.description')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mt-2">
              <h4 className="text-[#01FFFF] font-medium mb-4 text-sm">{t('footer.contact.title')}</h4>
              <div className="flex items-center text-gray-400 text-sm group">
                <Phone size={16} className="mr-2 text-[#01FFFF] group-hover:text-white transition-colors" />
                <a href="tel:+302681303007" className="hover:text-white transition-colors">
                  {t('footer.contact.phone')}
                </a>
              </div>
              <div className="flex items-center text-gray-400 text-sm group">
                <Mail size={16} className="mr-2 text-[#01FFFF] group-hover:text-white transition-colors" />
                <a href="mailto:info@adinfinity.gr" className="hover:text-white transition-colors">
                  {t('footer.contact.email')}
                </a>
              </div>
              <div className="flex items-start text-gray-400 text-sm group">
                <MapPin size={16} className="mr-2 mt-1 text-[#01FFFF] group-hover:text-white transition-colors" />
                <a
                  href="https://maps.app.goo.gl/RfBa8nY7Yk13gPCP8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t('footer.contact.address')}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-lg font-bold mb-4 text-white">{t('footer.quick_links.title')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <motion.li
                  key={item.path}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#01FFFF]"
                    />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-lg font-bold mb-4 text-white">{t('footer.services.title')}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <motion.li
                  key={item.path}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#01FFFF]"
                    />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact CTA & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-lg font-bold mb-4 text-white">{t('footer.cta.title')}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {t('footer.cta.description')}
            </p>

            {/* Contact CTA */}
            <Link href="/contact#contact-form">
              <motion.button
                className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#071218] font-medium py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all w-full mb-6"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('footer.cta.button')}
              </motion.button>
            </Link>

            {/* Social Media with Custom Icons */}
            <div>
              <h4 className="text-white font-medium mb-4">{t('footer.social.title')}</h4>
              <div className="flex space-x-4">
                {socialProfiles.map(({ href, label, Icon }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="bg-gray-800/40 hover:bg-[#01FFFF]/20 border border-gray-600 hover:border-[#01FFFF]/70 p-3 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/*
          Local-intent landing pages.

          Rendered at every breakpoint (deliberately outside both the
          `lg:`-only grid above and <FooterMobile/> below) so these routes have
          inbound internal links on every page of the site. Before this block
          they were reachable only via sitemap.xml.
        */}
        <nav
          aria-label={locale === 'el' ? 'Υπηρεσίες στην Άρτα' : 'Services in Arta'}
          className="mt-8 pt-6 border-t border-gray-800"
        >
          <h3 className="text-[#01FFFF] font-medium mb-4 text-sm">
            {locale === 'el' ? 'Υπηρεσίες στην Άρτα' : 'Services in Arta'}
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2">
            {localServiceLinks.map((item) => {
              const label = locale === 'el' ? item.el : item.en
              const className = "text-gray-400 hover:text-white transition-colors text-sm"

              // The invitations product lives on its own subdomain, so it needs a
              // plain <a>. No rel="nofollow" and no target="_blank" — the whole
              // point of this link is to pass equity to a property Google
              // otherwise treats as an unrelated, authority-less site.
              return (
                <li key={item.path}>
                  {item.external ? (
                    <a href={item.path} className={className}>
                      {label}
                    </a>
                  ) : (
                    <Link href={item.path} className={className}>
                      {label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Desktop Copyright */}
        <div className="hidden lg:block mt-8 pt-6 border-t border-gray-800 relative z-10 w-full">
          <div className="space-y-3">
            <p className="text-center text-gray-400 text-sm">
              {t('footer.copyright').replace('{year}', currentYear.toString())}
            </p>
            {/* Legal Links - Desktop */}
            <div className="flex justify-center space-x-4 text-xs text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                {t('cookies.privacy_policy')}
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                {t('cookies.cookie_policy')}
              </Link>
              <span className="text-gray-600">•</span>
              <button onClick={openCookieSettings} className="hover:text-white transition-colors">
                {t('cookies.cookie_settings')}
              </button>
              <span className="text-gray-600">•</span>
              <Link href="/dsa-compliance" className="hover:text-white transition-colors">
                {t('footer.legal_links.dsa_compliance')}
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/report-content" className="hover:text-white transition-colors">
                {t('footer.legal_links.report_content')}
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                {t('navigation.accessibility')}
              </Link>
            </div>
            {/* EU Business Compliance Information - Compact */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 text-xs text-gray-600">
                <span>{t('footer.business_info.company_name')}</span>
                <span className="text-gray-700">•</span>
                <span>{t('footer.business_info.address')}</span>
                <span className="text-gray-700">•</span>
                <span>{t('footer.business_info.phone')}</span>
                <span className="text-gray-700">•</span>
                <span>{t('footer.business_info.email')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <FooterMobile />
      </div>
    </footer>
  )
}
