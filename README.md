# Praktikum P05 — Layout & Styling Halaman Profil Saya

Pengerjaan lanjutan dari P04 dengan penambahan struktur semantik baru, tata letak CSS Grid/Flexbox, komponen form, serta dukungan tema gelap.

## Isi Paket

- `profil.html` — Halaman profil utama yang sudah dilengkapi 3 elemen semantik baru.
- `css/` — Berisi 5 file CSS terpisah (`tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`).
- `media/` — Berisi foto profil.

## Deskripsi Tiga Bagian Tambahan

1. **Tanya Jawab (`<details> / <summary>`)**: Ditujukan bagi pengunjung profil untuk mengetahui pertanyaan umum seputar latar belakang dan preferensi kerja secara interaktif tanpa memenuhi ruang layar.
2. **Lini Masa (`<ol>`)**: Ditujukan bagi perekrut atau rekan kerja untuk melihat riwayat pendidikan dan pengalaman secara kronologis dan terstruktur.
3. **Keterampilan (`<dl>`)**: Ditujukan untuk menampilkan daftar keahlian teknis beserta deskripsi tingkat penguasanya secara ringkas dan rapi.

## Evaluasi yang Dilaporkan

- **W3C — Nu Html Checker**: 0 Error, 0 Warning (seluruh elemen HTML valid sesuai standar W3C).
- **WCAG — Kontras Warna**: Memenuhi standar kontras AA pada tema terang (light mode) maupun tema gelap (dark mode).
- **WCAG — Aksesibilitas Keyboard**: Seluruh bagian baru (`<details>`, tombol pengalih tema, form, dan link) dapat dijangkau dan dioperasikan menggunakan tombol `Tab`.
- **WCAG — Independensi Warna**: Informasi tetap dapat dipahami dengan jelas tanpa mengandalkan visual warna semata (menggunakan hirarki tipografi, batas border, dan garis fokus).
