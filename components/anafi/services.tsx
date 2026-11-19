"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useTranslations } from "@/lib/language"

export function Services() {
  const { ref, visible } = useScrollReveal()
  const t = useTranslations()

  return (
    <section id="services" className="bg-card py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref}>
          <div
            className={`mb-16 border-b border-border/40 pb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">{t.services.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {t.services.items.map((s, i) => (
              <div
                key={i}
                className={`border border-border/50 p-8 hover:border-accent/60 hover:bg-muted/30 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: visible ? `${150 + i * 100}ms` : "0ms" }}
              >
                <span className="text-primary font-sans text-sm font-medium tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl text-foreground mt-3 mb-4 leading-snug">
                  {s.title}
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
