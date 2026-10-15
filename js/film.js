/* Scroll-scrubbed opening film.
   The visitor's scroll position drives the video's currentTime, forward and
   backward. The clip is fetched once as a Blob so seeking is instant, the
   poster (the film's exact first frame) holds until a real frame is painted,
   and visitors who prefer reduced motion get the poster only, with no video
   download. */
(function () {
  "use strict";

  var root = document.querySelector("[data-film]");
  if (!root) return;

  var stage = root.querySelector(".scroll-scrub__stage");
  var layer = root.querySelector(".scroll-scrub__layer");
  var chapters = Array.prototype.slice.call(root.querySelectorAll(".scroll-scrub__chapter"));
  var buttons = Array.prototype.slice.call(root.querySelectorAll("[data-chapter]"));
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var mobile = window.matchMedia("(hover: none) and (pointer: coarse), (max-width: 860px)").matches;
  var source = mobile ? "assets/film/coast-mobile.mp4" : "assets/film/coast.mp4";

  var video = null;
  var duration = 0;
  var current = 0;
  var target = 0;
  var frame = 0;
  var activeChapter = -1;

  function progress() {
    var rect = root.getBoundingClientRect();
    var total = root.offsetHeight - window.innerHeight;
    if (total <= 0) return 0;
    return Math.min(1, Math.max(0, -rect.top / total));
  }

  function setActive(index) {
    if (index === activeChapter) return;
    activeChapter = index;
    buttons.forEach(function (b, i) {
      if (i === index) b.setAttribute("aria-current", "step");
      else b.removeAttribute("aria-current");
    });
  }

  function chapterIndex() {
    var mid = window.innerHeight / 2;
    var index = 0;
    chapters.forEach(function (c, i) {
      if (c.getBoundingClientRect().top <= mid) index = i;
    });
    return index;
  }

  function tick() {
    frame = 0;
    var p = progress();
    root.style.setProperty("--ss-progress", String(p));
    setActive(chapterIndex());
    if (!video || !duration) return;
    target = p * (duration - 0.05);
    current += (target - current) * 0.18;
    if (Math.abs(target - current) < 0.002) current = target;
    if (!video.seeking && Math.abs(video.currentTime - current) > 0.008) {
      video.currentTime = current;
    }
    if (Math.abs(target - current) > 0.002) schedule();
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(tick);
  }

  buttons.forEach(function (button, i) {
    button.addEventListener("click", function () {
      var top = chapters[i].getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  schedule();

  if (reduceMotion || !stage) return;

  fetch(source)
    .then(function (response) {
      if (!response.ok) throw new Error("Film failed: " + response.status);
      return response.blob();
    })
    .then(function (blob) {
      video = document.createElement("video");
      video.className = "scroll-scrub__video";
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.preload = "auto";
      video.src = URL.createObjectURL(blob);
      video.addEventListener("loadedmetadata", function () {
        duration = video.duration || 0;
        current = progress() * duration;
        video.currentTime = current;
      });
      video.addEventListener("seeked", function () {
        layer.dataset.videoPainted = "true";
        schedule();
      }, { once: true });
      layer.appendChild(video);
      // iOS only paints after a user gesture has touched the element once.
      var prime = function () {
        var playing = video.play();
        if (playing && playing.then) playing.then(function () { video.pause(); schedule(); }).catch(function () {});
        window.removeEventListener("touchstart", prime);
        window.removeEventListener("pointerdown", prime);
      };
      window.addEventListener("touchstart", prime, { passive: true, once: true });
      window.addEventListener("pointerdown", prime, { passive: true, once: true });
    })
    .catch(function () {
      /* The poster stays: the story still reads without the film. */
    });
})();
