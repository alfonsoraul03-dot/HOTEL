/* Home page: residence collection (featured + filterable editorial grid),
   town ledger and live counts. Content comes from js/residences.js. */
(function () {
  "use strict";

  var CR = window.CR;
  var RES = window.CR_RESIDENCES || [];
  var TOWNS = ["Holmes Beach", "Bradenton Beach", "Anna Maria"];
  // Row rhythm for the grid: two cards per row, alternating widths.
  var SPANS = [[7, 5], [5, 7], [4, 8], [8, 4], [6, 6]];

  function bySlug(slug) {
    for (var i = 0; i < RES.length; i++) if (RES[i].slug === slug) return RES[i];
    return RES[0];
  }

  // Facts derived from the data, never typed by hand.
  var guests = RES.map(function (r) { return r.guests; });
  document.querySelectorAll('[data-count="residences"]').forEach(function (n) { n.textContent = RES.length; });
  document.querySelectorAll('[data-count="guests"]').forEach(function (n) {
    n.textContent = Math.min.apply(null, guests) + " to " + Math.max.apply(null, guests);
  });

  /* ---------- Collection ---------- */
  var filterHost = document.querySelector("[data-filter]");
  var featureHost = document.querySelector("[data-feature]");
  var gridHost = document.querySelector("[data-grid]");
  var featured = RES[0];
  var filter = "All";

  function count(option) {
    return option === "All" ? RES.length : RES.filter(function (r) { return r.town === option; }).length;
  }

  function renderFilter() {
    filterHost.innerHTML = ["All"].concat(TOWNS).map(function (option) {
      return '<button type="button" data-town="' + option + '" aria-pressed="' + (option === filter) + '">' +
        option + "<sup>" + count(option) + "</sup></button>";
    }).join("");
  }

  function renderFeature() {
    if (filter !== "All") {
      featureHost.innerHTML = "";
      return;
    }
    var r = featured;
    featureHost.innerHTML =
      '<a class="cr-feature" href="' + CR.residenceUrl(r) + '">' +
      '<div class="cr-feature__media cr-zoom" data-reveal="media"><img alt="' + CR.esc(r.name + ", " + r.town) + '" loading="lazy" src="' + r.images[0] + '" /></div>' +
      '<div class="cr-feature__panel" data-reveal>' +
      '<p class="cr-meta">Bayfront · ' + CR.esc(r.town) + "</p>" +
      '<h3 class="cr-display cr-h3">' + CR.esc(r.name) + "</h3>" +
      '<p class="cr-copy">' + CR.esc(r.title) + "</p>" +
      '<p class="cr-meta">' + CR.specLine(r).join(" · ") + "</p>" +
      '<span class="cta-view">View Residence ' + CR.ARROW + "</span></div></a>";
  }

  function renderGrid() {
    var list = filter === "All" ? RES.slice(1) : RES.filter(function (r) { return r.town === filter; });
    gridHost.innerHTML = list.map(function (r, i) {
      var row = SPANS[Math.floor(i / 2) % SPANS.length];
      return CR.cardHTML(r, row[i % 2], i % 2 === 1);
    }).join("");
  }

  function renderCollection() {
    renderFilter();
    renderFeature();
    renderGrid();
    CR.observeReveals(featureHost);
    CR.observeReveals(gridHost);
  }

  filterHost.addEventListener("click", function (e) {
    var button = e.target.closest("button[data-town]");
    if (!button) return;
    filter = button.dataset.town;
    renderCollection();
  });

  renderCollection();

  /* ---------- Town ledger ---------- */
  var STORIES = [
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
  var townsHost = document.querySelector("[data-towns]");
  townsHost.innerHTML = STORIES.map(function (s) {
    var r = bySlug(s.slug);
    return '<li class="cr-town" data-reveal><h3>' + s.town + '</h3><p class="cr-copy">' + CR.esc(s.text) + "</p>" +
      '<a class="cr-town__thumb" href="' + CR.residenceUrl(r) + '" aria-label="View ' + CR.esc(r.name) + '">' +
      '<img alt="" loading="lazy" src="' + r.images[s.image] + '" /></a></li>';
  }).join("");
  CR.observeReveals(townsHost);
})();
