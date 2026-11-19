"use client"

import { useEffect, useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import { smoothScrollTo } from "@/lib/scroll"
import { useLocale, useTranslations } from "@/lib/language"
import type { Translations } from "@/lib/translations"
import { AnafiLogo } from "./logo"
import { ModeToggle } from "./mode-toggle"

type SearchItem = { section: string; href: string; text: string }

const SECTIONS: { key: keyof Translations; label: string; href: string }[] = [
  { key: "about", label: "About", href: "#about" },
  { key: "services", label: "Services", href: "#services" },
  { key: "whyAnafi", label: "Why Anafi", href: "#why-anafi" },
  { key: "approach", label: "Approach", href: "#approach" },
  { key: "contact", label: "Contact", href: "#contact" },
]

function collectStrings(value: unknown, out: string[]) {
  if (typeof value === "string") {
    if (value.length >= 4) out.push(value)
    return
  }
  if (Array.isArray(value)) {
    value.forEach((v) => collectStrings(v, out))
    return
  }
  if (value && typeof value === "object") {
    Object.values(value).forEach((v) => collectStrings(v, out))
  }
}

function buildSearchIndex(t: Translations): SearchItem[] {
  const items: SearchItem[] = []
  for (const s of SECTIONS) {
    const strings: string[] = []
    collectStrings(t[s.key], strings)
    for (const text of strings) {
      items.push({ section: s.label, href: s.href, text })
    }
  }
  return items
}

export function Nav() {
  const t = useTranslations()
  const { locale, setLocale } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeAll = () => {
    setMenuOpen(false)
    setSearchOpen(false)
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScrollTo(href)
    closeAll()
  }

  return (
    <>
      <header
        className="fixed top-3 inset-x-3 sm:top-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[85vw] sm:max-w-6xl z-50"
      >
        <div
          aria-hidden="true"
          className={`absolute inset-0 rounded-full backdrop-blur-md border border-border/60 shadow-sm dark:shadow-none transition-colors duration-300 ${
            scrolled
              ? "bg-card/90 dark:bg-background/75"
              : "bg-card/60 dark:bg-background/35"
          }`}
        />

        <nav className="relative pl-5 pr-2 sm:pl-6 sm:pr-3 h-12 sm:h-14 flex items-center justify-between gap-2">
          <a href="#" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 text-foreground">
            <AnafiLogo />
            <span className="font-serif text-sm sm:text-base md:text-lg tracking-wider uppercase whitespace-nowrap">
              Anafi
            </span>
          </a>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-foreground p-2 hover:text-primary transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </button>
            <ModeToggle className="hover:text-primary" />
            <button
              onClick={() => setMenuOpen(true)}
              className="text-foreground p-2"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span className="block w-5 h-px bg-current mb-1.5" />
              <span className="block w-5 h-px bg-current mb-1.5" />
              <span className="block w-5 h-px bg-current" />
            </button>
            <div className="hidden sm:flex items-center gap-1 px-2 text-xs tracking-wider uppercase font-sans">
              <button
                onClick={() => setLocale("nl")}
                className={`transition-colors duration-200 ${locale === "nl" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                aria-label="Nederlands"
              >
                NL
              </button>
              <span className="text-border" aria-hidden="true">|</span>
              <button
                onClick={() => setLocale("en")}
                className={`transition-colors duration-200 ${locale === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                aria-label="English"
              >
                EN
              </button>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="ml-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm tracking-wider uppercase hover:bg-secondary/90 transition-colors duration-200 font-sans whitespace-nowrap"
            >
              {t.nav.contactUs}
            </a>
          </div>
        </nav>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        locale={locale}
        setLocale={setLocale}
        t={t}
      />
    </>
  )
}

function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useTranslations()
  const [query, setQuery] = useState("")
  const index = useMemo(() => buildSearchIndex(t), [t])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    const seen = new Set<string>()
    const matches: SearchItem[] = []
    for (const item of index) {
      if (!item.text.toLowerCase().includes(q)) continue
      const dedupKey = item.section + "::" + item.text
      if (seen.has(dedupKey)) continue
      seen.add(dedupKey)
      matches.push(item)
      if (matches.length >= 8) break
    }
    return matches
  }, [query, index])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) setQuery("")
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Search">
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-md cursor-default"
      />
      <div className="relative max-w-2xl mx-auto mt-24 sm:mt-32 px-4 sm:px-6">
        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
            <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the page…"
              className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
          {query.trim() && (
            <div className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <div className="px-4 py-10 text-sm text-muted-foreground text-center">
                  No matches.
                </div>
              ) : (
                <ul>
                  {results.map((r, i) => (
                    <li key={i} className="border-t border-border/40 first:border-t-0">
                      <a
                        href={r.href}
                        onClick={(e) => {
                          e.preventDefault()
                          smoothScrollTo(r.href)
                          onClose()
                        }}
                        className="block px-4 py-3 hover:bg-muted/60 transition-colors"
                      >
                        <div className="text-[10px] text-primary uppercase tracking-[0.25em] mb-1">
                          {r.section}
                        </div>
                        <div className="text-sm text-foreground line-clamp-2">{r.text}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function MenuOverlay({
  open,
  onClose,
  locale,
  setLocale,
  t,
}: {
  open: boolean
  onClose: () => void
  locale: "en" | "nl"
  setLocale: (l: "en" | "nl") => void
  t: Translations
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScrollTo(href)
    onClose()
  }

  if (!open) return null

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.approach, href: "#approach" },
  ]

  return (
    <div
      className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-foreground p-2 hover:text-primary transition-colors"
        aria-label="Close menu"
      >
        <X className="w-6 h-6" aria-hidden="true" />
      </button>

      <nav className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 px-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-foreground hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-foreground hover:text-primary transition-colors"
        >
          {t.nav.contactUs}
        </a>
      </nav>

      <div className="flex items-center justify-center gap-6 pb-10 px-6">
        <div className="flex items-center gap-1 text-xs tracking-wider uppercase font-sans">
          <button
            onClick={() => setLocale("nl")}
            className={`transition-colors duration-200 ${locale === "nl" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            aria-label="Nederlands"
          >
            NL
          </button>
          <span className="text-border">|</span>
          <button
            onClick={() => setLocale("en")}
            className={`transition-colors duration-200 ${locale === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            aria-label="English"
          >
            EN
          </button>
        </div>
        <ModeToggle />
      </div>
    </div>
  )
}
