import Image from "next/image"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_8px_rgba(30,58,79,0.08)]">
      <div className="container-custom flex h-[72px] items-center justify-between md:h-20">
        {/* Logo — full color logo + text */}
        <a href="#" className="flex items-center shrink-0">
          <div className="relative h-10 md:h-12 w-[140px] md:w-[170px]">
            <Image
              src="/logos/dma-logo-side.png"
              alt="DMA Holdings"
              fill
              className="object-contain object-left"
              priority
              sizes="170px"
            />
          </div>
        </a>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-150 hover:scale-[1.02] bg-dma-teal text-white hover:bg-dma-teal-light"
        >
          Contact Us
        </a>
      </div>
    </nav>
  )
}
