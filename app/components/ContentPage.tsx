"use client"

import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { useLocale } from "@/components/LocaleProvider"
import { QUOTE_TURNAROUND_HOURS, withFacts } from "@/lib/company"
import type { ContentPage as ContentPageData, L } from "@/lib/content/types"

/**
 * Renders a `ContentPage`: the visible half of `ContentRoute`.
 *
 * Editorial, not landing-page: one left-aligned H1 with a one-line lede and a
 * meta line, the direct answer in its own block right under it (people and
 * answer engines both read the first 150 words), a jump list for long guides,
 * prose capped at 65ch, and the FAQ as a definition list. Static by design;
 * these pages are for reading, and every word has to be in the initial HTML.
 *
 * House rules applied here: a single eyebrow per page (the badge), no
 * hairlines between sections, panels only where they carry hierarchy (the
 * answer, the price), and the site's shape system (rounded-2xl panels,
 * pill buttons) kept as is.
 */
const MONTHS_EL = ["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαΐου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"]

function formatDate(iso: string, locale: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  if (locale === "en") return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
  return `${d.getDate()} ${MONTHS_EL[d.getMonth()]} ${d.getFullYear()}`
}

export function ContentPage({ page }: { page: ContentPageData }) {
  const { locale } = useLocale()
  const isEl = locale !== "en"
  const pick = (value: L) => withFacts(isEl ? value.el : value.en)
  const sectionId = (i: number) => `section-${i + 1}`
  const isGuide = page.kind === "guide"
  const showJumpList = page.sections.length >= 4

  return (
    <article className="bg-[#07141C] text-gray-300">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="container mx-auto px-4 pt-28 md:pt-32 pb-10 max-w-4xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#01FFFF] mb-5">{pick(page.badge)}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white max-w-[20ch] mb-6">
          {pick(page.h1)}
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-[58ch]">{pick(page.summary)}</p>

        {isGuide ? (
          <p className="mt-6 text-sm text-gray-500">
            {isEl ? "Από τον Μάνο Κόσμα, adinfinity" : "By Manos Kosmas, adinfinity"}
            {page.dateModified && (
              <>
                <span className="mx-2" aria-hidden="true">
                  ·
                </span>
                {isEl ? "Ενημερώθηκε " : "Updated "}
                <time dateTime={page.dateModified}>{formatDate(page.dateModified, locale)}</time>
              </>
            )}
            {page.readingMinutes && (
              <span className="block sm:inline sm:ml-2">
                {isEl ? `${page.readingMinutes} λεπτά ανάγνωση` : `${page.readingMinutes} min read`}
              </span>
            )}
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-8 gap-y-3 items-center rounded-2xl bg-[#0A1A24] px-6 py-5">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{isEl ? "Τιμή" : "Price"}</p>
              <p className="text-2xl md:text-3xl font-bold text-white leading-none">{isEl ? "Κατόπιν προσφοράς" : "On quotation"}</p>
            </div>
            <div className="text-sm text-gray-400 leading-relaxed">
              <p>
                {page.quoteNote
                  ? pick(page.quoteNote)
                  : isEl
                    ? `Γραπτή προσφορά μέσα σε ${QUOTE_TURNAROUND_HOURS} ώρες, χωρίς δέσμευση.`
                    : `Written quote within ${QUOTE_TURNAROUND_HOURS} hours, no obligation.`}
              </p>
              <Link href="/contact#contact-form" className="text-[#01FFFF] hover:underline">
                {isEl ? "Ζητήστε προσφορά" : "Request a quote"}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ── Direct answer ──────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 max-w-4xl">
        <section
          aria-label={isEl ? "Σύντομη απάντηση" : "Short answer"}
          className="rounded-2xl border-l-2 border-[#01FFFF] bg-[#0A1A24] px-6 md:px-8 py-6 mb-14"
        >
          {page.intro.map((p, i) => (
            <p key={i} className={`leading-relaxed text-gray-200 max-w-[65ch] ${i < page.intro.length - 1 ? "mb-4" : ""}`}>
              {pick(p)}
            </p>
          ))}
        </section>

        {showJumpList && (
          <nav aria-label={isEl ? "Περιεχόμενα" : "Contents"} className="mb-14 max-w-[65ch]">
            <p className="text-sm font-semibold text-white mb-3">{isEl ? "Σε αυτή τη σελίδα" : "On this page"}</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {page.sections.map((section, i) => (
                <li key={i}>
                  <a href={`#${sectionId(i)}`} className="text-gray-400 hover:text-[#01FFFF] transition-colors">
                    {pick(section.heading)}
                  </a>
                </li>
              ))}
              {page.faq.length > 0 && (
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-[#01FFFF] transition-colors">
                    {isEl ? "Συχνές ερωτήσεις" : "Frequently asked questions"}
                  </a>
                </li>
              )}
            </ol>
          </nav>
        )}

        {/* ── Sections ─────────────────────────────────────────────────── */}
        {page.sections.map((section, i) => (
          <section key={i} id={sectionId(i)} className="mb-14 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-5 max-w-[30ch]">{pick(section.heading)}</h2>
            {section.paragraphs?.map((p, j) => (
              <p key={j} className="leading-relaxed mb-4 max-w-[65ch]">
                {pick(p)}
              </p>
            ))}
            {section.bullets && (
              <ul className="my-5 space-y-3 max-w-[65ch]">
                {section.bullets.map((b, j) => (
                  <li key={j} className="pl-5 relative leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#01FFFF]">
                    {pick(b)}
                  </li>
                ))}
              </ul>
            )}
            {section.table && (
              <div className="overflow-x-auto rounded-2xl border border-cyan-900/30 my-6">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#0A1A24] text-gray-400 text-xs uppercase tracking-wide">
                    <tr>
                      {section.table.head.map((h, j) => (
                        <th key={j} scope="col" className="px-4 py-3 font-medium">
                          {pick(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, j) => (
                      <tr key={j} className={j % 2 === 1 ? "bg-[#0A1A24]/40" : ""}>
                        {row.map((cell, k) => (
                          <td key={k} className={`px-4 py-3 align-top ${k === 0 ? "text-white font-medium whitespace-nowrap" : "text-gray-300"}`}>
                            {pick(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {section.link && (
              <Link href={section.link.path} className="inline-flex items-center gap-1.5 text-[#01FFFF] hover:underline mt-1">
                {pick(section.link.label)} <ArrowRight size={16} />
              </Link>
            )}
          </section>
        ))}
      </div>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      {page.faq.length > 0 && (
        <section id="faq" className="bg-[#0A1A24] py-14 scroll-mt-28" aria-labelledby="content-faq">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="content-faq" className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8">
              {isEl ? "Συχνές ερωτήσεις" : "Frequently asked questions"}
            </h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {page.faq.map((item, i) => (
                <div key={i}>
                  <dt className="font-semibold text-white mb-2">{pick(item.q)}</dt>
                  <dd className="leading-relaxed text-gray-300">{pick(item.a)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ── Related + CTA ─────────────────────────────────────────────── */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          {page.related.length > 0 && (
            <div className="mb-14">
              <h2 className="text-xl font-semibold text-white mb-5">{isEl ? "Διαβάστε επίσης" : "Read next"}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                {page.related.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="group block">
                      <span className="text-gray-100 font-medium group-hover:text-[#01FFFF] transition-colors inline-flex items-center gap-1.5">
                        {pick(link.label)} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      {link.description && <span className="block text-sm text-gray-400 mt-1 max-w-[42ch]">{pick(link.description)}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="rounded-2xl bg-[#0A1A24] p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                {isEl ? "Θέλετε προσφορά για το δικό σας έργο;" : "Want a quote for your project?"}
              </h2>
              <p className="text-gray-400 max-w-[50ch]">
                {isEl
                  ? "Μια πρώτη συζήτηση 20 λεπτών αρκεί για να σας πούμε τι θα προτείναμε και τι κοστίζει."
                  : "A first 20-minute conversation is enough to tell you what we would recommend and what it costs."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact#contact-form"
                className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-7 rounded-full inline-flex items-center gap-2 whitespace-nowrap active:scale-[0.98]"
              >
                {isEl ? "Ζητήστε Προσφορά" : "Request a Quote"} <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+302681303007"
                className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3 px-7 rounded-full inline-flex items-center gap-2 whitespace-nowrap hover:bg-[#01FFFF]/10 active:scale-[0.98]"
              >
                <Phone size={16} /> 2681 303007
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
