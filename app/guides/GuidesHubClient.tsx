"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/components/LocaleProvider"
import { withFacts } from "@/lib/company"
import { GUIDES, LEGACY_GUIDES } from "@/lib/content"
import type { L } from "@/lib/content/types"

/**
 * The guides hub: one featured guide, then the rest as an editorial list.
 *
 * Not a card grid. These are reading pages, and the hub's job is to make the
 * question each one answers legible at a glance: title, one-line summary,
 * reading time. The first guide (website cost) is the one Search Console
 * shows the most cost-intent impressions for, so it gets the space.
 */
export function GuidesHubClient() {
  const { locale } = useLocale()
  const isEl = locale !== "en"
  const pick = (value: L) => withFacts(isEl ? value.el : value.en)
  const [featured, ...rest] = GUIDES

  return (
    <div className="bg-[#07141C] text-gray-300">
      <header className="container mx-auto px-4 pt-28 md:pt-32 pb-12 max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white max-w-[18ch] mb-6">
          {isEl ? "Οδηγοί: τι κοστίζει, τι να ζητήσετε, πώς να αποφασίσετε" : "Guides: what things cost, what to ask, how to decide"}
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-[58ch]">
          {isEl
            ? "Γραμμένοι από εμάς, με τις τιμές που πραγματικά χρεώνουμε και τα έργα που πραγματικά κάναμε. Για να αποφασίσετε πριν μας καλέσετε."
            : "Written by us, with the prices we actually charge and the projects we actually did. So you can decide before you call."}
        </p>
      </header>

      <div className="container mx-auto px-4 max-w-5xl pb-20">
        {/* Featured */}
        <Link
          href={featured.path}
          className="group block rounded-2xl bg-[#0A1A24] p-8 md:p-10 mb-14 border-l-2 border-[#01FFFF]"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#01FFFF] mb-4">{pick(featured.badge)}</p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4 max-w-[24ch] group-hover:text-[#01FFFF] transition-colors">
            {pick(featured.h1)}
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-[60ch] mb-5">{pick(featured.summary)}</p>
          <span className="inline-flex items-center gap-1.5 text-sm text-[#01FFFF]">
            {isEl ? `Διαβάστε, ${featured.readingMinutes} λεπτά` : `Read, ${featured.readingMinutes} min`} <ArrowRight size={14} />
          </span>
        </Link>

        {/* The rest */}
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-20">
          {rest.map((guide) => (
            <li key={guide.path}>
              <Link href={guide.path} className="group block">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-[#01FFFF] transition-colors">
                  {pick(guide.h1)}
                </h2>
                <p className="leading-relaxed max-w-[52ch] mb-2">{pick(guide.summary)}</p>
                <span className="text-sm text-gray-500">
                  {isEl ? `${guide.readingMinutes} λεπτά ανάγνωση` : `${guide.readingMinutes} min read`}
                </span>
              </Link>
            </li>
          ))}
          {LEGACY_GUIDES.map((guide) => (
            <li key={guide.path}>
              <Link href={guide.path} className="group block">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-[#01FFFF] transition-colors">
                  {pick(guide.title)}
                </h2>
                <p className="leading-relaxed max-w-[52ch]">{pick(guide.summary)}</p>
              </Link>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl bg-[#0A1A24] p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
              {isEl ? "Όλες οι τιμές σε έναν πίνακα" : "Every price in one table"}
            </h2>
            <p className="text-gray-400 max-w-[50ch]">
              {isEl
                ? "Οι οδηγοί εξηγούν το γιατί. Ο τιμοκατάλογος έχει το πόσο, για κάθε υπηρεσία."
                : "The guides explain why. The price list has how much, for every service."}
            </p>
          </div>
          <Link
            href="/pricing"
            className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-7 rounded-full inline-flex items-center gap-2 whitespace-nowrap active:scale-[0.98]"
          >
            {isEl ? "Τιμοκατάλογος" : "Price list"} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
