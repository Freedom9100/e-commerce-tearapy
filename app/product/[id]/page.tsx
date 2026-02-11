import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetailView } from "@/components/product-detail-view"
import { products } from "@/lib/data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = products.find((p) => p.id === Number(id))
  if (!product) return { title: "Not Found | TEARAPY" }
  return {
    title: `${product.name} | TEARAPY`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }))
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = products.find((p) => p.id === Number(id))
  if (!product) notFound()

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <ProductDetailView product={product} />
      </div>
      <Footer />
    </main>
  )
}
