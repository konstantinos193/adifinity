import { Metadata } from "next"
import { serverT, OG_LOCALE } from "@/lib/metadata"
import CookiePolicyContent from "./CookiePolicyContent"

export async function generateMetadata(): Promise<Metadata> {
  const t = serverT('cookie_policy')
  
  return {
    title: `${t("title")} | adinfinity`,
    description: t("seoDescription"),
    alternates: {
      canonical: "https://adinfinity.gr/cookie-policy",
    },
    openGraph: {
      title: `${t("title")} | adinfinity`,
      description: t("seoDescription"),
      url: "https://adinfinity.gr/cookie-policy",
      siteName: "adinfinity",
      locale: OG_LOCALE,
      type: "website",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: `${t("title")} | adinfinity`,
        },
      ],
    },
  }
}

export default function CookiePolicyPage() {
  return <CookiePolicyContent />
}
