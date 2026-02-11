"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { products as allProducts, type Product } from "@/lib/data"
import { getAssetPath } from "@/lib/utils"

const products = allProducts.slice(0, 5)

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex w-[260px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-foreground/[0.08] bg-card transition-all duration-300 hover:border-primary/40 md:w-full"
      style={{
        boxShadow: hovered ? "0 0 30px 0 hsla(72, 100%, 50%, 0.08)" : "none",
      }}
    >
      {/* Image - links to product page */}
      <Link
        href={`/product/${product.id}`}
        className="relative aspect-[3/4] w-full overflow-hidden bg-secondary"
      >
        <Image
          src={product.image || getAssetPath("/placeholder.svg")}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 260px, 280px"
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
          <p className="font-mono text-xs text-muted-foreground">{product.volume}</p>
        </div>

        <div className="flex items-end justify-between">
          <span className="font-mono text-2xl font-bold text-foreground">
            {product.price} {"\u20BD"}
          </span>

          {/* Add to cart button */}
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function Catalog() {
  return (
    <section id="menu" className="px-4 py-20 md:px-12 xl:px-24">
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            {"\u041A\u0430\u0442\u0430\u043B\u043E\u0433"}
          </p>
          <h2 className="mt-2 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
            {"\u041D\u043E\u0432\u0438\u043D\u043A\u0438"}
            <br />
            <span className="text-muted-foreground">{"\u0441\u0435\u0437\u043E\u043D\u0430"}</span>
          </h2>
        </div>
        <Link
          href="/menu"
          className="self-start font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary md:self-auto"
        >
          {"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 ->"}
        </Link>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto pb-4 md:hidden">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Desktop: grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="hidden gap-4 md:grid md:grid-cols-3 lg:grid-cols-5"
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
