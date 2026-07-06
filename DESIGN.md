# DESIGN.md — Portfolio Design System

Merged from six references: **Apple, Notion, monopo saigon, ORYZO, Osmo, Compound**.

**Governing rule (from Arnav):** *This site wins on colours and fonts — the palette and type below are the site's own and override anything in the references. The references win on layout and feel — spacing rhythm, component shapes, whitespace discipline, and motion are borrowed from them.*

---

## 1. Design Direction (the merged "feel")

An **editorial, text-dominant portfolio** — quiet confidence, not SaaS gloss:

- **Warm paper canvas** (Notion) instead of clinical white — tactile, personal.
- **Oversized display type with tight tracking and compressed line-height** (Osmo/monopo) — the headline is the hero; no decorative graphics competing with it.
- **One accent colour, used surgically** (Oryzo/Apple discipline) — the accent appears only on primary actions and live-data highlights, never as decoration.
- **Hairline borders, zero shadows** (Notion/Apple/monopo) — hierarchy from surface shifts and whitespace, not elevation.
- **Two radius families only** (Osmo): sharp-ish cards vs. full-pill buttons. No mid-range rounding.
- **Patient motion** (monopo): gliding ease-out transitions, nothing snappy or bouncy.
- **Generous whitespace as hierarchy** (Compound): big section gaps; the page breathes.

---

## 2. Colours (ours — the site's own palette)

> **Dark-canvas revision (2026-07-06):** at Arnav's request the canvas moved from warm paper to the Vivid+Co reference's obsidian dark system ("prismatic light through obsidian"). Pitch green and the fonts stay — the governing rule holds. See decision log #23–27.

A cinematic dark theme with bone-white type and a single **pitch green** accent — the football signature, kept from the original palette.

| Name | Value | Token | Role |
|------|-------|-------|------|
| Canvas | `#101010` | `--color-canvas` | Page canvas — Vivid+Co Obsidian, never pure black |
| Surface | `#181d21` | `--color-surface` | Card surfaces — slate-tinted lift over the canvas |
| Veil | `#495764` | `--color-veil` | Vivid+Co Graphite Veil — hero radial wash only, never a flat surface |
| Text | `#fffdf9` | `--color-text` | Primary type — Vivid+Co Bone White, never pure white |
| Text Muted | `rgba(255,253,249,0.65)` | `--color-text-muted` | Secondary/body-muted text |
| Text Faint | `rgba(255,253,249,0.45)` | `--color-text-faint` | Captions, metadata, disabled |
| Hairline | `rgba(255,253,249,0.12)` | `--color-hairline` | All borders and dividers on dark |
| Pitch | `#0e7a4e` | `--color-pitch` | THE accent — primary CTA fill. One colour, one job (Apple rule) |
| Pitch Bright | `#3fbf83` | `--color-pitch-bright` | Pitch's legibility cut for dark surfaces — tag text, metric bar, active nav |
| Pitch Tint | `rgba(24,158,101,0.16)` | `--color-pitch-tint` | Secondary button fill, tag backgrounds |
| Bone | `#fffdf9` | `--color-bone` | Inverted contact band surface (Vivid+Co "Bone Card") |
| Ink (+ alpha steps) | `#1a1713` | `--color-ink*` | Text on the bone band — kept from the original palette |
| Cream Signal | `#ffe9c2` | `--color-cream-signal` | Highlight pill behind one hero word (Notion device) |

**Rules**
- Pitch (and its bright cut) is the only chromatic colour. Never for body text or borders-as-decoration.
- Never pure `#000` page background, never pure `#fff` text — the near-tones are the signature (Vivid+Co rule).
- Hierarchy in text comes from bone-white alpha steps (100% → 65% → 45%), not new colours.
- The slate Veil exists only inside the hero wash — the reference's "slate-to-black canvas gradient" is the one permitted gradient.

## 3. Fonts (ours)

Two faces, free (Google Fonts), loaded once:

### Space Grotesk — Display & headings · `--font-display`
- Weights: 500, 700 (500 default; 700 only for the hero name)
- Sizes: 32px and up
- Line-height 0.95–1.05 at display sizes, letter-spacing −0.03em at 56px+ (Osmo compression, moderated)
- Role: hero name, section headings, project titles. Distinctive geometric character = the site's typographic voice.

### Inter — Body & UI · `--font-body`
- Weights: 400, 500, 600
- 400 body, 500 nav/buttons/labels, 600 emphasis
- Slight negative tracking on body (−0.011em at 17px) for precision (Apple rule)

### Type Scale

| Role | Size | LH | Tracking | Token |
|------|------|----|----------|-------|
| caption | 13px | 1.4 | 0 | `--text-caption` |
| body-sm | 15px | 1.45 | −0.006em | `--text-body-sm` |
| body | 17px | 1.55 | −0.011em | `--text-body` |
| subheading | 21px | 1.3 | −0.01em | `--text-subheading` |
| heading-sm | 28px | 1.15 | −0.015em | `--text-heading-sm` |
| heading | 40px | 1.05 | −0.02em | `--text-heading` |
| heading-lg | 56px | 1.0 | −0.03em | `--text-heading-lg` |
| display | 76px | 0.95 | −0.035em | `--text-display` |

Display scales down fluidly on mobile (clamp: 76px → 40px).

## 4. Spacing & Shapes

- **Base unit:** 4px · **Density:** spacious (monopo/Compound)
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- **Page max-width:** 1100px content column, full-bleed section backgrounds
- **Section gap:** 112px desktop / 72px mobile — whitespace is the hierarchy (Compound)
- **Card padding:** 28px · **Element gap:** 12px

### Radius — two families only (Osmo rule)
| Element | Value |
|---------|-------|
| buttons, tags, pills | 999px (full pill) |
| cards, images | 8px |
| inputs | 8px |
| everything else | 0px |

No mid-range radii. No shadows anywhere — hairline borders and surface shifts only. The single exception: a soft four-layer shadow (Compound style, opacity ≤ 0.10) allowed under a project screenshot/image if one is embedded.

## 5. Motion

- Signature curve: `cubic-bezier(0.19, 1, 0.22, 1)` (monopo ease-out)
- Durations: 0.6–0.9s for reveals/transforms; 0.2s ease for hovers
- Scroll-triggered fade-up reveals on section entry; elements glide, never snap or bounce
- Respect `prefers-reduced-motion`

## 6. Components

### Nav Bar
Transparent over hero, gains `--color-paper` background + hairline bottom border on scroll. Wordmark "Arnav Pareek" left (Space Grotesk 500, 18px), section links right (Inter 500, 14px, Slate → Ink on hover, no underline). Sticky.

### Primary Pill Button
Pitch `#0e7a4e` fill, white text, Inter 500 15px, 999px radius, 12px 28px padding. The only filled chromatic button on the page.

### Secondary Pill Button
Pitch Tint `#e7f3ed` fill, Pitch text, same geometry. Used for "Download Resume" (and its disabled "coming soon" state: Ash text on `rgba(26,23,19,0.05)` fill).

### Ghost Pill Button
Transparent, 1px Ink border, Ink text (monopo geometry) — for per-project "View on GitHub" actions.

### Hero
Full-viewport-ish centered stack on Paper: name at display size (Space Grotesk 700), role line at subheading (Inter 400, Slate), supporting line at body, two pill buttons. Optionally one word wrapped in a Cream Signal pill (Notion device). No imagery — type is the hero (monopo).

### Project Card
White surface, 8px radius, 1px hairline border, 28px padding, **no shadow** (Notion card). Title in Space Grotesk 500 28px, body Inter 17px Slate, metric line ("76.6% on 12,000+ matches") emphasized in Ink 600 with a small Pitch accent mark. Tag pills: Pitch Tint fill, Pitch text, 13px. Ghost pill CTA bottom-left. Cards stack single-column full-width (monopo project list) with 48px gaps — extensible: new projects are new cards.

### Section Header
Space Grotesk 500 at 40–56px, Ink, with a small Ash caption label above (13px, uppercase, letter-spaced +0.08em — the one uppercase moment, Oryzo's museum-label voice). Left-aligned.

### Skills Group Row
Six labeled rows: group name (Inter 600 15px Ink) + skill pills (hairline border, 999px radius, Inter 400 14px Slate). No colour — skills stay quiet.

### Contact / Footer Band
Full-bleed Midnight `#12211a` inverse section (monopo dark band): heading in Space Grotesk 500 white, hire pitch line in Inter 400 `rgba(255,255,255,0.75)`, three link pills (ghost, white border). Fine print 13px Ash.

### Divider
1px hairline, content width — used at most twice on the page. Whitespace does the separating elsewhere.

## 7. Layout (from the references)

- Single scrolling column, centered 1100px, full-bleed background bands (Apple/monopo)
- Hero: centered type stack, no image (monopo)
- Projects: single-column full-width cards, generous gaps (monopo project list)
- Skills: labeled rows, compact (Osmo mono-tag energy without the mono font)
- About: two-column on desktop — text left, quick-facts right (Notion alternation); stacks on mobile
- Contact: full-bleed dark band = the page's one surface inversion
- Everything left-aligned except the hero (Oryzo rule: body copy never centered)

## 8. Do's and Don'ts (merged)

**Do**
- Let whitespace and type scale carry hierarchy — big size jumps, no in-between sizes
- Keep Pitch green rare so every appearance reads as "act here"
- Use hairline borders for all separation; compress display line-heights below 1.05
- Left-align all body copy

**Don't**
- No shadows (except the one soft image shadow), no gradients, no glassmorphism
- No second accent colour, no colored section backgrounds besides Midnight
- No mid-range border radii (nothing between 8px and 999px)
- No uppercase text except the section caption labels
- Never crowd the hero with extra elements

## 9. CSS Custom Properties (Quick Start)

```css
:root {
  /* Colours — ours */
  --color-paper: #faf7f2;
  --color-card: #ffffff;
  --color-ink: #1a1713;
  --color-slate: #5f5a52;
  --color-ash: #989186;
  --color-hairline: rgba(26, 23, 19, 0.10);
  --color-pitch: #0e7a4e;
  --color-pitch-tint: #e7f3ed;
  --color-midnight: #12211a;
  --color-cream-signal: #ffe9c2;

  /* Fonts — ours */
  --font-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  --font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;

  /* Type scale */
  --text-caption: 13px;   --leading-caption: 1.4;
  --text-body-sm: 15px;   --leading-body-sm: 1.45;
  --text-body: 17px;      --leading-body: 1.55;
  --text-subheading: 21px;--leading-subheading: 1.3;
  --text-heading-sm: 28px;--leading-heading-sm: 1.15;
  --text-heading: 40px;   --leading-heading: 1.05;
  --text-heading-lg: 56px;--leading-heading-lg: 1.0;
  --text-display: clamp(40px, 8vw, 76px); --leading-display: 0.95;

  /* Spacing */
  --spacing-4: 4px; --spacing-8: 8px; --spacing-12: 12px;
  --spacing-16: 16px; --spacing-24: 24px; --spacing-32: 32px;
  --spacing-48: 48px; --spacing-64: 64px; --spacing-96: 96px;
  --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1100px;
  --section-gap: 112px;
  --card-padding: 28px;
  --element-gap: 12px;

  /* Radius — two families */
  --radius-cards: 8px;
  --radius-pill: 999px;

  /* Motion */
  --ease-glide: cubic-bezier(0.19, 1, 0.22, 1);
  --duration-reveal: 0.8s;
  --duration-hover: 0.2s;

  /* The one permitted shadow (embedded images only) */
  --shadow-image: rgba(26,23,19,0.02) 0 32px 32px, rgba(26,23,19,0.05) 0 8px 18px;
}
```

---

## 10. Decision Log

Every design decision gets a dated row. Newest last.

| # | Date | Decision | Why | Source |
|---|------|----------|-----|--------|
| 1 | 2026-07-06 | Colours & fonts are the site's own; references contribute layout/feel only | Arnav's governing rule | Arnav |
| 2 | 2026-07-06 | Warm paper canvas `#faf7f2`, never pure white | Tactile/personal feel (Notion warmth) with our own tint | Claude proposal — **pending Arnav approval** |
| 3 | 2026-07-06 | Single accent: Pitch green `#0e7a4e` | One-accent discipline (Apple/Oryzo); green ties to football identity and FIFA project; owned by no reference | Claude proposal — **pending Arnav approval** |
| 4 | 2026-07-06 | Fonts: Space Grotesk (display) + Inter (body) | Free, distinctive display voice + neutral precise body; echoes references' geometric sans without copying them | Claude proposal — **pending Arnav approval** |
| 5 | 2026-07-06 | Two radius families only: 8px cards / 999px pills | Osmo's sharp-vs-pill tension, moderated | Osmo |
| 6 | 2026-07-06 | No shadows; hairline borders + surface shifts for hierarchy | Consensus across Apple, Notion, monopo, Oryzo | References |
| 7 | 2026-07-06 | 112px section gaps, whitespace as hierarchy | Compound/monopo spacious editorial rhythm | Compound |
| 8 | 2026-07-06 | Motion: cubic-bezier(0.19,1,0.22,1), 0.6–0.9s reveals | monopo's patient gliding feel | monopo |
| 9 | 2026-07-06 | Contact = full-bleed Midnight dark band (page's one inversion) | monopo dark-band contrast; gives the CTA weight | monopo |
| 10 | 2026-07-06 | Hero is type-only, no imagery | monopo/Compound: headline as hero; nothing to photograph anyway | monopo, Compound |
| 11 | 2026-07-06 | Projects as single-column full-width cards, extensible | monopo project-list layout; matches CONTEXT extensibility need | monopo, CONTEXT.md |
| 12 | 2026-07-06 | Resume buttons ship as disabled "coming soon" slot | Resume deferred until projects finalized | Arnav (COPY.md phase) |
| 13 | 2026-07-06 | Fonts self-hosted as woff2 (no Google Fonts CDN at runtime) | Arnav's "no third-party embeds" rule; also faster and privacy-clean | Arnav rule, build pass |
| 14 | 2026-07-06 | Divider motif = hairline with a center circle + dot (football pitch centre mark) | The site's signature ornament; subject-grounded, used exactly twice per the divider budget | Claude, build pass |
| 15 | 2026-07-06 | Section headers: uppercase caption = COPY.md's H2 ("Projects", "Skills"…), big heading = COPY.md's intro sentence | Keeps copy verbatim while giving each section an editorial lead; avoids duplicate "Projects/Projects" stutter | Claude, build pass |
| 16 | 2026-07-06 | Project card interior is two-column on desktop: content left, tags + CTA right (CTA bottom-right, amending §6's "bottom-left") | Balances the card at 1440px; single-column stack kept on mobile | Claude, build pass (screenshot review) |
| 17 | 2026-07-06 | About quick-facts card distills Education / Based in / Open to / Off the keyboard from Arnav's own facts | Recruiter-scannable sidebar without inventing copy; labels reuse the caption uppercase voice | Claude, build pass |
| 18 | 2026-07-06 | Cream Signal pill wraps the word "live" in the hero lede | The one Notion-style highlight; marks the live tracker, the site's strongest proof | Claude, build pass |
| 19 | 2026-07-06 | Buttons use line-height 1.25 (not 1) | Two-line button labels on mobile clipped at lh 1 — caught in screenshot review | Claude, fix pass |
| 20 | 2026-07-06 | Active nav highlight (pitch green) clears when scrolled back to hero | Bug caught in screenshot review: highlight stuck after scrolling up | Claude, fix pass |
| 21 | 2026-07-06 | `?static` URL flag disables entrance animations; project cards carry ids (#project-fifa, #project-netflix) | Screenshot/debug aid + deep-linkable projects | Claude, build pass |
| 22 | 2026-07-06 | Resume slot probes `resume.pdf` in the project root at load; buttons flip from "Resume — coming soon" to "Download Resume" automatically | Fulfils the no-rebuild resume promise from the copy phase | Arnav (COPY.md phase), build pass |
| 23 | 2026-07-06 | Canvas switched from warm paper to Obsidian `#101010` with Bone White `#fffdf9` type | Arnav supplied the Vivid+Co dark reference and asked for its background system | Arnav, Vivid+Co reference |
| 24 | 2026-07-06 | Pitch green kept as the sole accent, with a `#3fbf83` bright cut for dark-surface legibility; fonts unchanged | Governing rule: the site's colours and fonts win over any reference | Arnav rule |
| 25 | 2026-07-06 | Contact band flipped from Midnight dark to the Bone Card light inversion | Preserves "the page's one surface inversion" (log #9) — on a dark site the inversion must be light; Vivid+Co's surface stack provides exactly this | Vivid+Co reference |
| 26 | 2026-07-06 | Hero gets a subtle `#495764`→transparent radial wash | The reference's "slate-to-black canvas gradient" — the one permitted gradient; amends the earlier no-gradient rule | Vivid+Co reference |
| 27 | 2026-07-06 | Text hierarchy via bone-white alpha steps (100/65/45); hairlines at 12% bone | Replaces the Ink→Slate→Ash ladder, same three-step logic on dark | Claude, dark revision |
| 28 | 2026-07-06 | Project cards get a scroll-scrubbed 3D flatten (rotateX 18°→0°, scale 0.97→1) inside a 1200px-perspective stage | Skeleton from a pasted ContainerScroll component (framer-motion/React), integrated per CLAUDE.md donor rule: skin translated to tokens (surface bg, hairline border, 8px radius, shadows dropped), demo copy/stock image discarded, framer-motion replaced with vanilla rAF; off on ≤900px and ?static | Arnav (component paste), CLAUDE.md rule |
| 29 | 2026-07-06 | Animations run for ALL visitors — `prefers-reduced-motion` is no longer honored (CSS block and JS guards removed; `?static` kept for tooling) | Arnav's explicit decision after his own OS setting hid the animations. Trade-off on record: visitors who ask their OS for less motion still get the full animated experience | Arnav |
| 30 | 2026-07-06 | ~~Inertia smooth scrolling: wheel input damped through a rAF lerp~~ | Superseded by #31 same day | Arnav, Claude build |
| 31 | 2026-07-06 | Scrolling is fully native — the wheel-hijack inertia loop from #30 was removed. Smoothness comes from the scroll-linked animations (reveals, hero sequence, card tilt), which stay on for all visitors per #29 | Arnav preferred users controlling their own scroll; hijacked scrolling felt wrong | Arnav |
| 32 | 2026-07-06 | Hero gains a flowing path field (56 SVG curves, donor formula, two mirrored layers) + letter-stagger entrance on the name (word×0.1s + letter×0.03s delays) | Skeleton from a pasted BackgroundPaths component (framer-motion/React) per CLAUDE.md donor rule. Skin: bone-white strokes at ≤0.24 alpha (pitch excluded — accent stays undiluted), donor's gradient text/glass button/shadows dropped, "Discover Excellence" copy discarded. Amends #10 (type-only hero): ambient line-field counts as atmosphere, like the wash | Arnav (component paste), CLAUDE.md rule |
| 33 | 2026-07-06 | Path field animates by drifting the two layers as wholes (GPU-composited transform/opacity, 38–46s alternate) with non-scaling strokes | Self-review caught the donor's 72 per-path dashoffset loops starving slow renderers (content visibly vanished) and `slice` scaling tripling stroke widths | Claude, fix pass |
| 34 | 2026-07-06 | Path field visibility boosted per Arnav: stroke alpha 0.07→0.61 ramp, widths 0.6–1.9px, and the flow animation restored on every other path (28 streams, 14–24s loops, seamless via pathLength=1 + dash summing to 1) | First fix over-corrected into faint dotted fragments; halving the animated-path count keeps the river feel without the renderer starvation of #33 — soak-verified | Arnav feedback, Claude fix |
| 35 | 2026-07-06 | Skills section heading line removed — the section opens with the "SKILLS" caption and goes straight to the table | Arnav's request; COPY.md updated to match. Partial exception to the #15 caption+heading pattern | Arnav |
| 36 | 2026-07-06 | Wheel-only inertia glide (amends #31): discrete mouse-wheel notches get damped smoothing (lerp 0.12, exact notch distance preserved); touchpads, touchscreens, scrollbar and keyboard stay fully native | Arnav noticed wheels step while touchpads glide — native OS momentum exists only for touchpads. Notch detection: deltaMode ≠ 0, or wheelDeltaY in exact multiples of 120 (Chromium's per-notch signature); fractional touchpad deltas never match | Arnav |
| 37 | 2026-07-06 | Hero dash-flow animation pauses while the page is scrolling (resumes 160ms after scroll idle); the GPU-composited layer drift never pauses | Arnav hit scroll jank at the hero: 28 continuously-repainting streams competed with scroll frames — jank vanished from Projects down because offscreen animations don't paint. Scroll motion masks the pause | Arnav (bug report), Claude fix |
