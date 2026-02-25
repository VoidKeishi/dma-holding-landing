"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"
import { Gem, Factory, Handshake, Wrench } from "lucide-react"

const pillars = [
  {
    icon: Gem,
    title: "Minerals",
    description:
      "Nickel, rare earth elements, copper, gold and future-facing metals.",
  },
  {
    icon: Factory,
    title: "Processing & Refining",
    description:
      "Downstream value creation and industrial infrastructure.",
  },
  {
    icon: Handshake,
    title: "Resource Development",
    description:
      "Structured partnerships and project incubation.",
  },
  {
    icon: Wrench,
    title: "Strategic Services",
    description: (
      <>
        Technical capability through Mining Services Vietnam (
        <a
          href="https://www.dma-msv.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dma-green underline-offset-2 hover:underline"
        >
          www.dma-msv.com
        </a>
        ).
      </>
    ),
  },
]

export default function InvestmentFocus() {
  return (
    <section className="bg-dma-ice py-20 md:py-28">
      <div className="container-custom">
        <motion.div
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          <motion.p
            className="mb-3 text-xs font-medium uppercase tracking-[2px] text-dma-slate"
            {...fadeInUp}
          >
            What We Do
          </motion.p>

          <motion.h2
            className="text-3xl font-bold uppercase tracking-[1px] text-dma-teal md:text-4xl"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Investment Focus
          </motion.h2>

          <motion.div
            className="mx-auto mt-4 h-0.5 w-16 bg-dma-gold"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        {/* 4-column card grid */}
        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={staggerItem}
              className="group rounded-lg border border-dma-sky bg-white p-8 shadow-[0_2px_8px_rgba(30,58,79,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-dma-gold hover:shadow-[0_8px_24px_rgba(30,58,79,0.12)]"
            >
              {/* Gold accent top border */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-dma-gold/10">
                <pillar.icon className="h-6 w-6 text-dma-gold" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold text-dma-dark">
                {pillar.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-dma-dark/80">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
