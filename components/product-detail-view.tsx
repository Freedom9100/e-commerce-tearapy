"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingBag, Minus, Plus, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { type Product, desserts } from "@/lib/data"

const sizes = ["S / 350 \u043C\u043B", "M / 500 \u043C\u043B", "L / 700 \u043C\u043B"]
const sugarLevels = ["0%", "30%", "50%", "70%", "100%"]
const toppings = [
  { name: "\u0411\u043E\u0431\u0430", price: "+50 \u20BD" },
  { name: "\u041A\u043E\u043A\u043E\u0441\u043E\u0432\u043E\u0435 \u0436\u0435\u043B\u0435", price: "+40 \u20BD" },
  { name: "\u0410\u043B\u043E\u044D \u0432\u0435\u0440\u0430", price: "+30 \u20BD" },
  { name: "\u0421\u044B\u0440\u043D\u0430\u044F \u043F\u0435\u043D\u043A\u0430", price: "+80 \u20BD" },
]

export function ProductDetailView({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(1)
  const [selectedSugar, setSelectedSugar] = useState(0)
  const [selectedToppings, setSelectedToppings] = useState<number[]>([])
  const [quantity, setQuantity] = useState(1)

  const toggleTopping = (index: number) => {
    setSelectedToppings((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  const categoryLabels: Record<string, string> = {
    "milk-tea": "\u043C\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0447\u0430\u0439",
    "fruit-tea": "\u0444\u0440\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u0447\u0430\u0439",
    fizzy: "\u0444\u0438\u0437\u0437\u0438",
    desserts: "\u0434\u0435\u0441\u0435\u0440\u0442\u044B",
  }

  return (
    <section className="px-4 py-8 md:px-12 xl:px-24">
      {/* Back link */}
      <Link
        href="/menu"
        className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        {"\u041D\u0430\u0437\u0430\u0434 \u0432 \u043C\u0435\u043D\u044E"}
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="mb-2 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-primary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
          {categoryLabels[product.category] || product.category}
        </p>
        <h1 className="mt-2 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          {product.name}
        </h1>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-secondary lg:w-1/2"
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </motion.div>

        {/* Right: Control Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-1 flex-col gap-8"
        >
          {/* Description */}
          <p className="font-mono text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Size selector */}
          <div>
            <label className="mb-3 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {"\u041E\u0411\u042A\u0401\u041C"}
            </label>
            <div className="flex gap-2">
              {sizes.map((size, i) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(i)}
                  className={`flex-1 rounded-lg border px-3 py-3 font-mono text-xs uppercase tracking-wider transition-all ${
                    selectedSize === i
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-foreground/10 bg-secondary text-muted-foreground hover:border-foreground/20"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Sugar level */}
          <div>
            <label className="mb-3 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {"\u0421\u0410\u0425\u0410\u0420"}
            </label>
            <div className="flex gap-1.5">
              {sugarLevels.map((level, i) => (
                <button
                  key={level}
                  onClick={() => setSelectedSugar(i)}
                  className={`flex-1 rounded-lg border px-2 py-3 font-mono text-xs transition-all ${
                    selectedSugar === i
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-foreground/10 bg-secondary text-muted-foreground hover:border-foreground/20"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Toppings */}
          <div>
            <label className="mb-3 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {"\u0422\u041E\u041F\u041F\u0418\u041D\u0413\u0418"}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {toppings.map((topping, i) => (
                <button
                  key={topping.name}
                  onClick={() => toggleTopping(i)}
                  className={`flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-all ${
                    selectedToppings.includes(i)
                      ? "border-primary bg-primary/10"
                      : "border-foreground/10 bg-secondary hover:border-foreground/20"
                  }`}
                >
                  <span
                    className={`font-mono text-xs ${
                      selectedToppings.includes(i) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {topping.name}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {topping.price}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Ingredients receipt */}
          <div className="rounded-xl border border-foreground/[0.08] bg-card p-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {"\u0421\u041E\u0421\u0422\u0410\u0412"}
            </p>
            <div className="flex flex-col gap-2">
              {product.ingredients.map((ing) => (
                <div
                  key={ing.name}
                  className="flex items-center justify-between border-b border-foreground/[0.05] pb-2 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-foreground">{ing.name}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {ing.code}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-primary">{ing.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0 rounded-full border border-foreground/10 bg-secondary">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-12 w-12 items-center justify-center text-foreground transition-colors hover:text-primary"
                aria-label={"\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C"}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-mono text-sm text-foreground">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-12 w-12 items-center justify-center text-foreground transition-colors hover:text-primary"
                aria-label={"\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C"}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <button className="flex flex-1 items-center justify-center gap-3 rounded-full bg-primary py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <ShoppingBag className="h-4 w-4" />
              {"\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u2014 "}{product.price} {"\u20BD"}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Pair it with - Upsell desserts */}
      <div className="mt-20">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            {"\u041E\u0442\u043B\u0438\u0447\u043D\u043E \u0441\u043E\u0447\u0435\u0442\u0430\u0435\u0442\u0441\u044F \u0441"}
          </p>
          <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            {"\u0414\u043E\u0431\u0430\u0432\u044C"}
            <span className="text-muted-foreground"> {"\u0434\u0435\u0441\u0435\u0440\u0442"}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {desserts.map((dessert) => (
            <motion.div
              key={dessert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group flex items-center gap-4 overflow-hidden rounded-xl border border-foreground/[0.08] bg-card p-4 transition-all hover:border-primary/30"
            >
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-secondary">
                <Image
                  src={dessert.image || "/placeholder.svg"}
                  alt={dessert.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="80px"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <h4 className="font-sans text-sm font-bold uppercase tracking-wide text-foreground">
                  {dessert.name}
                </h4>
                <span className="font-mono text-lg font-bold text-foreground">
                  {dessert.price} {"\u20BD"}
                </span>
              </div>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label={`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ${dessert.name} \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443`}
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
