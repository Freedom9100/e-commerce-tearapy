"use client"

import { motion } from "framer-motion"
import Image from "next/image"

function Marquee() {
  const text = "SUGAR FREE OPTIONS \u00B7 30 MIN DELIVERY \u00B7 FRESH FRUITS \u00B7 PREMIUM TEA \u00B7 ZERO WASTE \u00B7 "
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
          <h1 className="font-sans text-[clamp(3.5rem,12vw,10rem)] font-bold uppercase leading-[0.85] tracking-tight text-foreground">
            TEA
            <br />
            <span className="text-primary">RAPY</span>
            <br />
            <span className="text-muted-foreground">FOR</span>
            <br />
            REALITY
          </h1>
          <p className="mt-4 max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
            Premium tea-based beverages engineered for the modern palate.
            Crafted fresh, delivered fast, zero compromises.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
            >
              Explore Menu
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Learn More
            </a>
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
              src="/drinks/hero-drink.jpg"
              alt="TEARAPY signature matcha drink"
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
