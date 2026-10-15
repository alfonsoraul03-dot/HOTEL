import { useEffect } from "react";

/**
 * Page motion: viewport reveals (transform and clip only, content is never
 * hidden) and light parallax on [data-parallax] images. Mounted once per page.
 * Does nothing when the visitor prefers reduced motion.
 */
export function SiteMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("cr-motion");

    const revealNodes = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    for (const node of revealNodes) observer.observe(node);

    const parallaxNodes = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const node of parallaxNodes) {
        const host = node.parentElement ?? node;
        const rect = host.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) continue;
        const speed = Number(node.dataset.parallax) || 0.1;
        const offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
        node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      for (const node of parallaxNodes) node.style.transform = "";
      root.classList.remove("cr-motion");
    };
  }, []);

  return null;
}
