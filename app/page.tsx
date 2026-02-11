import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BentoGrid } from "@/components/bento-grid"
import { ShopByMood } from "@/components/shop-by-mood"
import { Catalog } from "@/components/catalog"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <BentoGrid />
      <ShopByMood />
      <Catalog />
      <Footer />
    </main>
  )
}
