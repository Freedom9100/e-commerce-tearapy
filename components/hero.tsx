"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { getAssetPath } from "@/lib/utils"

function Marquee() {
  const text = "\u2022 \u0411\u0415\u0417 \u0421\u0410\u0425\u0410\u0420\u0410 \u2022 \u0421\u0412\u0415\u0416\u0418\u0415 \u0424\u0420\u0423\u041A\u0422\u042B \u2022 DARK KITCHEN \u2022 \u0414\u041E\u0421\u0422\u0410\u0412\u041A\u0410 30 \u041C\u0418\u041D \u2022 ZERO WASTE \u2022 "
  return (
    <div className="overflow-hidden border-y border-foreground/10 bg-secondary/50 py-3">
      <div className="animate-marquee flex w-max">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col">
      {/* Main content */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 pt-24 pb-8 lg:flex-row lg:gap-8 lg:px-12 xl:px-24">
        {/* Left: Typography */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-2 lg:flex-1"
        >
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            Dark Kitchen / Est. 2026
          </p>
          <h1 className="text-balance font-sans text-[clamp(2.5rem,9vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight text-foreground">
            {"\u0412\u041A\u0423\u0421,"}
            <br />
            <span className="text-primary">{"\u041A\u041E\u0422\u041E\u0420\u042B\u0419"}</span>
            <br />
            <span className="text-muted-foreground">{"\u041C\u0415\u041D\u042F\u0415\u0422"}</span>
            <br />
            {"\u0420\u0415\u0410\u041B\u042C\u041D\u041E\u0421\u0422\u042C"}
          </h1>
          <p className="mt-4 max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
            {"\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043C\u0438\u043A\u0441\u044B. \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0437\u0430 30 \u043C\u0438\u043D\u0443\u0442."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/menu"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
            >
              {"\u0421\u041C\u041E\u0422\u0420\u0415\u0422\u042C \u041C\u0415\u041D\u042E"}
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {"\u041E \u041D\u0410\u0421"}
            </Link>
          </div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mt-12 flex items-center justify-center lg:mt-0 lg:flex-1"
        >
          <div className="relative h-[400px] w-[320px] sm:h-[500px] sm:w-[400px] lg:h-[600px] lg:w-[480px]">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" />
            <Image
              src={getAssetPath("/drinks/hero-drink.jpg")}
              alt={"\u0424\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u043D\u0430\u043F\u0438\u0442\u043E\u043A TEARAPY"}
              fill
              className="relative z-10 rounded-3xl object-cover"
              priority
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 480px"
            />
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <Marquee />
    </section>
  )
}
