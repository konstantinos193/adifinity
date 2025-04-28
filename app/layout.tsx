import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
    siteName: "adinfinity",
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
    card: "summary_large_image",
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
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
