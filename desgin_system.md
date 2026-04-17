**AI Skill Reference — Sodium Learn Website Design System v2**

Single source of truth for building, styling, or reviewing any Sodium Learn web component or page. Always use tokens over raw values. Never deviate from this system.

---

## 1. Tokens

### Color Tokens

```
color-bg-primary        #FAF5F6   — page background
color-bg-secondary      #F1F6FE   — tinted blue sections, info banners
color-bg-dark           #012B59   — hero, footer, dark sections
color-text-primary      #0F0F0F   — main body text
color-text-secondary    #6C6C89   — supporting / muted text
color-text-inverse      #FFFFFF   — text on dark backgrounds
color-action-primary    #014DA1   — all CTAs
color-action-hover      #1465C2   — hover state
color-action-active     #12427A   — active/pressed state
color-border-default    #D1D1DB   — borders, dividers
color-focus-ring        #4898E8   — 3px solid, 2px offset, all interactive elements
```

### Spacing Tokens — 8pt grid only, no arbitrary values

```
xs 8px · sm 16px · md 24px · lg 32px · xl 48px · xxl 64px
Section: default 96px · compact 64px · hero 128px
```

### Radius Tokens

```
sm 6px · md 8px · lg 12px
```

### Typography Tokens

```
Font: Inter (variable preferred) — weights: Regular · Medium · SemiBold only

Display 1   64px / 72lh   Bold      ls -0.5px
Display 2   56px / 64lh   SemiBold  ls -0.3px
H1          48px / 56lh   SemiBold  ls -0.3px
H2          36px / 44lh   SemiBold  ls -0.2px
H3          28px / 36lh   Medium    ls 0
H4          22px / 30lh   Medium    ls 0
Body-lg     18px / 28lh   Regular
Body-md     16px / 24lh   Regular
Body-sm     14px / 20lh   Regular
Label-sm    12px / 16lh   Medium    ls 0.1px
Label-md    14px / 20lh   Medium    ls 0
```

---

## 2. Color System

### Brand

```
Primary       #014DA1   — buttons, links, highlights
Primary Dark  #012B59   — hero, footer, dark sections
Background    #FAF5F6   — warm off-white, page bg
White         #FFFFFF   — cards, surfaces
Text Primary  #0F0F0F   — main text
```

### Brand Scale (Blue)

```
50  #F1F6FE  100  #E3ECFB  200  #C0D9F7  300  #88BBF1  400  #4898E8
500 #217BD6  600  #1465C2  700  #014DA1  800  #12427A  900  #012B59
```

### Gray Scale

```
50  #F7F7F8  100  #EBEBEF  200  #D1D1DB  300  #A9A9BC  400  #8A8AA3
500 #6C6C89  600  #55556D  700  #3F3F50  800  #2B2B33  900  #121217
```

### Semantic Colors

```
Success  100 #DFF8EA · 300 #84E4AE · 500 #2DCA72 · 700 #1E874C
Error    100 #FEE4E2 · 300 #FDA29B · 500 #F04438 · 700 #B42318
Warning  100 #FFF4DB · 300 #FFD47A · 500 #F79009 · 700 #B54708
Info     100 #E3ECFB · 300 #88BBF1 · 500 #217BD6 · 700 #1465C2
```

### Accent Colors (Framer Variables)

```
/Accent - Lavender    → #EAEEFF  rgb(234,238,255)  — chips, tag bg, feature tints
/Accent - Indigo-100  → #E3ECFB  rgb(227,236,251)  — section tints, info banners, card highlights
/Accent - Fuchsia-100 → #FFF4DB  rgb(255,244,219)  — badges, achievement labels, warm tints
/Border - Gray        → rgba(209,209,219,0.2)       — borders, dividers
```

---

## 3. Layout

```
Container: max-width 1280px · padding 24px · ideal text width 600–720px

Desktop  ≥1024px   12 col · 24px gutter · 24px margin
Tablet   768–1023  8 col  · 16px gutter · 24px margin
Mobile   <768px    4 col  · 16px gutter · 16px margin

Breakpoints: sm 640 · md 768 · lg 1024 · xl 1280
```

---

## 4. Components

### Buttons

```
Primary    bg #014DA1 · text white · pad 12/20 · r8
           hover #1465C2 · active #12427A · disabled opacity 40%

Secondary  bg white · border 1.5px #014DA1 · text #014DA1 · pad 12/20 · r8
           hover #E3ECFB · active #C0D9F7 · disabled opacity 40%

Ghost      bg transparent · no border · text #014DA1 · pad 12/20 · r8
           hover #F1F6FE · active #C0D9F7 · disabled opacity 40%
```

### Cards

```
padding 24px · radius 12px · border 1px #EBEBEF · shadow 0 1px 4px rgba(0,0,0,0.06)
hover: shadow 0 4px 12px rgba(0,0,0,0.10) · translateY(-1px)
```

### Navbar

```
height 72px · sticky · minimal shadow
```

### Form Inputs

```
height 44px · padding 10/14 · radius 8px · border 1px #D1D1DB
focus    border #4898E8 · box-shadow 0 0 0 3px rgba(72,152,232,0.2)
error    border #F04438
disabled bg #F7F7F8 · opacity 60%
label    14px Medium · #0F0F0F · mb 6px
```

### Modal / Overlay

```
backdrop  rgba(0,0,0,0.4) fullscreen
container white · r12 · p32 · max-w 560px default / 720px wide
shadow    0 20px 60px rgba(0,0,0,0.15)
behaviour close on backdrop click · close Escape · trap focus · scroll if overflow
```

---

## 5. Page Structure

```
Section order: Hero → Social proof → How it works → Features → CTA
Rules: one goal per page · keep section order · no filler sections
```

### Hero

```
Structure  Headline → Sub-text → Primary CTA → Product visual
Headline   outcome-driven, no jargon
           e.g. "Workplace learning without the complexity."
Sub-text   one sentence only
           e.g. "Create, manage, and deliver learning — all in one place."
CTA        Primary = "Request a demo"
```

---

## 6. Copy Rules

```
Headlines  outcome-focused
Subtext    short and clear · 1 sentence
CTAs       action verb first
Avoid      jargon · long paragraphs · generic wording
```

---

## 7. Accessibility

```
Contrast   WCAG AA minimum · WCAG AAA target for body text
Focus ring 3px solid #4898E8 · 2px offset · required on ALL interactive elements
Keyboard   full navigation required
Labels     aria-label or visible text on every interactive element
```

---

## 8. Motion, Elevation & Icons

```
Hover      slight lift · subtle darken · fast fade transition
Avoid      excessive animation · decorative motion

Level 0    flat  ·  Level 1  cards  ·  Level 2  overlays / modals

Icons      outline only · stroke 1.5–2px · rounded corners
```

---

## 9. Hard Rules

```
✗  No arbitrary spacing
✗  No raw hex values in code — tokens only
✗  No one-off styles
✗  No Bold overuse
✓  Multiples of 8 for all spacing
✓  Tokens for all color, spacing, radius, and type
✓  Align with Angular component library
✓  One focal point per section
```

---

**Ownership** Design → Jamee · Product → Waliul · Last revised April 2026

**Source doc** → Sodium Learn — Website Design System (v2)