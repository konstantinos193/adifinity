import { ContentRoute, contentMetadata } from '@/app/components/ContentRoute'
import { page } from '@/lib/content/services/led-neon'

// Everything on this route (metadata, JSON-LD, breadcrumbs, FAQ, proof) is
// derived from the content object. Edit lib/content/services/led-neon.ts, not this file.
export const metadata = contentMetadata(page)

export default function Page() {
  return <ContentRoute page={page} />
}
