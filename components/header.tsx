"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, Menu, X } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(0)

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-4xl">
      <nav className="flex items-center justify-between rounded-full border border-foreground/10 bg-background/60 px-4 py-3 backdrop-blur-xl md:px-6">
        {/* Logo */}
        <a href="#" className="font-sans text-lg font-bold uppercase tracking-widest text-foreground">
          TEARAPY
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {["Menu", "About", "Delivery"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 rounded-full border border-foreground/10 bg-secondary px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">CART</span>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {cartCount}
            </span>
          </button>

          {/* Mobile toggle */}
          <button
            className="text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-2 overflow-hidden rounded-2xl border border-foreground/10 bg-background/90 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 p-3">
              {["Menu", "About", "Delivery"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
