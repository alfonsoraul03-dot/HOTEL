# Design brief: Coastal Reserve Properties

**Design read:** Travelers choosing a private vacation home on Anna Maria Island, Florida; the register is calm, assured, golden-hour luxury, like a hospitality film rather than a listings portal.

**Business (verified from coastalreserveproperties.com, Oct 2026):** direct-booking vacation rentals, not property sales. 11 residences across Holmes Beach, Bradenton Beach and Anna Maria; booked direct through the company's Hospitable account (identifier 84dc7625), "no service fees". Socials: Instagram @coastalreserve.ami, TikTok @coastalreserveami. No phone, email, office address, history, awards or reviews are published, so none are shown.

**Concept spine:** "Arrival by air." The visitor descends onto the island at golden hour, then walks through the homes as a printed island portfolio: honest, editorial, unhurried.

**Delivery tier:** cinema (scroll-scrubbed film + transform/clip reveals and light parallax; no extra animation libraries, per the client's request to keep dependencies lean).

**Locked palette** (from the brand seal and the client's explicit art direction: deep navy, warm ivory, sand, soft stone, restrained metallic):
- Navy 950 `#07111f` (page), Navy 900 `#0b1a30`, Navy 800 `#12264a` (seal navy family)
- Ivory `#f3eee4` (type), Sand `#dcc9a6` (italic emphasis), Stone `#a8b0b8` (meta)
- Gold `#c9a96e` (single accent, from the seal's two dots)
Defense: these are the client's own seal colors and the palette they named; one dark theme page-wide, gold is the only accent.

**Locked type:** Cormorant Garamond 300/400 (+ italic) for display and pull quotes; Manrope 400 to 700 for navigation, body and labels. Serif justification: the client explicitly asked for an editorial serif; the seal itself is set in spaced classical serif capitals, so the wordmark and headlines speak the same voice.

Animation mode: animated-website

**Journey shape:** `single-shot`. One 15 s continuous take (MiniMax H3, 2K) from a high golden-hour aerial over the Gulf down to a dune-side home with a glowing pool at sunset, encoded and split into three consecutive clips at exact frame boundaries so each chapter has its own scroll band with seamless joins.

**Journey:**
1. Arrive: wide aerial of the island ribbon. Headline "Reserve Your Anna Maria Island Escape" (client's own headline), client's own positioning line, CTAs Check Availability + Explore Residences.
2. The Shore: descending along the beach. "Eleven homes. Three island towns." Body from verified listing features.
3. Your Stay: low over the dune, pool glowing. "A heated pool at every home." (true for all 11 listings). CTA Explore Residences.

**World grammar:** photoreal cinema-drone, golden hour, sun low frame right, deep navy sky to warm gold horizon, turquoise water, white sand, low palms; locked exposure; no people, no text.
**Mobile framing:** island and shoreline kept center-low; chapter copy docks at the bottom with a navy gradient; mobile encodes capped at 720p.
**Delivery budget:** desktop total at most 32 MiB (shipped 13.7 MiB), mobile total at most 16 MiB (shipped 8.4 MiB). Clips are served from the media CDN with CORS; posters ship with the site.
The journey enacts the spine literally: the page opens in the air and lands at a home.

**Honesty rule:** the film is a generated establishing shot of the coastline, never presented as a specific residence. Every residence image is the client's own listing photography.

**Section plan:**
1. Journey (scroll-scrub film, three chapters)
2. Brand intro: asymmetric editorial spread (tall photo + inset photo, serif statement, real listing quote, fact strip)
3. The Residences: featured overlap panel + staggered 12-col editorial grid with town filter
4. The Island: full-bleed parallax plate, then a town ledger (divide-y rows with hover thumbnails)
5. Why book direct: sticky photo beside a numbered-free ledger
6. Closing: full-bleed photo, headline, live Hospitable search widget, socials
Plus residence pages (residence.html?r=slug: hero, mosaic gallery with lightbox, listing text, amenities accordion, live booking calendar) and search.html results. Built as a static site (HTML/CSS/JS, no build step) for GitHub Pages.

**Asset plan:** client logo seal (favicon, touch, maskable, manifest); 8 client coastal photos; 8 client photos per residence (88 total, WebP); one generated aerial film (3 clips + mobile encodes + exact-frame posters); generated start and end keyframes used only as film inputs; OG card composed from the film's opening frame and the client's seal.

**CTA inventory:**
- Check Availability: gold block, ivory wipe from below on hover (nav, hero, closing label)
- Explore Residences: text link with a drawing rule that extends on hover
- View Residence: sand label with arrow that slides on card hover
- Book This Residence: framed outline that floods gold (detail page, above the live calendar)
- Social links: underline that turns gold
