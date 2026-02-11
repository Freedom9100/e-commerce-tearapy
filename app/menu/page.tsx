import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MenuCatalog } from "@/components/menu-catalog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Full Menu | TEARAPY",
  description:
    "Browse our complete range of premium tea-based beverages and desserts.",
}

export default function MenuPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /></div>}>
          <MenuCatalog />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
