"use client"

import { motion } from "framer-motion"
import { Palette, FileImage, Monitor, Layers } from "lucide-react"
import { CreativeProcess } from "../components/CreativeProcess"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "@/components/useTranslations"


export default function GraphicDesignPage() {
  const { t } = useTranslations()
  
  const services = [
    {
      icon: Palette,
      title: t('graphic_design_page.services.branding.title') as string,
      description: t('graphic_design_page.services.branding.description') as string,
    },
    {
      icon: FileImage,
      title: t('graphic_design_page.services.advertising.title') as string,
      description: t('graphic_design_page.services.advertising.description') as string,
    },
    { 
      icon: Monitor, 
      title: t('graphic_design_page.services.digital.title') as string, 
      description: t('graphic_design_page.services.digital.description') as string
    },
    { 
      icon: Layers, 
      title: t('graphic_design_page.services.specialized.title') as string, 
      description: t('graphic_design_page.services.specialized.description') as string
    },
  ]

  const portfolioItems = [
    {
      title: t('graphic_design_page.portfolio_items.0.title') as string,
      description: t('graphic_design_page.portfolio_items.0.description') as string,
      image: t('graphic_design_page.portfolio_items.0.image') as string,
    },
    {
      title: t('graphic_design_page.portfolio_items.1.title') as string,
      description: t('graphic_design_page.portfolio_items.1.description') as string,
      image: t('graphic_design_page.portfolio_items.1.image') as string,
    },
    {
      title: t('graphic_design_page.portfolio_items.2.title') as string,
      description: t('graphic_design_page.portfolio_items.2.description') as string,
      image: t('graphic_design_page.portfolio_items.2.image') as string,
    },
  ]

  const featuresData = (t('graphic_design_page.features') as unknown) as Array<{title: string, description: string}>

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      {/* Hero Section with Subtle Background */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#07141C]/90"></div>
          <div className="absolute inset-0">
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
            {/* Subtle glow in top-right */}
            <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-[#01FFFF]/5 rounded-full blur-[100px]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6 inline-block"
            >
              <div className="w-32 h-32 mx-auto mb-4 relative">
                {/* Graphic design artboard */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D2436] to-[#071218] rounded-md shadow-lg overflow-hidden">
                  {/* Grid background */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                    }}
                  ></div>

                  {/* Design element - Logo/Branding Design */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-20 h-20">
                      {/* Abstract logo design */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#01FFFF] opacity-80"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-[#01FFFF]/40 to-[#01A9FF]/40 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>

                      {/* Abstract shape elements */}
                      <div className="absolute top-0 right-0 w-6 h-6 bg-[#01FFFF] rounded-br-xl rounded-tl-xl"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#01A9FF] rounded-tr-xl rounded-bl-xl"></div>

                      {/* Typography element */}
                      <div className="absolute -bottom-4 w-full flex justify-center">
                        <div className="h-1 w-12 bg-white rounded-full"></div>
                        <div className="h-1 w-6 bg-white/50 rounded-full ml-1"></div>
                      </div>
                    </div>
                  </div>

                  {/* Design tools */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1.5">
                    <div className="w-2 h-2 bg-[#01FFFF] rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-[#01A9FF] rounded-full"></div>
                  </div>

                  {/* Ruler marks */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 w-full h-px bg-white/20"></div>
                    <div className="absolute bottom-0 w-full h-px bg-white/20"></div>
                    <div className="absolute left-0 h-full w-px bg-white/20"></div>
                    <div className="absolute right-0 h-full w-px bg-white/20"></div>
                    <div className="absolute top-0 left-1/2 w-px h-1 bg-white/40"></div>
                    <div className="absolute bottom-0 left-1/2 w-px h-1 bg-white/40"></div>
                    <div className="absolute left-0 top-1/2 h-px w-1 bg-white/40"></div>
                    <div className="absolute right-0 top-1/2 h-px w-1 bg-white/40"></div>
                  </div>
                </div>

                {/* Animated elements */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#01FFFF]/30 rounded-full animate-ping"></div>
                <div
                  className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#01A9FF]/30 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
              {t('graphic_design_page.title')}
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-[#01FFFF]">{t('graphic_design_page.subtitle')}</h2>
            <motion.p
              className="text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t('graphic_design_page.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8"
            >
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('graphic_design_page.get_started')}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Section with Enhanced Cards */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('graphic_design_page.our_services')}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-8 rounded-xl shadow-xl border border-cyan-900/30 h-full"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(1, 255, 255, 0.3)",
                borderColor: "rgba(1, 255, 255, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-[#01FFFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <div className="mt-4 pt-4 border-t border-cyan-900/30">
                <Link href="/contact" className="text-[#01FFFF] text-sm flex items-center">
                  {t('graphic_design_page.learn_more')}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Creative Process Section */}
      <div className="py-16 bg-[#061218]/50">
        <div className="container mx-auto px-4">
          <CreativeProcess />
        </div>
      </div>

      {/* Portfolio Showcase */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('graphic_design_page.portfolio_title')}
        </motion.h2>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-12 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('graphic_design_page.portfolio_description')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07141C] to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-[#01FFFF]">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <motion.button
              className="border-2 border-[#01FFFF] text-[#01FFFF] font-medium py-2 px-6 rounded-full hover:bg-[#01FFFF]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('graphic_design_page.see_all_projects')}
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gradient-to-b from-[#061218]/80 to-[#071218]/90 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, #01FFFF 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01FFFF]/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#01FFFF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('graphic_design_page.why_choose_us')}
          </motion.h2>

          <motion.p
            className="text-center max-w-2xl mx-auto mb-12 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('graphic_design_page.why_choose_description')}
          </motion.p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#0A1A24]/80 p-6 rounded-xl border border-cyan-900/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(1, 255, 255, 0.1)" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#01FFFF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                    {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />}
                    {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                    {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl shadow-2xl border border-cyan-900/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#01FFFF]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#01A9FF]/10 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              {t('graphic_design_page.cta.title')}
            </h3>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
              {t('graphic_design_page.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20 w-full sm:w-auto"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('graphic_design_page.request_quote')}
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  className="border-2 border-[#01FFFF] text-[#01FFFF] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('graphic_design_page.see_portfolio')}
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
