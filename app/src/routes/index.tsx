import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import type { ScrollScrubScene } from "@/components/scroll-scrub/scroll-scrub";
import { BookingSearch } from "@/components/site/BookingSearch";
import { BRAND } from "@/components/site/brand";
import { Arrow, ResidenceCard, specLine } from "@/components/site/ResidenceCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteMotion } from "@/components/site/SiteMotion";
import { SiteNav } from "@/components/site/SiteNav";
import { StructuredData } from "@/components/StructuredData";
import { residences } from "@/data/residences";
import type { Residence } from "@/data/residences";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  component: Index,
});

// Chapter CTAs are attached once at module level so the scenes array keeps a
// stable identity for the scrub controller.
const journeyScenes: ScrollScrubScene[] = scrollScrubScenes.map((scene, index) => {
  if (index === 0) {
    return {
      ...scene,
      actions: (
        <>
          <a className="cta-avail" href="#book">
            <span>Check Availability</span>
          </a>
          <a className="cta-explore" href="#residences">
            <span className="cta-explore__rule" aria-hidden="true" />
            Explore Residences
          </a>
        </>
      ),
    };
  }
  if (index === scrollScrubScenes.length - 1) {
    return {
      ...scene,
      actions: (
        <a className="cta-explore" href="#residences">
          <span className="cta-explore__rule" aria-hidden="true" />
          Explore Residences
        </a>
      ),
    };
  }
  return scene;
});

const TOWNS = ["Holmes Beach", "Bradenton Beach", "Anna Maria"] as const;
type Filter = "All" | (typeof TOWNS)[number];

const minGuests = Math.min(...residences.map((r) => r.guests));
const maxGuests = Math.max(...residences.map((r) => r.guests));
const featured = residences[0];
const bySlug = (slug: string) => residences.find((r) => r.slug === slug) as Residence;
const townCounts = Object.fromEntries(
  TOWNS.map((town) => [town, residences.filter((r) => r.town === town).length]),
) as Record<(typeof TOWNS)[number], number>;

// Row rhythm for the collection grid: two cards per row, alternating widths.
const SPANS: [number, number][] = [
  [7, 5],
  [5, 7],
  [4, 8],
  [8, 4],
  [6, 6],
];

const ORG_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  logo: "/assets/brand/seal-512.png",
  areaServed: "Anna Maria Island, Florida",
  sameAs: [BRAND.instagram.url, BRAND.tiktok.url],
});

function Index() {
  return (
    <>
      <StructuredData json={ORG_JSON} />
      <a className="cr-skip" href="#main">
        Skip to content
      </a>
      <SiteNav />
      <SiteMotion />
      <main id="main">
        <ScrollScrub className="cr-journey" scenes={journeyScenes} theme={scrollScrubTheme} />
        <Intro />
        <Collection />
        <Island />
        <Direct />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}

function Intro() {
  const infinite = bySlug("bayfront-home-dock-heated-pool-manatees");
  return (
    <section className="cr-section" aria-labelledby="intro-title">
      <div className="cr-wrap cr-intro">
        <div className="cr-intro__media">
          <figure data-reveal="media">
            <img alt="Palms and lawn over Tampa Bay at Infinite Views, Holmes Beach" loading="lazy" src="/assets/island/coast-5.webp" />
          </figure>
          <figure className="cr-intro__inset" data-reveal="media">
            <img alt="Heated plunge pool beside the bay at Infinite Views" loading="lazy" src="/assets/island/coast-7.webp" />
          </figure>
        </div>
        <div className="cr-intro__text">
          <h2 className="cr-display cr-h2" data-reveal="" id="intro-title">
            Island homes, <em>described honestly.</em>
          </h2>
          <p className="cr-lead" data-reveal="">
            Coastal Reserve Properties hosts {residences.length} vacation homes on Anna Maria Island.
          </p>
          <p className="cr-copy" data-reveal="">
            Every listing spells out what a home is and what it is not: how far it sits from the sand, which
            bedrooms share a bath, where the stairs are, how many cars fit. You choose with the full picture,
            then book it direct.
          </p>
          <blockquote className="cr-quote" data-reveal="">
            <p>“Some mornings, manatees drift past your dock before you've had your coffee.”</p>
            <footer>From the {infinite.name} listing, Holmes Beach</footer>
          </blockquote>
        </div>
        <dl className="cr-facts">
          <div data-reveal="">
            <dt>{residences.length}</dt>
            <dd>Residences</dd>
          </div>
          <div data-reveal="">
            <dt>{TOWNS.length}</dt>
            <dd>Island towns</dd>
          </div>
          <div data-reveal="">
            <dt>
              {minGuests} to {maxGuests}
            </dt>
            <dd>Guests per home</dd>
          </div>
          <div data-reveal="">
            <dt>Heated</dt>
            <dd>Pool at every home</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Collection() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = useMemo(
    () => (filter === "All" ? residences.slice(1) : residences.filter((r) => r.town === filter)),
    [filter],
  );

  return (
    <section className="cr-section" id="residences" aria-labelledby="residences-title">
      <div className="cr-wrap">
        <div className="cr-res-head">
          <p className="cr-label">The Collection</p>
          <h2 className="cr-display cr-h2" id="residences-title" data-reveal="">
            The Residences
          </h2>
          <div className="cr-filter" role="group" aria-label="Filter residences by town">
            {(["All", ...TOWNS] as Filter[]).map((option) => (
              <button aria-pressed={filter === option} key={option} onClick={() => setFilter(option)} type="button">
                {option}
                <sup>{option === "All" ? residences.length : townCounts[option]}</sup>
              </button>
            ))}
          </div>
        </div>

        {filter === "All" ? (
          <a className="cr-feature" href={`/residences/${featured.slug}`}>
            <div className="cr-feature__media cr-zoom" data-reveal="media">
              <img alt={`${featured.name}, ${featured.town}`} loading="lazy" src={featured.images[0]} />
            </div>
            <div className="cr-feature__panel" data-reveal="">
              <p className="cr-meta">Bayfront · {featured.town}</p>
              <h3 className="cr-display cr-h3">{featured.name}</h3>
              <p className="cr-copy">{featured.title}</p>
              <p className="cr-meta">{specLine(featured).join(" · ")}</p>
              <span className="cta-view">
                View Residence <Arrow />
              </span>
            </div>
          </a>
        ) : null}

        <div className="cr-grid">
          {visible.map((residence, index) => {
            const row = SPANS[Math.floor(index / 2) % SPANS.length];
            return (
              <ResidenceCard drop={index % 2 === 1} key={residence.slug} residence={residence} span={row[index % 2]} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

const TOWN_STORIES: { town: (typeof TOWNS)[number]; text: string; slug: string; image: number }[] = [
  {
    town: "Holmes Beach",
    text: "Quiet residential streets between Gulf and bay. Infinite Views sits directly on Tampa Bay, where its listing notes manatees and dolphins are regular morning visitors.",
    slug: "bayfront-home-dock-heated-pool-manatees",
    image: 2,
  },
  {
    town: "Bradenton Beach",
    text: "Sideways and Seagrape Cottage sit a short walk from Cortez Beach, with Bridge Street's shops and restaurants to the north.",
    slug: "beachfront-heated-pool-spa-rooftop-views",
    image: 0,
  },
  {
    town: "Anna Maria",
    text: "The island's quiet north end. Blue Pearl is a short walk to Pine Avenue's shops and restaurants and to Bayfront Park.",
    slug: "guest-suite-heated-pool-spa-walk-to-pine",
    image: 0,
  },
];

function Island() {
  return (
    <section id="island" aria-labelledby="island-title">
      <div className="cr-plate">
        <div className="cr-plate__img" data-parallax="0.12">
          <img alt="Outdoor dining by Tampa Bay at Infinite Views" loading="lazy" src="/assets/island/coast-6.webp" />
        </div>
        <div className="cr-plate__text">
          <h2 className="cr-display cr-h2" data-reveal="" id="island-title">
            Gulf on one side. <em>Bay on the other.</em>
          </h2>
          <p className="cr-copy" data-reveal="">
            Anna Maria Island is a slim barrier island off Florida's Gulf coast. Our homes sit in each of its
            three towns.
          </p>
        </div>
      </div>
      <div className="cr-section">
        <ul className="cr-wrap cr-towns">
          {TOWN_STORIES.map((story) => {
            const residence = bySlug(story.slug);
            return (
              <li className="cr-town" key={story.town} data-reveal="">
                <h3>{story.town}</h3>
                <p className="cr-copy">{story.text}</p>
                <a className="cr-town__thumb" href={`/residences/${residence.slug}`} aria-label={`View ${residence.name}`}>
                  <img alt="" loading="lazy" src={residence.images[story.image]} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Direct() {
  return (
    <section className="cr-section" id="direct" aria-labelledby="direct-title">
      <div className="cr-wrap cr-direct">
        <figure className="cr-direct__media" data-reveal="media">
          <img alt="Gulf view from a balcony on Anna Maria Island" loading="lazy" src="/assets/island/coast-4.webp" />
        </figure>
        <div className="cr-direct__body">
          <h2 className="cr-display cr-h2" data-reveal="" id="direct-title">
            Why book <em>direct.</em>
          </h2>
          <ul className="cr-ledger">
            <li data-reveal="">
              <h3>No service fees.</h3>
              <p className="cr-copy">
                Every home is reserved straight with {BRAND.name}, without a listing platform in between.
              </p>
            </li>
            <li data-reveal="">
              <h3>Live availability.</h3>
              <p className="cr-copy">
                Dates, rates and checkout for each residence come straight from the reservation calendar.
              </p>
            </li>
            <li data-reveal="">
              <h3>Plain-spoken listings.</h3>
              <p className="cr-copy">
                Layouts, bed sizes, stairs, parking and the trade-offs of each location are written out before
                you book.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="cr-close" id="book" aria-labelledby="book-title">
      <div className="cr-close__bg" data-parallax="0.08">
        <img alt="" loading="lazy" src="/assets/world/closing.webp" />
      </div>
      <div className="cr-close__inner">
        <div className="cr-close__text">
          <h2 className="cr-display cr-h2" data-reveal="" id="book-title">
            Your island stay <em>starts here.</em>
          </h2>
          <p className="cr-copy" data-reveal="">
            Pick your dates and party size to see which homes are open, with live rates.
          </p>
          <div className="cr-socials" data-reveal="">
            <a className="cta-social" href={BRAND.instagram.url} target="_blank" rel="noreferrer">
              Instagram {BRAND.instagram.handle}
            </a>
            <a className="cta-social" href={BRAND.tiktok.url} target="_blank" rel="noreferrer">
              TikTok {BRAND.tiktok.handle}
            </a>
          </div>
        </div>
        <div className="cr-close__panel">
          <div className="cr-panel">
            <p className="cr-label">Check Availability</p>
            <BookingSearch variant="search" />
          </div>
        </div>
      </div>
    </section>
  );
}
