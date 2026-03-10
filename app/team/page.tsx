import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import Team from "@/components/Team"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Leadership & Advisory",
  description:
    "Meet the leadership and advisory team behind DMA Holdings — experienced mining and resource professionals driving strategic natural resources investment across Southeast Asia.",
}

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px] md:pt-20">
        <Team />
      </main>
      <Footer />
    </>
  )
}
