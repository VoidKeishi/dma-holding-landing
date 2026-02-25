import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "DMA Holdings — Strategic Natural Resources Investment",
    template: "%s | DMA Holdings",
  },
  description:
    "DMA Holdings is a Singapore-based investment and operating group focused on metals, critical minerals, processing infrastructure, and long-term resource development in Southeast Asia.",
  keywords: [
    "DMA Holdings",
    "Discovery Minerals Asia",
    "natural resources",
    "critical minerals",
    "Southeast Asia",
    "mining investment",
    "Singapore",
  ],
  openGraph: {
    title: "DMA Holdings — Strategic Natural Resources Investment",
    description:
      "Singapore-based investment and operating group focused on metals, critical minerals, and resource development in Southeast Asia.",
    type: "website",
    url: "https://www.dma-holdings.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
