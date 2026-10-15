# Coastal Reserve Properties: website

Cinematic website for **Coastal Reserve Properties**, direct-booking vacation homes on Anna Maria Island, Florida (Holmes Beach, Bradenton Beach and Anna Maria).

- **Live site:** https://coastal-reserve-properties.higgsfield.app (hosted on Higgsfield)
- **Source of the content:** the company's own site, coastalreserveproperties.com. Every property, photo, description and booking link comes from there. No prices, reviews or company claims were invented.

## What's inside

| Path | What it is |
|---|---|
| `app/src/routes/index.tsx` | Home page: scroll-driven aerial film, brand intro, residences collection, the island, why book direct, live availability search |
| `app/src/routes/residences.$slug.tsx` | One page per residence: gallery, listing text, amenities, live Hospitable booking calendar |
| `app/src/routes/search.tsx` | Availability results (Hospitable search widget) |
| `app/src/data/residences.ts` | The 11 residences, transcribed from the original listings |
| `app/src/scroll-scrub-scenes.ts` | The three chapters of the opening film |
| `app/src/site/site.css` | Brand tokens and all site styles (navy, ivory, sand, gold; Cormorant Garamond + Manrope) |
| `app/src/components/site/` | Navigation, footer, booking widgets, residence card, motion |
| `app/public/assets/` | Logo, coastal photography, residence photography, film posters |
| `app/design-brief.md` | Creative direction and section plan |

Booking is powered by the company's Hospitable account (identifier `84dc7625`). The opening film clips are served from the Higgsfield media CDN.

## Run locally

```bash
cd app
bun install
bun run dev        # development server
bun run build      # production build (Cloudflare Worker)
```

The project is a React 19 + TanStack Start app deployed as a Cloudflare Worker through Higgsfield. `app/packages/` holds vendored template packages that the build expects; leave them in place.
