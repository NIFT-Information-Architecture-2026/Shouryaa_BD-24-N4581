/**
 * CHALKFLOW — Slow Productivity & Botanical Focus Engine
 * Handcrafted Chalk Botanical Growth Stage Engine
 * Modeled directly on the 5 Reference Illustrations:
 * 1. Seed & Taproots (Image 2)
 * 2. Cotyledon Sprout on Soil Mound (Image 1 & 3)
 * 3. Branching Foliage & Stems (Image 4)
 * 4. Slender Swelling Bud (Image 4 apex)
 * 5. Full Hatched Botanical Bloom (Image 5)
 */

// ==========================================================================
// 1. CHALK BOTANICAL SVG ARTWORK RENDERER (THE 5 GROWTH STAGES)
// ==========================================================================
const ChalkBotanicals = {

  // STAGE 0: The Resting Seed & Taproots (Reference Image 2)
  renderRestingSeed(size = 36) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
        <!-- Soil Baseline & Hatching -->
        <path d="M 15 72 Q 50 68 85 72" stroke="var(--border-chalk)" stroke-width="2" stroke-dasharray="4,3" fill="none" />
        <path d="M 25 76 Q 50 73 75 76" stroke="var(--border-chalk)" stroke-width="1.2" stroke-dasharray="2,4" fill="none" opacity="0.6" />
        
        <!-- Germinating Seed Pod (Textured Chalk Contour & Shading) -->
        <circle cx="50" cy="50" r="16" fill="var(--bg-surface-elevated)" stroke="#FAF0CA" stroke-width="2.2" stroke-dasharray="25,1.5" />
        <path d="M 42 44 Q 50 40 56 46" stroke="#FAF0CA" stroke-width="1.2" fill="none" opacity="0.8" />
        <circle cx="50" cy="50" r="11" fill="none" stroke="var(--chalk-amber)" stroke-width="1" stroke-dasharray="3,2" opacity="0.7" />

        <!-- Exploratory Downward Taproots -->
        <path d="M 50 66 Q 50 78 48 92" stroke="var(--chalk-amber)" stroke-width="2.2" stroke-linecap="round" fill="none" />
        <path d="M 49 72 Q 40 76 34 82" stroke="var(--chalk-amber)" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <path d="M 50 74 Q 60 78 66 84" stroke="var(--chalk-amber)" stroke-width="1.8" stroke-linecap="round" fill="none" />
        <path d="M 48 80 Q 42 84 38 90" stroke="var(--chalk-amber)" stroke-width="1.5" stroke-linecap="round" fill="none" />

        <!-- First Baby Leaf Shoot Peeking Out (Top) -->
        <path d="M 58 38 Q 72 26 66 18 Q 54 24 54 36 Z" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
        <path d="M 56 32 L 64 22" stroke="var(--chalk-mint)" stroke-width="1" fill="none" />
      </svg>
    `;
  },

  // STAGE 1: The Cotyledon Sprout on Soil Mound (Reference Images 1 & 3)
  renderFirstSprout(size = 36) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
        <!-- Soil Mound with Chalk Cross-Hatching (Image 1 Style) -->
        <path d="M 10 82 Q 50 80 90 82" stroke="var(--text-primary)" stroke-width="2" stroke-dasharray="5,3" fill="none" opacity="0.6" />
        <path d="M 32 82 Q 50 64 68 82 Z" fill="var(--bg-surface-elevated)" stroke="var(--text-primary)" stroke-width="2" />
        <!-- Mound chalk shading lines -->
        <path d="M 36 80 L 64 72 M 38 76 L 62 68 M 42 72 L 58 66" stroke="var(--border-chalk)" stroke-width="1.2" opacity="0.75" />

        <!-- Curved Baby Sprout Stem -->
        <path d="M 50 66 Q 52 50 48 38" stroke="#FAF0CA" stroke-width="2.6" stroke-linecap="round" fill="none" />
        
        <!-- Two Wide Heart-Shaped Cotyledon Leaves (Image 1 & 3 Style) -->
        <!-- Left Leaf -->
        <path d="M 48 38 C 30 32 18 36 20 48 C 24 54 38 52 48 40 Z" fill="none" stroke="#FAF0CA" stroke-width="2.2" />
        <path d="M 48 39 Q 34 42 22 46" stroke="var(--chalk-mint)" stroke-width="1.2" fill="none" opacity="0.8" />
        
        <!-- Right Leaf -->
        <path d="M 48 38 C 66 32 78 36 76 48 C 72 54 58 52 48 40 Z" fill="none" stroke="#FAF0CA" stroke-width="2.2" />
        <path d="M 48 39 Q 62 42 74 46" stroke="var(--chalk-mint)" stroke-width="1.2" fill="none" opacity="0.8" />
      </svg>
    `;
  },

  // STAGE 2: Branching Foliage & Stems (Reference Image 4)
  renderBranchingStem(size = 38) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
        <!-- Ground Line -->
        <path d="M 20 90 Q 50 88 80 90" stroke="var(--border-chalk)" stroke-width="1.5" stroke-dasharray="4,3" fill="none" />

        <!-- Slender Curving Main Stalk -->
        <path d="M 50 90 Q 46 65 50 24" stroke="var(--chalk-mint)" stroke-width="2.2" stroke-linecap="round" fill="none" />

        <!-- Alternating Elongated Willow/Sage Leaves (Image 4 Style) -->
        <!-- Bottom Left Leaf -->
        <path d="M 48 76 Q 25 70 12 58 Q 30 60 47 70" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
        <!-- Bottom Right Leaf -->
        <path d="M 49 66 Q 72 58 88 50 Q 70 54 50 60" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
        
        <!-- Mid Left Leaf -->
        <path d="M 49 52 Q 32 40 34 26 Q 42 36 50 44" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
        <!-- Mid Right Leaf -->
        <path d="M 50 42 Q 68 32 66 18 Q 58 28 50 36" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />

        <!-- Small Side Bud -->
        <path d="M 50 66 Q 64 54 62 40" stroke="var(--chalk-mint)" stroke-width="1.5" fill="none" />
        <path d="M 62 40 C 58 35 60 28 64 26 C 66 30 66 36 62 40 Z" fill="none" stroke="var(--chalk-amber)" stroke-width="1.4" />
      </svg>
    `;
  },

  // STAGE 3: Swelling Teardrop Floral Bud (Reference Image 4 Apex)
  renderSwellingBud(size = 40) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
        <!-- Ground Line -->
        <path d="M 25 92 Q 50 90 75 92" stroke="var(--border-chalk)" stroke-width="1.5" fill="none" />

        <!-- Elegant Central Stem -->
        <path d="M 50 90 Q 48 60 50 34" stroke="var(--chalk-mint)" stroke-width="2.4" stroke-linecap="round" fill="none" />

        <!-- Lateral Leaves -->
        <path d="M 49 72 Q 28 62 20 50 Q 36 54 49 64" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
        <path d="M 50 60 Q 72 50 80 38 Q 64 44 50 54" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />
        <path d="M 49 46 Q 36 34 38 22 Q 44 30 50 40" fill="none" stroke="var(--chalk-mint)" stroke-width="1.8" />

        <!-- Swelling Teardrop Chalk Bud at Apex (Image 4 Apex Style) -->
        <g transform="translate(50, 34)">
          <!-- Calyx base -->
          <path d="M -5 0 Q 0 -6 5 0 Z" fill="var(--chalk-mint)" stroke="var(--chalk-mint)" stroke-width="1" />
          <!-- Bud petals twisting upward -->
          <path d="M -5 0 C -10 -12 -6 -24 0 -28 C 4 -20 2 -8 0 0 Z" fill="var(--bg-surface-elevated)" stroke="#E8A4C8" stroke-width="1.8" />
          <path d="M 5 0 C 10 -12 6 -24 0 -28 C -4 -20 -2 -8 0 0 Z" fill="var(--bg-surface-elevated)" stroke="#E8A4C8" stroke-width="1.8" />
          <path d="M 0 0 Q 0 -18 0 -27" stroke="#FAF0CA" stroke-width="1.2" fill="none" />
        </g>
      </svg>
    `;
  },

  // STAGE 4: Full Hatched Botanical Chalk Bloom (Reference Image 5 & 4)
  renderFullBloom(size = 44, day = 1) {
    if (day % 2 === 0) {
      // Style A: Botanical Anemone / Peony (Matching Reference Image 5 exactly!)
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
          <!-- Central Stately Stem -->
          <path d="M 50 96 L 50 45" stroke="#FAF0CA" stroke-width="2.5" stroke-linecap="round" fill="none" />

          <!-- Serrated Leaves with Fine Linear Chalk Hatching (Image 5 Style) -->
          <!-- Lower Left Leaf -->
          <path d="M 50 80 Q 32 75 22 66 Q 34 62 42 66 Q 36 58 50 68" fill="none" stroke="#FAF0CA" stroke-width="1.5" />
          <path d="M 48 76 L 30 68 M 46 72 L 36 64" stroke="#FAF0CA" stroke-width="0.8" opacity="0.75" />

          <!-- Lower Right Leaf -->
          <path d="M 50 80 Q 68 75 78 66 Q 66 62 58 66 Q 64 58 50 68" fill="none" stroke="#FAF0CA" stroke-width="1.5" />
          <path d="M 52 76 L 70 68 M 54 72 L 64 64" stroke="#FAF0CA" stroke-width="0.8" opacity="0.75" />

          <!-- Mid Left Leaf -->
          <path d="M 50 60 Q 34 52 26 42 Q 38 40 44 46 Q 38 34 50 48" fill="none" stroke="#FAF0CA" stroke-width="1.5" />
          <path d="M 48 56 L 34 46 M 46 52 L 38 44" stroke="#FAF0CA" stroke-width="0.8" opacity="0.75" />

          <!-- Mid Right Leaf -->
          <path d="M 50 60 Q 66 52 74 42 Q 62 40 56 46 Q 62 34 50 48" fill="none" stroke="#FAF0CA" stroke-width="1.5" />
          <path d="M 52 56 L 66 46 M 54 52 L 62 44" stroke="#FAF0CA" stroke-width="0.8" opacity="0.75" />

          <!-- Multi-Layered Hatched Floral Bloom Crown (Image 5) -->
          <g transform="translate(50, 24)">
            <!-- Outer Petals Ring -->
            <path d="M 0 0 C -22 -4 -30 -22 -14 -28 C -4 -22 -4 -8 0 0 Z" fill="var(--bg-surface)" stroke="#FAF0CA" stroke-width="1.6" />
            <path d="M 0 0 C 22 -4 30 -22 14 -28 C 4 -22 4 -8 0 0 Z" fill="var(--bg-surface)" stroke="#FAF0CA" stroke-width="1.6" />
            <path d="M 0 0 C -12 -18 -18 -32 0 -34 C 18 -32 12 -18 0 0 Z" fill="var(--bg-surface)" stroke="#FAF0CA" stroke-width="1.6" />
            
            <!-- Fine Linear Shading on Petals -->
            <path d="M -10 -4 L -18 -20 M -6 -6 L -10 -26 M 6 -6 L 10 -26 M 10 -4 L 18 -20 M 0 -8 L 0 -30" stroke="#FAF0CA" stroke-width="0.7" opacity="0.7" />

            <!-- Front Petal Cups -->
            <path d="M -12 2 C -16 -8 -8 -16 0 -14 C 8 -16 16 -8 12 2 Z" fill="var(--bg-surface-elevated)" stroke="#FAF0CA" stroke-width="1.6" />
            
            <!-- Center Stippled Stamen Ring -->
            <circle cx="0" cy="-8" r="4.5" fill="none" stroke="var(--chalk-amber)" stroke-width="1" stroke-dasharray="2,1.5" />
            <circle cx="-1.5" cy="-8" r="0.8" fill="var(--chalk-amber)" />
            <circle cx="1.5" cy="-8" r="0.8" fill="var(--chalk-amber)" />
            <circle cx="0" cy="-6.5" r="0.8" fill="var(--chalk-amber)" />
            <circle cx="0" cy="-9.5" r="0.8" fill="var(--chalk-amber)" />
          </g>
        </svg>
      `;
    } else {
      // Style B: Layered Crocus / Wild Lily Bloom (Reference Image 4)
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 100 100" class="flower-chalk-svg">
          <!-- Stem & Side Shoots -->
          <path d="M 50 65 Q 52 82 54 96" stroke="var(--chalk-mint)" stroke-width="2.6" stroke-linecap="round" fill="none" />
          <path d="M 52 75 Q 35 78 20 85" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" fill="none" />
          <path d="M 52 72 Q 68 76 82 82" stroke="var(--chalk-mint)" stroke-width="2" stroke-linecap="round" fill="none" />
          
          <!-- Back Lavender Wing Petals -->
          <path d="M 50 55 C 30 40 22 20 40 12 C 48 18 52 35 50 55 Z" fill="#D4B2D8" opacity="0.85" stroke="var(--border-chalk)" stroke-width="0.8" />
          <path d="M 50 55 C 70 40 78 20 60 12 C 52 18 48 35 50 55 Z" fill="#D4B2D8" opacity="0.85" stroke="var(--border-chalk)" stroke-width="0.8" />
          <path d="M 50 55 C 45 30 46 8 50 6 C 54 8 55 30 50 55 Z" fill="#E8A4C8" opacity="0.9" stroke="var(--border-chalk)" stroke-width="0.8" />
          
          <!-- Lateral Wing Petals -->
          <path d="M 50 58 C 25 50 10 35 18 25 C 28 25 40 42 50 58 Z" fill="#E8ECEF" opacity="0.9" />
          <path d="M 50 58 C 75 50 90 35 82 25 C 72 25 60 42 50 58 Z" fill="#E8ECEF" opacity="0.9" />

          <!-- Front Center White Petals with Linear Hatching -->
          <path d="M 50 60 C 36 50 32 30 45 22 C 52 28 54 48 50 60 Z" fill="#FFFFFF" opacity="0.95" stroke="#D4B2D8" stroke-width="0.8" />
          <path d="M 50 60 C 64 50 68 30 55 22 C 48 28 46 48 50 60 Z" fill="#FFFFFF" opacity="0.95" stroke="#D4B2D8" stroke-width="0.8" />

          <!-- Fine Chalk Petal Vein Shading -->
          <path d="M 44 48 L 40 32 M 56 48 L 60 32 M 50 48 L 50 24" stroke="#D4B2D8" stroke-width="0.8" opacity="0.8" />

          <!-- Golden Stamens & Pistils -->
          <path d="M 50 48 L 47 32 M 50 48 L 50 30 M 50 48 L 53 32" stroke="var(--chalk-amber)" stroke-width="2" stroke-linecap="round" />
          <circle cx="47" cy="31" r="2" fill="var(--chalk-amber)" />
          <circle cx="50" cy="29" r="2.2" fill="var(--chalk-amber)" />
          <circle cx="53" cy="31" r="2" fill="var(--chalk-amber)" />
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
// 2. DATA STATE & LOCAL STORAGE PERSISTENCE
// ==========================================================================
const STORAGE_KEY = 'chalkflow_state_v4';

const DEFAULT_STATE = {
  theme: 'theme-dark-slate',
  activeSurface: 'today-slate',
  tasks: [
    {
      id: 'task-1',
      title: 'Complete CAT Quantitative Mock #4 (Algebra & Arithmetic)',
      priority: 'HIGH',
      category: 'ACADEMIC',
      estTime: 60,
      targetDate: '2026-10-08',
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
      targetDate: '2026-10-08',
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
      targetDate: '2026-10-08',
      status: 'COMPLETED',
      isCarriedOver: false,
      subtasks: [],
      isExpanded: false
    },
    {
      id: 'task-4',
      title: 'Accessory Design Jury Presentation Slide Deck',
      priority: 'HIGH',
      category: 'ACADEMIC',
      estTime: 90,
      targetDate: '2026-10-09',
      status: 'TODO',
      isCarriedOver: false,
      subtasks: [],
      isExpanded: false
    },
    {
      id: 'task-5',
      title: 'Read Chapter 5: 20th Century Textile Movements',
      priority: 'MEDIUM',
      category: 'ACADEMIC',
      estTime: 30,
      targetDate: '2026-10-10',
      status: 'TODO',
      isCarriedOver: false,
      subtasks: [],
      isExpanded: false
    }
  ],
  habits: [
    { id: 'h-1', name: 'Drink 4 Liters Water', icon: '💧', type: 'COUNTER', current: 2, target: 4, unit: 'L', completions: 7 },
    { id: 'h-2', name: '30 Mins Design Reading', icon: '📖', type: 'COUNTER', current: 15, target: 30, unit: 'm', completions: 6 },
    { id: 'h-3', name: 'Morning Sketchbook Drill', icon: '🎨', type: 'CHECK', current: 1, target: 1, unit: '', completions: 5 },
    { id: 'h-4', name: 'Evening Walk / Rest', icon: '🌿', type: 'CHECK', current: 1, target: 1, unit: '', completions: 6 }
  ],
  focusTimeLoggedToday: 45,
  gardenData: {
    1: { specimen: 'Wild Crocus', tasks: 5, planned: 5, focus: 110, stage: 4 },
    2: { specimen: 'Golden Buttercup', tasks: 3, planned: 4, focus: 60, stage: 2 },
    3: { specimen: 'Dormant Soil', tasks: 0, planned: 0, focus: 0, stage: 0 },
    4: { specimen: 'Sweet Violet', tasks: 6, planned: 6, focus: 120, stage: 4 },
    5: { specimen: 'Alpine Aster', tasks: 5, planned: 5, focus: 95, stage: 4 },
    6: { specimen: 'Heather Blossom', tasks: 2, planned: 3, focus: 40, stage: 1 },
    7: { specimen: 'Autumn Lily', tasks: 5, planned: 5, focus: 100, stage: 4 },
    8: { specimen: 'Meadow Daisy', tasks: 1, planned: 3, focus: 45, stage: 1 }
  }
};

let AppState = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_STATE;
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
  initNavigation();
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
    'today-slate': "Today's Slate",
    'upcoming-tasks': 'Upcoming Tasks',
    'progress-garden': 'Progress Garden',
    'habit-ledger': 'Habit Ledger',
    'deep-focus': 'Deep Focus Studio'
  };

  navItems.forEach(item => item.classList.toggle('active', item.dataset.surface === surfaceId));
  views.forEach(v => v.classList.toggle('active', v.id === `view-${surfaceId}`));
  if (pageTitle) pageTitle.innerText = titles[surfaceId] || "Today's Slate";
  saveState();

  if (surfaceId === 'progress-garden') renderProgressGarden();
  if (surfaceId === 'habit-ledger') renderHabitLedger();

  if (surfaceId === 'deep-focus' && linkedTaskId) {
    const focusSelect = document.getElementById('focus-linked-task-select');
    if (focusSelect) {
      focusSelect.value = linkedTaskId;
      showToast('Task anchored to Deep Focus Studio');
    }
  }
}

function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(btn => {
    btn.addEventListener('click', () => navigateToSurface(btn.dataset.surface));
  });
  navigateToSurface(AppState.activeSurface || 'today-slate');
}

// --------------------------------------------------------------------------
// C. TODAY'S SLATE CONTROLLER
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
        targetDate: '2026-10-08',
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
      const completedCount = AppState.tasks.filter(t => t.status === 'COMPLETED' && t.targetDate === '2026-10-08').length;
      if (completedCount === 0) {
        showToast('No completed tasks to erase.');
        return;
      }

      AudioEngine.playFeltEraserSweep();
      emitDustParticles(eraseCompletedBtn.getBoundingClientRect());

      AppState.tasks = AppState.tasks.filter(t => !(t.status === 'COMPLETED' && t.targetDate === '2026-10-08'));
      saveState();
      renderTodaySlate();
      updateGlobalGrowthMetrics();
      showToast('Completed tasks erased into resting soil ✨');
    });
  }

  renderTodaySlate();
}

function renderTodaySlate() {
  const topPriorityList = document.getElementById('top-priority-list');
  const generalTasksList = document.getElementById('general-tasks-list');
  const badge = document.getElementById('today-pending-badge');
  const topPriorityWrapper = document.getElementById('top-priority-container');

  if (!topPriorityList || !generalTasksList) return;

  topPriorityList.innerHTML = '';
  generalTasksList.innerHTML = '';

  const todayTasks = AppState.tasks.filter(t => t.targetDate === '2026-10-08');
  const pendingCount = todayTasks.filter(t => t.status !== 'COMPLETED').length;
  if (badge) badge.innerText = pendingCount;

  const topPriorityTask = todayTasks.find(t => t.priority === 'HIGH' && t.status !== 'COMPLETED') || todayTasks.find(t => t.priority === 'HIGH');
  const generalTasks = todayTasks.filter(t => t !== topPriorityTask);

  if (topPriorityTask) {
    topPriorityWrapper.style.display = 'block';
    topPriorityList.appendChild(createTaskCardElement(topPriorityTask, true));
  } else {
    topPriorityWrapper.style.display = 'none';
  }

  if (generalTasks.length === 0 && !topPriorityTask) {
    generalTasksList.innerHTML = `
      <div class="chalk-card" style="text-align:center; padding: 24px 16px;">
        <div style="display:flex; justify-content:center; margin-bottom:6px;">${ChalkBotanicals.renderRestingSeed(36)}</div>
        <h4 class="chalk-font" style="font-size: 15px;">A Clean Slate</h4>
        <p style="color: var(--text-muted); font-size: 12px; margin-top: 2px;">Write a task above or enjoy this quiet moment of rest.</p>
      </div>
    `;
  } else {
    generalTasks.forEach(t => {
      generalTasksList.appendChild(createTaskCardElement(t, false));
    });
  }

  populateFocusTaskDropdown();
}

function createTaskCardElement(task, isTop) {
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
      
      <div class="task-body-interactive" data-toggle-task="${task.id}" title="Click to view/add micro-steps">
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
        <button class="focus-task-btn chalk-font" title="Start Deep Focus with this task" data-focus-task="${task.id}">
          <i class="fa-solid fa-brain"></i> Focus
        </button>
        <button class="icon-action-btn delete-btn" title="Erase task" data-task-id="${task.id}">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
    ${subtasksDrawerHTML}
  `;

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

  const bodyToggle = card.querySelector('.task-body-interactive');
  bodyToggle.addEventListener('click', () => {
    task.isExpanded = !task.isExpanded;
    saveState();
    renderTodaySlate();
  });

  const focusBtn = card.querySelector('[data-focus-task]');
  focusBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateToSurface('deep-focus', task.id);
  });

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
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('upcoming-title-input').value.trim();
      const targetDate = document.getElementById('upcoming-date-input').value;
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

  const upcomingTasks = AppState.tasks.filter(t => t.targetDate > '2026-10-08');
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
      t.targetDate = '2026-10-08';
      saveState();
      renderUpcomingTasks();
      renderTodaySlate();
      showToast('Moved task to Today\'s Slate');
    });

    if (t.targetDate === '2026-10-09') {
      listTomorrow.appendChild(item);
      countTomorrow++;
    } else if (t.targetDate <= '2026-10-14') {
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
// E. PROGRESS GARDEN (REALISTIC BOTANICAL CHALK MEADOW & JOURNAL)
// --------------------------------------------------------------------------
const BOTANICAL_SPECIMENS_OCTOBER = [
  'Wild Crocus', 'Golden Buttercup', 'Dormant Soil', 'Sweet Violet', 'Alpine Aster',
  'Heather Blossom', 'Autumn Lily', 'Meadow Daisy', 'Winter Jasmine', 'Forget-Me-Not',
  'Wild Poppy', 'Lavender Sprig', 'Chamomile', 'Coneflower', 'Sunburst Dahlia',
  'Sweet William', 'Cosmos Petal', 'Pansy', 'Primrose', 'Anemone',
  'Buttercup', 'Cornflower', 'Heather Blossom', 'Morning Glory', 'Foxglove Sprig',
  'Zinnia', 'Lupine', 'Carnation Sprig', 'Hydrangea Florets', 'Hibiscus', 'Evening Primrose'
];

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
  const heroMeadow = document.getElementById('hero-meadow-flowers');
  const bloomCountEl = document.getElementById('meadow-bloom-count');
  const totalFocusEl = document.getElementById('meadow-total-focus');

  if (!grid || !heroMeadow) return;

  grid.innerHTML = '';
  heroMeadow.innerHTML = '';

  let fullBlooms = 0;
  let totalFocusMinutes = 0;

  for (let day = 1; day <= 31; day++) {
    const isToday = day === 8;
    const dayData = AppState.gardenData[day] || {
      specimen: BOTANICAL_SPECIMENS_OCTOBER[day - 1] || 'Autumn Flora',
      tasks: 0,
      planned: 0,
      focus: 0,
      stage: 0
    };

    if (dayData.stage === 4) fullBlooms++;
    totalFocusMinutes += dayData.focus;

    const stageNames = ['Resting Seed', 'The Sprout', 'Branching Stem', 'Swelling Bud', 'Full Bloom'];

    // 1. Calendar Grid Tile with Botanical SVG
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
      openGardenDayModal(day, dayData, stageNames[dayData.stage]);
    });

    grid.appendChild(tile);

    // 2. Realistic Meadow Flower in Top Landscape (Chalk Flora rooted to ground)
    if (dayData.stage >= 1) {
      const flowerItem = document.createElement('div');
      flowerItem.className = 'meadow-flower-item';
      
      const svgArtwork = ChalkBotanicals.getBotanicalSVG(dayData.stage, 46, day);
      
      flowerItem.innerHTML = `
        ${svgArtwork}
        <span class="flower-tag-label chalk-font">D${day}</span>
      `;
      flowerItem.title = `Day ${day}: ${dayData.specimen} (${stageNames[dayData.stage]})`;
      flowerItem.addEventListener('click', () => {
        openGardenDayModal(day, dayData, stageNames[dayData.stage]);
      });
      heroMeadow.appendChild(flowerItem);
    }
  }

  if (bloomCountEl) bloomCountEl.innerText = `${fullBlooms}/31`;
  if (totalFocusEl) {
    const hrs = Math.floor(totalFocusMinutes / 60);
    const mins = totalFocusMinutes % 60;
    totalFocusEl.innerText = `${hrs}h ${mins}m`;
  }
}

function openGardenDayModal(day, dayData, stageName) {
  const modal = document.getElementById('garden-day-modal');
  document.getElementById('modal-species-name').innerText = `🌸 ${dayData.specimen}`;
  document.getElementById('modal-date-title').innerText = `October ${day}, 2026`;
  document.getElementById('modal-flower-visual').innerHTML = ChalkBotanicals.getBotanicalSVG(dayData.stage, 72, day);
  document.getElementById('modal-growth-stage').innerText = stageName;
  document.getElementById('modal-tasks-ratio').innerText = `${dayData.tasks} / ${dayData.planned || dayData.tasks} tasks`;
  document.getElementById('modal-focus-time').innerText = `${dayData.focus} mins`;

  const quoteEl = document.getElementById('modal-encouragement-quote');
  if (dayData.stage === 0) {
    quoteEl.innerText = '"A quiet day of rest. Growth happens below the soil, too."';
  } else if (dayData.stage === 4) {
    quoteEl.innerText = '"Full bloom dedication. Your hard work is permanently captured in your garden."';
  } else {
    quoteEl.innerText = '"Steady momentum rooted in patience. Every sprout strengthens your daily rhythm."';
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
  const progressBar = document.getElementById('habit-tree-progress-bar');
  const progressText = document.getElementById('habit-tree-progress-text');
  const stageCaption = document.getElementById('habit-tree-stage-text');

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
      actionHTML = `
        <button class="habit-counter-pill ${isComplete ? 'completed' : ''}" data-habit-id="${h.id}" title="Click to increment ${h.unit || ''}">
          <span>${h.current}/${h.target} ${h.unit}</span>
          <i class="fa-solid ${isComplete ? 'fa-check' : 'fa-plus'}"></i>
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
        if (h.current >= h.target) {
          h.current = h.target;
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
    });

    container.appendChild(card);
  });

  const maxMonthlyTarget = AppState.habits.length * 20;
  const growthPercent = Math.min(100, Math.round((totalCompletions / (maxMonthlyTarget || 1)) * 100));

  if (progressBar) progressBar.style.width = `${growthPercent}%`;
  if (progressText) progressText.innerText = `${totalCompletions} habit completions logged this month (${growthPercent}% toward crowning bloom)`;

  // Rich Realistic Chalk Tree SVG Canopy
  const foliageGroup = document.getElementById('tree-foliage');
  const blossomsGroup = document.getElementById('tree-blossoms');
  if (foliageGroup && blossomsGroup) {
    foliageGroup.innerHTML = '';
    blossomsGroup.innerHTML = '';

    const leafClusters = [
      { cx: 130, cy: 90, r: 16 }, { cx: 90, cy: 70, r: 18 }, { cx: 70, cy: 50, r: 14 },
      { cx: 370, cy: 90, r: 16 }, { cx: 410, cy: 70, r: 18 }, { cx: 430, cy: 50, r: 14 },
      { cx: 210, cy: 45, r: 18 }, { cx: 250, cy: 35, r: 20 }, { cx: 290, cy: 45, r: 18 },
      { cx: 170, cy: 65, r: 15 }, { cx: 330, cy: 65, r: 15 }, { cx: 250, cy: 75, r: 16 }
    ];

    leafClusters.forEach((c, idx) => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', c.cx);
      circle.setAttribute('cy', c.cy);
      circle.setAttribute('r', c.r);
      circle.setAttribute('fill', 'var(--chalk-mint)');
      circle.setAttribute('opacity', '0.75');
      circle.setAttribute('stroke', 'var(--border-chalk)');
      circle.setAttribute('stroke-width', '1');
      foliageGroup.appendChild(circle);

      if (growthPercent > 30 && idx % 3 === 0) {
        const blossom = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        blossom.setAttribute('cx', c.cx + 5);
        blossom.setAttribute('cy', c.cy - 5);
        blossom.setAttribute('r', '6');
        blossom.setAttribute('fill', 'var(--chalk-pink)');
        blossomsGroup.appendChild(blossom);
      }
    });

    if (growthPercent > 50) {
      if (stageCaption) stageCaption.innerText = 'Stage 3: Dense Foliage & Crowning Canopy (Days 15–24)';
    } else {
      if (stageCaption) stageCaption.innerText = 'Stage 2: Sturdy Textured Trunk (Days 6–14)';
    }
  }
}

// --------------------------------------------------------------------------
// G. DEEP FOCUS STUDIO (FULL-SCREEN & GENTLE REST MODE)
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
              AppState.gardenData[8].focus += loggedMins;
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
  select.innerHTML = '<option value="">-- Working without a specific task --</option>';

  const activeTasks = AppState.tasks.filter(t => t.targetDate === '2026-10-08' && t.status !== 'COMPLETED');
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
  const todayTasks = AppState.tasks.filter(t => t.targetDate === '2026-10-08');
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

  if (!AppState.gardenData[8]) {
    AppState.gardenData[8] = { specimen: 'Meadow Daisy', tasks: 0, planned: 0, focus: 0, stage: 0 };
  }
  AppState.gardenData[8].tasks = completedCount;
  AppState.gardenData[8].planned = todayTasks.length;
  AppState.gardenData[8].focus = focusMins;
  AppState.gardenData[8].stage = stage;
  saveState();

  const stageNames = ['Resting Seed', 'The Sprout', 'Branching Stem', 'Swelling Bud', 'Full Bloom'];

  // Update Top Right Growth Widget with Botanical SVG
  const topIcon = document.getElementById('top-flower-icon');
  const topStage = document.getElementById('top-growth-stage');
  const topMeta = document.getElementById('top-growth-meta');
  if (topIcon) topIcon.innerHTML = ChalkBotanicals.getBotanicalSVG(stage, 28, 8);
  if (topStage) topStage.innerText = stageNames[stage];
  if (topMeta) topMeta.innerText = `${completedCount} tasks • ${focusMins}m focus`;
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
