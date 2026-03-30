"use client"

import { motion } from "framer-motion"
import { AboutHero } from "../components/AboutHero"
import { CompanyDescription } from "../components/CompanyDescription"
import { CompanyHistory } from "../components/CompanyHistory"
import { TeamMember } from "../components/TeamMember"
import { Timeline } from "../components/Timeline"
import { OfficeShowcase } from "../components/OfficeShowcase"
import { useTranslations } from "@/components/useTranslations"

export function AboutClient() {
  const { t } = useTranslations()

  const teamMembers = t('about_page.team_members') as Record<string, any>
  const timeline = t('about_page.timeline') as Record<string, any>

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#07141C] to-[#0A1A24] overflow-hidden">
      <AboutHero />

      <div className="container mx-auto px-4 pb-20">
        <CompanyDescription />

        <CompanyHistory />

        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-[#01FFFF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('about_page.our_team')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamMember
              name={teamMembers.manos.name}
              role={teamMembers.manos.role}
              imageSrc="/images/team-member-manos.jpg"
              bio={teamMembers.manos.bio}
            />
            <TeamMember
              name={teamMembers.kostas.name}
              role={teamMembers.kostas.role}
              imageSrc="/images/team-member.jpg"
              bio={teamMembers.kostas.bio}
            />
          </div>
        </motion.div>

        <motion.div
          className="mb-20 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-[#01FFFF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('about_page.our_journey')}
          </motion.h2>

          <Timeline />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-[#01FFFF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('about_page.visit_us')}
          </motion.h2>

          <OfficeShowcase />
        </motion.div>
      </div>
    </main>
  )
}
