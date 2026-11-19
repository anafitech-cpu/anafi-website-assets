"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useTranslations } from "@/lib/language"
import { cn } from "@/lib/utils"

export function ModeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"
  const label = isDark ? t.modeToggle.dark : t.modeToggle.light

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-foreground transition-colors duration-200",
        className,
      )}
    >
      <Sun
        className={`h-4 w-4 transition-opacity duration-200 ${mounted && !isDark ? "opacity-100" : "opacity-0 absolute"}`}
        aria-hidden="true"
      />
      <Moon
        className={`h-4 w-4 transition-opacity duration-200 ${mounted && isDark ? "opacity-100" : "opacity-0 absolute"}`}
        aria-hidden="true"
      />
      {!mounted && <span className="h-4 w-4" aria-hidden="true" />}
    </button>
  )
}
