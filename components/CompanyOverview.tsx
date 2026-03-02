"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, viewportOnce } from "@/lib/animations"

export default function CompanyOverview() {
  return (
    <section id="overview" className="relative bg-white py-20 md:py-28">
      {/* Subtle topographic texture for visual continuity with hero */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Ccircle cx='120' cy='120' r='30' fill='none' stroke='%232C5F73' stroke-width='0.5'/%3E%3Ccircle cx='120' cy='120' r='55' fill='none' stroke='%232C5F73' stroke-width='0.4'/%3E%3Ccircle cx='120' cy='120' r='80' fill='none' stroke='%232C5F73' stroke-width='0.3'/%3E%3Ccircle cx='120' cy='120' r='110' fill='none' stroke='%232C5F73' stroke-width='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: "240px 240px",
        }}
      />

      <div className="container-custom relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          <motion.p
            className="mb-3 text-xs font-medium uppercase tracking-[2px] text-dma-slate"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Who We Are
          </motion.p>

          <motion.h2
            className="text-3xl font-bold uppercase tracking-[1px] text-dma-teal md:text-4xl"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Company Overview
          </motion.h2>

          <motion.div
            className="mx-auto mt-4 h-0.5 w-16 bg-dma-gold"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <motion.p
            className="mt-8 text-base leading-relaxed text-dma-dark md:text-lg md:leading-[1.6]"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            DMA Holdings owns and develops natural resource investment vehicles
            across Southeast Asia. Through country subsidiaries and operating
            partners, we combine capital discipline, technical expertise, and
            long-term strategic partnerships to unlock value across the resource
            lifecycle.
          </motion.p>

          {/* Slogan graphic — brand tagline */}
          <motion.div
            className="mx-auto mt-8 flex justify-center"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative h-5 w-64 md:h-6 md:w-120">
              <Image
                src="/logos/dma-slogan.png"
                alt="Structuring Capital, Scaling Resources"
                fill
                className="object-contain"
                sizes="320px"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
