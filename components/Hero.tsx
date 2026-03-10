"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, fadeIn } from "@/lib/animations"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Layer 1: Rich base gradient — deep mineral tones */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #0f2030 0%, #1E3A4F 25%, #2C5F73 45%, #1E3A4F 70%, #152c3c 100%)",
        }}
      />

      {/* Layer 2: Radial depth — teal center glow + warm gold accent + dark corners */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, rgba(44, 95, 115, 0.45) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 80% 15%, rgba(196, 154, 42, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 15% 75%, rgba(15, 32, 48, 0.25) 0%, transparent 60%)
          `,
        }}
      />

      {/* Layer 3: Topographic contour lines — geological survey motif */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Ccircle cx='120' cy='120' r='30' fill='none' stroke='white' stroke-width='0.5'/%3E%3Ccircle cx='120' cy='120' r='55' fill='none' stroke='white' stroke-width='0.4'/%3E%3Ccircle cx='120' cy='120' r='80' fill='none' stroke='white' stroke-width='0.3'/%3E%3Ccircle cx='120' cy='120' r='110' fill='none' stroke='white' stroke-width='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: "240px 240px",
        }}
      />

      {/* Layer 4: Subtle gold vein accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.035]">
        <svg
          className="absolute h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="280" x2="1440" y2="440" stroke="#C49A2A" strokeWidth="1" />
          <line x1="0" y1="520" x2="1440" y2="360" stroke="#C49A2A" strokeWidth="0.5" />
          <line x1="380" y1="0" x2="580" y2="900" stroke="#C49A2A" strokeWidth="0.5" />
          <line x1="1020" y1="0" x2="870" y2="900" stroke="#C49A2A" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 text-center">
        {/* Logo lockup — icon + horizontal wordmark */}
        <motion.div
          className="mx-auto mb-10 flex justify-center"
          {...fadeIn}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <div className="relative flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:gap-6">
            {/* Subtle radial glow behind lockup */}
            <div className="absolute -inset-10 rounded-full bg-white/[0.04] blur-3xl" />
            {/* Mountain icon */}
            <div className="relative h-16 w-16 shrink-0 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40">
              <Image
                src="/logos/dma-icon-white.png"
                alt="DMA Holdings"
                fill
                className="object-contain drop-shadow-[0_4px_24px_rgba(255,255,255,0.1)]"
                priority
                sizes="160px"
              />
            </div>
            {/* Horizontal wordmark */}
            <div className="relative h-10 w-44 sm:h-20 sm:w-64 md:h-28 md:w-[380px] lg:h-36 lg:w-[500px]">
              <Image
                src="/logos/dma-horizontal-white.png"
                alt="Discovery Minerals Asia"
                fill
                className="object-contain drop-shadow-[0_4px_24px_rgba(255,255,255,0.1)]"
                priority
                sizes="320px"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="mx-auto max-w-4xl text-2xl font-bold uppercase leading-tight tracking-wide text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1]"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Building Strategic Natural Resources Platforms Across Asia
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-6 sm:text-base md:text-lg md:leading-relaxed"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          DMA Holdings is a Singapore-based investment and operating group
          focused on metals, critical minerals, processing infrastructure, and
          long-term resource development in Southeast Asia.
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10"
        >
          <a
            href="#overview"
            className="inline-flex items-center rounded-md border-2 border-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-150 hover:bg-white hover:text-dma-teal sm:px-8 sm:py-3.5 sm:text-sm md:hover:scale-[1.02]"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Smooth geological strata transition → white Company Overview */}
      <div className="absolute -bottom-px left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "clamp(100px, 14vw, 200px)" }}
        >
          {/* Deep strata layer — subtle teal tint */}
          <path
            d="M0,100 C160,30 320,130 540,50 C720,0 900,110 1080,30 C1200,0 1340,80 1440,20 L1440,180 L0,180 Z"
            fill="#EEF4F7"
            opacity="0.7"
          />
          {/* Primary transition layer — white */}
          <path
            d="M0,120 C200,40 400,140 720,60 C960,10 1180,110 1440,40 L1440,180 L0,180 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  )
}
