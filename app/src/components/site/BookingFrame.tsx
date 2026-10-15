import { useEffect, useRef } from "react";

import { BRAND } from "./brand";

const ORIGIN = "https://booking.hospitable.com";

/** Per-residence booking calendar from the company's Hospitable account. */
export function BookingFrame({ bookingId, title }: { bookingId: string; title: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const params = new URLSearchParams(window.location.search);
    if (!params.has("adults")) params.set("adults", "2");
    params.set("theme", "multi");
    frame.src = `${ORIGIN}/widget/${BRAND.hospitableId}/${bookingId}?${params.toString()}`;

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== ORIGIN) return;
      const data = event.data as { type?: string; iframeHeight?: number } | null;
      if (data?.type === "GET_HOSPITABLE_LANGUAGE") {
        frame.contentWindow?.postMessage({ type: "SET_HOSPITABLE_LANGUAGE", language: "en" }, ORIGIN);
        return;
      }
      if (data?.iframeHeight) frame.style.height = `${data.iframeHeight}px`;
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [bookingId]);

  return (
    <div className="cr-frame">
      <iframe
        id="booking-iframe"
        loading="lazy"
        ref={frameRef}
        sandbox="allow-top-navigation allow-scripts allow-same-origin allow-popups allow-forms"
        title={`Availability and booking for ${title}`}
      />
    </div>
  );
}
