"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import Image from "next/image"
import { combos } from "@/lib/data"
import { getAssetPath } from "@/lib/utils"

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
            {"\u041A\u043E\u043C\u0431\u043E"}
          </p>
          <h2 className="mt-2 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
            {"\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F"}
            <br />
            <span className="text-muted-foreground">{"\u043F\u0430\u0440\u0430"}</span>
          </h2>
        </div>
        <p className="max-w-xs font-mono text-xs leading-relaxed text-muted-foreground">
          {"\u041B\u0443\u0447\u0448\u0438\u0435 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F \u043D\u0430\u043F\u0438\u0442\u043A\u043E\u0432 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442\u043E\u0432. \u042D\u043A\u043E\u043D\u043E\u043C\u044C \u0431\u043E\u043B\u044C\u0448\u0435, \u043F\u0440\u043E\u0431\u0443\u0439 \u0431\u043E\u043B\u044C\u0448\u0435."}
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
                src={combo.image || getAssetPath("/placeholder.svg")}
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
                    {combo.price} {"\u20BD"}
                  </span>
                  <span className="ml-2 font-mono text-[10px] uppercase text-muted-foreground">
                    {"\u043A\u043E\u043C\u0431\u043E"}
                  </span>
                </div>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
                  aria-label={`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u0431\u043E ${combo.name} \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443`}
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
