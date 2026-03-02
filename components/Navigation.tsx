import Image from "next/image"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_2px_8px_rgba(30,58,79,0.08)]">
      <div className="container-custom flex h-[72px] items-center justify-between md:h-20">
        {/* Logo — icon + vertical text */}
        <a href="#" className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="relative h-9 w-[66px] md:h-11 md:w-[80px]">
            <Image
              src="/logos/dma-logo-only.png"
              alt=""
              fill
              className="object-contain"
              priority
              sizes="80px"
            />
          </div>
          <div className="relative h-10 w-[100px] md:h-12 md:w-[120px]">
            <Image
              src="/logos/dma-text-vertical.png"
              alt="Discovery Minerals Asia"
              fill
              className="object-contain object-left"
              priority
              sizes="120px"
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
