"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations"
import { teamMembers, type TeamMember } from "@/data/team"

function MemberModal({
  member,
  onClose,
}: {
  member: TeamMember
  onClose: () => void
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [handleKeyDown])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/90 text-dma-slate shadow-sm transition-colors hover:bg-dma-ice hover:text-dma-dark"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col sm:flex-row sm:h-[480px]">
          <div className="relative aspect-[3/4] w-full flex-shrink-0 overflow-hidden rounded-t-2xl bg-gradient-to-br from-dma-ice to-dma-sky/20 sm:aspect-auto sm:w-64 sm:rounded-l-2xl sm:rounded-tr-none md:w-80">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col overflow-y-auto p-6 md:p-8">
            <h3 className="mb-1 text-xl font-bold leading-tight text-dma-dark md:text-2xl">
              {member.name}
            </h3>
            <p className="mb-4 text-sm font-semibold text-dma-teal md:text-base">
              {member.jobTitle}
            </p>
            <p className="text-sm leading-relaxed text-dma-dark/80 md:text-base">
              {member.fullBio}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function MemberCard({
  member,
  onClick,
}: {
  member: TeamMember
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group h-full w-full cursor-pointer overflow-hidden rounded-lg border border-dma-sky bg-white text-left shadow-[0_2px_8px_rgba(30,58,79,0.06)] transition-all duration-200 md:hover:-translate-y-0.5 md:hover:border-dma-gold md:hover:shadow-[0_8px_24px_rgba(30,58,79,0.12)]"
    >
      <div className="flex flex-col sm:flex-row h-full">
        <div className="relative aspect-[3/4] w-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-dma-ice to-dma-sky/20 sm:aspect-auto sm:min-h-[200px] sm:w-40 md:w-44">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 192px"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5 md:p-6">
          <h3 className="mb-1 text-lg font-semibold leading-tight text-dma-dark md:text-xl">
            {member.name}
          </h3>
          <p className="mb-3 text-sm font-medium text-dma-teal">
            {member.jobTitle}
          </p>
          <p className="flex-1 whitespace-pre-line text-sm leading-relaxed text-dma-dark/80">
            {member.shortBio}
          </p>
        </div>
      </div>
    </button>
  )
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const leader = teamMembers[0]
  const advisors = teamMembers.slice(1)

  return (
    <>
      {/* Page header — compact dark teal banner */}
      <section className="relative overflow-hidden bg-dma-teal py-10 md:py-14">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Ccircle cx='120' cy='120' r='30' fill='none' stroke='white' stroke-width='0.5'/%3E%3Ccircle cx='120' cy='120' r='55' fill='none' stroke='white' stroke-width='0.4'/%3E%3Ccircle cx='120' cy='120' r='80' fill='none' stroke='white' stroke-width='0.3'/%3E%3Ccircle cx='120' cy='120' r='110' fill='none' stroke='white' stroke-width='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: "240px 240px",
          }}
        />
        <div className="container-custom relative text-center">
          <motion.p
            className="mb-2 text-xs font-medium uppercase tracking-[2px] text-white/60"
            {...fadeInUp}
            initial="initial"
            animate="animate"
          >
            Our People
          </motion.p>
          <motion.h1
            className="text-3xl font-bold uppercase tracking-[1px] text-white md:text-4xl"
            {...fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Leadership & Advisory
          </motion.h1>
          <motion.div
            className="mx-auto mt-3 h-0.5 w-16 bg-dma-gold"
            {...fadeIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
      </section>

      {/* Team content */}
      <section className="bg-dma-ice py-12 md:py-16">
        <div className="container-custom">
          {/* Featured leader — centered */}
          <motion.div
            className="mx-auto max-w-3xl"
            {...fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
          >
            <MemberCard
              member={leader}
              onClick={() => setSelectedMember(leader)}
            />
          </motion.div>

          {/* Gold divider */}
          <motion.div
            className="mx-auto my-10 h-px w-24 bg-dma-gold/40 md:my-12"
            {...fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
          />

          {/* Advisory & Technical — 2x2 grid */}
          <motion.div
            className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
          >
            {advisors.map((member) => (
              <motion.div key={member.id} variants={staggerItem}>
                <MemberCard
                  member={member}
                  onClick={() => setSelectedMember(member)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  )
}
