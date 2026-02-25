import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dma-dark py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Mountain icon */}
            <div className="relative h-9 w-9 flex-shrink-0">
              <Image
                src="/logos/dma-icon-white.png"
                alt=""
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            {/* Horizontal wordmark */}
            <div className="relative h-9 w-48">
              <Image
                src="/logos/dma-horizontal-white.png"
                alt="DMA Holdings"
                fill
                className="object-contain object-left"
                sizes="160px"
              />
            </div>
          </div>

          {/* Links / Info */}
          <div className="text-center md:text-right">
            <p className="text-base text-dma-sky">
              Discovery Minerals Asia Holdings
            </p>
            <p className="mt-1 text-base text-dma-sky/70">
              Singapore
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Copyright */}
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-between">
          <p className="text-sm text-dma-slate">
            &copy; {currentYear} DMA Holdings. All rights reserved.
          </p>
          <p className="text-sm text-dma-slate">
            Structuring Capital, Scaling Resources
          </p>
        </div>
      </div>
    </footer>
  )
}
