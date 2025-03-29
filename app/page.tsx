import { HeroSection } from "@/components/sections/hero-section"
import { ProductCategories } from "@/components/sections/product-categories"
import { Features } from "@/components/sections/features"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Testimonials } from "@/components/sections/testimonials"
import { CallToAction } from "@/components/sections/call-to-action"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ProductCategories />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}

