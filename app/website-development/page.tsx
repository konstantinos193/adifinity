import { WebsiteDevelopmentClient } from './WebsiteDevelopmentClient'
import RelatedLinks from '@/app/components/RelatedLinks'
import { WEB_DEVELOPMENT_RELATED } from '@/app/components/relatedLinksData'

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <WebsiteDevelopmentClient />
      <RelatedLinks links={WEB_DEVELOPMENT_RELATED} />
    </>
  )
}
