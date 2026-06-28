import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import PrivacyPolicyContent from "./PrivacyPolicyContent"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("privacy_policy")
  
  return {
    title: `${t("title")} | adinfinity`,
    description: t("description"),
    alternates: {
      canonical: "https://adinfinity.gr/privacy-policy",
    },
    openGraph: {
      title: `${t("title")} | adinfinity`,
      description: t("description"),
      url: "https://adinfinity.gr/privacy-policy",
    },
  }
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
