/* Residence page: renders one residence from js/residences.js using
   ?r=<slug>, with gallery lightbox, amenities and the live booking calendar. */
(function () {
  "use strict";

  var CR = window.CR;
  var RES = window.CR_RESIDENCES || [];
  var slug = new URLSearchParams(window.location.search).get("r");
  var r = RES.filter(function (x) { return x.slug === slug; })[0];
  if (!r) {
    window.location.replace("index.html#residences");
    return;
  }

  function $(sel) { return document.querySelector(sel); }
  function text(sel, value) { $(sel).textContent = value; }

  document.title = r.name + ", " + r.town + " | " + CR.BRAND.name;
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", r.summary.slice(0, 158));

  var hero = $("[data-hero-img]");
  hero.src = r.images[0];
  hero.alt = r.name + ", " + r.town;
  text("[data-name]", r.name);
  text("[data-subtitle]", r.title + " · " + r.town + ", Florida");
  $("[data-specs]").innerHTML = [
    [r.guests, "Guests"],
    [r.bedrooms, r.bedrooms === 1 ? "Bedroom" : "Bedrooms"],
    [r.baths, r.baths === 1 ? "Bath" : "Baths"],
  ].map(function (s) { return "<li><strong>" + s[0] + "</strong><span>" + s[1] + "</span></li>"; }).join("");

  text("[data-summary]", r.summary);
  if (r.details) {
    text("[data-details]", r.details);
    $("[data-details-block]").hidden = false;
  }
  if (r.neighborhood) {
    text("[data-hood]", r.neighborhood);
    $("[data-hood-block]").hidden = false;
  }
  $("[data-amenities]").innerHTML = r.amenities.map(function (g, i) {
    return "<details" + (i === 0 ? " open" : "") + "><summary><span>" + CR.esc(g.group) +
      '</span><span aria-hidden="true">+</span></summary><ul>' +
      g.items.map(function (item) { return "<li>" + CR.esc(item) + "</li>"; }).join("") + "</ul></details>";
  }).join("");
  if (r.license) {
    text("[data-license]", "Vacation rental certificate " + r.license);
    $("[data-license]").hidden = false;
  }

  CR.mountBookingFrame($("[data-booking-frame]"), r.bookingId, r.name);

  /* ---------- Gallery + lightbox ---------- */
  var count = r.images.length;
  $("[data-gallery]").innerHTML = r.images.map(function (src, i) {
    return '<button type="button" data-index="' + i + '" aria-label="Open photo ' + (i + 1) + " of " + count + '">' +
      '<span class="cr-zoom" style="display:block;width:100%;height:100%"><img alt="" loading="' + (i < 3 ? "eager" : "lazy") +
      '" src="' + src + '" /></span></button>';
  }).join("");

  var box = $("[data-lightbox]");
  var boxImg = $("[data-lightbox-img]");
  var index = null;
  var lastFocus = null;

  function show(i) {
    index = (i + count) % count;
    boxImg.src = r.images[index];
    boxImg.alt = r.name + ", photo " + (index + 1);
    text("[data-lightbox-count]", index + 1 + " / " + count);
  }
  function open(i) {
    lastFocus = document.activeElement;
    show(i);
    box.hidden = false;
    document.body.style.overflow = "hidden";
    box.querySelector("[data-lb=close]").focus();
  }
  function close() {
    box.hidden = true;
    index = null;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  $("[data-gallery]").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-index]");
    if (b) open(Number(b.dataset.index));
  });
  box.addEventListener("click", function (e) {
    var action = e.target.closest("[data-lb]");
    if (!action) {
      if (e.target === box) close();
      return;
    }
    if (action.dataset.lb === "close") close();
    if (action.dataset.lb === "prev") show(index - 1);
    if (action.dataset.lb === "next") show(index + 1);
  });
  window.addEventListener("keydown", function (e) {
    if (index === null) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") show(index + 1);
    if (e.key === "ArrowLeft") show(index - 1);
  });

  /* ---------- More residences ---------- */
  var sameTown = RES.filter(function (x) { return x.slug !== r.slug && x.town === r.town; }).slice(0, 3);
  var more = sameTown.length >= 2 ? sameTown : RES.filter(function (x) { return x.slug !== r.slug; }).slice(0, 3);
  var moreHost = $("[data-more]");
  moreHost.innerHTML = more.map(function (x) { return CR.cardHTML(x); }).join("");
  CR.observeReveals(document);
})();
