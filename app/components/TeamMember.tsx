"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Users, Mail, ArrowRight } from "lucide-react"
import { useLocale } from "@/components/LocaleProvider"

interface TeamMemberProps {
  name: string
  role: string
  imageSrc: string
  bio?: string
  email?: string
  linkedin?: string
  /** What this person actually does — specific, not "creative". */
  focus?: string
  since?: string
  /** Where the visitor can check the work. */
  workLabel?: string
  workHref?: string
}

export function TeamMember({ name, role, imageSrc, bio, email, linkedin, focus, since, workLabel, workHref }: TeamMemberProps) {
  const { locale } = useLocale()
  const labels = locale === 'en' ? { focus: 'Specialty:', since: 'Experience:' } : { focus: 'Εξειδίκευση:', since: 'Εμπειρία:' }
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30 h-full flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px rgba(1, 255, 255, 0.2)",
        borderColor: "rgba(1, 255, 255, 0.3)",
      }}
    >
      <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 border-2 border-[#01FFFF]/30 rounded-full"></div>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
      <p className="text-[#01FFFF] mb-4">{role}</p>

      {bio && <p className="text-gray-300 text-sm mb-4">{bio}</p>}

      {focus && (
        <dl className="text-sm text-left w-full mb-4 space-y-1">
          <div className="flex gap-2">
            <dt className="text-gray-500 shrink-0">{labels.focus}</dt>
            <dd className="text-gray-300">{focus}</dd>
          </div>
          {since && (
            <div className="flex gap-2">
              <dt className="text-gray-500 shrink-0">{labels.since}</dt>
              <dd className="text-gray-300">{since}</dd>
            </div>
          )}
        </dl>
      )}

      {workHref && workLabel && (
        <Link href={workHref} className="inline-flex items-center gap-1 text-sm text-[#01FFFF] hover:underline mb-4">
          {workLabel} <ArrowRight size={14} />
        </Link>
      )}

      <div className="flex space-x-3 mt-auto">
        {email && (
          <motion.a
            href={`mailto:${email}`}
            className="bg-[#0A1A24] hover:bg-[#01FFFF]/10 border border-gray-700 hover:border-[#01FFFF]/50 p-2 rounded-full transition-colors"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Mail size={18} className="text-[#01FFFF]" />
          </motion.a>
        )}

        {linkedin && (
          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0A1A24] hover:bg-[#01FFFF]/10 border border-gray-700 hover:border-[#01FFFF]/50 p-2 rounded-full transition-colors"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Users size={18} className="text-[#01FFFF]" />
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}
