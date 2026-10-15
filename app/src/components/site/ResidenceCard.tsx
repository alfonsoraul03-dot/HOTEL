import type { Residence } from "@/data/residences";

export function Arrow() {
  return (
    <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden="true">
      <path d="M0 5h20M16 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function specLine(residence: Residence) {
  return [
    `${residence.guests} guests`,
    `${residence.bedrooms} ${residence.bedrooms === 1 ? "bedroom" : "bedrooms"}`,
    `${residence.baths} ${residence.baths === 1 ? "bath" : "baths"}`,
  ];
}

export function ResidenceCard({ residence, span, drop }: { residence: Residence; span?: number; drop?: boolean }) {
  return (
    <a className="cr-card" data-drop={drop ? "true" : undefined} data-span={span} href={`/residences/${residence.slug}`}>
      <div className="cr-card__media cr-zoom" data-reveal="media">
        <img alt={`${residence.name}, ${residence.town}`} decoding="async" loading="lazy" src={residence.images[0]} />
      </div>
      <div data-reveal="">
        <p className="cr-meta">{residence.town}</p>
        <h3 className="cr-card__name">{residence.name}</h3>
        <p className="cr-card__title">{residence.title}</p>
      </div>
      <ul className="cr-card__specs">
        {specLine(residence).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span className="cta-view">
        View Residence <Arrow />
      </span>
    </a>
  );
}
