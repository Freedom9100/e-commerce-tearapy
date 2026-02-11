"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import Image from "next/image"
import { combos } from "@/lib/data"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function PerfectMatch() {
  return (
    <section className="px-4 py-20 md:px-12 xl:px-24">
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            Combos
          </p>
          <h2 className="mt-2 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
            Perfect
            <br />
            <span className="text-muted-foreground">Match</span>
          </h2>
        </div>
        <p className="max-w-xs font-mono text-xs leading-relaxed text-muted-foreground">
          Curated pairings of our best drinks and desserts. Save more, taste more.
        </p>
      </div>

      {/* Horizontal scroll container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin"
      >
        {combos.map((combo) => (
          <motion.div
            key={combo.id}
            variants={itemVariants}
            className="group relative flex w-[320px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-foreground/[0.08] bg-card transition-all duration-300 hover:border-primary/40"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
              <Image
                src={combo.image || "/placeholder.svg"}
                alt={combo.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="320px"
              />
              {/* Tag */}
              <div className="absolute top-3 left-3">
                <span className="rounded-full bg-primary px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase text-primary-foreground">
                  {combo.tag}
                </span>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col justify-between gap-4 p-5">
              <div>
                <h3 className="font-sans text-xl font-bold uppercase tracking-wide text-foreground">
                  {combo.name}
                </h3>
                <ul className="mt-2 flex flex-col gap-1">
                  {combo.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <span className="font-mono text-2xl font-bold text-foreground">
                    ${combo.price}
                  </span>
                  <span className="ml-2 font-mono text-[10px] uppercase text-muted-foreground">
                    combo
                  </span>
                </div>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
                  aria-label={`Add ${combo.name} combo to cart`}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
