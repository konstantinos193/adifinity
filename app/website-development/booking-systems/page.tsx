import { ContentRoute, contentMetadata } from '@/app/components/ContentRoute'
import { page } from '@/lib/content/services/booking-systems'

// Everything on this route (metadata, JSON-LD, breadcrumbs, FAQ, proof) is
// derived from the content object. Edit lib/content/services/booking-systems.ts, not this file.
export const metadata = contentMetadata(page)

export default function Page() {
  return <ContentRoute page={page} />
}
