import type { Metadata } from 'next'
import { serverT, SERVER_LOCALE } from '@/lib/metadata'
import { jsonLd, pageGraph } from '@/lib/schema'

export async function generateMetadata(): Promise<Metadata> {
  const locale = SERVER_LOCALE
  const t = serverT('about_page')
  
  // Dynamic locale mapping for OpenGraph
  const localeMap = {
    'el': 'el_GR',
    'en': 'en_US'
  }
  
  // Dynamic content based on locale
  const _structuredData = locale === 'el' ? {
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
      "latitude": "39.1606",
      "longitude": "20.9853"
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
      "latitude": "39.1606",
      "longitude": "20.9853"
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
    "priceRange": "€€€"
  }
  
  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: 'https://adinfinity.gr/about',
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
      {/*
        One JSON-LD graph for this route, every node cross-referenced by @id.

        Previously this file emitted free-standing ProfessionalService /
        LocalBusiness / Organization blocks with no @id, restating the
        company's address, telephone and social profiles — several of which
        contradicted the real ones in app/layout.tsx. Google saw three or four
        different businesses per page and had to pick one.

        The business entity is now stated once, in the root layout, and
        referenced here through `provider`. See lib/schema.ts.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
        pageGraph({
          path: "/about",
          breadcrumb: [
            { name: "Η Εταιρεία", path: "/about" },
          ],
          service: {
            path: "/about",
            name: "Διαφημιστική Εταιρεία",
            description: "Διαφημιστική εταιρεία στην Άρτα με εξειδίκευση σε digital marketing, graphic design, printing και web development από το 2013.",
            serviceType: [
              "Digital Marketing",
              "Graphic Design",
              "Printing",
              "Web Development",
              "Flyer Distribution",
              "Market Research",
            ],
          },
        }),
        )}
      />
      {children}
    </>
  )
}

