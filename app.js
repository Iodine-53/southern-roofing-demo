/* THE 65-YEAR DOSSIER — behavior */
(function(){
  "use strict";
  var ease = "cubic-bezier(.19,1,.22,1)";

  /* live Tampa time + open status */
  try {
    var timeEl = document.getElementById("local-time");
    var statusEl = document.getElementById("open-status");
    var fmt = new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",hour:"numeric",minute:"2-digit",hour12:true});
    function tick(){
      var now = new Date();
      timeEl.textContent = fmt.format(now);
      var hr = parseInt(new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",hour:"numeric",hour12:false}).format(now),10);
      if (hr >= 7 && hr < 19) {
        statusEl.textContent = "WORK ORDERS OPEN";
        statusEl.style.color = "#8fd18f";
      } else {
        statusEl.textContent = "NEXT DISPATCH 7 AM";
        statusEl.style.color = "#e0b13e";
      }
    }
    tick(); setInterval(tick, 30000);
  } catch(e){}

  /* burger */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("site-nav");
  burger.addEventListener("click", function(){
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.addEventListener("click", function(e){
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded","false");
      burger.setAttribute("aria-label","Open menu");
    }
  });

  /* reveals: blur-to-sharp (type) / wipe (photos); 3.5s backstop */
  var targets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, {threshold:.12, rootMargin:"0px 0px -8% 0px"});
    targets.forEach(function(t){ io.observe(t); });
  }
  setTimeout(function(){
    targets.forEach(function(t){ t.classList.add("in"); });
  }, 3500);

  /* work-order form -> mailto handoff */
  var form = document.getElementById("work-order");
  var errEl = document.getElementById("wo-error");
  var received = document.getElementById("wo-received");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    var building = document.getElementById("wo-building").value.trim();
    if (!building) {
      errEl.hidden = false;
      document.getElementById("wo-building").focus();
      return;
    }
    errEl.hidden = true;
    var age = document.getElementById("wo-age").value;
    var leak = document.getElementById("wo-leak").value;
    var time = document.getElementById("wo-time").value;
    var subject = encodeURIComponent("WORK ORDER 00481 — " + building);
    var body = encodeURIComponent(
      "BUILDING: " + building + "\n" +
      "ROOF AGE: " + age + " years\n" +
      "LEAK STATUS: " + leak + "\n" +
      "CALL BACK: " + time + "\n\n" +
      "Opened from the website."
    );
    received.hidden = false;
    window.location.href = "mailto:sueallen@southroof.com?subject=" + subject + "&body=" + body;
  });

  /* mobile sticky bar: show after hero, hide over final CTA */
  var bar = document.getElementById("mobile-bar");
  var hero = document.querySelector(".hero");
  var final = document.getElementById("contact");
  function onScroll(){
    var y = window.scrollY || window.pageYOffset;
    var past = hero && y > hero.offsetTop + hero.offsetHeight - 120;
    var overFinal = false;
    if (final) {
      var r = final.getBoundingClientRect();
      overFinal = r.top < window.innerHeight * .6 && r.bottom > 200;
    }
    if (past && !overFinal && window.innerWidth <= 900) bar.classList.add("show");
    else bar.classList.remove("show");
  }
  window.addEventListener("scroll", onScroll, {passive:true});
  window.addEventListener("resize", onScroll);
  onScroll();

  /* footer year */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
