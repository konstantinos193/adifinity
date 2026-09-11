"use client"

import Link from "next/link"
import { useTranslations, asArray } from "@/components/useTranslations"
import { COMPANY_FACTS } from "@/lib/company"

type Fact = { label: string; value: string; href?: string }

/**
 * Verifiable company facts, on the About page.
 *
 * The audit's E-E-A-T guidance (§12): "Advertising and design agency based in
 * Άρτα, operating since 2013" beats "the leading agency in Άρτα", because the
 * first can be checked and the second cannot. Everything here is either a
 * constant from lib/company.ts or a count of what is published on the site,
 * and each row links to where the visitor can verify it.
 */
export function CompanyFacts() {
  const { t } = useTranslations()
  const industries = asArray<string>(t('about_page.facts.industries'))
  const regions = asArray<string>(t('about_page.facts.regions'))
  const capabilities = asArray<string>(t('about_page.facts.capabilities'))

  const facts: Fact[] = [
    { label: t('about_page.facts.founded'), value: `${t('about_page.facts.founded_value')} ${COMPANY_FACTS.foundedYear}` },
    { label: t('about_page.facts.office'), value: 'Βασ. Πύρρου 30, Άρτα 471 32', href: '/contact' },
    { label: t('about_page.facts.projects'), value: `${COMPANY_FACTS.completedProjects}+`, },
    { label: t('about_page.facts.case_studies'), value: String(COMPANY_FACTS.projects), href: '/projects' },
    { label: t('about_page.facts.live_sites'), value: String(COMPANY_FACTS.liveSites), href: '/website-development' },
    { label: t('about_page.facts.regions_label'), value: regions.join(', ') },
  ]

  return (
    <section className="mb-20" aria-labelledby="company-facts">
      <h2 id="company-facts" className="text-3xl font-bold mb-8 text-[#01FFFF]">
        {t('about_page.facts.title')}
      </h2>
      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {facts.map((fact) => (
          <div key={fact.label} className="rounded-xl border border-cyan-900/30 bg-[#0A1A24]/70 p-5">
            <dt className="text-xs uppercase tracking-wide text-gray-400 mb-1">{fact.label}</dt>
            <dd className="text-lg font-semibold text-white">
              {fact.href ? (
                <Link href={fact.href} className="hover:text-[#01FFFF] transition-colors">
                  {fact.value}
                </Link>
              ) : (
                fact.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t('about_page.facts.industries_label')}</h3>
          <ul className="flex flex-wrap gap-2">
            {industries.map((item) => (
              <li key={item} className="text-sm text-gray-300 bg-[#07141C] border border-gray-800 rounded-full px-3 py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t('about_page.facts.capabilities_label')}</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {capabilities.map((item) => (
              <li key={item} className="pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#01FFFF]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
