/**
 * Smooth-scroll to an element matched by a CSS selector (typically a hash like "#contact").
 * No-op if nothing matches. Callers handle their own `event.preventDefault()` and side
 * effects (e.g. closing a mobile menu).
 */
export function smoothScrollTo(selector: string) {
  const el = document.querySelector(selector)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}
