"use client"

import { motion } from "framer-motion"
import { Factory, Thermometer, Recycle, Leaf } from "lucide-react"

const cards = [
  {
    title: "Dark Kitchen",
    description: "Exclusively delivery-based. No storefront overhead means premium quality at fair prices.",
    icon: Factory,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Temperature Control",
    description: "Insulated foil packaging keeps your drink at the perfect temperature until delivery.",
    icon: Thermometer,
    className: "md:col-span-1",
  },
  {
    title: "Eco Friendly",
    description: "100% recyclable cups and packaging. Zero single-use plastics.",
    icon: Recycle,
    className: "md:col-span-1",
  },
  {
    title: "Fresh Ingredients",
    description: "Locally sourced fruits and organic tea leaves, never from concentrate.",
    icon: Leaf,
    className: "md:col-span-2",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function BentoGrid() {
  return (
    <section id="about" className="px-4 py-20 md:px-12 xl:px-24">
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
          Why Us
        </p>
        <h2 className="mt-2 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          Engineered
          <br />
          <span className="text-muted-foreground">for flavor</span>
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 md:grid-cols-4 md:grid-rows-2"
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            className={`group relative overflow-hidden rounded-2xl border border-foreground/[0.08] bg-card p-6 transition-colors hover:border-primary/30 md:p-8 ${card.className}`}
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 bg-primary/[0.03] opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-secondary text-primary">
                <card.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold uppercase tracking-wide text-foreground md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
