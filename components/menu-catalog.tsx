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
  { key: "all", label: "ВСЕ" },
  { key: "milk-tea", label: "МОЛОЧНЫЕ" },
  { key: "fruit-tea", label: "ЧАЙНЫЕ" },
  { key: "fizzy", label: "ФИЗЗИ" },
  { key: "desserts", label: "ДЕСЕРТЫ" },
]

const ITEMS_PER_PAGE = 8

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
      className="group relative flex flex-col overflow-hidden rounded-xl border border-foreground/[0.06] bg-[#1E1E1E] transition-all duration-300 hover:border-primary/30"
      style={{
        boxShadow: hovered ? "0 0 30px 0 hsla(72, 100%, 50%, 0.06)" : "none",
      }}
    >
      {/* Image - dark bg, full width cover, blend white bg */}
      <Link
        href={`/product/${product.id}`}
        className="relative aspect-[3/4] w-full overflow-hidden bg-[#1E1E1E]"
      >
        <Image
          src={product.image || getAssetPath("/placeholder.svg")}
          alt={product.name}
          fill
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-primary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between gap-2 p-4">
        <div>
          <Link href={`/product/${product.id}`}>
            <h3 className="font-sans text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-primary">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="font-mono text-[9px] text-muted-foreground">
              {product.volume}
            </span>
            <span className="font-mono text-lg font-bold text-white">
              {product.price} ₽
            </span>
          </div>

          <motion.button
            layout
            className="flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground transition-colors"
            animate={{
              width: hovered ? 130 : 32,
              height: 32,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-label={`Добавить ${product.name} в корзину`}
          >
            <motion.div className="flex items-center gap-1.5 whitespace-nowrap px-2">
              <Plus className="h-3.5 w-3.5 flex-shrink-0" />
              <motion.span
                initial={false}
                animate={{ opacity: hovered ? 1 : 0, width: hovered ? "auto" : 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden font-mono text-[10px] font-bold uppercase"
              >
                В корзину
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
    <section className="py-8">
      {/* Single container: Title, Filters, Grid - all aligned */}
      <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-8">
        {/* Header - left aligned */}
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            Полное меню
          </p>
          <h1 className="mt-2 font-sans text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">
            Наша
            <br />
            <span className="text-muted-foreground">коллекция</span>
          </h1>
        </div>

        {/* Filter pills - left aligned, same container */}
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => handleFilterChange(filter.key)}
              className={`flex-shrink-0 rounded-full border px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all ${
                activeFilter === filter.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-foreground/10 bg-[#1E1E1E] text-muted-foreground hover:border-foreground/20 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid - same container, aligned with title */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
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
              Скоро будет
            </p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              Эта категория готовится. Загляните позже.
            </p>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
              className="rounded-full border border-foreground/10 bg-[#1E1E1E] px-8 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:border-primary hover:text-primary"
            >
              Показать ещё
            </button>
          </div>
        )}

        {/* Results count */}
        <div className="mt-8 text-center">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Показано {visibleProducts.length} из {filteredProducts.length}
          </p>
        </div>
      </div>
    </section>
  )
}
