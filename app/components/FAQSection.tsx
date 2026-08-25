import type { FaqItem } from "./faqData"

/**
 * Renders the FAQ that also feeds the page's FAQPage JSON-LD.
 *
 * Deliberately a server component with no interactivity gate: the answers must
 * be present in the initial HTML, because Google requires FAQ structured data
 * to correspond to content visible on the page. `<details>` would still be
 * crawlable, but plain markup removes any doubt.
 */
export default function FAQSection({
  items,
  heading = "Συχνές ερωτήσεις",
}: {
  items: FaqItem[]
  heading?: string
}) {
  if (items.length === 0) return null

  return (
    <section className="py-16 bg-[#07141C]" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-white mb-8">
          {heading}
        </h2>
        <dl className="space-y-6">
          {items.map((item) => (
            <div key={item.q} className="border-b border-gray-800 pb-6 last:border-0">
              <dt className="text-lg font-medium text-[#01FFFF] mb-2">{item.q}</dt>
              <dd className="text-gray-300 leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
