import { WebsiteDevelopmentClient } from './WebsiteDevelopmentClient'
import RelatedLinks from '@/app/components/RelatedLinks'
import { WEB_DEVELOPMENT_RELATED } from '@/app/components/relatedLinksData'
import FAQSection from '@/app/components/FAQSection'
import { faqPageSchema, WEBDEV_FAQ } from '@/app/components/faqData'

export default function WebsiteDevelopmentPage() {
  return (
    <>
      {/*
        Scoped to this page rather than the layout: the layout also wraps the six
        sub-services, which were each inheriting these same five questions.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(WEBDEV_FAQ)) }}
      />
      <WebsiteDevelopmentClient />
      <FAQSection items={WEBDEV_FAQ} />
      <RelatedLinks links={WEB_DEVELOPMENT_RELATED} />
    </>
  )
}