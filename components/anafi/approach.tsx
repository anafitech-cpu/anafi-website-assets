"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useTranslations } from "@/lib/language"

interface Step {
  number: string
  title: string
  body: string
}

function StepCard({ step, index }: { step: Step; index: number }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`relative bg-card border border-border/50 p-8 flex flex-col transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span className="font-serif text-5xl text-primary leading-none mb-6">{step.number}</span>
      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{step.title}</h3>
      <p className="font-sans text-muted-foreground text-sm leading-relaxed">{step.body}</p>
    </div>
  )
}

export function Approach() {
  const { ref, visible } = useScrollReveal()
  const t = useTranslations()

  return (
    <section id="approach" className="bg-background py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-16 max-w-3xl">
            <p className="text-primary text-xs tracking-[0.3em] uppercase font-sans mb-3">
              {t.approach.tagline}
            </p>
            <h2 className="font-serif italic text-4xl md:text-5xl text-foreground leading-tight">
              {t.approach.heading}
            </h2>
          </div>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-border/60 -z-0"
            aria-hidden="true"
          />
          <div className="relative grid md:grid-cols-3 gap-6">
            {t.approach.steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
