import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'adinfinity — Διαφημιστική Εταιρεία Άρτα',
    short_name: 'adinfinity',
    description:
      'Διαφημιστική εταιρεία στην Άρτα. Γραφιστική, εκτυπώσεις, επιγραφές, κατασκευή ιστοσελίδων, διανομή εντύπων και digital marketing.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#07141C',
    theme_color: '#07141C',
    lang: 'el',
    dir: 'ltr',
    categories: ['business', 'productivity'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
