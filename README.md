# BKING Phones & Gadgets — Vercel Edition

This is the Vercel-ready export of the BKING Phones & Gadgets site, built with
TanStack Start (React 19 + Vite 7 + Tailwind v4).

## Deploy on Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. Import the repo in Vercel → **New Project**.
3. Framework Preset: **Other** (the included `vercel.json` handles it).
4. Build Command: `bun run build` (auto from `vercel.json`).
5. Install Command: `bun install` (auto from `vercel.json`).
6. Output: handled automatically by the TanStack Start Vercel target.
7. Click **Deploy**.

No environment variables are required — the site is fully static content.
If you later add Lovable Cloud / Supabase, copy `.env.example` to project
env vars in Vercel.

## Local development

```bash
bun install
bun run dev      # http://localhost:5173
bun run build    # production build
bun run preview  # preview the production build
```

## What changed vs. the Lovable in-editor version

- `vite.config.ts` now uses TanStack Start's `vercel` target instead of the
  Cloudflare Workers target.
- `wrangler.jsonc` and `src/server.ts` (Cloudflare Workers entry) are no
  longer needed for Vercel and have been removed.
- Added `vercel.json` with build/install commands.

Everything else (routes, components, assets, styles, design tokens) is
identical to the Lovable project.
