import { createFileRoute } from "@tanstack/react-router";

import { BookingSearch } from "@/components/site/BookingSearch";
import { BRAND } from "@/components/site/brand";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [{ title: `Available homes | ${BRAND.name}` }, { name: "robots", content: "noindex" }],
  }),
  component: SearchPage,
});

function SearchPage() {
  return (
    <>
      <SiteNav />
      <main className="cr-simple" id="main">
        <h1 className="cr-display cr-h2 cr-enter">
          Available <em>homes</em>
        </h1>
        <div className="cr-panel" style={{ background: "transparent", width: "100%" }}>
          <BookingSearch variant="results" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
