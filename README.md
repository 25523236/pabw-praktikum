# PABW — Diah Putri Pertiwi — 25523236

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web.

## Pertemuan 4 — Halaman Profil Saya

- **Arah Visual:** Soft dan playful (Tema Sakura Pink & Mode Gelap Dongker)
- **Warna Utama:** Pink Sakura (`#C2416C` / `--clr-sakura-primary`)
- **Warna Netral:** 
  - Terang: Soft Pink (`#FFF5F7`) dan Putih (`#FFFFFF`)
  - Gelap: Biru Dongker (`#0F172A` untuk latar & `#1E293B` untuk kartu)
- **Ukuran Huruf:** Isi `1rem`, Judul Bagian `1.5rem`, Judul Utama `2.25rem`
- **Jarak Dasar:** Spasi standar `1rem`, jarak antar bagian `1.5rem`
- **Radius & Bayangan:** Radius `0.75rem`, Bayangan `0 4px 18px rgba(194, 65, 108, 0.08)`

- ## Design token halaman profil

- **Berkas gaya yang dibuat:** `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`
- **Warna utama:** `#C2416C` (Sakura Pink), dipilih karena memberikan identitas visual yang lembut, hangat, serta mudah dipadukan dengan mode gelap (dongker) tanpa mengurangi tingkat kontras.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| `--clr-sakura-primary` | `#C2416C` | Tombol, tautan, penanda utama |
| `--teks-utama` | `#2D3748` / `#F1F5F9` | Warna teks utama (Light/Dark) |
| `--bg-halaman` | `#FFF5F7` / `#0F172A` | Latar halaman (Light/Dark) |
| `--radius-md` | `0.5rem` | Sudut membulat kartu & tombol |
| `--space-4` | `1rem` | Jarak standar antar elemen |

*Kriteria selesai saya: mengubah `--clr-sakura-primary` di satu baris pada `tokens.css` harus mengubah warna seluruh aksen tombol, tautan, judul, dan garis fokus di halaman.*

## Catatan Penggunaan AI
AI digunakan untuk membantu memahami konsep CSS Design. 

# PERTEMUAN 5 - FLEXBOX & GRID PADA CSS P4

Dokumentasi praktikum tata letak web responsif memanfaatkan kombinasi CSS Grid dan Flexbox, dilengkapi skema warna tema gelap beraksen oranye.

## Ringkasan Pengerjaan

- **Penerapan Layout**: Kerangka utama dan galeri disusun memakai CSS Grid, sedangkan komponen navigasi dan bagian internal kartu menggunakan Flexbox[cite: 1, 5, 8].
- **Galeri Otomatis**: Memanfaatkan `auto-fit` dan `minmax` agar grid galeri bersifat fleksibel dan penyesuaian layar berjalan otomatis tanpa media query.
- **Uji Tampilan**: Memastikan halaman bebas *overflow* saat diuji dari layar HP (360px) hingga layar monitor lebar (1280px)[cite: 7].
- **Struktur CSS**: Kode dibagi ke dalam 5 modul terpisah (`tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`) dengan dukungan Dark Mode[cite: 1].

## Jawaban Worksheet P5

### A.3 Kapan Pakai Flex vs Grid
- **Header & Navigasi**: Flexbox (penataan satu dimensi/sumbu)[cite: 5].
- **Tata Letak Utama**: CSS Grid (pembagian area makro 2 kolom)[cite: 5].
- **Galeri Kartu**: CSS Grid (penyesuaian jumlah kolom secara responsif)[cite: 5].
- **Komponen Dalam Kartu**: Flexbox (penyusunan elemen internal)[cite: 5].

### D.3 Teknik Penempatan Elemen
- **Spanning Kartu**: Menggunakan `grid-column: span 2;`[cite: 6].
- **Skema Tata Letak**: Mengatur struktur halaman via `grid-template-areas`[cite: 6].

### F.2 Sintaks Kunci Galeri Responsif
```css
grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
