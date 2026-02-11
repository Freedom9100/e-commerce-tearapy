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
              {isLogin ? "\u0412\u0425\u041E\u0414" : "\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042F"}
            </h1>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              {isLogin
                ? "\u0412\u0432\u0435\u0434\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"
                : "\u0421\u043E\u0437\u0434\u0430\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0438 \u043D\u0430\u0447\u043D\u0438 \u0437\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C"}
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
                  {"\u0418\u043C\u044F"}
                </label>
                <input
                  type="text"
                  placeholder={"\u0422\u0432\u043E\u0451 \u0438\u043C\u044F"}
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
                E-mail
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
                {"\u041F\u0430\u0440\u043E\u043B\u044C"}
              </label>
              <input
                type="password"
                placeholder={"\u0412\u0432\u0435\u0434\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"}
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
              {isLogin ? "\u0412\u041E\u0419\u0422\u0418" : "\u0421\u041E\u0417\u0414\u0410\u0422\u042C \u0410\u041A\u041A\u0410\u0423\u041D\u0422"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-foreground/[0.08]" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {"\u0438\u043B\u0438"}
            </span>
            <div className="h-px flex-1 bg-foreground/[0.08]" />
          </div>

          {/* Switch form */}
          <p className="text-center font-mono text-xs text-muted-foreground">
            {isLogin ? "\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430? " : "\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442? "}
            <Link
              href={isLogin ? "/register" : "/login"}
              className="text-primary transition-colors hover:underline"
            >
              {isLogin ? "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" : "\u0412\u043E\u0439\u0442\u0438"}
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
