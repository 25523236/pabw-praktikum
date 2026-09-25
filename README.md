# PABW — Diah Putri Pertiwi — 25523236

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web.

## Pertemuan 4 — Halaman Profil Saya

- **Judul Halaman**: Halaman Profil Diah Putri Pertiwi
- **Arah Visual**: Soft dan Playful (Sakura & Fashion Elegance)
- **Warna Utama**: `#C2416C` (Rose Pink), dipilih karena memberikan kesan ramah, modern, dan estetik.
- **Ukuran Huruf**: Isi `1rem`, Judul Bagian `1.5rem`, Judul Utama `2.25rem`.
- **Jarak & Radius**: Spasi standar `1rem`, Jarak antar bagian `1.5rem`, Radius `0.75rem`.

### Token yang Saya Tetapkan

| Token Semantik | Nilai (Tema Terang) | Nilai (Tema Gelap) | Peran / Untuk Apa |
| --- | --- | --- | --- |
| `--bg-halaman` | `#FFF5F7` | `#0F172A` | Latar utama halaman |
| `--bg-kartu` | `#FFFFFF` | `#1E293B` | Latar kartu & panel |
| `--bg-aksen` | `#FCE7F0` | `#2D2244` | Latar tombol nav, badge, & item aktif |
| `--teks-utama` | `#3B2C35` | `#F3F4F6` | Teks isi utama |
| `--teks-judul` | `#C2416C` | `#F472B6` | Judul bagian & pautan |
| `--bingkai` | `#F9A8D4` | `#4B5563` | Garis tepi & pemisah |

### Evaluasi 3 Struktur Tambahan

1. **Tanya Jawab (`<details>` & `<summary>`)**:
   - *Elemen*: `<details>` dan `<summary>`
   - *Sasaran*: Pengunjung profil / dosen.
   - *Alasan*: Menyajikan informasi tambahan secara interaktif tanpa JavaScript.

2. **Lini Masa (`<ol>` & `<time>`)**:
   - *Elemen*: `<ol class="lini">` dan `<time>`
   - *Sasaran*: Rekruter atau pembaca umum.
   - *Alasan*: Memetakan rekam jejak akademis secara kronologis dan terstruktur.

3. **Keterampilan (`<dl>`, `<dt>`, `<dd>`)**:
   - *Elemen*: `<dl class="keterampilan">`
   - *Sasaran*: Partner proyek / rekruter.
   - *Alasan*: Menggunakan elemen semantik pasangan istilah-penjelasan untuk menampilkan daftar keahlian teknis.

### Pengungkapan Penggunaan AI
Pengerjaan kerangka dasar HTML, token semantik, dan tata letak flexbox dilakukan mandiri. AI digunakan sebagai alat bantu audit bug CSS (penyesuaian kontras warna WCAG AA dan struktur CSS dark mode).
