import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n'
import ReportContentClient from "./ReportContentClient"
import type { Metadata } from "next"

interface ReportContentPageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: ReportContentPageProps): Promise<Metadata> {
  const locale = params.locale || routing.defaultLocale
  const t = await getTranslations({ locale, namespace: 'report_content' })
  
  const baseUrl = process.env.NODE_ENV === 'production' ? "https://adinfinity.gr" : "https://adinfinity.gr"
  const pagePath = "/report-content"
  const fullUrl = `${baseUrl}${pagePath}`
  
  // Bilingual content based on locale
  const titles = {
    el: "Αναφορά Περιεχομένου | adinfinity",
    en: "Report Content | adinfinity"
  }
  
  const descriptions = {
    el: "Αναφέρετε ενδεχομένως παράνομο ή ακατάλληλο περιεχόμενο στην ιστοσελίδα adinfinity.",
    en: "Report potentially illegal or inappropriate content on adinfinity website."
  }
  
  const keywords = {
    el: [
      "αναφορά περιεχομένου",
      "αναφορά περιεχομένου dsa",
      "παράνομο περιεχόμενο",
      "ακατάλληλο περιεχόμενο",
      "ασφάλεια διαδικτύου",
      "προστασία χρηστών",
      "μηχανισμοί αναφοράς",
      "κατάργηση περιεχομένου",
      "παραβίαση περιεχομένου",
      "φόρμα αναφοράς",
      "μέτρα ασφαλείας",
      "διαδικτυακή ασφάλεια",
      "προστασία ανηλίκων",
      "επιβίωση περιεχομένου",
      "ρυθμιστική συμμόρφωση"
    ],
    en: [
      "report content",
      "content reporting",
      "illegal content",
      "inappropriate content",
      "DSA reporting",
      "safety reporting",
      "content moderation",
      "report abuse",
      "online safety",
      "content violation",
      "report form",
      "safety measures",
      "user protection",
      "content removal",
      "reporting mechanisms",
      "regulatory compliance"
    ]
  }
  
  // Generate structured data based on locale
  const generateStructuredData = (locale: string) => {
    const localeContent = {
      el: {
        name: "Αναφορά Περιεχομένου | adinfinity",
        description: "Αναφέρετε ενδεχομένως παράνομο ή ακατάλληλο περιεχόμενο στην ιστοσελίδα adinfinity.",
        breadcrumbNames: ["Αρχική", "Συμμόρφωση DSA", "Αναφορά Περιεχομένου"],
        contactType: "αναφορά περιεχομένου",
        availableLanguage: ["Greek", "English"],
        organizationName: "Διαφημιστική adinfinity"
      },
      en: {
        name: "Report Content | adinfinity",
        description: "Report potentially illegal or inappropriate content on adinfinity website.",
        breadcrumbNames: ["Home", "DSA Compliance", "Report Content"],
        contactType: "content reporting",
        availableLanguage: ["Greek", "English"],
        organizationName: "adinfinity"
      }
    }
    
    const content = localeContent[locale as keyof typeof localeContent] || localeContent.el
    
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: content.name,
      description: content.description,
      url: fullUrl,
      inLanguage: locale,
      isPartOf: {
        "@type": "WebSite",
        name: "adinfinity",
        url: baseUrl,
      },
      about: {
        "@type": "Thing",
        name: locale === 'el' ? "Αναφορά Περιεχομένου" : "Content Reporting",
        description: locale === 'el' 
          ? "Σύστημα για την αναφορά παράνομου ή ακατάλληλου διαδικτυακού περιεχομένου"
          : "System for reporting illegal or inappropriate online content",
      },
      mainEntity: {
        "@type": "Organization",
        name: content.organizationName,
        url: baseUrl,
        contactPoint: {
          "@type": "ContactPoint",
          email: "adenfinity@gmail.com",
          telephone: "+30-2681-303007",
          contactType: content.contactType,
          availableLanguage: content.availableLanguage,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Vas. Pyrrou 30",
          addressLocality: "Arta",
          addressCountry: "GR",
        },
      },
      breadcrumbList: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: content.breadcrumbNames[0],
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: content.breadcrumbNames[1],
            item: `${baseUrl}/dsa-compliance`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: content.breadcrumbNames[2],
            item: fullUrl,
          },
        ],
      },
    }
  }
  
  return {
    title: {
      default: titles[locale as keyof typeof titles] || titles.el,
      template: "%s | adinfinity",
    },
    description: descriptions[locale as keyof typeof descriptions] || descriptions.el,
    keywords: keywords[locale as keyof typeof keywords] || keywords.el,
    authors: [{ name: "adinfinity" }],
    creator: "adinfinity",
    publisher: "adinfinity",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
      languages: {
        "el-GR": `${baseUrl}/report-content`,
        "el": `${baseUrl}/report-content`,
        "en": `${baseUrl}/report-content`,
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.el,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.el,
      url: fullUrl,
      type: "website",
      locale: locale === 'el' ? 'el_GR' : 'en_US',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: titles[locale as keyof typeof titles] || titles.el,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles] || titles.el,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.el,
      images: ["/images/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default function ReportContentPage({ params }: ReportContentPageProps) {
  const locale = params.locale || routing.defaultLocale
  
  // Generate structured data based on locale
  const generateStructuredData = (locale: string) => {
    const localeContent = {
      el: {
        name: "Αναφορά Περιεχομένου | adinfinity",
        description: "Αναφέρετε ενδεχομένως παράνομο ή ακατάλληλο περιεχόμενο στην ιστοσελίδα adinfinity.",
        breadcrumbNames: ["Αρχική", "Συμμόρφωση DSA", "Αναφορά Περιεχομένου"],
        contactType: "αναφορά περιεχομένου",
        availableLanguage: ["Greek", "English"],
        organizationName: "Διαφημιστική adinfinity"
      },
      en: {
        name: "Report Content | adinfinity",
        description: "Report potentially illegal or inappropriate content on adinfinity website.",
        breadcrumbNames: ["Home", "DSA Compliance", "Report Content"],
        contactType: "content reporting",
        availableLanguage: ["Greek", "English"],
        organizationName: "adinfinity"
      }
    }
    
    const content = localeContent[locale as keyof typeof localeContent] || localeContent.el
    const baseUrl = process.env.NODE_ENV === 'production' ? "https://adinfinity.gr" : "https://adinfinity.gr"
    const pagePath = "/report-content"
    const fullUrl = `${baseUrl}${pagePath}`
    
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: content.name,
      description: content.description,
      url: fullUrl,
      inLanguage: locale,
      isPartOf: {
        "@type": "WebSite",
        name: "adinfinity",
        url: baseUrl,
      },
      about: {
        "@type": "Thing",
        name: locale === 'el' ? "Αναφορά Περιεχομένου" : "Content Reporting",
        description: locale === 'el' 
          ? "Σύστημα για την αναφορά παράνομου ή ακατάλληλου διαδικτυακού περιεχομένου"
          : "System for reporting illegal or inappropriate online content",
      },
      mainEntity: {
        "@type": "Organization",
        name: content.organizationName,
        url: baseUrl,
        contactPoint: {
          "@type": "ContactPoint",
          email: "adenfinity@gmail.com",
          telephone: "+30-2681-303007",
          contactType: content.contactType,
          availableLanguage: content.availableLanguage,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Vas. Pyrrou 30",
          addressLocality: "Arta",
          addressCountry: "GR",
        },
      },
      breadcrumbList: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: content.breadcrumbNames[0],
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: content.breadcrumbNames[1],
            item: `${baseUrl}/dsa-compliance`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: content.breadcrumbNames[2],
            item: fullUrl,
          },
        ],
      },
    }
  }
  
  return (
    <>
      {/* Structured Data for Report Content Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData(locale)),
        }}
      />
      <ReportContentClient locale={locale} />
    </>
  )
}
