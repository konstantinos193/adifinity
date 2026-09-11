"use client"

import { useLocale } from "@/components/LocaleProvider"
import type { ServiceDetails } from "./serviceDetailsData"

/**
 * Page-specific body content for the local landing pages.
 *
 * This is the content that has to be in the initial HTML for the page to stop
 * reading as a template clone, so nothing here may depend on hydration: the
 * server (and first client render) is Greek, and the only thing the client
 * boundary adds is following the language toggle afterwards. Before this the
 * section was a locale-blind server component, so it stayed Greek on every
 * page after a visitor switched to English.
 */
export default function ServiceDetailsSection({ details: copy }: { details: ServiceDetails }) {
  const { locale } = useLocale()
  const details = copy[locale] ?? copy.el

  return (
    <section className="py-16 bg-[#0A1A24]">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-lg text-gray-300 leading-relaxed mb-12">{details.intro}</p>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{details.includesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {details.includes.map((item) => (
            <div key={item.title} className="rounded-lg border border-gray-800 bg-[#07141C] p-6">
              <h3 className="text-lg font-medium text-[#01FFFF] mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{details.processTitle}</h2>
        {/* <ol> so the sequence is explicit to assistive tech and to crawlers. */}
        <ol className="space-y-6">
          {details.process.map((item, i) => (
            <li key={item.step} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#01FFFF]/40 text-sm font-medium text-[#01FFFF]"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-medium text-white mb-1">{item.step}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
