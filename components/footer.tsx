import { Instagram, Twitter } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  "\u041C\u0435\u043D\u044E": [
    { label: "\u0412\u0441\u0435 \u043D\u0430\u043F\u0438\u0442\u043A\u0438", href: "/menu" },
    { label: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438", href: "/menu?filter=all" },
    { label: "\u041C\u043E\u043B\u043E\u0447\u043D\u044B\u0435", href: "/menu?filter=milk-tea" },
    { label: "\u0424\u0440\u0443\u043A\u0442\u043E\u0432\u044B\u0435", href: "/menu?filter=fruit-tea" },
  ],
  "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F": [
    { label: "\u041E \u043D\u0430\u0441", href: "/#about" },
    { label: "\u041A\u0430\u0440\u044C\u0435\u0440\u0430", href: "#" },
    { label: "\u041F\u0440\u0435\u0441\u0441\u0430", href: "#" },
    { label: "\u0411\u043B\u043E\u0433", href: "#" },
  ],
  "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430": [
    { label: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430", href: "#" },
    { label: "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B", href: "#" },
    { label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", href: "#" },
    { label: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-foreground/[0.08] px-4 pt-16 pb-8 md:px-12 xl:px-24">
      {/* Large logo */}
      <div className="mb-16 overflow-hidden">
        <h2 className="font-sans text-[clamp(4rem,15vw,14rem)] font-bold uppercase leading-[0.85] tracking-tight text-foreground/[0.06]">
          TEARAPY
        </h2>
      </div>

      {/* Links grid */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {category}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-mono text-xs text-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social */}
        <div>
          <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {"\u0421\u043E\u0446\u0441\u0435\u0442\u0438"}
          </h4>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground/60 transition-colors hover:border-primary hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground/60 transition-colors hover:border-primary hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-foreground/[0.05] pt-8 md:flex-row">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {"TEARAPY (C) 2026. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">
          {"Dark Kitchen / \u0422\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430"}
        </p>
      </div>
    </footer>
  )
}
