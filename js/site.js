(function () {
  var cfg = window.KHUN9 || {};
  var venue = cfg.venue || {};

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $all(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function setText(sel, value) {
    $all(sel).forEach(function (el) {
      el.textContent = value;
    });
  }

  function squareButton(url, phoneHref) {
    var href = (url || "").trim();
    if (href) {
      return (
        '<a class="btn btn-gold" href="' +
        href +
        '" target="_blank" rel="noopener noreferrer">Order for pickup</a>'
      );
    }
    return '<a class="btn btn-outline" href="' + (phoneHref || "#visit") + '">Call to order</a>';
  }

  function fillPromo(kind, item) {
    if (!item) return;
    var card = $('[data-promo="' + kind + '"]');
    if (!card) return;
    var img = $("img", card);
    if (img && item.image) {
      img.src = item.image;
      img.alt = item.name || "";
    }
    var name = $("[data-name]", card);
    if (name) name.textContent = item.name || "";
    var blurb = $("[data-blurb]", card);
    if (blurb) blurb.textContent = item.blurb || "";
    var price = $("[data-price]", card);
    if (price) price.textContent = item.price || "";
    var actions = $("[data-actions]", card);
    if (actions) actions.innerHTML = squareButton(item.squareCheckoutUrl, venue.phoneHref);
    var note = $("[data-note]", card);
    if (note) {
      note.textContent = (item.squareCheckoutUrl || "").trim()
        ? "Secure checkout with Square · pickup in Palmerston"
        : "Order at the counter, or call us to put it on for pickup.";
    }
  }

  if (cfg.monthLabel) setText("[data-month]", cfg.monthLabel);
  if (cfg.footnote) setText("[data-footnote]", cfg.footnote);
  fillPromo("dish", cfg.dish);
  fillPromo("drink", cfg.drink);

  var orderUrl = (cfg.squareOrderOnlineUrl || "").trim();
  $all("[data-order-online]").forEach(function (el) {
    if (orderUrl) {
      el.href = orderUrl;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.textContent = el.getAttribute("data-order-label") || "Order";
    } else {
      el.href = "#visit";
      el.textContent = el.getAttribute("data-visit-label") || "Visit us";
    }
  });

  var nav = $("#nav");
  var hero = $("#home");
  window.addEventListener(
    "scroll",
    function () {
      if (nav) nav.classList.toggle("is-on", window.scrollY > 24);
    },
    { passive: true },
  );

  var toggle = $("#nav-toggle");
  var mobile = $("#mobile-menu");
  function closeMobile() {
    if (!mobile) return;
    mobile.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = mobile.classList.toggle("is-open");
      document.body.style.overflow = open ? "hidden" : "";
    });
    $all("a", mobile).forEach(function (a) {
      a.addEventListener("click", closeMobile);
    });
  }

  var video = $("#hero-video");
  var media = $("#hero-media");
  function tryPlay() {
    if (!video) return;
    var p = video.play();
    if (p && p.catch) p.catch(function () {});
  }
  if (video) {
    video.addEventListener("loadeddata", function () {
      if (media) media.classList.add("is-ready");
    });
    video.addEventListener("canplay", function () {
      if (media) media.classList.add("is-ready");
      tryPlay();
    });
    tryPlay();
  }

  var tabs = $all("[data-tab]");
  var panels = $all("[data-panel]");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var id = tab.getAttribute("data-tab");
      tabs.forEach(function (t) {
        t.classList.toggle("is-on", t === tab);
      });
      panels.forEach(function (p) {
        p.hidden = p.getAttribute("data-panel") !== id;
      });
    });
  });
})();
