# Anafi

Marketing site for **Anafi** — a B2B operational-excellence and AI-integration consultancy based in Eindhoven, Netherlands.

A single-page Next.js application (App Router). One route, no backend, no database — all content is static.

## Stack

- **Next.js 16.2** (App Router, Turbopack) + **React 19.2** + **TypeScript 5.7**
- **Tailwind CSS 4** — CSS-only config; theme tokens live in `app/globals.css` inside `@theme inline`
- **shadcn/ui** ("new-york" style) over Radix — scaffolded but largely unused; the real components live under `components/anafi/`
- **DM Sans** + **Cormorant Garamond** via `next/font/google`
- **lucide-react** for icons, **`@vercel/analytics`** in production only
- **pnpm** (lockfile v9)

## Commands

```bash
pnpm install    # install dependencies
pnpm dev        # start dev server at http://localhost:3000
pnpm build      # production build (runs full TypeScript validation)
pnpm start      # serve production build
pnpm lint       # run ESLint (flat config, Next 16 native)
```

## Project layout

```
app/
  layout.tsx       Root layout — fonts, metadata, Analytics
  page.tsx         Single page composing 10 anafi/* sections
  globals.css      Active stylesheet (Tailwind v4 + Anafi palette tokens)

components/
  anafi/           Hand-built feature components — the real site
  ui/              shadcn scaffolding — mostly unused baseline

hooks/             Custom React hooks (use-scroll-reveal, use-counter, …)
lib/               Small utilities (cn, smoothScrollTo)
public/            Favicons
```

Page section order (see `app/page.tsx`):
`Nav → Hero → Etymology → About → Services → WhyAnafi → TrustedBy → CaseStudies → Contact → Footer`

## Design tokens

The Anafi palette is registered as named Tailwind tokens in `app/globals.css`:

| Token         | Hex        | Use                                    |
|---------------|-----------|----------------------------------------|
| `ink`         | `#0a0f0c` | Page background                        |
| `ink-alt`     | `#0d1208` | Alt sections (contact, card panels)    |
| `cream`       | `#f3efe7` | Primary text                           |
| `moss`        | `#4a8a5a` | Accents, small-caps labels, focus ring |
| `forest`      | `#1b3a28` | Borders, CTA fill                      |
| `forest-mid`  | `#2a5a3a` | Stronger borders                       |
| `slate`       | `#8a9a90` | Body / meta text                       |
| `slate-cool`  | `#b8c4cc` | Secondary meta                         |

Use them as Tailwind utilities: `bg-ink`, `text-cream`, `border-forest`, etc.
Some legacy `anafi/*` components still use hard-coded arbitrary-value classes like `bg-[#0A0F0C]`. Migrating those to named tokens is tracked in `ACTION_PLAN.md`.

## Further reading

- `CLAUDE.md` — guidance for Claude Code (and humans): conventions, gotchas, known improvement areas
- `ACTION_PLAN.md` — prioritised backlog with pass/fail gates
