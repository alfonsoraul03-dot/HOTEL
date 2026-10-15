/* Coastal Reserve Properties: shared site behaviour.
   Navigation, footer, viewport reveals, parallax, Hospitable booking widgets
   and the residence card used on several pages. No dependencies. */
(function () {
  "use strict";

  var BRAND = {
    name: "Coastal Reserve Properties",
    place: "Anna Maria Island, Florida",
    hospitableId: "84dc7625",
    instagram: { handle: "@coastalreserve.ami", url: "https://instagram.com/coastalreserve.ami" },
    tiktok: { handle: "@coastalreserveami", url: "https://tiktok.com/@coastalreserveami" },
  };

  var NAV_LINKS = [
    { href: "index.html#residences", label: "Residences" },
    { href: "index.html#island", label: "The Island" },
    { href: "index.html#direct", label: "Book Direct" },
  ];

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var ARROW =
    '<svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden="true"><path d="M0 5h20M16 1l4 4-4 4" stroke="currentColor" stroke-width="1.2"/></svg>';

  function specLine(r) {
    return [
      r.guests + " guests",
      r.bedrooms + (r.bedrooms === 1 ? " bedroom" : " bedrooms"),
      r.baths + (r.baths === 1 ? " bath" : " baths"),
    ];
  }

  function residenceUrl(r) {
    return "residence.html?r=" + encodeURIComponent(r.slug);
  }

  function cardHTML(r, span, drop) {
    return (
      '<a class="cr-card" href="' + residenceUrl(r) + '"' +
      (span ? ' data-span="' + span + '"' : "") +
      (drop ? ' data-drop="true"' : "") + ">" +
      '<div class="cr-card__media cr-zoom" data-reveal="media"><img alt="' + esc(r.name + ", " + r.town) +
      '" decoding="async" loading="lazy" src="' + esc(r.images[0]) + '" /></div>' +
      "<div data-reveal>" +
      '<p class="cr-meta">' + esc(r.town) + "</p>" +
      '<h3 class="cr-card__name">' + esc(r.name) + "</h3>" +
      '<p class="cr-card__title">' + esc(r.title) + "</p></div>" +
      '<ul class="cr-card__specs">' + specLine(r).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>" +
      '<span class="cta-view">View Residence ' + ARROW + "</span></a>"
    );
  }

  /* ---------- Navigation ---------- */
  function renderNav() {
    var host = document.querySelector("[data-site-nav]");
    if (!host) return;
    var links = NAV_LINKS.map(function (l) {
      return '<li><a class="cr-nav__link" href="' + l.href + '">' + l.label + "</a></li>";
    }).join("");
    var drawerLinks = NAV_LINKS.map(function (l) {
      return '<li><a href="' + l.href + '" tabindex="-1">' + l.label + "</a></li>";
    }).join("");
    host.outerHTML =
      '<header class="cr-nav" data-solid="false">' +
      '<a class="cr-brand" href="index.html" aria-label="' + BRAND.name + ', home">' +
      '<img src="assets/brand/seal.webp" alt="" width="44" height="44" />' +
      "<span>Coastal Reserve<small>Properties</small></span></a>" +
      '<nav aria-label="Primary"><ul class="cr-nav__links">' + links +
      '<li><a class="cta-avail cta-avail--compact" href="index.html#book"><span>Check Availability</span></a></li></ul></nav>' +
      '<button aria-controls="cr-drawer" aria-expanded="false" aria-label="Open menu" class="cr-nav__toggle" type="button"><span></span><span></span></button>' +
      "</header>" +
      '<div class="cr-drawer" data-open="false" id="cr-drawer" aria-hidden="true"><ul>' + drawerLinks +
      '<li><a href="index.html#book" tabindex="-1">Check Availability</a></li></ul>' +
      '<div class="cr-drawer__social"><a href="' + BRAND.instagram.url + '" target="_blank" rel="noreferrer" tabindex="-1">Instagram</a>' +
      '<a href="' + BRAND.tiktok.url + '" target="_blank" rel="noreferrer" tabindex="-1">TikTok</a></div></div>';

    var nav = document.querySelector(".cr-nav");
    var toggle = document.querySelector(".cr-nav__toggle");
    var drawer = document.getElementById("cr-drawer");
    var open = false;

    function setSolid() {
      nav.dataset.solid = window.scrollY > 40 || open ? "true" : "false";
    }
    function setOpen(value) {
      open = value;
      drawer.dataset.open = value ? "true" : "false";
      drawer.setAttribute("aria-hidden", value ? "false" : "true");
      toggle.setAttribute("aria-expanded", value ? "true" : "false");
      toggle.setAttribute("aria-label", value ? "Close menu" : "Open menu");
      document.body.style.overflow = value ? "hidden" : "";
      drawer.querySelectorAll("a").forEach(function (a) { a.tabIndex = value ? 0 : -1; });
      setSolid();
    }
    toggle.addEventListener("click", function () { setOpen(!open); });
    drawer.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    window.addEventListener("keydown", function (e) { if (e.key === "Escape" && open) setOpen(false); });
    window.addEventListener("scroll", setSolid, { passive: true });
    setSolid();
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    var host = document.querySelector("[data-site-footer]");
    if (!host) return;
    var list = (window.CR_RESIDENCES || []).slice(0, 6).map(function (r) {
      return '<a href="' + residenceUrl(r) + '">' + esc(r.name) + "</a>";
    }).join("");
    host.outerHTML =
      '<footer class="cr-footer"><div class="cr-footer__grid">' +
      '<div class="cr-footer__brand"><img src="assets/brand/seal-512.png" alt="' + BRAND.name + ' seal" width="120" height="120" loading="lazy" />' +
      '<p class="cr-copy">Vacation homes in Holmes Beach, Bradenton Beach and Anna Maria, booked direct.</p></div>' +
      '<div class="cr-footer__col"><h2 class="cr-label">Residences</h2>' + list + '<a href="index.html#residences">All residences</a></div>' +
      '<div class="cr-footer__col"><h2 class="cr-label">Follow</h2>' +
      '<a href="' + BRAND.instagram.url + '" target="_blank" rel="noreferrer">Instagram ' + BRAND.instagram.handle + "</a>" +
      '<a href="' + BRAND.tiktok.url + '" target="_blank" rel="noreferrer">TikTok ' + BRAND.tiktok.handle + "</a>" +
      '<a href="index.html#book">Check Availability</a></div></div>' +
      '<div class="cr-footer__base"><span>© 2026 ' + BRAND.name + "</span><span>" + BRAND.place + "</span></div></footer>";
  }

  /* ---------- Motion: reveals (transform/clip only) + parallax ---------- */
  var observer = null;
  function observeReveals(root) {
    if (reduceMotion || !observer) return;
    (root || document).querySelectorAll("[data-reveal]:not(.is-in)").forEach(function (n) { observer.observe(n); });
  }

  function initMotion() {
    if (reduceMotion) return;
    document.documentElement.classList.add("cr-motion");
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    observeReveals(document);

    var frame = 0;
    function update() {
      frame = 0;
      var vh = window.innerHeight;
      document.querySelectorAll("[data-parallax]").forEach(function (node) {
        var rect = (node.parentElement || node).getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;
        var speed = Number(node.dataset.parallax) || 0.1;
        var offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
        node.style.transform = "translate3d(0," + offset.toFixed(1) + "px,0)";
      });
    }
    function onScroll() { if (!frame) frame = requestAnimationFrame(update); }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* ---------- Hospitable booking widgets ---------- */
  var WIDGET_SRC = "https://hospitable.b-cdn.net/direct-property-search-widget/hospitable-search-widget.prod.js";

  function mountBookingSearch() {
    var host = document.querySelector("[data-booking-search]");
    if (!host) return;
    window.currentLocale = "en";
    var el = document.createElement("hospitable-direct-mps");
    el.setAttribute("type", "internal");
    el.setAttribute("identifier", BRAND.hospitableId);
    if (host.dataset.bookingSearch === "search") {
      el.setAttribute("force-enable", "true");
      el.setAttribute("results-url", "search.html");
    }
    host.replaceChildren(el);
    if (!document.querySelector('script[src="' + WIDGET_SRC + '"]')) {
      var s = document.createElement("script");
      s.src = WIDGET_SRC;
      s.async = true;
      document.head.appendChild(s);
    }
  }

  function mountBookingFrame(host, bookingId, title) {
    var ORIGIN = "https://booking.hospitable.com";
    var params = new URLSearchParams(window.location.search);
    params.delete("r");
    if (!params.has("adults")) params.set("adults", "2");
    params.set("theme", "multi");
    var frame = document.createElement("iframe");
    frame.id = "booking-iframe";
    frame.loading = "lazy";
    frame.title = "Availability and booking for " + title;
    frame.setAttribute("sandbox", "allow-top-navigation allow-scripts allow-same-origin allow-popups allow-forms");
    frame.src = ORIGIN + "/widget/" + BRAND.hospitableId + "/" + bookingId + "?" + params.toString();
    host.replaceChildren(frame);
    window.addEventListener("message", function (event) {
      if (event.origin !== ORIGIN) return;
      var data = event.data || {};
      if (data.type === "GET_HOSPITABLE_LANGUAGE") {
        frame.contentWindow.postMessage({ type: "SET_HOSPITABLE_LANGUAGE", language: "en" }, ORIGIN);
        return;
      }
      if (data.iframeHeight) frame.style.height = data.iframeHeight + "px";
    });
  }

  window.CR = {
    BRAND: BRAND,
    esc: esc,
    ARROW: ARROW,
    specLine: specLine,
    residenceUrl: residenceUrl,
    cardHTML: cardHTML,
    observeReveals: observeReveals,
    mountBookingFrame: mountBookingFrame,
    reduceMotion: reduceMotion,
  };

  renderNav();
  renderFooter();
  initMotion();
  mountBookingSearch();
})();
