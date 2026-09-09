---
target: contacto
total_score: 21
p0_count: 2
p1_count: 3
timestamp: 2026-09-09T21-34-06Z
slug: src-components-react-contactform-jsx
---
# Critique: contacto (`src/components/react/ContactForm.jsx`)

Target: conversion surface (form `#contacto`, header **Escríbeme**, footer chips). Live URL used for overlay: `http://localhost:4321/#contacto`.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | **Enviando…** is fine; **Mensaje enviado. Te respondo pronto.** is 12px `#047857` above a still-enabled **Enviar mensaje**, fields uncleared. |
| 2 | Match System / Real World | 3 | Spanish is a person (**¿Tienes algo en mente? Escríbeme.**). Tab says Astro; WhatsApp field speaks email. |
| 3 | User Control and Freedom | 2 | Pending locks the button; success does not. Header **Escríbeme** is `display: none` on mobile (hamburger only). |
| 4 | Consistency and Standards | 2 | Mobile stamp vs desktop hairline frame; **Escríbeme** vs **Enviar mensaje**; four fonts, two reds (`#e11d48` / `#dc2626`). |
| 5 | Error Prevention | 2 | JS + honeypot help; `noValidate`; dual Email/WhatsApp is easy to fail; success allows a second Formspree POST. |
| 6 | Recognition Rather Than Recall | 2 | Labels are visible; format rules live in `pattern` / `title` / placeholder `#a8a29e`. |
| 7 | Flexibility and Efficiency | 2 | Email *or* WhatsApp is the right LATAM idea; `inputMode="email"` + `autocomplete="email"` punishes the phone path. No WhatsApp chip. |
| 8 | Aesthetic and Minimalist Design | 3 | Paper + sello + Caveat hook work. Extra kicker **Hablemos**, split desktop system, footer heart. |
| 9 | Error Recovery | 2 | Field copy is specific. No focus move to the invalid field; `aria-describedby` on empty `<p>`; error border = focus lacre; server fail is generic **No se pudo enviar. Inténtalo de nuevo.** |
| 10 | Help and Documentation | 1 | The only SLA is **Cuéntame sobre tu proyecto y te respondo en menos de 24h.** — `display: none` at ≥769px. |
| **Total** | | **21/40** | **Acceptable** |

Cognitive load: **5/8 checklist failures (high).** Failed: single focus, visual hierarchy, one thing at a time, working memory, progressive disclosure. Passed: chunking, grouping, minimal submit choices.

## Anti-Patterns Verdict

**Start here.** Does this look AI-generated?

**LLM assessment:** **No** as a whole. Polaroid, Caveat hook, and the mobile sello (`2px 2px 0`) read as the intended note-on-the-monitor, not a SaaS kit. Tells that still cheapen the hire: tracked uppercase **Hablemos** (SaaS eyebrow as section grammar); live `<title>Astro</title>` and footer **Hecho con ♥**; two brands at 769px; hero cyan pulse and **Disponible LATAM** green pill as “live product” theater. Not slop: no gradient text, no side-stripe, no ghost-card blur ≥16px, no 32px+ radius.

**Deterministic scan:** CLI `detect.mjs` on 13 markup files exited **0**, findings **[]**. The source detector did not catch title, IA order, form states, or contrast. Those are UX, not the slop families it scans.

**Visual overlays:** Injection of `http://localhost:8400/detect.js` succeeded. Overlay visible in the terminal-browser tab titled **[Human]**. Console hook collected 0 `impeccable*` log lines; the overlay DOM reported **1 real hit**: **line length too long** on `.about-text__copy` (the About paragraph immediately above the form; desktop `max-width: 768px` exceeds 65–75ch). A second overlay at `top: 0` had no label (chrome, treat as false positive). LLM missed the About measure; the detector missed everything that actually blocks sending a message.

## Overall Impression

The form *sounds* like José. It does not yet *behave* like the product. Contact is the job, but the first button is **Ver proyectos**, the form sits *before* the work, the tab still says **Astro**, and after send the page still looks unsent. Biggest opportunity: make a sent message an unmistakable end state, and put proof (projects) before the ask.

## What's Working

1. **Voice.** **¿Tienes algo en mente? Escríbeme.** / **¿En qué te puedo ayudar?** / **Cuéntame un poco más (al menos 10 caracteres).** is directo and cercano, not “Let’s connect.”
2. **Mobile form as a stamped object.** Blanco, 1px border, `2px 2px 0` sello. On-strategy for *la nota pegada al monitor*.
3. **The job is named.** `id="contacto"`, labeled fields, **Enviando…**, Spanish field errors, honeypot, `lang="es"`.

## Priority Issues

### [P0] Document title is still **Astro**
- **What:** `<title>Astro</title>` in `BasicLayout.astro`. Confirmed in the live HTML.
- **Why it matters:** PRODUCT.md anti-ref is student-template energy. Camila’s first pixel in the tab is a starter kit, not a hire.
- **Fix:** Title the offer, e.g. `José Castro — webs que tu equipo puede mantener`.
- **Suggested command:** `$impeccable polish src/layouts/BasicLayout.astro`

### [P0] Success is not an end state
- **What:** After **Mensaje enviado. Te respondo pronto.** fields stay filled and **Enviar mensaje** stays clickable (only `pending` disables it).
- **Why it matters:** High-stakes send to a stranger freelancer with no lock-in. A second click can double-POST to Formspree. She may not believe it landed.
- **Fix:** Clear or set fields read-only; disable or replace submit with the status as the only action; keep `role="status"`; restyle success as a stamp, not 12px green.
- **Suggested command:** `$impeccable harden src/components/react/ContactForm.jsx`

### [P1] 24h lede hidden on desktop
- **What:** `.contact-form__lede { display: none }` at `min-width: 769px`. The line **Cuéntame sobre tu proyecto y te respondo en menos de 24h.** is the only SLA.
- **Why it matters:** Reassurance is removed exactly when she is typing on a wide, calm screen.
- **Fix:** Show the 24h line (or park it next to **Enviar mensaje**) at all breakpoints.
- **Suggested command:** `$impeccable clarify src/components/react/ContactForm.jsx`

### [P1] Ask before evidence
- **What:** `index.astro` is Hero → About → **ContactForm** → **Proyectos**. Header **Escríbeme** jumps into a form with no work in view. Hero CTA is **Ver proyectos**.
- **Why it matters:** Principle 4 is evidence, then the ask. She is asked to write before she has seen TaskApp / CMS / n8n.
- **Fix:** Projects above the form. Keep **Escríbeme** as the persistent seal, not the first content block.
- **Suggested command:** `$impeccable layout src/pages/index.astro`

### [P1] WhatsApp path is an email field
- **What:** Label **Email o WhatsApp**, `autocomplete="email"`, `inputMode="email"`, placeholder **tu@correo.com o +51...**. Footer chips are GitHub, LinkedIn, Email **escríbeme**. No WhatsApp chip.
- **Why it matters:** Casey/Camila on a LATAM phone get an `@` keyboard. The dual field is two jobs in one box (cognitive load).
- **Fix:** Segmented Email | WhatsApp, or `inputMode="tel"` when the value looks like a number; add a WhatsApp chip; never `autocomplete="email"` on a phone path.
- **Suggested command:** `$impeccable adapt src/components/react/ContactForm.jsx`

## Persona Red Flags

**Jordan (first-timer):** Tab **Astro**. Kicker **Hablemos**. Form before **Proyectos**. Hero **Ver proyectos** vs header **Escríbeme** — two different first jobs.

**Casey (distracted mobile, LATAM phone):** No persistent **Escríbeme** (hidden until hamburger). 12px fields. **Enviar mensaje** ~36px tall (padding 10px 16px), not 44px. Email keyboard on WhatsApp. Placeholder `#a8a29e` ~2.4:1.

**Sam (keyboard / SR):** No skip link (`--z-skip` exists, unused). `aria-describedby` points at empty error `<p>`s. Field errors are not live. Success is 12px; submit remains in tab order. Honeypot is correctly `aria-hidden` + `tabIndex={-1}`.

**Camila (LATAM founder, 90s, “will this ship?”):** Student title + heart footer. Ask before proof. Desktop without **menos de 24h**. After send, the form looks unsent. Bounce risk before **Enviar mensaje**; disbelief after.

## Minor Observations

- Overlay: About copy **line length too long** (`.about-text__copy`, 768px cap). Adjacent to contact, not the form. Cap at 65–75ch.
- Placeholders `#a8a29e` / `#a3a3a3` fail 4.5:1 on muted paper.
- Invalid and focus share lacre; errors do not look different from “this field is active.”
- `PUBLIC_URL_FORMSPREE` missing → generic **No se pudo enviar** after she wrote the message.
- Desktop contact inner (85% white, 1px `#1e1e24`, `0 1px 2px`) is allowed by DESIGN.md, not a ghost-card.
- Footer Email handle **escríbeme** hides the address.
- Six hero stack badges vs a 3-field form: craft is louder than the product.
- `prefers-reduced-motion` is honored on submit scale.
- Viewport meta is `width=device-width` only (no `initial-scale`).

## Questions to Consider

1. If contact is the product, why is the first button **Ver proyectos** and the form *above* the projects?
2. Would Camila trust a tab titled **Astro** more than a WhatsApp link with her own name on it?
3. After **Mensaje enviado. Te respondo pronto.**, why is **Enviar mensaje →** still the most visible object on the page?
