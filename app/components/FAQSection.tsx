"use client"

import { useLocale } from "@/components/LocaleProvider"
import type { FaqItem } from "./faqData"

/**
 * Renders the FAQ that also feeds the page's FAQPage JSON-LD.
 *
 * No interactivity gate: the answers must be present in the initial HTML,
 * because Google requires FAQ structured data to correspond to content visible
 * on the page. `<details>` would still be crawlable, but plain markup removes
 * any doubt. The client boundary exists only so the section follows the
 * language toggle — the server (and first client render) is Greek, matching the
 * JSON-LD; English comes from each item's `en` copy after the switch.
 */
export default function FAQSection({
  items,
  heading,
}: {
  items: FaqItem[]
  heading?: string
}) {
  const { locale } = useLocale()
  const isGreek = locale === "el"

  if (items.length === 0) return null

  const title = heading ?? (isGreek ? "Συχνές ερωτήσεις" : "Frequently asked questions")

  return (
    <section className="py-16 bg-[#07141C]" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-white mb-8">
          {title}
        </h2>
        <dl className="space-y-6">
          {items.map((item) => {
            const copy = isGreek ? item : item.en
            return (
              <div key={item.q} className="border-b border-gray-800 pb-6 last:border-0">
                <dt className="text-lg font-medium text-[#01FFFF] mb-2">{copy.q}</dt>
                <dd className="text-gray-300 leading-relaxed">{copy.a}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
