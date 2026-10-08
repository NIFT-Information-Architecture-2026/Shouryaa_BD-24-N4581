/**
 * CHALKFLOW — Slow Productivity & Botanical Focus Engine
 * Phase 6: Core Application Architecture & Interactive Logic
 * Creative Director: Shouryaa (Fashion Communication, NIFT Hyderabad)
 * Technical Architect: Antigravity
 */

// ==========================================================================
// 1. DATA STATE & LOCAL STORAGE PERSISTENCE
// ==========================================================================
const STORAGE_KEY = 'chalkflow_state_v1';

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
      ]
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
      subtasks: []
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
      subtasks: []
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
      subtasks: []
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
      subtasks: []
    }
  ],
  habits: [
    { id: 'h-1', name: 'Drink 4 Liters Water', icon: '💧', frequency: 'DAILY', completions: 7 },
    { id: 'h-2', name: '30 Mins Design Reading', icon: '📖', frequency: 'DAILY', completions: 6 },
    { id: 'h-3', name: 'Morning Sketchbook Drill', icon: '🎨', frequency: 'DAILY', completions: 5 },
    { id: 'h-4', name: 'Evening Walk / Rest', icon: '🌿', frequency: 'DAILY', completions: 6 }
  ],
  focusTimeLoggedToday: 45, // in minutes
  gardenData: {
    // 31 days of October with Autumn Botanical Collection
    1: { specimen: 'Chrysanthemum', tasks: 5, planned: 5, focus: 110, stage: 4 },
    2: { specimen: 'Golden Aster', tasks: 3, planned: 4, focus: 60, stage: 2 },
    3: { specimen: 'Dormant Soil', tasks: 0, planned: 0, focus: 0, stage: 0 },
    4: { specimen: 'Goldenrod', tasks: 6, planned: 6, focus: 120, stage: 4 },
    5: { specimen: 'Dahlia Sprig', tasks: 5, planned: 5, focus: 95, stage: 4 },
    6: { specimen: 'Sweet Violet', tasks: 2, planned: 3, focus: 40, stage: 1 },
    7: { specimen: 'Marigold', tasks: 5, planned: 5, focus: 100, stage: 4 },
    8: { specimen: 'Autumn Sage', tasks: 1, planned: 3, focus: 45, stage: 1 } // Today
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
// 2. WEB AUDIO API SYNTHESIZER (SOUNDSCAPES & CHALK ACOUSTICS)
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
    if (this.gainNode) {
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
    const bufferSize = this.ctx.sampleRate * 0.12;
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
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start();
  }

  playFeltEraserSweep() {
    this.initContext();
    const bufferSize = this.ctx.sampleRate * 0.45;
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
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);

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
      // True 1/f^2 Brown Noise Generator for ADHD Focus
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
      // Pink Noise + High-Pass for Gentle Rain on Glass
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
      // Resonant ambient filter nodes
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
// 3. UI CONTROLLER & DOM MANAGEMENT
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
function initNavigation() {
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

  function switchSurface(surfaceId) {
    AppState.activeSurface = surfaceId;
    navItems.forEach(item => item.classList.toggle('active', item.dataset.surface === surfaceId));
    views.forEach(v => v.classList.toggle('active', v.id === `view-${surfaceId}`));
    if (pageTitle) pageTitle.innerText = titles[surfaceId] || "Today's Slate";
    saveState();

    if (surfaceId === 'progress-garden') renderProgressGarden();
    if (surfaceId === 'habit-ledger') renderHabitLedger();
  }

  navItems.forEach(btn => {
    btn.addEventListener('click', () => switchSurface(btn.dataset.surface));
  });

  switchSurface(AppState.activeSurface || 'today-slate');
}

// --------------------------------------------------------------------------
// C. TODAY'S SLATE CONTROLLER
// --------------------------------------------------------------------------
function initTodaySlate() {
  const form = document.getElementById('today-add-form');
  const toggleSubtaskBtn = document.getElementById('toggle-subtask-builder');
  const subtaskDrawer = document.getElementById('subtask-builder-drawer');
  const addMoreSubtaskBtn = document.getElementById('add-more-subtask-field');
  const subtaskList = document.getElementById('subtask-input-list');
  const eraseCompletedBtn = document.getElementById('btn-erase-completed');

  // Toggle Subtasks Input Builder
  if (toggleSubtaskBtn) {
    toggleSubtaskBtn.addEventListener('click', () => {
      const isHidden = subtaskDrawer.style.display === 'none';
      subtaskDrawer.style.display = isHidden ? 'block' : 'none';
    });
  }

  if (addMoreSubtaskBtn) {
    addMoreSubtaskBtn.addEventListener('click', () => {
      const div = document.createElement('div');
      div.className = 'subtask-input-item';
      div.innerHTML = `
        <span class="step-bullet">•</span>
        <input type="text" class="subtask-field chalk-input" placeholder="Next micro-step...">
      `;
      subtaskList.appendChild(div);
    });
  }

  // Add Task
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('task-title-input').value.trim();
      const priority = document.querySelector('input[name="task-priority"]:checked').value;
      const category = document.getElementById('task-category-select').value;
      const estTime = parseInt(document.getElementById('task-est-time').value, 10);

      // Harvest Subtasks
      const subtaskFields = document.querySelectorAll('.subtask-field');
      const subtasks = [];
      subtaskFields.forEach((field, idx) => {
        const val = field.value.trim();
        if (val) {
          subtasks.push({ id: `sub-${Date.now()}-${idx}`, title: val, completed: false });
        }
      });

      const newTask = {
        id: `task-${Date.now()}`,
        title,
        priority,
        category,
        estTime,
        targetDate: '2026-10-08',
        status: 'TODO',
        isCarriedOver: false,
        subtasks
      };

      AppState.tasks.unshift(newTask);
      saveState();
      renderTodaySlate();
      updateGlobalGrowthMetrics();
      AudioEngine.playChalkScratch();

      form.reset();
      subtaskDrawer.style.display = 'none';
      subtaskList.innerHTML = `
        <div class="subtask-input-item">
          <span class="step-bullet">•</span>
          <input type="text" class="subtask-field chalk-input" placeholder="Micro-step 1 (e.g. Collect A3 sheets)">
        </div>
      `;
      showToast('Pinned new task to Today\'s Slate');
    });
  }

  // Erase Completed Tasks (Two-Step Felt Wiper Interaction)
  if (eraseCompletedBtn) {
    eraseCompletedBtn.addEventListener('click', () => {
      const completedCount = AppState.tasks.filter(t => t.status === 'COMPLETED' && t.targetDate === '2026-10-08').length;
      if (completedCount === 0) {
        showToast('No completed tasks to erase.');
        return;
      }

      AudioEngine.playFeltEraserSweep();
      emitDustParticles(eraseCompletedBtn.getBoundingClientRect());

      // Filter out completed tasks from today's slate
      AppState.tasks = AppState.tasks.filter(t => !(t.status === 'COMPLETED' && t.targetDate === '2026-10-08'));
      saveState();
      renderTodaySlate();
      updateGlobalGrowthMetrics();
      showToast('Completed tasks erased into resting garden soil ✨');
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

  // Split into Top Priority vs General
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
      <div class="chalk-card" style="text-align:center; padding: 32px 16px;">
        <span style="font-size: 36px;">🌱</span>
        <h4 class="chalk-font" style="margin-top: 10px; font-size: 18px;">A Clean Slate</h4>
        <p style="color: var(--text-muted); font-size: 13px; margin-top: 4px;">Write a task above or enjoy this quiet moment of rest.</p>
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
  card.className = `task-card ${isTop ? 'is-top-priority' : ''} ${task.status === 'COMPLETED' ? 'completed' : ''}`;
  card.id = `card-${task.id}`;

  const priorityDot = task.priority === 'HIGH' ? '🔴' : (task.priority === 'MEDIUM' ? '🟡' : '🟢');
  const carriedBadge = task.isCarriedOver ? `<span class="carried-over-badge chalk-font">↪ Carried over</span>` : '';
  const estPill = task.estTime ? `<span class="meta-pill"><i class="fa-regular fa-clock"></i> ${task.estTime}m</span>` : '';
  const catPill = `<span class="meta-pill"><i class="fa-solid fa-tag"></i> ${task.category.toLowerCase()}</span>`;

  // Render Subtasks list
  let subtasksHTML = '';
  if (task.subtasks && task.subtasks.length > 0) {
    subtasksHTML = `
      <div class="subtasks-nested-container">
        ${task.subtasks.map(sub => `
          <div class="nested-subtask-item ${sub.completed ? 'completed' : ''}" data-task-id="${task.id}" data-sub-id="${sub.id}">
            <span class="custom-chalk-checkbox" style="width:16px;height:16px;font-size:10px;">${sub.completed ? '✓' : ''}</span>
            <span>${sub.title}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  card.innerHTML = `
    <div class="task-main-row">
      <div class="task-checkbox-wrap" data-task-id="${task.id}">
        <div class="custom-chalk-checkbox">${task.status === 'COMPLETED' ? '✓' : ''}</div>
      </div>
      <div class="task-body">
        <div class="task-title-line">
          <span class="dot-glyph">${priorityDot}</span>
          <span class="task-title">${task.title}</span>
          ${carriedBadge}
        </div>
        <div class="task-meta-row">
          ${estPill}
          ${catPill}
        </div>
      </div>
      <div class="task-actions">
        <button class="icon-action-btn delete-btn" title="Erase task" data-task-id="${task.id}">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
    ${subtasksHTML}
  `;

  // Attach Checkbox Handler
  const checkWrap = card.querySelector('.task-checkbox-wrap');
  checkWrap.addEventListener('click', () => {
    task.status = task.status === 'COMPLETED' ? 'TODO' : 'COMPLETED';
    AudioEngine.playChalkScratch();
    emitDustParticles(checkWrap.getBoundingClientRect());
    saveState();
    renderTodaySlate();
    updateGlobalGrowthMetrics();
  });

  // Attach Subtask Checkbox Handler
  card.querySelectorAll('.nested-subtask-item').forEach(subEl => {
    subEl.addEventListener('click', () => {
      const subId = subEl.dataset.subId;
      const targetSub = task.subtasks.find(s => s.id === subId);
      if (targetSub) {
        targetSub.completed = !targetSub.completed;
        AudioEngine.playChalkScratch();
        saveState();
        renderTodaySlate();
        updateGlobalGrowthMetrics();
      }
    });
  });

  // Attach Delete Handler
  card.querySelector('.delete-btn').addEventListener('click', () => {
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
        subtasks: []
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
        <div class="task-body">
          <div class="task-title" style="font-size:14px;">${t.title}</div>
          <div class="task-meta-row">
            <span class="meta-pill"><i class="fa-regular fa-calendar"></i> ${t.targetDate}</span>
          </div>
        </div>
        <button class="chalk-btn secondary-btn chalk-font" style="padding:4px 8px;font-size:12px;" data-move-id="${t.id}">
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
// E. PROGRESS GARDEN (TWO-TIER BOTANICAL SANCTUARY)
// --------------------------------------------------------------------------
const BOTANICAL_SPECIMENS_OCTOBER = [
  'Chrysanthemum', 'Golden Aster', 'Dormant Soil', 'Goldenrod', 'Dahlia Sprig',
  'Sweet Violet', 'Marigold', 'Autumn Sage', 'Winter Jasmine', 'Forget-Me-Not',
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
      specimen: BOTANICAL_SPECIMENS_OCTOBER[day - 1] || 'Autumn Flower',
      tasks: 0,
      planned: 0,
      focus: 0,
      stage: 0
    };

    if (dayData.stage === 4) fullBlooms++;
    totalFocusMinutes += dayData.focus;

    // Stage Icons & Glyphs
    const stageIcons = ['🌱', '🌿', '🌿', '🌷', '🌸'];
    const stageIcon = stageIcons[dayData.stage] || '🌱';
    const stageNames = ['Resting Seed', 'Sprout', 'Branching Stem', 'Swelling Bud', 'Full Bloom'];

    // 1. Build Calendar Grid Tile
    const tile = document.createElement('div');
    tile.className = `calendar-day-tile ${isToday ? 'is-today' : ''}`;
    tile.innerHTML = `
      <div class="tile-top">
        <span class="day-num">${day < 10 ? '0' + day : day}</span>
        <span class="stage-tag">${isToday ? '★ Today' : ''}</span>
      </div>
      <div class="tile-icon">${stageIcon}</div>
      <div class="tile-bottom chalk-font">${dayData.specimen}</div>
    `;

    tile.addEventListener('click', () => {
      openGardenDayModal(day, dayData, stageNames[dayData.stage], stageIcon);
    });

    grid.appendChild(tile);

    // 2. Build Hero Meadow Flower Item (if stage >= 2 or bloom)
    if (dayData.stage >= 2) {
      const flowerItem = document.createElement('div');
      flowerItem.className = 'meadow-flower-item';
      flowerItem.innerHTML = `
        <div style="font-size: 32px; filter: drop-shadow(0 0 6px var(--chalk-pink));">${stageIcon}</div>
        <span class="chalk-font" style="font-size: 10px; color: var(--text-muted); margin-top: 2px;">D${day}</span>
      `;
      flowerItem.title = `Day ${day}: ${dayData.specimen} (${stageNames[dayData.stage]})`;
      flowerItem.addEventListener('click', () => {
        openGardenDayModal(day, dayData, stageNames[dayData.stage], stageIcon);
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

function openGardenDayModal(day, dayData, stageName, stageIcon) {
  const modal = document.getElementById('garden-day-modal');
  document.getElementById('modal-species-name').innerText = `🌸 ${dayData.specimen}`;
  document.getElementById('modal-date-title').innerText = `October ${day}, 2026`;
  document.getElementById('modal-flower-visual').innerText = stageIcon;
  document.getElementById('modal-growth-stage').innerText = stageName;
  document.getElementById('modal-tasks-ratio').innerText = `${dayData.tasks} / ${dayData.planned || dayData.tasks} tasks`;
  document.getElementById('modal-focus-time').innerText = `${dayData.focus} mins`;

  const quoteEl = document.getElementById('modal-encouragement-quote');
  if (dayData.stage === 0) {
    quoteEl.innerText = '"A quiet day of rest. Growth happens below the soil, too."';
  } else if (dayData.stage === 4) {
    quoteEl.innerText = '"Full bloom dedication. Your hard work is permanently woven into your autumn garden."';
  } else {
    quoteEl.innerText = '"Steady progress rooted in patience. Every sprout strengthens your rhythm."';
  }

  modal.style.display = 'flex';
}

// --------------------------------------------------------------------------
// F. HABIT LEDGER CONTROLLER (30-DAY LIVING CHALK TREE)
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
      const icon = document.getElementById('new-habit-icon').value;
      const frequency = document.getElementById('new-habit-freq').value;

      const newHabit = {
        id: `h-${Date.now()}`,
        name,
        icon,
        frequency,
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
    card.innerHTML = `
      <div class="habit-info-left">
        <span class="habit-icon">${h.icon}</span>
        <div>
          <div class="habit-name">${h.name}</div>
          <div class="habit-tally">${h.completions}/8 days completed this month (${h.frequency.toLowerCase()})</div>
        </div>
      </div>
      <button class="habit-check-btn checked" title="Logged for today">
        <i class="fa-solid fa-check"></i>
      </button>
    `;

    const checkBtn = card.querySelector('.habit-check-btn');
    checkBtn.addEventListener('click', () => {
      h.completions += 1;
      AudioEngine.playChalkScratch();
      emitDustParticles(checkBtn.getBoundingClientRect());
      saveState();
      renderHabitLedger();
      showToast(`Logged "${h.name}" — tree deepens roots!`);
    });

    container.appendChild(card);
  });

  // Calculate Tree Growth Percentage
  const maxMonthlyTarget = AppState.habits.length * 25;
  const growthPercent = Math.min(100, Math.round((totalCompletions / (maxMonthlyTarget || 1)) * 100));

  if (progressBar) progressBar.style.width = `${growthPercent}%`;
  if (progressText) progressText.innerText = `${totalCompletions} habit completions logged this month (${growthPercent}% toward crowning bloom)`;

  // Update Tree SVG Leaves & Stage Caption
  const foliageGroup = document.getElementById('tree-foliage');
  const blossomsGroup = document.getElementById('tree-blossoms');
  if (foliageGroup && blossomsGroup) {
    foliageGroup.innerHTML = '';
    blossomsGroup.innerHTML = '';

    // Render leaves based on progress
    const leafCount = Math.floor((growthPercent / 100) * 18) + 6;
    for (let i = 0; i < leafCount; i++) {
      const angle = (i / leafCount) * Math.PI * 2;
      const radius = 60 + (i % 3) * 20;
      const cx = 200 + Math.cos(angle) * radius;
      const cy = 110 + Math.sin(angle) * (radius * 0.7);
      
      const leaf = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      leaf.setAttribute('cx', cx);
      leaf.setAttribute('cy', cy);
      leaf.setAttribute('r', '9');
      leaf.setAttribute('fill', 'var(--chalk-mint)');
      leaf.setAttribute('opacity', '0.85');
      foliageGroup.appendChild(leaf);
    }

    if (growthPercent > 50) {
      if (stageCaption) stageCaption.innerText = 'Stage 3: Spreading Boughs & Dense Canopy (Days 15–24)';
    } else {
      if (stageCaption) stageCaption.innerText = 'Stage 2: Sturdy Textured Trunk (Days 6–14)';
    }
  }
}

// --------------------------------------------------------------------------
// G. DEEP FOCUS STUDIO (ACOUSTIC FOCUS CHAMBER)
// --------------------------------------------------------------------------
let FocusTimer = {
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

  // Preset Buttons
  document.querySelectorAll('.time-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.time-preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mins = parseInt(btn.dataset.minutes, 10);
      setTimerDuration(mins);
    });
  });

  // Increment / Decrement Buttons
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

    // Ring offset
    if (ring) {
      const totalOffset = 722;
      const progress = (FocusTimer.durationSeconds - FocusTimer.remainingSeconds) / FocusTimer.durationSeconds;
      ring.style.strokeDashoffset = totalOffset - (progress * totalOffset);
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (FocusTimer.isRunning) {
        // Pause
        clearInterval(FocusTimer.intervalId);
        FocusTimer.isRunning = false;
        toggleBtn.classList.remove('running');
        actionText.innerText = 'Resume Focus';
        iconState.className = 'fa-solid fa-play';
        if (liveDot) liveDot.style.display = 'none';
      } else {
        // Start
        AudioEngine.initContext();
        FocusTimer.isRunning = true;
        toggleBtn.classList.add('running');
        actionText.innerText = 'Pause Focus';
        iconState.className = 'fa-solid fa-pause';
        if (liveDot) liveDot.style.display = 'inline-block';

        FocusTimer.intervalId = setInterval(() => {
          FocusTimer.remainingSeconds--;
          updateDisplay();

          if (FocusTimer.remainingSeconds <= 0) {
            clearInterval(FocusTimer.intervalId);
            FocusTimer.isRunning = false;
            toggleBtn.classList.remove('running');
            actionText.innerText = 'Begin Focus Session';
            iconState.className = 'fa-solid fa-play';
            if (liveDot) liveDot.style.display = 'none';

            // Credit focus minutes to today's garden
            const loggedMins = Math.floor(FocusTimer.durationSeconds / 60);
            AppState.focusTimeLoggedToday += loggedMins;
            AppState.gardenData[8].focus += loggedMins;
            saveState();
            updateGlobalGrowthMetrics();
            showToast(`🌸 Focus complete! ${loggedMins}m credited to today's flower.`);
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
      actionText.innerText = 'Begin Focus Session';
      iconState.className = 'fa-solid fa-play';
      if (liveDot) liveDot.style.display = 'none';
      updateDisplay();
    });
  }

  // Soundscape Selection
  const soundCards = document.querySelectorAll('.sound-card');
  const volumeSlider = document.getElementById('sound-volume');

  soundCards.forEach(card => {
    card.addEventListener('click', () => {
      soundCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const soundType = card.dataset.sound;
      AudioEngine.playSoundscape(soundType);
      showToast(`Acoustic environment: ${card.querySelector('.sound-name').innerText}`);
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
// H. GLOBAL GROWTH CALCULATOR & BOTANICAL FEEDBACK
// --------------------------------------------------------------------------
function updateGlobalGrowthMetrics() {
  const todayTasks = AppState.tasks.filter(t => t.targetDate === '2026-10-08');
  const completedCount = todayTasks.filter(t => t.status === 'COMPLETED').length;
  const focusMins = AppState.focusTimeLoggedToday || 0;

  // Stage Calculation Formula
  // Stage 0: 0 tasks & 0m
  // Stage 1: 1-2 tasks OR 25m Focus
  // Stage 2: 3-4 tasks OR 50m Focus
  // Stage 3: 5-6 tasks OR 75m Focus
  // Stage 4: 7+ tasks OR 100m+ Focus (or all today tasks completed)
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

  // Update AppState for Day 8
  if (!AppState.gardenData[8]) {
    AppState.gardenData[8] = { specimen: 'Autumn Sage', tasks: 0, planned: 0, focus: 0, stage: 0 };
  }
  AppState.gardenData[8].tasks = completedCount;
  AppState.gardenData[8].planned = todayTasks.length;
  AppState.gardenData[8].focus = focusMins;
  AppState.gardenData[8].stage = stage;
  saveState();

  const stageIcons = ['🌱', '🌿', '🌿', '🌷', '🌸'];
  const stageNames = ['Stage 0: Resting Seed', 'Stage 1: The Sprout', 'Stage 2: Branching Stem', 'Stage 3: Swelling Bud', 'Stage 4: Full Bloom'];
  const stageDescs = [
    'A quiet day of rest. Growth happens below the soil, too.',
    'Momentum ignited! Complete 2 more tasks to branch out.',
    'Consistent effort locked in. Only one push needed to bud.',
    'Almost in bloom! One final push creates today\'s flower.',
    'Full bloom unlocked! Permanently captured in your garden.'
  ];

  // Update Sidebar Widget
  const sidebarIcon = document.getElementById('sidebar-flower-icon');
  const sidebarStage = document.getElementById('sidebar-growth-stage');
  const sidebarScore = document.getElementById('sidebar-growth-score');
  if (sidebarIcon) sidebarIcon.innerText = stageIcons[stage];
  if (sidebarStage) sidebarStage.innerText = stageNames[stage].split(':')[1].trim();
  if (sidebarScore) sidebarScore.innerText = `${completedCount} tasks • ${focusMins}m focus`;

  // Update Slate Bottom Banner
  const slateAvatar = document.getElementById('slate-botanical-avatar');
  const slateStatus = document.getElementById('slate-growth-status-text');
  const slateDesc = document.getElementById('slate-growth-desc-text');
  if (slateAvatar) slateAvatar.innerText = stageIcons[stage];
  if (slateStatus) slateStatus.innerText = stageNames[stage];
  if (slateDesc) slateDesc.innerText = stageDescs[stage];
}

// --------------------------------------------------------------------------
// I. UTILITIES: CHALK DUST PARTICLES & TOASTS
// --------------------------------------------------------------------------
function emitDustParticles(rect) {
  const container = document.getElementById('dust-emitter');
  if (!container) return;

  const count = 14;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'dust-particle';
    p.style.left = `${rect.left + rect.width / 2}px`;
    p.style.top = `${rect.top + rect.height / 2}px`;

    const dx = (Math.random() * 80 - 40) + 'px';
    const dy = (Math.random() * 60 + 20) + 'px';
    p.style.setProperty('--dx', dx);
    p.style.setProperty('--dy', dy);

    container.appendChild(p);
    setTimeout(() => p.remove(), 1000);
  }
}

function showToast(msg) {
  const toast = document.getElementById('chalk-toast');
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}
