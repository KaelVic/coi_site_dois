# COI – Centro Odontológico Integrado — Design System v2

## Brand Identity
Premium, minimalist dental clinic. Brazilian Portuguese. Clinical warmth.

## Color Palette (UPDATED)
- `--coi-white`: #F8F8F8 — deep off-white, primary background
- `--coi-copper`: #8C4A1E — dark copper (desaturated terracotta), primary accent, CTAs
- `--coi-copper-light`: #A85E2E — hover/lighter copper state
- `--coi-copper-pale`: #EDE4DA — warm pale background for sections
- `--coi-black`: #0E0E0E — near-black, headings, nav
- `--coi-gray`: #5C5651 — body text, secondary
- `--coi-gray-light`: #DDD6CE — borders, dividers
- `--coi-overlay`: rgba(14, 14, 14, 0.58) — hero overlays

## Logo
/public/coi-logo.png — generated mark with C·O(tooth)·I monogram

## Typography
- Display: **Cormorant Garamond** (Google Fonts) — headings, hero
  - Weight: 300, 400, 600; italic for emphasis
- Body: **DM Sans** (Google Fonts) — nav, body, buttons, captions
  - Weight: 300, 400, 500

## Animation (LOCKED — never deviate)
- Scroll reveal: opacity 0→1, translateY(24px→0), 0.65s, cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Button hover: 0.25s ease, slight translateY(-1px)
- Card hover: translateY(-4px) 0.3s ease + copper border
- FAQ accordion: max-height transition 0.4s
