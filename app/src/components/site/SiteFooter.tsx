import { residences } from "@/data/residences";

import { BRAND } from "./brand";

export function SiteFooter() {
  return (
    <footer className="cr-footer">
      <div className="cr-footer__grid">
        <div className="cr-footer__brand">
          <img src="/assets/brand/seal-512.png" alt={`${BRAND.name} seal`} width={120} height={120} loading="lazy" />
          <p className="cr-copy">Vacation homes in Holmes Beach, Bradenton Beach and Anna Maria, booked direct.</p>
        </div>
        <div className="cr-footer__col">
          <h2 className="cr-label">Residences</h2>
          {residences.slice(0, 6).map((residence) => (
            <a href={`/residences/${residence.slug}`} key={residence.slug}>
              {residence.name}
            </a>
          ))}
          <a href="/#residences">All residences</a>
        </div>
        <div className="cr-footer__col">
          <h2 className="cr-label">Follow</h2>
          <a href={BRAND.instagram.url} target="_blank" rel="noreferrer">
            Instagram {BRAND.instagram.handle}
          </a>
          <a href={BRAND.tiktok.url} target="_blank" rel="noreferrer">
            TikTok {BRAND.tiktok.handle}
          </a>
          <a href="/#book">Check Availability</a>
        </div>
      </div>
      <div className="cr-footer__base">
        <span>© 2026 {BRAND.name}</span>
        <span>{BRAND.place}</span>
      </div>
    </footer>
  );
}
