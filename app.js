/**
 * CHALKFLOW — Mindful Productivity & Botanical Focus Engine
 * Refined Interactive Architecture & Handcrafted Wildflower Meadow
 * Creative Director: Shouryaa (Fashion Communication, NIFT Hyderabad)
 * Technical Architect: Antigravity
 */

// ==========================================================================
// 1. CHALK BOTANICAL SVG ARTWORK RENDERER (MEADOW WILDFLOWERS & GROWTH STAGES)
// ==========================================================================
const ChalkBotanicals = {

  // STAGE 0: Resting Seed & Downward Taproots (Reference Image 2)
  renderRestingSeed(size = 36) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
        <path d="M 15 72 Q 50 68 85 72" stroke="var(--border-chalk)" stroke-width="2" stroke-dasharray="4,3" fill="none" />
        <path d="M 25 76 Q 50 73 75 76" stroke="var(--border-chalk)" stroke-width="1.2" stroke-dasharray="2,4" fill="none" opacity="0.6" />
        <circle cx="50" cy="50" r="16" fill="var(--bg-surface-elevated)" stroke="#FAF0CA" stroke-width="2.2" stroke-dasharray="25,1.5" />
        <path d="M 42 44 Q 50 40 56 46" stroke="#FAF0CA" stroke-width="1.2" fill="none" opacity="0.8" />
        <circle cx="50" cy="50" r="11" fill="none" stroke="var(--chalk-amber)" stroke-width="1" stroke-dasharray="3,2" opacity="0.7" />
        <path d="M 50 66 Q 50 78 48 92" stroke="var(--chalk-amber)" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M 49 72 Q 40 76 34 82" stroke="var(--chalk-amber)" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <path d="M 50 74 Q 60 78 66 84" stroke="var(--chalk-amber)" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <path d="M 58 38 Q 72 26 66 18 Q 54 24 54 36 Z" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
      </svg>
    `;
  },

  // STAGE 1: Cotyledon Sprout on Shaded Soil Mound (Reference Images 1 & 3)
  renderFirstSprout(size = 36) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
        <path d="M 10 82 Q 50 80 90 82" stroke="var(--text-primary)" stroke-width="2" stroke-dasharray="5,3" fill="none" opacity="0.6" />
        <path d="M 32 82 Q 50 64 68 82 Z" fill="var(--bg-surface-elevated)" stroke="var(--text-primary)" stroke-width="2" />
        <path d="M 36 80 L 64 72 M 38 76 L 62 68 M 42 72 L 58 66" stroke="var(--border-chalk)" stroke-width="1.2" opacity="0.75" />
        <path d="M 50 66 Q 52 50 48 38" stroke="#FAF0CA" stroke-width="2.6" stroke-linecap="round" fill="none" />
        <path d="M 48 38 C 30 32 18 36 20 48 C 24 54 38 52 48 40 Z" fill="none" stroke="#FAF0CA" stroke-width="2.2" />
        <path d="M 48 39 Q 34 42 22 46" stroke="var(--chalk-mint)" stroke-width="1.2" fill="none" opacity="0.8" />
        <path d="M 48 38 C 66 32 78 36 76 48 C 72 54 58 52 48 40 Z" fill="none" stroke="#FAF0CA" stroke-width="2.2" />
        <path d="M 48 39 Q 62 42 74 46" stroke="var(--chalk-mint)" stroke-width="1.2" fill="none" opacity="0.8" />
      </svg>
    `;
  },

  // STAGE 2: Branching Stem & Foliage (Reference Image 4)
  renderBranchingStem(size = 38) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
        <path d="M 20 90 Q 50 88 80 90" stroke="var(--border-chalk)" stroke-width="1.5" stroke-dasharray="4,3" fill="none" />
        <path d="M 50 90 Q 46 65 50 24" stroke="var(--chalk-mint)" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M 48 76 Q 25 70 12 58 Q 30 60 47 70" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
        <path d="M 49 66 Q 72 58 88 50 Q 70 54 50 60" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
        <path d="M 49 52 Q 32 40 34 26 Q 42 36 50 44" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
        <path d="M 50 42 Q 68 32 66 18 Q 58 28 50 36" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
        <path d="M 50 66 Q 64 54 62 40" stroke="var(--chalk-mint)" stroke-width="1.5" fill="none" />
        <path d="M 62 40 C 58 35 60 28 64 26 C 66 30 66 36 62 40 Z" fill="none" stroke="var(--chalk-amber)" stroke-width="1.4" />
      </svg>
    `;
  },

  // STAGE 3: Swelling Teardrop Floral Bud (Reference Image 4 Apex)
  renderSwellingBud(size = 40) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
        <path d="M 25 92 Q 50 90 75 92" stroke="var(--border-chalk)" stroke-width="1.5" fill="none" />
        <path d="M 50 90 Q 48 60 50 34" stroke="var(--chalk-mint)" stroke-width="2.4" stroke-linecap="round" fill="none" />
        <path d="M 49 72 Q 28 62 20 50 Q 36 54 49 64" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
        <path d="M 50 60 Q 72 50 80 38 Q 64 44 50 54" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
        <g transform="translate(50, 34)">
          <path d="M -5 0 Q 0 -6 5 0 Z" fill="var(--chalk-mint)" stroke="var(--chalk-mint)" stroke-width="1" />
          <path d="M -5 0 C -10 -12 -6 -24 0 -28 C 4 -20 2 -8 0 0 Z" fill="var(--bg-surface-elevated)" stroke="#E8A4C8" stroke-width="1.8" />
          <path d="M 5 0 C 10 -12 6 -24 0 -28 C -4 -20 -2 -8 0 0 Z" fill="var(--bg-surface-elevated)" stroke="#E8A4C8" stroke-width="1.8" />
          <path d="M 0 0 Q 0 -18 0 -27" stroke="#FAF0CA" stroke-width="1.2" fill="none" />
        </g>
      </svg>
    `;
  },

  // STAGE 4: Full Multi-Species Botanical Wildflower Blooms
  // (Directly modeled on uploaded meadow art: Terracotta Cosmos, Purple Aster, White Coneflower, Golden Daisy)
  renderFullBloom(size = 48, day = 1) {
    const variety = day % 4;
    
    if (variety === 0) {
      // Variety A: Terracotta / Coral Sunburst Cosmos (Centerpiece in Image 1)
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
          <path d="M 50 96 Q 51 68 50 48" stroke="var(--chalk-mint)" stroke-width="2.8" stroke-linecap="round" fill="none" />
          <path d="M 49 75 Q 32 70 24 58 Q 38 60 48 70" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 51 65 Q 68 58 78 48 Q 62 54 51 60" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <g transform="translate(50, 30)">
            <!-- 8 Broad Terracotta Petals with Linear Hatching -->
            <path d="M 0 0 C -12 -4 -20 -18 -8 -24 C 0 -18 2 -6 0 0 Z" fill="#E07A5F" opacity="0.95" stroke="#FAF0CA" stroke-width="0.7" />
            <path d="M 0 0 C 12 -4 20 -18 8 -24 C 0 -18 -2 -6 0 0 Z" fill="#E07A5F" opacity="0.95" stroke="#FAF0CA" stroke-width="0.7" />
            <path d="M 0 0 C -18 6 -28 -4 -20 -14 C -10 -10 -4 -2 0 0 Z" fill="#E29578" opacity="0.95" stroke="#FAF0CA" stroke-width="0.7" />
            <path d="M 0 0 C 18 6 28 -4 20 -14 C 10 -10 4 -2 0 0 Z" fill="#E29578" opacity="0.95" stroke="#FAF0CA" stroke-width="0.7" />
            <path d="M 0 0 C -14 16 -4 24 4 18 C 4 10 2 2 0 0 Z" fill="#D08C5D" opacity="0.9" stroke="#FAF0CA" stroke-width="0.7" />
            <path d="M 0 0 C 14 16 4 24 -4 18 C -4 10 -2 2 0 0 Z" fill="#D08C5D" opacity="0.9" stroke="#FAF0CA" stroke-width="0.7" />
            <path d="M 0 0 C -6 -18 0 -28 8 -26 C 8 -16 4 -4 0 0 Z" fill="#E07A5F" opacity="0.95" stroke="#FAF0CA" stroke-width="0.7" />
            <!-- Stippled Brown Core -->
            <circle cx="0" cy="0" r="7" fill="#4A2E1B" stroke="#FAF0CA" stroke-width="1" stroke-dasharray="3,1.5" />
            <circle cx="0" cy="0" r="3.5" fill="var(--chalk-amber)" />
          </g>
        </svg>
      `;
    } else if (variety === 1) {
      // Variety B: Purple Wild Aster / Coneflower (Top flower in Image 1 & 2)
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
          <path d="M 50 96 Q 48 70 50 44" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <path d="M 50 78 Q 28 68 20 54 Q 35 58 49 72" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 50 62 Q 72 54 80 40 Q 64 48 50 56" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <g transform="translate(50, 26)">
            <!-- Radiating Purple Chalk Petals -->
            <path d="M 0 0 L -5 -22 L 0 -26 L 5 -22 Z" fill="#7E6B8F" stroke="#FAF0CA" stroke-width="0.6" />
            <path d="M 0 0 L -18 -14 L -22 -8 L -14 -4 Z" fill="#6D597A" stroke="#FAF0CA" stroke-width="0.6" />
            <path d="M 0 0 L 18 -14 L 22 -8 L 14 -4 Z" fill="#6D597A" stroke="#FAF0CA" stroke-width="0.6" />
            <path d="M 0 0 L -22 6 L -20 14 L -10 10 Z" fill="#B5838D" stroke="#FAF0CA" stroke-width="0.6" />
            <path d="M 0 0 L 22 6 L 20 14 L 10 10 Z" fill="#B5838D" stroke="#FAF0CA" stroke-width="0.6" />
            <path d="M 0 0 L -8 20 L 0 24 L 8 20 Z" fill="#7E6B8F" stroke="#FAF0CA" stroke-width="0.6" />
            <!-- Bright Yellow Stamen Core -->
            <circle cx="0" cy="0" r="6" fill="var(--chalk-amber)" stroke="#FAF0CA" stroke-width="1" />
            <circle cx="0" cy="0" r="2.5" fill="#5C381E" />
          </g>
        </svg>
      `;
    } else if (variety === 2) {
      // Variety C: Pure White Coneflower / Daisy (Bottom Right in Image 1)
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
          <path d="M 50 96 L 50 42" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <path d="M 50 75 Q 32 68 25 56 Q 38 58 49 68" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 50 60 Q 68 52 75 40 Q 62 46 50 54" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <g transform="translate(50, 26)">
            <!-- Layered Pure White Chalk Petals -->
            <path d="M 0 0 C -16 -6 -24 -20 -10 -24 C -2 -18 0 -8 0 0 Z" fill="#FFFFFF" opacity="0.95" stroke="#E8ECEF" stroke-width="0.8" />
            <path d="M 0 0 C 16 -6 24 -20 10 -24 C 2 -18 0 -8 0 0 Z" fill="#FFFFFF" opacity="0.95" stroke="#E8ECEF" stroke-width="0.8" />
            <path d="M 0 0 C -18 8 -24 0 -16 -10 C -8 -6 -2 -2 0 0 Z" fill="#FAF0CA" opacity="0.9" stroke="#E8ECEF" stroke-width="0.8" />
            <path d="M 0 0 C 18 8 24 0 16 -10 C 8 -6 2 -2 0 0 Z" fill="#FAF0CA" opacity="0.9" stroke="#E8ECEF" stroke-width="0.8" />
            <path d="M 0 0 C -10 18 0 22 8 16 C 6 8 2 2 0 0 Z" fill="#FFFFFF" opacity="0.95" />
            <path d="M 0 0 C 10 18 0 22 -8 16 C -6 8 -2 2 0 0 Z" fill="#FFFFFF" opacity="0.95" />
            <!-- Textured Chocolate Core -->
            <circle cx="0" cy="0" r="6.5" fill="#4A2E1B" stroke="var(--chalk-amber)" stroke-width="1" stroke-dasharray="2,1" />
          </g>
        </svg>
      `;
    } else {
      // Variety D: Drooping Golden Sunflower / Rudbeckia (Image 1 Left)
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
          <path d="M 50 96 Q 52 68 50 38" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <path d="M 50 72 Q 28 64 18 52 Q 35 54 49 65" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <g transform="translate(50, 24)">
            <!-- Drooping Gold Petals Falling Downward -->
            <path d="M 0 -4 C -8 10 -16 26 -6 28 C 0 20 2 8 0 -4 Z" fill="var(--chalk-amber)" stroke="#FAF0CA" stroke-width="0.6" />
            <path d="M 0 -4 C 8 10 16 26 6 28 C 0 20 -2 8 0 -4 Z" fill="var(--chalk-amber)" stroke="#FAF0CA" stroke-width="0.6" />
            <path d="M 0 -4 C -18 8 -26 22 -18 26 C -10 18 -4 6 0 -4 Z" fill="#F2CC8F" stroke="#FAF0CA" stroke-width="0.6" />
            <path d="M 0 -4 C 18 8 26 22 18 26 C 10 18 4 6 0 -4 Z" fill="#F2CC8F" stroke="#FAF0CA" stroke-width="0.6" />
            <path d="M 0 -4 C -2 14 0 28 2 28 C 4 20 2 8 0 -4 Z" fill="var(--chalk-amber)" stroke="#FAF0CA" stroke-width="0.6" />
            <!-- High Dome Cone Core (Brown) -->
            <path d="M -8 -4 C -8 -16 8 -16 8 -4 Z" fill="#5C381E" stroke="#FAF0CA" stroke-width="1" />
          </g>
        </svg>
      `;
    }
  },

  // Dynamic selector for any growth stage (0 to 4)
  getBotanicalSVG(stage, size = 36, day = 1) {
    switch (stage) {
      case 4: return this.renderFullBloom(size, day);
      case 3: return this.renderSwellingBud(size);
      case 2: return this.renderBranchingStem(size);
      case 1: return this.renderFirstSprout(size);
      case 0:
      default: return this.renderRestingSeed(size);
    }
  }
};

// ==========================================================================
// 1.1 CHALK MASCOT & PANORAMIC BOTANICAL MEADOW ARTWORK (VECTOR CHALK CRAFT)
// ==========================================================================
const ChalkMascot = {
  renderPandaSVG(size = 46) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="chalk-mascot-svg" aria-label="Chalkflow Panda Mascot">
        <!-- Subtle chalk dust ring -->
        <circle cx="50" cy="50" r="46" fill="none" stroke="var(--border-chalk)" stroke-width="1.2" stroke-dasharray="3,4" opacity="0.35" />
        
        <!-- Panda Ears (Fuzzy dark ears with chalk highlights) -->
        <circle cx="26" cy="24" r="14" fill="#181A1D" stroke="#FAF0CA" stroke-width="2" />
        <path d="M 21 18 Q 28 22 24 30" stroke="rgba(250, 240, 202, 0.45)" stroke-width="1.2" fill="none" />
        <circle cx="74" cy="24" r="14" fill="#181A1D" stroke="#FAF0CA" stroke-width="2" />
        <path d="M 79 18 Q 72 22 76 30" stroke="rgba(250, 240, 202, 0.45)" stroke-width="1.2" fill="none" />
        
        <!-- Panda Head (Fluffy chalk contour) -->
        <circle cx="50" cy="50" r="34" fill="var(--bg-surface-elevated)" stroke="#FAF0CA" stroke-width="2.6" />
        <path d="M 44 18 Q 50 14 56 18" stroke="#FAF0CA" stroke-width="1.5" stroke-linecap="round" fill="none" />
        
        <!-- Big Panda Eye Patches -->
        <ellipse cx="36" cy="46" rx="9.5" ry="12" transform="rotate(-18 36 46)" fill="#181A1D" stroke="#FAF0CA" stroke-width="1.2" />
        <ellipse cx="64" cy="46" rx="9.5" ry="12" transform="rotate(18 64 46)" fill="#181A1D" stroke="#FAF0CA" stroke-width="1.2" />
        
        <!-- Expressive Sparkly Eyes -->
        <circle cx="37" cy="46" r="4.2" fill="#FAF0CA" />
        <circle cx="35" cy="44" r="1.6" fill="#FFFFFF" />
        <circle cx="38" cy="48" r="0.8" fill="#FFFFFF" />
        
        <circle cx="63" cy="46" r="4.2" fill="#FAF0CA" />
        <circle cx="61" cy="44" r="1.6" fill="#FFFFFF" />
        <circle cx="64" cy="48" r="0.8" fill="#FFFFFF" />
        
        <!-- Rosy Blush Cheeks -->
        <ellipse cx="24" cy="58" rx="6.5" ry="3.8" fill="#FFAAA6" opacity="0.65" />
        <ellipse cx="76" cy="58" rx="6.5" ry="3.8" fill="#FFAAA6" opacity="0.65" />
        
        <!-- Button Nose & Smiling Mouth -->
        <path d="M 47 52 Q 50 50 53 52 Q 50 55 47 52 Z" fill="#181A1D" stroke="#FAF0CA" stroke-width="1.2" />
        <path d="M 44 56 Q 47 60 50 57.5 Q 53 60 56 56" fill="none" stroke="#FAF0CA" stroke-width="2" stroke-linecap="round" />
        
        <!-- Paws holding white chalk stick -->
        <ellipse cx="37" cy="78" rx="7.5" ry="8.5" fill="#181A1D" stroke="#FAF0CA" stroke-width="1.6" />
        <ellipse cx="63" cy="78" rx="7.5" ry="8.5" fill="#181A1D" stroke="#FAF0CA" stroke-width="1.6" />
        
        <!-- White Chalk Stick (Cradled between paws) -->
        <rect x="44" y="66" width="12" height="23" rx="3.5" transform="rotate(10 50 78)" fill="#FAF0CA" stroke="#FFFFFF" stroke-width="1.8" />
        <path d="M 51 64 L 54 61 L 57 65" stroke="var(--chalk-amber)" stroke-width="1.4" stroke-linecap="round" fill="none" />
        
        <!-- Tiny Chalk Sprout & Mushroom Accents -->
        <path d="M 16 82 Q 20 72 26 80" stroke="var(--chalk-mint)" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <path d="M 83 82 C 81 76 90 76 90 82 Z" fill="#FFAAA6" stroke="#FAF0CA" stroke-width="1.4" />
        <line x1="85.5" y1="82" x2="85.5" y2="86" stroke="#FAF0CA" stroke-width="1.4" />
      </svg>
    `;
  }
};

const ChalkMeadowPanorama = {
  renderMeadow(container) {
    if (!container) return;

    const svgHTML = `
      <svg viewBox="0 0 960 260" class="meadow-panorama-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="chalk-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- ================= SKY & FAUNA ================= -->
        <!-- Fluttering Chalk Butterfly (Left Sky, near D1/D2) -->
        <g class="meadow-sky-butterfly">
          <!-- Flight loop trail -->
          <path d="M 45 80 C 75 45 110 35 125 50 C 135 62 120 78 105 68 C 94 56 112 40 135 48" 
                fill="none" stroke="var(--chalk-white)" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.45" />
          <!-- Butterfly Body & Wings -->
          <g transform="translate(135, 48) rotate(-15)">
            <line x1="0" y1="-8" x2="0" y2="8" stroke="var(--chalk-white)" stroke-width="1.8" stroke-linecap="round" />
            <!-- Antennae -->
            <path d="M 0 -8 Q -4 -13 -6 -12 M 0 -8 Q 4 -13 6 -12" stroke="var(--chalk-white)" stroke-width="1" fill="none" />
            <!-- Left Wings -->
            <path d="M 0 -2 C -12 -12 -16 2 -2 3 Z" fill="rgba(250, 240, 202, 0.35)" stroke="#FAF0CA" stroke-width="1.4" />
            <path d="M 0 2 C -10 4 -12 12 -2 7 Z" fill="rgba(6, 214, 160, 0.3)" stroke="#06D6A0" stroke-width="1.2" />
            <!-- Right Wings -->
            <path d="M 0 -2 C 12 -12 16 2 2 3 Z" fill="rgba(250, 240, 202, 0.35)" stroke="#FAF0CA" stroke-width="1.4" />
            <path d="M 0 2 C 10 4 12 12 2 7 Z" fill="rgba(6, 214, 160, 0.3)" stroke="#06D6A0" stroke-width="1.2" />
          </g>
        </g>

        <!-- Buzzing Chalk Bee #1 (Mid Sky, above D3/D4) -->
        <g class="meadow-sky-bee">
          <!-- Flight spiral loop -->
          <path d="M 315 65 Q 345 32 370 42" fill="none" stroke="var(--chalk-amber)" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.5" />
          <!-- Honeybee -->
          <g transform="translate(372, 42) rotate(12)">
            <ellipse cx="0" cy="0" rx="6" ry="4" fill="#FFD166" stroke="#FAF0CA" stroke-width="1.2" />
            <line x1="-2" y1="-3.5" x2="-2" y2="3.5" stroke="#181A1D" stroke-width="1.2" />
            <line x1="2" y1="-3.5" x2="2" y2="3.5" stroke="#181A1D" stroke-width="1.2" />
            <!-- Wings -->
            <ellipse cx="-2" cy="-6" rx="4" ry="2.2" transform="rotate(-30 -2 -6)" fill="rgba(255,255,255,0.7)" stroke="#FAF0CA" stroke-width="0.9" />
            <ellipse cx="2" cy="-6" rx="4" ry="2.2" transform="rotate(20 2 -6)" fill="rgba(255,255,255,0.7)" stroke="#FAF0CA" stroke-width="0.9" />
          </g>
        </g>

        <!-- Buzzing Chalk Bee #2 (Right Sky, above D6/D7) -->
        <g class="meadow-sky-bee">
          <path d="M 645 58 Q 675 25 700 36" fill="none" stroke="var(--chalk-amber)" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.5" />
          <g transform="translate(702, 36) rotate(-10)">
            <ellipse cx="0" cy="0" rx="5.5" ry="3.8" fill="#FFD166" stroke="#FAF0CA" stroke-width="1.2" />
            <line x1="-1.5" y1="-3.2" x2="-1.5" y2="3.2" stroke="#181A1D" stroke-width="1.2" />
            <line x1="2" y1="-3.2" x2="2" y2="3.2" stroke="#181A1D" stroke-width="1.2" />
            <ellipse cx="-1.5" cy="-5.5" rx="3.5" ry="2" transform="rotate(-25 -1.5 -5.5)" fill="rgba(255,255,255,0.7)" stroke="#FAF0CA" stroke-width="0.9" />
            <ellipse cx="2" cy="-5.5" rx="3.5" ry="2" transform="rotate(25 2 -5.5)" fill="rgba(255,255,255,0.7)" stroke="#FAF0CA" stroke-width="0.9" />
          </g>
        </g>

        <!-- ================= GROUND SOIL & TEXTURE ================= -->
        <!-- Primary Soil Horizon Line -->
        <path d="M 10 215 Q 240 212 480 215 T 950 215" stroke="var(--text-primary)" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.8" />
        <!-- Secondary Chalk Ground Texture Line -->
        <path d="M 15 219 Q 240 221 480 219 T 945 221" stroke="var(--border-chalk)" stroke-width="1.4" stroke-dasharray="6,4" fill="none" opacity="0.55" />
        
        <!-- Ground Pebbles & Chalk Stipples -->
        <ellipse cx="45" cy="216" rx="4" ry="2" fill="none" stroke="var(--border-chalk)" stroke-width="1" opacity="0.6" />
        <ellipse cx="140" cy="217" rx="3" ry="1.5" fill="none" stroke="var(--border-chalk)" stroke-width="1" opacity="0.6" />
        <ellipse cx="235" cy="216" rx="4.5" ry="2" fill="none" stroke="var(--border-chalk)" stroke-width="1.2" opacity="0.6" />
        <ellipse cx="340" cy="218" rx="3" ry="1.5" fill="none" stroke="var(--border-chalk)" stroke-width="1" opacity="0.6" />
        <ellipse cx="445" cy="216" rx="4" ry="2" fill="none" stroke="var(--border-chalk)" stroke-width="1" opacity="0.6" />
        <ellipse cx="550" cy="217" rx="5" ry="2.2" fill="none" stroke="var(--border-chalk)" stroke-width="1.2" opacity="0.6" />
        <ellipse cx="670" cy="216" rx="3.5" ry="1.8" fill="none" stroke="var(--border-chalk)" stroke-width="1" opacity="0.6" />
        <ellipse cx="805" cy="217" rx="4" ry="2" fill="none" stroke="var(--border-chalk)" stroke-width="1" opacity="0.6" />
        <ellipse cx="920" cy="216" rx="4.5" ry="2" fill="none" stroke="var(--border-chalk)" stroke-width="1" opacity="0.6" />

        <!-- Meadow Grass Tufts Between Plants -->
        <path d="M 132 215 Q 130 205 127 202 M 133 215 Q 134 203 136 200 M 135 215 Q 138 206 142 203" stroke="var(--chalk-mint)" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75" />
        <path d="M 230 215 Q 228 204 224 200 M 232 215 Q 233 202 235 198 M 234 215 Q 238 205 241 201" stroke="var(--chalk-mint)" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75" />
        <path d="M 332 215 Q 329 203 325 199 M 334 215 Q 336 201 339 197 M 336 215 Q 340 204 344 201" stroke="var(--chalk-mint)" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75" />
        <path d="M 435 215 Q 432 203 428 199 M 437 215 Q 439 201 442 196 M 439 215 Q 443 204 447 200" stroke="var(--chalk-mint)" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75" />
        <path d="M 545 215 Q 542 204 538 199 M 547 215 Q 549 200 552 195 M 549 215 Q 553 205 558 201" stroke="var(--chalk-mint)" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75" />
        <path d="M 665 215 Q 662 203 658 198 M 667 215 Q 670 200 673 195 M 669 215 Q 674 204 679 200" stroke="var(--chalk-mint)" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75" />
        <path d="M 800 215 Q 797 202 793 197 M 802 215 Q 805 199 809 194 M 804 215 Q 809 203 814 199" stroke="var(--chalk-mint)" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75" />

        <!-- ================= BOTANICAL SPECIMENS (D1 TO D8) ================= -->

        <!-- SPECIMEN D1: The Young Sprout (x=85) -->
        <g class="meadow-plant-hotspot" data-day="1" id="plant-hotspot-d1">
          <rect x="40" y="20" width="90" height="235" fill="transparent" />
          <!-- Soil Mound -->
          <path d="M 70 215 Q 85 208 100 215 Z" fill="var(--bg-surface-elevated)" stroke="var(--text-primary)" stroke-width="1.8" />
          <!-- Emerging Sprout Stem -->
          <path d="M 85 209 Q 86 195 85 178" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <!-- Left Cotyledon Leaf -->
          <path d="M 85 178 C 72 173 64 179 67 187 C 72 191 80 186 85 180 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="2" />
          <path d="M 85 179 Q 76 182 69 186" stroke="var(--chalk-mint)" stroke-width="1" fill="none" opacity="0.8" />
          <!-- Right Cotyledon Leaf -->
          <path d="M 85 178 C 98 173 106 179 103 187 C 98 191 90 186 85 180 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="2" />
          <path d="M 85 179 Q 94 182 101 186" stroke="var(--chalk-mint)" stroke-width="1" fill="none" opacity="0.8" />
          <!-- Chalk Label & Underline -->
          <text x="85" y="238" class="meadow-chalk-label">D1</text>
          <path d="M 68 244 Q 85 246 102 244" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8" />
        </g>

        <!-- SPECIMEN D8 (x=85) -->
        <g class="meadow-plant-hotspot" data-day="8" id="plant-hotspot-d8">
          <rect x="40" y="20" width="90" height="235" fill="transparent" />
          <!-- Soil Mound -->
          <path d="M 70 215 Q 85 208 100 215 Z" fill="var(--bg-surface-elevated)" stroke="var(--text-primary)" stroke-width="1.8" />
          <!-- Emerging Sprout Stem -->
          <path d="M 85 209 Q 86 195 85 178" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <!-- Left Cotyledon Leaf -->
          <path d="M 85 178 C 72 173 64 179 67 187 C 72 191 80 186 85 180 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="2" />
          <path d="M 85 179 Q 76 182 69 186" stroke="var(--chalk-mint)" stroke-width="1" fill="none" opacity="0.8" />
          <!-- Right Cotyledon Leaf -->
          <path d="M 85 178 C 98 173 106 179 103 187 C 98 191 90 186 85 180 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="2" />
          <path d="M 85 179 Q 94 182 101 186" stroke="var(--chalk-mint)" stroke-width="1" fill="none" opacity="0.8" />
          <!-- Chalk Label & Underline -->
          <text x="85" y="238" class="meadow-chalk-label">D8</text>
          <path d="M 68 244 Q 85 246 102 244" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8" />
        </g>

        <!-- SPECIMEN D9: Leafy Seedling (x=185) -->
        <g class="meadow-plant-hotspot" data-day="9" id="plant-hotspot-d9">
          <rect x="140" y="20" width="90" height="235" fill="transparent" />
          <!-- Stem -->
          <path d="M 185 215 Q 183 180 185 148" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <!-- Lower Left Leaf -->
          <path d="M 184 195 C 166 190 156 197 160 205 C 168 208 178 202 184 196 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Lower Right Leaf -->
          <path d="M 185 188 C 204 183 213 189 210 197 C 203 201 192 195 185 190 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Upper Left Leaf -->
          <path d="M 184 170 C 168 163 160 169 164 177 C 171 180 179 175 184 171 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Upper Right Leaf -->
          <path d="M 185 163 C 201 156 208 162 206 170 C 200 173 191 168 185 164 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Apex Sprout Leaf -->
          <path d="M 185 148 C 179 138 185 132 185 132 C 185 132 191 138 185 148 Z" fill="rgba(6, 214, 160, 0.28)" stroke="var(--chalk-mint)" stroke-width="1.6" />
          <!-- Chalk Label & Underline -->
          <text x="185" y="238" class="meadow-chalk-label">D9</text>
          <path d="M 168 244 Q 185 246 202 244" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8" />
        </g>

        <!-- SPECIMEN D10: Branching Bud (x=285) -->
        <g class="meadow-plant-hotspot" data-day="10" id="plant-hotspot-d10">
          <rect x="240" y="20" width="90" height="235" fill="transparent" />
          <!-- Main Stem -->
          <path d="M 285 215 Q 282 165 285 118" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <!-- Foliage leaves -->
          <path d="M 284 185 C 265 178 258 188 266 195 C 274 196 280 190 284 186 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 285 172 C 304 165 310 174 304 182 C 296 183 290 177 285 173 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 284 150 C 268 142 264 150 270 156 C 277 157 281 153 284 151 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Green Sepals -->
          <path d="M 282 122 C 275 116 276 107 284 112" stroke="var(--chalk-mint)" stroke-width="2" fill="none" />
          <path d="M 286 122 C 293 116 292 107 284 112" stroke="var(--chalk-mint)" stroke-width="2" fill="none" />
          <!-- Pink Teardrop Bud Tip -->
          <path d="M 284 116 C 276 104 280 92 284 86 C 288 92 292 104 284 116 Z" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="2.2" />
          <path d="M 284 108 Q 284 92 284 88" stroke="#FAF0CA" stroke-width="1" fill="none" opacity="0.8" />
          <!-- Chalk Label & Underline -->
          <text x="285" y="238" class="meadow-chalk-label">D10</text>
          <path d="M 268 244 Q 285 246 302 244" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8" />
        </g>

        <!-- SPECIMEN D11: Coral Daisy Bloom (x=385) -->
        <g class="meadow-plant-hotspot" data-day="11" id="plant-hotspot-d11">
          <rect x="340" y="20" width="90" height="235" fill="transparent" />
          <!-- Stem -->
          <path d="M 385 215 Q 382 155 385 108" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <path d="M 384 175 C 366 168 360 178 368 184 C 375 184 380 180 384 176 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 385 155 C 402 148 408 156 402 163 C 395 164 390 159 385 156 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Blooming Coral Daisy Flower Head -->
          <g transform="translate(385, 100)">
            <ellipse cx="0" cy="-18" rx="4.5" ry="9" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="1.8" />
            <ellipse cx="11" cy="-14" rx="4.5" ry="9" transform="rotate(36 11 -14)" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="1.8" />
            <ellipse cx="17" cy="-5" rx="4.5" ry="9" transform="rotate(72 17 -5)" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="1.8" />
            <ellipse cx="15" cy="11" rx="4.5" ry="9" transform="rotate(108 15 11)" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="1.8" />
            <ellipse cx="6" cy="17" rx="4.5" ry="9" transform="rotate(144 6 17)" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="1.8" />
            <ellipse cx="-6" cy="17" rx="4.5" ry="9" transform="rotate(216 -6 17)" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="1.8" />
            <ellipse cx="-15" cy="11" rx="4.5" ry="9" transform="rotate(252 -15 11)" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="1.8" />
            <ellipse cx="-17" cy="-5" rx="4.5" ry="9" transform="rotate(288 -17 -5)" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="1.8" />
            <ellipse cx="-11" cy="-14" rx="4.5" ry="9" transform="rotate(324 -11 -14)" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="1.8" />
            <!-- Golden Central Eye -->
            <circle cx="0" cy="0" r="8.5" fill="#FFD166" stroke="#FAF0CA" stroke-width="2.2" />
            <circle cx="0" cy="0" r="5" fill="none" stroke="#181A1D" stroke-width="1" stroke-dasharray="2,2" opacity="0.6" />
          </g>
          <!-- Chalk Label & Underline -->
          <text x="385" y="238" class="meadow-chalk-label">D11</text>
          <path d="M 368 244 Q 385 246 402 244" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8" />
        </g>

        <!-- SPECIMEN D12: Purple Wild Aster (x=490) -->
        <g class="meadow-plant-hotspot" data-day="12" id="plant-hotspot-d12">
          <rect x="445" y="20" width="90" height="235" fill="transparent" />
          <!-- Stem -->
          <path d="M 490 215 Q 488 150 490 95" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <path d="M 489 180 Q 470 175 462 168 M 490 172 Q 472 168 468 158" stroke="var(--chalk-mint)" stroke-width="1.6" fill="none" />
          <path d="M 491 165 Q 508 160 516 154 M 491 155 Q 507 150 512 142" stroke="var(--chalk-mint)" stroke-width="1.6" fill="none" />
          <!-- Purple Aster Flower Head -->
          <g transform="translate(490, 85)">
            <line x1="0" y1="0" x2="0" y2="-22" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="8" y2="-20" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="16" y2="-15" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="21" y2="-8" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="22" y2="0" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="21" y2="8" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="16" y2="15" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="8" y2="20" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="0" y2="22" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="-8" y2="20" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="-16" y2="15" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="-21" y2="8" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="-22" y2="0" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="-21" y2="-8" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="-16" y2="-15" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <line x1="0" y1="0" x2="-8" y2="-20" stroke="#B388FF" stroke-width="2.4" stroke-linecap="round" />
            <circle cx="0" cy="0" r="12" fill="none" stroke="#D8B4FE" stroke-width="1.8" stroke-dasharray="3,2" />
            <circle cx="0" cy="0" r="7.5" fill="#FFD166" stroke="#FAF0CA" stroke-width="2" />
            <circle cx="0" cy="0" r="4" fill="none" stroke="#181A1D" stroke-width="0.8" opacity="0.6" />
          </g>
          <!-- Chalk Label & Underline -->
          <text x="490" y="238" class="meadow-chalk-label">D12</text>
          <path d="M 473 244 Q 490 246 507 244" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8" />
        </g>

        <!-- SPECIMEN D13: White Drooping Coneflower (x=605) -->
        <g class="meadow-plant-hotspot" data-day="13" id="plant-hotspot-d13">
          <rect x="560" y="20" width="90" height="235" fill="transparent" />
          <!-- Stem -->
          <path d="M 605 215 Q 602 145 605 85" stroke="var(--chalk-mint)" stroke-width="2.8" stroke-linecap="round" fill="none" />
          <path d="M 604 175 C 582 165 574 178 584 187 C 594 188 600 181 604 176 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 605 150 C 626 140 634 152 626 161 C 617 162 611 155 605 151 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Coneflower Head: Raised Spiky Cone & Drooping Ivory Petals -->
          <g transform="translate(605, 80)">
            <path d="M -16 5 C -24 15 -22 36 -18 42 C -15 36 -12 20 -10 5 Z" fill="rgba(250, 240, 202, 0.28)" stroke="#FAF0CA" stroke-width="1.8" />
            <path d="M -10 6 C -14 20 -12 40 -8 46 C -5 40 -4 22 -3 6 Z" fill="rgba(250, 240, 202, 0.28)" stroke="#FAF0CA" stroke-width="1.8" />
            <path d="M -3 7 C -4 22 -3 42 0 48 C 3 42 4 22 3 7 Z" fill="rgba(250, 240, 202, 0.28)" stroke="#FAF0CA" stroke-width="1.8" />
            <path d="M 3 6 C 4 22 5 40 8 46 C 12 40 14 20 10 6 Z" fill="rgba(250, 240, 202, 0.28)" stroke="#FAF0CA" stroke-width="1.8" />
            <path d="M 10 5 C 12 20 15 36 18 42 C 22 36 24 15 16 5 Z" fill="rgba(250, 240, 202, 0.28)" stroke="#FAF0CA" stroke-width="1.8" />
            <path d="M -14 5 C -14 -12 14 -12 14 5 Z" fill="#FFD166" stroke="#FAF0CA" stroke-width="2.2" />
            <path d="M -10 0 L 10 0 M -8 -4 L 8 -4 M -5 -8 L 5 -8" stroke="#181A1D" stroke-width="1.2" opacity="0.65" />
            <circle cx="0" cy="-3" r="1.5" fill="#181A1D" />
          </g>
          <!-- Chalk Label & Underline -->
          <text x="605" y="238" class="meadow-chalk-label">D13</text>
          <path d="M 588 244 Q 605 246 622 244" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8" />
        </g>

        <!-- SPECIMEN D14: Autumn Terracotta Flourishing Coneflower (x=735) -->
        <g class="meadow-plant-hotspot" data-day="14" id="plant-hotspot-d14">
          <rect x="690" y="20" width="90" height="235" fill="transparent" />
          <!-- Tall Stem -->
          <path d="M 735 215 Q 732 135 735 72" stroke="var(--chalk-mint)" stroke-width="2.8" stroke-linecap="round" fill="none" />
          <path d="M 734 140 Q 712 125 706 108" stroke="var(--chalk-mint)" stroke-width="2" fill="none" />
          <path d="M 706 108 C 700 100 706 95 706 95 C 706 95 712 100 706 108 Z" fill="rgba(239, 71, 111, 0.3)" stroke="#EF476F" stroke-width="1.6" />
          <path d="M 734 175 C 712 165 705 178 715 186 C 724 186 730 180 734 176 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 735 152 C 756 142 764 154 756 163 C 747 164 741 157 735 153 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Coneflower Head -->
          <g transform="translate(735, 68)">
            <path d="M -18 6 C -28 18 -26 42 -20 48 C -16 42 -14 24 -11 6 Z" fill="rgba(255, 158, 157, 0.35)" stroke="#FF9E9D" stroke-width="2" />
            <path d="M -11 7 C -16 22 -14 45 -9 52 C -5 45 -4 25 -3 7 Z" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="2" />
            <path d="M -3 8 C -4 24 -3 47 0 54 C 3 47 4 24 3 8 Z" fill="rgba(255, 158, 157, 0.35)" stroke="#FF9E9D" stroke-width="2" />
            <path d="M 3 7 C 4 25 5 45 9 52 C 14 45 16 22 11 7 Z" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="2" />
            <path d="M 11 6 C 14 24 16 42 20 48 C 26 42 28 18 18 6 Z" fill="rgba(255, 158, 157, 0.35)" stroke="#FF9E9D" stroke-width="2" />
            <path d="M -15 6 C -15 -14 15 -14 15 6 Z" fill="#FFD166" stroke="#FAF0CA" stroke-width="2.2" />
            <path d="M -12 0 L 12 0 M -9 -5 L 9 -5 M -6 -9 L 6 -9" stroke="#181A1D" stroke-width="1.3" opacity="0.65" />
          </g>
          <!-- Chalk Label & Underline -->
          <text x="735" y="238" class="meadow-chalk-label">D14</text>
          <path d="M 718 244 Q 735 246 752 244" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8" />
        </g>

        <!-- SPECIMEN D15: Golden Rudbeckia / Sunflower (Today's Star Flora) (x=875) -->
        <g class="meadow-plant-hotspot is-today-plant" data-day="15" id="plant-hotspot-d15">
          <rect x="825" y="10" width="100" height="245" fill="transparent" />
          <!-- Thick Sunflower Stem -->
          <path d="M 875 215 Q 872 125 875 58" stroke="var(--chalk-mint)" stroke-width="3.4" stroke-linecap="round" fill="none" />
          <!-- Leaves -->
          <path d="M 873 170 C 840 155 830 176 846 190 C 862 192 869 180 873 172 Z" fill="rgba(6, 214, 160, 0.24)" stroke="var(--chalk-mint)" stroke-width="2.2" />
          <path d="M 873 172 Q 852 173 842 178" stroke="var(--chalk-mint)" stroke-width="1.2" fill="none" />
          <path d="M 876 138 C 910 122 922 144 905 158 C 888 160 880 148 876 140 Z" fill="rgba(6, 214, 160, 0.24)" stroke="var(--chalk-mint)" stroke-width="2.2" />
          <path d="M 876 140 Q 898 141 909 146" stroke="var(--chalk-mint)" stroke-width="1.2" fill="none" />
          <!-- Pollen Sparkles -->
          <text x="836" y="44" font-family="'Kalam', cursive" font-size="14" fill="var(--chalk-amber)">✦</text>
          <text x="914" y="48" font-family="'Kalam', cursive" font-size="12" fill="var(--chalk-amber)">✦</text>
          <text x="896" y="24" font-family="'Kalam', cursive" font-size="15" fill="#FAF0CA">✦</text>
          <!-- Magnificent Flower Head -->
          <g transform="translate(875, 52)">
            <ellipse cx="0" cy="-24" rx="5.5" ry="12" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="9" cy="-22" rx="5.5" ry="12" transform="rotate(22.5 9 -22)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="17" cy="-17" rx="5.5" ry="12" transform="rotate(45 17 -17)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="22" cy="-9" rx="5.5" ry="12" transform="rotate(67.5 22 -9)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="24" cy="0" rx="5.5" ry="12" transform="rotate(90 24 0)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="22" cy="9" rx="5.5" ry="12" transform="rotate(112.5 22 9)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="17" cy="17" rx="5.5" ry="12" transform="rotate(135 17 17)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="9" cy="22" rx="5.5" ry="12" transform="rotate(157.5 9 22)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="0" cy="24" rx="5.5" ry="12" transform="rotate(180 0 24)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="-9" cy="22" rx="5.5" ry="12" transform="rotate(202.5 -9 22)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="-17" cy="17" rx="5.5" ry="12" transform="rotate(225 -17 17)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="-22" cy="9" rx="5.5" ry="12" transform="rotate(247.5 -22 9)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="-24" cy="0" rx="5.5" ry="12" transform="rotate(270 -24 0)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="-22" cy="-9" rx="5.5" ry="12" transform="rotate(292.5 -22 -9)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="-17" cy="-17" rx="5.5" ry="12" transform="rotate(315 -17 -17)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <ellipse cx="-9" cy="-22" rx="5.5" ry="12" transform="rotate(337.5 -9 -22)" fill="rgba(255, 209, 102, 0.4)" stroke="#FFD166" stroke-width="2.2" />
            <!-- Central Seed Disc Core -->
            <circle cx="0" cy="0" r="14" fill="#2E1D0E" stroke="#FFD166" stroke-width="2.4" />
            <circle cx="0" cy="0" r="10" fill="none" stroke="#FAF0CA" stroke-width="1.2" stroke-dasharray="2,2" opacity="0.8" />
            <circle cx="0" cy="0" r="6" fill="none" stroke="#FFD166" stroke-width="1.2" stroke-dasharray="2,2" opacity="0.8" />
            <circle cx="0" cy="0" r="2.5" fill="#FAF0CA" />
          </g>
          <!-- Chalk Label & Underline with Glowing Today Indicator -->
          <text x="875" y="234" class="meadow-chalk-label" style="fill: var(--chalk-amber);">D15</text>
          <path d="M 855 240 Q 875 242 895 240" stroke="var(--chalk-amber)" stroke-width="2.2" stroke-linecap="round" fill="none" />
          <text x="875" y="253" font-family="'Kalam', cursive" font-size="12" font-weight="700" fill="var(--chalk-amber)" text-anchor="middle">★ Today</text>
        </g>
      </svg>
    `;

    container.innerHTML = svgHTML;

    // Attach click listeners to all 8 specimen hotspots (Days 8 to 15)
    for (let day = 8; day <= 15; day++) {
      const hotspot = container.querySelector(`#plant-hotspot-d${day}`);
      if (hotspot) {
        hotspot.addEventListener('click', (e) => {
          e.stopPropagation();
          AudioEngine.playChalkScratch();
          emitDustParticles(hotspot.getBoundingClientRect());
          
          const isToday = day === TODAY_DAY_NUM;
          const dayData = AppState.gardenData[day] || {
            specimen: BOTANICAL_SPECIMENS_OCTOBER[day - 1] || 'Autumn Wildflower',
            tasks: isToday ? 1 : 5,
            planned: 5,
            focus: isToday ? AppState.focusTimeLoggedToday : 90,
            stage: day <= 14 ? 4 : 1
          };
          openGardenDayModal(day, dayData, GROWTH_STAGE_NAMES[dayData.stage || 0]);
        });
      }
    }
  }
};

// ==========================================================================
// 2. DATA STATE & LOCAL STORAGE PERSISTENCE
// ==========================================================================
const TODAY_DATE = '2026-10-15';
const TOMORROW_DATE = '2026-10-16';
const THIS_WEEK_END_DATE = '2026-10-18';
const TODAY_DAY_NUM = 15;

const GROWTH_STAGE_NAMES = ['Resting Seed', 'The Sprout', 'Branching Stem', 'Swelling Bud', 'Full Bloom'];

const BOTANICAL_SPECIMENS_OCTOBER = [
  'Sunburst Cosmos', 'Purple Wild Aster', 'Dormant Soil', 'White Coneflower', 'Golden Rudbeckia',
  'Heather Blossom', 'Autumn Terracotta', 'Meadow Daisy', 'Winter Jasmine', 'Forget-Me-Not',
  'Wild Poppy', 'Lavender Sprig', 'Chamomile', 'Coneflower', 'Sunburst Dahlia',
  'Sweet William', 'Cosmos Petal', 'Pansy', 'Primrose', 'Anemone',
  'Buttercup', 'Cornflower', 'Heather Blossom', 'Morning Glory', 'Foxglove Sprig',
  'Zinnia', 'Lupine', 'Carnation Sprig', 'Hydrangea Florets', 'Hibiscus', 'Evening Primrose'
];

const STORAGE_KEY = 'chalkflow_state_v7';

const DEFAULT_STATE = {
  theme: 'theme-parchment-cream',
  activeSurface: 'dashboard',
  tasks: [
    // Today's Slate Tasks (Thursday, October 15, 2026)
    {
      id: 'task-1',
      title: 'Complete CAT Quantitative Mock #4 (Algebra & Arithmetic)',
      priority: 'HIGH',
      category: 'ACADEMIC',
      estTime: 60,
      targetDate: '2026-10-15',
      status: 'TODO',
      isCarriedOver: true,
      subtasks: [
        { id: 'sub-1-1', title: 'Section 1: Arithmetic (20 Questions)', completed: true },
        { id: 'sub-1-2', title: 'Section 2: Algebra & Geometry (15 Questions)', completed: false }
      ],
      isExpanded: false
    },
    {
      id: 'task-2',
      title: 'Source brass hardware & buckle samples for bag prototype',
      priority: 'MEDIUM',
      category: 'CREATIVE',
      estTime: 45,
      targetDate: '2026-10-15',
      status: 'TODO',
      isCarriedOver: false,
      subtasks: [],
      isExpanded: false
    },
    {
      id: 'task-3',
      title: 'Buy A3 cartridge paper & 2B graphite pencils from stationery shop',
      priority: 'LOW',
      category: 'CREATIVE',
      estTime: 20,
      targetDate: '2026-10-15',
      status: 'COMPLETED',
      isCarriedOver: false,
      subtasks: [],
      isExpanded: false
    },
    // Upcoming Assignments for Tomorrow (Friday, October 16, 2026)
    {
      id: 'task-4',
      title: 'Accessory Design Jury Presentation Slide Deck',
      priority: 'HIGH',
      category: 'ACADEMIC',
      estTime: 90,
      targetDate: '2026-10-16',
      status: 'TODO',
      isCarriedOver: false,
      subtasks: [
        { id: 'sub-4-1', title: 'Compile ergonomic handle sketches & CAD renders', completed: true },
        { id: 'sub-4-2', title: 'Finalize material breakdown & cost sheet', completed: false },
        { id: 'sub-4-3', title: 'Rehearse 7-minute pitch & timing', completed: false }
      ],
      isExpanded: false
    },
    {
      id: 'task-tomorrow-2',
      title: 'Submit Fashion Forecasting Trend Moodboard & Swatch Analysis',
      priority: 'HIGH',
      category: 'ACADEMIC',
      estTime: 60,
      targetDate: '2026-10-16',
      status: 'TODO',
      isCarriedOver: false,
      subtasks: [],
      isExpanded: false
    },
    {
      id: 'task-tomorrow-3',
      title: 'Print 300gsm Laser Proofs for Brand Identity Packaging Project',
      priority: 'MEDIUM',
      category: 'CREATIVE',
      estTime: 40,
      targetDate: '2026-10-16',
      status: 'TODO',
      subtasks: [],
      isExpanded: false
    },
    {
      id: 'task-tomorrow-4',
      title: 'Peer Review & Feedback Session: Ergonomic Bag Strap Prototypes',
      priority: 'LOW',
      category: 'ACADEMIC',
      estTime: 30,
      targetDate: '2026-10-16',
      status: 'TODO',
      subtasks: [],
      isExpanded: false
    },
    // Later This Week (October 17 - 18, 2026)
    {
      id: 'task-5',
      title: 'Read Chapter 5: 20th Century Textile Movements & Bauhaus Influence',
      priority: 'MEDIUM',
      category: 'ACADEMIC',
      estTime: 30,
      targetDate: '2026-10-17',
      status: 'TODO',
      isCarriedOver: false,
      subtasks: [],
      isExpanded: false
    },
    {
      id: 'task-week-2',
      title: 'Restock acrylic paints & fine-tip calligraphy nibs for studio workshop',
      priority: 'LOW',
      category: 'CREATIVE',
      estTime: 25,
      targetDate: '2026-10-18',
      status: 'TODO',
      subtasks: [],
      isExpanded: false
    },
    // Next Week & Beyond (October 20, 2026+)
    {
      id: 'task-later-1',
      title: 'CAT Quantitative Mock #5: Probability & Modern Mathematics',
      priority: 'HIGH',
      category: 'ACADEMIC',
      estTime: 90,
      targetDate: '2026-10-20',
      status: 'TODO',
      subtasks: [],
      isExpanded: false
    },
    {
      id: 'task-later-2',
      title: 'Exhibition Hallway Layout Blueprint & Spot-Lighting Proposal',
      priority: 'MEDIUM',
      category: 'CREATIVE',
      estTime: 75,
      targetDate: '2026-10-22',
      status: 'TODO',
      subtasks: [],
      isExpanded: false
    }
  ],
  habits: [
    { id: 'h-1', name: 'Drink 4 Liters Water', icon: '💧', type: 'COUNTER', current: 2, target: 4, unit: 'L', completions: 13 },
    { id: 'h-2', name: '30 Mins Design Reading', icon: '📖', type: 'COUNTER', current: 15, target: 30, unit: 'm', completions: 12 },
    { id: 'h-3', name: 'Morning Sketchbook Drill', icon: '🎨', type: 'CHECK', current: 1, target: 1, unit: '', completions: 11 },
    { id: 'h-4', name: 'Evening Walk / Rest', icon: '🌿', type: 'CHECK', current: 1, target: 1, unit: '', completions: 12 }
  ],
  focusTimeLoggedToday: 45,
  gardenData: {
    1: { specimen: 'Sunburst Cosmos', tasks: 5, planned: 5, focus: 110, stage: 4 },
    2: { specimen: 'Purple Wild Aster', tasks: 4, planned: 4, focus: 85, stage: 4 },
    3: { specimen: 'Dormant Soil', tasks: 0, planned: 0, focus: 0, stage: 0 },
    4: { specimen: 'White Coneflower', tasks: 6, planned: 6, focus: 120, stage: 4 },
    5: { specimen: 'Golden Rudbeckia', tasks: 5, planned: 5, focus: 95, stage: 4 },
    6: { specimen: 'Heather Blossom', tasks: 3, planned: 4, focus: 55, stage: 2 },
    7: { specimen: 'Autumn Terracotta', tasks: 5, planned: 5, focus: 100, stage: 4 },
    8: { specimen: 'Meadow Daisy', tasks: 4, planned: 4, focus: 90, stage: 4 },
    9: { specimen: 'Winter Jasmine', tasks: 5, planned: 5, focus: 105, stage: 4 },
    10: { specimen: 'Forget-Me-Not', tasks: 0, planned: 0, focus: 0, stage: 0 },
    11: { specimen: 'Wild Poppy', tasks: 6, planned: 6, focus: 115, stage: 4 },
    12: { specimen: 'Lavender Sprig', tasks: 4, planned: 5, focus: 75, stage: 3 },
    13: { specimen: 'Chamomile', tasks: 5, planned: 5, focus: 90, stage: 4 },
    14: { specimen: 'Coneflower', tasks: 5, planned: 5, focus: 100, stage: 4 },
    15: { specimen: 'Sunburst Dahlia', tasks: 1, planned: 3, focus: 45, stage: 1 }
  }
};

let AppState = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    const oldSaved = localStorage.getItem('chalkflow_state_v6');
    if (oldSaved) {
      const oldState = JSON.parse(oldSaved);
      const migrated = { ...DEFAULT_STATE };
      if (oldState.theme) migrated.theme = oldState.theme;
      return migrated;
    }
    return DEFAULT_STATE;
  } catch (e) {
    return DEFAULT_STATE;
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(AppState));
  } catch (e) {
    console.error('Failed to save state:', e);
  }
}

// ==========================================================================
// 3. WEB AUDIO API SYNTHESIZER (SOUNDSCAPES & CHALK ACOUSTICS)
// ==========================================================================
class SoundscapeEngine {
  constructor() {
    this.ctx = null;
    this.activeNodes = [];
    this.currentSound = 'none';
    this.volume = 0.5;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.volume = parseFloat(val);
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  stopAll() {
    this.activeNodes.forEach(node => {
      try { node.stop(); } catch (e) {}
      try { node.disconnect(); } catch (e) {}
    });
    this.activeNodes = [];
    this.currentSound = 'none';
  }

  playChalkScratch() {
    this.initContext();
    const bufferSize = this.ctx.sampleRate * 0.08;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2400;
    filter.Q.value = 3.0;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.16, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start();
  }

  playFeltEraserSweep() {
    this.initContext();
    const bufferSize = this.ctx.sampleRate * 0.35;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 650;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.22, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start();
  }

  playSoundscape(type) {
    this.initContext();
    this.stopAll();

    if (type === 'none') {
      this.currentSound = 'none';
      return;
    }

    this.currentSound = type;
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);

    if (type === 'brown-noise') {
      const bufferSize = 2 * this.ctx.sampleRate;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5;
      }
      const brownNode = this.ctx.createBufferSource();
      brownNode.buffer = buffer;
      brownNode.loop = true;
      brownNode.connect(this.gainNode);
      brownNode.start();
      this.activeNodes.push(brownNode);

    } else if (type === 'rain') {
      const bufferSize = 2 * this.ctx.sampleRate;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11;
        b6 = white * 0.115926;
      }
      const rainNode = this.ctx.createBufferSource();
      rainNode.buffer = buffer;
      rainNode.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1200;

      rainNode.connect(filter);
      filter.connect(this.gainNode);
      rainNode.start();
      this.activeNodes.push(rainNode);

    } else if (type === 'campfire' || type === 'forest' || type === 'library') {
      const bufferSize = 2 * this.ctx.sampleRate;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.15;
      }
      const source = this.ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = type === 'campfire' ? 'bandpass' : (type === 'forest' ? 'lowpass' : 'peaking');
      filter.frequency.value = type === 'campfire' ? 450 : (type === 'forest' ? 350 : 800);
      filter.Q.value = 1.8;

      source.connect(filter);
      filter.connect(this.gainNode);
      source.start();
      this.activeNodes.push(source);
    }
  }
}

const AudioEngine = new SoundscapeEngine();

// ==========================================================================
// 4. UI CONTROLLER & DOM MANAGEMENT
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initBrandMascot();
  initNavigation();
  initDashboard();
  initTodaySlate();
  initUpcomingTasks();
  initProgressGarden();
  initHabitLedger();
  initDeepFocus();
  updateGlobalGrowthMetrics();
});

// --------------------------------------------------------------------------
// A. THEME SYSTEM
// --------------------------------------------------------------------------
function initTheme() {
  document.body.className = AppState.theme;

  const themeBtns = document.querySelectorAll('.theme-btn');
  themeBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === AppState.theme);
    btn.addEventListener('click', () => {
      AppState.theme = btn.dataset.theme;
      document.body.className = AppState.theme;
      themeBtns.forEach(b => b.classList.toggle('active', b.dataset.theme === AppState.theme));
      saveState();
      showToast(`Switched board to ${btn.querySelector('.theme-name').innerText}`);
    });
  });
}

// --------------------------------------------------------------------------
// B. SIDEBAR & NAVIGATION
// --------------------------------------------------------------------------
function navigateToSurface(surfaceId, linkedTaskId = null) {
  AppState.activeSurface = surfaceId;
  const navItems = document.querySelectorAll('.nav-item');
  const views = document.querySelectorAll('.surface-view');
  const pageTitle = document.getElementById('page-title');

  const titles = {
    'dashboard': 'Dashboard',
    'today-slate': "Today's Slate",
    'upcoming-tasks': 'Upcoming Tasks',
    'progress-garden': 'Progress Garden',
    'habit-ledger': 'Habit Ledger',
    'deep-focus': 'Deep Focus'
  };

  navItems.forEach(item => item.classList.toggle('active', item.dataset.surface === surfaceId));
  views.forEach(v => v.classList.toggle('active', v.id === `view-${surfaceId}`));
  if (pageTitle) pageTitle.innerText = titles[surfaceId] || "Dashboard";
  saveState();

  if (surfaceId === 'dashboard') renderDashboard();
  if (surfaceId === 'progress-garden') renderProgressGarden();
  if (surfaceId === 'habit-ledger') renderHabitLedger();

  if (surfaceId === 'deep-focus' && linkedTaskId) {
    const focusSelect = document.getElementById('focus-linked-task-select');
    if (focusSelect) {
      focusSelect.value = linkedTaskId;
      showToast('Task anchored to Deep Focus');
    }
  }
}

function initBrandMascot() {
  const wrap = document.getElementById('brand-avatar-wrap');
  if (!wrap) return;
  wrap.innerHTML = ChalkMascot.renderPandaSVG(46);
  wrap.title = "Chalkflow Panda Mascot • Click for chalk dust";
  wrap.addEventListener('click', () => {
    AudioEngine.playChalkScratch();
    emitDustParticles(wrap.getBoundingClientRect());
    showToast("🐼 Chalkflow: Mindful productivity one stroke at a time!");
  });
}

function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(btn => {
    btn.addEventListener('click', () => navigateToSurface(btn.dataset.surface));
  });
  navigateToSurface(AppState.activeSurface || 'dashboard');
}

// --------------------------------------------------------------------------
// C. DASHBOARD CONTROLLER (PROGRESS RINGS, BOXES & COLLECTED SPECIES)
// --------------------------------------------------------------------------
function initDashboard() {
  // Navigation links within dashboard boxes
  document.querySelectorAll('.dash-nav-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSurface = btn.dataset.goto;
      if (targetSurface) {
        navigateToSurface(targetSurface);
      }
    });
  });

  renderDashboard();
}

function renderDashboard() {
  const dashView = document.getElementById('view-dashboard');
  if (!dashView) return;

  const circumference = 213.63; // 2 * Math.PI * 34 for r=34

  // 1. TOP METRICS: TASKS PROGRESS RING
  const todayTasks = AppState.tasks.filter(t => t.targetDate === TODAY_DATE);
  const completedTasks = todayTasks.filter(t => t.status === 'COMPLETED').length;
  const totalTasks = todayTasks.length;
  const tasksPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const tasksCircle = document.getElementById('ring-tasks-circle');
  const tasksPercentText = document.getElementById('ring-tasks-percent');
  const dashTasksRatio = document.getElementById('dash-tasks-ratio');
  const dashTasksSub = document.getElementById('dash-tasks-sub');

  if (tasksCircle) {
    tasksCircle.style.strokeDashoffset = circumference * (1 - tasksPercent / 100);
  }
  if (tasksPercentText) tasksPercentText.innerText = `${tasksPercent}%`;
  if (dashTasksRatio) dashTasksRatio.innerText = `${completedTasks} / ${totalTasks} Tasks`;
  if (dashTasksSub) {
    const remaining = totalTasks - completedTasks;
    dashTasksSub.innerText = remaining === 0 && totalTasks > 0 ? 'All slate tasks completed! ✨' : `${remaining} task${remaining !== 1 ? 's' : ''} remaining today`;
  }

  // 2. TOP METRICS: HABITS PROGRESS RING
  const completedHabits = AppState.habits.filter(h => h.current >= h.target).length;
  const totalHabits = AppState.habits.length;
  const habitsPercent = totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0;

  const habitsCircle = document.getElementById('ring-habits-circle');
  const habitsPercentText = document.getElementById('ring-habits-percent');
  const dashHabitsRatio = document.getElementById('dash-habits-ratio');
  const dashHabitsSub = document.getElementById('dash-habits-sub');

  if (habitsCircle) {
    habitsCircle.style.strokeDashoffset = circumference * (1 - habitsPercent / 100);
  }
  if (habitsPercentText) habitsPercentText.innerText = `${habitsPercent}%`;
  if (dashHabitsRatio) dashHabitsRatio.innerText = `${completedHabits} / ${totalHabits} Habits`;
  if (dashHabitsSub) {
    dashHabitsSub.innerText = `${completedHabits} of ${totalHabits} daily rhythms finished`;
  }

  // 3. TOP METRICS: FOCUS TIMED PROGRESS RING
  const focusGoal = 60; // 60 mins daily mindful focus target
  const currentFocus = AppState.focusTimeLoggedToday || 0;
  const focusPercent = Math.min(100, Math.round((currentFocus / focusGoal) * 100));

  const focusCircle = document.getElementById('ring-focus-circle');
  const focusPercentText = document.getElementById('ring-focus-percent');
  const dashFocusRatio = document.getElementById('dash-focus-ratio');
  const dashFocusSub = document.getElementById('dash-focus-sub');

  if (focusCircle) {
    focusCircle.style.strokeDashoffset = circumference * (1 - focusPercent / 100);
  }
  if (focusPercentText) focusPercentText.innerText = `${focusPercent}%`;
  if (dashFocusRatio) dashFocusRatio.innerText = `${currentFocus} / ${focusGoal}m`;
  if (dashFocusSub) {
    dashFocusSub.innerText = currentFocus >= focusGoal ? 'Daily focus target reached!' : `${focusGoal - currentFocus}m left for daily target`;
  }

  // 4. MIDDLE ROW: BIG BOX 1 - TODAY'S TASKS ALL TOGETHER
  const taskStream = document.getElementById('dash-tasks-stream');
  const todayBadge = document.getElementById('dash-today-count-badge');
  if (todayBadge) todayBadge.innerText = `${todayTasks.length} task${todayTasks.length !== 1 ? 's' : ''}`;

  if (taskStream) {
    taskStream.innerHTML = '';
    if (todayTasks.length === 0) {
      taskStream.innerHTML = `<div class="dash-task-empty chalk-font">No tasks on today's slate yet.</div>`;
    } else {
      const priorityWeights = { HIGH: 3, MEDIUM: 2, LOW: 1 };
      const sortedTodayTasks = [...todayTasks].sort((a, b) => {
        if (a.status !== b.status) return a.status === 'COMPLETED' ? 1 : -1;
        return (priorityWeights[b.priority] || 0) - (priorityWeights[a.priority] || 0);
      });

      sortedTodayTasks.forEach(task => {
        const item = document.createElement('div');
        const isDone = task.status === 'COMPLETED';
        const priorityClass = task.priority === 'HIGH' ? 'priority-high' : (task.priority === 'MEDIUM' ? 'priority-medium' : 'priority-low');
        const priorityDot = task.priority === 'HIGH' ? '🔴' : (task.priority === 'MEDIUM' ? '🟡' : '🟢');

        item.className = `dash-task-item ${priorityClass} ${isDone ? 'is-completed' : ''}`;

        const subtaskCount = task.subtasks ? task.subtasks.length : 0;
        const subtasksDone = task.subtasks ? task.subtasks.filter(s => s.completed).length : 0;
        const subtaskPill = subtaskCount > 0 ? `<span class="dash-task-pill chalk-font">(${subtasksDone}/${subtaskCount})</span>` : '';
        const timePill = task.estTime ? `<span class="dash-task-pill"><i class="fa-regular fa-clock"></i> ${task.estTime}m</span>` : '';

        item.innerHTML = `
          <div class="dash-task-check" title="Toggle completion">
            <span class="custom-chalk-checkbox ${isDone ? 'checked' : ''}">
              ${isDone ? '<i class="fa-solid fa-check"></i>' : ''}
            </span>
          </div>
          <div class="dash-task-body">
            <span class="dot-glyph" style="font-size:12px;">${priorityDot}</span>
            <span class="dash-task-text" title="${task.title}">${task.title}</span>
            ${subtaskPill}
            ${timePill}
          </div>
        `;

        const checkBtn = item.querySelector('.dash-task-check');
        checkBtn.addEventListener('click', () => {
          task.status = task.status === 'COMPLETED' ? 'TODO' : 'COMPLETED';
          if (task.status === 'COMPLETED') {
            AudioEngine.playChalkScratch();
            emitDustParticles(checkBtn.getBoundingClientRect());
            showToast('Marked task complete! 🌱');
          } else {
            AudioEngine.playChalkScratch();
            showToast('Reopened task to slate');
          }
          saveState();
          renderTodaySlate();
          renderDashboard();
          updateGlobalGrowthMetrics();
        });

        taskStream.appendChild(item);
      });
    }
  }

  // 5. MIDDLE ROW: BIG BOX 2 - DAILY GROWTH PROGRESS
  const todayGardenData = AppState.gardenData[TODAY_DAY_NUM] || { specimen: 'Sunburst Dahlia', tasks: completedTasks, planned: totalTasks, focus: currentFocus, stage: 0 };
  const currentStage = todayGardenData.stage || 0;
  const specimenName = todayGardenData.specimen || 'Sunburst Dahlia';

  const stageNames = ['Resting Seed', 'The Sprout', 'Branching Stem', 'Swelling Bud', 'Full Bloom'];
  const stageQuotes = [
    '"Growth happens below the soil too. Ground yourself with your first task today."',
    '"A quiet shoot breaks the earth. Momentum begins with a single mindful action."',
    '"Stems and leaves expand into the light. Your rhythm is finding steady strength."',
    '"A budding blossom forms with patience. Full bloom is just a step away."',
    '"Radiant full bloom achieved today! Mindful consistency bore beautiful fruit."'
  ];

  const stagePill = document.getElementById('dash-growth-stage-pill');
  const flowerVisual = document.getElementById('dash-today-flower-visual');
  const specimenTitle = document.getElementById('dash-today-specimen-name');
  const quoteEl = document.getElementById('dash-growth-quote');

  if (stagePill) stagePill.innerText = stageNames[currentStage];
  if (flowerVisual) flowerVisual.innerHTML = ChalkBotanicals.getBotanicalSVG(currentStage, 74, TODAY_DAY_NUM);
  if (specimenTitle) specimenTitle.innerText = `🌸 ${specimenName}`;
  if (quoteEl) quoteEl.innerText = stageQuotes[currentStage];

  const stepperSteps = document.querySelectorAll('.dash-stages-stepper .stepper-step');
  stepperSteps.forEach(step => {
    const stepIdx = parseInt(step.dataset.step, 10);
    step.classList.remove('active', 'completed');
    if (stepIdx === currentStage) {
      step.classList.add('active');
    } else if (stepIdx < currentStage) {
      step.classList.add('completed');
    }
  });

  // 6. BOTTOM ROW: BIG BOX 3 - COLLECTED BOTANICALS & SPECIES SHOWCASE
  const collectionGrid = document.getElementById('dash-collected-plants-grid');
  const countBadge = document.getElementById('dash-collected-count-badge');

  if (collectionGrid) {
    collectionGrid.innerHTML = '';

    const bloomedDays = [];
    for (let d = 1; d <= 31; d++) {
      if (AppState.gardenData[d] && AppState.gardenData[d].stage === 4) {
        bloomedDays.push(d);
      }
    }
    if (currentStage === 4 && !bloomedDays.includes(TODAY_DAY_NUM)) {
      bloomedDays.push(TODAY_DAY_NUM);
    }

    const collectedSpecies = bloomedDays.map(d => {
      const g = AppState.gardenData[d] || {};
      return {
        day: d,
        name: g.specimen || (typeof BOTANICAL_SPECIMENS_OCTOBER !== 'undefined' ? BOTANICAL_SPECIMENS_OCTOBER[d - 1] : 'Wild Botanical'),
        focus: g.focus || 90,
        tasks: g.tasks || 5
      };
    });

    if (countBadge) countBadge.innerText = `${collectedSpecies.length} Species Harvested`;

    collectedSpecies.forEach(plant => {
      const card = document.createElement('div');
      card.className = 'dash-plant-card';
      card.innerHTML = `
        <div class="dash-plant-svg-wrap">
          ${ChalkBotanicals.getBotanicalSVG(4, 56, plant.day)}
        </div>
        <div class="dash-plant-name chalk-font">${plant.name}</div>
        <div class="dash-plant-meta">${plant.tasks} tasks • ${plant.focus}m focus</div>
        <span class="dash-plant-badge chalk-font"><i class="fa-solid fa-seedling"></i> Bloomed</span>
      `;
      collectionGrid.appendChild(card);
    });
  }
}

// --------------------------------------------------------------------------
// D. TODAY'S SLATE (STRICT PRIORITY STREAM: RED -> YELLOW -> GREEN)
// --------------------------------------------------------------------------
function initTodaySlate() {
  const form = document.getElementById('today-add-form');
  const eraseCompletedBtn = document.getElementById('btn-erase-completed');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('task-title-input').value.trim();
      const priority = document.querySelector('input[name="task-priority"]:checked').value;
      const category = document.getElementById('task-category-select').value;
      const estTime = parseInt(document.getElementById('task-est-time').value, 10);

      const newTask = {
        id: `task-${Date.now()}`,
        title,
        priority,
        category,
        estTime,
        targetDate: TODAY_DATE,
        status: 'TODO',
        isCarriedOver: false,
        subtasks: [],
        isExpanded: false
      };

      AppState.tasks.unshift(newTask);
      saveState();
      renderTodaySlate();
      updateGlobalGrowthMetrics();
      AudioEngine.playChalkScratch();

      form.reset();
      showToast('Pinned task to Today\'s Slate');
    });
  }

  if (eraseCompletedBtn) {
    eraseCompletedBtn.addEventListener('click', () => {
      const completedCount = AppState.tasks.filter(t => t.status === 'COMPLETED' && t.targetDate === TODAY_DATE).length;
      if (completedCount === 0) {
        showToast('No completed tasks to erase.');
        return;
      }

      AudioEngine.playFeltEraserSweep();
      emitDustParticles(eraseCompletedBtn.getBoundingClientRect());

      AppState.tasks = AppState.tasks.filter(t => !(t.status === 'COMPLETED' && t.targetDate === TODAY_DATE));
      saveState();
      renderTodaySlate();
      updateGlobalGrowthMetrics();
      showToast('Completed tasks erased into resting soil ✨');
    });
  }

  renderTodaySlate();
}

function renderTodaySlate() {
  const taskList = document.getElementById('unified-today-task-list');
  const badge = document.getElementById('today-pending-badge');

  if (!taskList) return;
  taskList.innerHTML = '';

  const todayTasks = AppState.tasks.filter(t => t.targetDate === TODAY_DATE);
  const pendingCount = todayTasks.filter(t => t.status !== 'COMPLETED').length;
  if (badge) badge.innerText = pendingCount;

  if (todayTasks.length === 0) {
    taskList.innerHTML = `
      <div class="chalk-card" style="text-align:center; padding: 24px 16px;">
        <div style="display:flex; justify-content:center; margin-bottom:6px;">${ChalkBotanicals.renderRestingSeed(36)}</div>
        <h4 class="chalk-font" style="font-size: 15px;">A Clean Slate</h4>
        <p style="color: var(--text-muted); font-size: 12px; margin-top: 2px;">Write a task above or enjoy this quiet moment of rest.</p>
      </div>
    `;
    populateFocusTaskDropdown();
    return;
  }

  // Automatic Priority Sorting: High (🔴) -> Medium (🟡) -> Low (🟢)
  const priorityWeight = { 'HIGH': 1, 'MEDIUM': 2, 'LOW': 3 };
  const sortedTasks = [...todayTasks].sort((a, b) => {
    // Uncompleted first, completed last
    if (a.status === 'COMPLETED' && b.status !== 'COMPLETED') return 1;
    if (a.status !== 'COMPLETED' && b.status === 'COMPLETED') return -1;
    return (priorityWeight[a.priority] || 2) - (priorityWeight[b.priority] || 2);
  });

  sortedTasks.forEach(t => {
    taskList.appendChild(createTaskCardElement(t));
  });

  populateFocusTaskDropdown();
}

function createTaskCardElement(task) {
  const card = document.createElement('div');
  const isHighPriority = task.priority === 'HIGH';
  card.className = `task-card ${isHighPriority ? 'is-high-priority' : ''} ${task.status === 'COMPLETED' ? 'completed' : ''}`;
  card.id = `card-${task.id}`;

  const priorityDot = task.priority === 'HIGH' ? '🔴' : (task.priority === 'MEDIUM' ? '🟡' : '🟢');
  const carriedBadge = task.isCarriedOver ? `<span class="carried-over-badge chalk-font">↪ Carried over</span>` : '';
  const estPill = task.estTime ? `<span class="meta-pill"><i class="fa-regular fa-clock"></i> ${task.estTime}m</span>` : '';
  const catPill = `<span class="meta-pill"><i class="fa-solid fa-tag"></i> ${task.category.toLowerCase()}</span>`;
  
  const subtasksCount = task.subtasks ? task.subtasks.length : 0;
  const subtasksCompleted = task.subtasks ? task.subtasks.filter(s => s.completed).length : 0;
  const subtaskPill = subtasksCount > 0 ? `<span class="subtask-count-pill chalk-font">(${subtasksCompleted}/${subtasksCount} steps)</span>` : '';

  let subtasksDrawerHTML = '';
  if (task.isExpanded) {
    const itemsHTML = (task.subtasks || []).map(sub => `
      <div class="nested-subtask-item ${sub.completed ? 'completed' : ''}" data-task-id="${task.id}" data-sub-id="${sub.id}">
        <span class="custom-chalk-checkbox" style="width:14px;height:14px;font-size:9px;">${sub.completed ? '✓' : ''}</span>
        <span>${sub.title}</span>
      </div>
    `).join('');

    subtasksDrawerHTML = `
      <div class="subtasks-drawer-inline">
        ${itemsHTML}
        <div class="inline-subtask-add-row">
          <input type="text" class="chalk-input subtask-mini-input" placeholder="+ Add a micro-step..." data-task-id="${task.id}">
          <button type="button" class="chalk-btn secondary-btn chalk-font" style="padding:3px 8px; font-size:11px;" data-action="add-subtask" data-task-id="${task.id}">Add</button>
        </div>
      </div>
    `;
  }

  card.innerHTML = `
    <div class="task-main-row">
      <div class="task-checkbox-wrap" data-task-id="${task.id}" title="Complete task">
        <div class="custom-chalk-checkbox">${task.status === 'COMPLETED' ? '✓' : ''}</div>
      </div>
      
      <div class="task-body-interactive">
        <div class="task-title-line">
          <span class="dot-glyph">${priorityDot}</span>
          <span class="task-title">${task.title}</span>
          ${carriedBadge}
          ${subtaskPill}
        </div>
        <div class="task-meta-row">
          ${estPill}
          ${catPill}
        </div>
      </div>

      <div class="task-actions">
        <!-- Dedicated Steps / Subtasks Button -->
        <button class="subtasks-toggle-btn chalk-font ${task.isExpanded ? 'expanded' : ''}" title="View & add micro-steps" data-subtasks-toggle="${task.id}">
          <i class="fa-solid fa-list-check"></i> Steps
        </button>

        <!-- Focus Button -->
        <button class="focus-task-btn chalk-font" title="Start Deep Focus with this task" data-focus-task="${task.id}">
          <i class="fa-solid fa-brain"></i> Focus
        </button>

        <!-- Delete Button -->
        <button class="icon-action-btn delete-btn" title="Erase task" data-task-id="${task.id}">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
    ${subtasksDrawerHTML}
  `;

  // Checkbox Handler
  const checkWrap = card.querySelector('.task-checkbox-wrap');
  checkWrap.addEventListener('click', (e) => {
    e.stopPropagation();
    task.status = task.status === 'COMPLETED' ? 'TODO' : 'COMPLETED';
    AudioEngine.playChalkScratch();
    emitDustParticles(checkWrap.getBoundingClientRect());
    saveState();
    renderTodaySlate();
    updateGlobalGrowthMetrics();
  });

  // Dedicated Steps Button Handler (Expands on click, collapses on re-click)
  const stepsBtn = card.querySelector('[data-subtasks-toggle]');
  stepsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    task.isExpanded = !task.isExpanded;
    saveState();
    renderTodaySlate();
  });

  // Focus Button Handler
  const focusBtn = card.querySelector('[data-focus-task]');
  focusBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateToSurface('deep-focus', task.id);
  });

  // Subtask Checkbox Handlers
  card.querySelectorAll('.nested-subtask-item').forEach(subEl => {
    subEl.addEventListener('click', (e) => {
      e.stopPropagation();
      const subId = subEl.dataset.subId;
      const targetSub = (task.subtasks || []).find(s => s.id === subId);
      if (targetSub) {
        targetSub.completed = !targetSub.completed;
        AudioEngine.playChalkScratch();
        saveState();
        renderTodaySlate();
        updateGlobalGrowthMetrics();
      }
    });
  });

  // Add Subtask Inline Handler
  const miniInput = card.querySelector('.subtask-mini-input');
  const addSubBtn = card.querySelector('[data-action="add-subtask"]');

  function handleAddSubtask() {
    if (!miniInput) return;
    const val = miniInput.value.trim();
    if (val) {
      if (!task.subtasks) task.subtasks = [];
      task.subtasks.push({ id: `sub-${Date.now()}`, title: val, completed: false });
      AudioEngine.playChalkScratch();
      saveState();
      renderTodaySlate();
    }
  }

  if (miniInput) {
    miniInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAddSubtask();
      }
    });
  }
  if (addSubBtn) {
    addSubBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleAddSubtask();
    });
  }

  card.querySelector('.delete-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    AppState.tasks = AppState.tasks.filter(t => t.id !== task.id);
    saveState();
    renderTodaySlate();
    updateGlobalGrowthMetrics();
  });

  return card;
}

// --------------------------------------------------------------------------
// D. UPCOMING TASKS CONTROLLER
// --------------------------------------------------------------------------
function initUpcomingTasks() {
  const form = document.getElementById('upcoming-add-form');
  const dateInput = document.getElementById('upcoming-date-input');
  if (dateInput) {
    dateInput.min = TOMORROW_DATE;
    if (!dateInput.value || dateInput.value < TOMORROW_DATE) {
      dateInput.value = TOMORROW_DATE;
    }
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('upcoming-title-input').value.trim();
      const targetDate = document.getElementById('upcoming-date-input').value || TOMORROW_DATE;
      const priority = document.querySelector('input[name="upcoming-priority"]:checked').value;
      const category = document.getElementById('upcoming-category-select').value;

      const newTask = {
        id: `task-${Date.now()}`,
        title,
        priority,
        category,
        estTime: 45,
        targetDate,
        status: 'TODO',
        isCarriedOver: false,
        subtasks: [],
        isExpanded: false
      };

      AppState.tasks.push(newTask);
      saveState();
      renderUpcomingTasks();
      form.reset();
      if (dateInput) dateInput.value = TOMORROW_DATE;
      showToast('Scheduled task in Future Planning Shelf');
    });
  }

  renderUpcomingTasks();
}

function renderUpcomingTasks() {
  const listTomorrow = document.getElementById('list-tomorrow');
  const listThisWeek = document.getElementById('list-this-week');
  const listLater = document.getElementById('list-later');
  const badge = document.getElementById('upcoming-badge');

  if (!listTomorrow || !listThisWeek || !listLater) return;

  listTomorrow.innerHTML = '';
  listThisWeek.innerHTML = '';
  listLater.innerHTML = '';

  const upcomingTasks = AppState.tasks.filter(t => t.targetDate > TODAY_DATE);
  if (badge) badge.innerText = upcomingTasks.length;

  let countTomorrow = 0, countThisWeek = 0, countLater = 0;

  upcomingTasks.forEach(t => {
    const item = document.createElement('div');
    item.className = 'task-card';
    const dot = t.priority === 'HIGH' ? '🔴' : (t.priority === 'MEDIUM' ? '🟡' : '🟢');
    item.innerHTML = `
      <div class="task-main-row">
        <span class="dot-glyph">${dot}</span>
        <div class="task-body-interactive" style="cursor:default;">
          <div class="task-title" style="font-size:13px;">${t.title}</div>
          <div class="task-meta-row">
            <span class="meta-pill"><i class="fa-regular fa-calendar"></i> ${t.targetDate}</span>
          </div>
        </div>
        <button class="chalk-btn secondary-btn chalk-font" style="padding:3px 7px;font-size:11px;" data-move-id="${t.id}">
          Move to Today
        </button>
      </div>
    `;

    item.querySelector('[data-move-id]').addEventListener('click', () => {
      t.targetDate = TODAY_DATE;
      saveState();
      renderUpcomingTasks();
      renderTodaySlate();
      showToast('Moved task to Today\'s Slate');
    });

    if (t.targetDate === TOMORROW_DATE) {
      listTomorrow.appendChild(item);
      countTomorrow++;
    } else if (t.targetDate <= THIS_WEEK_END_DATE) {
      listThisWeek.appendChild(item);
      countThisWeek++;
    } else {
      listLater.appendChild(item);
      countLater++;
    }
  });

  document.getElementById('count-tomorrow').innerText = countTomorrow;
  document.getElementById('count-this-week').innerText = countThisWeek;
  document.getElementById('count-later').innerText = countLater;
}

// --------------------------------------------------------------------------
// E. PROGRESS GARDEN (RICH WILDFLOWER MEADOW & JOURNAL)
// --------------------------------------------------------------------------
function initProgressGarden() {
  const modal = document.getElementById('garden-day-modal');
  const closeBtn = document.getElementById('btn-close-garden-modal');
  const dismissBtn = document.getElementById('btn-modal-dismiss');

  if (closeBtn) closeBtn.addEventListener('click', () => modal.style.display = 'none');
  if (dismissBtn) dismissBtn.addEventListener('click', () => modal.style.display = 'none');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  renderProgressGarden();
}

function renderProgressGarden() {
  const grid = document.getElementById('botanical-calendar-grid');
  const meadowViewport = document.getElementById('meadow-panorama-viewport');
  const bloomCountEl = document.getElementById('meadow-bloom-count');
  const totalFocusEl = document.getElementById('meadow-total-focus');

  // 1. Render Handcrafted Vector Chalk Botanical Meadow Panorama (Image 1 Style)
  if (meadowViewport) {
    ChalkMeadowPanorama.renderMeadow(meadowViewport);
  }

  // 2. 31-Day Illustrated Nature Journal Grid
  if (grid) {
    grid.innerHTML = '';
    let fullBlooms = 0;
    let totalFocusMinutes = 0;

    for (let day = 1; day <= 31; day++) {
      const isToday = day === TODAY_DAY_NUM;
      const dayData = AppState.gardenData[day] || {
        specimen: BOTANICAL_SPECIMENS_OCTOBER[day - 1] || 'Autumn Wildflower',
        tasks: 0,
        planned: 0,
        focus: 0,
        stage: 0
      };

      if (dayData.stage === 4) fullBlooms++;
      totalFocusMinutes += dayData.focus;

      const tile = document.createElement('div');
      tile.className = `calendar-day-tile ${isToday ? 'is-today' : ''}`;
      tile.innerHTML = `
        <div class="tile-top">
          <span class="day-num">${day < 10 ? '0' + day : day}</span>
          <span class="stage-tag">${isToday ? '★ Today' : ''}</span>
        </div>
        <div class="tile-artwork-svg">${ChalkBotanicals.getBotanicalSVG(dayData.stage, 34, day)}</div>
        <div class="tile-bottom chalk-font">${dayData.specimen}</div>
      `;

      tile.addEventListener('click', () => {
        AudioEngine.playChalkScratch();
        emitDustParticles(tile.getBoundingClientRect());
        openGardenDayModal(day, dayData, GROWTH_STAGE_NAMES[dayData.stage || 0]);
      });

      grid.appendChild(tile);
    }

    if (bloomCountEl) bloomCountEl.innerText = `${fullBlooms}/31`;
    if (totalFocusEl) {
      const hrs = Math.floor(totalFocusMinutes / 60);
      const mins = totalFocusMinutes % 60;
      totalFocusEl.innerText = `${hrs}h ${mins}m`;
    }
  }
}

function openGardenDayModal(day, dayData, stageName = null) {
  const modal = document.getElementById('garden-day-modal');
  if (!modal) return;

  const currentStage = dayData ? (dayData.stage ?? 0) : 0;
  const currentStageName = stageName || GROWTH_STAGE_NAMES[currentStage] || 'Resting Seed';
  const specimenName = dayData?.specimen || (BOTANICAL_SPECIMENS_OCTOBER[day - 1] || 'Autumn Wildflower');
  const tasksRatio = `${dayData?.tasks ?? 0} / ${dayData?.planned || dayData?.tasks || 5} tasks`;
  const focusTime = `${dayData?.focus ?? 0} mins`;

  // Calculate habit completions for this day
  const isToday = day === TODAY_DAY_NUM;
  const totalHabits = AppState.habits.length || 4;
  const completedHabitsToday = AppState.habits.filter(h => h.current >= (h.type === 'COUNTER' ? h.target : 1)).length;
  const habitsRatio = isToday
    ? `${completedHabitsToday} / ${totalHabits} habits`
    : (day < TODAY_DAY_NUM ? `${Math.min(totalHabits, 3 + (day % 2))} / ${totalHabits} habits` : `0 / ${totalHabits} habits`);

  const speciesNameEl = document.getElementById('modal-species-name');
  const dateTitleEl = document.getElementById('modal-date-title');
  const flowerVisualEl = document.getElementById('modal-flower-visual');
  const growthStageEl = document.getElementById('modal-growth-stage');
  const tasksRatioEl = document.getElementById('modal-tasks-ratio');
  const habitsRatioEl = document.getElementById('modal-habits-ratio');
  const focusTimeEl = document.getElementById('modal-focus-time');
  const quoteEl = document.getElementById('modal-encouragement-quote');

  if (speciesNameEl) speciesNameEl.innerText = `🌸 ${specimenName}`;
  if (dateTitleEl) dateTitleEl.innerText = `October ${day}, 2026`;
  if (flowerVisualEl) flowerVisualEl.innerHTML = ChalkBotanicals.getBotanicalSVG(currentStage, 74, day);
  if (growthStageEl) growthStageEl.innerText = currentStageName;
  if (tasksRatioEl) tasksRatioEl.innerText = tasksRatio;
  if (habitsRatioEl) habitsRatioEl.innerText = habitsRatio;
  if (focusTimeEl) focusTimeEl.innerText = focusTime;

  if (quoteEl) {
    if (currentStage === 0) {
      quoteEl.innerText = '"A quiet day of rest. Growth happens below the soil, too."';
    } else if (currentStage === 4) {
      quoteEl.innerText = '"Full bloom dedication. Your hard work is permanently captured in your daily rhythm."';
    } else {
      quoteEl.innerText = '"Steady momentum rooted in patience. Every habit and sprout strengthens your growth."';
    }
  }

  modal.style.display = 'flex';
}

// --------------------------------------------------------------------------
// F. HABIT LEDGER CONTROLLER (STACKED TREE & INTERACTIVE LITRE COUNTER)
// --------------------------------------------------------------------------
function initHabitLedger() {
  const addModal = document.getElementById('add-habit-modal');
  const openModalBtn = document.getElementById('btn-add-habit-modal');
  const closeModalBtn = document.getElementById('btn-close-habit-modal');
  const cancelModalBtn = document.getElementById('btn-cancel-habit');
  const form = document.getElementById('new-habit-form');

  if (openModalBtn) openModalBtn.addEventListener('click', () => addModal.style.display = 'flex');
  if (closeModalBtn) closeModalBtn.addEventListener('click', () => addModal.style.display = 'none');
  if (cancelModalBtn) cancelModalBtn.addEventListener('click', () => addModal.style.display = 'none');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('new-habit-name').value.trim();
      const type = document.getElementById('new-habit-type').value;
      const target = parseInt(document.getElementById('new-habit-target').value, 10) || 1;
      const icon = document.getElementById('new-habit-icon').value;

      const newHabit = {
        id: `h-${Date.now()}`,
        name,
        icon,
        type,
        current: 0,
        target,
        unit: type === 'COUNTER' ? (name.toLowerCase().includes('water') ? 'L' : 'pts') : '',
        completions: 1
      };

      AppState.habits.push(newHabit);
      saveState();
      renderHabitLedger();
      addModal.style.display = 'none';
      form.reset();
      showToast('Planted new habit companion 🌱');
    });
  }

  renderHabitLedger();
}

function renderHabitLedger() {
  const container = document.getElementById('habit-items-list');
  const progressBar = document.getElementById('habit-progress-bar');
  const progressText = document.getElementById('habit-progress-text');

  if (!container) return;
  container.innerHTML = '';

  let totalCompletions = 0;
  AppState.habits.forEach(h => {
    totalCompletions += h.completions;

    const card = document.createElement('div');
    card.className = 'habit-card';

    let actionHTML = '';
    if (h.type === 'COUNTER') {
      const isComplete = h.current >= h.target;
      const isExceeded = h.current > h.target;
      const icon = isExceeded ? 'fa-star' : (isComplete ? 'fa-check' : 'fa-plus');
      actionHTML = `
        <button class="habit-counter-pill ${isComplete ? 'completed' : ''} ${isExceeded ? 'exceeded' : ''}" data-habit-id="${h.id}" title="Click to increment ${h.unit || ''}">
          <span>${h.current}/${h.target} ${h.unit}</span>
          <i class="fa-solid ${icon}"></i>
        </button>
      `;
    } else {
      const isChecked = h.current >= 1;
      actionHTML = `
        <button class="habit-counter-pill ${isChecked ? 'completed' : ''}" data-habit-id="${h.id}" title="Toggle daily completion">
          <span>${isChecked ? 'Completed' : 'To Do'}</span>
          <i class="fa-solid ${isChecked ? 'fa-check' : 'fa-plus'}"></i>
        </button>
      `;
    }

    card.innerHTML = `
      <div class="habit-info-left">
        <span class="habit-icon">${h.icon}</span>
        <div>
          <div class="habit-name">${h.name}</div>
          <div class="habit-tally">${h.completions}/8 days completed this month</div>
        </div>
      </div>
      <div class="habit-action-controls">
        ${actionHTML}
      </div>
    `;

    const counterBtn = card.querySelector('.habit-counter-pill');
    counterBtn.addEventListener('click', () => {
      AudioEngine.playChalkScratch();
      emitDustParticles(counterBtn.getBoundingClientRect());

      if (h.type === 'COUNTER') {
        h.current += 1;
        if (h.current > h.target) {
          showToast(`🌟 ${h.name}: ${h.current}/${h.target} ${h.unit} (Target exceeded!)`);
        } else if (h.current === h.target) {
          showToast(`🎉 ${h.name} target reached for today!`);
        } else {
          showToast(`Recorded +1 ${h.unit} for ${h.name}`);
        }
      } else {
        h.current = h.current === 1 ? 0 : 1;
        showToast(`Toggled ${h.name}`);
      }

      saveState();
      renderHabitLedger();
      renderDashboard();
    });

    container.appendChild(card);
  });

  const maxMonthlyTarget = AppState.habits.length * 20;
  const growthPercent = Math.min(100, Math.round((totalCompletions / (maxMonthlyTarget || 1)) * 100));

  if (progressBar) progressBar.style.width = `${growthPercent}%`;
  if (progressText) progressText.innerText = `${totalCompletions} habit completions logged this month (${growthPercent}% of monthly goal)`;

  // Populate Interactive Daily Rhythm Strip (D1 to D15 Today)
  const daysStrip = document.getElementById('habit-days-strip');
  if (daysStrip) {
    daysStrip.innerHTML = '';
    const totalHabits = AppState.habits.length || 4;
    const completedToday = AppState.habits.filter(h => h.current >= (h.type === 'COUNTER' ? h.target : 1)).length;

    for (let day = 1; day <= TODAY_DAY_NUM; day++) {
      const isToday = day === TODAY_DAY_NUM;
      const dayData = AppState.gardenData[day] || {
        specimen: BOTANICAL_SPECIMENS_OCTOBER[day - 1] || 'Autumn Wildflower',
        tasks: isToday ? 1 : 5,
        planned: 5,
        focus: isToday ? AppState.focusTimeLoggedToday : 90,
        stage: day <= 3 ? day : 4
      };

      const dayHabitsDone = isToday ? completedToday : Math.min(totalHabits, 3 + (day % 2));
      const isAllDone = dayHabitsDone >= totalHabits;

      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = `habit-day-pill chalk-font ${isToday ? 'is-today' : ''} ${isAllDone ? 'all-done' : ''}`;
      pill.title = `Day ${day}: ${dayHabitsDone}/${totalHabits} habits completed (Click to maximize progress details)`;

      pill.innerHTML = `
        <span class="day-label">${isToday ? '★ D' + TODAY_DAY_NUM : 'D' + day}</span>
        <span class="day-count">${dayHabitsDone}/${totalHabits}</span>
        <span class="day-star">${isAllDone ? '🌟' : '🌱'}</span>
      `;

      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        AudioEngine.playChalkScratch();
        emitDustParticles(pill.getBoundingClientRect());
        openGardenDayModal(day, dayData, GROWTH_STAGE_NAMES[dayData.stage || 0]);
      });

      daysStrip.appendChild(pill);
    }
  }
}

// --------------------------------------------------------------------------
// G. DEEP FOCUS (WITH MAXIMIZE FULLSCREEN OPTION)
// --------------------------------------------------------------------------
let FocusTimer = {
  mode: 'FOCUS',
  durationSeconds: 25 * 60,
  remainingSeconds: 25 * 60,
  isRunning: false,
  intervalId: null
};

function initDeepFocus() {
  const display = document.getElementById('timer-display');
  const toggleBtn = document.getElementById('btn-timer-toggle');
  const resetBtn = document.getElementById('btn-timer-reset');
  const ring = document.getElementById('clock-ring-progress');
  const actionText = document.getElementById('timer-action-text');
  const iconState = document.getElementById('timer-icon-state');
  const liveDot = document.getElementById('focus-live-indicator');
  const statusLabel = document.getElementById('timer-status-label');

  const modeBtnFocus = document.getElementById('mode-btn-focus');
  const modeBtnRest = document.getElementById('mode-btn-rest');
  const maximizeBtn = document.getElementById('btn-focus-maximize');
  const maximizeIcon = document.getElementById('maximize-icon');
  const maximizeLabel = document.getElementById('maximize-label');

  // Maximize Fullscreen Focus Handler
  if (maximizeBtn) {
    maximizeBtn.addEventListener('click', () => {
      const isMax = document.body.classList.toggle('focus-maximized');
      if (isMax) {
        maximizeIcon.className = 'fa-solid fa-compress';
        maximizeLabel.innerText = 'Exit';
        showToast('Entering Distraction-Free Fullscreen Focus 🌿');
      } else {
        maximizeIcon.className = 'fa-solid fa-expand';
        maximizeLabel.innerText = 'Maximize';
        showToast('Exited Fullscreen Focus');
      }
    });
  }

  if (modeBtnFocus && modeBtnRest) {
    modeBtnFocus.addEventListener('click', () => setFocusMode('FOCUS'));
    modeBtnRest.addEventListener('click', () => setFocusMode('REST'));
  }

  function setFocusMode(newMode) {
    if (FocusTimer.isRunning) {
      clearInterval(FocusTimer.intervalId);
      FocusTimer.isRunning = false;
      toggleBtn.classList.remove('running');
      actionText.innerText = 'Begin Session';
      iconState.className = 'fa-solid fa-play';
      if (liveDot) liveDot.style.display = 'none';
    }

    FocusTimer.mode = newMode;
    if (newMode === 'REST') {
      document.body.classList.add('mode-gentle-rest');
      modeBtnRest.classList.add('active');
      modeBtnFocus.classList.remove('active');
      statusLabel.innerText = 'Gentle Rest & Recharge';
      setTimerDuration(5);
      showToast('Switched to 5-min Gentle Rest Mode ☕');
    } else {
      document.body.classList.remove('mode-gentle-rest');
      modeBtnFocus.classList.add('active');
      modeBtnRest.classList.remove('active');
      statusLabel.innerText = 'Ready for deep immersion';
      setTimerDuration(25);
      showToast('Switched to Deep Focus Mode 🎯');
    }
  }

  document.querySelectorAll('.time-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.time-preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mins = parseInt(btn.dataset.minutes, 10);
      setTimerDuration(mins);
    });
  });

  document.getElementById('btn-time-minus-5').addEventListener('click', () => adjustTimerMinutes(-5));
  document.getElementById('btn-time-minus-1').addEventListener('click', () => adjustTimerMinutes(-1));
  document.getElementById('btn-time-plus-1').addEventListener('click', () => adjustTimerMinutes(1));
  document.getElementById('btn-time-plus-5').addEventListener('click', () => adjustTimerMinutes(5));

  function adjustTimerMinutes(delta) {
    if (FocusTimer.isRunning) return;
    const curMins = Math.floor(FocusTimer.durationSeconds / 60);
    const newMins = Math.max(1, Math.min(120, curMins + delta));
    setTimerDuration(newMins);
  }

  function setTimerDuration(mins) {
    FocusTimer.durationSeconds = mins * 60;
    FocusTimer.remainingSeconds = FocusTimer.durationSeconds;
    updateDisplay();
  }

  function updateDisplay() {
    const mins = Math.floor(FocusTimer.remainingSeconds / 60);
    const secs = FocusTimer.remainingSeconds % 60;
    if (display) display.innerText = `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;

    if (ring) {
      const totalOffset = 666;
      const progress = (FocusTimer.durationSeconds - FocusTimer.remainingSeconds) / FocusTimer.durationSeconds;
      ring.style.strokeDashoffset = totalOffset - (progress * totalOffset);
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (FocusTimer.isRunning) {
        clearInterval(FocusTimer.intervalId);
        FocusTimer.isRunning = false;
        toggleBtn.classList.remove('running');
        actionText.innerText = 'Resume';
        iconState.className = 'fa-solid fa-play';
        if (liveDot) liveDot.style.display = 'none';
      } else {
        AudioEngine.initContext();
        FocusTimer.isRunning = true;
        toggleBtn.classList.add('running');
        actionText.innerText = 'Pause';
        iconState.className = 'fa-solid fa-pause';
        if (liveDot) liveDot.style.display = 'inline-block';

        FocusTimer.intervalId = setInterval(() => {
          FocusTimer.remainingSeconds--;
          updateDisplay();

          if (FocusTimer.remainingSeconds <= 0) {
            clearInterval(FocusTimer.intervalId);
            FocusTimer.isRunning = false;
            toggleBtn.classList.remove('running');
            actionText.innerText = 'Begin Session';
            iconState.className = 'fa-solid fa-play';
            if (liveDot) liveDot.style.display = 'none';

            if (FocusTimer.mode === 'FOCUS') {
              const loggedMins = Math.floor(FocusTimer.durationSeconds / 60);
              AppState.focusTimeLoggedToday += loggedMins;
              if (!AppState.gardenData[TODAY_DAY_NUM]) {
                AppState.gardenData[TODAY_DAY_NUM] = { specimen: 'Sunburst Dahlia', tasks: 0, planned: 0, focus: 0, stage: 0 };
              }
              AppState.gardenData[TODAY_DAY_NUM].focus += loggedMins;
              saveState();
              updateGlobalGrowthMetrics();
              showToast(`🌸 Focus complete! ${loggedMins}m credited to today's garden flower.`);
            } else {
              showToast('🌱 Gentle rest complete. Mind refreshed & centered!');
            }
          }
        }, 1000);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      clearInterval(FocusTimer.intervalId);
      FocusTimer.isRunning = false;
      FocusTimer.remainingSeconds = FocusTimer.durationSeconds;
      toggleBtn.classList.remove('running');
      actionText.innerText = 'Begin Session';
      iconState.className = 'fa-solid fa-play';
      if (liveDot) liveDot.style.display = 'none';
      updateDisplay();
    });
  }

  const soundPills = document.querySelectorAll('.sound-pill');
  const volumeSlider = document.getElementById('sound-volume');

  soundPills.forEach(pill => {
    pill.addEventListener('click', () => {
      soundPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const soundType = pill.dataset.sound;
      AudioEngine.playSoundscape(soundType);
      showToast(`Acoustic environment: ${pill.querySelector('.s-name').innerText}`);
    });
  });

  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      AudioEngine.setVolume(e.target.value);
    });
  }

  updateDisplay();
}

function populateFocusTaskDropdown() {
  const select = document.getElementById('focus-linked-task-select');
  if (!select) return;

  const currentVal = select.value;
  select.innerHTML = '<option value="">-- No specific task --</option>';

  const activeTasks = AppState.tasks.filter(t => t.targetDate === TODAY_DATE && t.status !== 'COMPLETED');
  activeTasks.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.innerText = t.title;
    if (opt.value === currentVal) opt.selected = true;
    select.appendChild(opt);
  });
}

// --------------------------------------------------------------------------
// H. GLOBAL GROWTH CALCULATOR & TOP RIGHT BADGE
// --------------------------------------------------------------------------
function updateGlobalGrowthMetrics() {
  const todayTasks = AppState.tasks.filter(t => t.targetDate === TODAY_DATE);
  const completedCount = todayTasks.filter(t => t.status === 'COMPLETED').length;
  const focusMins = AppState.focusTimeLoggedToday || 0;

  let stage = 0;
  if (completedCount >= 7 || focusMins >= 100 || (todayTasks.length > 0 && completedCount === todayTasks.length)) {
    stage = 4;
  } else if (completedCount >= 5 || focusMins >= 75) {
    stage = 3;
  } else if (completedCount >= 3 || focusMins >= 50) {
    stage = 2;
  } else if (completedCount >= 1 || focusMins >= 25) {
    stage = 1;
  }

  if (!AppState.gardenData[TODAY_DAY_NUM]) {
    AppState.gardenData[TODAY_DAY_NUM] = { specimen: 'Sunburst Dahlia', tasks: 0, planned: 0, focus: 0, stage: 0 };
  }
  AppState.gardenData[TODAY_DAY_NUM].tasks = completedCount;
  AppState.gardenData[TODAY_DAY_NUM].planned = todayTasks.length;
  AppState.gardenData[TODAY_DAY_NUM].focus = focusMins;
  AppState.gardenData[TODAY_DAY_NUM].stage = stage;
  saveState();

  const stageNames = ['Resting Seed', 'The Sprout', 'Branching Stem', 'Swelling Bud', 'Full Bloom'];

  const topIcon = document.getElementById('top-flower-icon');
  const topStage = document.getElementById('top-growth-stage');
  const topMeta = document.getElementById('top-growth-meta');
  if (topIcon) topIcon.innerHTML = ChalkBotanicals.getBotanicalSVG(stage, 28, TODAY_DAY_NUM);
  if (topStage) topStage.innerText = stageNames[stage];
  if (topMeta) topMeta.innerText = `${completedCount} tasks • ${focusMins}m focus`;
  renderDashboard();
}

// --------------------------------------------------------------------------
// I. UTILITIES: PARTICLES & TOASTS
// --------------------------------------------------------------------------
function emitDustParticles(rect) {
  const container = document.getElementById('dust-emitter');
  if (!container) return;

  const count = 12;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'dust-particle';
    p.style.left = `${rect.left + rect.width / 2}px`;
    p.style.top = `${rect.top + rect.height / 2}px`;

    const dx = (Math.random() * 60 - 30) + 'px';
    const dy = (Math.random() * 50 + 15) + 'px';
    p.style.setProperty('--dx', dx);
    p.style.setProperty('--dy', dy);

    container.appendChild(p);
    setTimeout(() => p.remove(), 800);
  }
}

function showToast(msg) {
  const toast = document.getElementById('chalk-toast');
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
}
