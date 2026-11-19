"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { smoothScrollTo } from "@/lib/scroll"
import { useTranslations } from "@/lib/language"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Aurora gradient field — layered drifting blobs, the hero's atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[80%] h-[80%] -top-[15%] -left-[15%] rounded-full opacity-35 blur-[110px]"
          style={{
            background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            animation: "aurora-1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[70%] h-[70%] -bottom-[20%] -right-[15%] rounded-full opacity-25 blur-[110px]"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            animation: "aurora-2 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[55%] h-[55%] top-[15%] right-[15%] rounded-full opacity-25 blur-[90px]"
          style={{
            background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            animation: "aurora-3 30s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[45%] h-[45%] bottom-[8%] left-[12%] rounded-full opacity-20 blur-[100px]"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            animation: "aurora-1 34s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Radial vignette — softens edges toward the background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, color-mix(in srgb, var(--background) 85%, transparent) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-foreground leading-[1.05] text-balance">
          <span
            className={`block font-sans font-medium text-5xl md:text-7xl transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {t.hero.headingLine1}
          </span>
          <span
            className={`block font-serif italic text-2xl md:text-4xl text-primary mt-3 md:mt-4 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "150ms" }}
          >
            {t.hero.headingLine2}
          </span>
        </h1>

      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => smoothScrollTo("#about")}
        aria-label="Scroll to next section"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-foreground transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "700ms" }}
      >
        <ChevronDown className="w-5 h-5 motion-safe:animate-bounce" aria-hidden="true" />
      </button>

      {/* Bottom fade — also theme-aware */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--background))",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
