import React from "react"
import type { Metadata, Viewport } from "next"
import { Oswald, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TEARAPY | Tea-Based Dark Kitchen",
  description:
    "Premium tea-based beverages crafted in our dark kitchen. Fresh fruits, zero sugar options, delivered in 30 minutes.",
}

export const viewport: Viewport = {
  themeColor: "#050505",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${jetbrains.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
