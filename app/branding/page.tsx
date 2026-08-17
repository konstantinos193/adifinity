"use client"

import { Package, Palette, PenTool, RefreshCw, Compass, BookOpen, Printer, FileDown, Maximize2, MapPin } from "lucide-react"
import { ServiceLandingPage } from "@/app/components/ServiceLandingPage"

const iconClass = "w-5 h-5 text-[#01FFFF]"

export default function BrandingPage() {
  return (
    <ServiceLandingPage
      namespace="branding_page"
      serviceIcons={{
        logo: <PenTool className={iconClass} />,
        identity: <Palette className={iconClass} />,
        strategy: <Compass className={iconClass} />,
        guidelines: <BookOpen className={iconClass} />,
        rebranding: <RefreshCw className={iconClass} />,
        packaging: <Package className={iconClass} />,
      }}
      featureIcons={[
        <Printer key="print" className={iconClass} />,
        <FileDown key="ownership" className={iconClass} />,
        <Maximize2 key="scales" className={iconClass} />,
        <MapPin key="local" className={iconClass} />,
      ]}
    />
  )
}
