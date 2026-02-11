"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { products, type Product } from "@/lib/data"
import { getAssetPath } from "@/lib/utils"

const filters = [
  { key: "all", label: "\u0412\u0421\u0415" },
  { key: "milk-tea", label: "\u041C\u041E\u041B\u041E\u0427\u041D\u042B\u0415" },
  { key: "fruit-tea", label: "\u0427\u0410\u0419\u041D\u042B\u0415" },
  { key: "fizzy", label: "\u0424\u0418\u0417\u0417\u0418" },
  { key: "desserts", label: "\u0414\u0415\u0421\u0415\u0420\u0422\u042B" },
]

const ITEMS_PER_PAGE = 6

function MenuProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-foreground/[0.08] bg-card transition-all duration-300 hover:border-primary/40"
      style={{
        boxShadow: hovered ? "0 0 30px 0 hsla(72, 100%, 50%, 0.08)" : "none",
      }}
    >
      {/* Image */}
      <Link
        href={`/product/${product.id}`}
        className="relative aspect-[3/4] w-full overflow-hidden bg-secondary"
      >
        <Image
          src={product.image || getAssetPath("/placeholder.svg")}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-primary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between gap-3 p-4">
        <div>
          <Link href={`/product/${product.id}`}>
            <h3 className="font-sans text-lg font-bold uppercase tracking-wide text-foreground transition-colors hover:text-primary">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-muted-foreground">
              {product.volume}
            </span>
            <span className="font-mono text-2xl font-bold text-foreground">
              {product.price} {"\u20BD"}
            </span>
          </div>

          <motion.button
            layout
            className="flex items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground transition-colors"
            animate={{
              width: hovered ? 150 : 40,
              height: 40,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-label={`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ${product.name} \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443`}
          >
            <motion.div className="flex items-center gap-2 whitespace-nowrap px-3">
              <Plus className="h-4 w-4 flex-shrink-0" />
              <motion.span
                initial={false}
                animate={{ opacity: hovered ? 1 : 0, width: hovered ? "auto" : 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden font-mono text-[11px] font-bold uppercase"
              >
                {"\u0412 \u041A\u041E\u0420\u0417\u0418\u041D\u0423"}
              </motion.span>
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export function MenuCatalog() {
  const searchParams = useSearchParams()
  const initialFilter = searchParams.get("filter") || "all"
  const [activeFilter, setActiveFilter] = useState(initialFilter)
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  useEffect(() => {
    const filter = searchParams.get("filter")
    if (filter) {
      setActiveFilter(filter)
      setVisibleCount(ITEMS_PER_PAGE)
    }
  }, [searchParams])

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter)

  const visibleProducts = filteredProducts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProducts.length

  const handleFilterChange = (key: string) => {
    setActiveFilter(key)
    setVisibleCount(ITEMS_PER_PAGE)
  }

  return (
    <section className="px-4 py-8 md:px-12 xl:px-24">
      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
          {"\u041F\u043E\u043B\u043D\u043E\u0435 \u043C\u0435\u043D\u044E"}
        </p>
        <h1 className="mt-2 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          {"\u041D\u0430\u0448\u0430"}
          <br />
          <span className="text-muted-foreground">{"\u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F"}</span>
        </h1>
      </div>

      {/* Filter pills - horizontal scrollable */}
      <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => handleFilterChange(filter.key)}
            className={`flex-shrink-0 rounded-full border px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all ${
              activeFilter === filter.key
                ? "border-primary bg-primary text-primary-foreground"
                : "border-foreground/10 bg-secondary text-muted-foreground hover:border-foreground/20 hover:text-foreground"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProducts.map((product) => (
            <MenuProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="font-sans text-2xl font-bold uppercase text-muted-foreground">
            {"\u0421\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442"}
          </p>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            {"\u042D\u0442\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0433\u043E\u0442\u043E\u0432\u0438\u0442\u0441\u044F. \u0417\u0430\u0433\u043B\u044F\u043D\u0438 \u043F\u043E\u0437\u0436\u0435."}
          </p>
        </div>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
            className="rounded-full border border-foreground/10 bg-secondary px-8 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
          >
            {"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451"}
          </button>
        </div>
      )}

      {/* Results count */}
      <div className="mt-8 text-center">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {"\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u043E"} {visibleProducts.length} {"\u0438\u0437"} {filteredProducts.length}
        </p>
      </div>
    </section>
  )
}
