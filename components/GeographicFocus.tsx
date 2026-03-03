"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

const countries = [
  { name: "Vietnam", flag: "/flags/vn.png" },
  { name: "Cambodia", flag: "/flags/kh.png" },
  { name: "Laos", flag: "/flags/la.png" },
  { name: "Thailand", flag: "/flags/th.png" },
  { name: "Malaysia", flag: "/flags/my.png" },
]

export default function GeographicFocus() {
  return (
    <section className="bg-white py-20 md:py-28">
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
            Where We Operate
          </motion.p>

          <motion.h2
            className="text-3xl font-bold uppercase tracking-[1px] text-dma-teal md:text-4xl"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Southeast Asia Platform
          </motion.h2>

          <motion.div
            className="mx-auto mt-4 h-0.5 w-16 bg-dma-gold"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        {/* Country grid */}
        <motion.div
          className="mx-auto mt-14 max-w-3xl"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-5">
            {countries.map((country) => (
              <motion.div
                key={country.name}
                variants={staggerItem}
                className="flex flex-col items-center rounded-lg border border-dma-sky/50 bg-dma-ice/50 px-3 py-4 transition-all duration-200 sm:px-4 sm:py-6 md:hover:border-dma-teal md:hover:shadow-md"
              >
                {/* Country flag */}
                <div className="relative h-8 w-12 overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={country.flag}
                    alt={`${country.name} flag`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <span className="mt-3 text-sm font-semibold text-dma-dark">
                  {country.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            className="mt-10 text-center text-base font-medium tracking-wide text-dma-teal md:text-lg"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Singapore-based. Regionally focused. Globally connected.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
