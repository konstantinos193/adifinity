"use client"

import { BarChart3, Megaphone, Search, Share2, Target, Video, Clock, Handshake, MapPin, TrendingUp } from "lucide-react"
import { ServiceLandingPage } from "@/app/components/ServiceLandingPage"

const iconClass = "w-5 h-5 text-[#01FFFF]"

export default function DigitalMarketingPage() {
  return (
    <ServiceLandingPage
      namespace="digital_marketing_page"
      serviceIcons={{
        social_media: <Share2 className={iconClass} />,
        google_ads: <Target className={iconClass} />,
        meta_ads: <Megaphone className={iconClass} />,
        seo: <Search className={iconClass} />,
        content: <Video className={iconClass} />,
        analytics: <BarChart3 className={iconClass} />,
      }}
      featureIcons={[
        <MapPin key="local" className={iconClass} />,
        <TrendingUp key="measurable" className={iconClass} />,
        <Handshake key="one-agency" className={iconClass} />,
        <Clock key="direct" className={iconClass} />,
      ]}
    />
  )
}
