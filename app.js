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
  renderPlantStage(x, day, dayData, isToday, isFuture = false) {
    const stage = dayData ? (dayData.stage ?? 0) : 0;
    const variety = day % 4;
    let plantArtwork = '';

    switch (stage) {
      case 0:
        // STAGE 0: RESTING SEED / SOIL MOUND / SUBTLE SEED PLACEHOLDER
        const whisperText = isFuture ? 'Seed' : 'Resting';
        const whisperColor = isToday ? 'var(--chalk-amber)' : 'var(--text-muted)';
        const whisperOpacity = isToday ? '0.9' : (isFuture ? '0.5' : '0.75');
        const moundStroke = isFuture ? 'stroke-dasharray="3,2" opacity="0.65"' : '';
        const seedOpacity = isFuture ? '0.45' : '0.65';
        plantArtwork = `
          <!-- Soil Mound (Dotted for Future Calm Plots, Solid for Recorded Days) -->
          <path d="M ${x - 22} 215 Q ${x} 206 ${x + 22} 215 Z" fill="var(--bg-surface-elevated)" stroke="var(--text-primary)" stroke-width="1.8" ${moundStroke} />
          <!-- Sleeping / Resting Chalk Seed in Soil -->
          <ellipse cx="${x}" cy="217" rx="4" ry="2.5" fill="#FAF0CA" opacity="${seedOpacity}" stroke="var(--chalk-amber)" stroke-width="1" />
          <circle cx="${x - 7}" cy="218" r="0.9" fill="var(--border-chalk)" opacity="0.5" />
          <circle cx="${x + 8}" cy="216" r="0.9" fill="var(--border-chalk)" opacity="0.5" />
          <!-- Subtle resting chalk whisper -->
          <text x="${x}" y="196" font-family="'Kalam', cursive" font-size="10" fill="${whisperColor}" text-anchor="middle" opacity="${whisperOpacity}">${whisperText}</text>
        `;
        break;

      case 1:
        // STAGE 1: THE SPROUT (First green shoot emerging from soil)
        plantArtwork = `
          <!-- Soil Mound -->
          <path d="M ${x - 20} 215 Q ${x} 207 ${x + 20} 215 Z" fill="var(--bg-surface-elevated)" stroke="var(--text-primary)" stroke-width="1.8" />
          <!-- Emerging Sprout Stem -->
          <path d="M ${x} 209 Q ${x + 1} 195 ${x} 178" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <!-- Left Cotyledon Leaf -->
          <path d="M ${x} 178 C ${x - 14} 173 ${x - 22} 179 ${x - 19} 187 C ${x - 14} 191 ${x - 6} 186 ${x} 180 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2" />
          <path d="M ${x} 179 Q ${x - 9} 182 ${x - 16} 186" stroke="var(--chalk-mint)" stroke-width="1" fill="none" opacity="0.8" />
          <!-- Right Cotyledon Leaf -->
          <path d="M ${x} 178 C ${x + 14} 173 ${x + 22} 179 ${x + 19} 187 C ${x + 14} 191 ${x + 6} 186 ${x} 180 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2" />
          <path d="M ${x} 179 Q ${x + 9} 182 ${x + 16} 186" stroke="var(--chalk-mint)" stroke-width="1" fill="none" opacity="0.8" />
          <text x="${x}" y="166" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-mint)" text-anchor="middle">Sprout</text>
        `;
        break;

      case 2:
        // STAGE 2: BRANCHING STEM (Growing taller, multiple leaves, finding light)
        plantArtwork = `
          <!-- Soil Mound -->
          <path d="M ${x - 18} 215 Q ${x} 209 ${x + 18} 215 Z" fill="var(--bg-surface-elevated)" stroke="var(--text-primary)" stroke-width="1.8" />
          <!-- Main Stem growing to 145 -->
          <path d="M ${x} 215 Q ${x - 2} 180 ${x} 145" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <!-- Lower Left Leaf -->
          <path d="M ${x - 1} 195 C ${x - 19} 190 ${x - 28} 197 ${x - 24} 205 C ${x - 16} 208 ${x - 7} 202 ${x - 1} 196 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Lower Right Leaf -->
          <path d="M ${x} 188 C ${x + 19} 183 ${x + 28} 189 ${x + 25} 197 C ${x + 18} 201 ${x + 7} 195 ${x} 190 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Upper Left Leaf -->
          <path d="M ${x - 1} 170 C ${x - 17} 163 ${x - 25} 169 ${x - 21} 177 C ${x - 14} 180 ${x - 6} 175 ${x - 1} 171 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Upper Right Leaf -->
          <path d="M ${x} 163 C ${x + 16} 156 ${x + 23} 162 ${x + 21} 170 C ${x + 15} 173 ${x + 6} 168 ${x} 164 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Apex Leaf Shoot -->
          <path d="M ${x} 145 C ${x - 6} 135 ${x} 130 ${x} 130 C ${x} 130 ${x + 6} 135 ${x} 145 Z" fill="rgba(6, 214, 160, 0.28)" stroke="var(--chalk-mint)" stroke-width="1.6" />
          <text x="${x}" y="122" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-mint)" text-anchor="middle">Branching</text>
        `;
        break;

      case 3:
        // STAGE 3: SWELLING BUD (High stem, rich foliage, swelling floral teardrop bud)
        plantArtwork = `
          <!-- Main Stem growing to 118 -->
          <path d="M ${x} 215 Q ${x - 2} 165 ${x} 118" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <!-- Foliage leaves -->
          <path d="M ${x - 1} 185 C ${x - 19} 178 ${x - 27} 188 ${x - 19} 195 C ${x - 11} 196 ${x - 5} 190 ${x - 1} 186 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M ${x} 172 C ${x + 19} 165 ${x + 25} 174 ${x + 19} 182 C ${x + 11} 183 ${x + 5} 177 ${x} 173 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M ${x - 1} 150 C ${x - 17} 142 ${x - 21} 150 ${x - 15} 156 C ${x - 8} 157 ${x - 4} 153 ${x - 1} 151 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <!-- Green Sepals cupping the bud -->
          <path d="M ${x - 3} 122 C ${x - 10} 116 ${x - 9} 107 ${x - 1} 112" stroke="var(--chalk-mint)" stroke-width="2" fill="none" />
          <path d="M ${x + 3} 122 C ${x + 10} 116 ${x + 9} 107 ${x + 1} 112" stroke="var(--chalk-mint)" stroke-width="2" fill="none" />
          <!-- Coral / Amber Bud with glowing chalk tip -->
          <path d="M ${x} 116 C ${x - 9} 104 ${x - 5} 92 ${x} 86 C ${x + 5} 92 ${x + 9} 104 ${x} 116 Z" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="2.2" />
          <path d="M ${x} 108 Q ${x} 92 ${x} 88" stroke="#FAF0CA" stroke-width="1" fill="none" opacity="0.8" />
          <text x="${x}" y="78" font-family="'Kalam', cursive" font-size="10" fill="#EF476F" text-anchor="middle">Budding</text>
        `;
        break;

      case 4:
      default:
        // STAGE 4: FULL BLOOM (Magnificent chalk flower artwork tailored to variety)
        if (variety === 0) {
          // Coral Daisy / Cosmos
          plantArtwork = `
            <path d="M ${x} 215 Q ${x - 3} 155 ${x} 108" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
            <path d="M ${x - 1} 175 C ${x - 19} 168 ${x - 25} 178 ${x - 17} 184 C ${x - 10} 184 ${x - 5} 180 ${x - 1} 176 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <path d="M ${x} 155 C ${x + 17} 148 ${x + 23} 156 ${x + 17} 163 C ${x + 10} 164 ${x + 5} 159 ${x} 156 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <g transform="translate(${x}, 100)">
              <ellipse cx="0" cy="-18" rx="4.5" ry="9" fill="rgba(239, 71, 111, 0.38)" stroke="#EF476F" stroke-width="1.8" />
              <ellipse cx="11" cy="-14" rx="4.5" ry="9" transform="rotate(36 11 -14)" fill="rgba(239, 71, 111, 0.38)" stroke="#EF476F" stroke-width="1.8" />
              <ellipse cx="17" cy="-5" rx="4.5" ry="9" transform="rotate(72 17 -5)" fill="rgba(239, 71, 111, 0.38)" stroke="#EF476F" stroke-width="1.8" />
              <ellipse cx="15" cy="11" rx="4.5" ry="9" transform="rotate(108 15 11)" fill="rgba(239, 71, 111, 0.38)" stroke="#EF476F" stroke-width="1.8" />
              <ellipse cx="6" cy="17" rx="4.5" ry="9" transform="rotate(144 6 17)" fill="rgba(239, 71, 111, 0.38)" stroke="#EF476F" stroke-width="1.8" />
              <ellipse cx="-6" cy="17" rx="4.5" ry="9" transform="rotate(216 -6 17)" fill="rgba(239, 71, 111, 0.38)" stroke="#EF476F" stroke-width="1.8" />
              <ellipse cx="-15" cy="11" rx="4.5" ry="9" transform="rotate(252 -15 11)" fill="rgba(239, 71, 111, 0.38)" stroke="#EF476F" stroke-width="1.8" />
              <ellipse cx="-17" cy="-5" rx="4.5" ry="9" transform="rotate(288 -17 -5)" fill="rgba(239, 71, 111, 0.38)" stroke="#EF476F" stroke-width="1.8" />
              <ellipse cx="-11" cy="-14" rx="4.5" ry="9" transform="rotate(324 -11 -14)" fill="rgba(239, 71, 111, 0.38)" stroke="#EF476F" stroke-width="1.8" />
              <circle cx="0" cy="0" r="8.5" fill="#FFD166" stroke="#FAF0CA" stroke-width="2.2" />
              <circle cx="0" cy="0" r="5" fill="none" stroke="#181A1D" stroke-width="1" stroke-dasharray="2,2" opacity="0.6" />
            </g>
            <text x="${x - 22}" y="88" font-family="'Kalam', cursive" font-size="12" fill="var(--chalk-amber)">✦</text>
            <text x="${x + 20}" y="92" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA">✦</text>
            <text x="${x}" y="65" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)" text-anchor="middle">Bloomed</text>
          `;
        } else if (variety === 1) {
          // Purple Wild Aster
          plantArtwork = `
            <path d="M ${x} 215 Q ${x - 2} 150 ${x} 95" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
            <path d="M ${x - 1} 180 Q ${x - 20} 175 ${x - 28} 168 M ${x} 172 Q ${x - 18} 168 ${x - 22} 158" stroke="var(--chalk-mint)" stroke-width="1.6" fill="none" />
            <path d="M ${x + 1} 165 Q ${x + 18} 160 ${x + 26} 154 M ${x + 1} 155 Q ${x + 17} 150 ${x + 22} 142" stroke="var(--chalk-mint)" stroke-width="1.6" fill="none" />
            <g transform="translate(${x}, 85)">
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
            </g>
            <text x="${x - 22}" y="74" font-family="'Kalam', cursive" font-size="12" fill="#B388FF">✦</text>
            <text x="${x + 22}" y="78" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)">✦</text>
            <text x="${x}" y="50" font-family="'Kalam', cursive" font-size="10" fill="#B388FF" text-anchor="middle">Bloomed</text>
          `;
        } else if (variety === 2) {
          // White Coneflower
          plantArtwork = `
            <path d="M ${x} 215 Q ${x - 3} 145 ${x} 85" stroke="var(--chalk-mint)" stroke-width="2.8" stroke-linecap="round" fill="none" />
            <path d="M ${x - 1} 175 C ${x - 23} 165 ${x - 31} 178 ${x - 21} 187 C ${x - 11} 188 ${x - 5} 181 ${x - 1} 176 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <path d="M ${x} 150 C ${x + 21} 140 ${x + 29} 152 ${x + 21} 161 C ${x + 12} 162 ${x + 6} 155 ${x} 151 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <g transform="translate(${x}, 80)">
              <path d="M -16 5 C -24 15 -22 36 -18 42 C -15 36 -12 20 -10 5 Z" fill="rgba(250, 240, 202, 0.35)" stroke="#FAF0CA" stroke-width="1.8" />
              <path d="M -10 6 C -14 20 -12 40 -8 46 C -5 40 -4 22 -3 6 Z" fill="rgba(250, 240, 202, 0.35)" stroke="#FAF0CA" stroke-width="1.8" />
              <path d="M -3 7 C -4 22 -3 42 0 48 C 3 42 4 22 3 7 Z" fill="rgba(250, 240, 202, 0.35)" stroke="#FAF0CA" stroke-width="1.8" />
              <path d="M 3 6 C 4 22 5 40 8 46 C 12 40 14 20 10 6 Z" fill="rgba(250, 240, 202, 0.35)" stroke="#FAF0CA" stroke-width="1.8" />
              <path d="M 10 5 C 12 20 15 36 18 42 C 22 36 24 15 16 5 Z" fill="rgba(250, 240, 202, 0.35)" stroke="#FAF0CA" stroke-width="1.8" />
              <path d="M -14 5 C -14 -12 14 -12 14 5 Z" fill="#FFD166" stroke="#FAF0CA" stroke-width="2.2" />
              <path d="M -10 0 L 10 0 M -8 -4 L 8 -4 M -5 -8 L 5 -8" stroke="#181A1D" stroke-width="1.2" opacity="0.65" />
            </g>
            <text x="${x - 20}" y="66" font-family="'Kalam', cursive" font-size="12" fill="#FAF0CA">✦</text>
            <text x="${x + 20}" y="70" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)">✦</text>
            <text x="${x}" y="52" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA" text-anchor="middle">Bloomed</text>
          `;
        } else {
          // Golden Sunflower / Rudbeckia / Dahlia
          plantArtwork = `
            <path d="M ${x} 215 Q ${x - 3} 125 ${x} 58" stroke="var(--chalk-mint)" stroke-width="3.4" stroke-linecap="round" fill="none" />
            <path d="M ${x - 2} 170 C ${x - 35} 155 ${x - 45} 176 ${x - 29} 190 C ${x - 13} 192 ${x - 6} 180 ${x - 2} 172 Z" fill="rgba(6, 214, 160, 0.24)" stroke="var(--chalk-mint)" stroke-width="2.2" />
            <path d="M ${x + 1} 138 C ${x + 35} 122 ${x + 47} 144 ${x + 30} 158 C ${x + 13} 160 ${x + 5} 148 ${x + 1} 140 Z" fill="rgba(6, 214, 160, 0.24)" stroke="var(--chalk-mint)" stroke-width="2.2" />
            <text x="${x - 39}" y="44" font-family="'Kalam', cursive" font-size="14" fill="var(--chalk-amber)">✦</text>
            <text x="${x + 39}" y="48" font-family="'Kalam', cursive" font-size="12" fill="var(--chalk-amber)">✦</text>
            <text x="${x + 21}" y="24" font-family="'Kalam', cursive" font-size="15" fill="#FAF0CA">✦</text>
            <g transform="translate(${x}, 52)">
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
              <circle cx="0" cy="0" r="14" fill="#2E1D0E" stroke="#FFD166" stroke-width="2.4" />
              <circle cx="0" cy="0" r="10" fill="none" stroke="#FAF0CA" stroke-width="1.2" stroke-dasharray="2,2" opacity="0.8" />
              <circle cx="0" cy="0" r="6" fill="none" stroke="#FFD166" stroke-width="1.2" stroke-dasharray="2,2" opacity="0.8" />
              <circle cx="0" cy="0" r="2.5" fill="#FAF0CA" />
            </g>
            <text x="${x}" y="20" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)" text-anchor="middle">Bloomed</text>
          `;
        }
        break;
    }

    const labelColor = isToday ? 'style="fill: var(--chalk-amber); font-weight:700;"' : (isFuture ? 'style="opacity: 0.55;"' : '');
    const underlineColor = isToday ? 'stroke="var(--chalk-amber)" stroke-width="2.2"' : (isFuture ? 'stroke="var(--border-chalk)" stroke-width="1.2" stroke-dasharray="3,2" opacity="0.45"' : 'stroke="var(--text-primary)" stroke-width="2" opacity="0.8"');
    const todayBadge = isToday ? `<text x="${x}" y="253" font-family="'Kalam', cursive" font-size="12" font-weight="700" fill="var(--chalk-amber)" text-anchor="middle">★ Today</text>` : '';
    const todayPedestal = isToday ? `
      <!-- Soft Amber Soil Pedestal Aura for Today's Specimen -->
      <ellipse cx="${x}" cy="222" rx="42" ry="11" fill="rgba(255, 209, 102, 0.12)" stroke="var(--chalk-amber)" stroke-width="1.2" stroke-dasharray="3,2" />
    ` : '';

    return `
      <g class="meadow-plant-hotspot ${isToday ? 'is-today-plant' : ''} ${isFuture ? 'is-future-plant' : ''}" data-day="${day}" id="plant-hotspot-d${day}">
        <rect x="${x - 45}" y="10" width="90" height="245" fill="transparent" />
        ${todayPedestal}
        ${plantArtwork}
        <text x="${x}" y="${isToday ? 234 : 238}" class="meadow-chalk-label" ${labelColor}>D${day}</text>
        <path d="M ${x - 17} ${isToday ? 240 : 244} Q ${x} ${isToday ? 242 : 246} ${x + 17} ${isToday ? 240 : 244}" ${underlineColor} stroke-linecap="round" fill="none" />
        ${todayBadge}
      </g>
    `;
  },

  renderMeadow(container) {
    if (!container) return;

    const totalDays = GardenView ? GardenView.daysInMonth : (CurrentDateInfo ? CurrentDateInfo.daysInMonth : 30);
    const slotWidth = 110;
    const startX = 65;
    const totalWidth = startX * 2 + (totalDays - 1) * slotWidth;

    const meadowSlots = [];
    for (let day = 1; day <= totalDays; day++) {
      const x = startX + (day - 1) * slotWidth;
      meadowSlots.push({ day, x });
    }

    const monthGarden = getGardenDataForMonth(GardenView ? GardenView.monthKey : CurrentDateInfo.monthKey);

    const plantsSVG = meadowSlots.map(slot => {
      const isToday = GardenView.isCurrentMonth && slot.day === TODAY_DAY_NUM;
      const isFuture = GardenView.isCurrentMonth && slot.day > TODAY_DAY_NUM;
      let dayData = monthGarden[slot.day];
      if (!dayData) {
        dayData = {
          specimen: BOTANICAL_SPECIMENS[slot.day - 1] || 'Autumn Wildflower',
          tasks: 0,
          planned: 0,
          focus: 0,
          stage: 0
        };
      } else if (isFuture && !dayData.isImported) {
        // Enforce stage 0 resting seed placeholder for future dates
        dayData = { ...dayData, stage: 0, tasks: 0, focus: 0 };
      }
      return this.renderPlantStage(slot.x, slot.day, dayData, isToday, isFuture);
    }).join('\n');

    // Generate continuous ground tufts & pebbles between each day's plant
    let sceneryTufts = '';
    for (let day = 1; day < totalDays; day++) {
      const midX = startX + (day - 1) * slotWidth + (slotWidth / 2);
      sceneryTufts += `
        <ellipse cx="${midX - 16}" cy="217" rx="3.5" ry="1.6" fill="none" stroke="var(--border-chalk)" stroke-width="1" opacity="0.5" />
        <path d="M ${midX} 215 Q ${midX - 3} 204 ${midX - 7} 200 M ${midX + 1} 215 Q ${midX + 2} 202 ${midX + 5} 198 M ${midX + 3} 215 Q ${midX + 7} 205 ${midX + 11} 201" stroke="var(--chalk-mint)" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.75" />
      `;
    }

    // Sky fauna: butterflies & bees gliding at intervals along the continuous month landscape
    let skyFauna = '';
    for (let day = 1; day <= totalDays; day += 4) {
      const fx = startX + (day - 1) * slotWidth + 45;
      if (day % 8 === 1) {
        skyFauna += `
          <g class="meadow-sky-butterfly" transform="translate(${fx}, 48)">
            <line x1="0" y1="-7" x2="0" y2="7" stroke="var(--chalk-white)" stroke-width="1.6" stroke-linecap="round" />
            <path d="M 0 -2 C -10 -10 -14 2 -2 3 Z" fill="rgba(250, 240, 202, 0.35)" stroke="#FAF0CA" stroke-width="1.2" />
            <path d="M 0 2 C -8 3 -10 10 -2 6 Z" fill="rgba(6, 214, 160, 0.3)" stroke="#06D6A0" stroke-width="1.1" />
            <path d="M 0 -2 C 10 -10 14 2 2 3 Z" fill="rgba(250, 240, 202, 0.35)" stroke="#FAF0CA" stroke-width="1.2" />
            <path d="M 0 2 C 8 3 10 10 2 6 Z" fill="rgba(6, 214, 160, 0.3)" stroke="#06D6A0" stroke-width="1.1" />
          </g>
        `;
      } else {
        skyFauna += `
          <g class="meadow-sky-bee" transform="translate(${fx}, 44)">
            <ellipse cx="0" cy="0" rx="5.5" ry="3.8" fill="#FFD166" stroke="#FAF0CA" stroke-width="1.1" />
            <line x1="-1.5" y1="-3.2" x2="-1.5" y2="3.2" stroke="#181A1D" stroke-width="1.1" />
            <line x1="2" y1="-3.2" x2="2" y2="3.2" stroke="#181A1D" stroke-width="1.1" />
            <ellipse cx="-1.5" cy="-5" rx="3.5" ry="2" transform="rotate(-25 -1.5 -5)" fill="rgba(255,255,255,0.7)" stroke="#FAF0CA" stroke-width="0.9" />
            <ellipse cx="2" cy="-5" rx="3.5" ry="2" transform="rotate(25 2 -5)" fill="rgba(255,255,255,0.7)" stroke="#FAF0CA" stroke-width="0.9" />
          </g>
        `;
      }
    }

    const svgHTML = `
      <svg viewBox="0 0 ${totalWidth} 260" class="meadow-panorama-svg" style="width:${totalWidth}px; min-width:${totalWidth}px; height:260px;" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="chalk-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Continuous Shared Ground Horizon Line across all ${totalDays} Days -->
        <path d="M 0 215 L ${totalWidth} 215" stroke="var(--text-primary)" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.8" />
        <path d="M 0 219 L ${totalWidth} 219" stroke="var(--border-chalk)" stroke-width="1.4" stroke-dasharray="6,4" fill="none" opacity="0.55" />

        <!-- Meadow Grass Tufts & Ground Stipples along Horizon -->
        ${sceneryTufts}

        <!-- Sky Fauna (Butterflies & Bees) -->
        ${skyFauna}

        <!-- Dynamic Botanical Plants (Full Month Days 1 to ${totalDays}) -->
        ${plantsSVG}
      </svg>
    `;

    container.innerHTML = svgHTML;

    // Attach click listeners to all active specimen hotspots
    meadowSlots.forEach(slot => {
      const hotspot = container.querySelector(`#plant-hotspot-d${slot.day}`);
      if (hotspot) {
        hotspot.addEventListener('click', (e) => {
          if (container.dataset.hasDragged === 'true') return;
          e.stopPropagation();
          AudioEngine.playChalkScratch();
          emitDustParticles(hotspot.getBoundingClientRect());
          
          const isToday = GardenView.isCurrentMonth && slot.day === TODAY_DAY_NUM;
          const isFuture = GardenView.isCurrentMonth && slot.day > TODAY_DAY_NUM;
          let dayData = monthGarden[slot.day];
          if (!dayData) {
            dayData = {
              specimen: BOTANICAL_SPECIMENS[slot.day - 1] || 'Autumn Wildflower',
              tasks: 0,
              planned: 0,
              focus: 0,
              stage: 0
            };
          } else if (isFuture && !dayData.isImported) {
            dayData = { ...dayData, stage: 0, tasks: 0, focus: 0 };
          }
          openGardenDayModal(slot.day, dayData, GROWTH_STAGE_NAMES[dayData.stage || 0]);
        });
      }
    });
  }
};

// ==========================================================================
// 2. DATA STATE & LOCAL STORAGE PERSISTENCE
// ==========================================================================
function getLocalDateInfo() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;
  const dayNum = now.getDate();
  const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();

  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  const tomYear = tomorrow.getFullYear();
  const tomMonth = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const tomDay = String(tomorrow.getDate()).padStart(2, '0');
  const tomorrowStr = `${tomYear}-${tomMonth}-${tomDay}`;

  const endOfWeek = new Date(now);
  const dayOfWeek = now.getDay();
  const daysUntilSunday = dayOfWeek === 0 ? 0 : (7 - dayOfWeek);
  endOfWeek.setDate(now.getDate() + daysUntilSunday);
  const eowYear = endOfWeek.getFullYear();
  const eowMonth = String(endOfWeek.getMonth() + 1).padStart(2, '0');
  const eowDay = String(endOfWeek.getDate()).padStart(2, '0');
  const endOfWeekStr = `${eowYear}-${eowMonth}-${eowDay}`;

  // Next week calculations (starts day after endOfWeek, ends 7 days later)
  const nextWeekStart = new Date(endOfWeek);
  nextWeekStart.setDate(endOfWeek.getDate() + 1);
  const nwsYear = nextWeekStart.getFullYear();
  const nwsMonth = String(nextWeekStart.getMonth() + 1).padStart(2, '0');
  const nwsDay = String(nextWeekStart.getDate()).padStart(2, '0');
  const nextWeekStartStr = `${nwsYear}-${nwsMonth}-${nwsDay}`;

  const endOfNextWeek = new Date(endOfWeek);
  endOfNextWeek.setDate(endOfWeek.getDate() + 7);
  const eonwYear = endOfNextWeek.getFullYear();
  const eonwMonth = String(endOfNextWeek.getMonth() + 1).padStart(2, '0');
  const eonwDay = String(endOfNextWeek.getDate()).padStart(2, '0');
  const endOfNextWeekStr = `${eonwYear}-${eonwMonth}-${eonwDay}`;

  const nextWeekSample = new Date(nextWeekStart);
  nextWeekSample.setDate(nextWeekStart.getDate() + 2);
  const nextWeekSampleStr = `${nextWeekSample.getFullYear()}-${String(nextWeekSample.getMonth() + 1).padStart(2, '0')}-${String(nextWeekSample.getDate()).padStart(2, '0')}`;

  const laterSample = new Date(now);
  laterSample.setDate(now.getDate() + 18);
  const laterSampleStr = `${laterSample.getFullYear()}-${String(laterSample.getMonth() + 1).padStart(2, '0')}-${String(laterSample.getDate()).padStart(2, '0')}`;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const friendlyStr = now.toLocaleDateString('en-US', options);
  const monthName = now.toLocaleDateString('en-US', { month: 'long' });

  return {
    dateStr,
    dayNum,
    daysInMonth,
    tomorrowStr,
    endOfWeekStr,
    nextWeekStartStr,
    endOfNextWeekStr,
    nextWeekSampleStr,
    laterSampleStr,
    friendlyStr,
    monthName,
    monthNum: now.getMonth() + 1,
    monthKey: `${year}-${month}`,
    year
  };
}

let CurrentDateInfo = getLocalDateInfo();
let TODAY_DATE = CurrentDateInfo.dateStr;
let TOMORROW_DATE = CurrentDateInfo.tomorrowStr;
let THIS_WEEK_END_DATE = CurrentDateInfo.endOfWeekStr;
let NEXT_WEEK_START_DATE = CurrentDateInfo.nextWeekStartStr;
let NEXT_WEEK_END_DATE = CurrentDateInfo.endOfNextWeekStr;
let TODAY_DAY_NUM = CurrentDateInfo.dayNum;
let isSystemInitializing = true;

let GardenView = {
  year: CurrentDateInfo.year,
  month: CurrentDateInfo.monthNum,
  get monthKey() {
    return `${this.year}-${String(this.month).padStart(2, '0')}`;
  },
  get isCurrentMonth() {
    return this.year === CurrentDateInfo.year && this.month === CurrentDateInfo.monthNum;
  },
  get daysInMonth() {
    return new Date(this.year, this.month, 0).getDate();
  },
  get monthName() {
    return new Date(this.year, this.month - 1, 1).toLocaleDateString('en-US', { month: 'long' });
  }
};

const OCTOBER_2026_HISTORICAL_GARDEN = {
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
};

function getGardenDataForMonth(monthKey) {
  if (monthKey === CurrentDateInfo.monthKey) {
    return AppState.gardenData || {};
  }
  if (AppState && AppState.monthlyGardens && AppState.monthlyGardens[monthKey]) {
    return AppState.monthlyGardens[monthKey];
  }
  return {};
}

function formatShortDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

const GROWTH_STAGE_NAMES = ['Resting Seed', 'The Sprout', 'Branching Stem', 'Swelling Bud', 'Full Bloom'];

const BOTANICAL_SPECIMENS = [
  'Sunburst Cosmos', 'Purple Wild Aster', 'Dormant Soil', 'White Coneflower', 'Golden Rudbeckia',
  'Heather Blossom', 'Autumn Terracotta', 'Meadow Daisy', 'Winter Jasmine', 'Forget-Me-Not',
  'Wild Poppy', 'Lavender Sprig', 'Chamomile', 'Coneflower', 'Sunburst Dahlia',
  'Sweet William', 'Cosmos Petal', 'Pansy', 'Primrose', 'Anemone',
  'Buttercup', 'Cornflower', 'Heather Blossom', 'Morning Glory', 'Foxglove Sprig',
  'Zinnia', 'Lupine', 'Carnation Sprig', 'Hydrangea Florets', 'Hibiscus', 'Evening Primrose'
];
const BOTANICAL_SPECIMENS_OCTOBER = BOTANICAL_SPECIMENS;

const STORAGE_KEY = 'chalkflow_state_v8';

function processDateCarryOvers(tasks) {
  if (!Array.isArray(tasks)) return [];
  const seenIds = new Set();
  const deduplicated = [];

  tasks.forEach(task => {
    if (!task || typeof task !== 'object') return;
    if (!task.id) {
      task.id = `task-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    }
    // Prevent duplicate tasks by id
    if (seenIds.has(task.id)) return;
    seenIds.add(task.id);

    // Carry over past uncompleted tasks to today
    if (task.targetDate < TODAY_DATE && task.status !== 'COMPLETED') {
      task.targetDate = TODAY_DATE;
      task.isCarriedOver = true;
    }

    deduplicated.push(task);
  });

  return deduplicated;
}

function buildInitialGardenData(todayDay) {
  const data = {};
  const samplePast = [
    { specimen: 'Sunburst Cosmos', tasks: 5, planned: 5, focus: 110, stage: 4 },
    { specimen: 'Purple Wild Aster', tasks: 4, planned: 4, focus: 85, stage: 4 },
    { specimen: 'White Coneflower', tasks: 4, planned: 5, focus: 75, stage: 3 },
    { specimen: 'Golden Rudbeckia', tasks: 5, planned: 5, focus: 95, stage: 4 },
    { specimen: 'Heather Blossom', tasks: 3, planned: 4, focus: 55, stage: 2 },
    { specimen: 'Autumn Terracotta', tasks: 5, planned: 5, focus: 100, stage: 4 },
    { specimen: 'Meadow Daisy', tasks: 4, planned: 4, focus: 90, stage: 4 },
    { specimen: 'Winter Jasmine', tasks: 5, planned: 5, focus: 105, stage: 4 }
  ];

  for (let d = 1; d <= 31; d++) {
    if (d < todayDay) {
      const s = samplePast[(d - 1) % samplePast.length];
      data[d] = {
        specimen: BOTANICAL_SPECIMENS[d - 1] || s.specimen,
        tasks: s.tasks,
        planned: s.planned,
        focus: s.focus,
        stage: s.stage
      };
    } else if (d === todayDay) {
      data[d] = {
        specimen: BOTANICAL_SPECIMENS[todayDay - 1] || 'Sunburst Dahlia',
        tasks: 1,
        planned: 3,
        focus: 45,
        stage: 2
      };
    } else {
      // Future dates: Resting seeds, empty plots (never bloomed or completed)
      data[d] = {
        specimen: BOTANICAL_SPECIMENS[d - 1] || 'Autumn Wildflower',
        tasks: 0,
        planned: 0,
        focus: 0,
        stage: 0
      };
    }
  }
  return data;
}

const DEFAULT_STATE = {
  theme: 'theme-parchment-cream',
  activeSurface: 'dashboard',
  userName: 'Shouryaa',
  recentlyErasedTasks: [],
  tasks: [
    // Today's Slate Tasks
    {
      id: 'task-1',
      title: 'Complete CAT Quantitative Mock #4 (Algebra & Arithmetic)',
      priority: 'HIGH',
      category: 'ACADEMIC',
      estTime: 60,
      targetDate: TODAY_DATE,
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
      targetDate: TODAY_DATE,
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
      targetDate: TODAY_DATE,
      status: 'COMPLETED',
      isCarriedOver: false,
      subtasks: [],
      isExpanded: false
    },
    // Upcoming Assignments for Tomorrow
    {
      id: 'task-4',
      title: 'Accessory Design Jury Presentation Slide Deck',
      priority: 'HIGH',
      category: 'ACADEMIC',
      estTime: 90,
      targetDate: TOMORROW_DATE,
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
      targetDate: TOMORROW_DATE,
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
      targetDate: TOMORROW_DATE,
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
      targetDate: TOMORROW_DATE,
      status: 'TODO',
      subtasks: [],
      isExpanded: false
    },
    // Later This Week
    {
      id: 'task-5',
      title: 'Read Chapter 5: 20th Century Textile Movements & Bauhaus Influence',
      priority: 'MEDIUM',
      category: 'ACADEMIC',
      estTime: 30,
      targetDate: THIS_WEEK_END_DATE,
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
      targetDate: THIS_WEEK_END_DATE,
      status: 'TODO',
      subtasks: [],
      isExpanded: false
    },
    // Next Week
    {
      id: 'task-next-week-1',
      title: 'Accessory Design Hardware Fabrication Final Studio Jury',
      priority: 'HIGH',
      category: 'ACADEMIC',
      estTime: 120,
      targetDate: CurrentDateInfo.nextWeekSampleStr,
      status: 'TODO',
      isCarriedOver: false,
      subtasks: [
        { id: 'sub-nw-1', title: 'Polish brass buckles with emery paper', completed: false },
        { id: 'sub-nw-2', title: 'Mount portfolio renders on black mount-board', completed: false }
      ],
      isExpanded: false
    },
    // Later (Beyond Next Week)
    {
      id: 'task-later-1',
      title: 'End-of-Semester Portfolio & Botanical Craft Exhibition Setup',
      priority: 'MEDIUM',
      category: 'CREATIVE',
      estTime: 90,
      targetDate: CurrentDateInfo.laterSampleStr,
      status: 'TODO',
      isCarriedOver: false,
      subtasks: [],
      isExpanded: false
    }
  ],
  habits: [
    { id: 'h-1', name: 'Drink 4 Liters Water', icon: '💧', type: 'COUNTER', current: 2, target: 4, unit: 'L', completions: Math.min(13, TODAY_DAY_NUM) },
    { id: 'h-2', name: '30 Mins Design Reading', icon: '📖', type: 'COUNTER', current: 15, target: 30, unit: 'm', completions: Math.min(12, TODAY_DAY_NUM) },
    { id: 'h-3', name: 'Morning Sketchbook Drill', icon: '🎨', type: 'CHECK', current: 1, target: 1, unit: '', completions: Math.min(11, TODAY_DAY_NUM) },
    { id: 'h-4', name: 'Evening Walk / Rest', icon: '🌿', type: 'CHECK', current: 1, target: 1, unit: '', completions: Math.min(12, TODAY_DAY_NUM) }
  ],
  focusTimeLoggedToday: 45,
  gardenData: buildInitialGardenData(TODAY_DAY_NUM),
  monthlyGardens: {
    '2026-10': OCTOBER_2026_HISTORICAL_GARDEN,
    [CurrentDateInfo.monthKey]: buildInitialGardenData(TODAY_DAY_NUM)
  }
};

let AppState = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!parsed.userName) parsed.userName = 'Shouryaa';
      if (!parsed.gardenData) parsed.gardenData = {};
      if (!parsed.monthlyGardens) parsed.monthlyGardens = {};
      
      // Ensure historical October 2026 garden is available for previous month navigation
      if (!parsed.monthlyGardens['2026-10']) {
        parsed.monthlyGardens['2026-10'] = OCTOBER_2026_HISTORICAL_GARDEN;
      }

      // Preserve all existing historical garden data
      parsed.gardenData = { ...DEFAULT_STATE.gardenData, ...parsed.gardenData };
      if (!parsed.gardenData[TODAY_DAY_NUM]) {
        parsed.gardenData[TODAY_DAY_NUM] = {
          specimen: BOTANICAL_SPECIMENS[TODAY_DAY_NUM - 1] || 'Sunburst Dahlia',
          tasks: 0,
          planned: 0,
          focus: 0,
          stage: 0
        };
      }
      
      // Sanitize future dates: Ensure days > TODAY_DAY_NUM never display completed or bloomed flowers
      // unless legitimately imported data is present
      for (let d = TODAY_DAY_NUM + 1; d <= 31; d++) {
        if (!parsed.gardenData[d]) {
          parsed.gardenData[d] = {
            specimen: BOTANICAL_SPECIMENS[d - 1] || 'Autumn Wildflower',
            tasks: 0,
            planned: 0,
            focus: 0,
            stage: 0
          };
        } else if (!parsed.gardenData[d].isImported) {
          parsed.gardenData[d].stage = 0;
          parsed.gardenData[d].tasks = 0;
          parsed.gardenData[d].focus = 0;
        }
      }

      parsed.monthlyGardens[CurrentDateInfo.monthKey] = parsed.gardenData;

      parsed.tasks = processDateCarryOvers(parsed.tasks || DEFAULT_STATE.tasks);
      if (!Array.isArray(parsed.recentlyErasedTasks)) {
        parsed.recentlyErasedTasks = [];
      }
      return parsed;
    }
    const oldSaved = localStorage.getItem('chalkflow_state_v7') || localStorage.getItem('chalkflow_state_v6');
    if (oldSaved) {
      const oldState = JSON.parse(oldSaved);
      const migrated = { ...DEFAULT_STATE };
      if (oldState.theme) migrated.theme = oldState.theme;
      if (oldState.tasks) migrated.tasks = processDateCarryOvers(oldState.tasks);
      if (oldState.habits) migrated.habits = oldState.habits;
      if (oldState.userName) migrated.userName = oldState.userName;
      if (oldState.focusTimeLoggedToday !== undefined) migrated.focusTimeLoggedToday = oldState.focusTimeLoggedToday;
      migrated.gardenData = { ...DEFAULT_STATE.gardenData, ...(oldState.gardenData || {}) };
      migrated.monthlyGardens = {
        '2026-10': OCTOBER_2026_HISTORICAL_GARDEN,
        [CurrentDateInfo.monthKey]: migrated.gardenData
      };
      if (!migrated.gardenData[TODAY_DAY_NUM]) {
        migrated.gardenData[TODAY_DAY_NUM] = {
          specimen: BOTANICAL_SPECIMENS[TODAY_DAY_NUM - 1] || 'Sunburst Dahlia',
          tasks: 0,
          planned: 0,
          focus: 0,
          stage: 0
        };
      }
      for (let d = TODAY_DAY_NUM + 1; d <= 31; d++) {
        if (!migrated.gardenData[d]) {
          migrated.gardenData[d] = {
            specimen: BOTANICAL_SPECIMENS[d - 1] || 'Autumn Wildflower',
            tasks: 0,
            planned: 0,
            focus: 0,
            stage: 0
          };
        } else if (!migrated.gardenData[d].isImported) {
          migrated.gardenData[d].stage = 0;
          migrated.gardenData[d].tasks = 0;
          migrated.gardenData[d].focus = 0;
        }
      }
      return migrated;
    }
    return DEFAULT_STATE;
  } catch (e) {
    return DEFAULT_STATE;
  }
}

function saveState() {
  try {
    if (!AppState.monthlyGardens) AppState.monthlyGardens = {};
    if (CurrentDateInfo && CurrentDateInfo.monthKey) {
      AppState.monthlyGardens[CurrentDateInfo.monthKey] = AppState.gardenData;
    }
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
  syncDateDisplays();
  initTheme();
  initBrandMascot();
  initUserProfile();
  initNavigation();
  initDashboard();
  initTodaySlate();
  initUpcomingTasks();
  initProgressGarden();
  initHabitLedger();
  initDeepFocus();
  updateGlobalGrowthMetrics();
  isSystemInitializing = false;
});

// --------------------------------------------------------------------------
// A.0 USER PROFILE & DATE CONTROLLER
// --------------------------------------------------------------------------
function syncDateDisplays() {
  CurrentDateInfo = getLocalDateInfo();
  TODAY_DATE = CurrentDateInfo.dateStr;
  TOMORROW_DATE = CurrentDateInfo.tomorrowStr;
  THIS_WEEK_END_DATE = CurrentDateInfo.endOfWeekStr;
  TODAY_DAY_NUM = CurrentDateInfo.dayNum;

  const liveDateEl = document.getElementById('live-date-str');
  if (liveDateEl) {
    liveDateEl.innerText = CurrentDateInfo.friendlyStr;
  }

  const monthHeadingEl = document.getElementById('current-month-heading');
  if (monthHeadingEl) {
    monthHeadingEl.innerText = `${CurrentDateInfo.monthName} ${CurrentDateInfo.year} — Botanical Wildflower Meadow`;
  }
}

function updateUserGreeting() {
  const name = AppState.userName || 'Shouryaa';
  const displayEl = document.getElementById('display-user-name');
  const navNameEl = document.getElementById('nav-user-name');
  const avatarEl = document.getElementById('user-avatar-initial');

  if (displayEl) displayEl.innerText = name;
  if (navNameEl) navNameEl.innerText = name;
  if (avatarEl) avatarEl.innerText = name.charAt(0).toUpperCase();
}

function initUserProfile() {
  const modal = document.getElementById('user-name-modal');
  const closeBtn = document.getElementById('btn-close-name-modal');
  const cancelBtn = document.getElementById('btn-cancel-name-modal');
  const form = document.getElementById('change-user-name-form');
  const input = document.getElementById('input-change-user-name');
  const triggerDash = document.getElementById('btn-edit-user-name');
  const displayClick = document.getElementById('display-user-name');
  const triggerSide = document.getElementById('btn-side-edit-name');
  const sideStripClick = document.getElementById('user-profile-strip');
  const chipBtns = document.querySelectorAll('.name-chip-btn');

  function openModal() {
    if (!modal) return;
    if (input) {
      input.value = AppState.userName || 'Shouryaa';
    }
    modal.style.display = 'flex';
    AudioEngine.playChalkScratch();
    setTimeout(() => {
      if (input) {
        input.focus();
        input.select();
      }
    }, 50);
  }

  function closeModal() {
    if (modal) modal.style.display = 'none';
  }

  if (triggerDash) triggerDash.addEventListener('click', openModal);
  if (displayClick) displayClick.addEventListener('click', openModal);
  if (triggerSide) {
    triggerSide.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal();
    });
  }
  if (sideStripClick) sideStripClick.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  chipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (input && btn.dataset.preset) {
        input.value = btn.dataset.preset;
        AudioEngine.playChalkScratch();
      }
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const newName = input.value.trim();
      if (!newName) return;

      AppState.userName = newName;
      saveState();
      updateUserGreeting();
      closeModal();
      AudioEngine.playChalkScratch();
      emitDustParticles(form.getBoundingClientRect());
      showToast(`Welcome, ${newName}! Name updated ✨`);
    });
  }

  updateUserGreeting();
}

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

  // Rename Today's Star Flower directly from Dashboard Big Box 2
  const renameTodayBtn = document.getElementById('btn-rename-today-flower');
  const renameTodayTitle = document.getElementById('dash-today-specimen-name');
  const renameTodayBox = document.getElementById('dash-rename-today-box');
  const renameTodayInput = document.getElementById('input-dash-rename-flower');
  const saveTodayBtn = document.getElementById('btn-save-dash-flower-name');
  const cancelTodayBtn = document.getElementById('btn-cancel-dash-flower-name');

  const toggleTodayRename = () => {
    if (!renameTodayBox) return;
    const isVisible = renameTodayBox.style.display !== 'none';
    if (isVisible) {
      renameTodayBox.style.display = 'none';
    } else {
      renameTodayBox.style.display = 'flex';
      const current = AppState.gardenData[TODAY_DAY_NUM]?.specimen || 'Sunburst Dahlia';
      if (renameTodayInput) {
        renameTodayInput.value = current;
        renameTodayInput.focus();
        renameTodayInput.select();
      }
    }
  };

  if (renameTodayBtn) renameTodayBtn.addEventListener('click', toggleTodayRename);
  if (renameTodayTitle) renameTodayTitle.addEventListener('click', toggleTodayRename);
  if (cancelTodayBtn) cancelTodayBtn.addEventListener('click', () => {
    if (renameTodayBox) renameTodayBox.style.display = 'none';
  });

  const saveTodayRename = () => {
    if (!renameTodayInput) return;
    const newName = renameTodayInput.value.trim();
    if (newName) {
      if (!AppState.gardenData[TODAY_DAY_NUM]) {
        AppState.gardenData[TODAY_DAY_NUM] = { specimen: newName, tasks: 0, planned: 0, focus: 0, stage: 0 };
      }
      AppState.gardenData[TODAY_DAY_NUM].specimen = newName;
      saveState();
      AudioEngine.playChalkScratch();
      if (saveTodayBtn) emitDustParticles(saveTodayBtn.getBoundingClientRect());
      showToast(`🌸 Renamed today's star flower to "${newName}"!`);
      if (renameTodayBox) renameTodayBox.style.display = 'none';
      renderDashboard();
      renderProgressGarden();
    }
  };

  if (saveTodayBtn) saveTodayBtn.addEventListener('click', saveTodayRename);
  if (renameTodayInput) {
    renameTodayInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        saveTodayRename();
      } else if (e.key === 'Escape') {
        if (renameTodayBox) renameTodayBox.style.display = 'none';
      }
    });
  }

  renderDashboard();
}

function renderDashboard() {
  const dashView = document.getElementById('view-dashboard');
  if (!dashView) return;

  updateUserGreeting();

  const circumference = 213.63; // 2 * Math.PI * 34 for r=34

  // 1. TOP METRICS: TASKS PROGRESS RING
  const todayTasks = AppState.tasks.filter(t => t.targetDate === TODAY_DATE);
  const dayGarden = AppState.gardenData[TODAY_DAY_NUM] || {};
  const erasedCount = dayGarden.erasedTasksCount || 0;
  const completedTasks = todayTasks.filter(t => t.status === 'COMPLETED').length + erasedCount;
  const totalTasks = todayTasks.length + erasedCount;
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
            <span class="dash-priority-dot">${priorityDot}</span>
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
  if (flowerVisual) flowerVisual.innerHTML = ChalkBotanicals.getBotanicalSVG(currentStage, 96, TODAY_DAY_NUM);
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
        if (d <= TODAY_DAY_NUM || AppState.gardenData[d].isImported) {
          bloomedDays.push(d);
        }
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
      card.style.cursor = 'pointer';
      card.title = `Click to inspect or rename ${plant.name}`;
      card.innerHTML = `
        <div class="dash-plant-svg-wrap">
          ${ChalkBotanicals.getBotanicalSVG(4, 56, plant.day)}
        </div>
        <div class="dash-plant-name chalk-font">${plant.name}</div>
        <div class="dash-plant-meta">${plant.tasks} tasks • ${plant.focus}m focus</div>
        <span class="dash-plant-badge chalk-font"><i class="fa-solid fa-seedling"></i> Bloomed</span>
      `;
      card.addEventListener('click', () => {
        const g = AppState.gardenData[plant.day] || { stage: 4, specimen: plant.name, tasks: plant.tasks, focus: plant.focus };
        openGardenDayModal(plant.day, g, 'Full Bloom');
      });
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
  const undoEraseBtn = document.getElementById('btn-undo-erase');
  const undoCountSpan = document.getElementById('undo-erase-count');

  function updateUndoButtonVisibility() {
    const list = AppState.recentlyErasedTasks || [];
    if (undoEraseBtn) {
      if (list.length > 0) {
        undoEraseBtn.style.display = 'inline-flex';
        if (undoCountSpan) undoCountSpan.innerText = list.length;
      } else {
        undoEraseBtn.style.display = 'none';
      }
    }
  }

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
      renderDashboard();
      updateGlobalGrowthMetrics();
      AudioEngine.playChalkScratch();

      form.reset();
      showToast('Pinned task to Today\'s Slate');
    });
  }

  if (eraseCompletedBtn) {
    eraseCompletedBtn.addEventListener('click', () => {
      const completedToday = AppState.tasks.filter(t => t.status === 'COMPLETED' && t.targetDate === TODAY_DATE);
      if (completedToday.length === 0) {
        showToast('No completed tasks to erase.');
        return;
      }

      AudioEngine.playFeltEraserSweep();
      emitDustParticles(eraseCompletedBtn.getBoundingClientRect());

      // Save to undo buffer
      AppState.recentlyErasedTasks = completedToday.map(t => ({ ...t }));

      // Preserve completed tasks count in Progress Garden
      if (!AppState.gardenData[TODAY_DAY_NUM]) {
        AppState.gardenData[TODAY_DAY_NUM] = {
          specimen: BOTANICAL_SPECIMENS[TODAY_DAY_NUM - 1] || 'Sunburst Dahlia',
          tasks: 0,
          planned: 0,
          focus: 0,
          stage: 0
        };
      }
      AppState.gardenData[TODAY_DAY_NUM].erasedTasksCount = (AppState.gardenData[TODAY_DAY_NUM].erasedTasksCount || 0) + completedToday.length;

      // Filter out completed tasks from the active slate
      AppState.tasks = AppState.tasks.filter(t => !(t.status === 'COMPLETED' && t.targetDate === TODAY_DATE));
      saveState();
      renderTodaySlate();
      renderDashboard();
      updateGlobalGrowthMetrics();
      updateUndoButtonVisibility();
      showToast(`Erased ${completedToday.length} completed task${completedToday.length > 1 ? 's' : ''} into resting soil ✨ (Undo available)`);
    });
  }

  if (undoEraseBtn) {
    undoEraseBtn.addEventListener('click', () => {
      const toRestore = AppState.recentlyErasedTasks || [];
      if (toRestore.length === 0) return;

      AudioEngine.playChalkScratch();
      emitDustParticles(undoEraseBtn.getBoundingClientRect());

      // Restore tasks back into AppState.tasks
      AppState.tasks = [...toRestore, ...AppState.tasks];

      // Deduct from gardenData erasedTasksCount so active + erased remains identical (saved garden progress unaffected)
      if (AppState.gardenData[TODAY_DAY_NUM]) {
        AppState.gardenData[TODAY_DAY_NUM].erasedTasksCount = Math.max(
          0,
          (AppState.gardenData[TODAY_DAY_NUM].erasedTasksCount || 0) - toRestore.length
        );
      }

      const count = toRestore.length;
      AppState.recentlyErasedTasks = [];
      saveState();
      renderTodaySlate();
      renderDashboard();
      updateGlobalGrowthMetrics();
      updateUndoButtonVisibility();
      showToast(`Restored ${count} task${count > 1 ? 's' : ''} to Today's Slate ✨`);
    });
  }

  updateUndoButtonVisibility();
  renderTodaySlate();
}

function renderTodaySlate() {
  const taskList = document.getElementById('unified-today-task-list');
  const badge = document.getElementById('today-pending-badge');
  const undoBtn = document.getElementById('btn-undo-erase');
  const undoCountSpan = document.getElementById('undo-erase-count');

  if (undoBtn) {
    const list = AppState.recentlyErasedTasks || [];
    if (list.length > 0) {
      undoBtn.style.display = 'inline-flex';
      if (undoCountSpan) undoCountSpan.innerText = list.length;
    } else {
      undoBtn.style.display = 'none';
    }
  }

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
  const isDone = task.status === 'COMPLETED';
  card.className = `task-card ${isDone ? 'completed' : ''}`;
  card.id = `card-${task.id}`;

  const priorityDot = task.priority === 'HIGH' ? '🔴' : (task.priority === 'MEDIUM' ? '🟡' : '🟢');
  const carriedBadge = task.isCarriedOver ? `<span class="carried-over-badge chalk-font">↪ Carried over</span>` : '';
  const estPill = task.estTime ? `<span class="meta-pill"><i class="fa-regular fa-clock"></i> ${task.estTime}m</span>` : '';
  const catPill = `<span class="meta-pill"><i class="fa-solid fa-tag"></i> ${task.category.toLowerCase()}</span>`;
  
  const subtasksCount = task.subtasks ? task.subtasks.length : 0;
  const subtasksCompleted = task.subtasks ? task.subtasks.filter(s => s.completed).length : 0;

  // Subtasks Drawer (collapsed by default unless task.isExpanded is true)
  let subtasksDrawerHTML = '';
  if (task.isExpanded) {
    const itemsHTML = (task.subtasks || []).map(sub => `
      <div class="nested-subtask-item ${sub.completed ? 'completed' : ''}" data-task-id="${task.id}" data-sub-id="${sub.id}">
        <span class="custom-chalk-checkbox nested-checkbox">${sub.completed ? '✓' : ''}</span>
        <span class="subtask-text">${sub.title}</span>
        <button type="button" class="subtask-delete-btn" title="Delete micro-step" data-action="delete-subtask" data-task-id="${task.id}" data-sub-id="${sub.id}">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `).join('');

    subtasksDrawerHTML = `
      <div class="subtasks-drawer-inline">
        <div class="subtasks-list-container">
          ${itemsHTML || '<div class="subtasks-empty chalk-font">No micro-steps yet. Add one below:</div>'}
        </div>
        <div class="inline-subtask-add-row">
          <input type="text" class="chalk-input subtask-mini-input" placeholder="+ Add a micro-step..." data-task-id="${task.id}">
          <button type="button" class="chalk-btn secondary-btn chalk-font subtask-add-btn" data-action="add-subtask" data-task-id="${task.id}">Add</button>
        </div>
      </div>
    `;
  }

  card.innerHTML = `
    <div class="task-main-row">
      <!-- Checkbox -->
      <div class="task-checkbox-wrap" data-task-id="${task.id}" title="${isDone ? 'Mark uncompleted' : 'Mark completed'}">
        <div class="custom-chalk-checkbox">${isDone ? '✓' : ''}</div>
      </div>
      
      <!-- Interactive Task Body -->
      <div class="task-body-interactive">
        <div class="task-title-line">
          <span class="task-priority-dot" title="${task.priority} Priority">${priorityDot}</span>
          <span class="task-title">${task.title}</span>
          ${carriedBadge}
        </div>
        <div class="task-meta-row">
          ${estPill}
          ${catPill}
        </div>
      </div>

      <!-- Actions -->
      <div class="task-actions">
        <!-- Dedicated Steps Button (Collapsed by default, toggles drawer) -->
        <button class="subtasks-toggle-btn chalk-font ${task.isExpanded ? 'expanded' : ''}" title="View & add micro-steps" data-subtasks-toggle="${task.id}">
          <i class="fa-solid fa-list-check"></i> Steps ${subtasksCount > 0 ? `<span class="steps-count">(${subtasksCompleted}/${subtasksCount})</span>` : ''}
        </button>

        <!-- Edit Button -->
        <button type="button" class="icon-action-btn edit-task-btn" title="Edit task details" data-edit-task="${task.id}">
          <i class="fa-solid fa-pen"></i>
        </button>

        <!-- Focus Button -->
        <button class="focus-task-btn chalk-font" title="Start Deep Focus with this task" data-focus-task="${task.id}">
          <i class="fa-solid fa-brain"></i> Focus
        </button>

        <!-- Erase/Delete Button -->
        <button class="icon-action-btn delete-btn" title="Erase task from slate" data-task-id="${task.id}">
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
    if (task.status === 'COMPLETED') {
      if (task.subtasks) {
        task.subtasks.forEach(s => s.completed = true);
      }
      AudioEngine.playChalkScratch();
      emitDustParticles(checkWrap.getBoundingClientRect());
      showToast('Marked task complete! 🌱');
    } else {
      if (task.subtasks) {
        task.subtasks.forEach(s => s.completed = false);
      }
      AudioEngine.playChalkScratch();
      showToast('Reopened task to slate');
    }
    saveState();
    renderTodaySlate();
    renderDashboard();
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

  // Edit Task Button Handler
  const editBtn = card.querySelector('[data-edit-task]');
  if (editBtn) {
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openEditTaskModal(task.id);
    });
  }

  // Focus Button Handler
  const focusBtn = card.querySelector('[data-focus-task]');
  focusBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateToSurface('deep-focus', task.id);
  });

  // Subtask Checkbox Handlers
  card.querySelectorAll('.nested-subtask-item').forEach(subEl => {
    subEl.addEventListener('click', (e) => {
      if (e.target.closest('[data-action="delete-subtask"]')) return;
      e.stopPropagation();
      const subId = subEl.dataset.subId;
      const targetSub = (task.subtasks || []).find(s => s.id === subId);
      if (targetSub) {
        targetSub.completed = !targetSub.completed;
        const allDone = task.subtasks.length > 0 && task.subtasks.every(s => s.completed);
        if (allDone) {
          task.status = 'COMPLETED';
          emitDustParticles(subEl.getBoundingClientRect());
        } else if (task.status === 'COMPLETED' && !targetSub.completed) {
          task.status = 'TODO';
        }
        AudioEngine.playChalkScratch();
        saveState();
        renderTodaySlate();
        renderDashboard();
        updateGlobalGrowthMetrics();
      }
    });
  });

  // Subtask Delete Handlers
  card.querySelectorAll('[data-action="delete-subtask"]').forEach(delBtn => {
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const subId = delBtn.dataset.subId;
      task.subtasks = (task.subtasks || []).filter(s => s.id !== subId);
      if (task.subtasks.length > 0 && task.subtasks.every(s => s.completed)) {
        task.status = 'COMPLETED';
      }
      saveState();
      renderTodaySlate();
      renderDashboard();
      updateGlobalGrowthMetrics();
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
      if (task.status === 'COMPLETED') {
        task.status = 'TODO';
      }
      AudioEngine.playChalkScratch();
      saveState();
      renderTodaySlate();
      renderDashboard();
      updateGlobalGrowthMetrics();
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

  // Delete Card Handler
  card.querySelector('.delete-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    AppState.tasks = AppState.tasks.filter(t => t.id !== task.id);
    saveState();
    renderTodaySlate();
    renderDashboard();
    updateGlobalGrowthMetrics();
  });

  return card;
}

// --------------------------------------------------------------------------
// D. UPCOMING TASKS & TASK EDITING CONTROLLER
// --------------------------------------------------------------------------
function openEditTaskModal(taskId) {
  const modal = document.getElementById('edit-task-modal');
  const task = AppState.tasks.find(t => t.id === taskId);
  if (!modal || !task) return;

  const idInput = document.getElementById('edit-task-id');
  const titleInput = document.getElementById('edit-task-title');
  const dateInput = document.getElementById('edit-task-date');
  const estTimeInput = document.getElementById('edit-task-est-time');
  const catSelect = document.getElementById('edit-task-category');

  if (idInput) idInput.value = task.id;
  if (titleInput) titleInput.value = task.title || '';
  if (dateInput) {
    dateInput.min = TODAY_DATE;
    dateInput.value = task.targetDate || TODAY_DATE;
  }
  if (estTimeInput) estTimeInput.value = task.estTime || 45;
  if (catSelect) catSelect.value = task.category || 'ACADEMIC';

  const priorityRadios = document.querySelectorAll('input[name="edit-task-priority"]');
  priorityRadios.forEach(r => {
    r.checked = r.value === (task.priority || 'MEDIUM');
  });

  modal.style.display = 'flex';
  if (titleInput) {
    titleInput.focus();
    titleInput.select();
  }
}

function createUpcomingTaskCardElement(task) {
  const card = document.createElement('div');
  const isDone = task.status === 'COMPLETED';
  card.className = `task-card upcoming-task-card ${isDone ? 'completed' : ''}`;
  card.id = `card-${task.id}`;

  const priorityDot = task.priority === 'HIGH' ? '🔴' : (task.priority === 'MEDIUM' ? '🟡' : '🟢');
  const estPill = task.estTime ? `<span class="meta-pill"><i class="fa-regular fa-clock"></i> ${task.estTime}m</span>` : '';
  const catPill = `<span class="meta-pill"><i class="fa-solid fa-tag"></i> ${(task.category || 'academic').toLowerCase()}</span>`;
  
  const subtasksCount = task.subtasks ? task.subtasks.length : 0;
  const subtasksCompleted = task.subtasks ? task.subtasks.filter(s => s.completed).length : 0;
  const subtasksPill = subtasksCount > 0
    ? `<span class="meta-pill" title="${subtasksCompleted}/${subtasksCount} steps completed"><i class="fa-solid fa-list-check"></i> ${subtasksCompleted}/${subtasksCount} steps</span>`
    : '';

  const displayDateStr = formatShortDate(task.targetDate);

  card.innerHTML = `
    <div class="task-main-row">
      <!-- Interactive Task Body -->
      <div class="task-body-interactive">
        <div class="task-title-line">
          <span class="task-priority-dot" title="${task.priority} Priority">${priorityDot}</span>
          <span class="task-title">${task.title}</span>
        </div>
        <div class="task-meta-row">
          <!-- Quick Date Reschedule Pill (Opens native calendar on click) -->
          <label class="meta-pill date-picker-pill" title="Click to reschedule date">
            <i class="fa-regular fa-calendar"></i>
            <span class="date-picker-label">${displayDateStr}</span>
            <input type="date" class="task-date-inline-input" value="${task.targetDate}" min="${TODAY_DATE}" data-task-id="${task.id}">
          </label>
          ${estPill}
          ${catPill}
          ${subtasksPill}
        </div>
      </div>

      <!-- Action Controls -->
      <div class="task-actions upcoming-task-actions">
        <!-- Edit Button -->
        <button type="button" class="icon-action-btn edit-task-btn" title="Edit task details" data-edit-id="${task.id}">
          <i class="fa-solid fa-pen"></i>
        </button>
        <!-- Move to Today Button -->
        <button type="button" class="chalk-btn secondary-btn chalk-font move-today-btn" title="Move to Today's Slate" data-move-id="${task.id}">
          <i class="fa-solid fa-arrow-down-long"></i> Today
        </button>
        <!-- Delete Button -->
        <button type="button" class="icon-action-btn delete-btn" title="Erase from planning shelf" data-delete-id="${task.id}">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  `;

  // Inline Quick Date Picker Handler
  const datePicker = card.querySelector('.task-date-inline-input');
  if (datePicker) {
    datePicker.addEventListener('change', (e) => {
      const newDate = e.target.value;
      if (!newDate) return;
      task.targetDate = newDate;
      if (task.targetDate === TODAY_DATE) {
        task.isCarriedOver = false;
        showToast(`Moved "${task.title}" to Today's Slate 🌱`);
      } else {
        showToast(`Rescheduled to ${formatShortDate(newDate)} 📅`);
      }
      AudioEngine.playChalkScratch();
      saveState();
      renderUpcomingTasks();
      renderTodaySlate();
      renderDashboard();
    });
  }

  // Move to Today Handler
  const moveBtn = card.querySelector('[data-move-id]');
  if (moveBtn) {
    moveBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      task.targetDate = TODAY_DATE;
      task.isCarriedOver = false;
      AudioEngine.playChalkScratch();
      emitDustParticles(moveBtn.getBoundingClientRect());
      saveState();
      renderUpcomingTasks();
      renderTodaySlate();
      renderDashboard();
      showToast(`Moved "${task.title}" to Today's Slate 🌱`);
    });
  }

  // Edit Task Modal Handler
  const editBtn = card.querySelector('[data-edit-id]');
  if (editBtn) {
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openEditTaskModal(task.id);
    });
  }

  // Delete Card Handler
  const deleteBtn = card.querySelector('[data-delete-id]');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      AppState.tasks = AppState.tasks.filter(t => t.id !== task.id);
      AudioEngine.playChalkScratch();
      emitDustParticles(deleteBtn.getBoundingClientRect());
      saveState();
      renderUpcomingTasks();
      renderDashboard();
      showToast('Erased task from planning shelf 🧹');
    });
  }

  return card;
}

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
      const priorityRadio = document.querySelector('input[name="upcoming-priority"]:checked');
      const priority = priorityRadio ? priorityRadio.value : 'MEDIUM';
      const category = document.getElementById('upcoming-category-select').value;
      const estTimeInput = document.getElementById('upcoming-est-time');
      const estTime = estTimeInput ? (parseInt(estTimeInput.value, 10) || 45) : 45;

      const newTask = {
        id: `task-${Date.now()}`,
        title,
        priority,
        category,
        estTime,
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
      AudioEngine.playChalkScratch();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) emitDustParticles(submitBtn.getBoundingClientRect());
      showToast('Scheduled task in Future Planning Shelf');
    });
  }

  // Edit Task Modal Event Handlers
  const editModal = document.getElementById('edit-task-modal');
  const closeEditBtn = document.getElementById('btn-close-edit-task-modal');
  const cancelEditBtn = document.getElementById('btn-cancel-edit-task');
  const editForm = document.getElementById('edit-task-form');

  const closeEditModal = () => {
    if (editModal) editModal.style.display = 'none';
  };

  if (closeEditBtn) closeEditBtn.addEventListener('click', closeEditModal);
  if (cancelEditBtn) cancelEditBtn.addEventListener('click', closeEditModal);
  if (editModal) {
    editModal.addEventListener('click', (e) => {
      if (e.target === editModal) closeEditModal();
    });
  }

  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskId = document.getElementById('edit-task-id').value;
      const task = AppState.tasks.find(t => t.id === taskId);
      if (!task) return;

      const newTitle = document.getElementById('edit-task-title').value.trim();
      const newDate = document.getElementById('edit-task-date').value;
      const newEstTime = parseInt(document.getElementById('edit-task-est-time').value, 10) || 45;
      const chosenPriority = document.querySelector('input[name="edit-task-priority"]:checked');
      const newCategory = document.getElementById('edit-task-category').value;

      if (newTitle) task.title = newTitle;
      if (newDate) {
        task.targetDate = newDate;
        if (task.targetDate === TODAY_DATE) {
          task.isCarriedOver = false;
        }
      }
      task.estTime = newEstTime;
      if (chosenPriority) task.priority = chosenPriority.value;
      if (newCategory) task.category = newCategory;

      saveState();
      AudioEngine.playChalkScratch();
      const submitBtn = editForm.querySelector('button[type="submit"]');
      if (submitBtn) emitDustParticles(submitBtn.getBoundingClientRect());

      closeEditModal();
      renderUpcomingTasks();
      renderTodaySlate();
      renderDashboard();
      showToast(`Updated "${task.title}"! ✏️`);
    });
  }

  // Keyboard shortcut: Escape to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && editModal && editModal.style.display !== 'none') {
      closeEditModal();
    }
  });

  renderUpcomingTasks();
}

function renderUpcomingTasks() {
  const listTomorrow = document.getElementById('list-tomorrow');
  const listThisWeek = document.getElementById('list-this-week');
  const listNextWeek = document.getElementById('list-next-week');
  const listLater = document.getElementById('list-later');
  const badge = document.getElementById('upcoming-badge');

  if (!listTomorrow || !listThisWeek || !listNextWeek || !listLater) return;

  // Dynamic Column Subtitle Labels
  const labelTomorrow = document.getElementById('date-label-tomorrow');
  const labelThisWeek = document.getElementById('date-label-this-week');
  const labelNextWeek = document.getElementById('date-label-next-week');
  const labelLater = document.getElementById('date-label-later');

  if (labelTomorrow) labelTomorrow.innerText = formatShortDate(TOMORROW_DATE);
  if (labelThisWeek) labelThisWeek.innerText = `Through ${formatShortDate(THIS_WEEK_END_DATE)}`;
  if (labelNextWeek) labelNextWeek.innerText = `${formatShortDate(NEXT_WEEK_START_DATE)} – ${formatShortDate(NEXT_WEEK_END_DATE)}`;
  if (labelLater) labelLater.innerText = `Beyond ${formatShortDate(NEXT_WEEK_END_DATE)}`;

  listTomorrow.innerHTML = '';
  listThisWeek.innerHTML = '';
  listNextWeek.innerHTML = '';
  listLater.innerHTML = '';

  const upcomingTasks = AppState.tasks.filter(t => t.targetDate > TODAY_DATE);
  if (badge) badge.innerText = upcomingTasks.length;

  // Priority sorting weights: HIGH -> MEDIUM -> LOW
  const priorityWeight = { 'HIGH': 1, 'MEDIUM': 2, 'LOW': 3 };
  const sortedUpcoming = [...upcomingTasks].sort((a, b) => {
    if (a.targetDate !== b.targetDate) return a.targetDate.localeCompare(b.targetDate);
    return (priorityWeight[a.priority] || 2) - (priorityWeight[b.priority] || 2);
  });

  let countTomorrow = 0, countThisWeek = 0, countNextWeek = 0, countLater = 0;

  sortedUpcoming.forEach(t => {
    const card = createUpcomingTaskCardElement(t);

    if (t.targetDate === TOMORROW_DATE) {
      listTomorrow.appendChild(card);
      countTomorrow++;
    } else if (t.targetDate <= THIS_WEEK_END_DATE) {
      listThisWeek.appendChild(card);
      countThisWeek++;
    } else if (t.targetDate <= NEXT_WEEK_END_DATE) {
      listNextWeek.appendChild(card);
      countNextWeek++;
    } else {
      listLater.appendChild(card);
      countLater++;
    }
  });

  // Peaceful chalkboard empty states
  if (countTomorrow === 0) {
    listTomorrow.innerHTML = '<div class="bucket-empty-state chalk-font">No tasks scheduled</div>';
  }
  if (countThisWeek === 0) {
    listThisWeek.innerHTML = '<div class="bucket-empty-state chalk-font">No tasks scheduled</div>';
  }
  if (countNextWeek === 0) {
    listNextWeek.innerHTML = '<div class="bucket-empty-state chalk-font">No tasks scheduled</div>';
  }
  if (countLater === 0) {
    listLater.innerHTML = '<div class="bucket-empty-state chalk-font">No tasks scheduled</div>';
  }

  const countTomEl = document.getElementById('count-tomorrow');
  const countWeekEl = document.getElementById('count-this-week');
  const countNextEl = document.getElementById('count-next-week');
  const countLaterEl = document.getElementById('count-later');

  if (countTomEl) countTomEl.innerText = countTomorrow;
  if (countWeekEl) countWeekEl.innerText = countThisWeek;
  if (countNextEl) countNextEl.innerText = countNextWeek;
  if (countLaterEl) countLaterEl.innerText = countLater;
}

// --------------------------------------------------------------------------
// E. PROGRESS GARDEN (RICH WILDFLOWER MEADOW & JOURNAL)
// --------------------------------------------------------------------------
function initProgressGarden() {
  const modal = document.getElementById('garden-day-modal');
  const closeBtn = document.getElementById('btn-close-garden-modal');
  const dismissBtn = document.getElementById('btn-modal-dismiss');
  const renameBtn = document.getElementById('btn-rename-specimen');
  const speciesTitle = document.getElementById('modal-species-name');
  const renameBox = document.getElementById('modal-rename-box');
  const renameInput = document.getElementById('input-rename-flower');
  const saveBtn = document.getElementById('btn-save-flower-name');
  const cancelBtn = document.getElementById('btn-cancel-flower-name');

  if (closeBtn) closeBtn.addEventListener('click', () => modal.style.display = 'none');
  if (dismissBtn) dismissBtn.addEventListener('click', () => modal.style.display = 'none');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  const toggleModalRename = () => {
    if (!renameBox || !modal) return;
    const isVisible = renameBox.style.display !== 'none';
    if (isVisible) {
      renameBox.style.display = 'none';
    } else {
      renameBox.style.display = 'block';
      const day = parseInt(modal.dataset.currentDay, 10);
      const current = AppState.gardenData[day]?.specimen || (BOTANICAL_SPECIMENS_OCTOBER[day - 1] || 'Autumn Wildflower');
      if (renameInput) {
        renameInput.value = current;
        renameInput.focus();
        renameInput.select();
      }
    }
  };

  if (renameBtn) renameBtn.addEventListener('click', toggleModalRename);
  if (speciesTitle) speciesTitle.addEventListener('click', toggleModalRename);
  if (cancelBtn) cancelBtn.addEventListener('click', () => {
    if (renameBox) renameBox.style.display = 'none';
  });

  const saveModalRename = () => {
    if (!renameInput || !modal) return;
    const newName = renameInput.value.trim();
    const day = parseInt(modal.dataset.currentDay, 10);
    if (newName && day) {
      if (GardenView.isCurrentMonth) {
        if (!AppState.gardenData[day]) {
          AppState.gardenData[day] = { specimen: newName, tasks: 0, planned: 0, focus: 0, stage: 0 };
        }
        AppState.gardenData[day].specimen = newName;
      } else {
        if (!AppState.monthlyGardens[GardenView.monthKey]) {
          AppState.monthlyGardens[GardenView.monthKey] = {};
        }
        if (!AppState.monthlyGardens[GardenView.monthKey][day]) {
          AppState.monthlyGardens[GardenView.monthKey][day] = { specimen: newName, tasks: 0, planned: 0, focus: 0, stage: 0 };
        }
        AppState.monthlyGardens[GardenView.monthKey][day].specimen = newName;
      }
      saveState();
      AudioEngine.playChalkScratch();
      if (saveBtn) emitDustParticles(saveBtn.getBoundingClientRect());
      if (speciesTitle) speciesTitle.innerText = `🌸 ${newName}`;
      if (renameBox) renameBox.style.display = 'none';
      showToast(`🌸 Renamed Day ${day}'s flower to "${newName}"!`);
      renderProgressGarden();
      if (GardenView.isCurrentMonth) renderDashboard();
    }
  };

  if (saveBtn) saveBtn.addEventListener('click', saveModalRename);
  if (renameInput) {
    renameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        saveModalRename();
      } else if (e.key === 'Escape') {
        if (renameBox) renameBox.style.display = 'none';
      }
    });
  }

  // Meadow Landscape Navigation Scroll Buttons
  const scrollLeftBtn = document.getElementById('btn-meadow-scroll-left');
  const scrollRightBtn = document.getElementById('btn-meadow-scroll-right');
  const centerTodayBtn = document.getElementById('btn-meadow-center-today');
  const meadowViewport = document.getElementById('meadow-panorama-viewport');
  const sceneryWrap = document.getElementById('meadow-scenery-wrap');

  function updateMeadowScrollIndicators() {
    if (!meadowViewport) return;
    const scrollLeft = meadowViewport.scrollLeft;
    const maxScroll = meadowViewport.scrollWidth - meadowViewport.clientWidth;
    const canLeft = scrollLeft > 10;
    const canRight = scrollLeft < (maxScroll - 10);

    if (sceneryWrap) {
      sceneryWrap.classList.toggle('can-scroll-left', canLeft);
      sceneryWrap.classList.toggle('can-scroll-right', canRight);
    }
    if (scrollLeftBtn) {
      scrollLeftBtn.style.opacity = canLeft ? '1' : '0.4';
      scrollLeftBtn.style.cursor = canLeft ? 'pointer' : 'default';
    }
    if (scrollRightBtn) {
      scrollRightBtn.style.opacity = canRight ? '1' : '0.4';
      scrollRightBtn.style.cursor = canRight ? 'pointer' : 'default';
    }
  }

  if (meadowViewport) {
    meadowViewport.addEventListener('scroll', updateMeadowScrollIndicators, { passive: true });
    window.addEventListener('resize', updateMeadowScrollIndicators);

    // Mouse drag-to-scroll panning for desktop users without horizontal wheels
    let isDown = false;
    let startX = 0;
    let initialScroll = 0;

    meadowViewport.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      isDown = true;
      meadowViewport.dataset.hasDragged = 'false';
      startX = e.pageX - meadowViewport.offsetLeft;
      initialScroll = meadowViewport.scrollLeft;
      meadowViewport.classList.add('is-panning');
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        meadowViewport.classList.remove('is-panning');
        setTimeout(() => {
          if (meadowViewport) meadowViewport.dataset.hasDragged = 'false';
        }, 80);
      }
    });

    meadowViewport.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      const x = e.pageX - meadowViewport.offsetLeft;
      const walk = (x - startX);
      if (Math.abs(walk) > 6) {
        meadowViewport.dataset.hasDragged = 'true';
      }
      meadowViewport.scrollLeft = initialScroll - walk;
    });
  }

  if (scrollLeftBtn) {
    scrollLeftBtn.addEventListener('click', () => {
      if (meadowViewport) {
        meadowViewport.scrollBy({ left: -330, behavior: 'smooth' });
        setTimeout(updateMeadowScrollIndicators, 350);
      }
    });
  }

  if (scrollRightBtn) {
    scrollRightBtn.addEventListener('click', () => {
      if (meadowViewport) {
        meadowViewport.scrollBy({ left: 330, behavior: 'smooth' });
        setTimeout(updateMeadowScrollIndicators, 350);
      }
    });
  }

  // Month Navigation Buttons
  const prevMonthBtn = document.getElementById('btn-garden-prev-month');
  const nextMonthBtn = document.getElementById('btn-garden-next-month');

  if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', () => {
      GardenView.month -= 1;
      if (GardenView.month < 1) {
        GardenView.month = 12;
        GardenView.year -= 1;
      }
      AudioEngine.playChalkScratch();
      renderProgressGarden();
    });
  }

  if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', () => {
      if (GardenView.isCurrentMonth) {
        showToast('You are already viewing the active month.');
        return;
      }
      GardenView.month += 1;
      if (GardenView.month > 12) {
        GardenView.month = 1;
        GardenView.year += 1;
      }
      AudioEngine.playChalkScratch();
      renderProgressGarden();
    });
  }

  if (centerTodayBtn) {
    centerTodayBtn.addEventListener('click', () => {
      if (!GardenView.isCurrentMonth) {
        GardenView.year = CurrentDateInfo.year;
        GardenView.month = CurrentDateInfo.monthNum;
        renderProgressGarden();
      }
      if (meadowViewport) {
        const todayX = 65 + (TODAY_DAY_NUM - 1) * 110;
        const vpWidth = meadowViewport.clientWidth || 800;
        meadowViewport.scrollTo({ left: Math.max(0, todayX - (vpWidth / 2)), behavior: 'smooth' });
        AudioEngine.playChalkScratch();
        setTimeout(updateMeadowScrollIndicators, 350);
      }
    });
  }

  renderProgressGarden();
}

function renderProgressGarden() {
  const grid = document.getElementById('botanical-calendar-grid');
  const meadowViewport = document.getElementById('meadow-panorama-viewport');
  const bloomCountEl = document.getElementById('meadow-bloom-count');
  const totalFocusEl = document.getElementById('meadow-total-focus');
  const monthHeadingEl = document.getElementById('current-month-heading');
  const statusPillEl = document.getElementById('garden-month-status-pill');
  const nextMonthBtn = document.getElementById('btn-garden-next-month');

  if (monthHeadingEl) {
    monthHeadingEl.innerText = `${GardenView.monthName} ${GardenView.year} — Botanical Wildflower Meadow`;
  }

  if (statusPillEl) {
    if (GardenView.isCurrentMonth) {
      statusPillEl.className = 'month-status-pill active-pill chalk-font';
      statusPillEl.innerText = 'Active Month';
    } else {
      statusPillEl.className = 'month-status-pill archived-pill chalk-font';
      statusPillEl.innerText = 'Archived Garden';
    }
  }

  if (nextMonthBtn) {
    if (GardenView.isCurrentMonth) {
      nextMonthBtn.style.opacity = '0.35';
      nextMonthBtn.style.cursor = 'default';
      nextMonthBtn.title = 'Cannot navigate into future months';
    } else {
      nextMonthBtn.style.opacity = '1';
      nextMonthBtn.style.cursor = 'pointer';
      nextMonthBtn.title = 'Next Month';
    }
  }

  // 1. Render Handcrafted Vector Chalk Botanical Meadow Panorama across Full Month
  if (meadowViewport) {
    ChalkMeadowPanorama.renderMeadow(meadowViewport);
    // Smoothly scroll and center landscape on Today's plot (or start for archived months)
    setTimeout(() => {
      if (GardenView.isCurrentMonth) {
        const todayX = 65 + (TODAY_DAY_NUM - 1) * 110;
        const vpWidth = meadowViewport.clientWidth || 800;
        meadowViewport.scrollTo({ left: Math.max(0, todayX - (vpWidth / 2)), behavior: 'smooth' });
      } else {
        meadowViewport.scrollTo({ left: 0, behavior: 'smooth' });
      }
      const sceneryWrap = document.getElementById('meadow-scenery-wrap');
      const leftBtn = document.getElementById('btn-meadow-scroll-left');
      const rightBtn = document.getElementById('btn-meadow-scroll-right');
      if (sceneryWrap) {
        const canLeft = meadowViewport.scrollLeft > 10;
        const canRight = meadowViewport.scrollLeft < (meadowViewport.scrollWidth - meadowViewport.clientWidth - 10);
        sceneryWrap.classList.toggle('can-scroll-left', canLeft);
        sceneryWrap.classList.toggle('can-scroll-right', canRight);
        if (leftBtn) {
          leftBtn.style.opacity = canLeft ? '1' : '0.4';
          leftBtn.style.cursor = canLeft ? 'pointer' : 'default';
        }
        if (rightBtn) {
          rightBtn.style.opacity = canRight ? '1' : '0.4';
          rightBtn.style.cursor = canRight ? 'pointer' : 'default';
        }
      }
    }, 60);
  }

  // 2. Illustrated Nature Journal Grid
  if (grid) {
    grid.innerHTML = '';
    let fullBlooms = 0;
    let totalFocusMinutes = 0;
    const totalDays = GardenView ? GardenView.daysInMonth : (CurrentDateInfo ? CurrentDateInfo.daysInMonth : 30);
    const monthGarden = getGardenDataForMonth(GardenView ? GardenView.monthKey : CurrentDateInfo.monthKey);

    for (let day = 1; day <= totalDays; day++) {
      const isToday = GardenView.isCurrentMonth && day === TODAY_DAY_NUM;
      const isFuture = GardenView.isCurrentMonth && day > TODAY_DAY_NUM;
      let dayData = monthGarden[day];
      if (!dayData) {
        dayData = {
          specimen: BOTANICAL_SPECIMENS[day - 1] || 'Autumn Wildflower',
          tasks: 0,
          planned: 0,
          focus: 0,
          stage: 0
        };
      } else if (isFuture && !dayData.isImported) {
        // Enforce stage 0 resting seed placeholder for future dates
        dayData = { ...dayData, stage: 0, tasks: 0, focus: 0 };
      }

      // Only count blooms and focus from past days and today (or legitimate imports)
      if (dayData.stage === 4) fullBlooms++;
      if (!isFuture || dayData.isImported) totalFocusMinutes += (dayData.focus || 0);

      const stageNamesShort = ['Seed', 'Sprout', 'Stem', 'Bud', 'Bloom'];
      const currentStage = dayData ? (dayData.stage ?? 0) : 0;
      const stageTagText = isToday ? '★ Today' : (isFuture ? 'Seed' : (stageNamesShort[currentStage] || 'Seed'));

      const tile = document.createElement('div');
      tile.className = `calendar-day-tile ${isToday ? 'is-today' : ''} ${isFuture ? 'is-future-tile' : ''}`;
      tile.dataset.day = day;
      tile.title = `Day ${day}: ${dayData.specimen} (${isFuture ? 'Upcoming Plot - Resting Seed' : (GROWTH_STAGE_NAMES[currentStage] || 'Resting Seed')})`;
      tile.innerHTML = `
        <div class="tile-top">
          <span class="day-num">${day < 10 ? '0' + day : day}</span>
          <span class="stage-tag stage-${currentStage} ${isToday ? 'today-tag' : ''} ${isFuture ? 'future-tag' : ''}">${stageTagText}</span>
        </div>
        <div class="tile-artwork-svg">${ChalkBotanicals.getBotanicalSVG(currentStage, 34, day)}</div>
        <div class="tile-bottom chalk-font" title="${dayData.specimen}">${dayData.specimen}</div>
      `;

      tile.addEventListener('click', () => {
        AudioEngine.playChalkScratch();
        emitDustParticles(tile.getBoundingClientRect());
        openGardenDayModal(day, dayData, GROWTH_STAGE_NAMES[currentStage]);
      });

      grid.appendChild(tile);
    }

    if (bloomCountEl) bloomCountEl.innerText = `${fullBlooms}/${totalDays}`;
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

  modal.dataset.currentDay = day;
  const renameBox = document.getElementById('modal-rename-box');
  if (renameBox) renameBox.style.display = 'none';

  const isToday = GardenView.isCurrentMonth && day === TODAY_DAY_NUM;
  const isFuture = GardenView.isCurrentMonth && day > TODAY_DAY_NUM && !dayData?.isImported;

  const currentStage = isFuture ? 0 : (dayData ? (dayData.stage ?? 0) : 0);
  const currentStageName = isFuture ? 'Resting Seed (Upcoming Plot)' : (stageName || GROWTH_STAGE_NAMES[currentStage] || 'Resting Seed');
  const specimenName = dayData?.specimen || (BOTANICAL_SPECIMENS[day - 1] || 'Autumn Wildflower');
  const tasksRatio = isFuture ? '0 / 0 tasks' : `${dayData?.tasks ?? 0} / ${dayData?.planned || dayData?.tasks || 5} tasks`;
  const focusTime = isFuture ? '0 mins' : `${dayData?.focus ?? 0} mins`;

  // Calculate habit completions for this day (tracked independently by Habit Ledger)
  const totalHabits = AppState.habits.length || 4;
  const completedHabitsToday = AppState.habits.filter(h => h.current >= (h.type === 'COUNTER' ? h.target : 1)).length;
  const habitsRatio = isFuture
    ? `0 / ${totalHabits} habits`
    : (isToday
      ? `${completedHabitsToday} / ${totalHabits} habits`
      : `${Math.min(totalHabits, 3 + (day % 2))} / ${totalHabits} habits`);

  const speciesNameEl = document.getElementById('modal-species-name');
  const dateTitleEl = document.getElementById('modal-date-title');
  const flowerVisualEl = document.getElementById('modal-flower-visual');
  const growthStageEl = document.getElementById('modal-growth-stage');
  const tasksRatioEl = document.getElementById('modal-tasks-ratio');
  const habitsRatioEl = document.getElementById('modal-habits-ratio');
  const focusTimeEl = document.getElementById('modal-focus-time');
  const quoteEl = document.getElementById('modal-encouragement-quote');

  if (speciesNameEl) speciesNameEl.innerText = `🌸 ${specimenName}`;
  if (dateTitleEl) dateTitleEl.innerText = `${GardenView.monthName} ${day}, ${GardenView.year}`;
  if (flowerVisualEl) flowerVisualEl.innerHTML = ChalkBotanicals.getBotanicalSVG(currentStage, 74, day);
  if (growthStageEl) growthStageEl.innerText = currentStageName;
  if (tasksRatioEl) tasksRatioEl.innerText = tasksRatio;
  if (habitsRatioEl) habitsRatioEl.innerText = habitsRatio;
  if (focusTimeEl) focusTimeEl.innerText = focusTime;

  if (quoteEl) {
    if (isFuture) {
      quoteEl.innerText = '"An upcoming plot waiting for tomorrow\'s sunlight. Plant your intentions when the day arrives."';
    } else if (currentStage === 0) {
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
          <div style="display:flex; align-items:center; gap:6px;">
            <div class="habit-name">${h.name}</div>
            <button type="button" class="chalk-icon-btn btn-rename-habit" data-habit-id="${h.id}" title="Rename habit" style="width:20px; height:20px; font-size:9px; opacity:0.65;">
              <i class="fa-solid fa-pen"></i>
            </button>
          </div>
          <div class="habit-tally">${Math.min(h.completions || 0, TODAY_DAY_NUM)}/${TODAY_DAY_NUM} days completed this month</div>
        </div>
      </div>
      <div class="habit-action-controls">
        ${actionHTML}
      </div>
    `;

    const renameHabitBtn = card.querySelector('.btn-rename-habit');
    if (renameHabitBtn) {
      renameHabitBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newName = prompt(`Rename habit "${h.name}":`, h.name);
        if (newName && newName.trim() && newName.trim() !== h.name) {
          h.name = newName.trim();
          saveState();
          AudioEngine.playChalkScratch();
          showToast(`✏️ Renamed habit to "${h.name}"!`);
          renderHabitLedger();
          renderDashboard();
        }
      });
    }

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
      updateGlobalGrowthMetrics();
    });

    container.appendChild(card);
  });

  const maxMonthlyTarget = AppState.habits.length * 20;
  const growthPercent = Math.min(100, Math.round((totalCompletions / (maxMonthlyTarget || 1)) * 100));

  if (progressBar) progressBar.style.width = `${growthPercent}%`;
  if (progressText) progressText.innerText = `${totalCompletions} habit completions logged this month (${growthPercent}% of monthly goal)`;

  // Populate Interactive Daily Rhythm Strip (D1 to Today)
  const daysStrip = document.getElementById('habit-days-strip');
  if (daysStrip) {
    daysStrip.innerHTML = '';
    const totalHabits = AppState.habits.length || 4;
    const completedToday = AppState.habits.filter(h => h.current >= (h.type === 'COUNTER' ? h.target : 1)).length;

    for (let day = 1; day <= TODAY_DAY_NUM; day++) {
      const isToday = day === TODAY_DAY_NUM;
      const dayData = AppState.gardenData[day] || {
        specimen: BOTANICAL_SPECIMENS[day - 1] || 'Autumn Wildflower',
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
  const activeCompleted = todayTasks.filter(t => t.status === 'COMPLETED').length;
  const dayGarden = AppState.gardenData[TODAY_DAY_NUM] || {};
  const erasedCount = dayGarden.erasedTasksCount || 0;
  const completedCount = activeCompleted + erasedCount;
  const effectivePlanned = Math.max(todayTasks.length + erasedCount, dayGarden.planned || 0, completedCount);
  const focusMins = AppState.focusTimeLoggedToday || 0;

  // 1. Separate Progress Garden & Habit Ledger:
  // Growth stage depends purely on completed tasks & focus minutes (Habit Ledger tracks habit rhythms independently)
  let calculatedStage = 0;
  if (completedCount === 0 && focusMins === 0) {
    calculatedStage = 0; // Resting Seed
  } else if (
    (effectivePlanned > 0 && completedCount === effectivePlanned && focusMins >= 45) ||
    completedCount >= 5 ||
    focusMins >= 90
  ) {
    calculatedStage = 4; // Full Bloom
  } else if (
    (effectivePlanned > 0 && (completedCount / effectivePlanned) >= 0.6) ||
    completedCount >= 3 ||
    focusMins >= 55
  ) {
    calculatedStage = 3; // Swelling Bud
  } else if (
    completedCount >= 2 ||
    focusMins >= 30 ||
    (completedCount >= 1 && focusMins >= 15)
  ) {
    calculatedStage = 2; // Branching Stem
  } else {
    calculatedStage = 1; // The Sprout
  }

  // 2. Preserve Earned Flower Growth:
  // Once a flower reaches a growth stage, it never shrinks if a task is reopened or edited.
  const previousStage = dayGarden.stage ?? 0;
  const earnedStage = Math.max(calculatedStage, previousStage);
  const hasGrown = earnedStage > previousStage;

  if (!AppState.gardenData[TODAY_DAY_NUM]) {
    AppState.gardenData[TODAY_DAY_NUM] = { specimen: BOTANICAL_SPECIMENS[TODAY_DAY_NUM - 1] || 'Sunburst Dahlia', tasks: 0, planned: 0, focus: 0, stage: 0 };
  }
  AppState.gardenData[TODAY_DAY_NUM].tasks = completedCount;
  AppState.gardenData[TODAY_DAY_NUM].planned = effectivePlanned;
  AppState.gardenData[TODAY_DAY_NUM].focus = focusMins;
  AppState.gardenData[TODAY_DAY_NUM].stage = earnedStage;

  if (!AppState.monthlyGardens) AppState.monthlyGardens = {};
  AppState.monthlyGardens[CurrentDateInfo.monthKey] = AppState.gardenData;

  saveState();

  const stageNames = ['Resting Seed', 'The Sprout', 'Branching Stem', 'Swelling Bud', 'Full Bloom'];

  const topIcon = document.getElementById('top-flower-icon');
  const topStage = document.getElementById('top-growth-stage');
  const topMeta = document.getElementById('top-growth-meta');
  const finalStage = AppState.gardenData[TODAY_DAY_NUM].stage;
  if (topIcon) topIcon.innerHTML = ChalkBotanicals.getBotanicalSVG(finalStage, 28, TODAY_DAY_NUM);
  if (topStage) topStage.innerText = stageNames[finalStage];
  if (topMeta) topMeta.innerText = `${completedCount} tasks • ${focusMins}m focus`;

  renderDashboard();
  renderProgressGarden();

  // 3. Subtle Organic Growth Animation when new stage is reached (not on initial load)
  if (hasGrown && !isSystemInitializing) {
    triggerBotanicalGrowthAnimation(earnedStage);
  }
}

function triggerBotanicalGrowthAnimation(newStage) {
  // A. Dashboard flower visual
  const dashVisual = document.getElementById('dash-today-flower-visual');
  if (dashVisual) {
    dashVisual.classList.remove('plant-growth-anim');
    void dashVisual.offsetWidth; // trigger reflow
    dashVisual.classList.add('plant-growth-anim');
    setTimeout(() => {
      if (dashVisual) dashVisual.classList.remove('plant-growth-anim');
    }, 1000);
  }

  // B. Top navigation flower icon
  const topIcon = document.getElementById('top-flower-icon');
  if (topIcon) {
    topIcon.classList.remove('plant-growth-anim');
    void topIcon.offsetWidth;
    topIcon.classList.add('plant-growth-anim');
    setTimeout(() => {
      if (topIcon) topIcon.classList.remove('plant-growth-anim');
    }, 1000);
  }

  // C. Progress Garden landscape plant hotspot
  const todayHotspot = document.getElementById(`plant-hotspot-d${TODAY_DAY_NUM}`);
  if (todayHotspot) {
    todayHotspot.classList.add('is-stage-growing');
    setTimeout(() => {
      if (todayHotspot) todayHotspot.classList.remove('is-stage-growing');
    }, 1200);
  }

  // D. Nature journal calendar tile
  const todayTile = document.querySelector('.calendar-day-tile.is-today');
  if (todayTile) {
    todayTile.classList.add('tile-growth-pulse');
    setTimeout(() => {
      if (todayTile) todayTile.classList.remove('tile-growth-pulse');
    }, 1000);
  }

  const stageNames = ['Resting Seed', 'The Sprout', 'Branching Stem', 'Swelling Bud', 'Full Bloom'];
  showToast(`🌱 Botanical Growth: Reached ${stageNames[newStage] || 'new stage'}!`);
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
