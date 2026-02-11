"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const moods = [
  {
    id: "fizzy",
    label: "\u042D\u041D\u0415\u0420\u0413\u0418\u042F",
    subtitle: "\u0413\u0430\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0447\u0430\u0438 \u0434\u043B\u044F \u0437\u0430\u0440\u044F\u0434\u0430 \u043D\u0430 \u0432\u0435\u0441\u044C \u0434\u0435\u043D\u044C",
    gradient: "from-[#CCFF00]/30 via-[#CCFF00]/5 to-transparent",
    borderGlow: "group-hover:shadow-[0_0_60px_-10px_hsla(72,100%,50%,0.3)]",
    accentColor: "text-primary",
    filterParam: "fizzy",
  },
  {
    id: "chill",
    label: "\u0427\u0418\u041B\u041B",
    subtitle: "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0435 \u0447\u0430\u0438 \u0434\u043B\u044F \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0445 \u0432\u0435\u0447\u0435\u0440\u043E\u0432",
    gradient: "from-[#8B5CF6]/30 via-[#8B5CF6]/5 to-transparent",
    borderGlow: "group-hover:shadow-[0_0_60px_-10px_hsla(258,90%,66%,0.3)]",
    accentColor: "text-[#8B5CF6]",
    filterParam: "milk-tea",
  },
  {
    id: "focus",
    label: "\u0424\u041E\u041A\u0423\u0421",
    subtitle: "\u0427\u0438\u0441\u0442\u044B\u0435 \u0444\u0440\u0443\u043A\u0442\u043E\u0432\u044B\u0435 \u0447\u0430\u0438 \u0434\u043B\u044F \u044F\u0441\u043D\u043E\u0441\u0442\u0438",
    gradient: "from-[#F97316]/30 via-[#F97316]/5 to-transparent",
    borderGlow: "group-hover:shadow-[0_0_60px_-10px_hsla(24,95%,53%,0.3)]",
    accentColor: "text-[#F97316]",
    filterParam: "fruit-tea",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function ShopByMood() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="px-4 py-20 md:px-12 xl:px-24">
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
          {"\u041E\u0442\u043A\u0440\u043E\u0439"}
        </p>
        <h2 className="mt-2 font-sans text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          {"\u0412\u044B\u0431\u0435\u0440\u0438"}
          <br />
          <span className="text-muted-foreground">{"\u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435"}</span>
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4 md:flex-row md:items-stretch"
      >
        {moods.map((mood) => {
          const isExpanded = expandedId === mood.id

          return (
            <motion.div
              key={mood.id}
              variants={cardVariants}
              onMouseEnter={() => setExpandedId(mood.id)}
              onMouseLeave={() => setExpandedId(null)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-foreground/[0.08] bg-card transition-all duration-500 ${mood.borderGlow}`}
              style={{
                flex: isExpanded ? 2.5 : 1,
                minHeight: "420px",
              }}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${mood.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                <div>
                  <span className="mb-3 inline-block rounded-full border border-foreground/10 bg-secondary px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {mood.id}
                  </span>
                  <h3
                    className={`font-sans text-3xl font-bold uppercase tracking-wide text-foreground transition-colors md:text-4xl ${
                      isExpanded ? mood.accentColor : ""
                    }`}
                  >
                    {mood.label}
                  </h3>
                  <motion.p
                    initial={false}
                    animate={{
                      opacity: isExpanded ? 1 : 0,
                      height: isExpanded ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 overflow-hidden font-mono text-xs leading-relaxed text-muted-foreground"
                  >
                    {mood.subtitle}
                  </motion.p>
                </div>

                <Link
                  href={`/menu?filter=${mood.filterParam}`}
                  className={`mt-6 flex items-center gap-2 self-start font-mono text-xs uppercase tracking-wider transition-colors ${mood.accentColor} opacity-0 group-hover:opacity-100`}
                >
                  {"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Large number decoration */}
              <div className="pointer-events-none absolute right-4 bottom-4 font-sans text-[8rem] font-bold leading-none text-foreground/[0.03] md:text-[12rem]">
                {String(moods.indexOf(mood) + 1).padStart(2, "0")}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
