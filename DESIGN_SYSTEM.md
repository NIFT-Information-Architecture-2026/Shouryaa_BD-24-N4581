# Chalkflow — Visual Design System & Token Architecture
**Phase 5: Aesthetic Tokens, Typography Scales & Microcopy Voice**  
*Creative Director & Product Lead: Shouryaa (Fashion Communication, NIFT Hyderabad)*  
*Technical Project Architect & UX Mentor: Antigravity*

---

## 1. Multi-Surface Color Tokens & Themes

Chalkflow features three meticulously calibrated board surfaces. The UI automatically shifts its base, surface, border, and chalk ink tokens depending on the active theme.

```
       ┌─────────────────────────────────────────────────────────────┐
       │                 CHALKFLOW BOARD SURFACES                    │
       ├─────────────────────────────────────────────────────────────┤
       │ 1. Dark Slate (Default)   : Deep charcoal (#181A1B)         │
       │ 2. Vintage Classroom Green: Heritage forest (#1B2A20)       │
       │ 3. Parchment / Cream Paper: Warm unbleached linen (#F7F4EA) │
       └─────────────────────────────────────────────────────────────┘
```

### A. Theme Token Specifications

| Token Category | Token Variable | Dark Slate (Default) | Vintage Classroom Green | Parchment / Cream |
| :--- | :--- | :--- | :--- | :--- |
| **Canvas Base** | `--bg-base` | `#181A1B` (Deep Slate) | `#1B2A20` (Forest Board) | `#F7F4EA` (Warm Linen) |
| **Panel Surface** | `--bg-surface` | `#222527` (Matte Stone) | `#23382B` (Chalk Slate) | `#EFEAD8` (Pressed Paper) |
| **Surface Hover** | `--bg-hover` | `#2A2E31` | `#2D4737` | `#E5DEC8` |
| **Primary Chalk Text** | `--text-primary`| `#E8ECEF` (Soft Chalk) | `#F4F1DE` (Ivory Chalk) | `#2B2D42` (Graphite) |
| **Muted Chalk Text** | `--text-muted` | `#94A3B8` (Dust Grey) | `#A3B899` (Sage Grey) | `#6C757D` (Soft Charcoal) |
| **Border / Divider** | `--border-chalk`| `rgba(232, 236, 239, 0.12)` | `rgba(244, 241, 222, 0.15)` | `rgba(43, 45, 66, 0.12)` |

### B. Functional Category & Accent Tokens

| Purpose / Role | Color Name | Hex Code | Token Variable | Visual Application |
| :--- | :--- | :--- | :--- | :--- |
| **🔴 High Priority Dot** | Coral Red Chalk | `#FF6B6B` | `--chalk-red` | Priority glyph dot & Top Priority highlight |
| **🟡 Medium Priority Dot** | Warm Amber | `#FFD166` | `--chalk-amber` | Medium priority dot & Academic tag |
| **🟢 Low / Habit Nature** | Mint / Sage Chalk| `#06D6A0` | `--chalk-mint` | Low priority dot, Habit tree leaves, Sprouts |
| **🔵 Wellness / Health** | Sky Chalk Blue | `#4CC9F0` | `--chalk-sky` | Wellness & deep focus badges |
| **🌸 Bloom Flora** | Petal Pink Chalk| `#FF8FAB` | `--chalk-pink` | Flower petals & bloom state highlights |

---

## 2. Priority Indicator System: Discrete Dot Ergonomics

Chalkflow **never** washes the entire task background or full string in aggressive red (which causes visual alarm fatigue). Instead, it uses **discrete hand-drawn chalk dot glyphs**:

```
[ ]  🔴 Complete Accessory Prototyping Sample       (High Priority)
[ ]  🟡 Draft Presentation Script (Ch. 2)           (Medium Priority)
[ ]  🟢 Clean drafting table & sort markers         (Low Priority)
[ ]  🔴 ↪ Source brass buckles (Carried over)       (Carried from yesterday)
```

---

## 3. Typography Hierarchy & Chalk Styling

### A. Font Pairing Architecture
1. **Display & Expressive Typeface:** **Kalam** (Google Fonts — Handwriting)
   - *Weights:* 400 (Regular), 700 (Bold)
   - *Role:* Section headers, chalkboard titles, "Carried over" badges, botanical names, and encouragement notes.
2. **Structural & Numeric UI Typeface:** **Inter** (Google Fonts — High Legibility Sans)
   - *Weights:* 400 (Regular), 500 (Medium), 600 (Semi-Bold)
   - *Role:* Task titles, subtask checkboxes, dates, countdown timers, and metrics.

### B. Typography Scale Matrix

| Role | Font Family | Size | Weight | Line Height | Texture Effect |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **App Title** | Kalam | `28px` | Bold (700) | `1.2` | Soft chalk glow (`text-shadow: 0 0 2px rgba(...)`) |
| **Section Headings** | Kalam | `22px` | Bold (700) | `1.3` | Hand-drawn underline accent |
| **Task Titles** | Inter | `15px` | Medium (500) | `1.4` | Clean crisp rendering |
| **Subtasks & Notes** | Inter | `13px` | Regular (400)| `1.4` | Dims to 50% on complete |
| **Carried Over Tag** | Kalam | `12px` | Regular (400)| `1.2` | Muted chalk italic slant |
| **Focus Clock Display**| Inter | `54px` | Bold (700) | `1.0` | High-contrast chalk numeral |

---

## 4. Chalk Textures, Shadows & Border CSS Rules

```css
/* Chalkboard Grain Background Texture */
.chalkboard-container {
  background-color: var(--bg-base);
  background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 0);
  background-size: 24px 24px;
}

/* Soft Chalk Text Glow */
.chalk-text {
  font-family: 'Kalam', cursive;
  text-shadow: 0 0 1.5px rgba(232, 236, 239, 0.4);
}

/* Hand-Drawn Chalk Border */
.chalk-card {
  background: var(--bg-surface);
  border: 1px dashed var(--border-chalk);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Strike-Through Animation */
.task-completed {
  text-decoration: line-through;
  text-decoration-color: var(--chalk-mint);
  text-decoration-thickness: 2px;
  opacity: 0.55;
  transition: opacity 0.3s ease, text-decoration 0.2s ease;
}
```

---

## 5. Microcopy & Voice Guidelines (The Forgiveness Engine)

Chalkflow replaces punitive language with supportive, growth-oriented microcopy:

| Industry Anti-Pattern | Chalkflow Compassionate Alternative |
| :--- | :--- |
| ❌ *"Overdue: 2 days late"* | ✅ **"↪ Carried over from yesterday"** |
| ❌ *"You broke your streak! Back to 0"* | ✅ **"Continue from here. Roots run deep."** |
| ❌ *"Goal missed / Incomplete"* | ✅ **"A little progress today. Every seed counts."** |
| ❌ *"Delete permanently"* | ✅ **"Erase slate"** |

### Affirmation Pool for Rest & Empty States
- *"Growth happens below the soil, too."*
- *"One step at a time."*
- *"A clean slate awaits every morning."*
- *"Rest is part of the work."*
