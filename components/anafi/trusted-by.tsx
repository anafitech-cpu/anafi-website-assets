"use client"

/**
 * DO NOT reinstate this component in `app/page.tsx` without first:
 *   1. replacing the placeholder company names below with real, agreed client names,
 *   2. migrating the hardcoded hex classes to semantic tokens
 *      (bg-card, border-border, text-primary, text-accent, hover:text-primary) —
 *      see how the other anafi/* components handle theming,
 *   3. confirming the names still read well in both light and dark modes.
 *
 * Left on disk deliberately so it can be quickly restored once real clients are signed.
 */
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const logos = [
  "Meridian Industries",
  "Vantage Systems",
  "Nordhavn Group",
  "Castelo Manufacturing",
  "Elara Operations",
  "Ironfield Works",
]

export function TrustedBy() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="bg-[#0D1208] border-y border-[#1B3A28]/30 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-[#4A8A5A] text-xs tracking-[0.3em] uppercase font-sans text-center mb-10">
            Trusted by leading organisations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.map((name) => (
              <div
                key={name}
                className="text-[#2A5A3A] font-serif text-lg tracking-widest hover:text-[#4A8A5A] transition-colors duration-200"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
