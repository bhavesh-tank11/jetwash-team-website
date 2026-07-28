# The Jet Wash Team — Website

Premium exterior cleaning services website built with Next.js 15, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Pages

- `/` — Home
- `/about`
- `/services`
- `/residential`
- `/commercial`
- `/gallery`
- `/reviews`
- `/contact`

## Notes

- Images currently use Unsplash placeholders — swap `src/lib/data.ts` and component `<Image>` sources with real project photos before going live.
- Update the domain in `src/app/layout.tsx`, `src/app/sitemap.ts` and `src/app/robots.ts` (currently `jetwashteam.com`).
- The quote form (`src/components/QuoteForm.tsx`) is UI-only right now — wire the `onSubmit` handler to your email/CRM endpoint before launch.
- Brand colors and fonts live in `tailwind.config.ts` (navy / electric blue palette, Space Grotesk + Inter).
