# Anish Dixit portfolio

Personal GenAI developer site for recruiters. Visual language is editorial cinema, not product-app chrome.

## Sources

- UI system: [Runway DESIGN.md](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/runwayml/DESIGN.md) from [awesome-design-md](https://github.com/VoltAgent/awesome-design-md). Cinematic photography as the primary UI. Invisible chrome. Paper reading bands. One geometric sans. Zero shadows.
- Photography grade: Higgsfield [Cinema Studio](https://higgsfield.ai/blog/cinema-studio-3.5-full-tutorial) **Cold Steel** (steel-blue, no warmth). Not the Higgsfield marketing app (chartreuse, Hyper Neon, Lime Jam).

Rejected UI systems: ElevenLabs (voice orbs), Tesla (too sparse for a CV), xAI (lab splash), Bugatti (luxury gold), Minimax/Shopify (neon chrome), Linear/Vercel (SaaS dashboard).

Rejected Cinema palettes: Hyper Neon, Lime Jam, Candy Pink, Teal and Orange Epic, Bleached Warm, Sodium Decay, Classic B&W, Bleach Bypass.

## 1. Visual Theme & Atmosphere

A dark film-festival page. The hero is a full-viewport Cold Steel still. About is a paper-white reading band so a recruiter can actually read the bio. Experience, projects, and contact stay on cinema black. Color in the interface is almost none. Color lives in the stills.

## 2. Color Palette & Roles

### Cinema (default)
- Runway Black `#000000`: page, hero overlay, experience, projects, contact
- Dark Surface `#1a1a1a`: optional elevated wells
- Pure White `#ffffff`: hero type, primary CTA on dark
- Cool Slate `#767d88`: secondary type
- Mid Slate `#7d848e`: metadata
- Border Dark `#27272a`: hairline only
- Muted Gray `#a7a7a7`: de-emphasized

### Paper band (About, and light theme)
- Near White `#fefefe`
- Cool Cloud `#e9ecf2`
- Charcoal `#404040`
- Dark Link `#0c0c0c`
- Cool Silver `#c9ccd1`

No brand teal. No lime. No purple. No gradients in the chrome.

## 3. Typography

One family: **DM Sans** (abcNormal substitute; not Inter).

| Role | Size | Weight | Line height | Tracking |
|------|------|--------|-------------|----------|
| Hero | clamp 48-72px | 400 | 1.0 | -1.2px |
| Section | 40px | 400 | 1.0 | -1px |
| Card title | 24px | 400 | 1.1 | 0 |
| Body | 16px | 400 | 1.45 | 0 |
| Nav / label | 14px | 500 | 1.25 | 0.35px, uppercase |
| Micro | 11px | 500 | 1.3 | uppercase |

No 700+ weights. No second display font.

## 4. Components

- Primary CTA: solid black on paper, solid white on cinema. 14px / 600. Radius 6px. Not pills.
- Filters and badges: 4px radius, hairline, no fill accent.
- Nav: transparent over the hero, 72px, wordmark + four links. Theme toggle only as a utility.
- Images: 8px radius in grids. Hero is full-bleed, no radius.
- Depth: zero box-shadow. Alternate cinema black and paper.

## 5. Layout

- Cinema width: 1600px.
- Hero: 100dvh, still edge to edge, type in the lower third.
- About: paper band, image + bio.
- Projects: editorial mixed grid, titles under stills.
- Contact: mission line on black, one CTA: Email me.

## 6. Motion

Calm. Fade and small translate only. No orbs, no typewriter, no particle field, no scroll-cue bounce.

## 7. Do / Don't

Do: let stills carry color. Keep chrome invisible. Keep About readable on paper.

Don't: copy Higgsfield app lime. Don't use neon CTAs. Don't use glassmorphism. Don't use pills. Don't put Pattern branding anywhere except the Pattern job row.
