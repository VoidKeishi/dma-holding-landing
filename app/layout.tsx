import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dma-holdings.com"),
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
  authors: [{ name: "DMA Holdings" }],
  creator: "DMA Holdings",
  publisher: "DMA Holdings",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DMA Holdings — Strategic Natural Resources Investment",
    description:
      "Singapore-based investment and operating group focused on metals, critical minerals, and resource development in Southeast Asia.",
    type: "website",
    url: "https://www.dma-holdings.com",
    siteName: "DMA Holdings",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DMA Holdings — Strategic Natural Resources Investment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DMA Holdings — Strategic Natural Resources Investment",
    description:
      "Singapore-based investment and operating group focused on metals, critical minerals, and resource development in Southeast Asia.",
    images: ["/opengraph-image"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DMA Holdings",
  alternateName: "Discovery Minerals Asia Holdings",
  url: "https://www.dma-holdings.com",
  logo: "https://www.dma-holdings.com/logos/dma-icon.png",
  description:
    "Singapore-based investment and operating group focused on metals, critical minerals, processing infrastructure, and long-term resource development in Southeast Asia.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SG",
    addressLocality: "Singapore",
  },
  sameAs: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
