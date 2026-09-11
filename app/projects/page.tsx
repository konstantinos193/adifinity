import { ProjectsClient } from './ProjectsClient'
import { jsonLd, pageGraph } from '@/lib/schema'
import Breadcrumbs from '@/app/components/Breadcrumbs'

export default function ProjectsPage() {
  return (
    <>
      {/*
        Scoped to this page, not `app/projects/layout.tsx`.

        That layout also wraps the 30 `/projects/[slug]` case studies, each of
        which builds its own three-level breadcrumb. Emitting this trail there
        gave every case study two competing BreadcrumbLists, and Google renders
        neither when a page declares more than one.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          pageGraph({
            path: '/projects',
            breadcrumb: [{ name: 'Έργα', path: '/projects' }],
            service: {
              path: '/projects',
              name: 'Portfolio & Έργα — Branding & Graphic Design',
              description:
                'Εξερευνήστε το portfolio και τα διαφημιστικά έργα μας. Case studies, branding projects, ιστοσελίδες και marketing campaigns.',
              serviceType: [
                'Branding',
                'Graphic Design',
                'Logo Design',
                'Web Design',
                'Marketing',
                'Visual Identity',
              ],
              offers: [
                {
                  name: 'Branding & Logo Design',
                  description: 'Custom branding και λογότυπα για επιχειρήσεις',
                },
                {
                  name: 'Graphic Design',
                  description: 'Επαγγελματικό graphic design και marketing material',
                },
                {
                  name: 'Web Design & Development',
                  description: 'Custom ιστοσελίδες και web applications',
                },
              ],
            },
          }),
        )}
      />
      {/* Visible trail — same array as the BreadcrumbList above. */}
      <Breadcrumbs trail={[{ name: 'Έργα', path: '/projects' }]} />
      <ProjectsClient />
    </>
  )
}
