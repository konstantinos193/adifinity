import Link from "next/link"
import type { Crumb } from "@/lib/schema"

/**
 * Visible breadcrumb trail for every page below the homepage.
 *
 * Renders the same `Crumb[]` a route passes to `pageGraph()` for its
 * BreadcrumbList, so the structured data and what the visitor sees are one
 * trail — Google's breadcrumb guidance requires the markup to describe visible
 * breadcrumbs, and the site previously emitted the schema with nothing on the
 * page to back it.
 *
 * A server component: the trail must be in the initial HTML, and it is also a
 * crawl path from every deep page back up to its hub.
 *
 * Layout: the header is fixed and every hero pads itself down by ~7rem, so the
 * strip pads to the header height and then pulls the hero back up under it
 * with a negative margin, occupying the hero's top band rather than adding a
 * bar of empty space above it.
 */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const items: Crumb[] = [{ name: "Αρχική", path: "/" }, ...trail]

  return (
    <nav aria-label="Breadcrumb" className="relative z-20 pt-20 -mb-16">
      <ol className="container mx-auto px-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-gray-400">
        {items.map((crumb, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={`${crumb.path ?? crumb.name}-${i}`} className="flex items-center gap-x-1.5">
              {isLast || !crumb.path ? (
                <span aria-current="page" className="text-gray-300">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="hover:text-[#01FFFF] transition-colors">
                  {crumb.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-gray-600">
                  ›
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
