import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BentoGrid } from "@/components/bento-grid"
import { Catalog } from "@/components/catalog"
import { ProductDetail } from "@/components/product-detail"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <BentoGrid />
      <Catalog />
      <ProductDetail />
      <Footer />
    </main>
  )
}
