import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import EasterBanner from "./components/EasterBanner"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "adinfinity",
  description: "Μετατρέπουμε Ιδέες σε Επιτυχίες!",
  openGraph: {
    type: "website",
    url: "https://adinfinity.gr",
    title: "adinfinity",
    description: "Μετατρέπουμε Ιδέες σε Επιτυχίες!",
    siteName: "adinfinity", // Add site name
    images: [
      {
        url: "https://i.postimg.cc/2SygFYcf/Untitled-design-28.png",
        width: 1200,
        height: 630,
        alt: "adinfinity",
      },
    ],
  },
  twitter: {
    card: "https://scontent.fath3-3.fna.fbcdn.net/v/t39.30808-6/334408131_1246318269646846_8224333063588841539_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=2_CWXkcAw9UQ7kNvgGdyaZk&_nc_oc=AdhGP9wzla-A9WlCeyQ2S9Na1zrMjnnSwRROYPVGzPQ2pe-YBwkL_K9MmF9IIkH9mBWlp97aXtC3cg5O2mvLDeTU&_nc_zt=23&_nc_ht=scontent.fath3-3.fna&_nc_gid=AUyTEjsEyqR1nHIds61x-bj&oh=00_AYAtJbtm9NsYUpqBTDoZ7XWXxOy7J3c4dYPlMKPpHSzBAA&oe=67B39D48", // Add Twitter card
    title: "adinfinity",
    description: "Μετατρέπουμε Ιδέες σε Επιτυχίες!",
    images: ["https://i.postimg.cc/2SygFYcf/Untitled-design-28.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el">
      <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="jtMtOJZf8BIpM68R5nn5ZSR4YqqnbplmWlIjHlzPArA" />
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://adinfinity.gr" />

        {/* Robots meta tag */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adinfinity.gr" />
        <meta property="og:title" content="adinfinity" />
        <meta property="og:description" content="Μετατρέπουμε Ιδέες σε Επιτυχίες!" />
        <meta property="og:image" content="https://i.postimg.cc/2SygFYcf/Untitled-design-28.png" />
        <meta property="og:site_name" content="adinfinity" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="adinfinity" />
        <meta name="twitter:description" content="Μετατρέπουμε Ιδέες σε Επιτυχίες!" />
        <meta name="twitter:image" content="https://i.postimg.cc/2SygFYcf/Untitled-design-28.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <EasterBanner />
        <main>{children}</main>
        <Footer />
        <EasterDecorations />
        <div className="fixed bottom-8 right-8 z-[9999]">
          <EasterThemeToggle />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
