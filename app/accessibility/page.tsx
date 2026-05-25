import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import AccessibilityClient from "./AccessibilityClient"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('accessibility')
  
  const title = t('title')
  const description = t('description')
  
  return {
    title: `${title} | adinfinity`,
    description,
    keywords: [
      'προσβασιμότητα', 'accessibility', 'WCAG', 'ADA', 'ατομα με αναπηρίες', 
      'disabled users', 'προσβάσιμη ιστοσελίδα', 'accessible website', 'adinfinity',
      'διαφημιστική εταιρεία', 'advertising agency', 'digital marketing', 'ηλεκτρονικό μάρκετινγκ'
    ],
    openGraph: {
      title: `${title} | adinfinity`,
      description,
      url: "https://adinfinity.gr/accessibility",
      type: "article",
      images: [
        {
          url: "https://adinfinity.gr/images/accessibility-og.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | adinfinity`,
      description,
      images: ["https://adinfinity.gr/images/accessibility-og.jpg"],
    },
    alternates: {
      canonical: "https://adinfinity.gr/accessibility",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function AccessibilityPage() {
  return <AccessibilityClient />
}
