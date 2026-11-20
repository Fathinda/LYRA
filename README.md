# ✦ LYRA — Sains Data ITSB Axis 2026

Website interaktif, *playful*, dan modern untuk memperkenalkan **Kelompok LYRA**, kelompok orientasi jurusan (osjur) Program Studi **Sains Data Institut Teknologi Sains Bandung (ITSB) — Axis 2026**.

Didesain dengan tema **Cosmic-Botanical & Emerald Green** terinspirasi dari rasi bintang kecapi langit *Lyra* dan bintang tercerahnya *Vega*.

---

## 🌟 Fitur Utama

1. **Sticky Glassmorphic Navbar**:
   - Logo `✦ LYRA` dengan animasi kilau rasi bintang.
   - Quick navigation links (`Dislok`, `9 Members`, `Demo Game`, `Filosofi`).
   - Tombol audio synth toggle (efek suara arcade retro Web Audio API).
   - Tombol CTA `🎮 Play Game` dan mobile hamburger navigation.
2. **Interactive Hero Section**:
   - Badge resmi: `SAINS DATA ITSB • AXIS 2026`.
   - Kanvas konstelasi interaktif dengan fisika gravitasi kursor (menarik garis bintang ke kursor).
   - Tombol CTA kembar: *Mainkan Demo Game* & *Kenalan Sama Squad*.
   - Strip stat kelompok: 1 Dislok, 9 Members, 100% Solid & Fun Vibe.
3. **Filosofi & Constellation Strip**:
   - Penjelasan nama *Lyra*, bintang Vega, serta nilai harmoni antara data, logika, dan solidaritas.
4. **Spotlight 1 Dislok Pembimbing**:
   - Kartu featured khusus dengan bingkai cincin rotasi emas & mahkota.
   - Tombol interaktif **"Kasih Apresiasi / Sparkle"** yang memicu semburan floating emoji/confetti (`💚`, `✨`, `⭐`, `🎉`, `👑`, `🚀`) & counter apresiasi yang tersimpan di `localStorage`.
5. **Playful Squad Grid (9 Members)**:
   - Grid responsif 3×3 (desktop) dan 1–2 kolom (mobile).
   - Efek **3D Card Flip**: sisi depan menampilkan foto, nama, badge peran, zodiac vibe; sisi belakang menampilkan fun fact osjur, quote favorit, dan tech stack.
   - Modal detail popup interaktif dengan tombol kirim semangat.
   - Fitur **"🎲 Pick Random Member!"**: animasi putaran roulette seru yang menyorot anggota acak dengan efek spotlight & konfeti.
   - Filter peran: Semua, Tech & Code, Strategi, Vibe Maker.
6. **Arcade-Style Canva AI Game Showcase**:
   - Kotak bergaya arkade retro dengan lampu indikator, efek CRT scanlines, dan preview monitor.
   - Panduan cara main 3 langkah ringkas.
   - Tombol berdenyut `🚀 Masuk ke Demo Game (Canva AI)` yang membuka link game Canva AI kelompokmu.
7. **Footer & Back-to-Top**:
   - Minimalist cosmic footer dengan tombol roket `🚀` kembali ke atas.

---

## 🛠️ Cara Kustomisasi Data & Link

Semua data anggota, dislok, dan link game Canva AI terpusat di bagian paling atas file [script.js](file:///d:/LYRA/script.js):

```javascript
// Ganti URL dengan link game Canva AI kelompokmu:
const CANVA_AI_GAME_URL = "https://dolphin-zpkhz7.my.canva.site/errer";

// Edit Data Dislok:
const dislokData = {
  name: "Nama Dislok",
  nickname: "Panggilan",
  role: "The Cosmic Navigator & Chief Mentor",
  photo: "assets/dislok.jpg",
  bio: "Deskripsi singkat dan fun...",
  quote: '"Quote mutiara..."',
  zodiac: "Leo • Alpha Lyrae Spirit",
  traits: ["Kopi", "Anti Panik", "Data Mining"]
};

// Edit Data 9 Anggota:
const membersData = [
  {
    id: 1,
    name: "Nama Lengkap 1",
    nickname: "Panggilan",
    photo: "assets/member-1.jpg",
    role: "The Strategist",
    roleIcon: "♟️",
    category: "strategy", // 'tech', 'strategy', atau 'vibe'
    zodiac: "Aries • Vega Spark",
    motto: "Motto hidup...",
    funFact: "Fun fact osjur...",
    quote: "Quote favorit...",
    favStack: "Python • Pandas • SQL",
    social: "@username"
  },
  // ... member 2 sampai 9
];
```

### Mengganti Foto:
Cukup simpan foto berformat `.jpg` atau `.png` ke dalam folder `assets/` dengan nama:
- `assets/fotbar.jpeg` (Foto bersama sekelompok di Hero Section)
- `assets/dislok.jpg` (Foto Dislok pembimbing)
- `assets/member-1.jpg` sampai `assets/member-9.jpg` (Foto 9 squad members)
- `assets/game-preview.png` (Preview mini-game Canva AI)

*(Jika foto belum tersedia, sistem sudah dilengkapi avatar generator SVG otomatis sehingga tampilan tetap rapi tanpa gambar rusak).*

---

## 🚀 Cara Menjalankan & Deploy

### Jalankan Lokal:
Buka file [index.html](file:///d:/LYRA/index.html) langsung di browser apa pun, atau gunakan Live Server:
```bash
# Menggunakan python built-in server:
python -m http.server 3000
```
Buka `http://localhost:3000` di browsermu.

### Deploy ke Vercel / Netlify / GitHub Pages:
Proyek ini dibuat menggunakan **Pure Semantic HTML5, Modern CSS3, dan Vanilla JavaScript** tanpa ketergantungan build-tool yang berat. Kamu bisa langsung meng-upload repositori ini ke **Vercel**, **Netlify**, atau **GitHub Pages** dan langsung *live* dalam hitungan detik!
