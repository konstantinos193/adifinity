"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/components/useTranslations"

const EnvelopeIcon = () => (
  <div className="relative w-32 h-32 mb-4">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0D2436] to-[#071218] rounded-md shadow-lg overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Envelope body */}
          <rect x="10" y="20" width="60" height="40" rx="3" fill="#01A9FF" fillOpacity="0.2" stroke="#01FFFF" strokeWidth="1.5" />
          {/* Envelope flap */}
          <path d="M10 20L40 44L70 20" stroke="#01FFFF" strokeWidth="1.5" strokeLinejoin="round" />
          {/* Heart seal */}
          <path d="M40 34C40 34 34 28 34 24C34 21.8 35.8 20 38 20C39.1 20 40 20.6 40 20.6C40 20.6 40.9 20 42 20C44.2 20 46 21.8 46 24C46 28 40 34 40 34Z" fill="#01FFFF" fillOpacity="0.8">
            <animate attributeName="opacity" values="1;0.5;1" dur="2.5s" repeatCount="indefinite" />
          </path>
          {/* Decorative lines */}
          <line x1="18" y1="50" x2="32" y2="50" stroke="#01A9FF" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="48" y1="50" x2="62" y2="50" stroke="#01A9FF" strokeWidth="1" strokeDasharray="2 1" />
        </svg>
      </div>
      <div className="absolute top-0 w-full h-px bg-white/20" />
      <div className="absolute bottom-0 w-full h-px bg-white/20" />
      <div className="absolute left-0 h-full w-px bg-white/20" />
      <div className="absolute right-0 h-full w-px bg-white/20" />
    </div>
    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#01FFFF]/30 rounded-full animate-ping" />
    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#01A9FF]/30 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
  </div>
)

const MiniWebIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]">
      <rect x="3" y="4" width="18" height="14" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="6" r="0.8" fill="currentColor" />
      <circle cx="9" cy="6" r="0.8" fill="currentColor" />
      <rect x="6" y="11" width="12" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="6" y="14" width="8" height="1.5" rx="0.5" fill="currentColor" />
      <path d="M10 21H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 18V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
)

const VideoProIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]">
      <rect x="2" y="5" width="15" height="14" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 9L22 6V18L17 15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 10L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 12L11 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
)

const VideoOnlyIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]">
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  </div>
)

const RsvpIcon = () => (
  <svg className="w-8 h-8 text-[#01FFFF]" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="18" cy="18" r="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16.5 18L17.5 19L19.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const TemplatesIcon = () => (
  <svg className="w-8 h-8 text-[#01FFFF]" viewBox="0 0 24 24" fill="none">
    <path d="M12 3L20 8V16L12 21L4 16V8L12 3Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 8L13.5 10.5L16 11L14 13L14.5 15.5L12 14.25L9.5 15.5L10 13L8 11L10.5 10.5L12 8Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
  </svg>
)

const ShareIcon = () => (
  <svg className="w-8 h-8 text-[#01FFFF]" viewBox="0 0 24 24" fill="none">
    <circle cx="18" cy="5" r="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="12" r="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="19" r="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const CustomizeIcon = () => (
  <svg className="w-8 h-8 text-[#01FFFF]" viewBox="0 0 24 24" fill="none">
    <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M21 12C21 9.61 19.96 7.47 18.31 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="13" y="13" width="9" height="9" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15.5 17.5L17.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17.5 15.5L17.5 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const TypeCard = ({
  icon,
  title,
  description,
  features,
}: {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}) => (
  <motion.div
    className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-8 rounded-xl shadow-xl border border-cyan-900/30 h-full group"
    whileHover={{
      scale: 1.03,
      boxShadow: "0 0 25px rgba(1, 255, 255, 0.2)",
      borderColor: "rgba(1, 255, 255, 0.5)",
    }}
    transition={{ duration: 0.3 }}
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#01FFFF] transition-colors">{title}</h3>
    <p className="text-gray-400 text-sm mb-5">{description}</p>
    <ul className="space-y-2">
      {features.map((f, i) => (
        <li key={i} className="flex items-center text-sm text-gray-300">
          <Check className="w-4 h-4 text-[#01FFFF] mr-2 shrink-0" />
          {f}
        </li>
      ))}
    </ul>
  </motion.div>
)

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactElement
  title: string
  description: string
}) => (
  <motion.div
    className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-8 rounded-xl shadow-xl border border-cyan-900/30 h-full"
    whileHover={{
      y: -10,
      boxShadow: "0 20px 25px rgba(1, 255, 255, 0.1)",
      borderColor: "rgba(1, 255, 255, 0.3)",
    }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-gray-300">{description}</p>
  </motion.div>
)

export default function InvitationsPage() {
  const { t } = useTranslations()

  const types = [
    {
      icon: <MiniWebIcon />,
      title: t("invitations_page.types.mini_website.title") as string,
      description: t("invitations_page.types.mini_website.description") as string,
      features: (t("invitations_page.types.mini_website.features") as string[]) || [],
    },
    {
      icon: <VideoProIcon />,
      title: t("invitations_page.types.video_pro.title") as string,
      description: t("invitations_page.types.video_pro.description") as string,
      features: (t("invitations_page.types.video_pro.features") as string[]) || [],
    },
    {
      icon: <VideoOnlyIcon />,
      title: t("invitations_page.types.video_only.title") as string,
      description: t("invitations_page.types.video_only.description") as string,
      features: (t("invitations_page.types.video_only.features") as string[]) || [],
    },
  ]

  const featuresData = (t("invitations_page.features") as unknown) as Array<{ title: string; description: string }>

  const features = [
    { icon: <RsvpIcon />, title: featuresData[0]?.title, description: featuresData[0]?.description },
    { icon: <TemplatesIcon />, title: featuresData[1]?.title, description: featuresData[1]?.description },
    { icon: <ShareIcon />, title: featuresData[2]?.title, description: featuresData[2]?.description },
    { icon: <CustomizeIcon />, title: featuresData[3]?.title, description: featuresData[3]?.description },
  ]

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#07141C]/90" />
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-[#01FFFF]/5 rounded-full blur-[100px]" />
          </div>
        </div>

        <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-[#01FFFF]/10 border border-[#01FFFF]/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-[#01FFFF] rounded-full mr-2 animate-pulse" />
              <span className="text-[#01FFFF] text-sm font-medium">{t("invitations_page.hero_badge")}</span>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6 flex justify-center"
            >
              <EnvelopeIcon />
            </motion.div>

            <h1 className="text-5xl md:text-7xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
              {t("invitations_page.title")}
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-[#01FFFF]">
              {t("invitations_page.subtitle")}
            </h2>
            <motion.p
              className="text-lg max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t("invitations_page.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="https://invitations.adinfinity.gr" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("invitations_page.create_invitation")}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
              <Link href="/contact#contact-form">
                <motion.button
                  className="border-2 border-[#01FFFF] text-[#01FFFF] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("invitations_page.cta.contact_us")}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Invitation Types */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("invitations_page.our_services")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {types.map((type, index) => (
            <TypeCard key={index} {...type} />
          ))}
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("invitations_page.why_choose_us")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </motion.div>
      </div>

      {/* Demo Gallery */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("invitations_page.demo_gallery.title")}
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t("invitations_page.demo_gallery.subtitle")}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { key: "elegant", icon: <MiniWebIcon /> },
            { key: "minimal", icon: <VideoProIcon /> },
            { key: "island", icon: <VideoOnlyIcon /> },
            { key: "traditional", icon: <MiniWebIcon /> },
            { key: "luxury", icon: <VideoProIcon /> },
            { key: "baptism", icon: <VideoOnlyIcon /> },
          ].map((demo, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-xl border border-cyan-900/30 group cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(1, 255, 255, 0.2)",
                borderColor: "rgba(1, 255, 255, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex justify-center">{demo.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#01FFFF] transition-colors">
                {t(`invitations_page.demo_gallery.${demo.key}.title`)}
              </h3>
              <p className="text-sm text-gray-400">
                {t(`invitations_page.demo_gallery.${demo.key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pricing Packages */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("invitations_page.pricing.title")}
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t("invitations_page.pricing.subtitle")}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {["basic", "premium", "mini_website"].map((pkg, index) => (
            <motion.div
              key={pkg}
              className={`bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-8 rounded-xl shadow-xl border ${
                pkg === "premium" ? "border-[#01FFFF]/50 scale-105" : "border-cyan-900/30"
              } relative`}
              whileHover={{
                scale: pkg === "premium" ? 1.05 : 1.03,
                boxShadow: "0 0 25px rgba(1, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              {pkg === "premium" && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#01FFFF] text-[#07141C] px-4 py-1 rounded-full text-sm font-bold">
                  Δημοφιλές
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-white">
                {t(`invitations_page.pricing.${pkg}.title`)}
              </h3>
              <div className="text-4xl font-bold mb-2 text-[#01FFFF]">
                {t(`invitations_page.pricing.${pkg}.price`)}
              </div>
              <p className="text-gray-400 mb-6">
                {t(`invitations_page.pricing.${pkg}.description`)}
              </p>
              <ul className="space-y-3 mb-6">
                {(t(`invitations_page.pricing.${pkg}.features`) as string[]).map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#01FFFF] mr-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact#contact-form">
                <motion.button
                  className={`w-full py-3 rounded-full font-bold ${
                    pkg === "premium"
                      ? "bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C]"
                      : "border-2 border-[#01FFFF] text-[#01FFFF] hover:bg-[#01FFFF]/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("invitations_page.wedding_form.submit")}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Wedding Form */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="max-w-2xl mx-auto bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl shadow-2xl border border-cyan-900/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-[#01FFFF]">
            {t("invitations_page.wedding_form.title")}
          </h2>
          <p className="text-center text-gray-400 mb-8">
            {t("invitations_page.wedding_form.description")}
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  {t("invitations_page.wedding_form.fields.names")}
                </label>
                <input
                  type="text"
                  className="w-full bg-[#07141C] border border-cyan-900/30 rounded-lg px-4 py-3 text-white focus:border-[#01FFFF] focus:outline-none"
                  placeholder={t("invitations_page.wedding_form.fields.names")}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  {t("invitations_page.wedding_form.fields.date")}
                </label>
                <input
                  type="date"
                  className="w-full bg-[#07141C] border border-cyan-900/30 rounded-lg px-4 py-3 text-white focus:border-[#01FFFF] focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  {t("invitations_page.wedding_form.fields.city")}
                </label>
                <input
                  type="text"
                  className="w-full bg-[#07141C] border border-cyan-900/30 rounded-lg px-4 py-3 text-white focus:border-[#01FFFF] focus:outline-none"
                  placeholder={t("invitations_page.wedding_form.fields.city")}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  {t("invitations_page.wedding_form.fields.style")}
                </label>
                <select className="w-full bg-[#07141C] border border-cyan-900/30 rounded-lg px-4 py-3 text-white focus:border-[#01FFFF] focus:outline-none">
                  <option>Elegant</option>
                  <option>Minimal</option>
                  <option>Island Wedding</option>
                  <option>Traditional</option>
                  <option>Luxury</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                {t("invitations_page.wedding_form.fields.guests")}
              </label>
              <input
                type="number"
                className="w-full bg-[#07141C] border border-cyan-900/30 rounded-lg px-4 py-3 text-white focus:border-[#01FFFF] focus:outline-none"
                placeholder={t("invitations_page.wedding_form.fields.guests")}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="rsvp" className="accent-[#01FFFF]" />
                <label htmlFor="rsvp" className="text-sm text-gray-400">
                  {t("invitations_page.wedding_form.fields.rsvp")}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="map" className="accent-[#01FFFF]" />
                <label htmlFor="map" className="text-sm text-gray-400">
                  {t("invitations_page.wedding_form.fields.map")}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="music" className="accent-[#01FFFF]" />
                <label htmlFor="music" className="text-sm text-gray-400">
                  {t("invitations_page.wedding_form.fields.music")}
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  {t("invitations_page.wedding_form.fields.email")}
                </label>
                <input
                  type="email"
                  className="w-full bg-[#07141C] border border-cyan-900/30 rounded-lg px-4 py-3 text-white focus:border-[#01FFFF] focus:outline-none"
                  placeholder={t("invitations_page.wedding_form.fields.email")}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  {t("invitations_page.wedding_form.fields.phone")}
                </label>
                <input
                  type="tel"
                  className="w-full bg-[#07141C] border border-cyan-900/30 rounded-lg px-4 py-3 text-white focus:border-[#01FFFF] focus:outline-none"
                  placeholder={t("invitations_page.wedding_form.fields.phone")}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                {t("invitations_page.wedding_form.fields.message")}
              </label>
              <textarea
                rows={4}
                className="w-full bg-[#07141C] border border-cyan-900/30 rounded-lg px-4 py-3 text-white focus:border-[#01FFFF] focus:outline-none"
                placeholder={t("invitations_page.wedding_form.fields.message")}
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              {t("invitations_page.wedding_form.submit")}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("invitations_page.faq.title")}
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {(t("invitations_page.faq.questions") as Array<{ q: string; a: string }>).map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-xl border border-cyan-900/30"
              whileHover={{ borderColor: "rgba(1, 255, 255, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-3 text-white">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl shadow-2xl border border-cyan-900/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#01FFFF]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#01A9FF]/10 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
              {t("invitations_page.cta.title")}
            </h3>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-gray-300">
              {t("invitations_page.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://invitations.adinfinity.gr" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20 w-full sm:w-auto"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("invitations_page.cta.create_invitation")}
                </motion.button>
              </a>
              <Link href="/contact#contact-form">
                <motion.button
                  className="border-2 border-[#01FFFF] text-[#01FFFF] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("invitations_page.cta.contact_us")}
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
