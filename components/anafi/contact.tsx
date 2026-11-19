"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useTranslations } from "@/lib/language"

type Status = "idle" | "submitted"

export function Contact() {
  const { ref, visible } = useScrollReveal()
  const [status, setStatus] = useState<Status>("idle")
  const t = useTranslations()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = ((formData.get("name") as string | null) ?? "").trim()
    const company = ((formData.get("company") as string | null) ?? "").trim()
    const email = ((formData.get("email") as string | null) ?? "").trim()
    const message = ((formData.get("message") as string | null) ?? "").trim()

    const subject = name
      ? `New enquiry from ${name} \u2014 Anafi website`
      : "New enquiry \u2014 Anafi website"

    const bodyLines = [
      `Name: ${name}`,
      `Company: ${company || "\u2014"}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ]
    const body = bodyLines.join("\r\n")

    const mailtoUrl = `mailto:info@anafi.nl?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setStatus("submitted")
  }

  return (
    <section id="contact" className="bg-card border-t border-border/40 py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                {t.contact.heading}
              </h2>
              <p className="font-sans text-muted-foreground text-base leading-relaxed mb-12 max-w-md">
                {t.contact.intro}
              </p>
              <div className="space-y-4 font-sans text-sm text-muted-foreground">
                <div>
                  <p className="text-primary text-xs tracking-[0.2em] uppercase mb-1">{t.contact.locationLabel}</p>
                  <p>{t.contact.locationValue}</p>
                </div>
                <div>
                  <p className="text-primary text-xs tracking-[0.2em] uppercase mb-1">{t.contact.emailLabel}</p>
                  <a
                    href="mailto:info@anafi.nl"
                    className="hover:text-foreground transition-colors"
                  >
                    info@anafi.nl
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {status === "submitted" ? (
                <div className="h-full flex flex-col justify-center">
                  <p className="font-serif text-2xl text-foreground italic mb-3">
                    {t.contact.thankYouTitle}
                  </p>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    {t.contact.thankYouBody}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-primary text-xs tracking-[0.2em] uppercase font-sans mb-2">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full bg-background border border-border text-foreground font-sans text-sm px-4 py-3 outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-ring/50 transition-colors placeholder:text-muted-foreground"
                        placeholder={t.contact.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-primary text-xs tracking-[0.2em] uppercase font-sans mb-2">
                        {t.contact.companyLabel}
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full bg-background border border-border text-foreground font-sans text-sm px-4 py-3 outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-ring/50 transition-colors placeholder:text-muted-foreground"
                        placeholder={t.contact.companyPlaceholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-primary text-xs tracking-[0.2em] uppercase font-sans mb-2">
                      {t.contact.emailFieldLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-background border border-border text-foreground font-sans text-sm px-4 py-3 outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-ring/50 transition-colors placeholder:text-muted-foreground"
                      placeholder={t.contact.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-primary text-xs tracking-[0.2em] uppercase font-sans mb-2">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-background border border-border text-foreground font-sans text-sm px-4 py-3 outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-ring/50 transition-colors resize-none placeholder:text-muted-foreground"
                      placeholder={t.contact.messagePlaceholder}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-secondary border border-accent text-secondary-foreground font-sans text-sm tracking-wider uppercase py-4 hover:bg-secondary/90 transition-all duration-200"
                  >
                    {t.contact.submitButton}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
