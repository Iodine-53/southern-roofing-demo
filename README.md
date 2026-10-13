# Southern Roofing Company demo — "THE 65-YEAR DOSSIER"

**LOCAL ONLY — never deployed, never sent.** Built 2026-10-13 as a cold-pitch demo for
Southern Roofing Company Inc (Tampa, FL). Preview screenshots only; deploy to Vercel only
with Emmanuel's explicit approval. Demo facts (prices, reviews, case files, the foreman)
are marked **Illustrative** on the page; real facts used: business name, phone
(813) 251-5252, email sueallen@southroof.com, Tampa FL commercial re-roofing, founded 1960.

## Concept
**THE 65-YEAR DOSSIER** — an archival case file for a company older than most of the
buildings it roofs. The whole page is a kraft/manila dossier: case numbers, declassified
file cards, typed mono, rubber-stamp red marks. Commercial roofing sells a *booking*
(inspection/core-cut), so the hero's primary path is a **work-order request form**
(building name, roof age, leak status, callback time) that hands off via a stated
mailto to sueallen@southroof.com; the phone is the secondary path as a bare `tel:` link.
Longevity is the proof: a scrollable case-files timeline (1960s→2020s, invented but
plausible Tampa building types) closes the trust argument before any testimonial.

## Art-direction triple
**archival / plainspoken / institutional** — kraft paper ground (#d9c196), black ink
(#1b1512), rubber-stamp red (#a8261c) used **only** on primary CTAs and stamp marks.
Stardos Stencil (stencil authority) display + IBM Plex Mono for *everything else*
(typed-document voice). One custom `--ease` (`cubic-bezier(.19,1,.22,1)`); entrances are
blur-to-sharp (type) and clip-path wipe (photos) only — never fade-ups; everything
completes within 3.5s with zero interaction (backstop asserted). Fine SVG grain on the
two ink bands; hairline 1px borders, sharp corners, zero shadows.

## Broken convention / broken-grid rule
**One rule, applied consistently:** every rubber-stamp mark sits at a fixed offset —
`top:-18px; right:-18px; transform:rotate(-8deg)` — on its container: the hero
"RE-ROOF APPROVED" seal, every case file's "STILL DRY" stamp, the work order's
"RECEIVED" stamp. Same geometry everywhere = authorship, not accidents.

## Signature interactive elements
1. **Work-order request form in the hero** — 4 document-styled fields; submit builds a
   `mailto:sueallen@southroof.com` with the order pre-composed ("Opens your email app
   with everything filled in — Sue calls you back the same day"); a "RECEIVED" stamp
   slams onto the form on submit. Live Tampa-time clock + open-status chip in the
   pre-header.
2. **Case-files timeline** — horizontal snap-scroll cards, 1960s→2020s, each with case
   number, decade, building type + neighbourhood, and a "STILL DRY" stamp; the 2020s
   card is an open dashed file ("Your building — the next file we open" → work order).
3. **Animated hero seal** — circular "RE-ROOF APPROVED · EST. 1960" stamp that slams
   in on load (one-shot, completes in ~1s, readable without interaction).

## Motif (counted: ONE)
**The rubber stamp** — favicon glyph, brand mark, seal, file stamps, form RECEIVED mark.
Nothing else decorative competes.

## Named enemy (not "storm chasers", not "the disappearing warranty")
"The five-year roof company won't be here in year six. We're on year sixty-six."

## Insider-ritual headline
"We core-cut every roof before we quote. If we haven't seen your deck, we haven't
quoted your roof."

## Distinctness vs the other roofing demos
- **jrjb-roofing** (charcoal/terracotta roofline): ours is kraft/ink/stamp-red, dossier system, no roofline.
- **cardinal-roofing** ("THE SHELL": annotated cross-section, cardinal red, Barlow Condensed): ours has no diagram/explorer, stencil not condensed grotesk.
- **carl-martin-roofing** ("THE LEDGER": ledger paper, cloth green/copper): ours shares a paper ground but the red is rubber-stamp, the system is a case file, not a ledger.
- **all-area-roofing** (full-bleed STORM DAMAGE orange): ours is calm archival, no full-bleed type.
- **dockside-roofing** ("THE HARBOR": harbor teal/brass, review-pin map, 4-step stepper hero): ours has no map, a work-order form instead of a stepper, stamp motif vs piling.
- **roofing-solutions-tampa** ("THE WARRANTY": certificate hero): closest cousin — but ours is the dossier/timeline system, not a certificate.
- **premier-metal-roof**: no dossier/timeline concept, no stamp system.
- Same-batch **service-works-roofing** ("THE PLANT ROOM" industrial steel-blue spec-sheet): steel-blue vs kraft, spec-sheet vs case-file. Same-batch **stay-dry-roofing** ("RAINFALL, HANDLED" meteorological): weather-system vs archival.

## Trade literacy (all 6 photos AI-generated, audited)
- hero-deck: tear-off with pry bars, rolls of mod-bit, HVAC units, vent caps — authentic.
- service-tearoff: crew unrolling white TPO, heat-welded seam lines, flashing-booted vents — authentic.
- service-metal: standing-seam panels with clips, hi-vis installer, drill/tape on deck — authentic.
- core-cut: utility-knife core sample showing membrane / insulation / corrugated deck layers — authentic.
- tech-foreman: hard hat, clipboard, commercial roof — authentic.
- finished-tpo: clean TPO with seams, curb-flashed HVAC, vent caps, walkway pads — authentic.

## Files
- `index.html`, `styles.css`, `app.js`, `favicon.svg`, `og-image.jpg` (1200×630, cropped from hero)
- `images/` — 6 original AI-generated webp photos (trade-literacy checked)
- `fonts/` — Stardos Stencil 400/700, IBM Plex Mono 400/500/600 (self-hosted woff2)
- `qa/` — qa.py, results.json, screenshots
- `screenshots/` — desktop/mobile full-page + hero shots
- Planned (not deployed) alias for OG URLs:
  `https://southern-roofing-demo-iodine-53s-projects.vercel.app/`

## QA summary (qa/qa.py, headless Chromium, systematic) — 2026-10-13
- **Zero console/page errors**, zero dead anchors, zero horizontal overflow at 390px and 1440px.
- All 6 images load; all reveals complete with no interaction (3.5s backstop asserted); seal slam animation completes (opacity ≈ 0.92 asserted); Tampa-time clock ticking.
- Desktop: nav anchor lands on #faq; form empty-submit shows error, valid submit slams the RECEIVED stamp; case-file track scrolls horizontally.
- Mobile: burger opens/closes, nav closes on link tap; sticky bottom bar appears after hero scroll, hides over final CTA; header phone link hidden ≤600px (call path preserved via hero link + bottom bar).
- Source checks: phone, tel:, mailto:, from-prices, FAQPage + RoofingContractor JSON-LD, og-image meta present in server HTML (JS-off safe); no runtime font/CDN hotlinking; single --ease; red confined to CTAs + stamps (automated check); stamp offset rule consistent.
- Fixed during QA: mobile header overflow (213px) — phone link + brand-sub hidden ≤600px; `.ex-tag` nowrap (wrapped "EXHIBIT A" on 390px); header CTA demoted to ghost after the blur test (one loud red per zone).
- Known capture quirk (dockside, inherited): `Page.captureScreenshot` `captureBeyondViewport` wraps past ~8192px — full-page shots are segment-stitched (800px steps, header static, fx layers neutralized); `qa/desktop.png` / `qa/mobile.png` built this way.

## Substitute QA (claude.ai critique parked by standing rule)
- **Blur test**: desktop — first fixation = H1 mass, second = red submit CTA. PASS. (Fix: header CTA was a competing red blob → demoted to ghost.)
- **Five-question friend test**: 1) what I'm buying — commercial re-roofing from a 65-yr Tampa company, clear; 2) price — from $9/sq ft in hero, from-prices on all 4 service cards, $6–$14 range in FAQ; 3) length — ~9 sections justified for six-figure considered purchase, copy lean per section; 4) trust — 1960 founding, case-files timeline, license line, job receipt, enemy line, ritual headline; 5) exit depth — hero asks = 4-field form + phone link (≤2 intent-asks), timeline is the only possible detour and sits below the work order. PASS.
- **Read-aloud test**: all 8 display headlines + enemy line + ritual line read clean, no brochure-speak; no rewrites needed. PASS.
- **Subtraction audit** (phone, form, services, trust line, prices, email): all present, nothing designed out. PASS.
- **Mobile behavior contract**: hamburger ↔ bottom bar; hero stacks copy→form→exhibit; timeline native horizontal scroll; CTA full-width; receipt stacks; stats n/a; bottom bar show/hide verified. PASS.
