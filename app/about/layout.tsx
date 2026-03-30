import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('about_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  // Dynamic content based on locale
  const structuredData = locale === 'el' ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "adinfinity - Διαφημιστική Εταιρεία",
    "description": "Διαφημιστική εταιρεία στην Άρτα με εξειδίκευση σε digital marketing, graphic design, printing και web development από το 2013.",
    "url": "https://adinfinity.gr/about",
    "telephone": "+30-2681-303007",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Βασ. Πύρρου 30",
      "addressLocality": "Άρτα",
      "postalCode": "471 32",
      "addressCountry": "GR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.1262",
      "longitude": "20.9373"
    },
    "foundingDate": "2013",
    "sameAs": [
      "https://www.facebook.com/adinfinity.gr",
      "https://www.instagram.com/adinfinity.gr"
    ],
    "serviceType": ["Digital Marketing", "Graphic Design", "Printing", "Web Development", "Flyer Distribution", "Market Research"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece",
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Μάνος Κωσμάς",
        "jobTitle": "Διευθύνων Σύμβουλος",
        "description": "Με πάνω από 10 χρόνια εμπειρίας στον χώρο της διαφήμισης και του μάρκετινγκ"
      },
      {
        "@type": "Person", 
        "name": "Κωνσταντίνος Μπλαβάκης",
        "jobTitle": "Web Developer",
        "description": "Ειδικός στην ανάπτυξη ιστοσελίδων και εφαρμογών"
      }
    ],
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "€€€"
  } : {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "adinfinity - Creative Agency",
    "description": "Creative agency in Arta specializing in digital marketing, graphic design, printing and web development since 2013.",
    "url": "https://adinfinity.gr/about",
    "telephone": "+30-2681-303007",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vas. Pyrrou 30",
      "addressLocality": "Arta",
      "postalCode": "471 32",
      "addressCountry": "GR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.1262",
      "longitude": "20.9373"
    },
    "foundingDate": "2013",
    "sameAs": [
      "https://www.facebook.com/adinfinity.gr",
      "https://www.instagram.com/adinfinity.gr"
    ],
    "serviceType": ["Digital Marketing", "Graphic Design", "Printing", "Web Development", "Flyer Distribution", "Market Research"],
    "areaServed": {
      "@type": "Country",
      "name": "Greece",
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Manos Kosmas",
        "jobTitle": "CEO",
        "description": "With over 10 years of experience in advertising and marketing"
      },
      {
        "@type": "Person",
        "name": "Konstantinos Blavakis", 
        "jobTitle": "Web Developer",
        "description": "Specializing in website and application development"
      }
    ],
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "€€€"
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    keywords: [
      // Brand variations
      'adinfinity',
      'ad infinity',
      'adinity',
      'adinfit',
      'infiniry',
      'infinity ad',
      'adi infinity',
      
      // About page specific
      'about adinfinity',
      'ποιοι είμαστε',
      'who we are',
      'our team',
      'η ομάδα μας',
      'our story',
      'η ιστορία μας',
      'company history',
      'ιστορία εταιρείας',
      
      // Team related
      'manos kosmas',
      'μάνος κωσμάς',
      'konstantinos blavakis',
      'κωνσταντίνος μπλαβάκης',
      'creative team',
      'δημιουργική ομάδα',
      'marketing team',
      'ομάδα μάρκετινγκ',
      
      // Company info
      'adinfinity άρτα',
      'adinfinity arta',
      'διαφημιστική εταιρεία',
      'creative agency',
      'advertising agency',
      'digital agency',
      'marketing agency',
      
      // Services
      'digital marketing',
      'graphic design',
      'web development',
      'printing services',
      'flyer distribution',
      'market research',
      
      // Location specific
      'άρτα',
      'arta',
      'ηπειρος',
      'epirus',
      'greece',
      'ελλάδα',
      
      // Business related
      'professional services',
      'business solutions',
      'creative solutions',
      'marketing solutions',
      'digital solutions'
    ],
    alternates: {
      canonical: 'https://adinfinity.gr/about',
      languages: {
        'el-GR': 'https://adinfinity.gr/about',
        'el': 'https://adinfinity.gr/about',
        'en': 'https://adinfinity.gr/about',
        'en-US': 'https://adinfinity.gr/about'
      },
    },
    openGraph: {
      title: t('seo.title'),
      description: t('seo.description'),
      url: 'https://adinfinity.gr/about',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'el' 
            ? 'Σχετικά με Εμάς | adinfinity - Διαφημιστική Εταιρεία Άρτα'
            : 'About Us | adinfinity - Creative Agency Arta',
        },
      ],
      locale: localeMap[locale as keyof typeof localeMap],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.title'),
      description: t('seo.description'),
      images: ['/images/og-image.png'],
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "adinfinity - Διαφημιστική Εταιρεία",
            "description": "Διαφημιστική εταιρεία στην Άρτα με εξειδίκευση σε digital marketing, graphic design, printing και web development από το 2013.",
            "url": "https://adinfinity.gr/about",
            "telephone": "+30-2681-303007",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Βασ. Πύρρου 30",
              "addressLocality": "Άρτα",
              "postalCode": "471 32",
              "addressCountry": "GR",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.1262",
              "longitude": "20.9373"
            },
            "foundingDate": "2013",
            "sameAs": [
              "https://www.facebook.com/adinfinity.gr",
              "https://www.instagram.com/adinfinity.gr"
            ],
            "serviceType": ["Digital Marketing", "Graphic Design", "Printing", "Web Development", "Flyer Distribution", "Market Research"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "employee": [
              {
                "@type": "Person",
                "name": "Μάνος Κωσμάς",
                "jobTitle": "Διευθύνων Σύμβουλος",
                "description": "Με πάνω από 10 χρόνια εμπειρίας στον χώρο της διαφήμισης και του μάρκετινγκ"
              },
              {
                "@type": "Person", 
                "name": "Κωνσταντίνος Μπλαβάκης",
                "jobTitle": "Web Developer",
                "description": "Ειδικός στην ανάπτυξη ιστοσελίδων και εφαρμογών"
              }
            ],
            "openingHours": "Mo-Fr 09:00-17:00",
            "priceRange": "€€€"
          }),
        }}
      />
      {children}
    </>
  )
}

