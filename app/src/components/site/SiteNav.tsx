import { useEffect, useState } from "react";

import { BRAND, NAV_LINKS } from "./brand";

export function SiteNav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const tab = open ? 0 : -1;

  return (
    <>
      <header className="cr-nav" data-solid={solid || open ? "true" : "false"}>
        <a className="cr-brand" href="/" aria-label={`${BRAND.name}, home`}>
          <img src={BRAND.seal} alt="" width={44} height={44} />
          <span>
            Coastal Reserve
            <small>Properties</small>
          </span>
        </a>
        <nav aria-label="Primary">
          <ul className="cr-nav__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="cr-nav__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a className="cta-avail cta-avail--compact" href="/#book">
                <span>Check Availability</span>
              </a>
            </li>
          </ul>
        </nav>
        <button
          aria-controls="cr-drawer"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="cr-nav__toggle"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span />
          <span />
        </button>
      </header>
      <div className="cr-drawer" data-open={open ? "true" : "false"} id="cr-drawer" aria-hidden={!open}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close} tabIndex={tab}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/#book" onClick={close} tabIndex={tab}>
              Check Availability
            </a>
          </li>
        </ul>
        <div className="cr-drawer__social">
          <a href={BRAND.instagram.url} target="_blank" rel="noreferrer" tabIndex={tab}>
            Instagram
          </a>
          <a href={BRAND.tiktok.url} target="_blank" rel="noreferrer" tabIndex={tab}>
            TikTok
          </a>
        </div>
      </div>
    </>
  );
}
