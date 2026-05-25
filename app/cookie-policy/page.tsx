import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import CookiePolicyContent from "./CookiePolicyContent"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("cookie_policy")
  
  return {
    title: `${t("title")} | adinfinity`,
    description: t("description"),
    openGraph: {
      title: `${t("title")} | adinfinity`,
      description: t("description"),
      url: "https://adinfinity.gr/cookie-policy",
    },
  }
}

export default function CookiePolicyPage() {
  return <CookiePolicyContent />
}
