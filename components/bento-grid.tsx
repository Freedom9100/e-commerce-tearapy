"use client"

import { motion } from "framer-motion"
import { Factory, Thermometer, Recycle, Leaf } from "lucide-react"

const cards = [
  {
    title: "Dark Kitchen",
    description: "\u0422\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430. \u041D\u0438\u043A\u0430\u043A\u0438\u0445 \u0437\u0430\u043B\u043E\u0432 \u2014 \u043F\u0440\u0435\u043C\u0438\u0443\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E \u0447\u0435\u0441\u0442\u043D\u043E\u0439 \u0446\u0435\u043D\u0435.",
    icon: Factory,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
    description: "\u0422\u0435\u0440\u043C\u043E\u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0443\u044E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0434\u043E \u0441\u0430\u043C\u043E\u0439 \u0434\u0432\u0435\u0440\u0438.",
    icon: Thermometer,
    className: "md:col-span-1",
  },
  {
    title: "\u042D\u043A\u043E",
    description: "100% \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0430\u043A\u0430\u043D\u044B \u0438 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430. \u041D\u043E\u043B\u044C \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430.",
    icon: Recycle,
    className: "md:col-span-1",
  },
  {
    title: "\u0421\u0432\u0435\u0436\u0435\u0441\u0442\u044C",
    description: "\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u0444\u0440\u0443\u043A\u0442\u044B \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0447\u0430\u0439. \u041D\u0438\u043A\u0430\u043A\u0438\u0445 \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0442\u043E\u0432.",
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
          {"\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B"}
        </p>
        <h2 className="mt-2 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          {"\u0421\u043E\u0437\u0434\u0430\u043D\u043E"}
          <br />
          <span className="text-muted-foreground">{"\u0434\u043B\u044F \u0432\u043A\u0443\u0441\u0430"}</span>
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 md:grid-cols-4 md:grid-rows-2"
      >
        {cards.map((card) => {
          const isDarkKitchen = card.title === "Dark Kitchen"
          return (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-2xl border border-foreground/[0.08] bg-card p-6 transition-colors hover:border-primary/30 md:p-8 ${card.className}`}
            >
              {/* Dark Kitchen: Giant typographic background */}
              {isDarkKitchen && (
                <>
                  <span
                    className="pointer-events-none absolute right-10 top-1/4 z-0 origin-top-right font-black uppercase leading-none text-white/5 transition-transform duration-500 group-hover:translate-x-2"
                    style={{ fontSize: "clamp(5rem, 12vw, 10rem)" }}
                  >
                    DARK
                  </span>
                </>
              )}

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 bg-primary/[0.03] opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-secondary text-primary">
                  <card.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className={`font-sans font-bold uppercase tracking-wide text-foreground ${isDarkKitchen ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                    {card.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
