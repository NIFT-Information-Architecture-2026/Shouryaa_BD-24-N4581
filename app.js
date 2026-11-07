/**
 * CHALKFLOW — Mindful Productivity & Botanical Focus Engine
 * Refined Interactive Architecture & Handcrafted Wildflower Meadow
 * Creative Director: Shouryaa (Fashion Communication, NIFT Hyderabad)
 * Technical Architect: Antigravity
 */

// ==========================================================================
// ==========================================================================
// 1. CHALK BOTANICAL SPECIES LIBRARY & SVG ARTWORK ENGINE
// ==========================================================================
const BotanicalSpeciesLibrary = {
  SPECIES_ORDER: [
    'cosmos', 'cornflower', 'iris', 'daisy', 'sunflower', 'lavender',
    'calendula', 'poppy', 'bluebell', 'forget-me-not', 'tulip', 'anemone'
  ],

  resolveSpeciesKey(specimenName, day = 1) {
    if (specimenName && typeof specimenName === 'string') {
      const s = specimenName.toLowerCase();
      if (s.includes('lavender') || s.includes('heather') || s.includes('lupine') || s.includes('spike')) return 'lavender';
      if (s.includes('sunflower') || s.includes('rudbeckia') || s.includes('dahlia') || s.includes('helianthus')) return 'sunflower';
      if (s.includes('bluebell') || s.includes('bell') || s.includes('harebell') || s.includes('campanula')) return 'bluebell';
      if (s.includes('iris') || s.includes('orchid') || s.includes('pansy') || s.includes('violet')) return 'iris';
      if (s.includes('poppy') || s.includes('carnation') || s.includes('papaver')) return 'poppy';
      if (s.includes('tulip') || s.includes('crocus') || s.includes('tulipa')) return 'tulip';
      if (s.includes('forget') || s.includes('jasmine') || s.includes('hydrangea') || s.includes('myosotis')) return 'forget-me-not';
      if (s.includes('calendula') || s.includes('marigold') || s.includes('zinnia') || s.includes('terracotta')) return 'calendula';
      if (s.includes('cornflower') || s.includes('aster') || s.includes('bachelor') || s.includes('centaurea')) return 'cornflower';
      if (s.includes('anemone') || s.includes('hibiscus') || s.includes('william') || s.includes('windflower')) return 'anemone';
      if (s.includes('cosmos')) return 'cosmos';
      if (s.includes('daisy') || s.includes('chamomile') || s.includes('coneflower') || s.includes('buttercup') || s.includes('primrose')) return 'daisy';
    }
    const safeDay = Math.max(1, parseInt(day, 10) || 1);
    return this.SPECIES_ORDER[(safeDay - 1) % this.SPECIES_ORDER.length];
  },

  getSpeciesDisplayName(key) {
    const names = {
      'daisy': 'Meadow Daisy',
      'lavender': 'Wild Lavender',
      'poppy': 'Flanders Poppy',
      'tulip': 'Garden Tulip',
      'cosmos': 'Sunburst Cosmos',
      'sunflower': 'Golden Sunflower',
      'bluebell': 'Woodland Bluebell',
      'iris': 'Royal Iris',
      'forget-me-not': 'Sky Forget-Me-Not',
      'calendula': 'Sunset Calendula',
      'cornflower': 'Blue Cornflower',
      'anemone': 'French Anemone'
    };
    return names[key] || 'Wild Botanical';
  },

  // --------------------------------------------------------------------------
  // MEADOW PANORAMA ARTWORK (Anchored at soil line 0, 215)
  // --------------------------------------------------------------------------
  renderMeadowPlant(speciesKey, stage, ctx = {}) {
    const { isToday = false, isFuture = false, day = 1, specimenName = '' } = ctx;

    // STAGE 0: RESTING SEED
    if (stage === 0) {
      const whisperText = isFuture ? 'Seed' : 'Resting';
      const whisperColor = isToday ? 'var(--chalk-amber)' : 'var(--text-muted)';
      const whisperOpacity = isToday ? '0.9' : (isFuture ? '0.5' : '0.75');
      const moundStroke = isFuture ? 'stroke-dasharray="3,2" opacity="0.65"' : '';
      const seedOpacity = isFuture ? '0.45' : '0.7';

      let seedDetail = `<ellipse class="plant-seed" cx="0" cy="217" rx="4" ry="2.5" fill="#FAF0CA" opacity="${seedOpacity}" stroke="var(--chalk-amber)" stroke-width="1" />`;
      if (speciesKey === 'sunflower') {
        seedDetail = `<ellipse class="plant-seed" cx="0" cy="217" rx="5" ry="3" fill="#2E1D0E" stroke="#FAF0CA" stroke-width="1.2" opacity="${seedOpacity}" />`;
      } else if (speciesKey === 'tulip') {
        seedDetail = `
          <path class="plant-seed" d="M -4 219 C -5 214 0 211 0 211 C 0 211 5 214 4 219 Z" fill="#D4A373" stroke="#FAF0CA" stroke-width="1" opacity="${seedOpacity}" />
          <path d="M 0 219 Q 0 224 -2 227" stroke="var(--chalk-amber)" stroke-width="1" fill="none" opacity="0.6" />
        `;
      }

      return `
        <path class="plant-soil-mound" d="M -22 215 Q 0 206 22 215 Z" fill="var(--bg-surface-elevated)" stroke="var(--text-primary)" stroke-width="1.8" ${moundStroke} />
        ${seedDetail}
        <circle cx="-7" cy="218" r="0.9" fill="var(--border-chalk)" opacity="0.5" />
        <circle cx="8" cy="216" r="0.9" fill="var(--border-chalk)" opacity="0.5" />
        <text class="plant-stage-label" x="0" y="196" font-family="'Kalam', cursive" font-size="10" fill="${whisperColor}" text-anchor="middle" opacity="${whisperOpacity}">${whisperText}</text>
      `;
    }

    // STAGE 1: THE SPROUT
    if (stage === 1) {
      let leafMorph = `
        <g class="plant-leaves">
          <path d="M 0 178 C -14 173 -22 179 -19 187 C -14 191 -6 186 0 180 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2" />
          <path d="M 0 179 Q -9 182 -16 186" stroke="var(--chalk-mint)" stroke-width="1" fill="none" opacity="0.8" />
          <path d="M 0 178 C 14 173 22 179 19 187 C 14 191 6 186 0 180 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2" />
          <path d="M 0 179 Q 9 182 16 186" stroke="var(--chalk-mint)" stroke-width="1" fill="none" opacity="0.8" />
        </g>
      `;
      let stemStroke = `stroke-width="2.6"`;
      if (speciesKey === 'sunflower') {
        stemStroke = `stroke-width="3.4"`;
      } else if (speciesKey === 'lavender') {
        leafMorph = `
          <g class="plant-leaves">
            <line x1="0" y1="182" x2="-14" y2="175" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="0" y1="182" x2="14" y2="175" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
          </g>
        `;
      } else if (speciesKey === 'iris') {
        leafMorph = `
          <g class="plant-leaves">
            <path d="M -3 215 L -6 175 L 0 170 L 6 175 L 3 215 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          </g>
        `;
      }

      return `
        <path class="plant-soil-mound" d="M -20 215 Q 0 207 20 215 Z" fill="var(--bg-surface-elevated)" stroke="var(--text-primary)" stroke-width="1.8" />
        <path class="plant-stem" d="M 0 215 Q 1 195 0 178" stroke="var(--chalk-mint)" ${stemStroke} stroke-linecap="round" fill="none" />
        ${leafMorph}
        <text class="plant-stage-label" x="0" y="166" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-mint)" text-anchor="middle">Sprout</text>
      `;
    }

    // STAGE 2: BRANCHING STEM
    if (stage === 2) {
      let stemPath = `M 0 215 Q -2 180 0 145`;
      let stemWidth = `2.6`;
      let leaves = `
        <g class="plant-leaves">
          <path d="M -1 195 C -19 190 -28 197 -24 205 C -16 208 -7 202 -1 196 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 0 188 C 19 183 28 189 25 197 C 18 201 7 195 0 190 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M -1 170 C -17 163 -25 169 -21 177 C -14 180 -6 175 -1 171 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 0 163 C 16 156 23 162 21 170 C 15 173 6 168 0 164 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
        </g>
      `;

      if (speciesKey === 'sunflower') {
        stemPath = `M 0 215 Q -2 170 0 135`;
        stemWidth = `3.6`;
        leaves = `
          <g class="plant-leaves">
            <path d="M -1 185 C -28 172 -34 192 -20 202 C -8 204 -3 194 -1 187 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2" />
            <path d="M 1 165 C 28 152 34 172 20 182 C 8 184 3 174 1 167 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2" />
          </g>
        `;
      } else if (speciesKey === 'lavender') {
        stemPath = `M 0 215 L 0 138`;
        leaves = `
          <g class="plant-leaves">
            <line x1="0" y1="195" x2="-18" y2="188" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="0" y1="195" x2="18" y2="188" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="0" y1="175" x2="-20" y2="167" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="0" y1="175" x2="20" y2="167" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="0" y1="155" x2="-16" y2="148" stroke="var(--chalk-mint)" stroke-width="1.8" stroke-linecap="round" />
            <line x1="0" y1="155" x2="16" y2="148" stroke="var(--chalk-mint)" stroke-width="1.8" stroke-linecap="round" />
          </g>
        `;
      } else if (speciesKey === 'tulip') {
        stemPath = `M 0 215 Q -1 180 0 148`;
        leaves = `
          <g class="plant-leaves">
            <path d="M -2 215 C -26 195 -22 155 -12 142 C -15 165 -10 190 -2 210 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="2" />
            <path d="M 2 215 C 26 195 22 155 12 142 C 15 165 10 190 2 210 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="2" />
          </g>
        `;
      } else if (speciesKey === 'iris') {
        stemPath = `M 0 215 L 0 135`;
        leaves = `
          <g class="plant-leaves">
            <path d="M -4 215 L -14 130 L -8 150 L -2 215 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <path d="M 4 215 L 14 125 L 8 145 L 2 215 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          </g>
        `;
      } else if (speciesKey === 'bluebell') {
        stemPath = `M 0 215 Q -3 175 0 145 Q 3 130 -6 128`;
        leaves = `
          <g class="plant-leaves">
            <path d="M -4 215 C -24 200 -18 175 -8 165 C -12 185 -6 200 -2 215" stroke="var(--chalk-mint)" stroke-width="2" fill="none" />
            <path d="M 4 215 C 24 200 18 175 8 165 C 12 185 6 200 2 215" stroke="var(--chalk-mint)" stroke-width="2" fill="none" />
          </g>
        `;
      } else if (speciesKey === 'cosmos') {
        leaves = `
          <g class="plant-leaves">
            <path d="M 0 185 Q -12 180 -22 172 M -12 180 L -18 168 M -16 176 L -20 184" stroke="var(--chalk-mint)" stroke-width="1.4" fill="none" />
            <path d="M 0 168 Q 12 163 22 155 M 12 163 L 18 151 M 16 159 L 20 167" stroke="var(--chalk-mint)" stroke-width="1.4" fill="none" />
          </g>
        `;
      }

      return `
        <path class="plant-soil-mound" d="M -18 215 Q 0 209 18 215 Z" fill="var(--bg-surface-elevated)" stroke="var(--text-primary)" stroke-width="1.8" />
        <path class="plant-stem" d="${stemPath}" stroke="var(--chalk-mint)" stroke-width="${stemWidth}" stroke-linecap="round" fill="none" />
        ${leaves}
        <text class="plant-stage-label" x="0" y="122" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-mint)" text-anchor="middle">Branching</text>
      `;
    }

    // STAGE 3: SWELLING BUD
    if (stage === 3) {
      let budPath = '';
      let stemD = `M 0 215 Q -2 165 0 118`;
      let stemWidth = `2.6`;
      let leaves = `
        <g class="plant-leaves">
          <path d="M -1 185 C -19 178 -27 188 -19 195 C -11 196 -5 190 -1 186 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 0 172 C 19 165 25 174 19 182 C 11 183 5 177 0 173 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
        </g>
      `;

      if (speciesKey === 'lavender') {
        stemD = `M 0 215 L 0 95`;
        budPath = `
          <g class="plant-bud">
            <ellipse cx="0" cy="90" rx="3.5" ry="4.5" fill="rgba(179, 136, 255, 0.5)" stroke="#B388FF" stroke-width="1.6" />
            <ellipse cx="0" cy="80" rx="3.2" ry="4.5" fill="rgba(179, 136, 255, 0.5)" stroke="#B388FF" stroke-width="1.6" />
            <ellipse cx="0" cy="71" rx="2.8" ry="4" fill="rgba(179, 136, 255, 0.5)" stroke="#B388FF" stroke-width="1.6" />
            <path d="M 0 65 L 0 58" stroke="#B388FF" stroke-width="2" stroke-linecap="round" />
          </g>
        `;
      } else if (speciesKey === 'sunflower') {
        stemD = `M 0 215 Q -2 150 0 88`;
        stemWidth = `3.6`;
        leaves = `
          <g class="plant-leaves">
            <path d="M -2 170 C -32 155 -40 176 -26 190 C -12 192 -5 180 -2 172 Z" fill="rgba(6, 214, 160, 0.24)" stroke="var(--chalk-mint)" stroke-width="2.2" />
            <path d="M 1 140 C 32 125 40 146 26 160 C 12 162 5 150 1 142 Z" fill="rgba(6, 214, 160, 0.24)" stroke="var(--chalk-mint)" stroke-width="2.2" />
          </g>
        `;
        budPath = `
          <g class="plant-bud">
            <circle cx="0" cy="84" r="10" fill="rgba(255, 209, 102, 0.3)" stroke="#FFD166" stroke-width="2" />
            <path d="M -10 84 Q -16 76 -8 72 M 10 84 Q 16 76 8 72 M -6 94 Q -10 102 0 98 M 6 94 Q 10 102 0 98" stroke="var(--chalk-mint)" stroke-width="2" fill="none" />
            <circle cx="0" cy="84" r="5" fill="#3D1E06" stroke="#FFD166" stroke-width="1" />
          </g>
        `;
      } else if (speciesKey === 'tulip') {
        stemD = `M 0 215 Q -1 165 0 112`;
        leaves = `
          <g class="plant-leaves">
            <path d="M -2 215 C -28 190 -24 148 -14 135 C -16 160 -10 185 -2 210 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="2" />
            <path d="M 2 215 C 28 190 24 148 14 135 C 16 160 10 185 2 210 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="2" />
          </g>
        `;
        budPath = `
          <g class="plant-bud">
            <path d="M -6 112 C -12 98 -4 84 0 80 C 4 84 12 98 6 112 Z" fill="rgba(255, 92, 138, 0.4)" stroke="#FF5C8A" stroke-width="2.2" />
            <path d="M 0 112 Q 0 96 0 80" stroke="#FAF0CA" stroke-width="1.2" fill="none" />
          </g>
        `;
      } else if (speciesKey === 'bluebell') {
        stemD = `M 0 215 Q -4 160 0 125 Q 4 100 -12 95`;
        budPath = `
          <g class="plant-bud">
            <ellipse cx="-10" cy="102" rx="4" ry="6" transform="rotate(25 -10 102)" fill="rgba(67, 97, 238, 0.4)" stroke="#4361EE" stroke-width="2" />
            <ellipse cx="-3" cy="112" rx="3.5" ry="5.5" transform="rotate(20 -3 112)" fill="rgba(67, 97, 238, 0.4)" stroke="#4361EE" stroke-width="2" />
          </g>
        `;
      } else if (speciesKey === 'iris') {
        stemD = `M 0 215 L 0 108`;
        leaves = `
          <g class="plant-leaves">
            <path d="M -5 215 L -16 115 L -9 140 L -2 215 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <path d="M 5 215 L 16 110 L 9 135 L 2 215 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          </g>
        `;
        budPath = `
          <g class="plant-bud">
            <path d="M -5 108 C -8 92 0 76 0 72 C 0 76 8 92 5 108 Z" fill="rgba(114, 9, 183, 0.4)" stroke="#7209B7" stroke-width="2" />
            <path d="M -4 108 Q -8 116 0 114 Q 8 116 4 108" stroke="var(--chalk-mint)" stroke-width="1.8" fill="none" />
          </g>
        `;
      } else if (speciesKey === 'poppy') {
        stemD = `M 0 215 Q 4 160 0 118 Q -4 105 -12 106`;
        budPath = `
          <g class="plant-bud">
            <ellipse cx="-12" cy="112" rx="6" ry="7.5" fill="rgba(230, 57, 70, 0.35)" stroke="#E63946" stroke-width="2.2" />
            <path d="M -12 105 Q -14 112 -12 119" stroke="#FAF0CA" stroke-width="1.2" fill="none" />
            <path d="M -16 108 Q -10 106 -8 108" stroke="var(--chalk-mint)" stroke-width="1.8" fill="none" />
          </g>
        `;
      } else {
        budPath = `
          <g class="plant-bud">
            <path d="M -3 122 C -10 116 -9 107 -1 112" stroke="var(--chalk-mint)" stroke-width="2" fill="none" />
            <path d="M 3 122 C 10 116 9 107 1 112" stroke="var(--chalk-mint)" stroke-width="2" fill="none" />
            <path d="M 0 116 C -9 104 -5 92 0 86 C 5 92 9 104 0 116 Z" fill="rgba(239, 71, 111, 0.35)" stroke="#EF476F" stroke-width="2.2" />
            <path d="M 0 108 Q 0 92 0 88" stroke="#FAF0CA" stroke-width="1" fill="none" opacity="0.8" />
          </g>
        `;
      }

      return `
        <path class="plant-soil-mound" d="M -18 215 Q 0 209 18 215 Z" fill="var(--bg-surface-elevated)" stroke="var(--text-primary)" stroke-width="1.8" />
        <path class="plant-stem" d="${stemD}" stroke="var(--chalk-mint)" stroke-width="${stemWidth}" stroke-linecap="round" fill="none" />
        ${leaves}
        ${budPath}
        <text class="plant-stage-label" x="0" y="78" font-family="'Kalam', cursive" font-size="10" fill="#EF476F" text-anchor="middle">Budding</text>
      `;
    }

    // STAGE 4: FULL BLOOM
    return this.renderMeadowFullBloom(speciesKey);
  },

  renderMeadowFullBloom(speciesKey) {
    switch (speciesKey) {
      // 1. DAISY: Round bright yellow centre surrounded by 16 long narrow white petals
      case 'daisy': {
        const petals = [];
        for (let i = 0; i < 16; i++) {
          const angle = i * 22.5;
          petals.push(`<ellipse cx="0" cy="-18" rx="3.6" ry="10" transform="rotate(${angle} 0 0)" fill="#FFFFFF" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />`);
        }
        return `
          <path class="plant-stem" d="M 0 215 Q -2 155 0 102" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M -1 175 C -18 168 -24 178 -16 185 C -9 186 -5 180 -1 176 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <path d="M 0 155 C 18 148 24 158 16 165 C 9 166 5 160 0 156 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          </g>
          <g transform="translate(0, 96)">
            <g class="plant-petals">
              ${petals.join('\n')}
            </g>
            <g class="plant-bloom-core">
              <circle cx="0" cy="0" r="9" fill="#FFD166" stroke="#FAF0CA" stroke-width="2" />
              <circle cx="0" cy="0" r="5.5" fill="none" stroke="#B78103" stroke-width="1.2" stroke-dasharray="2,1.5" />
            </g>
          </g>
          <g class="plant-sparkles">
            <text x="-24" y="82" font-family="'Kalam', cursive" font-size="12" fill="#FAF0CA">✦</text>
            <text x="22" y="86" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)">✦</text>
          </g>
          <text class="plant-stage-label" x="0" y="62" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)" text-anchor="middle">Bloomed</text>
        `;
      }

      // 2. LAVENDER: Tall narrow flower spike made of tiered small purple blossoms
      case 'lavender': {
        const tiers = [
          { y: 52, rx: 5, ry: 4, c: '#B388FF' },
          { y: 62, rx: 7.5, ry: 5, c: '#9D4EDD' },
          { y: 73, rx: 9, ry: 5.5, c: '#7B2CBF' },
          { y: 85, rx: 9.5, ry: 6, c: '#9D4EDD' },
          { y: 98, rx: 9, ry: 6, c: '#7B2CBF' },
          { y: 112, rx: 8, ry: 5.5, c: '#5A189A' }
        ];
        const spikeWhorls = tiers.map(t => `
          <g transform="translate(0, ${t.y})">
            <ellipse cx="-5" cy="0" rx="${t.rx * 0.5}" ry="${t.ry * 0.7}" fill="${t.c}" stroke="#FAF0CA" stroke-width="0.8" opacity="0.95" />
            <ellipse cx="5" cy="0" rx="${t.rx * 0.5}" ry="${t.ry * 0.7}" fill="${t.c}" stroke="#FAF0CA" stroke-width="0.8" opacity="0.95" />
            <ellipse cx="0" cy="-2" rx="${t.rx * 0.6}" ry="${t.ry * 0.7}" fill="${t.c}" stroke="#FAF0CA" stroke-width="0.9" opacity="0.95" />
            <circle cx="0" cy="-1" r="1.5" fill="#FAF0CA" opacity="0.8" />
          </g>
        `).join('\n');

        return `
          <path class="plant-stem" d="M 0 215 L 0 52" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <line x1="0" y1="185" x2="-18" y2="175" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="0" y1="185" x2="18" y2="175" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="0" y1="165" x2="-22" y2="154" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="0" y1="165" x2="22" y2="154" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="0" y1="145" x2="-18" y2="136" stroke="var(--chalk-mint)" stroke-width="1.8" stroke-linecap="round" />
            <line x1="0" y1="145" x2="18" y2="136" stroke="var(--chalk-mint)" stroke-width="1.8" stroke-linecap="round" />
            <line x1="0" y1="128" x2="-14" y2="120" stroke="var(--chalk-mint)" stroke-width="1.6" stroke-linecap="round" />
            <line x1="0" y1="128" x2="14" y2="120" stroke="var(--chalk-mint)" stroke-width="1.6" stroke-linecap="round" />
          </g>
          <g class="plant-petals">
            ${spikeWhorls}
          </g>
          <g class="plant-bloom-core">
            <path d="M 0 48 L 0 42" stroke="#FAF0CA" stroke-width="1.8" stroke-linecap="round" />
            <circle cx="0" cy="42" r="2.2" fill="#FAF0CA" />
          </g>
          <g class="plant-sparkles">
            <text x="-18" y="44" font-family="'Kalam', cursive" font-size="12" fill="#B388FF">✦</text>
            <text x="16" y="58" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA">✦</text>
          </g>
          <text class="plant-stage-label" x="0" y="28" font-family="'Kalam', cursive" font-size="10" fill="#B388FF" text-anchor="middle">Bloomed</text>
        `;
      }

      // 3. POPPY: Four broad, delicate papery petals with a dark centre on nodding graceful stem
      case 'poppy': {
        return `
          <path class="plant-stem" d="M 0 215 Q 5 155 0 92" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 0 175 Q -14 165 -22 170 Q -18 160 -26 155 Q -14 156 0 165" stroke="var(--chalk-mint)" stroke-width="1.8" fill="rgba(6, 214, 160, 0.2)" />
            <path d="M 0 150 Q 14 140 22 145 Q 18 135 26 130 Q 14 132 0 142" stroke="var(--chalk-mint)" stroke-width="1.8" fill="rgba(6, 214, 160, 0.2)" />
          </g>
          <g transform="translate(0, 88)">
            <g class="plant-petals">
              <path d="M 0 0 C -22 -6 -28 -28 0 -26 C 28 -28 22 -6 0 0 Z" fill="#E63946" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M 0 0 C -32 -10 -34 16 -12 20 C -2 14 0 6 0 0 Z" fill="#D90429" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M 0 0 C 32 -10 34 16 12 20 C 2 14 0 6 0 0 Z" fill="#D90429" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M 0 0 C -18 18 -10 26 0 26 C 10 26 18 18 0 0 Z" fill="#FF4D6D" opacity="0.92" stroke="#FAF0CA" stroke-width="1.2" />
            </g>
            <g class="plant-bloom-core">
              <circle cx="0" cy="0" r="8" fill="#1D1E2C" stroke="#FAF0CA" stroke-width="1.4" />
              <circle cx="0" cy="0" r="12" fill="none" stroke="#FAF0CA" stroke-width="1.2" stroke-dasharray="2,2" opacity="0.85" />
              <path d="M -4 -4 L 4 4 M -4 4 L 4 -4 M 0 -5 L 0 5 M -5 0 L 5 0" stroke="#FAF0CA" stroke-width="1" />
            </g>
          </g>
          <g class="plant-sparkles">
            <text x="-26" y="68" font-family="'Kalam', cursive" font-size="12" fill="#FF4D6D">✦</text>
            <text x="24" y="74" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)">✦</text>
          </g>
          <text class="plant-stage-label" x="0" y="48" font-family="'Kalam', cursive" font-size="10" fill="#E63946" text-anchor="middle">Bloomed</text>
        `;
      }

      // 4. TULIP: Cup-shaped flower with upright petals and broad smooth clasping leaves
      case 'tulip': {
        return `
          <path class="plant-stem" d="M 0 215 Q -1 160 0 96" stroke="var(--chalk-mint)" stroke-width="3" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M -2 215 C -34 185 -26 130 -14 112 C -18 145 -10 180 -2 210 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2.2" />
            <path d="M 2 215 C 34 185 26 130 14 112 C 18 145 10 180 2 210 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2.2" />
          </g>
          <g transform="translate(0, 92)">
            <g class="plant-petals">
              <path d="M -16 6 C -22 -14 -12 -34 0 -36 C 12 -34 22 -14 16 6 Z" fill="#F72585" opacity="0.9" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M -16 6 C -20 -10 -16 -28 -6 -32 C -2 -14 -4 0 0 6 Z" fill="#FF5C8A" opacity="0.95" stroke="#FAF0CA" stroke-width="1.4" />
              <path d="M 16 6 C 20 -10 16 -28 6 -32 C 2 -14 4 0 0 6 Z" fill="#FF5C8A" opacity="0.95" stroke="#FAF0CA" stroke-width="1.4" />
              <path d="M -9 6 C -10 -12 -5 -30 0 -34 C 5 -30 10 -12 9 6 Z" fill="#FF85A1" opacity="0.95" stroke="#FAF0CA" stroke-width="1.4" />
            </g>
            <g class="plant-bloom-core">
              <path d="M 0 0 L 0 -16" stroke="#FAF0CA" stroke-width="1.6" stroke-linecap="round" />
              <circle cx="0" cy="-16" r="2" fill="var(--chalk-amber)" />
            </g>
          </g>
          <g class="plant-sparkles">
            <text x="-22" y="60" font-family="'Kalam', cursive" font-size="12" fill="#FF85A1">✦</text>
            <text x="20" y="64" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA">✦</text>
          </g>
          <text class="plant-stage-label" x="0" y="44" font-family="'Kalam', cursive" font-size="10" fill="#FF5C8A" text-anchor="middle">Bloomed</text>
        `;
      }

      // 5. COSMOS: Wide, slightly separated petals with 3-notched tips & feathery dill leaves
      case 'cosmos': {
        const petals = [];
        for (let i = 0; i < 8; i++) {
          const angle = i * 45;
          petals.push(`
            <g transform="rotate(${angle} 0 0)">
              <path d="M -5 -6 C -8 -16 -6 -24 0 -26 C 6 -24 8 -16 5 -6 Z" fill="#E07A5F" opacity="0.95" stroke="#FAF0CA" stroke-width="1" />
              <path d="M -3 -25 L -2 -28 L 0 -26 L 2 -28 L 3 -25" stroke="#FAF0CA" stroke-width="1" fill="none" />
            </g>
          `);
        }
        return `
          <path class="plant-stem" d="M 0 215 Q -2 155 0 98" stroke="var(--chalk-mint)" stroke-width="2.4" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 0 180 Q -14 175 -24 165 M -12 175 L -18 160 M -18 170 L -22 180" stroke="var(--chalk-mint)" stroke-width="1.5" fill="none" />
            <path d="M 0 160 Q 14 155 24 145 M 12 155 L 18 140 M 18 150 L 22 160" stroke="var(--chalk-mint)" stroke-width="1.5" fill="none" />
          </g>
          <g transform="translate(0, 94)">
            <g class="plant-petals">
              ${petals.join('\n')}
            </g>
            <g class="plant-bloom-core">
              <circle cx="0" cy="0" r="7.5" fill="#4A2E1B" stroke="#FAF0CA" stroke-width="1.4" />
              <circle cx="0" cy="0" r="4" fill="var(--chalk-amber)" stroke="#FAF0CA" stroke-width="0.8" />
            </g>
          </g>
          <g class="plant-sparkles">
            <text x="-24" y="74" font-family="'Kalam', cursive" font-size="12" fill="var(--chalk-amber)">✦</text>
            <text x="22" y="78" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA">✦</text>
          </g>
          <text class="plant-stage-label" x="0" y="54" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)" text-anchor="middle">Bloomed</text>
        `;
      }

      // 6. SUNFLOWER: Massive dark centre surrounded by 24 golden ray petals, thick stem, heart leaves
      case 'sunflower': {
        const petals = [];
        for (let i = 0; i < 24; i++) {
          const angle = i * 15;
          petals.push(`<ellipse cx="0" cy="-24" rx="4.8" ry="11" transform="rotate(${angle} 0 0)" fill="#FFD166" opacity="0.95" stroke="#FFB703" stroke-width="1.2" />`);
        }
        return `
          <path class="plant-stem" d="M 0 215 Q -3 130 0 56" stroke="var(--chalk-mint)" stroke-width="4.2" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M -3 172 C -38 155 -48 180 -30 196 C -14 198 -6 184 -3 174 Z" fill="rgba(6, 214, 160, 0.26)" stroke="var(--chalk-mint)" stroke-width="2.4" />
            <path d="M -3 174 Q -22 178 -30 194" stroke="var(--chalk-mint)" stroke-width="1.2" fill="none" />
            <path d="M 2 136 C 38 118 48 142 30 158 C 14 160 6 146 2 138 Z" fill="rgba(6, 214, 160, 0.26)" stroke="var(--chalk-mint)" stroke-width="2.4" />
            <path d="M 2 138 Q 22 142 30 156" stroke="var(--chalk-mint)" stroke-width="1.2" fill="none" />
          </g>
          <g transform="translate(0, 52)">
            <g class="plant-petals">
              ${petals.join('\n')}
            </g>
            <g class="plant-bloom-core">
              <circle cx="0" cy="0" r="14.5" fill="#2E1D0E" stroke="#FFD166" stroke-width="2.4" />
              <circle cx="0" cy="0" r="10.5" fill="none" stroke="#FAF0CA" stroke-width="1.2" stroke-dasharray="2,2" opacity="0.8" />
              <circle cx="0" cy="0" r="6.5" fill="none" stroke="#FFD166" stroke-width="1.2" stroke-dasharray="2,2" opacity="0.8" />
              <circle cx="0" cy="0" r="2.8" fill="#FAF0CA" />
            </g>
          </g>
          <g class="plant-sparkles">
            <text x="-38" y="44" font-family="'Kalam', cursive" font-size="14" fill="var(--chalk-amber)">✦</text>
            <text x="36" y="48" font-family="'Kalam', cursive" font-size="12" fill="var(--chalk-amber)">✦</text>
            <text x="20" y="24" font-family="'Kalam', cursive" font-size="14" fill="#FAF0CA">✦</text>
          </g>
          <text class="plant-stage-label" x="0" y="18" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)" text-anchor="middle">Bloomed</text>
        `;
      }

      // 7. BLUEBELL: Several downward-facing bell-shaped flowers along a curved nodding stem
      case 'bluebell': {
        return `
          <path class="plant-stem" d="M 0 215 Q -4 160 0 125 Q 4 92 -16 88" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M -4 215 C -26 195 -20 165 -10 150 C -14 175 -8 198 -2 215" stroke="var(--chalk-mint)" stroke-width="2.2" fill="none" />
            <path d="M 4 215 C 26 195 20 165 10 150 C 14 175 8 198 2 215" stroke="var(--chalk-mint)" stroke-width="2.2" fill="none" />
          </g>
          <g class="plant-petals">
            <g transform="translate(-16, 88) rotate(30)">
              <path d="M 0 0 C -6 6 -8 16 -10 20 C -4 18 0 18 2 20 C 0 16 -2 6 0 0 Z" fill="#4361EE" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M -10 20 Q -6 17 -4 21 Q -2 18 2 20" stroke="#FAF0CA" stroke-width="1.2" fill="none" />
            </g>
            <g transform="translate(-8, 98) rotate(22)">
              <path d="M 0 0 C -7 8 -10 18 -12 24 C -5 22 0 22 3 24 C 0 18 -3 8 0 0 Z" fill="#3A0CA3" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M -12 24 Q -7 20 -4 25 Q -1 21 3 24" stroke="#FAF0CA" stroke-width="1.2" fill="none" />
            </g>
            <g transform="translate(0, 114) rotate(15)">
              <path d="M 0 0 C -8 8 -11 20 -13 26 C -6 24 0 24 3 26 C 0 20 -4 8 0 0 Z" fill="#4361EE" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M -13 26 Q -8 22 -4 27 Q 0 23 3 26" stroke="#FAF0CA" stroke-width="1.2" fill="none" />
            </g>
            <g transform="translate(2, 132) rotate(10)">
              <path d="M 0 0 C -7 7 -10 18 -11 23 C -5 21 0 21 3 23 C 0 18 -3 7 0 0 Z" fill="#4CC9F0" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M -11 23 Q -6 20 -3 24 Q 0 20 3 23" stroke="#FAF0CA" stroke-width="1.2" fill="none" />
            </g>
          </g>
          <g class="plant-bloom-core">
            <circle cx="-16" cy="88" r="2.5" fill="#FAF0CA" />
          </g>
          <g class="plant-sparkles">
            <text x="-26" y="74" font-family="'Kalam', cursive" font-size="12" fill="#4CC9F0">✦</text>
            <text x="18" y="94" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA">✦</text>
          </g>
          <text class="plant-stage-label" x="0" y="66" font-family="'Kalam', cursive" font-size="10" fill="#4361EE" text-anchor="middle">Bloomed</text>
        `;
      }

      // 8. IRIS: Large layered petals with distinct upright standards & drooping falls with golden beard
      case 'iris': {
        return `
          <path class="plant-stem" d="M 0 215 L 0 85" stroke="var(--chalk-mint)" stroke-width="2.8" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M -6 215 L -20 100 L -12 125 L -2 215 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="2" />
            <path d="M 6 215 L 20 95 L 12 120 L 2 215 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="2" />
          </g>
          <g transform="translate(0, 80)">
            <g class="plant-petals">
              <path d="M 0 -4 C -8 -16 -12 -34 0 -40 C 12 -34 8 -16 0 -4 Z" fill="#9D4EDD" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M -3 -4 C -18 -14 -24 -28 -12 -34 C -4 -24 0 -12 -3 -4 Z" fill="#7209B7" opacity="0.9" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M 3 -4 C 18 -14 24 -28 12 -34 C 4 -24 0 -12 3 -4 Z" fill="#7209B7" opacity="0.9" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M 0 0 C -14 6 -24 24 -16 32 C -8 26 -2 14 0 0 Z" fill="#560BAD" opacity="0.95" stroke="#FAF0CA" stroke-width="1.4" />
              <path d="M 0 0 C 14 6 24 24 16 32 C 8 26 2 14 0 0 Z" fill="#560BAD" opacity="0.95" stroke="#FAF0CA" stroke-width="1.4" />
              <path d="M 0 0 C -6 12 -8 30 0 36 C 8 30 6 12 0 0 Z" fill="#3F37C9" opacity="0.95" stroke="#FAF0CA" stroke-width="1.4" />
            </g>
            <g class="plant-bloom-core">
              <path d="M 0 4 L 0 20" stroke="#FFD166" stroke-width="2.6" stroke-linecap="round" />
              <path d="M -6 6 L -10 18" stroke="#FFD166" stroke-width="2" stroke-linecap="round" />
              <path d="M 6 6 L 10 18" stroke="#FFD166" stroke-width="2" stroke-linecap="round" />
              <circle cx="0" cy="0" r="4" fill="#FAF0CA" />
            </g>
          </g>
          <g class="plant-sparkles">
            <text x="-26" y="44" font-family="'Kalam', cursive" font-size="13" fill="#B388FF">✦</text>
            <text x="24" y="50" font-family="'Kalam', cursive" font-size="11" fill="var(--chalk-amber)">✦</text>
          </g>
          <text class="plant-stage-label" x="0" y="28" font-family="'Kalam', cursive" font-size="10" fill="#9D4EDD" text-anchor="middle">Bloomed</text>
        `;
      }

      // 9. FORGET-ME-NOT: Multi-floret spray of tiny 5-petalled sky-blue flowers with yellow eyes
      case 'forget-me-not': {
        const florets = [
          { x: 0, y: 82, r: 8.5 },
          { x: -16, y: 96, r: 7.5 },
          { x: 16, y: 92, r: 7.5 },
          { x: -12, y: 114, r: 6.8 },
          { x: 14, y: 110, r: 6.8 },
          { x: 0, y: 126, r: 6.5 }
        ];

        const floretSVG = florets.map(f => {
          const petals = [];
          for (let i = 0; i < 5; i++) {
            const angle = i * 72;
            petals.push(`<ellipse cx="0" cy="-${f.r * 0.7}" rx="${f.r * 0.42}" ry="${f.r * 0.48}" transform="rotate(${angle} 0 0)" fill="#48CAE4" stroke="#FAF0CA" stroke-width="0.8" opacity="0.95" />`);
          }
          return `
            <g transform="translate(${f.x}, ${f.y})">
              ${petals.join('\n')}
              <circle cx="0" cy="0" r="${f.r * 0.28}" fill="#FFD166" stroke="#FAF0CA" stroke-width="0.8" />
              <circle cx="0" cy="0" r="${f.r * 0.12}" fill="#FFFFFF" />
            </g>
          `;
        }).join('\n');

        return `
          <path class="plant-stem" d="M 0 215 Q -1 165 0 82 M 0 135 Q -10 115 -16 96 M 0 130 Q 10 110 16 92 M -8 145 Q -12 125 -12 114 M 6 140 Q 12 122 14 110" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 0 185 Q -14 180 -20 174 M 0 170 Q 14 165 20 160" stroke="var(--chalk-mint)" stroke-width="1.8" fill="none" />
          </g>
          <g class="plant-petals">
            ${floretSVG}
          </g>
          <g class="plant-bloom-core">
            <circle cx="0" cy="82" r="1.5" fill="#FAF0CA" />
          </g>
          <g class="plant-sparkles">
            <text x="-26" y="74" font-family="'Kalam', cursive" font-size="12" fill="#48CAE4">✦</text>
            <text x="24" y="80" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)">✦</text>
          </g>
          <text class="plant-stage-label" x="0" y="60" font-family="'Kalam', cursive" font-size="10" fill="#48CAE4" text-anchor="middle">Bloomed</text>
        `;
      }

      // 10. CALENDULA: Multiple dense layers of narrow orange petals
      case 'calendula': {
        const outerPetals = [];
        for (let i = 0; i < 18; i++) {
          const angle = i * 20;
          outerPetals.push(`<ellipse cx="0" cy="-18" rx="3.4" ry="9" transform="rotate(${angle} 0 0)" fill="#F77F00" opacity="0.95" stroke="#FAF0CA" stroke-width="0.8" />`);
        }
        const innerPetals = [];
        for (let i = 0; i < 14; i++) {
          const angle = i * 25.7 + 10;
          innerPetals.push(`<ellipse cx="0" cy="-12" rx="2.8" ry="6.5" transform="rotate(${angle} 0 0)" fill="#FCBF49" opacity="0.98" stroke="#FAF0CA" stroke-width="0.6" />`);
        }
        return `
          <path class="plant-stem" d="M 0 215 Q -2 155 0 96" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 0 175 C -18 168 -25 178 -18 186 C -10 188 -4 182 0 176 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <path d="M 0 152 C 18 145 25 155 18 163 C 10 165 4 159 0 153 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          </g>
          <g transform="translate(0, 92)">
            <g class="plant-petals">
              ${outerPetals.join('\n')}
              ${innerPetals.join('\n')}
            </g>
            <g class="plant-bloom-core">
              <circle cx="0" cy="0" r="6.5" fill="#7F260F" stroke="#FAF0CA" stroke-width="1.2" />
              <circle cx="0" cy="0" r="3" fill="#D62828" />
            </g>
          </g>
          <g class="plant-sparkles">
            <text x="-24" y="74" font-family="'Kalam', cursive" font-size="12" fill="#FCBF49">✦</text>
            <text x="22" y="78" font-family="'Kalam', cursive" font-size="10" fill="#F77F00">✦</text>
          </g>
          <text class="plant-stage-label" x="0" y="56" font-family="'Kalam', cursive" font-size="10" fill="#F77F00" text-anchor="middle">Bloomed</text>
        `;
      }

      // 11. CORNFLOWER: Pointed fringed blue petals & scaly pinecone cup (involucre)
      case 'cornflower': {
        const florets = [];
        for (let i = 0; i < 12; i++) {
          const angle = i * 30;
          florets.push(`
            <g transform="rotate(${angle} 0 0)">
              <path d="M 0 0 L -4 -18 L -2 -24 L 0 -21 L 2 -24 L 4 -18 Z" fill="#0077B6" opacity="0.95" stroke="#FAF0CA" stroke-width="0.8" />
            </g>
          `);
        }
        return `
          <path class="plant-stem" d="M 0 215 Q -2 150 0 86" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <line x1="0" y1="180" x2="-22" y2="168" stroke="var(--chalk-mint)" stroke-width="1.8" stroke-linecap="round" />
            <line x1="0" y1="155" x2="22" y2="144" stroke="var(--chalk-mint)" stroke-width="1.8" stroke-linecap="round" />
          </g>
          <g transform="translate(0, 80)">
            <path d="M -8 10 C -10 2 0 -2 0 -2 C 0 -2 10 2 8 10 C 6 16 -6 16 -8 10 Z" fill="#2B4C3F" stroke="#FAF0CA" stroke-width="1.2" />
            <path d="M -6 4 L 6 4 M -5 8 L 5 8 M -3 12 L 3 12" stroke="#FAF0CA" stroke-width="0.8" opacity="0.75" />
            <g class="plant-petals">
              ${florets.join('\n')}
            </g>
            <g class="plant-bloom-core">
              <circle cx="0" cy="0" r="6" fill="#1D3557" stroke="#FAF0CA" stroke-width="1.2" />
              <circle cx="0" cy="0" r="3" fill="#48CAE4" />
            </g>
          </g>
          <g class="plant-sparkles">
            <text x="-24" y="60" font-family="'Kalam', cursive" font-size="12" fill="#48CAE4">✦</text>
            <text x="22" y="66" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA">✦</text>
          </g>
          <text class="plant-stage-label" x="0" y="44" font-family="'Kalam', cursive" font-size="10" fill="#0077B6" text-anchor="middle">Bloomed</text>
        `;
      }

      // 12. ANEMONE: Broad petals surrounding contrasting dark centre with leafy collar
      case 'anemone': {
        const petals = [];
        for (let i = 0; i < 6; i++) {
          const angle = i * 60;
          petals.push(`<ellipse cx="0" cy="-16" rx="10" ry="13" transform="rotate(${angle} 0 0)" fill="#F8F9FA" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />`);
        }
        return `
          <path class="plant-stem" d="M 0 215 Q -2 155 0 94" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M -1 180 C -18 174 -24 182 -18 190 C -11 191 -5 186 -1 181 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <path d="M 0 160 C 18 154 24 162 18 170 C 11 171 5 166 0 161 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          </g>
          <g transform="translate(0, 102)">
            <path d="M 0 0 L -12 6 L -6 2 L -14 -2 L -6 -4 L 0 0" stroke="var(--chalk-mint)" stroke-width="1.6" fill="rgba(6, 214, 160, 0.25)" />
            <path d="M 0 0 L 12 6 L 6 2 L 14 -2 L 6 -4 L 0 0" stroke="var(--chalk-mint)" stroke-width="1.6" fill="rgba(6, 214, 160, 0.25)" />
          </g>
          <g transform="translate(0, 90)">
            <g class="plant-petals">
              ${petals.join('\n')}
            </g>
            <g class="plant-bloom-core">
              <circle cx="0" cy="0" r="12" fill="none" stroke="#FAF0CA" stroke-width="1" stroke-dasharray="2,1.5" />
              <circle cx="0" cy="0" r="8.5" fill="#14171A" stroke="#FAF0CA" stroke-width="1.5" />
              <circle cx="0" cy="0" r="3" fill="#3A0CA3" />
            </g>
          </g>
          <g class="plant-sparkles">
            <text x="-24" y="68" font-family="'Kalam', cursive" font-size="12" fill="#FAF0CA">✦</text>
            <text x="22" y="72" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)">✦</text>
          </g>
          <text class="plant-stage-label" x="0" y="52" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA" text-anchor="middle">Bloomed</text>
        `;
      }
    }
  },

  // --------------------------------------------------------------------------
  // STANDALONE ICON SVG (viewBox 0 0 100 100)
  // For Nature Journal grid, Day Modal, and Dashboard Today's Flower Preview
  // --------------------------------------------------------------------------
  renderIconSVG(speciesKey, stage, size = 36, animClass = '', day = 1) {
    let innerArtwork = '';

    // STAGE 0: Resting Seed
    if (stage === 0) {
      innerArtwork = `
        <path class="plant-soil-mound" d="M 15 78 Q 50 74 85 78" stroke="var(--border-chalk)" stroke-width="2" stroke-dasharray="4,3" fill="none" />
        <path class="plant-soil-mound" d="M 25 82 Q 50 79 75 82" stroke="var(--border-chalk)" stroke-width="1.2" stroke-dasharray="2,4" fill="none" opacity="0.6" />
        <circle cx="50" cy="56" r="14" class="plant-seed" fill="var(--bg-surface-elevated)" stroke="#FAF0CA" stroke-width="2.2" stroke-dasharray="20,1.5" />
        <circle cx="50" cy="56" r="9" fill="none" stroke="var(--chalk-amber)" stroke-width="1" stroke-dasharray="3,2" opacity="0.7" />
        <path d="M 50 70 Q 50 80 48 90" stroke="var(--chalk-amber)" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M 50 74 Q 40 78 35 84" stroke="var(--chalk-amber)" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <path d="M 50 76 Q 60 80 65 85" stroke="var(--chalk-amber)" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <path d="M 56 46 Q 68 36 64 30 Q 52 34 52 44 Z" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
      `;
    } else if (stage === 1) {
      // STAGE 1: The Sprout
      innerArtwork = `
        <path class="plant-soil-mound" d="M 15 88 Q 50 86 85 88" stroke="var(--border-chalk)" stroke-width="1.5" stroke-dasharray="4,3" fill="none" />
        <path class="plant-stem" d="M 50 88 Q 51 68 50 50" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
        <g class="plant-leaves">
          <path d="M 50 50 C 34 46 26 52 30 60 C 36 64 44 58 50 52 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2" />
          <path d="M 50 50 C 66 46 74 52 70 60 C 64 64 56 58 50 52 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2" />
        </g>
      `;
    } else if (stage === 2) {
      // STAGE 2: Branching Stem
      let stemPath = `M 50 92 Q 48 66 50 36`;
      let leaves = `
        <g class="plant-leaves">
          <path d="M 49 76 C 30 70 20 78 26 86 C 34 88 42 82 49 76 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 50 64 C 68 58 78 66 72 74 C 64 76 56 70 50 64 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 49 52 C 32 46 28 54 34 60 C 40 62 46 56 49 52 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
        </g>
      `;
      if (speciesKey === 'lavender') {
        leaves = `
          <g class="plant-leaves">
            <line x1="50" y1="78" x2="32" y2="72" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="50" y1="78" x2="68" y2="72" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="50" y1="62" x2="30" y2="56" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="50" y1="62" x2="70" y2="56" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
          </g>
        `;
      } else if (speciesKey === 'tulip') {
        leaves = `
          <g class="plant-leaves">
            <path d="M 48 92 C 22 76 26 48 36 38 C 34 58 40 76 48 90 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2" />
            <path d="M 52 92 C 78 76 74 48 64 38 C 66 58 60 76 52 90 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2" />
          </g>
        `;
      } else if (speciesKey === 'iris') {
        leaves = `
          <g class="plant-leaves">
            <path d="M 46 92 L 32 38 L 40 54 L 48 92 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <path d="M 54 92 L 68 34 L 60 50 L 52 92 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          </g>
        `;
      }
      innerArtwork = `
        <path class="plant-soil-mound" d="M 20 92 Q 50 90 80 92" stroke="var(--border-chalk)" stroke-width="1.5" fill="none" />
        <path class="plant-stem" d="${stemPath}" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
        ${leaves}
      `;
    } else if (stage === 3) {
      // STAGE 3: Swelling Bud
      let budGroup = `
        <g class="plant-bud" transform="translate(50, 32)">
          <path d="M -5 0 Q 0 -6 5 0 Z" fill="var(--chalk-mint)" stroke="var(--chalk-mint)" stroke-width="1" />
          <path d="M -5 0 C -10 -12 -6 -24 0 -28 C 4 -20 2 -8 0 0 Z" fill="var(--bg-surface-elevated)" stroke="#EF476F" stroke-width="1.8" />
          <path d="M 5 0 C 10 -12 6 -24 0 -28 C -4 -20 -2 -8 0 0 Z" fill="var(--bg-surface-elevated)" stroke="#EF476F" stroke-width="1.8" />
        </g>
      `;
      if (speciesKey === 'lavender') {
        budGroup = `
          <g class="plant-bud" transform="translate(50, 24)">
            <ellipse cx="0" cy="18" rx="3.5" ry="4.5" fill="rgba(179, 136, 255, 0.6)" stroke="#B388FF" stroke-width="1.6" />
            <ellipse cx="0" cy="9" rx="3.2" ry="4.5" fill="rgba(179, 136, 255, 0.6)" stroke="#B388FF" stroke-width="1.6" />
            <ellipse cx="0" cy="0" rx="2.8" ry="4" fill="rgba(179, 136, 255, 0.6)" stroke="#B388FF" stroke-width="1.6" />
          </g>
        `;
      } else if (speciesKey === 'tulip') {
        budGroup = `
          <g class="plant-bud" transform="translate(50, 26)">
            <path d="M -8 16 C -14 4 -6 -12 0 -16 C 6 -12 14 4 8 16 Z" fill="rgba(255, 92, 138, 0.45)" stroke="#FF5C8A" stroke-width="2" />
          </g>
        `;
      } else if (speciesKey === 'sunflower') {
        budGroup = `
          <g class="plant-bud" transform="translate(50, 26)">
            <circle cx="0" cy="0" r="11" fill="rgba(255, 209, 102, 0.3)" stroke="#FFD166" stroke-width="2" />
            <path d="M -11 0 Q -18 -8 -9 -12 M 11 0 Q 18 -8 9 -12 M -6 11 Q -11 20 0 16 M 6 11 Q 11 20 0 16" stroke="var(--chalk-mint)" stroke-width="1.8" fill="none" />
            <circle cx="0" cy="0" r="5" fill="#3D1E06" stroke="#FFD166" stroke-width="1" />
          </g>
        `;
      } else if (speciesKey === 'poppy') {
        budGroup = `
          <g class="plant-bud" transform="translate(42, 28)">
            <ellipse cx="0" cy="0" rx="7" ry="8.5" fill="rgba(230, 57, 70, 0.4)" stroke="#E63946" stroke-width="2" />
            <path d="M 0 -8 Q -3 0 0 8" stroke="#FAF0CA" stroke-width="1" fill="none" />
          </g>
        `;
      }
      innerArtwork = `
        <path class="plant-soil-mound" d="M 22 92 Q 50 90 78 92" stroke="var(--border-chalk)" stroke-width="1.5" fill="none" />
        <path class="plant-stem" d="M 50 92 Q 49 64 50 34" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
        <g class="plant-leaves">
          <path d="M 49 70 C 28 62 20 50 36 54 C 44 56 48 64 49 70 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          <path d="M 50 58 C 72 48 80 38 64 44 C 56 46 52 52 50 58 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
        </g>
        ${budGroup}
      `;
    } else {
      // STAGE 4: Full Bloom
      innerArtwork = this.renderIconFullBloom(speciesKey);
    }

    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg ${animClass}">
        ${innerArtwork}
      </svg>
    `;
  },

  renderIconFullBloom(speciesKey) {
    switch (speciesKey) {
      // 1. DAISY
      case 'daisy': {
        const petals = [];
        for (let i = 0; i < 16; i++) {
          const angle = i * 22.5;
          petals.push(`<ellipse cx="50" cy="22" rx="2.8" ry="8.5" transform="rotate(${angle} 50 36)" fill="#FFFFFF" opacity="0.95" stroke="#FAF0CA" stroke-width="1" />`);
        }
        return `
          <path class="plant-stem" d="M 50 94 L 50 42" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 50 72 C 34 66 30 76 38 82 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <path d="M 50 58 C 66 52 70 62 62 68 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          </g>
          <g class="plant-petals">
            ${petals.join('\n')}
          </g>
          <g class="plant-bloom-core">
            <circle cx="50" cy="36" r="7.5" fill="#FFD166" stroke="#FAF0CA" stroke-width="1.8" />
            <circle cx="50" cy="36" r="4.5" fill="none" stroke="#B78103" stroke-width="1" stroke-dasharray="2,1" />
          </g>
          <g class="plant-sparkles">
            <text x="24" y="24" font-family="'Kalam', cursive" font-size="12" fill="#FAF0CA">✦</text>
            <text x="74" y="26" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)">✦</text>
          </g>
        `;
      }

      // 2. LAVENDER
      case 'lavender': {
        const tiers = [
          { y: 18, rx: 4, ry: 3.5, c: '#B388FF' },
          { y: 25, rx: 6, ry: 4, c: '#9D4EDD' },
          { y: 33, rx: 7.5, ry: 4.5, c: '#7B2CBF' },
          { y: 42, rx: 8, ry: 4.8, c: '#9D4EDD' },
          { y: 52, rx: 7.5, ry: 4.5, c: '#7B2CBF' }
        ];
        const spikeWhorls = tiers.map(t => `
          <g transform="translate(50, ${t.y})">
            <ellipse cx="-4" cy="0" rx="${t.rx * 0.5}" ry="${t.ry * 0.7}" fill="${t.c}" stroke="#FAF0CA" stroke-width="0.7" opacity="0.95" />
            <ellipse cx="4" cy="0" rx="${t.rx * 0.5}" ry="${t.ry * 0.7}" fill="${t.c}" stroke="#FAF0CA" stroke-width="0.7" opacity="0.95" />
            <ellipse cx="0" cy="-1.5" rx="${t.rx * 0.6}" ry="${t.ry * 0.7}" fill="${t.c}" stroke="#FAF0CA" stroke-width="0.8" opacity="0.95" />
          </g>
        `).join('\n');
        return `
          <path class="plant-stem" d="M 50 94 L 50 18" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <line x1="50" y1="80" x2="34" y2="74" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="50" y1="80" x2="66" y2="74" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="50" y1="66" x2="32" y2="60" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
            <line x1="50" y1="66" x2="68" y2="60" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" />
          </g>
          <g class="plant-petals">
            ${spikeWhorls}
          </g>
          <g class="plant-bloom-core">
            <circle cx="50" cy="14" r="1.8" fill="#FAF0CA" />
          </g>
          <g class="plant-sparkles">
            <text x="24" y="24" font-family="'Kalam', cursive" font-size="12" fill="#B388FF">✦</text>
            <text x="74" y="28" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA">✦</text>
          </g>
        `;
      }

      // 3. POPPY
      case 'poppy': {
        return `
          <path class="plant-stem" d="M 50 94 Q 53 66 50 38" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 50 72 Q 36 64 30 70 Q 32 60 26 56 Q 36 58 50 66" stroke="var(--chalk-mint)" stroke-width="1.8" fill="rgba(6, 214, 160, 0.2)" />
            <path d="M 50 56 Q 64 48 70 54 Q 68 44 74 40 Q 64 42 50 50" stroke="var(--chalk-mint)" stroke-width="1.8" fill="rgba(6, 214, 160, 0.2)" />
          </g>
          <g transform="translate(50, 34)">
            <g class="plant-petals">
              <path d="M 0 0 C -18 -5 -24 -22 0 -21 C 24 -22 18 -5 0 0 Z" fill="#E63946" opacity="0.95" stroke="#FAF0CA" stroke-width="1" />
              <path d="M 0 0 C -26 -8 -28 13 -10 16 C -2 11 0 5 0 0 Z" fill="#D90429" opacity="0.95" stroke="#FAF0CA" stroke-width="1" />
              <path d="M 0 0 C 26 -8 28 13 10 16 C 2 11 0 5 0 0 Z" fill="#D90429" opacity="0.95" stroke="#FAF0CA" stroke-width="1" />
              <path d="M 0 0 C -14 14 -8 21 0 21 C 8 21 14 14 0 0 Z" fill="#FF4D6D" opacity="0.92" stroke="#FAF0CA" stroke-width="1" />
            </g>
            <g class="plant-bloom-core">
              <circle cx="0" cy="0" r="6.5" fill="#1D1E2C" stroke="#FAF0CA" stroke-width="1.2" />
              <circle cx="0" cy="0" r="10" fill="none" stroke="#FAF0CA" stroke-width="1" stroke-dasharray="2,2" opacity="0.8" />
              <path d="M -3 -3 L 3 3 M -3 3 L 3 -3" stroke="#FAF0CA" stroke-width="0.9" />
            </g>
          </g>
          <g class="plant-sparkles">
            <text x="22" y="22" font-family="'Kalam', cursive" font-size="12" fill="#FF4D6D">✦</text>
            <text x="76" y="24" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)">✦</text>
          </g>
        `;
      }

      // 4. TULIP
      case 'tulip': {
        return `
          <path class="plant-stem" d="M 50 94 Q 48 66 50 42" stroke="var(--chalk-mint)" stroke-width="3" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 48 94 C 20 74 24 38 34 26 C 30 52 38 78 48 90 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2" />
            <path d="M 52 94 C 80 74 76 38 66 26 C 70 52 62 78 52 90 Z" fill="rgba(6, 214, 160, 0.25)" stroke="var(--chalk-mint)" stroke-width="2" />
          </g>
          <g transform="translate(50, 38)">
            <g class="plant-petals">
              <path d="M -14 5 C -19 -11 -10 -28 0 -30 C 10 -28 19 -11 14 5 Z" fill="#F72585" opacity="0.9" stroke="#FAF0CA" stroke-width="1" />
              <path d="M -14 5 C -17 -8 -13 -23 -5 -27 C -2 -11 -3 0 0 5 Z" fill="#FF5C8A" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M 14 5 C 17 -8 13 -23 5 -27 C 2 -11 3 0 0 5 Z" fill="#FF5C8A" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M -8 5 C -9 -10 -4 -25 0 -28 C 4 -25 9 -10 8 5 Z" fill="#FF85A1" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
            </g>
            <g class="plant-bloom-core">
              <path d="M 0 0 L 0 -13" stroke="#FAF0CA" stroke-width="1.4" stroke-linecap="round" />
              <circle cx="0" cy="-13" r="1.6" fill="var(--chalk-amber)" />
            </g>
          </g>
          <g class="plant-sparkles">
            <text x="22" y="20" font-family="'Kalam', cursive" font-size="12" fill="#FF85A1">✦</text>
            <text x="76" y="24" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA">✦</text>
          </g>
        `;
      }

      // 5. COSMOS
      case 'cosmos': {
        const petals = [];
        for (let i = 0; i < 8; i++) {
          const angle = i * 45;
          petals.push(`
            <g transform="rotate(${angle} 50 34)">
              <path d="M 46 29 C 43 21 45 15 50 13 C 55 15 57 21 54 29 Z" fill="#E07A5F" opacity="0.95" stroke="#FAF0CA" stroke-width="0.8" />
              <path d="M 48 14 L 49 11 L 50 13 L 51 11 L 52 14" stroke="#FAF0CA" stroke-width="0.8" fill="none" />
            </g>
          `);
        }
        return `
          <path class="plant-stem" d="M 50 94 Q 49 68 50 40" stroke="var(--chalk-mint)" stroke-width="2.4" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 50 74 Q 38 70 30 62 M 40 70 L 35 58 M 35 66 L 31 74" stroke="var(--chalk-mint)" stroke-width="1.4" fill="none" />
            <path d="M 50 60 Q 62 56 70 48 M 60 56 L 65 44 M 65 52 L 69 60" stroke="var(--chalk-mint)" stroke-width="1.4" fill="none" />
          </g>
          <g class="plant-petals">
            ${petals.join('\n')}
          </g>
          <g class="plant-bloom-core">
            <circle cx="50" cy="34" r="6" fill="#4A2E1B" stroke="#FAF0CA" stroke-width="1.2" />
            <circle cx="50" cy="34" r="3.2" fill="var(--chalk-amber)" stroke="#FAF0CA" stroke-width="0.7" />
          </g>
          <g class="plant-sparkles">
            <text x="24" y="24" font-family="'Kalam', cursive" font-size="12" fill="var(--chalk-amber)">✦</text>
            <text x="74" y="26" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA">✦</text>
          </g>
        `;
      }

      // 6. SUNFLOWER
      case 'sunflower': {
        const petals = [];
        for (let i = 0; i < 20; i++) {
          const angle = i * 18;
          petals.push(`<ellipse cx="50" cy="11" rx="3.6" ry="9.5" transform="rotate(${angle} 50 28)" fill="#FFD166" opacity="0.95" stroke="#FFB703" stroke-width="1" />`);
        }
        return `
          <path class="plant-stem" d="M 50 94 Q 48 60 50 34" stroke="var(--chalk-mint)" stroke-width="3.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 48 74 C 22 62 16 80 28 90 C 38 92 45 82 48 76 Z" fill="rgba(6, 214, 160, 0.26)" stroke="var(--chalk-mint)" stroke-width="2" />
            <path d="M 52 54 C 78 42 84 60 72 70 C 62 72 55 62 52 56 Z" fill="rgba(6, 214, 160, 0.26)" stroke="var(--chalk-mint)" stroke-width="2" />
          </g>
          <g class="plant-petals">
            ${petals.join('\n')}
          </g>
          <g class="plant-bloom-core">
            <circle cx="50" cy="28" r="10.5" fill="#2E1D0E" stroke="#FFD166" stroke-width="2" />
            <circle cx="50" cy="28" r="7.5" fill="none" stroke="#FAF0CA" stroke-width="1" stroke-dasharray="2,2" opacity="0.8" />
            <circle cx="50" cy="28" r="4.5" fill="none" stroke="#FFD166" stroke-width="1" stroke-dasharray="2,2" opacity="0.8" />
            <circle cx="50" cy="28" r="2" fill="#FAF0CA" />
          </g>
          <g class="plant-sparkles">
            <text x="20" y="20" font-family="'Kalam', cursive" font-size="13" fill="var(--chalk-amber)">✦</text>
            <text x="78" y="22" font-family="'Kalam', cursive" font-size="11" fill="var(--chalk-amber)">✦</text>
          </g>
        `;
      }

      // 7. BLUEBELL
      case 'bluebell': {
        return `
          <path class="plant-stem" d="M 50 94 Q 48 64 50 40 Q 52 24 38 20" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 47 94 C 30 82 34 60 42 50" stroke="var(--chalk-mint)" stroke-width="2" fill="none" />
            <path d="M 53 94 C 70 82 66 60 58 50" stroke="var(--chalk-mint)" stroke-width="2" fill="none" />
          </g>
          <g class="plant-petals">
            <g transform="translate(38, 20) rotate(30)">
              <path d="M 0 0 C -5 5 -6 12 -8 16 C -3 14 0 14 2 16 C 0 12 -2 5 0 0 Z" fill="#4361EE" opacity="0.95" stroke="#FAF0CA" stroke-width="1" />
            </g>
            <g transform="translate(44, 28) rotate(22)">
              <path d="M 0 0 C -5 6 -7 14 -9 19 C -4 17 0 17 2 19 C 0 14 -2 6 0 0 Z" fill="#3A0CA3" opacity="0.95" stroke="#FAF0CA" stroke-width="1" />
            </g>
            <g transform="translate(50, 42) rotate(15)">
              <path d="M 0 0 C -6 6 -8 15 -10 20 C -5 18 0 18 2 20 C 0 15 -3 6 0 0 Z" fill="#4361EE" opacity="0.95" stroke="#FAF0CA" stroke-width="1" />
            </g>
            <g transform="translate(52, 56) rotate(10)">
              <path d="M 0 0 C -5 5 -7 13 -8 17 C -4 15 0 15 2 17 C 0 13 -2 5 0 0 Z" fill="#4CC9F0" opacity="0.95" stroke="#FAF0CA" stroke-width="1" />
            </g>
          </g>
          <g class="plant-bloom-core">
            <circle cx="38" cy="20" r="2" fill="#FAF0CA" />
          </g>
          <g class="plant-sparkles">
            <text x="24" y="24" font-family="'Kalam', cursive" font-size="12" fill="#4CC9F0">✦</text>
            <text x="74" y="26" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA">✦</text>
          </g>
        `;
      }

      // 8. IRIS
      case 'iris': {
        return `
          <path class="plant-stem" d="M 50 94 L 50 38" stroke="var(--chalk-mint)" stroke-width="2.8" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 45 94 L 34 44 L 41 58 L 48 94 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <path d="M 55 94 L 66 40 L 59 54 L 52 94 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          </g>
          <g transform="translate(50, 32)">
            <g class="plant-petals">
              <path d="M 0 -3 C -6 -12 -9 -26 0 -30 C 9 -26 6 -12 0 -3 Z" fill="#9D4EDD" opacity="0.95" stroke="#FAF0CA" stroke-width="1" />
              <path d="M -2 -3 C -14 -10 -18 -20 -9 -24 C -3 -17 0 -9 -2 -3 Z" fill="#7209B7" opacity="0.9" stroke="#FAF0CA" stroke-width="1" />
              <path d="M 2 -3 C 14 -10 18 -20 9 -24 C 3 -17 0 -9 2 -3 Z" fill="#7209B7" opacity="0.9" stroke="#FAF0CA" stroke-width="1" />
              <path d="M 0 0 C -11 5 -18 18 -12 24 C -6 20 -2 11 0 0 Z" fill="#560BAD" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M 0 0 C 11 5 18 18 12 24 C 6 20 2 11 0 0 Z" fill="#560BAD" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
              <path d="M 0 0 C -5 9 -6 22 0 27 C 6 22 5 9 0 0 Z" fill="#3F37C9" opacity="0.95" stroke="#FAF0CA" stroke-width="1.2" />
            </g>
            <g class="plant-bloom-core">
              <path d="M 0 3 L 0 15" stroke="#FFD166" stroke-width="2.2" stroke-linecap="round" />
              <path d="M -5 5 L -8 14" stroke="#FFD166" stroke-width="1.6" stroke-linecap="round" />
              <path d="M 5 5 L 8 14" stroke="#FFD166" stroke-width="1.6" stroke-linecap="round" />
              <circle cx="0" cy="0" r="3" fill="#FAF0CA" />
            </g>
          </g>
          <g class="plant-sparkles">
            <text x="22" y="20" font-family="'Kalam', cursive" font-size="12" fill="#B388FF">✦</text>
            <text x="76" y="24" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)">✦</text>
          </g>
        `;
      }

      // 9. FORGET-ME-NOT
      case 'forget-me-not': {
        const florets = [
          { x: 50, y: 26, r: 6.5 },
          { x: 38, y: 38, r: 5.8 },
          { x: 62, y: 36, r: 5.8 },
          { x: 42, y: 52, r: 5.2 },
          { x: 58, y: 50, r: 5.2 }
        ];
        const floretSVG = florets.map(f => {
          const petals = [];
          for (let i = 0; i < 5; i++) {
            const angle = i * 72;
            petals.push(`<ellipse cx="0" cy="-${f.r * 0.7}" rx="${f.r * 0.42}" ry="${f.r * 0.48}" transform="rotate(${angle} 0 0)" fill="#48CAE4" stroke="#FAF0CA" stroke-width="0.7" opacity="0.95" />`);
          }
          return `
            <g transform="translate(${f.x}, ${f.y})">
              ${petals.join('\n')}
              <circle cx="0" cy="0" r="${f.r * 0.28}" fill="#FFD166" stroke="#FAF0CA" stroke-width="0.7" />
              <circle cx="0" cy="0" r="${f.r * 0.12}" fill="#FFFFFF" />
            </g>
          `;
        }).join('\n');
        return `
          <path class="plant-stem" d="M 50 94 Q 49 60 50 26 M 50 68 Q 42 54 38 38 M 50 64 Q 58 52 62 36 M 46 72 Q 44 60 42 52 M 54 70 Q 56 60 58 50" stroke="var(--chalk-mint)" stroke-width="1.8" stroke-linecap="round" fill="none" />
          <g class="plant-petals">
            ${floretSVG}
          </g>
          <g class="plant-sparkles">
            <text x="24" y="24" font-family="'Kalam', cursive" font-size="12" fill="#48CAE4">✦</text>
            <text x="74" y="26" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)">✦</text>
          </g>
        `;
      }

      // 10. CALENDULA
      case 'calendula': {
        const outerPetals = [];
        for (let i = 0; i < 18; i++) {
          const angle = i * 20;
          outerPetals.push(`<ellipse cx="50" cy="19" rx="2.8" ry="7.5" transform="rotate(${angle} 50 34)" fill="#F77F00" opacity="0.95" stroke="#FAF0CA" stroke-width="0.7" />`);
        }
        const innerPetals = [];
        for (let i = 0; i < 14; i++) {
          const angle = i * 25.7 + 10;
          innerPetals.push(`<ellipse cx="50" cy="24" rx="2.2" ry="5.5" transform="rotate(${angle} 50 34)" fill="#FCBF49" opacity="0.98" stroke="#FAF0CA" stroke-width="0.5" />`);
        }
        return `
          <path class="plant-stem" d="M 50 94 Q 49 66 50 38" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 50 72 C 34 66 30 76 38 82 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <path d="M 50 56 C 66 50 70 60 62 66 Z" fill="rgba(6, 214, 160, 0.22)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          </g>
          <g class="plant-petals">
            ${outerPetals.join('\n')}
            ${innerPetals.join('\n')}
          </g>
          <g class="plant-bloom-core">
            <circle cx="50" cy="34" r="5.5" fill="#7F260F" stroke="#FAF0CA" stroke-width="1" />
            <circle cx="50" cy="34" r="2.5" fill="#D62828" />
          </g>
          <g class="plant-sparkles">
            <text x="24" y="24" font-family="'Kalam', cursive" font-size="12" fill="#FCBF49">✦</text>
            <text x="74" y="26" font-family="'Kalam', cursive" font-size="10" fill="#F77F00">✦</text>
          </g>
        `;
      }

      // 11. CORNFLOWER
      case 'cornflower': {
        const florets = [];
        for (let i = 0; i < 12; i++) {
          const angle = i * 30;
          florets.push(`
            <g transform="rotate(${angle} 50 32)">
              <path d="M 50 32 L 47 18 L 48 13 L 50 15 L 52 13 L 53 18 Z" fill="#0077B6" opacity="0.95" stroke="#FAF0CA" stroke-width="0.7" />
            </g>
          `);
        }
        return `
          <path class="plant-stem" d="M 50 94 Q 49 66 50 36" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <line x1="50" y1="74" x2="32" y2="64" stroke="var(--chalk-mint)" stroke-width="1.8" stroke-linecap="round" />
            <line x1="50" y1="56" x2="68" y2="48" stroke="var(--chalk-mint)" stroke-width="1.8" stroke-linecap="round" />
          </g>
          <g transform="translate(50, 32)">
            <path d="M -6 8 C -8 2 0 -1 0 -1 C 0 -1 8 2 6 8 C 5 13 -5 13 -6 8 Z" fill="#2B4C3F" stroke="#FAF0CA" stroke-width="1" />
            <path d="M -5 3 L 5 3 M -4 6 L 4 6" stroke="#FAF0CA" stroke-width="0.7" opacity="0.75" />
          </g>
          <g class="plant-petals">
            ${florets.join('\n')}
          </g>
          <g class="plant-bloom-core">
            <circle cx="50" cy="32" r="5" fill="#1D3557" stroke="#FAF0CA" stroke-width="1" />
            <circle cx="50" cy="32" r="2.5" fill="#48CAE4" />
          </g>
          <g class="plant-sparkles">
            <text x="24" y="24" font-family="'Kalam', cursive" font-size="12" fill="#48CAE4">✦</text>
            <text x="74" y="26" font-family="'Kalam', cursive" font-size="10" fill="#FAF0CA">✦</text>
          </g>
        `;
      }

      // 12. ANEMONE
      case 'anemone': {
        const petals = [];
        for (let i = 0; i < 6; i++) {
          const angle = i * 60;
          petals.push(`<ellipse cx="50" cy="21" rx="8" ry="11" transform="rotate(${angle} 50 34)" fill="#F8F9FA" opacity="0.95" stroke="#FAF0CA" stroke-width="1" />`);
        }
        return `
          <path class="plant-stem" d="M 50 94 Q 49 66 50 38" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <g class="plant-leaves">
            <path d="M 49 74 C 36 68 32 76 38 82 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
            <path d="M 50 60 C 64 54 68 62 62 68 Z" fill="rgba(6, 214, 160, 0.2)" stroke="var(--chalk-mint)" stroke-width="1.8" />
          </g>
          <g transform="translate(50, 44)">
            <path d="M 0 0 L -10 5 L -5 2 L -11 -2 L -5 -3 L 0 0" stroke="var(--chalk-mint)" stroke-width="1.4" fill="rgba(6, 214, 160, 0.25)" />
            <path d="M 0 0 L 10 5 L 5 2 L 11 -2 L 5 -3 L 0 0" stroke="var(--chalk-mint)" stroke-width="1.4" fill="rgba(6, 214, 160, 0.25)" />
          </g>
          <g class="plant-petals">
            ${petals.join('\n')}
          </g>
          <g class="plant-bloom-core">
            <circle cx="50" cy="34" r="10" fill="none" stroke="#FAF0CA" stroke-width="0.9" stroke-dasharray="2,1.5" />
            <circle cx="50" cy="34" r="6.8" fill="#14171A" stroke="#FAF0CA" stroke-width="1.3" />
            <circle cx="50" cy="34" r="2.5" fill="#3A0CA3" />
          </g>
          <g class="plant-sparkles">
            <text x="24" y="24" font-family="'Kalam', cursive" font-size="12" fill="#FAF0CA">✦</text>
            <text x="74" y="26" font-family="'Kalam', cursive" font-size="10" fill="var(--chalk-amber)">✦</text>
          </g>
        `;
      }
    }
  }
};

const ChalkBotanicals = {
  renderRestingSeed(size = 36, animClass = '', day = 1, specimenName = '') {
    const key = BotanicalSpeciesLibrary.resolveSpeciesKey(specimenName, day);
    return BotanicalSpeciesLibrary.renderIconSVG(key, 0, size, animClass, day);
  },

  renderFirstSprout(size = 36, animClass = '', day = 1, specimenName = '') {
    const key = BotanicalSpeciesLibrary.resolveSpeciesKey(specimenName, day);
    return BotanicalSpeciesLibrary.renderIconSVG(key, 1, size, animClass, day);
  },

  renderBranchingStem(size = 38, animClass = '', day = 1, specimenName = '') {
    const key = BotanicalSpeciesLibrary.resolveSpeciesKey(specimenName, day);
    return BotanicalSpeciesLibrary.renderIconSVG(key, 2, size, animClass, day);
  },

  renderSwellingBud(size = 40, animClass = '', day = 1, specimenName = '') {
    const key = BotanicalSpeciesLibrary.resolveSpeciesKey(specimenName, day);
    return BotanicalSpeciesLibrary.renderIconSVG(key, 3, size, animClass, day);
  },

  renderFullBloom(size = 48, day = 1, animClass = '', specimenName = '') {
    const key = BotanicalSpeciesLibrary.resolveSpeciesKey(specimenName, day);
    return BotanicalSpeciesLibrary.renderIconSVG(key, 4, size, animClass, day);
  },

  getBotanicalSVG(stage, size = 36, day = 1, animClass = '', specimenName = '') {
    const key = BotanicalSpeciesLibrary.resolveSpeciesKey(
      specimenName || (typeof AppState !== 'undefined' && AppState?.gardenData?.[day]?.specimen) || (typeof BOTANICAL_SPECIMENS !== 'undefined' ? BOTANICAL_SPECIMENS[day - 1] : ''),
      day
    );
    return BotanicalSpeciesLibrary.renderIconSVG(key, stage, size, animClass, day);
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
  renderPlantStage(x, day, dayData, isToday, isFuture = false, animClass = '', animDelay = 0) {
    const stage = dayData ? (dayData.stage ?? 0) : 0;
    const rawSpecimen = dayData?.specimen || (typeof BOTANICAL_SPECIMENS !== 'undefined' ? BOTANICAL_SPECIMENS[day - 1] : '');
    const speciesKey = BotanicalSpeciesLibrary.resolveSpeciesKey(rawSpecimen, day);
    const plantArtwork = BotanicalSpeciesLibrary.renderMeadowPlant(speciesKey, stage, {
      isToday,
      isFuture,
      day,
      specimenName: rawSpecimen
    });

    const labelColor = isToday ? 'style="fill: var(--chalk-amber); font-weight:700;"' : (isFuture ? 'style="opacity: 0.55;"' : '');
    const underlineColor = isToday ? 'stroke="var(--chalk-amber)" stroke-width="2.2"' : (isFuture ? 'stroke="var(--border-chalk)" stroke-width="1.2" stroke-dasharray="3,2" opacity="0.45"' : 'stroke="var(--text-primary)" stroke-width="2" opacity="0.8"');
    const todayBadge = isToday ? `<text x="0" y="253" font-family="'Kalam', cursive" font-size="12" font-weight="700" fill="var(--chalk-amber)" text-anchor="middle">★ Today</text>` : '';
    const todayPedestal = isToday ? `
      <!-- Soft Amber Soil Pedestal Aura for Today's Specimen -->
      <ellipse cx="0" cy="222" rx="42" ry="11" fill="rgba(255, 209, 102, 0.12)" stroke="var(--chalk-amber)" stroke-width="1.2" stroke-dasharray="3,2" />
    ` : '';

    const hotspotClasses = [
      'meadow-plant-hotspot',
      isToday ? 'is-today-plant' : '',
      isFuture ? 'is-future-plant' : '',
      animClass || ''
    ].filter(Boolean).join(' ');

    const delayStyle = animDelay ? `style="--plant-delay: ${animDelay.toFixed(2)}s;"` : '';

    return `
      <g class="meadow-day-column" transform="translate(${x}, 0)" data-day="${day}" id="meadow-day-${day}">
        <!-- Full-column click target hitbox -->
        <rect x="-45" y="10" width="90" height="245" fill="transparent" class="meadow-day-click-target" style="cursor: pointer;" />
        ${todayPedestal}
        <!-- Living Plant Specimen (anchored at soil line 0, 215) -->
        <g class="${hotspotClasses}" ${delayStyle} id="plant-hotspot-d${day}">
          ${plantArtwork}
        </g>
        <!-- Ground Day Number, Underline & Today Badge (anchored, static) -->
        <text x="0" y="${isToday ? 234 : 238}" class="meadow-chalk-label" ${labelColor} text-anchor="middle">D${day}</text>
        <path d="M -17 ${isToday ? 240 : 244} Q 0 ${isToday ? 242 : 246} 17 ${isToday ? 240 : 244}" ${underlineColor} stroke-linecap="round" fill="none" />
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

    const isFirstGardenEntrance = !hasVisitedGardenThisSession && (AppState.activeSurface === 'progress-garden' || !AppState.activeSurface);

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

      // Determine animation class and staggered delay
      let animClass = '';
      let animDelay = 0;

      if (isToday && activeStageEvolutionDay === slot.day && activeStageEvolutionClass) {
        // Active botanical stage evolution taking place right now!
        animClass = activeStageEvolutionClass;
        animDelay = 0;
      } else if (isFirstGardenEntrance) {
        // First visible visit to garden this session: staggered emergence centered around Today
        const distFromToday = Math.abs(slot.day - TODAY_DAY_NUM);
        animDelay = distFromToday <= 3 ? distFromToday * 0.15 : 0.45 + (distFromToday - 3) * 0.06;
        animClass = 'garden-entrance-anim';
      } else {
        // Gentle living wind sway
        animClass = 'is-wind-swaying';
        const distFromToday = Math.abs(slot.day - TODAY_DAY_NUM);
        animDelay = ((slot.day * 3) % 7) * 0.35;
      }

      return this.renderPlantStage(slot.x, slot.day, dayData, isToday, isFuture, animClass, animDelay);
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

    if (isFirstGardenEntrance) {
      setTimeout(() => {
        hasVisitedGardenThisSession = true;
        const entranceHotspots = container.querySelectorAll('.garden-entrance-anim');
        entranceHotspots.forEach((el, idx) => {
          el.classList.remove('garden-entrance-anim');
          el.classList.add('is-wind-swaying');
          el.style.setProperty('--sway-delay', `${((idx * 3) % 7) * 0.35}s`);
        });
      }, 3400);
    }

    // Attach click listeners to all active specimen day columns & hotspots
    meadowSlots.forEach(slot => {
      const dayCol = container.querySelector(`#meadow-day-${slot.day}`);
      const hotspot = container.querySelector(`#plant-hotspot-d${slot.day}`);
      const clickTarget = dayCol || hotspot;
      if (clickTarget) {
        clickTarget.addEventListener('click', (e) => {
          if (container.dataset.hasDragged === 'true') return;
          e.stopPropagation();
          AudioEngine.playChalkScratch();
          emitDustParticles((hotspot || clickTarget).getBoundingClientRect());
          
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
let hasVisitedGardenThisSession = false;
let activeStageEvolutionDay = null;
let activeStageEvolutionClass = '';

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
  if (monthKey === '2026-10') {
    return OCTOBER_2026_HISTORICAL_GARDEN;
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
  'Sunburst Cosmos', 'Blue Cornflower', 'Velvet Iris', 'English Daisy', 'Golden Sunflower',
  'Wild Lavender', 'Sunset Calendula', 'Scarlet Poppy', 'Woodland Bluebell', 'Sky Forget-Me-Not',
  'Crimson Tulip', 'French Anemone', 'Chamomile Daisy', 'Royal Iris', 'Giant Sunflower',
  'Highland Lavender', 'Coral Cosmos', 'Fringed Cornflower', 'Golden Calendula', 'Flanders Poppy',
  'Spring Bluebell', 'Alpine Forget-Me-Not', 'Dutch Tulip', 'White Anemone', 'Meadow Daisy',
  'Purple Iris', 'Autumn Sunflower', 'Fragrant Lavender', 'Amber Cosmos', 'Cornflower Blue', 'Garden Tulip'
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
        focus: 0,
        stage: 1
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
  lastHabitDate: TODAY_DATE,
  habits: [
    { id: 'h-1', name: 'Drink 4 Liters Water', icon: '💧', type: 'COUNTER', current: 0, target: 4, unit: 'L', completions: Math.min(13, TODAY_DAY_NUM) },
    { id: 'h-2', name: '30 Mins Design Reading', icon: '📖', type: 'COUNTER', current: 0, target: 30, unit: 'm', completions: Math.min(12, TODAY_DAY_NUM) },
    { id: 'h-3', name: 'Morning Sketchbook Drill', icon: '🎨', type: 'CHECK', current: 0, target: 1, unit: '', completions: Math.min(11, TODAY_DAY_NUM) },
    { id: 'h-4', name: 'Evening Walk / Rest', icon: '🌿', type: 'CHECK', current: 0, target: 1, unit: '', completions: Math.min(12, TODAY_DAY_NUM) }
  ],
  focusTimeLoggedToday: 0,
  focusSessions: [],
  habitHistory: {},
  gardenData: buildInitialGardenData(TODAY_DAY_NUM),
  monthlyGardens: {
    '2026-10': OCTOBER_2026_HISTORICAL_GARDEN,
    [CurrentDateInfo.monthKey]: buildInitialGardenData(TODAY_DAY_NUM)
  }
};

function sanitizeFocusAndGrowthData(state) {
  // 1. Safety backup of raw localStorage before any mutation
  try {
    const rawSaved = localStorage.getItem(STORAGE_KEY);
    if (rawSaved && !localStorage.getItem('chalkflow_backup_before_focus_fix')) {
      localStorage.setItem('chalkflow_backup_before_focus_fix', rawSaved);
    }
  } catch (e) {
    console.warn('Focus fix backup warning:', e);
  }

  // 2. Ensure genuine focusSessions array exists
  if (!Array.isArray(state.focusSessions)) {
    state.focusSessions = [];
  }

  // 3. Compute genuine focus minutes earned today from recorded sessions
  const genuineTodaySessions = state.focusSessions.filter(s => s && s.date === TODAY_DATE);
  const genuineTodayMins = genuineTodaySessions.reduce((sum, s) => sum + (Number(s.durationMins) || 0), 0);

  // If there are no genuine recorded sessions, the 45m was purely demonstration seed data.
  // Safely reset it to 0 genuine minutes without modifying genuine tasks or habits.
  if (state.focusSessions.length === 0) {
    state.focusTimeLoggedToday = 0;
  } else {
    state.focusTimeLoggedToday = genuineTodayMins;
  }

  // 4. Synchronize today's gardenData focus
  if (state.gardenData && state.gardenData[TODAY_DAY_NUM]) {
    state.gardenData[TODAY_DAY_NUM].focus = state.focusTimeLoggedToday;

    // Strict Full Bloom check:
    // If today's flower was awarded Full Bloom (Stage 4) using fake focus data, correct it down to Stage 3 or lower
    if (state.gardenData[TODAY_DAY_NUM].stage === 4 || state.gardenData[TODAY_DAY_NUM].highestEarnedStage === 4) {
      if (state.focusTimeLoggedToday < 45) {
        state.gardenData[TODAY_DAY_NUM].stage = Math.min(3, state.gardenData[TODAY_DAY_NUM].stage || 3);
        state.gardenData[TODAY_DAY_NUM].highestEarnedStage = Math.min(3, state.gardenData[TODAY_DAY_NUM].highestEarnedStage || 3);
      }
    }
  }

  if (state.monthlyGardens && state.monthlyGardens[CurrentDateInfo.monthKey]) {
    state.monthlyGardens[CurrentDateInfo.monthKey] = state.gardenData;
  }
}

let AppState = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!parsed.userName) parsed.userName = 'Shouryaa';
      if (!parsed.gardenData) parsed.gardenData = {};
      if (!parsed.monthlyGardens) parsed.monthlyGardens = {};
      if (!parsed.habitHistory) parsed.habitHistory = {};
      checkAndPerformDailyHabitReset(parsed);
      ensureHabitHistoryInitialized(parsed);
      
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
      sanitizeFocusAndGrowthData(parsed);
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
      checkAndPerformDailyHabitReset(migrated);
      ensureHabitHistoryInitialized(migrated);
      sanitizeFocusAndGrowthData(migrated);
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
  initDailyRollover();
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

function checkDailyRollover() {
  const latestDateInfo = getLocalDateInfo();
  if (latestDateInfo.dateStr === TODAY_DATE) {
    return false;
  }

  // Day has changed!
  CurrentDateInfo = latestDateInfo;
  TODAY_DATE = latestDateInfo.dateStr;
  TOMORROW_DATE = latestDateInfo.tomorrowStr;
  THIS_WEEK_END_DATE = latestDateInfo.endOfWeekStr;
  NEXT_WEEK_START_DATE = latestDateInfo.nextWeekStartStr;
  NEXT_WEEK_END_DATE = latestDateInfo.endOfNextWeekStr;
  TODAY_DAY_NUM = latestDateInfo.dayNum;

  syncDateDisplays();

  // 1. Process tasks carryovers for new date
  if (AppState && AppState.tasks) {
    AppState.tasks = processDateCarryOvers(AppState.tasks);
  }

  // 2. Perform daily habit reset for the new date
  checkAndPerformDailyHabitReset(AppState);

  // 3. Ensure today's botanical flower plot exists in gardenData
  if (AppState && AppState.gardenData) {
    if (!AppState.gardenData[TODAY_DAY_NUM]) {
      AppState.gardenData[TODAY_DAY_NUM] = {
        specimen: BOTANICAL_SPECIMENS[TODAY_DAY_NUM - 1] || 'Sunburst Dahlia',
        tasks: 0,
        planned: 0,
        focus: 0,
        stage: 0
      };
    }
  }

  // 4. Sanitize focus to reflect 0 completed minutes today
  if (AppState) {
    sanitizeFocusAndGrowthData(AppState);
    saveState();
  }

  // 5. Refresh all visible surfaces
  renderDashboard();
  renderTodaySlate();
  renderHabitLedger();
  renderProgressGarden();
  updateGlobalGrowthMetrics();

  showToast('🌅 Good morning! Daily slate and habit trackers have refreshed.');
  return true;
}

function initDailyRollover() {
  setInterval(checkDailyRollover, 30000);

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      checkDailyRollover();
    }
  });

  window.addEventListener('focus', () => {
    checkDailyRollover();
  });
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

  if (surfaceId === 'deep-focus') {
    populateFocusTaskDropdown();
    if (linkedTaskId) {
      openFocusSession(linkedTaskId);
    } else {
      const focusSelect = document.getElementById('focus-linked-task-select');
      if (focusSelect) {
        focusSelect.value = FocusTimer.currentTaskId || '';
      }
      const titleDisplay = document.getElementById('focus-task-title-display');
      const badgeDisplay = document.getElementById('focus-task-badge');
      if (FocusTimer.currentTaskId && FocusTimer.currentTaskTitle) {
        if (badgeDisplay) badgeDisplay.innerHTML = '<i class="fa-solid fa-bullseye"></i> Focusing on';
        if (titleDisplay) titleDisplay.innerText = FocusTimer.currentTaskTitle;
      } else {
        if (badgeDisplay) badgeDisplay.innerHTML = '<i class="fa-solid fa-brain"></i> Mindful Session';
        if (titleDisplay) titleDisplay.innerText = 'Free Mindful Focus';
      }
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

  // Dashboard "Start Free Focus" action for unanchored mindful focus
  const freeFocusBtn = document.getElementById('btn-dash-free-focus');
  if (freeFocusBtn) {
    freeFocusBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openFocusSession(null);
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
  const todayHabitStats = getHabitCompletionForDate(TODAY_DATE);
  const completedHabits = todayHabitStats.fullyMetCount;
  const totalHabits = todayHabitStats.totalScheduled;
  const habitsPercent = todayHabitStats.percentage;

  const habitsCircle = document.getElementById('ring-habits-circle');
  const habitsPercentText = document.getElementById('ring-habits-percent');
  const dashHabitsRatio = document.getElementById('dash-habits-ratio');
  const dashHabitsSub = document.getElementById('dash-habits-sub');

  if (habitsCircle) {
    habitsCircle.style.strokeDashoffset = circumference * (1 - habitsPercent / 100);
  }
  if (habitsPercentText) habitsPercentText.innerText = `${habitsPercent}%`;
  if (dashHabitsRatio) dashHabitsRatio.innerText = `${completedHabits} / ${totalHabits} Habits Met`;
  if (dashHabitsSub) {
    if (totalHabits === 0) {
      dashHabitsSub.innerText = 'No habits active — plant one in Habit Ledger!';
    } else {
      dashHabitsSub.innerText = `${completedHabits} of ${totalHabits} daily goals met (${habitsPercent}% consistency)`;
    }
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

  const animClass = (activeStageEvolutionDay === TODAY_DAY_NUM && activeStageEvolutionClass) ? activeStageEvolutionClass : '';
  if (stagePill) stagePill.innerText = stageNames[currentStage];
  if (flowerVisual) flowerVisual.innerHTML = ChalkBotanicals.getBotanicalSVG(currentStage, 96, TODAY_DAY_NUM, animClass, specimenName);
  if (specimenTitle) specimenTitle.innerText = `🌸 ${specimenName}`;
  if (quoteEl) quoteEl.innerText = stageQuotes[currentStage];

  const bloomHintEl = document.getElementById('dash-bloom-hint');
  if (bloomHintEl) {
    if (currentStage === 4) {
      bloomHintEl.innerHTML = `<span class="chalk-font" style="color:var(--chalk-amber); font-weight:700;">🌸 Your flower is in full bloom!</span>`;
    } else {
      const genuineBaseline = Math.max(totalTasks, todayGardenData.highestPlannedCount || 0);
      const tasksNeeded = Math.max(0, genuineBaseline - completedTasks);
      const focusNeeded = Math.max(0, 45 - currentFocus);

      let hintText = '';
      if (tasksNeeded > 0 && focusNeeded > 0) {
        hintText = `${tasksNeeded} task${tasksNeeded !== 1 ? 's' : ''} and ${focusNeeded} minutes of focus to bloom.`;
      } else if (tasksNeeded > 0 && focusNeeded === 0) {
        hintText = `Focus goal reached! Finish your remaining ${tasksNeeded} task${tasksNeeded !== 1 ? 's' : ''} to bloom.`;
      } else if (tasksNeeded === 0 && focusNeeded > 0) {
        hintText = `All tasks done! Just ${focusNeeded} minute${focusNeeded !== 1 ? 's' : ''} of focus left.`;
      } else {
        hintText = `Add tasks to your slate and record 45 minutes of focus to bloom.`;
      }
      bloomHintEl.innerText = hintText;
    }
  }

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
          ${ChalkBotanicals.getBotanicalSVG(4, 56, plant.day, '', plant.name)}
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
    openFocusSession(task.id);
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
      if (speciesTitle) speciesTitle.innerText = '\uD83C\uDF38 ' + newName;
      const modalFlowerVisual = document.getElementById('modal-flower-visual');
      if (modalFlowerVisual) {
        const curStage = GardenView.isCurrentMonth
          ? (AppState.gardenData[day]?.stage ?? 0)
          : (AppState.monthlyGardens?.[GardenView.monthKey]?.[day]?.stage ?? 0);
        modalFlowerVisual.innerHTML = ChalkBotanicals.getBotanicalSVG(curStage, 74, day, '', newName);
      }
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

  if (AppState.activeSurface === 'progress-garden') {
    renderProgressGarden();
  }
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
        <div class="tile-artwork-svg">${ChalkBotanicals.getBotanicalSVG(currentStage, 34, day, '', dayData.specimen)}</div>
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
  const modalDateStr = `${GardenView.year}-${String(GardenView.month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const modalHabitStats = getHabitCompletionForDate(modalDateStr);
  const habitsRatio = isFuture
    ? `0 / ${modalHabitStats.totalScheduled || (AppState.habits || []).length} habits`
    : `${modalHabitStats.fullyMetCount} / ${modalHabitStats.totalScheduled} habits (${modalHabitStats.percentage}%)`;

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
  if (flowerVisualEl) flowerVisualEl.innerHTML = ChalkBotanicals.getBotanicalSVG(currentStage, 74, day, '', specimenName);
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
// F. HABIT LEDGER CONTROLLER & INTERACTIVE LINE GRAPH
// --------------------------------------------------------------------------
let currentHabitGraphRange = 'weekly';

function checkAndPerformDailyHabitReset(state, force = false) {
  if (!state) return false;
  if (!Array.isArray(state.habits)) state.habits = [];
  if (!state.habitHistory) state.habitHistory = {};

  const currentToday = (typeof getLocalDateInfo === 'function') ? getLocalDateInfo().dateStr : TODAY_DATE;

  // Manual or forced reset: reset all active habits to 0 for today
  if (force) {
    state.lastHabitDate = currentToday;
    if (!state.habitHistory[currentToday]) {
      state.habitHistory[currentToday] = {};
    }
    state.habits.forEach(h => {
      h.current = 0;
      state.habitHistory[currentToday][h.id] = 0;
    });
    return true;
  }

  const lastRecordedDate = state.lastHabitDate;

  // Case 1: First time running with lastHabitDate tracking (or state has no lastHabitDate yet)
  if (!lastRecordedDate) {
    state.lastHabitDate = currentToday;
    if (!state.habitHistory[currentToday]) {
      // First load today: initialize fresh with 0 progress for today
      state.habitHistory[currentToday] = {};
      state.habits.forEach(h => {
        h.current = 0;
        state.habitHistory[currentToday][h.id] = 0;
      });
      return true;
    } else {
      // Habit history exists for today; sync live habit values
      state.habits.forEach(h => {
        if (state.habitHistory[currentToday][h.id] !== undefined) {
          h.current = state.habitHistory[currentToday][h.id];
        } else {
          h.current = 0;
          state.habitHistory[currentToday][h.id] = 0;
        }
      });
      return false;
    }
  }

  // Case 2: New calendar day detected!
  if (lastRecordedDate !== currentToday) {
    // 1. Archive prior day's live values into history so past graphs & stats are preserved
    if (!state.habitHistory[lastRecordedDate]) {
      state.habitHistory[lastRecordedDate] = {};
    }
    state.habits.forEach(h => {
      if (state.habitHistory[lastRecordedDate][h.id] === undefined) {
        state.habitHistory[lastRecordedDate][h.id] = h.current !== undefined ? h.current : 0;
      }
    });

    // 2. Roll over to new date and reset active habits to 0
    state.lastHabitDate = currentToday;
    if (!state.habitHistory[currentToday]) {
      state.habitHistory[currentToday] = {};
      state.habits.forEach(h => {
        h.current = 0;
        state.habitHistory[currentToday][h.id] = 0;
      });
    } else {
      state.habits.forEach(h => {
        if (state.habitHistory[currentToday][h.id] !== undefined) {
          h.current = state.habitHistory[currentToday][h.id];
        } else {
          h.current = 0;
          state.habitHistory[currentToday][h.id] = 0;
        }
      });
    }
    return true;
  }

  // Case 3: Same day - maintain synchronization
  if (!state.habitHistory[currentToday]) {
    state.habitHistory[currentToday] = {};
  }
  state.habits.forEach(h => {
    if (state.habitHistory[currentToday][h.id] !== undefined) {
      if (h.current === undefined) {
        h.current = state.habitHistory[currentToday][h.id];
      }
    } else {
      state.habitHistory[currentToday][h.id] = h.current !== undefined ? h.current : 0;
    }
  });

  return false;
}

function ensureHabitHistoryInitialized(state) {
  checkAndPerformDailyHabitReset(state);
  if (!state.habitHistory) state.habitHistory = {};

  // Guarantee Today is always recorded with live current values
  if (!state.habitHistory[TODAY_DATE]) {
    state.habitHistory[TODAY_DATE] = {};
  }
  (state.habits || []).forEach(h => {
    state.habitHistory[TODAY_DATE][h.id] = h.current !== undefined ? h.current : 0;
  });

  // Seed / backfill past days for up to 31 days if not present
  const habits = state.habits || [];
  for (let offset = 1; offset <= 31; offset++) {
    const d = new Date();
    d.setDate(d.getDate() - offset);
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

    if (!state.habitHistory[dateStr]) {
      state.habitHistory[dateStr] = {};
      habits.forEach((h, hIdx) => {
        // Do not seed history for habits created on or after dateStr
        if (h.createdAt && h.createdAt > dateStr) return;
        // Natural distribution matching habit completions
        const seedVal = (d.getDate() * 13 + hIdx * 7 + offset * 5) % 10;
        if (seedVal >= 2) {
          state.habitHistory[dateStr][h.id] = h.target || 1;
        } else if (seedVal === 1 && h.type === 'COUNTER') {
          // Partial progress day (e.g. 2 of 4 litres)
          state.habitHistory[dateStr][h.id] = Math.max(1, Math.floor((h.target || 4) * 0.5));
        } else {
          // Missed day
          state.habitHistory[dateStr][h.id] = 0;
        }
      });
    }
  }
}

function getHabitCompletionForDate(dateStr) {
  const habits = AppState.habits || [];
  // Habits scheduled on or before this date
  const activeHabits = habits.filter(h => !h.createdAt || h.createdAt <= dateStr);
  const totalScheduled = activeHabits.length;

  if (totalScheduled === 0) {
    return {
      dateStr,
      totalScheduled: 0,
      fullyMetCount: 0,
      completedCount: 0,
      percentage: 0
    };
  }

  const record = (AppState.habitHistory && AppState.habitHistory[dateStr]) || {};
  const isToday = dateStr === TODAY_DATE;

  let fullyMetCount = 0;
  let sumPercentages = 0;

  activeHabits.forEach(h => {
    const val = record[h.id] !== undefined ? record[h.id] : (isToday ? (h.current || 0) : 0);
    const target = h.target || (h.type === 'COUNTER' ? 4 : 1);

    // Check if daily goal was fully met
    if (val >= target) {
      fullyMetCount++;
    }

    // Daily consistency percentage:
    // For measurable habits: proportion of target completed, capped at 100%
    // For yes/no habits: 100% when completed, 0% when incomplete
    let habitPct = 0;
    if (h.type === 'COUNTER') {
      habitPct = target > 0 ? Math.min(100, Math.max(0, (val / target) * 100)) : 0;
    } else {
      habitPct = val >= 1 ? 100 : 0;
    }
    sumPercentages += habitPct;
  });

  const percentage = Math.round(sumPercentages / totalScheduled);

  return {
    dateStr,
    totalScheduled,
    fullyMetCount,
    completedCount: fullyMetCount, // for backward compatibility
    percentage: Math.min(100, Math.max(0, percentage))
  };
}

function getHabitMonthlyStats(habit) {
  const currentYear = CurrentDateInfo ? CurrentDateInfo.year : new Date().getFullYear();
  const currentMonth = CurrentDateInfo ? CurrentDateInfo.monthNum : (new Date().getMonth() + 1);
  const currentMonthPrefix = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;

  let startDay = 1;
  if (habit.createdAt && habit.createdAt.startsWith(currentMonthPrefix)) {
    const parts = habit.createdAt.split('-');
    startDay = Math.max(1, Math.min(TODAY_DAY_NUM, parseInt(parts[2], 10) || 1));
  } else if (habit.createdAt && habit.createdAt > TODAY_DATE) {
    return { daysReached: 0, daysScheduled: 0 };
  }

  const daysScheduled = Math.max(1, TODAY_DAY_NUM - startDay + 1);
  const target = habit.target || (habit.type === 'COUNTER' ? 4 : 1);
  let daysReached = 0;

  for (let d = startDay; d <= TODAY_DAY_NUM; d++) {
    const dStr = `${currentMonthPrefix}-${String(d).padStart(2, '0')}`;
    if (d === TODAY_DAY_NUM) {
      if ((habit.current || 0) >= target) {
        daysReached++;
      }
    } else {
      const histVal = (AppState.habitHistory && AppState.habitHistory[dStr] && AppState.habitHistory[dStr][habit.id] !== undefined)
        ? AppState.habitHistory[dStr][habit.id]
        : 0;
      if (histVal >= target) {
        daysReached++;
      }
    }
  }

  return { daysReached, daysScheduled };
}

function getHabitStep(habit) {
  if (habit.type !== 'COUNTER') return 1;
  const unit = (habit.unit || '').trim().toLowerCase();
  const name = (habit.name || '').trim().toLowerCase();

  // Water / hydration (0.5 L step)
  if (unit === 'l' || unit === 'liter' || unit === 'liters' || unit === 'litre' || unit === 'litres' || name.includes('water') || name.includes('hydrat')) {
    return 0.5;
  }
  // Minutes / duration (5 mins step)
  if (unit === 'm' || unit === 'min' || unit === 'mins' || unit === 'minute' || unit === 'minutes') {
    return 5;
  }
  // Hours (0.5 hr step)
  if (unit === 'h' || unit === 'hr' || unit === 'hrs' || unit === 'hour' || unit === 'hours') {
    return 0.5;
  }
  // Distance (0.5 km/mi step)
  if (unit === 'km' || unit === 'mi' || unit === 'miles') {
    return 0.5;
  }
  // Discrete items (default 1 step)
  return 1;
}

function formatHabitAmount(val) {
  if (val === undefined || val === null || isNaN(val)) return '0';
  const rounded = Math.round(Number(val) * 100) / 100;
  if (Number.isInteger(rounded)) {
    return rounded.toString();
  }
  return parseFloat(rounded.toFixed(2)).toString();
}

function getHabitDisplayUnit(habit) {
  const u = (habit?.unit || '').trim();
  if (!u) return '';
  const lower = u.toLowerCase();
  if (lower === 'm' || lower === 'min' || lower === 'mins' || lower === 'minute' || lower === 'minutes') {
    return 'min';
  }
  if (lower === 'l' || lower === 'liter' || lower === 'liters' || lower === 'litre' || lower === 'litres') {
    return 'L';
  }
  if (lower === 'h' || lower === 'hr' || lower === 'hrs' || lower === 'hour' || lower === 'hours') {
    return 'hr';
  }
  return u;
}

function renderHabitConsistencyGraph() {
  const container = document.getElementById('habit-graph-viewport');
  if (!container) return;

  const habits = AppState.habits || [];
  if (habits.length === 0) {
    container.innerHTML = `
      <div class="habit-graph-empty-state">
        <div class="habit-empty-icon">🌱</div>
        <h4 class="chalk-font habit-empty-title">No Habits Planted Yet</h4>
        <p class="habit-empty-subtext">Plant your first daily habit companion below to start charting your daily consistency rhythm.</p>
        <button type="button" class="chalk-btn primary-btn chalk-font btn-plant-first-habit" id="btn-plant-first-habit-graph" style="margin-top: 6px; padding: 6px 14px; font-size: 13px;">
          <i class="fa-solid fa-plus"></i> Plant First Habit
        </button>
      </div>
    `;
    const plantBtn = container.querySelector('#btn-plant-first-habit-graph');
    if (plantBtn) {
      plantBtn.addEventListener('click', () => {
        const addModal = document.getElementById('add-habit-modal');
        if (addModal) addModal.style.display = 'flex';
      });
    }
    updateHabitGraphInspection({
      isToday: true,
      fullDate: new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      stats: { totalScheduled: 0, fullyMetCount: 0, percentage: 0 }
    });
    return;
  }

  const isWeekly = currentHabitGraphRange === 'weekly';
  const days = [];

  if (isWeekly) {
    // Last 7 days up to today
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const dayOfWeek = d.toLocaleDateString('en-US', { weekday: 'short' });
      const dayNum = d.getDate();
      const isToday = i === 0;
      const stats = getHabitCompletionForDate(dateStr);
      days.push({
        dateStr,
        dayNum,
        dayOfWeek,
        isToday,
        isFuture: false,
        label: isToday ? '★ Today' : `${dayOfWeek} ${dayNum}`,
        fullDate: d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        stats
      });
    }
  } else {
    // Current month view: all days of month
    const daysInMonth = CurrentDateInfo ? CurrentDateInfo.daysInMonth : 30;
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${CurrentDateInfo.year}-${String(CurrentDateInfo.monthNum).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isToday = day === TODAY_DAY_NUM;
      const isFuture = day > TODAY_DAY_NUM;
      const stats = isFuture ? { percentage: 0, completedCount: 0, fullyMetCount: 0, totalScheduled: habits.length } : getHabitCompletionForDate(dateStr);
      const d = new Date(CurrentDateInfo.year, CurrentDateInfo.monthNum - 1, day);
      days.push({
        dateStr,
        dayNum: day,
        isToday,
        isFuture,
        label: `D${day}`,
        fullDate: d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        stats
      });
    }
  }

  // Update inspection bar to default (Today)
  const todayEntry = days.find(d => d.isToday) || days[days.length - 1];
  updateHabitGraphInspection(todayEntry);

  const svgWidth = 680;
  const svgHeight = 155; // Compact height to bring habits checklist higher up
  const padLeft = 42;
  const padRight = 20;
  const padTop = 16;
  const padBottom = 26;
  const graphW = svgWidth - padLeft - padRight;
  const graphH = svgHeight - padTop - padBottom;

  // Generate subtle horizontal grid lines & percentage labels
  let gridLinesSVG = '';
  [100, 75, 50, 25, 0].forEach(p => {
    const y = padTop + graphH * (1 - p / 100);
    gridLinesSVG += `
      <line x1="${padLeft}" y1="${y}" x2="${svgWidth - padRight}" y2="${y}" stroke="var(--border-chalk)" stroke-width="1" stroke-dasharray="3,3" opacity="0.28" />
      <text x="${padLeft - 8}" y="${y + 3.5}" font-family="'Inter', sans-serif" font-size="9.5" fill="var(--text-muted)" text-anchor="end" opacity="0.8">${p}%</text>
    `;
  });

  // Calculate coordinates for plotted days
  const numDays = days.length;
  const points = [];

  days.forEach((d, idx) => {
    const x = padLeft + (idx / (numDays - 1)) * graphW;
    const y = padTop + graphH * (1 - (d.stats.percentage || 0) / 100);
    d.x = x;
    d.y = y;
    if (!d.isFuture) {
      points.push({ x, y, day: d });
    }
  });

  // Generate smooth cubic bezier line path
  let pathD = '';
  if (points.length > 0) {
    pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cpX = (p0.x + p1.x) / 2;
      pathD += ` C ${cpX} ${p0.y}, ${cpX} ${p1.y}, ${p1.x} ${p1.y}`;
    }
  }

  // Generate area fill path underneath line
  let areaSVG = '';
  if (points.length > 1) {
    const lastPt = points[points.length - 1];
    const firstPt = points[0];
    const groundY = padTop + graphH;
    const areaD = `${pathD} L ${lastPt.x} ${groundY} L ${firstPt.x} ${groundY} Z`;
    areaSVG = `<path d="${areaD}" fill="url(#habitMintGrad)" />`;
  }

  // Generate X-axis labels
  let xLabelsSVG = '';
  days.forEach(d => {
    let showLabel = false;
    if (isWeekly) {
      showLabel = true;
    } else {
      // Monthly view: D1, D5, D10, D15, D20, D25, D30, and Today
      showLabel = d.dayNum === 1 || d.dayNum % 5 === 0 || d.isToday || d.dayNum === numDays;
    }

    if (showLabel) {
      const labelFill = d.isToday ? 'var(--chalk-amber)' : (d.isFuture ? 'var(--text-muted)' : 'var(--text-primary)');
      const labelWeight = d.isToday ? '700' : '500';
      xLabelsSVG += `
        <text x="${d.x}" y="${svgHeight - 8}" font-family="'Inter', sans-serif" font-size="${isWeekly ? 10.5 : 9.5}" fill="${labelFill}" font-weight="${labelWeight}" text-anchor="middle" opacity="${d.isFuture ? 0.45 : 0.9}">${d.label}</text>
      `;
    } else {
      // Small subtle tick mark
      xLabelsSVG += `
        <line x1="${d.x}" y1="${padTop + graphH}" x2="${d.x}" y2="${padTop + graphH + 4}" stroke="var(--border-chalk)" stroke-width="1" opacity="0.3" />
      `;
    }
  });

  // Future line continuation for monthly view (subtle dotted line to end of month)
  let futurePathSVG = '';
  if (!isWeekly && points.length < days.length) {
    const todayPt = points[points.length - 1];
    const lastDayPt = days[days.length - 1];
    futurePathSVG = `
      <line x1="${todayPt.x}" y1="${todayPt.y}" x2="${lastDayPt.x}" y2="${padTop + graphH}" stroke="var(--border-chalk)" stroke-width="1.3" stroke-dasharray="3,3" opacity="0.3" />
    `;
  }

  // Data point markers
  let pointsSVG = '';
  points.forEach((pt, ptIdx) => {
    const d = pt.day;
    const isToday = d.isToday;
    const halo = isToday ? `
      <circle cx="${pt.x}" cy="${pt.y}" r="7.5" fill="none" stroke="var(--chalk-amber)" stroke-width="1.2" stroke-dasharray="2.5,2" opacity="0.75" />
    ` : '';

    pointsSVG += `
      <g class="graph-point-group ${isToday ? 'is-today' : ''}" data-idx="${ptIdx}" style="cursor: pointer;">
        <circle cx="${pt.x}" cy="${pt.y}" r="14" fill="transparent" class="graph-point-hitbox" />
        ${halo}
        <circle cx="${pt.x}" cy="${pt.y}" r="${isToday ? 5 : 3.8}"
                class="graph-point-circle ${isToday ? 'is-today' : ''}"
                fill="${isToday ? 'var(--chalk-amber)' : 'var(--bg-surface-elevated)'}"
                stroke="${isToday ? 'var(--chalk-amber)' : 'var(--chalk-mint)'}"
                stroke-width="2" />
      </g>
    `;
  });

  container.innerHTML = `
    <svg class="habit-svg-canvas" viewBox="0 0 ${svgWidth} ${svgHeight}" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="habitMintGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--chalk-mint)" stop-opacity="0.25" />
          <stop offset="100%" stop-color="var(--chalk-mint)" stop-opacity="0.0" />
        </linearGradient>
      </defs>

      <!-- Subtle Grid Lines -->
      ${gridLinesSVG}

      <!-- Shaded Area Underneath Curve -->
      ${areaSVG}

      <!-- Future Dotted Guide Line -->
      ${futurePathSVG}

      <!-- Soft Mint-Green Consistency Line -->
      <path class="habit-graph-line" d="${pathD}" fill="none" stroke="var(--chalk-mint)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />

      <!-- X-Axis Day Labels & Ticks -->
      ${xLabelsSVG}

      <!-- Active Cursor Guideline (Dynamic) -->
      <line id="graph-cursor-guide" x1="0" y1="${padTop}" x2="0" y2="${padTop + graphH}" stroke="var(--chalk-mint)" stroke-width="1.2" stroke-dasharray="3,3" opacity="0" />

      <!-- Interactive Data Points -->
      ${pointsSVG}
    </svg>
  `;

  // Attach hover & click listeners to data points
  const pointGroups = container.querySelectorAll('.graph-point-group');
  const cursorGuide = container.querySelector('#graph-cursor-guide');

  pointGroups.forEach(grp => {
    const idx = parseInt(grp.dataset.idx, 10);
    const pt = points[idx];
    if (!pt) return;

    const handleInspect = () => {
      pointGroups.forEach(g => g.classList.remove('is-hovered'));
      grp.classList.add('is-hovered');
      if (cursorGuide) {
        cursorGuide.setAttribute('x1', pt.x);
        cursorGuide.setAttribute('x2', pt.x);
        cursorGuide.style.opacity = '0.55';
      }
      updateHabitGraphInspection(pt.day);
    };

    grp.addEventListener('mouseenter', handleInspect);
    grp.addEventListener('click', () => {
      AudioEngine.playChalkScratch();
      emitDustParticles(grp.getBoundingClientRect());
      handleInspect();
    });
  });

  container.addEventListener('mouseleave', () => {
    pointGroups.forEach(g => g.classList.remove('is-hovered'));
    if (cursorGuide) cursorGuide.style.opacity = '0';
    updateHabitGraphInspection(todayEntry);
  });
}

function updateHabitGraphInspection(dayEntry) {
  if (!dayEntry) return;
  const dateEl = document.getElementById('graph-inspect-date');
  const habitsEl = document.getElementById('graph-inspect-habits');
  const pctEl = document.getElementById('graph-inspect-pct');

  if (dateEl) {
    dateEl.innerText = dayEntry.isToday ? `★ Today (${dayEntry.fullDate})` : dayEntry.fullDate;
  }
  if (habitsEl) {
    if (!dayEntry.stats || dayEntry.stats.totalScheduled === 0) {
      habitsEl.innerText = 'No habits scheduled';
    } else {
      habitsEl.innerText = `${dayEntry.stats.fullyMetCount || 0} of ${dayEntry.stats.totalScheduled} daily goals met`;
    }
  }
  if (pctEl) {
    const pct = dayEntry.stats ? (dayEntry.stats.percentage || 0) : 0;
    pctEl.innerText = `${pct}% consistency`;
    if (pct === 100) {
      pctEl.style.color = 'var(--chalk-mint)';
      pctEl.style.borderColor = 'var(--chalk-mint)';
      pctEl.style.background = 'rgba(6, 214, 160, 0.18)';
    } else if (pct >= 50) {
      pctEl.style.color = 'var(--chalk-amber)';
      pctEl.style.borderColor = 'var(--chalk-amber)';
      pctEl.style.background = 'rgba(255, 209, 102, 0.18)';
    } else {
      pctEl.style.color = 'var(--text-muted)';
      pctEl.style.borderColor = 'var(--border-chalk)';
      pctEl.style.background = 'transparent';
    }
  }
}

function initHabitLedger() {
  ensureHabitHistoryInitialized(AppState);

  const addModal = document.getElementById('add-habit-modal');
  const openAddModalBtn = document.getElementById('btn-add-habit-modal');
  const closeAddModalBtn = document.getElementById('btn-close-habit-modal');
  const cancelAddModalBtn = document.getElementById('btn-cancel-habit');
  const addForm = document.getElementById('new-habit-form');

  const editModal = document.getElementById('edit-habit-modal');
  const closeEditModalBtn = document.getElementById('btn-close-edit-habit-modal');
  const cancelEditModalBtn = document.getElementById('btn-cancel-edit-habit');
  const editForm = document.getElementById('edit-habit-form');
  const deleteHabitBtn = document.getElementById('btn-delete-habit');

  const btnWeekly = document.getElementById('btn-graph-weekly');
  const btnMonthly = document.getElementById('btn-graph-monthly');

  // Toggle Weekly / Monthly
  if (btnWeekly && btnMonthly) {
    btnWeekly.addEventListener('click', () => {
      AudioEngine.playChalkScratch();
      currentHabitGraphRange = 'weekly';
      btnWeekly.classList.add('active');
      btnMonthly.classList.remove('active');
      renderHabitConsistencyGraph();
    });

    btnMonthly.addEventListener('click', () => {
      AudioEngine.playChalkScratch();
      currentHabitGraphRange = 'monthly';
      btnMonthly.classList.add('active');
      btnWeekly.classList.remove('active');
      renderHabitConsistencyGraph();
    });
  }

  // Type change toggles target & unit fields in add modal
  const newTypeSelect = document.getElementById('new-habit-type');
  if (newTypeSelect) {
    newTypeSelect.addEventListener('change', () => {
      const targetGrp = document.getElementById('habit-target-group');
      const unitGrp = document.getElementById('habit-unit-group');
      const isCounter = newTypeSelect.value === 'COUNTER';
      if (targetGrp) targetGrp.style.display = isCounter ? 'block' : 'none';
      if (unitGrp) unitGrp.style.display = isCounter ? 'block' : 'none';
    });
  }

  // Type change toggles target & unit fields in edit modal
  const editTypeSelect = document.getElementById('edit-habit-type');
  if (editTypeSelect) {
    editTypeSelect.addEventListener('change', () => {
      const targetGrp = document.getElementById('edit-habit-target-group');
      const unitGrp = document.getElementById('edit-habit-unit-group');
      const isCounter = editTypeSelect.value === 'COUNTER';
      if (targetGrp) targetGrp.style.display = isCounter ? 'block' : 'none';
      if (unitGrp) unitGrp.style.display = isCounter ? 'block' : 'none';
    });
  }

  // Add Habit Modal Handlers
  if (openAddModalBtn && addModal) openAddModalBtn.addEventListener('click', () => addModal.style.display = 'flex');
  if (closeAddModalBtn && addModal) closeAddModalBtn.addEventListener('click', () => addModal.style.display = 'none');
  if (cancelAddModalBtn && addModal) cancelAddModalBtn.addEventListener('click', () => addModal.style.display = 'none');

  // Add Habit Form Submit
  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('new-habit-name').value.trim();
      const type = document.getElementById('new-habit-type').value;
      const target = type === 'COUNTER' ? (parseFloat(document.getElementById('new-habit-target').value) || 4) : 1;
      const customUnit = (document.getElementById('new-habit-unit')?.value || '').trim();
      const icon = document.getElementById('new-habit-icon').value;

      let unit = '';
      if (type === 'COUNTER') {
        if (customUnit) {
          unit = customUnit;
        } else if (name.toLowerCase().includes('water')) {
          unit = 'L';
        } else if (name.toLowerCase().includes('min') || name.toLowerCase().includes('reading')) {
          unit = 'm';
        } else {
          unit = 'pts';
        }
      }

      const newHabit = {
        id: `h-${Date.now()}`,
        name,
        icon,
        type,
        current: 0,
        target,
        unit,
        createdAt: TODAY_DATE,
        completions: 0
      };

      AppState.habits.push(newHabit);
      if (!AppState.habitHistory) AppState.habitHistory = {};
      if (!AppState.habitHistory[TODAY_DATE]) AppState.habitHistory[TODAY_DATE] = {};
      AppState.habitHistory[TODAY_DATE][newHabit.id] = 0;

      saveState();
      renderHabitLedger();
      renderDashboard();
      addModal.style.display = 'none';
      addForm.reset();
      showToast('Planted new daily habit companion 🌱');
    });
  }

  // Edit Habit Modal Handlers
  if (closeEditModalBtn && editModal) closeEditModalBtn.addEventListener('click', () => editModal.style.display = 'none');
  if (cancelEditModalBtn && editModal) cancelEditModalBtn.addEventListener('click', () => editModal.style.display = 'none');

  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const habitId = document.getElementById('edit-habit-id').value;
      const h = (AppState.habits || []).find(item => item.id === habitId);
      if (!h) return;

      const name = document.getElementById('edit-habit-name').value.trim();
      const type = document.getElementById('edit-habit-type').value;
      const target = type === 'COUNTER' ? (parseFloat(document.getElementById('edit-habit-target').value) || 4) : 1;
      const unit = (document.getElementById('edit-habit-unit')?.value || '').trim();
      const icon = document.getElementById('edit-habit-icon').value;

      h.name = name;
      h.type = type;
      h.target = target;
      h.unit = type === 'COUNTER' ? unit : '';
      h.icon = icon;

      saveState();
      renderHabitLedger();
      renderDashboard();
      if (editModal) editModal.style.display = 'none';
      showToast(`✏️ Updated "${h.name}"!`);
    });
  }

  // Reset Habits Today Button
  const resetHabitsTodayBtn = document.getElementById('btn-reset-habits-today');
  if (resetHabitsTodayBtn) {
    resetHabitsTodayBtn.addEventListener('click', () => {
      AudioEngine.playChalkScratch();
      checkAndPerformDailyHabitReset(AppState, true);
      saveState();
      renderHabitLedger();
      renderDashboard();
      showToast('↺ All habit routines for today have been reset to 0');
    });
  }

  // Reset Single Habit Button in Edit Modal
  const resetSingleHabitBtn = document.getElementById('btn-reset-single-habit');
  if (resetSingleHabitBtn) {
    resetSingleHabitBtn.addEventListener('click', () => {
      const habitId = document.getElementById('edit-habit-id').value;
      const h = (AppState.habits || []).find(item => item.id === habitId);
      if (!h) return;

      AudioEngine.playChalkScratch();
      h.current = 0;
      if (!AppState.habitHistory) AppState.habitHistory = {};
      if (!AppState.habitHistory[TODAY_DATE]) AppState.habitHistory[TODAY_DATE] = {};
      AppState.habitHistory[TODAY_DATE][h.id] = 0;

      saveState();
      renderHabitLedger();
      renderDashboard();
      if (editModal) editModal.style.display = 'none';
      showToast(`↺ Reset today's progress for "${h.name}" to 0`);
    });
  }

  if (deleteHabitBtn) {
    deleteHabitBtn.addEventListener('click', () => {
      const habitId = document.getElementById('edit-habit-id').value;
      const h = (AppState.habits || []).find(item => item.id === habitId);
      if (!h) return;

      if (confirm(`Are you sure you want to delete the habit "${h.name}"?`)) {
        AppState.habits = AppState.habits.filter(item => item.id !== habitId);
        saveState();
        renderHabitLedger();
        renderDashboard();
        if (editModal) editModal.style.display = 'none';
        showToast(`Deleted habit "${h.name}"`);
      }
    });
  }

  renderHabitLedger();
}

function openEditHabitModal(habit) {
  const modal = document.getElementById('edit-habit-modal');
  if (!modal) return;

  document.getElementById('edit-habit-id').value = habit.id;
  document.getElementById('edit-habit-name').value = habit.name;
  document.getElementById('edit-habit-type').value = habit.type;
  document.getElementById('edit-habit-target').value = habit.target || 4;
  document.getElementById('edit-habit-unit').value = habit.unit || '';
  document.getElementById('edit-habit-icon').value = habit.icon || '💧';

  const targetGroup = document.getElementById('edit-habit-target-group');
  const unitGroup = document.getElementById('edit-habit-unit-group');
  if (targetGroup && unitGroup) {
    const isCounter = habit.type === 'COUNTER';
    targetGroup.style.display = isCounter ? 'block' : 'none';
    unitGroup.style.display = isCounter ? 'block' : 'none';
  }

  modal.style.display = 'flex';
}

function renderHabitLedger() {
  checkAndPerformDailyHabitReset(AppState);
  const container = document.getElementById('habit-items-list');
  const progressBar = document.getElementById('habit-progress-bar');
  const progressText = document.getElementById('habit-progress-text');

  // Synchronize today's habit history record
  if (!AppState.habitHistory) AppState.habitHistory = {};
  if (!AppState.habitHistory[TODAY_DATE]) AppState.habitHistory[TODAY_DATE] = {};
  (AppState.habits || []).forEach(h => {
    AppState.habitHistory[TODAY_DATE][h.id] = h.current !== undefined ? h.current : 0;
  });

  // 1. Render the Habit Consistency Line Graph
  renderHabitConsistencyGraph();

  if (!container) return;
  container.innerHTML = '';

  const habits = AppState.habits || [];
  if (habits.length === 0) {
    container.innerHTML = `
      <div class="habit-list-empty-state">
        <span class="habit-empty-sprout">🌿</span>
        <p class="chalk-font habit-empty-msg">Your habit garden is quiet and ready for planting.</p>
        <span class="habit-empty-hint">Track daily hydration, reading, mindfulness or exercise routines.</span>
        <button type="button" class="chalk-btn primary-btn chalk-font btn-plant-first-habit" id="btn-plant-first-habit-list" style="margin-top: 10px; padding: 6px 16px; font-size: 13px;">
          <i class="fa-solid fa-plus"></i> Plant First Habit
        </button>
      </div>
    `;
    const plantBtn = container.querySelector('#btn-plant-first-habit-list');
    if (plantBtn) {
      plantBtn.addEventListener('click', () => {
        const addModal = document.getElementById('add-habit-modal');
        if (addModal) addModal.style.display = 'flex';
      });
    }
    if (progressBar) progressBar.style.width = '0%';
    if (progressText) progressText.innerText = '0% average consistency • No habits active';
    return;
  }

  habits.forEach(h => {
    const { daysReached, daysScheduled } = getHabitMonthlyStats(h);
    h.completions = daysReached;

    const card = document.createElement('div');
    card.className = 'habit-card';
    card.dataset.habitId = h.id;

    const isMeasurable = h.type === 'COUNTER';
    const displayUnit = getHabitDisplayUnit(h);
    const unitSuffix = displayUnit ? ` ${displayUnit}` : '';

    let controlHTML = '';
    let progressBarHTML = '';

    if (isMeasurable) {
      const target = h.target || 4;
      const current = h.current !== undefined ? h.current : 0;
      const step = getHabitStep(h);
      const isComplete = current >= target;
      const isExceeded = current > target;
      const pct = target > 0 ? Math.round((current / target) * 100) : 0;
      const progressPercent = Math.min(100, Math.max(0, pct));

      let statusBadge = '';
      if (isExceeded) {
        const exceededBy = formatHabitAmount(Math.round((current - target) * 100) / 100);
        statusBadge = `<span class="habit-badge-exceeded chalk-font"><i class="fa-solid fa-star"></i> Exceeded (+${exceededBy}${unitSuffix})</span>`;
      } else if (isComplete) {
        statusBadge = `<span class="habit-badge-exceeded chalk-font is-goal-met"><i class="fa-solid fa-check"></i> Goal Met</span>`;
      }

      controlHTML = `
        <div class="habit-action-controls">
          ${statusBadge}
          <!-- Stepper Controls (Minus / Plus) with Clear Progress Display -->
          <div class="habit-stepper-wrap">
            <button type="button" class="habit-step-btn btn-habit-minus" data-habit-id="${h.id}" title="Decrease progress by ${formatHabitAmount(step)}${unitSuffix}" ${current <= 0 ? 'disabled' : ''}>
              <i class="fa-solid fa-minus"></i>
            </button>
            <div class="habit-amount-display chalk-font">
              <span class="amount-val">${formatHabitAmount(current)}</span><span class="amount-target"> / ${formatHabitAmount(target)}${unitSuffix}</span>
            </div>
            <button type="button" class="habit-step-btn btn-habit-plus" data-habit-id="${h.id}" title="Increase progress by ${formatHabitAmount(step)}${unitSuffix}">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      `;

      // Slim horizontal progress bar matching Chalkflow design language
      progressBarHTML = `
        <div class="habit-card-bar-wrap" title="${formatHabitAmount(current)} / ${formatHabitAmount(target)}${unitSuffix} (${pct}%)">
          <div class="habit-card-bar-track">
            <div class="habit-card-bar-fill ${isExceeded ? 'is-exceeded' : (isComplete ? 'is-complete' : '')}" style="width: ${progressPercent}%;"></div>
          </div>
        </div>
      `;
    } else {
      // Simple yes/no habit checkbox
      const isChecked = (h.current || 0) >= 1;
      controlHTML = `
        <div class="habit-action-controls">
          <button type="button" class="habit-chalk-checkbox ${isChecked ? 'is-checked' : ''}" data-habit-id="${h.id}" title="${isChecked ? 'Undo check-in (Mark incomplete)' : 'Mark complete for today'}">
            <div class="chalk-check-box">
              ${isChecked ? '<i class="fa-solid fa-check"></i>' : ''}
            </div>
            <span class="chalk-check-label chalk-font">${isChecked ? 'Completed' : 'Mark Done'}</span>
          </button>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="habit-card-main">
        <div class="habit-info-left">
          <span class="habit-icon">${h.icon || '🌱'}</span>
          <div class="habit-text-wrap">
            <div class="habit-title-row">
              <span class="habit-name">${h.name}</span>
              <button type="button" class="chalk-icon-btn btn-edit-habit" data-habit-id="${h.id}" title="Edit habit details" style="width:22px; height:22px; font-size:10px; opacity:0.75;">
                <i class="fa-solid fa-pen"></i>
              </button>
            </div>
            <div class="habit-tally">
              ${daysReached}/${daysScheduled} days completed this month • ${isMeasurable ? `Goal: ${formatHabitAmount(h.target)}${unitSuffix}` : 'Daily Check-in'}
            </div>
          </div>
        </div>
        ${controlHTML}
      </div>
      ${progressBarHTML}
    `;

    // Edit habit click listener
    const editBtn = card.querySelector('.btn-edit-habit');
    if (editBtn) {
      editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openEditHabitModal(h);
      });
    }

    // Stepper minus listener
    const minusBtn = card.querySelector('.btn-habit-minus');
    if (minusBtn) {
      minusBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        AudioEngine.playChalkScratch();
        emitDustParticles(minusBtn.getBoundingClientRect());
        const step = getHabitStep(h);
        const curr = h.current !== undefined ? h.current : 0;
        if (curr > 0) {
          h.current = Math.max(0, Math.round((curr - step) * 100) / 100);
          AppState.habitHistory[TODAY_DATE][h.id] = h.current;
          saveState();
          renderHabitLedger();
          renderDashboard();
          showToast(`Recorded ${formatHabitAmount(h.current)} / ${formatHabitAmount(h.target)}${unitSuffix} for ${h.name}`);
        }
      });
    }

    // Stepper plus listener
    const plusBtn = card.querySelector('.btn-habit-plus');
    if (plusBtn) {
      plusBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        AudioEngine.playChalkScratch();
        emitDustParticles(plusBtn.getBoundingClientRect());
        const step = getHabitStep(h);
        const curr = h.current !== undefined ? h.current : 0;
        h.current = Math.round((curr + step) * 100) / 100;
        AppState.habitHistory[TODAY_DATE][h.id] = h.current;
        saveState();
        renderHabitLedger();
        renderDashboard();
        if (h.current > h.target) {
          showToast(`🌟 ${h.name}: ${formatHabitAmount(h.current)} / ${formatHabitAmount(h.target)}${unitSuffix} (Target exceeded!)`);
        } else if (h.current === h.target) {
          showToast(`🎉 ${h.name} target reached for today!`);
        } else {
          showToast(`Recorded +${formatHabitAmount(step)}${unitSuffix} for ${h.name}`);
        }
      });
    }

    // Checkbox click listener
    const checkboxBtn = card.querySelector('.habit-chalk-checkbox');
    if (checkboxBtn) {
      checkboxBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        AudioEngine.playChalkScratch();
        emitDustParticles(checkboxBtn.getBoundingClientRect());
        h.current = (h.current >= 1) ? 0 : 1;
        AppState.habitHistory[TODAY_DATE][h.id] = h.current;
        saveState();
        renderHabitLedger();
        renderDashboard();
        showToast(h.current >= 1 ? `✓ Checked off "${h.name}" for today!` : `Marked "${h.name}" incomplete`);
      });
    }

    container.appendChild(card);
  });

  // Update top monthly habit summary meter
  let sumMonthPercent = 0;
  let sumMonthMet = 0;
  let sumMonthScheduled = 0;
  const elapsedDays = Math.max(1, TODAY_DAY_NUM);
  for (let d = 1; d <= elapsedDays; d++) {
    const dStr = `${CurrentDateInfo.year}-${String(CurrentDateInfo.monthNum).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const dStats = getHabitCompletionForDate(dStr);
    sumMonthPercent += dStats.percentage;
    sumMonthMet += dStats.fullyMetCount;
    sumMonthScheduled += dStats.totalScheduled;
  }
  const avgMonthConsistency = Math.round(sumMonthPercent / elapsedDays);

  if (progressBar) progressBar.style.width = `${avgMonthConsistency}%`;
  if (progressText) {
    progressText.innerText = `${avgMonthConsistency}% average consistency this month • ${sumMonthMet} of ${sumMonthScheduled} daily goals met`;
  }
}

// --------------------------------------------------------------------------
// G. DEEP FOCUS & WORKFLOW INTEGRATION
// --------------------------------------------------------------------------
let FocusTimer = {
  mode: 'FOCUS',
  durationSeconds: 25 * 60,
  remainingSeconds: 25 * 60,
  elapsedSeconds: 0,
  creditedMinutes: 0,
  isRunning: false,
  intervalId: null,
  lastTickTimestamp: null,
  currentTaskId: null,
  currentTaskTitle: '',
  returnSurface: 'today-slate',
  returnTaskId: null
};

function creditFocusMinutes(mins, taskId, taskTitle) {
  if (!mins || mins <= 0) return;
  AppState.focusTimeLoggedToday = (AppState.focusTimeLoggedToday || 0) + mins;

  if (!AppState.gardenData[TODAY_DAY_NUM]) {
    AppState.gardenData[TODAY_DAY_NUM] = {
      specimen: BOTANICAL_SPECIMENS[TODAY_DAY_NUM - 1] || 'Sunburst Dahlia',
      tasks: 0,
      planned: 0,
      focus: 0,
      stage: 0
    };
  }
  AppState.gardenData[TODAY_DAY_NUM].focus = AppState.focusTimeLoggedToday;
  if (!AppState.monthlyGardens) AppState.monthlyGardens = {};
  AppState.monthlyGardens[CurrentDateInfo.monthKey] = AppState.gardenData;

  if (!Array.isArray(AppState.focusSessions)) AppState.focusSessions = [];
  AppState.focusSessions.push({
    id: 'fs-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
    date: TODAY_DATE,
    timestamp: new Date().toISOString(),
    durationMins: mins,
    taskId: taskId || null,
    taskTitle: taskTitle || (FocusTimer.mode === 'FOCUS' ? 'Free Mindful Focus' : 'Gentle Rest'),
    mode: FocusTimer.mode
  });

  saveState();
  updateGlobalGrowthMetrics();
}

function openFocusSession(taskId = null) {
  FocusTimer.currentTaskId = taskId;
  FocusTimer.returnSurface = (AppState.activeSurface === 'deep-focus' || !AppState.activeSurface) ? 'today-slate' : AppState.activeSurface;

  const titleDisplay = document.getElementById('focus-task-title-display');
  const badgeDisplay = document.getElementById('focus-task-badge');
  const returnBtnLabel = document.getElementById('btn-focus-return-label');
  const selectEl = document.getElementById('focus-linked-task-select');

  if (taskId) {
    const task = AppState.tasks.find(t => t.id === taskId);
    FocusTimer.currentTaskTitle = task ? task.title : 'Selected Task';
    FocusTimer.returnTaskId = taskId;
    if (badgeDisplay) badgeDisplay.innerHTML = '<i class="fa-solid fa-bullseye"></i> Focusing on';
    if (titleDisplay) titleDisplay.innerText = FocusTimer.currentTaskTitle;
    if (returnBtnLabel) returnBtnLabel.innerText = 'Return to Slate';
    if (selectEl) selectEl.value = taskId;
  } else {
    FocusTimer.currentTaskTitle = 'Free Mindful Focus';
    FocusTimer.returnTaskId = null;
    if (badgeDisplay) badgeDisplay.innerHTML = '<i class="fa-solid fa-brain"></i> Mindful Session';
    if (titleDisplay) titleDisplay.innerText = 'Free Mindful Focus';
    if (returnBtnLabel) returnBtnLabel.innerText = FocusTimer.returnSurface === 'dashboard' ? 'Return to Dashboard' : 'Return to Slate';
    if (selectEl) selectEl.value = '';
  }

  // If timer is not currently running, reset elapsed and set ready
  if (!FocusTimer.isRunning) {
    FocusTimer.elapsedSeconds = 0;
    FocusTimer.creditedMinutes = 0;
    const mins = Math.floor(FocusTimer.durationSeconds / 60) || 25;
    FocusTimer.durationSeconds = mins * 60;
    FocusTimer.remainingSeconds = FocusTimer.durationSeconds;
    const display = document.getElementById('timer-display');
    const ring = document.getElementById('clock-ring-progress');
    const statusLabel = document.getElementById('timer-status-label');
    if (display) display.innerText = `${mins < 10 ? '0' + mins : mins}:00`;
    if (ring) ring.style.strokeDashoffset = '666';
    if (statusLabel) statusLabel.innerText = FocusTimer.mode === 'REST' ? 'Gentle Rest & Recharge' : 'Ready to begin';
  }

  navigateToSurface('deep-focus');
}

function endFocusSession() {
  if (FocusTimer.isRunning) {
    clearInterval(FocusTimer.intervalId);
    FocusTimer.isRunning = false;
    const toggleBtn = document.getElementById('btn-timer-toggle');
    const actionText = document.getElementById('timer-action-text');
    const iconState = document.getElementById('timer-icon-state');
    const liveDot = document.getElementById('focus-live-indicator');
    if (toggleBtn) toggleBtn.classList.remove('running');
    if (actionText) actionText.innerText = 'Begin Session';
    if (iconState) iconState.className = 'fa-solid fa-play';
    if (liveDot) liveDot.style.display = 'none';
  }

  // Finalize any full earned minute accrued prior to ending
  if (FocusTimer.mode === 'FOCUS') {
    const totalEarnedMins = Math.floor(FocusTimer.elapsedSeconds / 60);
    const uncreditedMins = totalEarnedMins - FocusTimer.creditedMinutes;
    if (uncreditedMins > 0) {
      FocusTimer.creditedMinutes += uncreditedMins;
      creditFocusMinutes(uncreditedMins, FocusTimer.currentTaskId, FocusTimer.currentTaskTitle);
    }
  }

  const sessionMins = FocusTimer.creditedMinutes;
  if (sessionMins > 0) {
    showToast(`🌿 Recorded ${sessionMins}m of Deep Focus on "${FocusTimer.currentTaskTitle}". Progress saved!`);
  } else {
    showToast('Focus session ended. No completed minutes recorded.');
  }

  // Exit fullscreen / maximized if active
  if (document.body.classList.contains('focus-maximized')) {
    document.body.classList.remove('focus-maximized');
    const maximizeIcon = document.getElementById('maximize-icon');
    const maximizeLabel = document.getElementById('maximize-label');
    if (maximizeIcon) maximizeIcon.className = 'fa-solid fa-expand';
    if (maximizeLabel) maximizeLabel.innerText = 'Maximize';
  }

  // Stop ambient sound
  AudioEngine.stopAll();
  document.querySelectorAll('.sound-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.sound === 'none');
  });

  // Reset session elapsed state for next fresh session
  FocusTimer.elapsedSeconds = 0;
  FocusTimer.creditedMinutes = 0;
  FocusTimer.remainingSeconds = FocusTimer.durationSeconds;
  const display = document.getElementById('timer-display');
  const ring = document.getElementById('clock-ring-progress');
  const statusLabel = document.getElementById('timer-status-label');
  const mins = Math.floor(FocusTimer.durationSeconds / 60);
  if (display) display.innerText = `${mins < 10 ? '0' + mins : mins}:00`;
  if (ring) ring.style.strokeDashoffset = '666';
  if (statusLabel) statusLabel.innerText = FocusTimer.mode === 'REST' ? 'Gentle Rest & Recharge' : 'Ready to begin';

  const targetSurface = FocusTimer.returnSurface || 'today-slate';
  navigateToSurface(targetSurface);

  if (FocusTimer.returnTaskId && targetSurface === 'today-slate') {
    setTimeout(() => {
      const taskCard = document.querySelector(`[data-task-id="${FocusTimer.returnTaskId}"]`);
      if (taskCard) {
        taskCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        taskCard.classList.add('task-card-highlighted');
        setTimeout(() => taskCard.classList.remove('task-card-highlighted'), 2000);
      }
    }, 150);
  }
}

function initDeepFocus() {
  const display = document.getElementById('timer-display');
  const toggleBtn = document.getElementById('btn-timer-toggle');
  const endBtn = document.getElementById('btn-timer-end');
  const returnBtn = document.getElementById('btn-focus-return');
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
        if (maximizeIcon) maximizeIcon.className = 'fa-solid fa-compress';
        if (maximizeLabel) maximizeLabel.innerText = 'Exit';
        showToast('Entering Distraction-Free Fullscreen Focus 🌿');
      } else {
        if (maximizeIcon) maximizeIcon.className = 'fa-solid fa-expand';
        if (maximizeLabel) maximizeLabel.innerText = 'Maximize';
        showToast('Exited Fullscreen Focus');
      }
    });
  }

  // Return to previous task or dashboard
  if (returnBtn) {
    returnBtn.addEventListener('click', () => {
      endFocusSession();
    });
  }

  // End Session button
  if (endBtn) {
    endBtn.addEventListener('click', () => {
      endFocusSession();
    });
  }

  // Linked Task selector change handler
  const focusSelect = document.getElementById('focus-linked-task-select');
  if (focusSelect) {
    focusSelect.addEventListener('change', () => {
      const selectedId = focusSelect.value;
      const titleDisplay = document.getElementById('focus-task-title-display');
      const badgeDisplay = document.getElementById('focus-task-badge');
      if (selectedId) {
        const task = AppState.tasks.find(t => t.id === selectedId);
        FocusTimer.currentTaskId = selectedId;
        FocusTimer.currentTaskTitle = task ? task.title : 'Selected Task';
        FocusTimer.returnTaskId = selectedId;
        if (badgeDisplay) badgeDisplay.innerHTML = '<i class="fa-solid fa-bullseye"></i> Focusing on';
        if (titleDisplay) titleDisplay.innerText = FocusTimer.currentTaskTitle;
        showToast(`Anchored focus to "${FocusTimer.currentTaskTitle}"`);
      } else {
        FocusTimer.currentTaskId = null;
        FocusTimer.currentTaskTitle = 'Free Mindful Focus';
        FocusTimer.returnTaskId = null;
        if (badgeDisplay) badgeDisplay.innerHTML = '<i class="fa-solid fa-brain"></i> Mindful Session';
        if (titleDisplay) titleDisplay.innerText = 'Free Mindful Focus';
        showToast('Switched to Free Mindful Focus');
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
      if (toggleBtn) toggleBtn.classList.remove('running');
      if (actionText) actionText.innerText = 'Begin Session';
      if (iconState) iconState.className = 'fa-solid fa-play';
      if (liveDot) liveDot.style.display = 'none';
    }

    FocusTimer.mode = newMode;
    FocusTimer.elapsedSeconds = 0;
    FocusTimer.creditedMinutes = 0;

    if (newMode === 'REST') {
      document.body.classList.add('mode-gentle-rest');
      modeBtnRest.classList.add('active');
      modeBtnFocus.classList.remove('active');
      if (statusLabel) statusLabel.innerText = 'Gentle Rest & Recharge';
      setTimerDuration(5);
      showToast('Switched to 5-min Gentle Rest Mode ☕');
    } else {
      document.body.classList.remove('mode-gentle-rest');
      modeBtnFocus.classList.add('active');
      modeBtnRest.classList.remove('active');
      if (statusLabel) statusLabel.innerText = 'Ready for deep immersion';
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

  const minus5Btn = document.getElementById('btn-time-minus-5');
  const minus1Btn = document.getElementById('btn-time-minus-1');
  const plus1Btn = document.getElementById('btn-time-plus-1');
  const plus5Btn = document.getElementById('btn-time-plus-5');

  if (minus5Btn) minus5Btn.addEventListener('click', () => adjustTimerMinutes(-5));
  if (minus1Btn) minus1Btn.addEventListener('click', () => adjustTimerMinutes(-1));
  if (plus1Btn) plus1Btn.addEventListener('click', () => adjustTimerMinutes(1));
  if (plus5Btn) plus5Btn.addEventListener('click', () => adjustTimerMinutes(5));

  function adjustTimerMinutes(delta) {
    if (FocusTimer.isRunning) return;
    const curMins = Math.floor(FocusTimer.durationSeconds / 60);
    const newMins = Math.max(1, Math.min(120, curMins + delta));
    setTimerDuration(newMins);
  }

  function setTimerDuration(mins) {
    FocusTimer.durationSeconds = mins * 60;
    FocusTimer.remainingSeconds = FocusTimer.durationSeconds;
    FocusTimer.elapsedSeconds = 0;
    FocusTimer.creditedMinutes = 0;
    updateDisplay();
  }

  function updateDisplay() {
    const mins = Math.floor(FocusTimer.remainingSeconds / 60);
    const secs = FocusTimer.remainingSeconds % 60;
    if (display) display.innerText = `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;

    if (ring) {
      const totalOffset = 666;
      const progress = FocusTimer.durationSeconds > 0 ? (FocusTimer.durationSeconds - FocusTimer.remainingSeconds) / FocusTimer.durationSeconds : 0;
      ring.style.strokeDashoffset = totalOffset - (progress * totalOffset);
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (FocusTimer.isRunning) {
        // Pause timer
        clearInterval(FocusTimer.intervalId);
        FocusTimer.isRunning = false;
        toggleBtn.classList.remove('running');
        actionText.innerText = 'Resume';
        iconState.className = 'fa-solid fa-play';
        if (liveDot) liveDot.style.display = 'none';
        if (statusLabel) statusLabel.innerText = 'Session paused';
      } else {
        // Start or resume timer
        AudioEngine.initContext();
        FocusTimer.isRunning = true;
        FocusTimer.lastTickTimestamp = Date.now();
        toggleBtn.classList.add('running');
        actionText.innerText = 'Pause';
        iconState.className = 'fa-solid fa-pause';
        if (liveDot) liveDot.style.display = 'inline-block';
        if (statusLabel) statusLabel.innerText = FocusTimer.mode === 'REST' ? 'Resting & recharging...' : 'Deep immersion in progress...';

        FocusTimer.intervalId = setInterval(() => {
          const now = Date.now();
          let deltaSec = Math.floor((now - FocusTimer.lastTickTimestamp) / 1000);
          if (deltaSec >= 1) {
            FocusTimer.lastTickTimestamp = now;
            deltaSec = Math.min(deltaSec, FocusTimer.remainingSeconds);
            FocusTimer.remainingSeconds -= deltaSec;
            FocusTimer.elapsedSeconds += deltaSec;

            // Accurate elapsed minute accumulation:
            // Every full 60 seconds accrued in FOCUS mode earns 1 real minute
            if (FocusTimer.mode === 'FOCUS') {
              const totalEarnedMins = Math.floor(FocusTimer.elapsedSeconds / 60);
              const uncreditedMins = totalEarnedMins - FocusTimer.creditedMinutes;
              if (uncreditedMins > 0) {
                FocusTimer.creditedMinutes += uncreditedMins;
                creditFocusMinutes(uncreditedMins, FocusTimer.currentTaskId, FocusTimer.currentTaskTitle);
              }
            }

            updateDisplay();

            if (FocusTimer.remainingSeconds <= 0) {
              clearInterval(FocusTimer.intervalId);
              FocusTimer.isRunning = false;
              toggleBtn.classList.remove('running');
              actionText.innerText = 'Begin Session';
              iconState.className = 'fa-solid fa-play';
              if (liveDot) liveDot.style.display = 'none';
              if (statusLabel) statusLabel.innerText = 'Session complete!';

              if (FocusTimer.mode === 'FOCUS') {
                showToast(`🌸 Focus complete! ${FocusTimer.creditedMinutes}m credited to today's garden flower.`);
              } else {
                showToast('🌱 Gentle rest complete. Mind refreshed & centered!');
              }
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
      FocusTimer.elapsedSeconds = 0;
      FocusTimer.creditedMinutes = 0;
      if (toggleBtn) toggleBtn.classList.remove('running');
      if (actionText) actionText.innerText = 'Begin Session';
      if (iconState) iconState.className = 'fa-solid fa-play';
      if (liveDot) liveDot.style.display = 'none';
      if (statusLabel) statusLabel.innerText = FocusTimer.mode === 'REST' ? 'Gentle Rest & Recharge' : 'Ready to begin';
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

  const currentVal = select.value || FocusTimer.currentTaskId || '';
  select.innerHTML = '<option value="">-- Free Focus (No specific task) --</option>';

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
function getStageEvolutionAnimClass(stage) {
  switch (stage) {
    case 1: return 'anim-emerge-sprout';
    case 2: return 'anim-grow-stem';
    case 3: return 'anim-swell-bud';
    case 4: return 'anim-unfurl-bloom';
    default: return '';
  }
}

function updateGlobalGrowthMetrics() {
  const todayTasks = AppState.tasks.filter(t => t.targetDate === TODAY_DATE);
  const activeCompleted = todayTasks.filter(t => t.status === 'COMPLETED').length;
  const dayGarden = AppState.gardenData[TODAY_DAY_NUM] || {};
  const erasedCount = dayGarden.erasedTasksCount || 0;
  const completedCount = activeCompleted + erasedCount;
  const activePlanned = todayTasks.length + erasedCount;

  // Genuine baseline planned: track the highest planned count ever recorded today
  // to prevent accidental or intentional task deletions from falsely triggering Full Bloom
  dayGarden.highestPlannedCount = Math.max(dayGarden.highestPlannedCount || 0, activePlanned, dayGarden.planned || 0);
  const genuineBaseline = dayGarden.highestPlannedCount;
  const effectivePlanned = Math.max(activePlanned, genuineBaseline, completedCount);
  const focusMins = AppState.focusTimeLoggedToday || 0;

  // 1. Separate Progress Garden & Habit Ledger:
  // Botanical growth depends ONLY on completed daily tasks and Deep Focus minutes.
  // Habit rhythms are tracked independently in Habit Ledger.
  let calculatedStage = 0;
  const allTasksDone = activePlanned > 0 && completedCount >= activePlanned && completedCount >= genuineBaseline;

  if (completedCount === 0 && focusMins === 0) {
    calculatedStage = 0; // Stage 0: Resting Seed
  } else if (allTasksDone && focusMins >= 45) {
    // Stage 4: Full Bloom strictly requires BOTH: 100% planned tasks completed AND >= 45m genuine focus recorded today.
    // Completing all tasks without focus must not bloom; reaching 45m focus without all tasks must not bloom.
    calculatedStage = 4;
  } else if (
    allTasksDone ||
    focusMins >= 45 ||
    (activePlanned > 0 && (completedCount / activePlanned) >= 0.6) ||
    completedCount >= 3 ||
    (completedCount >= 2 && focusMins >= 25)
  ) {
    // Stage 3: Swelling Bud (Significant progress; or one condition for bloom met but not both)
    calculatedStage = 3;
  } else if (
    completedCount >= 2 ||
    focusMins >= 25 ||
    (completedCount >= 1 && focusMins >= 10)
  ) {
    // Stage 2: Branching Stem (Further progress)
    calculatedStage = 2;
  } else {
    // Stage 1: The Sprout (First momentum: at least 1 task completed or any focus > 0)
    calculatedStage = 1;
  }

  // 2. Strict Full Bloom Preservation Policy:
  // Stage 4 (Full Bloom) is strictly guarded: it CANNOT be grandfathered if current conditions don't satisfy it (both 100% tasks done and focusMins >= 45).
  // If either condition is missing, capped at Stage 3 (Swelling Bud).
  const previousStage = dayGarden.stage ?? 0;
  let earnedStage;
  if (calculatedStage === 4) {
    earnedStage = 4;
    dayGarden.highestEarnedStage = 4;
  } else {
    const cappedHistorical = Math.min(3, dayGarden.highestEarnedStage || 0, previousStage);
    earnedStage = Math.max(calculatedStage, cappedHistorical);
    dayGarden.highestEarnedStage = earnedStage;
  }
  const hasGrown = earnedStage > previousStage;

  if (!AppState.gardenData[TODAY_DAY_NUM]) {
    AppState.gardenData[TODAY_DAY_NUM] = { specimen: BOTANICAL_SPECIMENS[TODAY_DAY_NUM - 1] || 'Sunburst Dahlia', tasks: 0, planned: 0, focus: 0, stage: 0 };
  }
  AppState.gardenData[TODAY_DAY_NUM].tasks = completedCount;
  AppState.gardenData[TODAY_DAY_NUM].planned = effectivePlanned;
  AppState.gardenData[TODAY_DAY_NUM].focus = focusMins;
  AppState.gardenData[TODAY_DAY_NUM].stage = earnedStage;
  AppState.gardenData[TODAY_DAY_NUM].highestEarnedStage = earnedStage;
  AppState.gardenData[TODAY_DAY_NUM].highestPlannedCount = genuineBaseline;

  if (!AppState.monthlyGardens) AppState.monthlyGardens = {};
  AppState.monthlyGardens[CurrentDateInfo.monthKey] = AppState.gardenData;

  saveState();

  const stageNames = ['Resting Seed', 'The Sprout', 'Branching Stem', 'Swelling Bud', 'Full Bloom'];

  const topIcon = document.getElementById('top-flower-icon');
  const topStage = document.getElementById('top-growth-stage');
  const topMeta = document.getElementById('top-growth-meta');
  const finalStage = AppState.gardenData[TODAY_DAY_NUM].stage;
  if (topIcon) topIcon.innerHTML = ChalkBotanicals.getBotanicalSVG(finalStage, 28, TODAY_DAY_NUM, '', AppState.gardenData[TODAY_DAY_NUM]?.specimen);
  if (topStage) topStage.innerText = stageNames[finalStage];
  if (topMeta) topMeta.innerText = `${completedCount} tasks • ${focusMins}m focus`;

  // If a new growth stage was reached, set the active evolution class before rendering
  if (hasGrown && !isSystemInitializing) {
    activeStageEvolutionDay = TODAY_DAY_NUM;
    activeStageEvolutionClass = getStageEvolutionAnimClass(earnedStage);
  }

  renderDashboard();
  renderProgressGarden();

  // 3. Trigger Botanical Organic Growth Animation when genuine new stage is achieved
  if (hasGrown && !isSystemInitializing) {
    triggerBotanicalGrowthAnimation(earnedStage);
  }
}

function triggerBotanicalGrowthAnimation(newStage) {
  AudioEngine.playChalkScratch();

  const dashVisual = document.getElementById('dash-today-flower-visual');
  if (dashVisual) {
    dashVisual.classList.remove('plant-growth-anim');
    void dashVisual.offsetWidth; // trigger reflow
    dashVisual.classList.add('plant-growth-anim');
  }

  const topIcon = document.getElementById('top-flower-icon');
  if (topIcon) {
    topIcon.classList.remove('plant-growth-anim');
    void topIcon.offsetWidth;
    topIcon.classList.add('plant-growth-anim');
  }

  const todayTile = document.querySelector('.calendar-day-tile.is-today');
  if (todayTile) {
    todayTile.classList.add('tile-growth-pulse');
  }

  const stageNames = ['Resting Seed', 'The Sprout', 'Branching Stem', 'Swelling Bud', 'Full Bloom'];
  showToast(`🌱 Botanical Growth: Reached ${stageNames[newStage] || 'new stage'}!`);

  // Clear active stage evolution after physical growth finishes (2.8s) and transition smoothly to living breeze sway
  setTimeout(() => {
    activeStageEvolutionDay = null;
    activeStageEvolutionClass = '';
    const todayHotspot = document.getElementById(`plant-hotspot-d${TODAY_DAY_NUM}`);
    if (todayHotspot) {
      todayHotspot.classList.remove('anim-emerge-sprout', 'anim-grow-stem', 'anim-swell-bud', 'anim-unfurl-bloom');
      todayHotspot.classList.add('is-wind-swaying');
    }
    if (dashVisual) dashVisual.classList.remove('plant-growth-anim');
    if (topIcon) topIcon.classList.remove('plant-growth-anim');
    if (todayTile) todayTile.classList.remove('tile-growth-pulse');
  }, 2800);
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
