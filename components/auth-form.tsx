"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface AuthFormProps {
  mode: "login" | "register"
}

export function AuthForm({ mode }: AuthFormProps) {
  const [focused, setFocused] = useState<string | null>(null)
  const isLogin = mode === "login"

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Blurred background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      {/* Centered modal */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div className="rounded-2xl border border-foreground/[0.08] bg-card/80 p-8 backdrop-blur-xl md:p-10">
          {/* Header */}
          <div className="mb-10 text-center">
            <Link
              href="/"
              className="mb-6 inline-block font-sans text-lg font-bold uppercase tracking-widest text-foreground"
            >
              TEARAPY
            </Link>
            <h1 className="font-sans text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
              {isLogin ? "Welcome Back" : "Join the Crew"}
            </h1>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              {isLogin
                ? "Enter your credentials to access your account"
                : "Create an account to start ordering"}
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-6"
          >
            {/* Name field (register only) */}
            {!isLogin && (
              <div className="relative">
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={`w-full border-b-2 bg-transparent px-0 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/40 ${
                    focused === "name"
                      ? "border-primary"
                      : "border-foreground/10"
                  }`}
                />
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={`w-full border-b-2 bg-transparent px-0 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/40 ${
                  focused === "email"
                    ? "border-primary"
                    : "border-foreground/10"
                }`}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused(null)}
                className={`w-full border-b-2 bg-transparent px-0 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/40 ${
                  focused === "password"
                    ? "border-primary"
                    : "border-foreground/10"
                }`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-3 rounded-full bg-primary py-4 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLogin ? "Enter" : "Join the Crew"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-foreground/[0.08]" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              or
            </span>
            <div className="h-px flex-1 bg-foreground/[0.08]" />
          </div>

          {/* Switch form */}
          <p className="text-center font-mono text-xs text-muted-foreground">
            {isLogin ? "No account yet? " : "Already have an account? "}
            <Link
              href={isLogin ? "/register" : "/login"}
              className="text-primary transition-colors hover:underline"
            >
              {isLogin ? "Join the Crew" : "Log In"}
            </Link>
          </p>
        </div>

        {/* Decorative bottom text */}
        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
          {"TEARAPY (C) 2026 / Club Access"}
        </p>
      </motion.div>
    </div>
  )
}
