---
name: ajcastrob
description: Portafolio freelance de José Castro. Una nota pegada al monitor: foto, oferta, y un sitio para escribirle.
colors:
  lacre: "#e11d48"
  lacre-soft: "#ed456a"
  papel-recado: "#faf7f2"
  mesa: "#f4efeb"
  papel-muted: "#fafaf9"
  tinta: "#141416"
  tinta-piedra: "#57534e"
  tinta-margen: "#78716c"
  recorte: "#d6d3d1"
  recorte-suave: "#e7e5e4"
  blanco: "#ffffff"
  tinta-sello: "#1e1e24"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "48px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.017em"
  headline:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "32px"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.55
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Space Mono, monospace"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.1em"
  hand:
    fontFamily: "Caveat, cursive"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  stamp: "2px"
  field: "6px"
  md: "8px"
  lg: "12px"
  pill: "9999px"
spacing:
  "4": "4px"
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "24": "24px"
  "32": "32px"
  "36": "36px"
  "40": "40px"
  "48": "48px"
  "64": "64px"
components:
  button-primary:
    backgroundColor: "{colors.lacre}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.lacre-soft}"
    textColor: "{colors.papel-recado}"
  button-hero:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-submit:
    backgroundColor: "{colors.lacre}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  chip-contact:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.md}"
    padding: "11px"
  card-project:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.lg}"
    padding: "21px"
  input:
    backgroundColor: "{colors.papel-muted}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.field}"
    padding: "9px 13px 10px"
  brand-mark:
    backgroundColor: "{colors.blanco}"
    rounded: "{rounded.stamp}"
    padding: "8.5px 12px"
  badge:
    backgroundColor: "{colors.mesa}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
---

# Design System: ajcastrob

## 1. Overview

**Creative North Star: "La nota pegada al monitor"**

This is not a studio site and not a product dashboard. It is a working note someone stuck next to the screen: a polaroid, a handwritten line, a stamp, a place to write back. Density is comfortable, never sparse-luxury and never packed-SaaS. Surfaces are paper. Interactive objects are paper that has been stamped. The photo is the only object that is allowed to look like an object in space.

The system is directo, cercano, práctico. Plus Jakarta Sans carries the offer. Caveat carries closeness (kickers, captions, the contact hook). Space Mono carries the stamp layer: labels, chips, form labels, the brand of “this was labeled by a person who ships.” Rose lacre is the sealing wax, not the wallpaper.

It explicitly rejects generic dark “passionate developer” portfolios; glassmorphism, gradient text, and SaaS landing templates (hero metric, identical feature cards, tracked eyebrows on every section); agency-slick motion reels that look expensive and unmaintainable; student-template energy (empty About, placeholder title, craft as costume). It does not replace the polaroid / handwriting / offset-chip language with editorial-magazine serif or terminal-native dark mode.

**Key Characteristics:**
- Paper body (`#faf7f2`), ink type (`#141416`), lacre accent (`#e11d48`) used as a seal, not a wash
- Hard offset stamp (`2px 2px 0` ink) on chips, cards, and the brand mark
- Polaroid as the only ambient-shadow object (washi tape, handwritten caption)
- Three type voices: grotesque, hand, Space Mono stamp
- Contact objects (form, “Escríbeme”, footer chips) share the stamp language of the work
- Split at 769px: desktop hardens ink to `#1e1e24` and 2px borders; it is the same note, pressed flatter, not a second brand

## 2. Colors: The Lacre Palette

Restrained: tinted paper neutrals plus one sealing-wax red. The accent is rare on purpose.

### Primary
- **Rosa de lacre** (`#e11d48`): the seal. Header “Escríbeme”, form submit, project index pills, handwritten accents, focus rings, error text. Desktop may harden the same role to `#dc2626` on a few headlines and buttons; that is contrast, not a second brand color. Never a section background.
- **Lacre suave** (`#ed456a`): hover of the seal only. Not a second accent for decoration.

### Neutral
- **Papel de recado** (`#faf7f2`): the page. Body background, sticky header. This is the committed surface; do not drift it toward cooler gray or a darker “dev” canvas.
- **Mesa** (`#f4efeb`): a slightly warmer band (about, hover on the menu button). Use for sectional tint, not for nested cards.
- **Papel muted** (`#fafaf9`): field fills and quiet bands. The form input at rest lives here.
- **Blanco** (`#ffffff`): lifted paper: polaroid body, cards, chips, brand mark, form panel on small screens.
- **Tinta** (`#141416`): body ink, hero CTA fill, stamp shadow color. If it is a word, it is this.
- **Tinta de piedra** (`#57534e`): secondary copy. Dark enough to read; do not lighten it for “elegance.”
- **Tinta de margen** (`#78716c`): tertiary labels only (section titles on small screens). Not body.
- **Recorte** (`#d6d3d1`) and **recorte suave** (`#e7e5e4`): hairline rules and input borders. 1px. Never a colored side stripe.
- **Tinta de sello** (`#1e1e24`): desktop stamp ink for 2px borders and hard rules. Same family as tinta, pressed.

### Named Rules
**The Lacre Rule.** Rosa de lacre occupies ≤10% of any screen. If a layout needs more red, the layout is wrong; reduce the object, do not wash the page.

**The Paper Is the Brand Rule.** New surfaces inherit papel de recado, blanco, or mesa. A dark canvas, a cool gray app shell, or a cream that is more beige than this paper is a different product.

## 3. Typography

**Display Font:** Plus Jakarta Sans (fallback: sans-serif)
**Body Font:** Plus Jakarta Sans (fallback: sans-serif)
**Label/Mono Font:** Space Mono (fallback: monospace)
**Hand Font:** Caveat (fallback: cursive)

**Character:** A working grotesque that can say the offer in one line, a notebook hand that is closeness not cute, and a mono stamp that labels the object. The pairing is person + tool. It is not a magazine and not a terminal.

### Hierarchy
- **Display** (800, 48px desktop / `--font-size-display`, line-height 1.0, letter-spacing about `-0.017em`): the hero h1 on desktop. Ceiling stays at 48px. Never above 6rem. `text-wrap: balance`.
- **Headline** (800, 32px / `--font-size-h1`, line-height 1.12, letter-spacing `-0.8px`): the hero h1 on small screens. Same voice, smaller paper.
- **Title** (700, 18px / `--font-size-h2`, line-height 28px): project names, compact headings. Desktop project titles 20px.
- **Body** (400, 15px / `--font-size-body`, line-height 24px, max 65ch): about copy and running text. Lede size 18px / 28px on desktop about. Secondary color is tinta de piedra, not a lighter gray.
- **Label** (700, 11–12px, letter-spacing up to `1.2px`, often uppercase): form labels, section stamps, stack pills, footer handles. Space Mono.
- **Hand** (700, 20–30px kickers, 24px polaroid caption, 24–36px contact hook): Caveat in lacre. Short lines only. Never body paragraphs in Caveat. Never all-caps hand.

### Named Rules
**The Three Voices Rule.** Plus Jakarta Sans, Caveat, Space Mono. A fourth family is forbidden. Do not add a display serif “for prestige” or a second mono.

**The Hand Is a Note Rule.** Caveat is a recado: kicker, caption, contact hook, footer tagline. If the hand is doing the job of a heading system, it has escaped the monitor.

**The Stamp Layer Rule.** Uppercase tracked labels are a stamp, not section grammar. One stamp per region is voice; a tiny uppercase eyebrow above every section is the SaaS template this system rejects.

## 4. Elevation

Hybrid. Depth is a stamp or a photograph, never a soft product card.

Most of the page is flat paper with 1px recorte rules and tonal bands (mesa, papel muted). Interactive paper objects (brand mark, footer chips, project cards, the small-screen form panel) sit up via a hard ink offset: `box-shadow: 2px 2px 0 0 #141416` and a 1px ink-or-recorte border. Hover translates `-1px/-2px` and grows the offset (`3px` / `4px`; desktop cards `6px`). Active presses back. This is structural: the object is a stamped tile.

The polaroid is the exception. It uses a warm ambient stack (`0 4px 6px rgba(0,0,0,0.05), 0 20px 35px rgba(44, 30, 20, 0.18)`), 2px corners, washi tape, no ink offset. Nothing else may borrow that shadow.

Desktop (769px+) hardens the stamp: 2px `tinta-sello` borders, larger offsets. The contact inner frame on desktop is a 16px-radius paper panel with a 1px `#1e1e24` border and a 1px ambient (`0 1px 2px rgba(0,0,0,0.05)`), not a second polaroid.

### Shadow Vocabulary
- **Sello** (`box-shadow: 2px 2px 0 0 #141416`): brand mark, chips, project cards, small-screen form. Default rest state for stamped objects.
- **Sello hover** (`3px 3px 0 0` chips; `4px 4px 0 0` cards; desktop cards `6px 6px 0 0`): paired with `translate(-1px, -1px)` or `(-2px, -2px)`. Never a blur.
- **Polaroid** (`0 4px 6px rgba(0,0,0,0.05), 0 20px 35px rgba(44, 30, 20, 0.18)`): the hero photo only.
- **Hairline lift** (`0 1px 1px` / `0 1px 2px rgba(0,0,0,0.05)`): desktop chips at rest, desktop contact frame. Subordinate to the sello; do not mix hairline lift with a 16px+ blur.

### Named Rules
**The Sello Rule.** If it is clickable paper (chip, card, brand, form tile), it gets a hard ink offset, not a diffuse drop shadow. Blur on those objects is prohibited.

**The Polaroid Exception.** Ambient shadow is exclusive to the photograph. Clone it onto a card and the note becomes a template.

**The Ghost-Card Ban.** Never pair `border: 1px solid` with `box-shadow` blur ≥16px on the same element. The polaroid has shadow and no ink border; stamped objects have ink offset and no blur.

## 5. Components

Paper objects you can press. Corners stay honest: 2px on the brand, 8–12px on cards and fields, pill only on CTAs and tags. Never 24px+ on a container.

### Buttons
- **Shape:** full pill on header and hero CTAs (`9999px`); form submit is 8px on small screens, pill on desktop. Padding 8px 18px (header), 10px 20px (hero), 10px 16px (submit, full width on small screens).
- **Primary (“Escríbeme”):** lacre fill, blanco text, ~13px / 500. Hover and focus-visible: lacre suave, text papel de recado. Active: `scale(0.98)`.
- **Hero (“Ver proyectos”):** tinta fill, blanco text, Space Mono 12px (14px desktop), cyan pulse dot (`#22d3ee`) as the live marker, then a ↓. Hover: opacity 0.85 and a white wipe. This is the ink button; it is not a second primary.
- **Submit:** lacre, blanco, Space Mono 14px / 700, min-height 44px, sello. Hover: lacre suave. After success, the button is gone and a stamped status remains.
- **Focus:** global `:focus-visible` is a 2px lacre outline, offset 3px. Inputs replace that with a lacre border and blanco fill.

### Chips
- **Contact chips:** blanco paper, 1px ink-ish border, 8px radius, sello `2px 2px 0`. Label + handle in mono. A 8–10px color dot (GitHub blue, LinkedIn rose, email amber) is a channel marker, not a brand accent. Hover lifts the sello. Desktop: row layout, hairline lift at rest, sello on hover.
- **Stack badges (hero):** pill, 4px 12px, 12px type. Tinted paper per stack on small screens; desktop uses quiet tints plus `0 1px 3px rgba(0,0,0,0.08)`. They name tools. They are not feature cards.

### Cards / Containers
- **Corner Style:** 12px on small screens, 8px on desktop project cards. Contact inner on desktop is 16px: the only 16px radius, and only for that frame.
- **Background:** blanco for cards and chips; sectional bands use mesa or papel muted, never a nested card on a card.
- **Shadow Strategy:** sello (see Elevation). Desktop project cards: 2px `#1e1e24` border + `3px 3px 0` ink.
- **Border:** 1px recorte (small), 2px tinta-sello (desktop cards).
- **Internal Padding:** 21px small / 26px desktop on project cards.
- **Project index:** lacre (desktop `#dc2626`) mini stamp with the sequence number. Numbers here are a real sequence of work, not section eyebrows for About / Contact / Footer.

### Inputs / Fields
- **Style:** papel muted fill, 1px recorte, 6px radius (8px desktop), 9–12px padding, 12–14px Plus Jakarta. Labels: uppercase mono, tinta, 11–12px.
- **Focus:** lacre border, blanco fill, no glow, no outline.
- **Error:** lacre border + 12px error copy in lacre. Placeholder is `#a8a29e` (small) / `#a3a3a3` (desktop); do not go lighter.
- **Disabled / pending:** submit opacity 0.72. Do not mute the whole form.

### Navigation
- **Style:** sticky header on papel de recado, 1px recorte under a 64px inner. Brand mark left, links center, “Escríbeme” right.
- **Links:** lowercase, inherit tinta. Hover/focus on small-screen menu: lacre.
- **Mobile:** hamburger 40px; open nav is a full-width sheet, papel at 85% with 12px blur (the only blur panel; it is a menu scrim, not a glass card). Escape, link click, and resize close it. First link takes focus on open.
- **Z-index:** header 20, skip 30, open menu above header. No 999.

### Polaroid (signature)
White 2px frame, 14–16px inset, handwritten caption “Código & Contenidos” in Caveat, two washi strips (slate, rotated). Image is square on desktop, slightly tall on small screens. This is the person. Do not replace it with a circle avatar, a 3D splat, or a gradient block.

### Brand mark
Blanco tile, 2px tinta border, 2px radius, sello `2px 2px 0`. 130×40. The logo lives inside this stamp. Do not float the SVG without the tile.

## 6. Do's and Don'ts

### Do:
- **Do** keep the polaroid, Caveat recados, and offset-chip sello as the material language of the note on the monitor.
- **Do** treat contact as a visual object equal to the work: lacre CTA, stamped form, stamped chips.
- **Do** set body copy in tinta (`#141416`) or tinta de piedra (`#57534e`) on papel de recado, max 65ch, 15–18px.
- **Do** honor `prefers-reduced-motion`: kill translate, scale, and staggered project reveal; keep a crossfade or instant state.
- **Do** use Spanish in the interface. First person. Name the work.
- **Do** cap display type at 48px and letter-spacing at ≥ `-0.04em` (hero uses about `-0.025em`).
- **Do** put new interactive paper on the sello (hard offset), not on a new elevation idea.

### Don't:
- **Don't** build generic dark “passionate developer” portfolios with a photo, a stack grid, and no point of view.
- **Don't** use glassmorphism, gradient text, or SaaS landing templates (hero metric, identical feature cards, tracked eyebrows on every section).
- **Don't** ship agency-slick motion reels that look expensive and unmaintainable.
- **Don't** leave student-template energy that undercuts the hire: empty “About”, placeholder title, craft as costume. The document title must not say “Astro”.
- **Don't** replace the polaroid / handwriting / offset-chip language with editorial-magazine serif or terminal-native dark mode.
- **Don't** use a `border-left` or `border-right` greater than 1px as a colored accent.
- **Don't** pair a 1px border with a blur ≥16px on cards or buttons.
- **Don't** round cards or sections to 24px or more (16px is the contact-frame ceiling).
- **Don't** add a fourth font family. Space Mono is the only stamp layer.
- **Don't** wash a section in lacre. The Lacre Rule is 10%.
- **Don't** write body copy in all caps, Caveat, or marketing verbs (unleash, seamless, world-class).
- **Don't** nest cards. A stamp on paper is enough.
