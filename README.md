# NextStep

A calm web app: paste a messy brain dump, get back a short checklist of small
(5–30 min) next actions you can actually start — with per-task timers,
progress tracking, and saved history.

## Run locally

Requires Node 18+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Routes (step 1 scaffold)

- `/` — landing page with the brain-dump box front and center
- `/app` — main tool (placeholder shell; breakdown/checklist/timer land in step 2)
- `/dashboard` — history (placeholder shell)
- `/login` — sign-in (placeholder shell; magic link lands in a later step)

## Design system

- Deep Space `#17142b` page bg · Header `#250537` · Accent `#401579` (primary
  buttons) · Teal `#0095b0` (links/focus) · Lavender `#9d8dbd` (borders) ·
  text `#eae6f5`, headings white
- Playfair Display for the wordmark/landing only · DM Sans/Inter for app UI ·
  DM Mono for numbers/timers
- Dry, witty voice in empty states only; plain functional labels everywhere else
- Calm, generous whitespace; one primary action per screen

Tokens live in `app/globals.css` (`@theme`). Fonts load via Google Fonts in
`app/layout.tsx`.

## Roadmap

- Step 2: AI breakdown + editable checklist + timer + progress (no auth yet)
- Step 3: auth + DB + history persistence
- Step 4: Stripe tier shell + polish
