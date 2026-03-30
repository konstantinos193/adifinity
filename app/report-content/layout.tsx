import type React from "react"

interface ReportContentLayoutProps {
  children: React.ReactNode
}

export default function ReportContentLayout({
  children,
}: ReportContentLayoutProps) {
  return (
    <>
      {/* Layout wrapper for report content page */}
      {children}
    </>
  )
}
