import { FlyerDistributionClient } from './FlyerDistributionClient'
import FAQSection from '@/app/components/FAQSection'
import { FLYER_DISTRIBUTION_FAQ } from '@/app/components/faqData'
import RelatedProjects from '@/app/components/RelatedProjects'
import ServiceDetailsSection from '@/app/components/ServiceDetailsSection'
import { DIANOMI_DETAILS } from '@/app/components/serviceDetailsData'
import { pickProjects } from '@/lib/serviceProjects'

export default function FlyerDistributionPage() {
  return (
    <>
      <FlyerDistributionClient />
      {/*
        Merged from /dianomi-fylladion-arta, which 308s here: the GPS-tracked
        process and the coverage report are what separate this page from a
        generic "we distribute flyers" landing.
      */}
      <ServiceDetailsSection details={DIANOMI_DETAILS} />
      <RelatedProjects projects={pickProjects('/flyer-distribution')} />
      {/* Same array feeds the FAQPage node in layout.tsx, so the two cannot drift. */}
      <FAQSection items={FLYER_DISTRIBUTION_FAQ} />
    </>
  )
}
