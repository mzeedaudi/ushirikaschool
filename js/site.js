/* Ushirika School Kibera: shared settings, header, footer and page behaviour.

   To change the phone, email, social links or the form setup,
   edit the SITE settings below. Every page uses them. */

const SITE = {
  name: "Ushirika School Kibera",
  founded: 2000,
  phone: "0721 556 239",
  phoneLink: "+254721556239",
  whatsapp: "254721556239",
  email: "info@ushirikaschool.com",

  // Formspree sends the contact, sponsorship and newsletter forms to your email.
  // 1. Sign up at https://formspree.io with info@ushirikaschool.com
  // 2. Create a form and copy its ID (the letters after /f/ in the endpoint,
  //    for example "xpzkqwer")
  // 3. Paste it between the quotes below.
  formspreeId: "",

  mapsDirections: "https://www.google.com/maps/dir/?api=1&destination=-1.3122093,36.7940074",
  social: {
    facebook: "https://www.facebook.com/UshirikaChildrenKibera",
    instagram: "https://www.instagram.com/ushirika_school/",
    youtube: "https://www.youtube.com/@ushirikaschoolkibera3655"
  }
};

const NAV = [
  { href: "index.html", label: "Home", page: "home" },
  { href: "about.html", label: "About", page: "about" },
  { href: "academics.html", label: "Academics", page: "academics" },
  { href: "gallery.html", label: "Gallery", page: "gallery" },
  { href: "news.html", label: "News", page: "news" },
  { href: "contact.html", label: "Contact", page: "contact" }
];

const ICONS = {
  menu: '<svg class="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.6 1.6-1.6h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8v3h2.5V21h3Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M5 3.5h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.8 6.8l1.4-2.2 4.3 1.7V19a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1.2-4A8.5 8.5 0 1 1 8.4 19L4 20Z"/><path d="M9 8.5c0 3.6 2.9 6.5 6.5 6.5l1-1.6-2-1-1 .8a4.6 4.6 0 0 1-2.2-2.2l.8-1-1-2L9.5 8.5Z" stroke-width="1.4"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M4 7l8 6 8-6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>'
};

const yearsRunning = () => new Date().getFullYear() - SITE.founded;

/* Turn on animations, unless the visitor's device is set to reduce motion.
   This runs before the page is drawn, so nothing flashes before it animates. */
const MOTION = "IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (MOTION) document.documentElement.classList.add("motion");

/* ---------- Header (drawn straight away so the page doesn't jump) ---------- */
(function renderHeader() {
  const slot = document.getElementById("site-header");
  if (!slot) return;
  const current = document.body.dataset.page;
  const links = NAV.map(n =>
    `<a href="${n.href}"${n.page === current ? ' aria-current="page"' : ""}>${n.label}</a>`
  ).join("");
  slot.outerHTML = `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="wrap site-header__inner">
        <a class="brand" href="index.html">
          <img src="assets/img/logo.png" alt="" width="164" height="240">
          <span><span class="brand__name">Ushirika School</span><span class="brand__place">Laini Saba, Kibera</span></span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">${ICONS.menu}${ICONS.close}<span>Menu</span></button>
        <nav id="site-nav" class="nav" aria-label="Main">
          ${links}
          <a class="btn btn--red" href="support.html"${current === "support" ? ' aria-current="page"' : ""}>Support us</a>
        </nav>
      </div>
    </header>`;
})();

/* ---------- Footer ---------- */
function renderFooter() {
  const slot = document.getElementById("site-footer");
  if (!slot) return;
  const s = SITE.social;
  slot.outerHTML = `
    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div>
          <a class="footer-logo" href="index.html"><img src="assets/img/logo.png" alt="Ushirika School crest: Be the best" width="164" height="240"></a>
          <p>A community school in Laini Saba, Kibera, teaching children from PP1 to Senior School since ${SITE.founded}.</p>
          <p>Founded and run by <a href="https://ydfkenya.org/">Youth Development Forum (YDF)</a>.</p>
        </div>
        <div>
          <h2>Pages</h2>
          <ul>
            ${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
            <li><a href="support.html">Support us</a></li>
          </ul>
        </div>
        <div>
          <h2>Talk to us</h2>
          <ul>
            <li><a href="tel:${SITE.phoneLink}">Call ${SITE.phone}</a></li>
            <li><a href="https://wa.me/${SITE.whatsapp}">WhatsApp ${SITE.phone}</a></li>
            <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li>Laini Saba, Kibera, Nairobi</li>
          </ul>
          <div class="social">
            <a href="${s.facebook}" aria-label="Ushirika on Facebook">${ICONS.facebook}</a>
            <a href="${s.instagram}" aria-label="Ushirika on Instagram">${ICONS.instagram}</a>
            <a href="${s.youtube}" aria-label="Ushirika on YouTube">${ICONS.youtube}</a>
          </div>
        </div>
        <div class="newsletter">
          <h2>News from Ushirika</h2>
          <p>A short email each term about what your support makes possible.</p>
          <form class="js-form" data-success="You're subscribed. Look out for our next termly update.">
            <input type="hidden" name="_subject" value="Newsletter signup">
            <input type="hidden" name="form" value="Newsletter signup">
            <input type="text" name="_gotcha" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
            <label class="sr-only" for="newsletter-email">Your email address</label>
            <input id="newsletter-email" type="email" name="email" placeholder="you@example.com" required autocomplete="email">
            <button class="btn btn--red" type="submit">Subscribe</button>
            <p class="form-status" role="status" aria-live="polite"></p>
          </form>
        </div>
      </div>
      <div class="wrap footer-bottom">
        <span>&copy; <span data-current-year>${new Date().getFullYear()}</span> Ushirika School Kibera</span>
        <span>Community (APBET) school, Nairobi, Kenya</span>
      </div>
    </footer>`;
}

/* ---------- Mobile menu ---------- */
function initNav() {
  const header = document.querySelector(".site-header");
  const toggle = header && header.querySelector(".nav-toggle");
  if (!toggle) return;
  const setOpen = open => {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector("span").textContent = open ? "Close" : "Menu";
  };
  toggle.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
  header.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => setOpen(false)));
}

/* ---------- Years since 2000 (updates itself every January) ---------- */
function initYears() {
  document.querySelectorAll("[data-years]").forEach(el => { el.textContent = yearsRunning(); });
  document.querySelectorAll("[data-current-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
}

/* ---------- Counting numbers in the crest ---------- */
function initCounters() {
  const els = [...document.querySelectorAll("[data-count]")];
  if (!els.length) return;
  const fmt = n => n.toLocaleString("en-KE");
  els.forEach(el => {
    if (el.dataset.count === "years") el.dataset.count = yearsRunning();
    el.textContent = fmt(+el.dataset.count) + (el.dataset.suffix || "");
  });
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  const run = el => {
    const target = +el.dataset.count, suffix = el.dataset.suffix || "";
    const start = performance.now(), duration = 1700;
    const tick = now => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  els.forEach(el => { el.textContent = "0" + (el.dataset.suffix || ""); });
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { run(entry.target); io.unobserve(entry.target); }
    });
  }, { threshold: 0.45 });
  els.forEach(el => io.observe(el));
}

/* ---------- Partner logos: repeat the row so it scrolls without a gap ---------- */
function initMarquee() {
  document.querySelectorAll(".marquee__track").forEach(track => {
    [...track.children].forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.setAttribute("tabindex", "-1");
      track.appendChild(clone);
    });
  });
}

/* ---------- Pause / play buttons for the moving strips ---------- */
function initMarqueeToggles() {
  document.querySelectorAll(".marquee-toggle").forEach(btn => {
    const strip = document.getElementById(btn.getAttribute("aria-controls"));
    if (!strip) return;
    const what = btn.getAttribute("aria-label").replace(/^(Pause|Play) the moving /, "");
    btn.addEventListener("click", () => {
      const paused = strip.classList.toggle("is-paused");
      btn.classList.toggle("is-paused", paused);
      btn.querySelector("span").textContent = paused ? "Play" : "Pause";
      btn.setAttribute("aria-label", (paused ? "Play" : "Pause") + " the moving " + what);
    });
  });
}

/* ---------- Scroll animations ---------- */
const REVEAL = [
  // photos unveil from the bottom
  ["rv-photo", ".feature__photo, .portrait-frame, .milestones__photo, .lotte__group, .lotte__build, .story-card__photo, .wide-photo, .person__photo, .ydf__photo, .mosaic figure, .photo-row figure, .story-photo, .level__photo, .support-photo, .sponsor__photo, .callout__photo, .g-item"],
  // class ladder steps grow upwards
  ["rv-rise", ".ladder li"],
  // text and boxes fade up
  ["rv", ".section-head, .story-card__body > *, .lotte__text > *, .vonda__intro > *, .vonda__more > *, .facts > div, .team__group h3, .person__name, .person__role, .origin .prose > *, .crest, .story__text > *, .pullquote, .programmes li, .quote, .timeline li, .milestones > div, .values li, .statement, .give__panel, .fee-sheet, .form-card, .contact-list li, .level > div, .level > p, .callout > div, .paybill, .partners-intro, .strip-head, .empty, .ydf > *, .motto > *, .welcome > div:not(.feature__photo), .feature > .prose"]
];
function initReveal() {
  if (!MOTION) return;
  const items = [];
  REVEAL.forEach(([cls, selector]) => {
    document.querySelectorAll(selector).forEach(el => {
      if (el.dataset.rv) return;
      el.dataset.rv = cls;
      el.classList.add(cls);
      items.push(el);
    });
  });
  // neighbours that share a parent come in one after another (60ms apart, at most 6 steps)
  const counts = new Map();
  items.forEach(el => {
    const key = el.parentElement;
    const i = counts.get(key) || 0;
    counts.set(key, i + 1);
    el.style.setProperty("--rv-delay", Math.min(i, 6) * 60 + "ms");
  });
  // what the browser watches: the item itself, except ladder steps, which all start
  // when the ladder arrives (a fully clipped step can't be "seen" by the browser)
  const watch = new Map();
  items.forEach(el => {
    const target = el.dataset.rv === "rv-rise" ? el.parentElement : el;
    if (!watch.has(target)) watch.set(target, []);
    watch.get(target).push(el);
  });
  const reveal = el => {
    el.classList.add("is-in");
    // once it has finished, hand the element back to its normal styles (so hover effects work)
    const done = (el.dataset.rv === "rv" ? 700 : 1500) + parseInt(el.style.getPropertyValue("--rv-delay"), 10) + 150;
    setTimeout(() => el.classList.remove(el.dataset.rv, "is-in"), done);
  };
  let fired = false;
  const io = new IntersectionObserver(entries => {
    fired = true;
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);
      (watch.get(entry.target) || []).forEach(reveal);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  watch.forEach((_, target) => io.observe(target));
  // safety net: if the browser never reports anything (some preview tools), show everything
  setTimeout(() => {
    if (fired || document.visibilityState !== "visible") return;
    io.disconnect();
    items.forEach(el => el.classList.remove(el.dataset.rv, "is-in"));
  }, 3000);
}

/* ---------- Header shadow once the page is scrolled ---------- */
function initHeaderShadow() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  let ticking = false;
  const update = () => { header.classList.toggle("is-scrolled", window.scrollY > 8); ticking = false; };
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

/* ---------- Copy buttons (Paybill, account numbers) ---------- */
function initCopy() {
  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
      } catch (e) {
        const t = document.createElement("textarea");
        t.value = text; document.body.appendChild(t); t.select();
        try { document.execCommand("copy"); } catch (err) { /* ignore */ }
        t.remove();
      }
      const label = btn.textContent;
      btn.textContent = "Copied"; btn.classList.add("is-done");
      setTimeout(() => { btn.textContent = label; btn.classList.remove("is-done"); }, 1800);
    });
  });
}

/* ---------- Forms (sent through Formspree) ---------- */
function initForms() {
  document.querySelectorAll(".js-form").forEach(form => {
    form.setAttribute("novalidate", "");
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const status = form.querySelector(".form-status");
      const button = form.querySelector('[type="submit"]');
      const say = (msg, kind) => { status.textContent = msg; status.className = "form-status is-" + kind; };

      if (!form.checkValidity()) {
        const bad = form.querySelector(":invalid");
        say("Fill in the highlighted field to continue.", "error");
        if (bad) { bad.focus(); bad.reportValidity && bad.reportValidity(); }
        return;
      }
      if (!SITE.formspreeId) {
        say(`This form isn't connected yet, so nothing was sent. Email ${SITE.email} or WhatsApp ${SITE.phone} instead.`, "error");
        return;
      }
      const label = button.textContent;
      button.disabled = true; button.textContent = "Sending…";
      try {
        const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
          method: "POST", body: new FormData(form), headers: { Accept: "application/json" }
        });
        if (!res.ok) throw new Error("Formspree " + res.status);
        form.reset();
        say(form.dataset.success || "Message sent. We'll reply soon.", "success");
      } catch (err) {
        say(`Your message didn't send. Check your connection and try again, or WhatsApp us on ${SITE.phone}.`, "error");
      } finally {
        button.disabled = false; button.textContent = label;
      }
    });
  });
}

/* ---------- Gallery lightbox ---------- */
function initLightbox() {
  const links = [...document.querySelectorAll(".g-item a")];
  if (!links.length || typeof HTMLDialogElement !== "function") return;
  const dlg = document.createElement("dialog");
  dlg.className = "lightbox";
  dlg.setAttribute("aria-label", "Photo viewer");
  dlg.innerHTML = `<img alt=""><p></p><div class="lightbox__bar">
    <button type="button" data-step="-1">Previous</button>
    <button type="button" data-close>Close</button>
    <button type="button" data-step="1">Next</button></div>`;
  document.body.appendChild(dlg);
  const img = dlg.querySelector("img"), cap = dlg.querySelector("p");
  let index = 0;
  const show = i => {
    index = (i + links.length) % links.length;
    const a = links[index], thumb = a.querySelector("img");
    img.src = a.getAttribute("href");
    img.alt = thumb ? thumb.alt : "";
    const fig = a.closest("figure").querySelector("figcaption");
    cap.textContent = fig ? fig.textContent : "";
  };
  links.forEach((a, i) => a.addEventListener("click", e => { e.preventDefault(); show(i); dlg.showModal(); }));
  dlg.addEventListener("click", e => {
    if (e.target === dlg || e.target.hasAttribute("data-close")) dlg.close();
    if (e.target.dataset.step) show(index + Number(e.target.dataset.step));
  });
  dlg.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") show(index + 1);
    if (e.key === "ArrowLeft") show(index - 1);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFooter();
  initNav();
  initYears();
  initCounters();
  initMarquee();
  initMarqueeToggles();
  initReveal();
  initHeaderShadow();
  initCopy();
  initForms();
  initLightbox();
});
