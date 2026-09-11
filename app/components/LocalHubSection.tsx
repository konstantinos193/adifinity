"use client"

import Link from "next/link"
import { MapPin, Clock } from "lucide-react"
import { useTranslations, asArray } from "@/components/useTranslations"
import { localServiceLinks } from "./footer/footerLinks"

type Region = { name: string; note: string }

/**
 * The local services hub (2026-09-11 audit §14).
 *
 * One place that says which services are available locally, where the office
 * is, what a customer can visit it for, which areas installation and delivery
 * reach, and links to every legitimate local service page — so regional
 * language ("Πρέβεζα, Ιωάννινα, Θεσπρωτία") lives naturally on one hub instead
 * of on a matrix of city clones.
 *
 * The service list is the same array the footer renders, so a new local page
 * appears here automatically.
 */
export function LocalHubSection({ namespace }: { namespace: string }) {
  const { t, locale } = useTranslations()
  const key = (name: string) => `${namespace}.local_hub.${name}`
  const regions = asArray<Region>(t(key('regions')))
  const reasons = asArray<string>(t(key('visit_reasons')))
  const industries = asArray<string>(t(key('industries')))
  const services = localServiceLinks.filter((link) => !link.external)

  return (
    <section className="py-16 bg-[#0A1A24]" aria-labelledby="local-hub">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 id="local-hub" className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t(key('title'))}
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-3xl">{t(key('intro'))}</p>

        <h3 className="text-xl font-semibold text-[#01FFFF] mb-4">{t(key('services_title'))}</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
          {services.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="block rounded-lg border border-gray-800 bg-[#07141C] px-4 py-3 text-gray-200 hover:border-[#01FFFF]/50 hover:text-[#01FFFF] transition-colors"
              >
                {locale === "el" ? link.el : link.en}
              </Link>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <h3 className="text-xl font-semibold text-[#01FFFF] mb-4">{t(key('office_title'))}</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#01FFFF]" />
                <a
                  href="https://maps.app.goo.gl/RfBa8nY7Yk13gPCP8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {t(key('office_address'))}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Clock size={18} className="mt-0.5 shrink-0 text-[#01FFFF]" />
                <span>{t(key('office_hours'))}</span>
              </p>
              <p>
                <a href="tel:+302681303007" className="hover:text-white">
                  2681 303007
                </a>
                {" · "}
                <a href="mailto:info@adinfinity.gr" className="hover:text-white">
                  info@adinfinity.gr
                </a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#01FFFF] mb-4">{t(key('visit_title'))}</h3>
            <ul className="space-y-2 text-gray-300">
              {reasons.map((reason) => (
                <li key={reason} className="pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#01FFFF]">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#01FFFF] mb-4">{t(key('regions_title'))}</h3>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {regions.map((region) => (
            <div key={region.name} className="rounded-lg border border-gray-800 bg-[#07141C] p-5">
              <dt className="font-semibold text-white mb-1">{region.name}</dt>
              <dd className="text-sm text-gray-300 leading-relaxed">{region.note}</dd>
            </div>
          ))}
        </dl>

        <h3 className="text-xl font-semibold text-[#01FFFF] mb-4">{t(key('industries_title'))}</h3>
        <ul className="flex flex-wrap gap-2">
          {industries.map((item) => (
            <li key={item} className="text-sm text-gray-300 bg-[#07141C] border border-gray-800 rounded-full px-3 py-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
