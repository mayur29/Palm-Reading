# Palmora 🖐️

A personalized palm-reading gift app. The recipient scans her palm and receives a full
reading based on Indian palmistry (Hasta Samudrika Shastra) blended with numerology from
her birth date, plus a daily insight card she can come back to.

Built with Next.js (App Router) + TypeScript + Tailwind CSS, as a PWA. Single-user by
design — this is a gift for one specific person, not a multi-tenant product.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create a `.env.local` file (never commit it):

```bash
# Required for the AI palm-photo analysis (/api/scan/analyze), via Google's Gemini API.
# Get a free key at https://aistudio.google.com/app/apikey
# Without this set, photo analysis always gracefully falls back to the guided quiz —
# the app still works end-to-end, just without the vision step.
GOOGLE_GENERATIVE_AI_API_KEY=...

# Optional: override the vision-capable model used for palm analysis.
# Defaults to "gemini-3.6-flash".
PALMORA_VISION_MODEL=gemini-3.6-flash
```

## Data & privacy

- There is no login. Onboarding creates a profile and stores a random profile ID in an
  httpOnly cookie; all data is looked up by that ID. **Clearing browser data or using a
  different browser/device loses the link to the profile** — acceptable for a one-off
  gift, but worth knowing before you hand over the device.
- Storage is a single JSON file at `data/db.json` (gitignored) — intentionally the
  simplest possible option for a single-user app. No external database is required to
  run this project. If you deploy to a platform with an ephemeral filesystem (e.g.
  Vercel serverless functions), `data/db.json` will **not** persist between deploys —
  see "Deploying" below.
- Palm photos are never persisted. The captured/uploaded image is downscaled client-side,
  sent to the vision model for analysis, and discarded — only the structured analysis
  (line lengths, mount levels, etc.) is stored. The "keep a small thumbnail" setting in
  Settings is present as a placeholder for a future version; thumbnail storage itself is
  not implemented in this MVP, so toggling it currently has no effect.

## Content engine

The palmistry knowledge base (`src/content/knowledgeBase.ts`) is original writing
inspired by the public-domain Hasta Samudrika Shastra tradition and Cheiro's classic
palmistry works — never copied text. Every trait has 4 variants (German/English ×
spiritual/playful tone). The composer (`src/content/composer.ts`) deterministically
stitches these into a full reading from the vision/quiz analysis — the LLM is only used
to *read the photo*, never to invent palmistry content.

## Testing

```bash
npm run test    # vitest — numerology, composer, daily insight logic
npm run lint
```

## Deploying

The straightforward path is [Vercel](https://vercel.com/new), since this is a stock
Next.js app:

1. Push this repo to GitHub/GitLab/Bitbucket and import it in Vercel, **or** run
   `npx vercel` from this directory.
2. Add the `GOOGLE_GENERATIVE_AI_API_KEY` environment variable in the Vercel project
   settings (Settings → Environment Variables). `PALMORA_VISION_MODEL` is optional.
3. Because Vercel's serverless filesystem is ephemeral, the default JSON-file store
   (`data/db.json`) will reset on every deploy. For a real gift you have two options:
   - Simplest: deploy once, don't redeploy after onboarding — fine for a single gift
     link that's used for a while and then retired.
   - More durable: swap `src/lib/store.ts` for a hosted store (e.g. a small Postgres
     database on Neon/Supabase via Prisma, or Vercel KV). The `Profile` /
     `PalmReading` / `DailyInsight` shapes are already defined in `src/lib/types.ts`,
     so only `store.ts`'s internals need to change — nothing else in the app talks to
     storage directly.
4. Any always-on host with a persistent disk (a small VM, Railway, Fly.io) works too,
   and needs no changes — `data/db.json` will simply persist on disk as-is.

## Personalizing the gift dedication

The welcome-screen dedication message is plain config, not code — edit
`welcome.dedication` in `src/messages/de.json` and `src/messages/en.json`.
