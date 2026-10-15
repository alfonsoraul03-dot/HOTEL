import { useEffect, useRef } from "react";

import { BRAND } from "./brand";

const WIDGET_SRC =
  "https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js";

function loadWidgetScript() {
  if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) return;
  const script = document.createElement("script");
  script.src = WIDGET_SRC;
  script.async = true;
  document.head.appendChild(script);
}

/**
 * The company's live direct-booking search (dates, guests, live rates),
 * powered by its Hospitable account. Rendered client-side only.
 */
export function BookingSearch({ variant }: { variant: "search" | "results" }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    (window as unknown as { currentLocale?: string }).currentLocale = "en";
    const element = document.createElement("hospitable-direct-mps");
    element.setAttribute("type", "internal");
    element.setAttribute("identifier", BRAND.hospitableId);
    if (variant === "search") {
      element.setAttribute("force-enable", "true");
      element.setAttribute("results-url", "/search");
    }
    host.replaceChildren(element);
    loadWidgetScript();
    return () => host.replaceChildren();
  }, [variant]);

  return (
    <div className="cr-widget" ref={hostRef}>
      <p className="cr-widget__fallback">Loading live availability…</p>
    </div>
  );
}
