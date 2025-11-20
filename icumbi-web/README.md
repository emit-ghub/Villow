## Icumbi Web

This folder houses the new Icumbi front-of-house built with **Next.js 15 App Router**, Prisma, and Tailwind v4. It is the successor to the Villow Rails/React stack and is optimized for SSR/SSG, server actions, and edge rendering.

### Core Tech
- **Next.js 15 App Router** with React Server Components, streaming layouts, and shared route groups.
- **Prisma + PostgreSQL (Neon/Supabase)** for typed data access to listings, cities, favorites, and search history.
- **NextAuth.js** for credentials or OAuth flows persisted through the Prisma adapter.
- **Algolia + Mapbox** for geo search, suggestions, and interactive map tiles.
- **UploadThing / S3** for client-side uploads routed through signed URLs.
- **Tailwind CSS / Radix UI** for component scaffolding with consistent design tokens.

### Local Development
```bash
cp .env.example .env.local  # provide database, auth, mapbox, algolia, uploadthing credentials
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Navigate to `http://localhost:3000` to view the landing experience.

### Useful Scripts
- `npm run prisma:generate` – regenerate Prisma client after schema edits.
- `npm run prisma:migrate` – create/update your dev database.
- `npm run db:seed` – seed demo listings (defined in `prisma/seed.ts`).
- `npm run typecheck` and `npm run lint` – CI-safe verification steps before pushing to Vercel.

### Deployment Checklist
1. Provision Neon/Supabase, Algolia, Mapbox, and UploadThing credentials and add them to the Vercel project.
2. Enable Vercel’s Prisma Data Proxy or connection pooling via the `DIRECT_URL`.
3. Wire optional observability (Sentry/Logtail) in `src/lib/observability.ts`.
4. Configure preview deployments and GitHub Actions to run `typecheck`, `lint`, `prisma generate`, and Playwright/Cypress suites.
