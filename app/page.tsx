import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import CompanyOverview from "@/components/CompanyOverview"
import InvestmentFocus from "@/components/InvestmentFocus"
import GeographicFocus from "@/components/GeographicFocus"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CompanyOverview />
        <InvestmentFocus />
        <GeographicFocus />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
