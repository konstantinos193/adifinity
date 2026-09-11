"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "@/components/useTranslations"
import { withFacts } from "@/lib/company"

export interface RelatedLink {
  path: string
  el: string
  en: string
  /** One line of context. Gives the crawler — and the reader — a reason to follow. */
  elDesc: string
  enDesc: string
  /**
   * Absolute URL to another adinfinity property. Rendered as a plain `<a>`,
   * deliberately without `nofollow` or `target="_blank"` so it passes equity.
   */
  external?: boolean
}

/**
 * Contextual links from a hub page to its related local-intent landing pages.
 *
 * The sitewide footer block already guarantees every one of these routes is
 * discoverable, but a link sitting inside topically-related body copy carries
 * more weight than a boilerplate footer link that appears identically on all 70
 * pages. This is where the topical relationship is actually expressed.
 */
export default function RelatedLinks({ links }: { links: RelatedLink[] }) {
  const { locale } = useTranslations()
  const isGreek = locale === "el"

  if (links.length === 0) return null

  return (
    <section className="py-16 bg-[#061218]/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">
          {isGreek ? "Σχετικές υπηρεσίες" : "Related services"}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => {
            const className =
              "group block h-full rounded-lg border border-gray-800 bg-[#0A1A24] p-5 transition-colors hover:border-[#01FFFF]/60"
            const body = (
              <>
                <span className="flex items-center font-medium text-white">
                  {isGreek ? link.el : link.en}
                  <ArrowRight
                    size={16}
                    className="ml-2 text-[#01FFFF] opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
                <span className="mt-2 block text-sm text-gray-400">
                  {withFacts(isGreek ? link.elDesc : link.enDesc)}
                </span>
              </>
            )

            return (
              <li key={link.path}>
                {link.external ? (
                  <a href={link.path} className={className}>
                    {body}
                  </a>
                ) : (
                  <Link href={link.path} className={className}>
                    {body}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
