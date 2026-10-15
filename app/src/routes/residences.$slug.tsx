import { createFileRoute, notFound } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";

import { BookingFrame } from "@/components/site/BookingFrame";
import { BRAND } from "@/components/site/brand";
import { Arrow, ResidenceCard } from "@/components/site/ResidenceCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteMotion } from "@/components/site/SiteMotion";
import { SiteNav } from "@/components/site/SiteNav";
import { residences } from "@/data/residences";

export const Route = createFileRoute("/residences/$slug")({
  loader: ({ params }) => {
    const residence = residences.find((r) => r.slug === params.slug);
    if (!residence) throw notFound();
    return { residence };
  },
  head: ({ loaderData }) => {
    const residence = loaderData?.residence;
    if (!residence) return {};
    const title = `${residence.name}, ${residence.town} | ${BRAND.name}`;
    const description = residence.summary.slice(0, 158);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: residence.images[0] },
      ],
    };
  },
  component: ResidencePage,
});

function ResidencePage() {
  const { residence } = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sameTown = residences.filter((r) => r.slug !== residence.slug && r.town === residence.town).slice(0, 3);
  const more = sameTown.length >= 2 ? sameTown : residences.filter((r) => r.slug !== residence.slug).slice(0, 3);
  const count = residence.images.length;

  const step = useCallback(
    (delta: number) => setLightbox((index) => (index === null ? null : (index + delta + count) % count)),
    [count],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, step]);

  return (
    <>
      <a className="cr-skip" href="#main">
        Skip to content
      </a>
      <SiteNav />
      <SiteMotion key={residence.slug} />
      <main id="main">
        <section className="cr-hero-detail">
          <div className="cr-hero-detail__img" data-parallax="0.1">
            <img alt={`${residence.name}, ${residence.town}`} fetchPriority="high" src={residence.images[0]} />
          </div>
          <div className="cr-hero-detail__text cr-enter">
            <a className="cr-back" href="/#residences">
              ← All residences
            </a>
            <h1 className="cr-display">{residence.name}</h1>
            <p className="cr-copy">
              {residence.title} · {residence.town}, Florida
            </p>
            <ul className="cr-specs">
              <li>
                <strong>{residence.guests}</strong>
                <span>Guests</span>
              </li>
              <li>
                <strong>{residence.bedrooms}</strong>
                <span>{residence.bedrooms === 1 ? "Bedroom" : "Bedrooms"}</span>
              </li>
              <li>
                <strong>{residence.baths}</strong>
                <span>{residence.baths === 1 ? "Bath" : "Baths"}</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="cr-section" style={{ paddingTop: "clamp(3rem, 6vw, 5rem)" }} aria-label="Photo gallery">
          <div className="cr-wrap cr-mosaic">
            {residence.images.map((src, index) => (
              <button aria-label={`Open photo ${index + 1} of ${count}`} key={src} onClick={() => setLightbox(index)} type="button">
                <span className="cr-zoom" style={{ display: "block", width: "100%", height: "100%" }}>
                  <img alt="" loading={index < 3 ? "eager" : "lazy"} src={src} />
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="cr-section" style={{ paddingTop: 0 }}>
          <div className="cr-wrap cr-detail">
            <div className="cr-detail__main">
              <p className="cr-lead" data-reveal="">
                {residence.summary}
              </p>
              {residence.details ? (
                <div data-reveal="">
                  <h2 className="cr-label" style={{ marginBottom: "1.25rem" }}>
                    The details
                  </h2>
                  <p className="cr-prose">{residence.details}</p>
                </div>
              ) : null}
              {residence.neighborhood ? (
                <div data-reveal="">
                  <h2 className="cr-label" style={{ marginBottom: "1.25rem" }}>
                    The neighborhood
                  </h2>
                  <p className="cr-prose">{residence.neighborhood}</p>
                </div>
              ) : null}
              <div className="cr-amen">
                {residence.amenities.map((group, index) => (
                  <details key={group.group} open={index === 0}>
                    <summary>
                      <span>{group.group}</span>
                      <span aria-hidden="true">+</span>
                    </summary>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>
            <aside className="cr-detail__aside" id="reserve" aria-label="Book this residence">
              <a className="cta-book" href="#reserve">
                Book This Residence <Arrow />
              </a>
              <BookingFrame bookingId={residence.bookingId} title={residence.name} />
              {residence.license ? <p className="cr-meta">Vacation rental certificate {residence.license}</p> : null}
            </aside>
          </div>
        </section>

        <section className="cr-section" style={{ paddingTop: 0 }} aria-labelledby="more-title">
          <div className="cr-wrap" style={{ display: "grid", gap: "2.5rem" }}>
            <h2 className="cr-display cr-h3" id="more-title">
              More residences
            </h2>
            <div className="cr-more">
              {more.map((r) => (
                <ResidenceCard key={r.slug} residence={r} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />

      {lightbox !== null ? (
        <div className="cr-lightbox" role="dialog" aria-modal="true" aria-label={`${residence.name} photos`}>
          <img alt={`${residence.name}, photo ${lightbox + 1}`} src={residence.images[lightbox]} />
          <button className="cr-lightbox__close" onClick={() => setLightbox(null)} type="button" aria-label="Close">
            ×
          </button>
          <button className="cr-lightbox__prev" onClick={() => step(-1)} type="button" aria-label="Previous photo">
            ‹
          </button>
          <button className="cr-lightbox__next" onClick={() => step(1)} type="button" aria-label="Next photo">
            ›
          </button>
          <p className="cr-lightbox__count">
            {lightbox + 1} / {count}
          </p>
        </div>
      ) : null}
    </>
  );
}
