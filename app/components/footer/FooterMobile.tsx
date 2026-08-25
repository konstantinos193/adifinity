"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { asArray, useTranslations } from "@/components/useTranslations"
import { openCookieSettings } from "@/components/ui/CookieConsent"
import { socialProfiles, type FooterLink } from "./footerLinks"

/** Legal entries are either a route or an in-page action (cookie preferences). */
type LegalEntry = { name: string; path: string } | { name: string; onSelect: () => void }

const tapTarget = "flex min-h-[44px] items-center transition-colors"

export default function FooterMobile() {
  const { t } = useTranslations()
  const currentYear = new Date().getFullYear()

  const quickLinks = asArray<FooterLink>(t("footer.quick_links.links"))

  const legalEntries: LegalEntry[] = [
    { name: t("cookies.privacy_policy"), path: "/privacy-policy" },
    { name: t("cookies.cookie_policy"), path: "/cookie-policy" },
    { name: t("cookies.cookie_settings"), onSelect: openCookieSettings },
    { name: t("footer.legal_links.dsa_compliance"), path: "/dsa-compliance" },
    { name: t("footer.legal_links.report_content"), path: "/report-content" },
    { name: t("navigation.accessibility"), path: "/accessibility" },
  ]

  return (
    <div className="divide-y divide-white/5 lg:hidden">
      {/* Brand */}
      <section className="flex flex-col items-center pb-6 text-center">
        <Image src="/logo.png" alt="adinfinity logo" width={256} height={68} className="h-auto w-32" />
        <p className="mt-3 max-w-[17rem] text-xs leading-relaxed text-gray-400">
          {t("footer.mobile.description")}
        </p>
        <ul className="mt-4 flex items-center gap-3">
          {socialProfiles.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-[#01FFFF]/60 hover:bg-[#01FFFF]/10"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Tap-to-contact — wraps instead of overflowing on narrow screens */}
      <section className="flex flex-wrap justify-center gap-2 py-5">
        <a
          href="tel:+302681303007"
          className="flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-xs text-gray-300 transition-colors hover:border-[#01FFFF]/60 hover:text-white"
        >
          <Phone size={14} className="shrink-0 text-[#01FFFF]" />
          {t("footer.business_info.phone")}
        </a>
        <a
          href="mailto:info@adinfinity.gr"
          className="flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-xs text-gray-300 transition-colors hover:border-[#01FFFF]/60 hover:text-white"
        >
          <Mail size={14} className="shrink-0 text-[#01FFFF]" />
          {t("footer.business_info.email")}
        </a>
      </section>

      {/* Quick links */}
      <nav className="py-5" aria-label={t("footer.quick_links.title")}>
        <h3 className="mb-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#01FFFF]/80">
          {t("footer.quick_links.title")}
        </h3>
        <ul className="grid grid-cols-2 gap-x-4">
          {quickLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path} className={`${tapTarget} text-sm text-gray-300 hover:text-white`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Legal — a two-column grid so long labels wrap instead of clipping */}
      <nav className="py-5">
        <ul className="grid grid-cols-2 gap-x-4">
          {legalEntries.map((entry) => (
            <li key={entry.name}>
              {"path" in entry ? (
                <Link href={entry.path} className={`${tapTarget} text-xs text-gray-400 hover:text-white`}>
                  {entry.name}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={entry.onSelect}
                  className={`${tapTarget} text-left text-xs text-gray-400 hover:text-white`}
                >
                  {entry.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Copyright and EU business identity */}
      <section className="space-y-1 pt-5 text-center text-[11px] leading-relaxed text-gray-500">
        <p>{t("footer.copyright").replace("{year}", currentYear.toString())}</p>
        <p>{t("footer.business_info.company_name")}</p>
        <p>{t("footer.business_info.address")}</p>
        <p>
          {t("footer.business_info.phone")} • {t("footer.business_info.email")}
        </p>
      </section>
    </div>
  )
}
