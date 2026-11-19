"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useTranslations } from "@/lib/language"

export function WhyAnafi() {
  const { ref, visible } = useScrollReveal()
  const t = useTranslations()

  return (
    <section id="why-anafi" className="bg-background py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref}>
          <div
            className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-primary text-xs tracking-[0.3em] uppercase font-sans mb-3">
              {t.whyAnafi.tagline}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">{t.whyAnafi.heading}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border-l border-t border-border/40">
            {t.whyAnafi.items.map((item, i) => (
              <div
                key={i}
                className={`group border-r border-b border-border/40 p-8 relative overflow-hidden hover:bg-muted/60 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: visible ? `${150 + i * 100}ms` : "0ms" }}
              >
                {/* Animated left border accent */}
                <span
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
                  aria-hidden="true"
                />
                <h3 className="font-serif text-xl text-foreground mb-4 leading-snug">{item.title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
