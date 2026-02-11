import { Instagram, Twitter } from "lucide-react"

const footerLinks = {
  Menu: ["All Drinks", "New Arrivals", "Best Sellers", "Sugar Free"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Support: ["Delivery Info", "FAQ", "Contact", "Terms"],
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
                <li key={link}>
                  <a
                    href="#"
                    className="font-mono text-xs text-foreground/60 transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social */}
        <div>
          <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Social
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
          {"TEARAPY"} {"(C)"} 2026. All rights reserved.
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">
          Dark Kitchen / Delivery Only
        </p>
      </div>
    </footer>
  )
}
