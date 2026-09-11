import type { Project } from '@/lib/projects'

/**
 * Industry buckets for the portfolio filter (audit §23).
 *
 * Derived from each project's free-text `businessType` so the taxonomy lives
 * in one place and a new project lands in a bucket without a second field to
 * maintain. Client-side state only: no `?industry=` URLs, so the grid cannot
 * spawn indexable filter pages.
 */
export interface Industry {
  key: string
  el: string
  en: string
  /** Tested against `businessType` (Greek) and `businessTypeEn`. */
  match: RegExp
}

export const INDUSTRIES: Industry[] = [
  { key: 'food', el: 'Εστίαση & καφέ', en: 'Food & drink', match: /cafe|bar|εστιατόρ|πιτσαρ|playground|restaurant|pizzeria/i },
  { key: 'hospitality', el: 'Καταλύματα', en: 'Accommodation', match: /κατάλυμα|accommodation|hotel|apartments/i },
  { key: 'realestate', el: 'Ακίνητα', en: 'Real estate', match: /ακίνητ|real estate/i },
  { key: 'education', el: 'Εκπαίδευση', en: 'Education', match: /φροντιστ|κδαπ|εκπαίδ|tutoring|education|school/i },
  { key: 'health', el: 'Υγεία & ευεξία', en: 'Health & wellness', match: /φυσιοθερ|ψυχιατρ|λογοθερ|διατροφ|physio|psychiatr|speech|nutrition|wellness/i },
  { key: 'professional', el: 'Επαγγελματικές υπηρεσίες', en: 'Professional services', match: /λογιστ|συμβολαιογρ|accounting|notary|law/i },
  { key: 'retail', el: 'Λιανική & προσωπικές υπηρεσίες', en: 'Retail & personal services', match: /κοσμήματ|επισκευ|κομμωτ|κουρε|jewel|repair|barber|hair/i },
  { key: 'associations', el: 'Σύλλογοι & αθλητισμός', en: 'Associations & sport', match: /σύλλογος|ένωση|association|club|sport/i },
  { key: 'technical', el: 'Τεχνικές, ενέργεια & βιομηχανία', en: 'Technical, energy & industry', match: /ενεργειακ|υγραερ|αλιεία|βιομηχαν|μεταφορ|energy|gas|fish|industry|transport|moving/i },
]

export function industryOf(project: Project): Industry | undefined {
  const haystack = `${project.businessType ?? ''} ${project.businessTypeEn ?? ''}`
  return INDUSTRIES.find((industry) => industry.match.test(haystack))
}
