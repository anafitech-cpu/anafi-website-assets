"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useTranslations } from "@/lib/language"

export function About() {
  const { ref, visible } = useScrollReveal()
  const t = useTranslations()

  return (
    <section id="about" className="bg-background py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref}>
          {/* Statement */}
          <div
            className={`max-w-4xl mx-auto text-center mb-24 border-b border-border/40 pb-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-relaxed">
              &ldquo;{t.about.statement}&rdquo;
            </p>
          </div>

          {/* Three pillars */}
          <div>
            <p
              className={`text-primary text-xs tracking-[0.3em] uppercase font-sans mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: visible ? "200ms" : "0ms" }}
            >
              {t.about.approachLabel}
            </p>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {t.about.pillars.map((p, i) => (
                <div
                  key={i}
                  className={`border-l border-accent pl-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: visible ? `${300 + i * 150}ms` : "0ms" }}
                >
                  <span className="text-border font-serif text-5xl font-bold select-none leading-none">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-foreground mt-2 mb-4">{p.word}</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
