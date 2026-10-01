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

### Design token halaman profil

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

### Catatan Penggunaan AI
AI digunakan untuk membantu memahami konsep CSS Design. 

## Pertemuan 5 - FLEXBOX & GRID pada CSS

Dokumentasi praktikum pertemuan ke-05 yaitu tata letak web yang memanfaatkan kombinasi CSS Grid dan Flexbox. Ini adalah perubahan kode CSS pada worksheet-p4 

## Ringkasan Pengerjaan

- **Penerapan Layout**: Kerangka utama dan galeri disusun memakai CSS Grid, sedangkan komponen navigasi dan bagian internal kartu menggunakan Flexbox
- **Galeri Otomatis**: Memanfaatkan `auto-fit` dan `minmax` agar grid galeri bersifat fleksibel dan penyesuaian layar berjalan otomatis tanpa media query.
- **Struktur CSS**: Kode dibagi ke dalam 5 modul terpisah (`tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`) dengan dukungan Dark Mode

## Pertemuan 6 — Responsif Mobile-First
Dokumentasi praktikum pertemuan ke-06 mengenai penerapan tata letak responsif berbasis Mobile-First menggunakan media query dan unit relatif.

## Ringkasan Pengerjaan

- **Mobile-First**: Menulis gaya dasar untuk layar sempit (360px) tanpa media query
- **Pengujian Layar**: Memastikan tampilan rapi dan bebas dari gulir mendatar (horizontal scroll) pada lebar 360px, 768px, dan 1280px
- **Penanganan Media**: Membatasi gambar dengan `max-width: 100%` serta memberi wadah `overflow-x: auto` pada tabel
- **Berkas Baru**: Menambahkan modul `responsif.css`
