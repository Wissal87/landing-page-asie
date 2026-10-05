/* ============================================================
   Maghrib Explor — L'Asie : Kuala Lumpur & Bali · Landing page
   JavaScript (sans dépendance)
   ------------------------------------------------------------
   À PERSONNALISER :
   · WHATSAPP  → le numéro WhatsApp de l'agence (format international,
                 sans "+" ni espaces).  Ex. Maroc : 2126XXXXXXXX
   · PROGRAMME / AU PROGRAMME → les textes et les photos ci-dessous.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Réglages ---------- */
  var WHATSAPP = "212667999209";

  var IMG = "https://images.unsplash.com/";
  var img = function (id, w) {
    return IMG + id + "?auto=format&fit=crop&w=" + (w || 1000) + "&q=80";
  };
  var waLink = function (msg) {
    return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
  };
  var icon = function (name) {
    return '<svg class="ico" aria-hidden="true"><use href="#i-' + name + '"/></svg>';
  };

  /* ---------- 1. Données : au programme (carrousel) ---------- */
  var atouts = [
    {
      title: "Kuala Lumpur & Grottes de Batu",
      text: "Les Tours Petronas, le Palais Royal, Merdeka Square et les impressionnantes Grottes de Batu.",
      image: "photo-1569136143047-07c0fac16776",
      alt: "Statue dorée monumentale à l'entrée des Grottes de Batu, Malaisie"
    },
    {
      title: "Ubud & ses trésors culturels",
      text: "Monkey Forest, Ubud Palace, temple de Batuan, rizières de Tegalalang et plantation de café balinais.",
      image: "photo-1559628233-eb1b1a45564b",
      alt: "Vue aérienne des rizières en terrasses de Tegalalang près d'Ubud, Bali"
    },
    {
      title: "Blue Lagoon & Monkey Bar",
      text: "Snorkeling dans des eaux cristallines, puis vue sur l'océan et la jungle au bord de la piscine.",
      image: "photo-1637308109237-4ea1a7dd22f5",
      alt: "Récif corallien coloré et poissons sous la surface"
    },
    {
      title: "Nusa Penida, plages paradisiaques",
      text: "Traversée en speedboat et transport privé sur l'île, entre plages et paysages spectaculaires.",
      image: "photo-1560103104-4623c14a473b",
      alt: "Plage de Kelingking et falaises au-dessus de l'eau turquoise, Nusa Penida"
    },
    {
      title: "Temple d'Uluwatu & danse Kecak",
      text: "Un temple perché sur une falaise face à l'océan Indien, puis la célèbre danse du feu au coucher du soleil.",
      image: "photo-1576019206484-54273acdfa89",
      alt: "Falaise du temple d'Uluwatu au-dessus de l'océan au coucher du soleil, Bali"
    },
    {
      title: "Sensations fortes à Bali",
      text: "Une session de jet-ski suivie d'un parachute ascensionnel, avec vue panoramique sur le littoral.",
      image: "photo-1505738313577-5357ff512f16",
      alt: "Deux personnes en parachute ascensionnel au-dessus de la mer, près de la plage"
    }
  ];

  /* ---------- 2. Données : programme jour par jour ---------- */
  var programme = [
    {
      day: 1,
      title: "Casablanca → Kuala Lumpur",
      image: "photo-1539612793508-4539a972242b",
      alt: "Avion au-dessus des nuages à l'heure dorée",
      items: [
        { ic: "clock", t: "Rendez-vous à l'aéroport Mohammed V pour les formalités d'enregistrement." },
        { ic: "plane", t: "Envol vers Kuala Lumpur." },
        { ic: "utensils", t: "Repas et nuit à bord." }
      ]
    },
    {
      day: 2,
      title: "Arrivée à Kuala Lumpur",
      image: "photo-1593923874587-127a467b2731",
      alt: "Vue aérienne de Kuala Lumpur illuminée de nuit",
      items: [
        { ic: "users", t: "Accueil à l'aéroport." },
        { ic: "van", t: "Transfert vers votre hôtel." },
        { ic: "hotel", t: "Installation et temps libre pour une première découverte de la capitale malaisienne. Nuit à l'hôtel." }
      ]
    },
    {
      day: 3,
      title: "Découverte de Kuala Lumpur",
      image: "photo-1546273300-70f00c0fc1a0",
      alt: "Les Tours Petronas à Kuala Lumpur",
      items: [
        { ic: "coffee", t: "Petit-déjeuner à l'hôtel." },
        { ic: "city", t: "Journée libre ou excursion optionnelle : les célèbres Tours Petronas, le Palais Royal, Merdeka Square et les impressionnantes Grottes de Batu." },
        { ic: "bag", t: "En fin de journée, l'ambiance animée de Bukit Bintang, quartier incontournable du shopping et de la gastronomie locale." },
        { ic: "hotel", t: "Nuit à l'hôtel." }
      ],
      option: {
        label: "Excursion optionnelle : Kuala Lumpur & Grottes de Batu",
        text: "Tours Petronas, Palais Royal, Merdeka Square et Grottes de Batu.",
        price: "650 DHS"
      }
    },
    {
      day: 4,
      title: "Kuala Lumpur à votre rythme",
      image: "photo-1554846157-b9e7eb178e02",
      alt: "Visiteur devant les Tours Petronas",
      items: [
        { ic: "coffee", t: "Petit-déjeuner à l'hôtel." },
        { ic: "sun", t: "Journée libre pour explorer la ville selon vos envies : centres commerciaux, cafés branchés ou richesse culturelle de Kuala Lumpur." },
        { ic: "hotel", t: "Nuit à l'hôtel." }
      ]
    },
    {
      day: 5,
      title: "Kuala Lumpur → Bali",
      image: "photo-1544644181-1484b3fdfc62",
      alt: "Temple balinais au bord d'un lac, Bali",
      items: [
        { ic: "coffee", t: "Petit-déjeuner à l'hôtel." },
        { ic: "plane", t: "Transfert à l'aéroport et envol vers Bali." },
        { ic: "van", t: "À votre arrivée, accueil et transfert vers votre hôtel à Seminyak." }
      ]
    },
    {
      day: 6,
      title: "Excursion optionnelle à Ubud",
      image: "photo-1559628233-100c798642d4",
      alt: "Vue aérienne de rizières en terrasses à Bali",
      items: [
        { ic: "coffee", t: "Petit-déjeuner à l'hôtel." },
        { ic: "paw", t: "Monkey Forest, célèbre sanctuaire abritant des centaines de singes en liberté." },
        { ic: "home", t: "Ubud Palace, ancienne résidence royale au cœur de la ville." },
        { ic: "temple", t: "Temple de Batuan, remarquable exemple de l'architecture balinaise traditionnelle." },
        { ic: "palm", t: "Les magnifiques rizières en terrasses de Tegalalang." },
        { ic: "coffee", t: "Une plantation de café balinais avec dégustation de spécialités locales." },
        { ic: "hotel", t: "Retour et nuit à l'hôtel." }
      ],
      option: {
        label: "Excursion optionnelle : Découverte d'Ubud",
        text: "Monkey Forest, Ubud Palace, temple de Batuan, rizières de Tegalalang et plantation de café.",
        price: "750 DHS"
      }
    },
    {
      day: 7,
      title: "Blue Lagoon & Monkey Bar",
      image: "photo-1682687981630-cefe9cd73072",
      alt: "Personne en snorkeling au-dessus d'un récif corallien",
      items: [
        { ic: "coffee", t: "Petit-déjeuner à l'hôtel." },
        { ic: "waves", t: "Blue Lagoon, l'un des plus beaux sites de snorkeling de Bali : eaux cristallines, récifs coralliens colorés et vie marine exceptionnelle." },
        { ic: "sun", t: "Monkey Bar : vue spectaculaire sur l'océan et la jungle, et moment de détente au bord de la piscine." },
        { ic: "hotel", t: "Retour et nuit à l'hôtel." }
      ],
      option: {
        label: "Excursion optionnelle : Blue Lagoon & Monkey Bar",
        text: "Snorkeling au Blue Lagoon, puis détente au Monkey Bar.",
        price: "650 DHS"
      }
    },
    {
      day: 8,
      title: "Évasion à Nusa Penida",
      image: "photo-1573790387438-4da905039392",
      alt: "Diamond Beach, sable blanc et eau turquoise sous les falaises de Nusa Penida",
      items: [
        { ic: "coffee", t: "Petit-déjeuner à l'hôtel." },
        { ic: "boat", t: "Journée libre ou excursion optionnelle : traversée en speedboat vers Nusa Penida." },
        { ic: "van", t: "Transport privé sur l'île." },
        { ic: "camera", t: "Découverte de plages paradisiaques et de paysages spectaculaires." },
        { ic: "hotel", t: "Retour et nuit à l'hôtel." }
      ],
      option: {
        label: "Excursion optionnelle : Nusa Penida",
        text: "Speedboat, transport privé sur l'île, plages et paysages.",
        price: "950 DHS"
      }
    },
    {
      day: 9,
      title: "Détente à Seminyak",
      image: "photo-1546484475-7f7bd55792da",
      alt: "Parasol blanc et transat face à la mer, Bali",
      items: [
        { ic: "coffee", t: "Petit-déjeuner à l'hôtel." },
        { ic: "sun", t: "Profitez librement des plages de Seminyak, réputées pour leur ambiance élégante et leurs couchers de soleil exceptionnels." },
        { ic: "hotel", t: "Nuit à l'hôtel." }
      ]
    },
    {
      day: 10,
      title: "Sensations fortes à Bali",
      image: "photo-1632904074880-b77f02b6d01e",
      alt: "Parachute ascensionnel tiré par un bateau au-dessus de la mer",
      items: [
        { ic: "coffee", t: "Petit-déjeuner à l'hôtel." },
        { ic: "waves", t: "Journée libre ou activité optionnelle : session de jet-ski suivie d'un parachute ascensionnel." },
        { ic: "camera", t: "Adrénaline, vue panoramique sur le littoral et sensations uniques." },
        { ic: "hotel", t: "Nuit à l'hôtel." }
      ],
      option: {
        label: "Activité optionnelle : Jet-ski & parachute ascensionnel",
        text: "Session de jet-ski, puis vol en parachute ascensionnel.",
        price: "650 DHS"
      }
    },
    {
      day: 11,
      title: "Uluwatu & danse Kecak",
      image: "photo-1576019206484-54273acdfa89",
      alt: "Falaise du temple d'Uluwatu au-dessus de l'océan Indien",
      items: [
        { ic: "coffee", t: "Petit-déjeuner à l'hôtel." },
        { ic: "temple", t: "Excursion optionnelle vers le majestueux Temple d'Uluwatu, perché au sommet d'une falaise dominant l'océan Indien." },
        { ic: "flame", t: "En fin de journée, le célèbre spectacle de la danse Kecak, aussi appelée danse du feu, l'une des représentations les plus emblématiques de Bali." },
        { ic: "van", t: "Transfert vers votre hôtel à Uluwatu et nuitée." }
      ],
      option: {
        label: "Excursion optionnelle : Temple d'Uluwatu & spectacle Kecak",
        text: "Visite du temple, puis danse du feu en fin de journée.",
        price: "650 DHS"
      }
    },
    {
      day: 12,
      title: "Bali → Kuala Lumpur",
      image: "photo-1558015382-91941d28e892",
      alt: "Les Tours Petronas en journée, Kuala Lumpur",
      items: [
        { ic: "coffee", t: "Petit-déjeuner à l'hôtel." },
        { ic: "plane", t: "Transfert à l'aéroport de Bali et envol vers Kuala Lumpur." },
        { ic: "van", t: "À l'arrivée, accueil et transfert à l'hôtel." },
        { ic: "hotel", t: "Nuit à l'hôtel." }
      ]
    },
    {
      day: 13,
      title: "Derniers instants à Kuala Lumpur",
      image: "photo-1720515030709-8400a676d205",
      alt: "Fontaine illuminée au pied des gratte-ciel de Kuala Lumpur, la nuit",
      items: [
        { ic: "coffee", t: "Petit-déjeuner à l'hôtel." },
        { ic: "bag", t: "Journée libre pour vos derniers achats, visites ou découvertes personnelles." },
        { ic: "hotel", t: "Nuit à l'hôtel." }
      ]
    },
    {
      day: 14,
      title: "Kuala Lumpur → Casablanca",
      image: "photo-1539612793508-4539a972242b",
      alt: "Avion au-dessus des nuages",
      items: [
        { ic: "coffee", t: "Petit-déjeuner à l'hôtel." },
        { ic: "van", t: "Transfert à l'aéroport pour votre vol retour." },
        { ic: "plane", t: "Vol retour vers Casablanca." },
        { ic: "pin", t: "Arrivée à Casablanca et fin de nos services." }
      ]
    }
  ];

  /* ---------- 3. Rendu : carrousel des atouts ---------- */
  function renderAtouts() {
    var track = document.getElementById("carTrack");
    var dots = document.getElementById("carDots");
    if (!track) return;

    track.innerHTML = atouts
      .map(function (a, i) {
        return (
          '<div class="car__card reveal" style="--i:' + i + '">' +
            '<article class="card">' +
              '<div class="card__media">' +
                '<img src="' + img(a.image, 900) + '" alt="' + a.alt + '" loading="lazy" />' +
              "</div>" +
              '<div class="card__body">' +
                '<h3 class="h3">' + a.title + "</h3>" +
                '<p class="card__text">' + a.text + "</p>" +
              "</div>" +
            "</article>" +
          "</div>"
        );
      })
      .join("");

    if (dots) {
      dots.innerHTML = atouts
        .map(function (_, i) {
          return '<button class="dot' + (i === 0 ? " is-active" : "") + '" data-dot="' + i + '" aria-label="Aller à la carte ' + (i + 1) + '"></button>';
        })
        .join("");
    }
  }

  /* ---------- 4. Rendu : programme ---------- */
  function renderProgramme() {
    var wrap = document.getElementById("timeline");
    if (!wrap) return;

    wrap.innerHTML = programme
      .map(function (d, i) {
        var badge = d.offert
          ? '<span class="tag-offert">' + icon("gift") + " Activité offerte</span>"
          : "";

        var option = d.option
          ? '<div class="tl__option">' +
              "<b>" + d.option.label + "</b><br />" +
              "<span>" + d.option.text + "</span><br />" +
              '<span class="tl__price">' + d.option.price + "</span>" +
            "</div>"
          : "";

        var items = d.items
          .map(function (it) {
            return "<li>" + icon(it.ic || "check") + "<span>" + it.t + "</span></li>";
          })
          .join("");

        return (
          '<div class="tl__item reveal" style="--i:' + Math.min(i, 4) + '">' +
            '<div class="tl__marker"><small>JOUR</small><b>' + d.day + "</b></div>" +
            '<article class="tl__card">' +
              '<div class="tl__media"><img src="' + img(d.image, 700) + '" alt="' + d.alt + '" loading="lazy" /></div>' +
              '<div class="tl__body">' +
                '<div class="tl__head"><h3 class="h3">' + d.title + "</h3>" + badge + "</div>" +
                '<ul class="tl__list">' + items + "</ul>" +
                option +
              "</div>" +
            "</article>" +
          "</div>"
        );
      })
      .join("");
  }

  /* ---------- 5. Liens WhatsApp ---------- */
  function initWhatsapp() {
    var links = document.querySelectorAll("[data-wa]");
    Array.prototype.forEach.call(links, function (a) {
      a.href = waLink(a.getAttribute("data-wa"));
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    });
  }

  /* ---------- 6. Apparition au défilement ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  /* ---------- 7. Carrousel : flèches, points, glisser ---------- */
  function initCarousel() {
    var track = document.getElementById("carTrack");
    var prev = document.getElementById("carPrev");
    var next = document.getElementById("carNext");
    var dotsWrap = document.getElementById("carDots");
    if (!track) return;

    function step() {
      var card = track.querySelector(".car__card");
      return card ? card.getBoundingClientRect().width + 18 : 320;
    }

    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });

    function refresh() {
      var dots = track.parentNode.querySelectorAll(".dot");
      var index = Math.round(track.scrollLeft / step());
      Array.prototype.forEach.call(dots, function (d, i) {
        d.classList.toggle("is-active", i === Math.min(index, dots.length - 1));
      });
      if (prev) prev.disabled = track.scrollLeft < 8;
      if (next) next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 8;
    }
    track.addEventListener("scroll", function () { window.requestAnimationFrame(refresh); }, { passive: true });
    window.addEventListener("resize", refresh);
    setTimeout(refresh, 250);

    if (dotsWrap) {
      dotsWrap.addEventListener("click", function (e) {
        var dot = e.target.closest("[data-dot]");
        if (!dot) return;
        track.scrollTo({ left: parseInt(dot.getAttribute("data-dot"), 10) * step(), behavior: "smooth" });
      });
    }

    // Glisser à la souris (ordinateur)
    var down = false, startX = 0, startScroll = 0;
    track.addEventListener("mousedown", function (e) {
      down = true; startX = e.pageX; startScroll = track.scrollLeft;
    });
    window.addEventListener("mouseup", function () { down = false; });
    track.addEventListener("mousemove", function (e) {
      if (!down) return;
      e.preventDefault();
      track.scrollLeft = startScroll - (e.pageX - startX);
    });
  }

  /* ---------- 8. Compteurs de prix ---------- */
  function initCounters() {
    var counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;

    function animate(el, target) {
      var duration = 1300;
      var start = performance.now();
      function tick(now) {
        var p = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString("fr-FR");
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(counters, function (c) {
        c.textContent = parseInt(c.getAttribute("data-count"), 10).toLocaleString("fr-FR");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animate(entry.target, parseInt(entry.target.getAttribute("data-count"), 10));
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    Array.prototype.forEach.call(counters, function (c) { io.observe(c); });
  }

  /* ---------- 9. En-tête + barre mobile ---------- */
  function initChrome() {
    var header = document.getElementById("header");
    var bar = document.getElementById("mobilebar");
    var last = 0;

    window.addEventListener(
      "scroll",
      function () {
        var y = window.scrollY;
        if (header) header.classList.toggle("is-stuck", y > 20);
        if (bar) bar.classList.toggle("is-visible", y > window.innerHeight * 0.8);
        last = y;
      },
      { passive: true }
    );
  }

  /* ---------- Démarrage ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderAtouts();
    renderProgramme();
    initWhatsapp();
    initCarousel();
    initCounters();
    initChrome();
    requestAnimationFrame(initReveal);
  });
})();

