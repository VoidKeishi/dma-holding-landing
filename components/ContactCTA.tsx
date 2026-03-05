"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, viewportOnce } from "@/lib/animations"

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-dma-teal py-20 md:py-28"
    >
      {/* Topographic texture — visual continuity with hero */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Ccircle cx='120' cy='120' r='30' fill='none' stroke='white' stroke-width='0.5'/%3E%3Ccircle cx='120' cy='120' r='55' fill='none' stroke='white' stroke-width='0.4'/%3E%3Ccircle cx='120' cy='120' r='80' fill='none' stroke='white' stroke-width='0.3'/%3E%3Ccircle cx='120' cy='120' r='110' fill='none' stroke='white' stroke-width='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: "240px 240px",
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          {/* White mountain logo icon */}
          <motion.div
            className="mx-auto mb-6 relative h-14 w-14 md:h-16 md:w-16"
            {...fadeInUp}
          >
            <Image
              src="/logos/dma-icon-white.png"
              alt=""
              fill
              className="object-contain"
              sizes="64px"
            />
          </motion.div>
          <motion.h2
            className="text-3xl font-bold uppercase tracking-[1px] text-white md:text-4xl"
            {...fadeInUp}
          >
            Get in Touch
          </motion.h2>

          <motion.div
            className="mx-auto mt-4 h-0.5 w-16 bg-dma-gold"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          />

          <motion.p
            className="mt-4 text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg md:text-xl md:leading-relaxed"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Interested in strategic resource partnerships across Southeast Asia?
            We welcome conversations with aligned investors, operators, and
            partners.
          </motion.p>

          <motion.div
            className="mt-10"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="mailto:contact@dma-holdings.com"
              className="inline-flex items-center rounded-md border-2 border-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-150 hover:bg-white hover:text-dma-teal sm:px-8 sm:py-3.5 sm:text-sm md:hover:scale-[1.02]"
            >
              Contact Us
            </a>
          </motion.div>

          <motion.p
            className="mt-6 text-sm font-medium text-white/70 sm:text-base md:text-lg"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            contact@dma-holdings.com
          </motion.p>

          {/* White slogan */}
          {/* <motion.div
            className="mx-auto mt-10 relative h-8 w-80 md:h-12 md:w-[480px]"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Image
              src="/logos/dma-slogan-white.png"
              alt="Structuring Capital, Scaling Resources"
              fill
              className="object-contain"
              sizes="320px"
            />
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}
