"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { products as allProducts, type Product } from "@/lib/data"
import { getAssetPath } from "@/lib/utils"

const products = allProducts.slice(0, 4)

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-foreground/[0.06] bg-[#1E1E1E] transition-all duration-300 hover:border-primary/30 md:w-full"
      style={{
        boxShadow: hovered ? "0 0 30px 0 hsla(72, 100%, 50%, 0.06)" : "none",
      }}
    >
      {/* Image - dark container, full width cover, blend white bg */}
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
              className="rounded-full bg-primary px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-primary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      {/* Info - p-5, spacious */}
      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
        <div>
          <Link href={`/product/${product.id}`}>
            <h3 className="font-sans text-base font-bold uppercase tracking-wide text-white transition-colors hover:text-primary">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{product.volume}</p>
        </div>

        {/* Bottom row: Price (left) | Button (right) */}
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xl font-bold text-white">
            {product.price} ₽
          </span>
          <motion.button
            layout
            className="flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground transition-colors"
            animate={{
              width: hovered ? 140 : 40,
              height: 40,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-label={`Добавить ${product.name} в корзину`}
          >
            <motion.div className="flex items-center gap-2 whitespace-nowrap px-3">
              <Plus className="h-4 w-4 flex-shrink-0" />
              <motion.span
                initial={false}
                animate={{ opacity: hovered ? 1 : 0, width: hovered ? "auto" : 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden font-mono text-[11px] font-bold uppercase"
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export function Catalog() {
  return (
    <section id="menu" className="py-20">
      {/* Same container as BentoGrid & ShopByMood - full width alignment */}
      <div className="px-4 md:px-12 xl:px-24">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
              Каталог
            </p>
            <h2 className="mt-2 font-sans text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">
              Новинки
              <br />
              <span className="text-muted-foreground">сезона</span>
            </h2>
          </div>
          <Link
            href="/menu"
            className="self-start font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary sm:self-auto"
          >
            Смотреть все →
          </Link>
        </div>

        {/* Product Grid - same container, aligned with heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
