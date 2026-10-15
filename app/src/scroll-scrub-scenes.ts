/**
 * Scene data for the scroll-scrub journey.
 *
 * One continuous aerial film (golden hour over a Gulf-coast barrier island)
 * split into three consecutive clips at exact frame boundaries, so each
 * chapter's seam is the very next frame of the same take. Clips are served
 * from the media CDN (CORS enabled); posters are the exact first frame of
 * each encoded clip and ship with the site.
 *
 * Keep this array a module constant. Changing its identity on every render
 * intentionally rebuilds the media controller.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

const CDN = "https://d2ol7oe51mr4n9.cloudfront.net/user_3JkTYSIMBFwy3FWXWC6OIINtfRW";

/** Brand tokens for the journey layer (navy, ivory, gold from the seal). */
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#c9a96e",
  background: "#07111f",
  ink: "#f3eee4",
  muted: "#d8d1c3",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "Beachside cottages and villas to bayfront homes across Holmes Beach, Bradenton Beach and Anna Maria. Booked direct, no service fees.",
    clip: `${CDN}/e7371684-3e29-4997-9dc0-5dd327e29bf9.mp4`,
    id: "arrive",
    kicker: "Anna Maria Island, Florida",
    label: "Arrive",
    mobileClip: `${CDN}/628d778e-c4c7-4541-ae53-fee90c862b6b.mp4`,
    mobilePoster: "/assets/world/scene-01-mobile-poster.jpg",
    poster: "/assets/world/scene-01-poster.jpg",
    scroll: 1.5,
    title: "Reserve Your Anna Maria Island Escape",
  },
  {
    align: "right",
    body: "Gulf-front villas with the sand outside the door, a lakefront home with its own fishing dock, and a bayfront house where manatees drift past the dock.",
    clip: `${CDN}/73006b7c-5592-4f0c-8fa2-1e2fa770e036.mp4`,
    id: "shore",
    label: "The Shore",
    mobileClip: `${CDN}/f07c17eb-24ff-497c-a4a3-d5285024b90d.mp4`,
    mobilePoster: "/assets/world/scene-02-mobile-poster.jpg",
    poster: "/assets/world/scene-02-poster.jpg",
    scroll: 1.5,
    title: "Eleven homes. Three island towns.",
  },
  {
    body: "From one-bedroom suites for two to a four-king retreat with a guest house for ten. Choose the home, then book it direct.",
    clip: `${CDN}/252b82a1-779c-406d-bc05-e2199f838950.mp4`,
    id: "stay",
    label: "Your Stay",
    mobileClip: `${CDN}/49fa25a5-63a5-4988-afab-1d50addc29cb.mp4`,
    mobilePoster: "/assets/world/scene-03-mobile-poster.jpg",
    poster: "/assets/world/scene-03-poster.jpg",
    scroll: 1.5,
    title: "A heated pool at every home.",
  },
];
