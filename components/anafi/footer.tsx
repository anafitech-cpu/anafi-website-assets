"use client"

import { smoothScrollTo } from "@/lib/scroll"
import { useTranslations } from "@/lib/language"
import { AnafiLogo } from "./logo"

export function Footer() {
  const t = useTranslations()

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.approach, href: "#approach" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScrollTo(href)
  }

  return (
    <footer className="bg-background border-t border-border/30 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-3 text-foreground">
            <AnafiLogo size={22} />
            <span className="font-serif text-base tracking-widest uppercase">
              Anafi Technologies
            </span>
          </div>
          <p className="font-serif italic text-xs text-muted-foreground tracking-normal">
            {t.footer.etymology}
          </p>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground font-sans text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Anafi. {t.footer.copyright}
        </p>

        {/* Nav */}
        <ul className="flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleScroll(e, l.href)}
                className="text-muted-foreground hover:text-foreground text-xs tracking-wider uppercase font-sans transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
