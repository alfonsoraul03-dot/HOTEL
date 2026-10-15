# Coastal Reserve Properties: website

Cinematic website for **Coastal Reserve Properties**, direct-booking vacation homes on Anna Maria Island, Florida (Holmes Beach, Bradenton Beach and Anna Maria).

Static HTML/CSS/JS with no build step and no dependencies. Open `index.html`, or serve the folder with any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

```
python3 -m http.server 8000   # → http://localhost:8000
```

All content comes from the company's own site, coastalreserveproperties.com: every residence, photo, description and booking link. No prices, reviews or company claims were invented.

## Structure

| File | Purpose |
|---|---|
| `index.html` | Home: scroll-driven aerial film (3 chapters) → brand intro → residences collection with town filter → the island → why book direct → live availability search → footer |
| `residence.html` | Residence page (`residence.html?r=<slug>`): gallery with lightbox, listing text, amenities, live booking calendar |
| `search.html` | Availability results from the booking search |
| `404.html` | Not-found page; also redirects old `/property/<slug>` links to the matching residence |
| `css/styles.css` | Design system: navy, ivory, sand and gold from the brand seal; Cormorant Garamond + Manrope; reveals, parallax, responsive, reduced motion |
| `js/residences.js` | **Residence data**: the 11 homes, transcribed from the original listings |
| `js/site.js` | Navigation, mobile menu, footer, reveals, parallax, Hospitable booking widgets |
| `js/film.js` | Scroll-scrubbed opening film (poster only when the visitor prefers reduced motion) |
| `js/home.js` / `js/residence.js` | Page rendering |
| `assets/` | Brand seal and icons, coastal photography, residence photography, the opening film and its posters |
| `design-brief.md` | Creative direction and section plan |

## Booking

Availability, rates and checkout come from the company's Hospitable account (identifier `84dc7625`, set in `js/site.js`). The home page search widget sends results to `search.html`; each residence page embeds its own Hospitable calendar.

## Publishing on GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)`. The site is then served at `https://alfonsoraul03-dot.github.io/HOTEL/`.

## Credits

The opening aerial film is AI-generated (Higgsfield) as an atmospheric establishing shot of the Gulf coast; it does not depict a specific residence. All residence photography belongs to Coastal Reserve Properties.
