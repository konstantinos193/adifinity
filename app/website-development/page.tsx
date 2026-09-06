import { WebsiteDevelopmentClient } from './WebsiteDevelopmentClient'
import RelatedLinks from '@/app/components/RelatedLinks'
import { WEB_DEVELOPMENT_RELATED } from '@/app/components/relatedLinksData'
import FAQSection from '@/app/components/FAQSection'
import { faqNode, WEBDEV_FAQ } from '@/app/components/faqData'
import RelatedProjects from '@/app/components/RelatedProjects'
import { jsonLd, pageGraph } from '@/lib/schema'
import { pickProjects } from '@/lib/serviceProjects'

export default function WebsiteDevelopmentPage() {
  return (
    <>
      {/*
        The whole graph is scoped to this page, not the layout.

        `app/website-development/layout.tsx` also wraps the six sub-services, so
        anything emitted there renders on seven URLs. The FAQ was already moved
        here for that reason; the breadcrumb had the same problem and was worse —
        every sub-page carried both its own trail and this one, and Google
        renders neither when a page declares two BreadcrumbLists.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          pageGraph({
            path: '/website-development',
            breadcrumb: [
              { name: 'Υπηρεσίες', path: '/services' },
              { name: 'Κατασκευή Ιστοσελίδων', path: '/website-development' },
            ],
            service: {
              path: '/website-development',
              name: 'Κατασκευή Ιστοσελίδων & Web Applications',
              description:
                'Custom κατασκευή ιστοσελίδων, web applications και e-shops σε React & Next.js. Καμία χρήση templates, μόνο clean code.',
              serviceType: [
                'Web Development',
                'Custom Web Applications',
                'E-commerce Development',
                'Landing Pages',
                'Technical SEO',
                'Web Application Development',
              ],
              offers: [
                {
                  name: 'Custom Web Applications',
                  description: 'Πλήρως custom React/Next.js εφαρμογές χωρίς templates',
                },
                {
                  name: 'E-commerce Development',
                  description: 'Custom online stores με Stripe και διαχείριση παραγγελιών',
                },
                {
                  name: 'Technical SEO Optimization',
                  description: 'Core Web Vitals, schema markup, speed optimization',
                },
              ],
            },
            faq: faqNode(WEBDEV_FAQ),
          }),
        )}
      />
      <WebsiteDevelopmentClient />
      {/*
        In the page, not the layout: that layout wraps the six sub-services, and
        each of those mounts its own, more specific selection.
      */}
      <RelatedProjects projects={pickProjects('/website-development')} />
      <FAQSection items={WEBDEV_FAQ} />
      <RelatedLinks links={WEB_DEVELOPMENT_RELATED} />
    </>
  )
}
