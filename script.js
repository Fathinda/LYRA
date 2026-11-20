/* ==========================================================================
   LYRA — SAINS DATA ITSB AXIS 2026
   Interactive Landing Page Script
   ========================================================================== */

/* ==========================================================================
   1. EDITABLE DATA CONFIGURATION (EDIT SQUAD DATA & LINKS HERE)
   ========================================================================== */

// Link Canva AI Game asli kelompokmu (terbuka di tab baru)
const CANVA_AI_GAME_URL = "https://dolphin-zpkhz7.my.canva.site/errer"; 

// Data Dislok (1 Mentor / Pembimbing)
const dislokData = {
  name: "Kak Bintang Mahardika",
  nickname: "Kak Bintang",
  badge: "DISLOK LYRA ✦ AXIS 2026",
  role: "The Cosmic Navigator & Chief Mentor",
  photo: "assets/dislok.jpg",
  bio: "Pemandu arah Kelompok Lyra yang selalu sigap mengayomi, anti panik, dan ahli meredakan tensi osjur dengan jokes bapak-bapak ber-IPK 4.0. Berdedikasi tinggi membawa Lyra menjadi kelompok paling solid di Axis 2026!",
  quote: '"Jalani osjur dengan senyuman, error di-debug pelan-pelan. Yang penting esensi dapet, chemistry jalan!"',
  zodiac: "Leo • Alpha Lyrae Spirit",
  traits: [
    "Ngopi Pas Deadline",
    "Anti Panik Mode",
    "Master Data Mining",
    "Curhat Room 24/7"
  ],
  initialSparkles: 142
};

// Data 9 Anggota Kelompok Lyra (Sains Data ITSB 2026)
const membersData = [
  {
    id: 1,
    name: "Ahmad 'Arka' Razzan",
    nickname: "Arka",
    photo: "assets/member-1.jpg",
    role: "The Strategist",
    roleIcon: "✦",
    category: "strategy",
    zodiac: "Aries • Vega Spark",
    motto: "Data speaks louder than assumptions.",
    funFact: "Bisa ngetik query SQL 100 WPM tapi paling sering lupa titik koma (;)",
    quote: "Kalau ada cara yang lebih efisien, ngapain brute force?",
    favStack: "Python • Pandas • SQL",
    social: "@arkadatasci"
  },
  {
    id: 2,
    name: "Clarissa Putri Kirana",
    nickname: "Rissa",
    photo: "assets/member-2.jpg",
    role: "Vibe Maker & Host",
    roleIcon: "✦",
    category: "vibe",
    zodiac: "Gemini • Solar Pulse",
    motto: "Tugas berat terasa ringan kalau ketawanya barengan.",
    funFact: "Punya playlist Spotify khusus debug code, dari lagu galau sampai jedag-jedug.",
    quote: "Jangan biarkan model machine learning kamu lebih overfit dari outfit osjur!",
    favStack: "Tableau • Canva AI • Spotify",
    social: "@clarissakirana"
  },
  {
    id: 3,
    name: "Daffa Arya Nugraha",
    nickname: "Daffa",
    photo: "assets/member-3.jpg",
    role: "Code Wizard",
    roleIcon: "✦",
    category: "tech",
    zodiac: "Aquarius • Neural Core",
    motto: "Talk is cheap. Show me the clean code.",
    funFact: "Bisa membedakan rasa kopi hitam sachet hanya dari aroma uap panasnya.",
    quote: "Commit early, push often, dan jangan lupa berdoa sebelum presentasi.",
    favStack: "C++ • Python • Scikit-Learn",
    social: "@daffa_arya"
  },
  {
    id: 4,
    name: "Fadhilah Nurul Aulia",
    nickname: "Fadhil",
    photo: "assets/member-4.jpg",
    role: "Data Detective",
    roleIcon: "✦",
    category: "tech",
    zodiac: "Virgo • Starlight Precision",
    motto: "No outlier can hide from my boxplot.",
    funFact: "Paling jeli nemu typo di slide presentasi dalam waktu 0.5 detik.",
    quote: "Dibalik grafik yang indah, terdapat proses data cleaning yang berdarah-darah.",
    favStack: "R • Seaborn • PowerBI",
    social: "@fadhilah.aulia"
  },
  {
    id: 5,
    name: "Gabriel Jonathan",
    nickname: "Gabe",
    photo: "assets/member-5.jpg",
    role: "Chief Morale Officer",
    roleIcon: "✦",
    category: "vibe",
    zodiac: "Sagittarius • Cosmic Cheer",
    motto: "Pantang pulang sebelum tugas kelar & warteg tutup.",
    funFact: "Punya cadangan stiker WhatsApp untuk segala macam krisis emosional osjur.",
    quote: "Error 404: Rasa menyerah tidak ditemukan dalam database kami.",
    favStack: "Notion • Figma • Discord",
    social: "@gabriel.jntn"
  },
  {
    id: 6,
    name: "Hafizha Azzahra",
    nickname: "Zahra",
    photo: "assets/member-6.jpg",
    role: "Visual Alchemist",
    roleIcon: "✦",
    category: "vibe",
    zodiac: "Libra • Harmonious Pixel",
    motto: "Data tanpa visualisasi ibarat kopi tanpa gula.",
    funFact: "Bisa menghabiskan 3 jam hanya untuk memilih color palette Hex code yang sempurna.",
    quote: "Desain yang baik membuat data yang rumit terasa seperti puisi visual.",
    favStack: "Figma • Canva AI • D3.js",
    social: "@zahra.visual"
  },
  {
    id: 7,
    name: "Irfan Maulana Pratama",
    nickname: "Irfan",
    photo: "assets/member-7.jpg",
    role: "Algorithm Architect",
    roleIcon: "✦",
    category: "tech",
    zodiac: "Capricorn • Logic Pillar",
    motto: "Complexity O(1) adalah tujuan hidup saya.",
    funFact: "Suka ngobrol sama chatbot AI kalau lagi overthinking tugas matematika diskrit.",
    quote: "Segala masalah di dunia ini bisa diselesaikan dengan pohon keputusan yang tepat.",
    favStack: "TensorFlow • PyTorch • NumPy",
    social: "@irfan.algo"
  },
  {
    id: 8,
    name: "Kania Dewi Anggraini",
    nickname: "Kania",
    photo: "assets/member-8.jpg",
    role: "Keeper of Deadlines",
    roleIcon: "✦",
    category: "strategy",
    zodiac: "Taurus • Iron Anchor",
    motto: "Disiplin hari ini, santai besok pagi.",
    funFact: "Alarm HP-nya ada 12 dengan interval tiap 5 menit, tapi tetep bangun pas alarm ke-11.",
    quote: "Time is a non-renewable resource, gunakan untuk hal-hal yang berfaedah!",
    favStack: "Trello • Google Sheets • Calendar",
    social: "@kanianggrn"
  },
  {
    id: 9,
    name: "Luthfi Rayyan Hakim",
    nickname: "Rayyan",
    photo: "assets/member-9.jpg",
    role: "Creative Hacker",
    roleIcon: "✦",
    category: "tech",
    zodiac: "Scorpio • Nebula Spark",
    motto: "Think outside the box, then optimize the box.",
    funFact: "Sering nyoba shortcut keyboard aneh sampai kursornya muter-muter sendiri.",
    quote: "Kreativitas adalah saat data science bertemu dengan imajinasi tanpa batas.",
    favStack: "Streamlit • FastAPI • Docker",
    social: "@rayyan_hakim"
  }
];

/* ==========================================================================
   2. AUDIO SYNTHESIZER (WEB AUDIO API) — RETRO / CHIME SOUND EFFECTS
   ========================================================================== */
class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.enabled = localStorage.getItem("lyra_sound") === "true";
    this.initContext = this.initContext.bind(this);
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem("lyra_sound", this.enabled);
    if (this.enabled) {
      this.initContext();
      this.playChime(587.33, 0.15); // D5
    }
    return this.enabled;
  }

  playChime(freq = 523.25, duration = 0.2, type = "sine") {
    if (!this.enabled) return;
    try {
      this.initContext();
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playCheerChord() {
    if (!this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Cosmic harp chord)
    notes.forEach((note, i) => {
      setTimeout(() => this.playChime(note, 0.35, "triangle"), i * 65);
    });
  }

  playFlip() {
    if (!this.enabled) return;
    this.playChime(440, 0.08, "sine");
  }

  playRouletteTick() {
    if (!this.enabled) return;
    this.playChime(880, 0.04, "square");
  }

  playVictory() {
    if (!this.enabled) return;
    const fanfare = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    fanfare.forEach((n, idx) => {
      setTimeout(() => this.playChime(n, 0.4, "sine"), idx * 90);
    });
  }
}

const sounds = new SoundEngine();

/* ==========================================================================
   3. CONSTELLATION CANVAS ENGINE (HERO INTERACTION)
   ========================================================================== */
class ConstellationCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.stars = [];
    this.mouse = { x: -9999, y: -9999, isHover: false };
    this.numStars = 85;
    this.maxDistance = 140;
    this.animationFrame = null;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());

    // Mouse tracking for gravitational Vega effect
    this.canvas.addEventListener("mousemove", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      this.mouse.isHover = true;
    });

    this.canvas.addEventListener("mouseleave", () => {
      this.mouse.isHover = false;
    });

    // Touch support for mobile devices
    this.canvas.addEventListener("touchmove", (e) => {
      if (e.touches.length > 0) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.touches[0].clientX - rect.left;
        this.mouse.y = e.touches[0].clientY - rect.top;
        this.mouse.isHover = true;
      }
    }, { passive: true });

    this.canvas.addEventListener("touchend", () => {
      this.mouse.isHover = false;
    });

    this.createStars();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = this.canvas.parentElement.offsetWidth;
    this.height = this.canvas.height = this.canvas.parentElement.offsetHeight;
    if (this.width < 768) {
      this.numStars = 45;
      this.maxDistance = 100;
    } else {
      this.numStars = 85;
      this.maxDistance = 140;
    }
  }

  createStars() {
    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.85 ? "#fef08a" : (Math.random() > 0.4 ? "#34d399" : "#10b981"),
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseVal: Math.random() * Math.PI
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update and draw stars
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];

      star.x += star.vx;
      star.y += star.vy;

      // Bounce edges smoothly
      if (star.x < 0 || star.x > this.width) star.vx *= -1;
      if (star.y < 0 || star.y > this.height) star.vy *= -1;

      // Gravitational attraction towards cursor (simulating Vega magnetic starlight)
      if (this.mouse.isHover) {
        const dx = this.mouse.x - star.x;
        const dy = this.mouse.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 10) {
          const force = (180 - dist) / 180 * 0.04;
          star.x += (dx / dist) * force * 5;
          star.y += (dy / dist) * force * 5;
        }
      }

      // Draw star
      star.pulseVal += star.pulseSpeed;
      const currentRadius = star.radius + Math.sin(star.pulseVal) * 0.6;
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
      this.ctx.fillStyle = star.color;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = star.color;
      this.ctx.fill();

      // Connect stars
      for (let j = i + 1; j < this.stars.length; j++) {
        const star2 = this.stars[j];
        const dist = Math.hypot(star.x - star2.x, star.y - star2.y);

        if (dist < this.maxDistance) {
          const alpha = (1 - dist / this.maxDistance) * 0.28;
          this.ctx.beginPath();
          this.ctx.moveTo(star.x, star.y);
          this.ctx.lineTo(star2.x, star2.y);
          this.ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
          this.ctx.lineWidth = 0.9;
          this.ctx.stroke();
        }
      }

      // Connect to mouse cursor
      if (this.mouse.isHover) {
        const mouseDist = Math.hypot(star.x - this.mouse.x, star.y - this.mouse.y);
        if (mouseDist < 160) {
          const mAlpha = (1 - mouseDist / 160) * 0.55;
          this.ctx.beginPath();
          this.ctx.moveTo(star.x, star.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `rgba(254, 240, 138, ${mAlpha})`;
          this.ctx.lineWidth = 1.2;
          this.ctx.stroke();
        }
      }
    }

    // Draw Vega cursor star
    if (this.mouse.isHover) {
      this.ctx.beginPath();
      this.ctx.arc(this.mouse.x, this.mouse.y, 4.5, 0, Math.PI * 2);
      this.ctx.fillStyle = "#fef08a";
      this.ctx.shadowBlur = 18;
      this.ctx.shadowColor = "#facc15";
      this.ctx.fill();
    }

    this.animationFrame = requestAnimationFrame(() => this.animate());
  }
}

/* ==========================================================================
   4. FLOATING EMOJI & CONFETTI ENGINE (FOR DISLOK APPRECIATION & WINS)
   ========================================================================== */
class ParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.loop();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(originX, originY, count = 28, emojis = ["💚", "✨", "⭐", "🎉", "👑", "🚀", "💫"]) {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
      const speed = Math.random() * 9 + 4;
      const isEmoji = Math.random() > 0.35;

      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (Math.random() * 4 + 3), // Initial upward pop
        gravity: 0.18,
        friction: 0.96,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8,
        isEmoji: isEmoji,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        size: isEmoji ? (Math.random() * 12 + 18) : (Math.random() * 6 + 4),
        color: ["#10b981", "#34d399", "#fef08a", "#facc15", "#ffffff"][Math.floor(Math.random() * 5)],
        alpha: 1,
        decay: Math.random() * 0.012 + 0.012
      });
    }
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.friction;
      p.vy *= p.friction;
      p.rotation += p.rotationSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);

      if (p.isEmoji) {
        this.ctx.font = `${p.size}px sans-serif`;
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(p.emoji, 0, 0);
      } else {
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
      }

      this.ctx.restore();
    }

    requestAnimationFrame(() => this.loop());
  }
}

/* ==========================================================================
   5. POPULATE DOM WITH DATA & EVENT LISTENERS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 5.1 Initialize Canvases
  const constellation = new ConstellationCanvas("constellation-canvas");
  const particleEngine = new ParticleEngine("confetti-canvas");

  // 5.2 Set Canva Game Links (All open in new tab)
  const gameLaunchers = [
    document.getElementById("canva-game-btn"),
    document.getElementById("screen-play-overlay"),
    document.getElementById("hero-game-btn"),
    document.getElementById("nav-game-btn"),
    document.getElementById("mobile-game-btn")
  ];
  gameLaunchers.forEach(btn => {
    if (btn) {
      btn.href = CANVA_AI_GAME_URL;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
    }
  });

  // 5.3 Audio Toggle Setup
  const soundToggleBtn = document.getElementById("sound-toggle");
  const updateSoundUI = () => {
    if (!soundToggleBtn) return;
    const isMuted = !sounds.enabled;
    soundToggleBtn.innerHTML = isMuted ? `<span class="sound-icon">🔇</span>` : `<span class="sound-icon">🔊</span>`;
    soundToggleBtn.title = isMuted ? "Sound OFF (Klik untuk nyalakan)" : "Sound ON (Klik untuk matikan)";
  };
  updateSoundUI();

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
      sounds.toggle();
      updateSoundUI();
    });
  }

  // 5.4 Populate Dislok Card
  const dislokPhoto = document.getElementById("dislok-photo");
  const dislokName = document.getElementById("dislok-name");
  const dislokRole = document.getElementById("dislok-role");
  const dislokBio = document.getElementById("dislok-bio");
  const dislokQuote = document.getElementById("dislok-quote");
  const dislokBadge = document.getElementById("dislok-badge");
  const dislokZodiac = document.getElementById("dislok-zodiac");
  const dislokTraits = document.getElementById("dislok-traits");
  const cheerBtn = document.getElementById("cheer-dislok-btn");
  const sparkleCounter = document.getElementById("sparkle-counter");

  if (dislokData) {
    if (dislokPhoto) dislokPhoto.src = dislokData.photo;
    if (dislokName) dislokName.textContent = dislokData.name;
    if (dislokRole) dislokRole.textContent = dislokData.role;
    if (dislokBio) dislokBio.textContent = dislokData.bio;
    if (dislokQuote) dislokQuote.textContent = dislokData.quote;
    if (dislokBadge) dislokBadge.textContent = dislokData.badge;
    if (dislokZodiac) dislokZodiac.textContent = dislokData.zodiac;

    if (dislokTraits && dislokData.traits) {
      dislokTraits.innerHTML = dislokData.traits
        .map(trait => `<span class="trait-chip">${trait}</span>`)
        .join("");
    }

    // Sparkle counter persistence
    const savedSparkles = localStorage.getItem("lyra_sparkle_count");
    let currentSparkles = savedSparkles ? parseInt(savedSparkles, 10) : dislokData.initialSparkles;
    if (sparkleCounter) sparkleCounter.textContent = currentSparkles;

    // Cheer Dislok Button Event
    if (cheerBtn) {
      cheerBtn.addEventListener("click", (e) => {
        currentSparkles++;
        if (sparkleCounter) sparkleCounter.textContent = currentSparkles;
        localStorage.setItem("lyra_sparkle_count", currentSparkles);

        // Sound chime
        sounds.playCheerChord();

        // Confetti burst from button position
        const rect = cheerBtn.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;

        particleEngine.burst(originX, originY, 32, ["💚", "✨", "⭐", "🎉", "👑", "💫", "☕", "🌟"]);

        // Button micro-bounce
        cheerBtn.style.transform = "scale(0.94)";
        setTimeout(() => { cheerBtn.style.transform = ""; }, 120);
      });
    }
  }

  // 5.5 Populate Squad Grid (9 Members)
  const membersGrid = document.getElementById("members-grid");
  if (membersGrid) {
    membersGrid.innerHTML = membersData.map(member => createMemberCardHTML(member)).join("");

    // Attach card flip & modal triggers
    attachCardInteractions(particleEngine);
  }

  // 5.6 Category Filter Pills
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      sounds.playChime(600, 0.1);
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.dataset.filter;
      const cardContainers = document.querySelectorAll(".member-card-container");

      cardContainers.forEach(container => {
        const cat = container.dataset.category;
        if (filterVal === "all" || cat === filterVal) {
          container.classList.remove("hidden-by-filter");
        } else {
          container.classList.add("hidden-by-filter");
        }
      });
    });
  });

  // 5.7 Randomizer / Pick Random Member
  const randomizerBtn = document.getElementById("randomizer-btn");
  const randomizerBanner = document.getElementById("randomizer-banner");
  const randomizerText = document.getElementById("randomizer-text");

  if (randomizerBtn) {
    let isRolling = false;
    randomizerBtn.addEventListener("click", () => {
      if (isRolling) return;
      isRolling = true;
      randomizerBtn.disabled = true;

      const cardContainers = Array.from(document.querySelectorAll(".member-card-container:not(.hidden-by-filter)"));
      if (cardContainers.length === 0) {
        isRolling = false;
        randomizerBtn.disabled = false;
        return;
      }

      // Reset previous spotlights
      document.querySelectorAll(".member-card-container").forEach(c => c.classList.remove("spotlight-winner"));

      let steps = 18;
      let interval = 70;
      let currentIndex = 0;

      const runStep = () => {
        sounds.playRouletteTick();
        cardContainers.forEach(c => c.classList.remove("spotlight-winner"));

        const picked = cardContainers[currentIndex % cardContainers.length];
        picked.classList.add("spotlight-winner");

        currentIndex++;
        steps--;

        if (steps > 0) {
          interval += 12; // Gradual slow down
          setTimeout(runStep, interval);
        } else {
          // Final Winner chosen!
          const winnerCard = cardContainers[(currentIndex - 1) % cardContainers.length];
          const winnerId = parseInt(winnerCard.dataset.id, 10);
          const winnerData = membersData.find(m => m.id === winnerId);

          sounds.playVictory();

          if (randomizerBanner && randomizerText && winnerData) {
            randomizerText.innerHTML = `Selamat kepada <strong>${winnerData.nickname} (${winnerData.name})</strong> — ${winnerData.role}! 🎉`;
            randomizerBanner.classList.remove("hidden");
          }

          // Smooth scroll to winner card
          winnerCard.scrollIntoView({ behavior: "smooth", block: "center" });

          // Burst confetti from winner card
          const rect = winnerCard.getBoundingClientRect();
          particleEngine.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 45, ["🎉", "⭐", "💚", "🎯", "💫", "✨"]);

          isRolling = false;
          randomizerBtn.disabled = false;
        }
      };

      runStep();
    });
  }

  // 5.8 Member Detail Modal
  setupModal(particleEngine);

  // 5.9 Sticky Navbar Background & ScrollSpy
  setupNavbar();

  // 5.10 Hero Photo Card 3D Tilt & Sparkle
  setupHeroPhotoTilt(particleEngine);

  // 5.11 Back to Top Rocket
  setupBackToTop(sounds);
});

// Setup 3D Tilt & Click Interaction on Hero Group Photo
function setupHeroPhotoTilt(particleEngine) {
  const photoCard = document.getElementById("hero-photo-card");
  if (!photoCard) return;

  photoCard.addEventListener("mousemove", (e) => {
    const rect = photoCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg tilt
    const rotateY = ((x - centerX) / centerX) * 9;

    photoCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
  });

  photoCard.addEventListener("mouseleave", () => {
    photoCard.style.transform = "";
  });

  // Clicking the group photo launches a celebratory burst of stars
  photoCard.addEventListener("click", (e) => {
    sounds.playCheerChord();
    const rect = photoCard.getBoundingClientRect();
    particleEngine.burst(e.clientX || (rect.left + rect.width / 2), e.clientY || (rect.top + rect.height / 2), 26, ["💚", "✨", "👑", "⭐", "🎉", "🌟"]);
  });
}

/* ==========================================================================
   6. HELPER FUNCTIONS
   ========================================================================== */

// Generates semantic HTML for a single member card (with 3D flip support)
function createMemberCardHTML(member) {
  return `
    <div class="member-card-container" data-id="${member.id}" data-category="${member.category}">
      <div class="card-inner" id="card-inner-${member.id}">
        
        <!-- Front Face -->
        <div class="card-face card-front">
          <div>
            <div class="member-photo-wrap">
              <img src="${member.photo}" alt="Foto ${member.name}" class="member-img" 
                onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'200\\' viewBox=\\'0 0 200 200\\'><rect width=\\'200\\' height=\\'200\\' fill=\\'%23064e3b\\'/><circle cx=\\'100\\' cy=\\'85\\' r=\\'35\\' fill=\\'%2334d399\\'/><circle cx=\\'100\\' cy=\\'170\\' r=\\'55\\' fill=\\'%2310b981\\'/><text x=\\'100\\' y=\\'45\\' font-family=\\'sans-serif\\' font-size=\\'18\\' fill=\\'%23fef08a\\' text-anchor=\\'middle\\'>${member.nickname}</text></svg>';">
              <div class="member-star-badge">✦</div>
            </div>

            <div class="member-main-info">
              <h3 class="member-nickname">${member.nickname}</h3>
              <p class="member-fullname">${member.name}</p>
              
              <div>
                <span class="member-role-badge">${member.role}</span>
              </div>
              <div class="member-zodiac">${member.zodiac}</div>
              <p class="member-motto">"${member.motto}"</p>
            </div>
          </div>

          <!-- Bottom Card Buttons -->
          <div class="card-actions-row">
            <button class="btn btn-secondary btn-flip-front" data-id="${member.id}" title="Balik kartu untuk lihat fun fact">
              <span>Fun Fact</span>
            </button>
            <button class="btn btn-primary btn-detail-modal" data-id="${member.id}" title="Lihat profil detail">
              <span>Detail</span>
            </button>
          </div>
        </div>

        <!-- Back Face (Revealed on 3D Flip) -->
        <div class="card-face card-back">
          <div class="back-header">
            <span class="back-title">${member.nickname} • Fun Dossier</span>
            <span class="back-badge">✦</span>
          </div>

          <div class="back-body">
            <div class="fact-block">
              <strong>Fun Fact:</strong>
              <p>${member.funFact}</p>
            </div>

            <div class="quote-block">
              <strong>Favorite Quote:</strong>
              <p>"${member.quote}"</p>
            </div>

            <div class="tech-block">
              <span class="tech-label">Tech &amp; Stack:</span>
              <span>${member.favStack}</span>
            </div>
          </div>

          <button class="btn btn-flip-back" data-id="${member.id}" title="Kembali ke depan kartu">
            <span>Balik ke Depan</span>
          </button>
        </div>

      </div>
    </div>
  `;
}

// Attach Flip and Modal interactions to cards
function attachCardInteractions(particleEngine) {
  // Flip to Back
  document.querySelectorAll(".btn-flip-front").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      sounds.playFlip();
      const id = btn.dataset.id;
      const inner = document.getElementById(`card-inner-${id}`);
      if (inner) inner.classList.add("flipped");
    });
  });

  // Flip to Front
  document.querySelectorAll(".btn-flip-back").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      sounds.playFlip();
      const id = btn.dataset.id;
      const inner = document.getElementById(`card-inner-${id}`);
      if (inner) inner.classList.remove("flipped");
    });
  });

  // Modal Open Trigger
  document.querySelectorAll(".btn-detail-modal").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      sounds.playChime(700, 0.15);
      const id = parseInt(btn.dataset.id, 10);
      const member = membersData.find(m => m.id === id);
      if (member) openMemberModal(member, particleEngine);
    });
  });
}

// Setup Modal Logic
function setupModal(particleEngine) {
  const modal = document.getElementById("member-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Click outside dialog to close
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Escape key closes modal
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function openMemberModal(member, particleEngine) {
  const modal = document.getElementById("member-modal");
  const modalContent = document.getElementById("modal-content");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-profile-header">
      <img src="${member.photo}" alt="${member.name}" class="modal-avatar-img"
        onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23064e3b\\'/><circle cx=\\'50\\' cy=\\'50\\' r=\\'30\\' fill=\\'%2334d399\\'/></svg>';">
      <div class="modal-title-group">
        <h3>${member.name}</h3>
        <p>${member.role} • Kelompok Lyra</p>
        <span class="badge-tag badge-gold" style="margin-top: 0.35rem; display: inline-block;">${member.zodiac}</span>
      </div>
    </div>

    <div class="modal-body-content">
      <div class="modal-box">
        <h4 class="modal-section-title">Personal Motto</h4>
        <p>"${member.motto}"</p>
      </div>

      <div class="modal-box">
        <h4 class="modal-section-title">Fun Fact Osjur</h4>
        <p>${member.funFact}</p>
      </div>

      <div class="modal-box">
        <h4 class="modal-section-title">Favorite Quote</h4>
        <p>"${member.quote}"</p>
      </div>

      <div class="modal-box">
        <h4 class="modal-section-title">Tech &amp; Stack</h4>
        <p>${member.favStack} • Social: <strong style="color: var(--starlight-gold);">${member.social}</strong></p>
      </div>

      <button id="modal-cheer-btn" class="btn btn-gold modal-cheer-btn">
        <span>Kirim Semangat Buat ${member.nickname}!</span>
      </button>
    </div>
  `;

  // Attach cheer button inside modal
  const cheerBtn = document.getElementById("modal-cheer-btn");
  if (cheerBtn) {
    cheerBtn.addEventListener("click", () => {
      sounds.playCheerChord();
      const rect = cheerBtn.getBoundingClientRect();
      particleEngine.burst(rect.left + rect.width / 2, rect.top, 25, ["💚", "✨", "⭐", "🎉", "🔥"]);
      cheerBtn.textContent = `Terkirim! Semangat ${member.nickname} 🚀`;
      cheerBtn.disabled = true;
    });
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

// Setup Navbar interactions (Mobile Drawer, Active Spy)
function setupNavbar() {
  const navbar = document.querySelector(".navbar-wrapper");
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-item");

  // Mobile menu toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.contains("open");
      if (isOpen) {
        mobileDrawer.classList.remove("open");
        mobileToggle.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
      } else {
        mobileDrawer.classList.add("open");
        mobileToggle.classList.add("active");
        mobileToggle.setAttribute("aria-expanded", "true");
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        mobileToggle.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scrollspy & Glass blur elevation
  window.addEventListener("scroll", () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Nav active link spy
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      const navItem = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
        if (navItem) navItem.classList.add("active");
      }
    });
  }, { passive: true });
}

// Setup Back to Top Rocket
function setupBackToTop(sounds) {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    sounds.playChime(800, 0.25, "triangle");
    btn.classList.add("launching");
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      btn.classList.remove("launching");
    }, 900);
  });
}
