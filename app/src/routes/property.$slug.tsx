import { createFileRoute, redirect } from "@tanstack/react-router";

import { residences } from "@/data/residences";

// Keeps the original site's /property/<slug> links (used by the booking
// search results) working by sending them to the matching residence page.
export const Route = createFileRoute("/property/$slug")({
  beforeLoad: ({ params }) => {
    const known = residences.some((r) => r.slug === params.slug);
    throw redirect({
      to: known ? "/residences/$slug" : "/",
      params: known ? { slug: params.slug } : undefined,
      statusCode: 301,
    });
  },
});
