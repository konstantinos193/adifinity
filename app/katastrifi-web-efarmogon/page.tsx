import type { Metadata } from 'next'
import KatastrifiWebEfarmogonContent from './KatastrifiWebEfarmogonContent'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Κατασκευή Web Εφαρμογών | Custom Development | adinfinity',
    description: 'Εξειδικευμένη κατασκευή web εφαρμογών σε React & Next.js. Custom solutions για επιχειρήσεις. No templates, SEO-ready. 📞 2681 303007',
    alternates: {
      canonical: 'https://adinfinity.gr/katastrifi-web-efarmogon',
    },
    openGraph: {
      title: 'Κατασκευή Web Εφαρμογών | Custom Development | adinfinity',
      description: 'Εξειδικευμένη κατασκευή web εφαρμογών σε React & Next.js. Custom solutions για επιχειρήσεις.',
      url: 'https://adinfinity.gr/katastrifi-web-efarmogon',
      siteName: 'adinfinity',
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: 'Κατασκευή Web Εφαρμογών - adinfinity',
        },
      ],
      locale: 'el_GR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Κατασκευή Web Εφαρμογών | adinfinity',
      description: 'Custom web applications σε React & Next.js για ελληνικές επιχειρήσεις.',
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

export default function KatastrifiWebEfarmogonPage() {
  return <KatastrifiWebEfarmogonContent />
}
