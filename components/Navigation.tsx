"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white shadow-[0_2px_8px_rgba(30,58,79,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex h-[72px] items-center justify-between md:h-20">
        {/* Logo — mountain icon + brand name */}
        <a href="#" className="flex items-center shrink-0">
          <div className="relative transition-opacity duration-200">
            {/* Transparent state: white logo + text for dark hero bg */}
            <div
              className={`relative h-9 md:h-10 w-[106px] md:w-[118px] transition-all duration-200 ${
                scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
              }`}
            >
              <Image
                src="/logos/dma-horizontal-white.png"
                alt="DMA Holdings"
                fill
                className="object-contain object-left"
                priority
                sizes="118px"
              />
            </div>
            {/* Scrolled state: full color logo + text for light bg */}
            <div
              className={`relative h-9 md:h-10 w-[106px] md:w-[118px] transition-all duration-200 ${
                scrolled ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
              }`}
            >
              <Image
                src="/logos/dma-logo-side.png"
                alt="DMA Holdings"
                fill
                className="object-contain object-left"
                priority
                sizes="118px"
              />
            </div>
          </div>
        </a>

        {/* CTA Button */}
        <a
          href="#contact"
          className={`inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-150 hover:scale-[1.02] ${
            scrolled
              ? "bg-dma-teal text-white hover:bg-dma-teal-light"
              : "border-2 border-white text-white hover:bg-white hover:text-dma-teal"
          }`}
        >
          Contact Us
        </a>
      </div>
    </nav>
  )
}
