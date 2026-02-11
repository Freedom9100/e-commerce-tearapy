"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, Menu, X, User } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { label: "\u041C\u0415\u041D\u042E", href: "/menu" },
  { label: "\u041E \u041D\u0410\u0421", href: "/#about" },
  { label: "\u0414\u041E\u0421\u0422\u0410\u0412\u041A\u0410", href: "/#delivery" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(0)

  return (
    <header className="fixed top-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full border border-foreground/10 bg-background/60 px-4 py-3 backdrop-blur-xl md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-sans text-lg font-bold uppercase tracking-widest text-foreground"
        >
          TEARAPY
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Account icon */}
          <Link
            href="/login"
            className="hidden items-center justify-center rounded-full border border-foreground/10 bg-secondary p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary md:flex"
            aria-label={"\u0410\u043A\u043A\u0430\u0443\u043D\u0442"}
          >
            <User className="h-4 w-4" />
          </Link>

          {/* Cart */}
          <button
            className="flex items-center gap-2 rounded-full border border-foreground/10 bg-secondary px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label={"\u041A\u043E\u0440\u0437\u0438\u043D\u0430"}
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">{"\u041A\u041E\u0420\u0417\u0418\u041D\u0410"}</span>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {cartCount}
            </span>
          </button>

          {/* Mobile toggle */}
          <button
            className="text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E" : "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
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
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {"\u0412\u0425\u041E\u0414"}
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 block rounded-full bg-primary px-4 py-3 text-center font-mono text-sm uppercase tracking-wider text-primary-foreground"
                >
                  {"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042F"}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
