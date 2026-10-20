export const profil = {
  nama: "Diah Putri Pertiwi",
  peran: "Mahasiswa Informatika yang belajar front-end",
  tagline:
    "Informatics Student at Universitas Islam Indonesia | Tech Explorer | Book Lover, Interior Designer & Fashion Enthusiast.",
  bio:
    "Saya Diah Putri Pertiwi, mahasiswi Program Studi Informatika Universitas Islam Indonesia angkatan 2025 yang sedang menempuh semester 3. Di tengah kesibukan mempelajari dunia teknologi dan logika pemrograman, saya gemar meluangkan waktu untuk membaca buku serta mengeksplorasi dunia estetika dan mode.",
  keahlian: ["HTML", "CSS", "Python", "Java"],
};

export const daftarProyek = [
  {
    id: 1,
    judul: "Halaman Profil",
    tahun: 2026,
    kategori: "web",
    selesai: true,
    deskripsi:
      "Halaman profil personal berbasis HTML semantik dan CSS.",
  },
  {
    id:2,
    judul: "Katalog Produk",
    tahun: 2026,
    kategori: "data",
    selesai: false,
    deskripsi:
      "Konsep halaman katalog produk dengan struktur data JavaScript.",
  },
  {
    id: 3,
    judul: "Proyek Scholampia",
    tahun: 2026,
    kategori: "web",
    selesai: false,
    deskripsi: "Pengembangan antarmuka aplikasi pendidikan berbasis web.",
  },
];

export const kegiatan = [
  {
    nama: "Pemrograman Web berbasis HTML",
    peran: "Mahasiswa",
    waktu: "September 2026",
  },
  {
    nama: "Pemrograman Web berbasis CSS",
    peran: "Mahasiswa",
    waktu: "September 2026",
  },
  {
    nama: "Proyek Scholampia",
    peran: "Mahasiswa",
    waktu: "September–Desember 2026",
  },
];

export const perjalanan = [
  {
    tahun: "2022",
    isi: "Lulus dari Sekolah Menengah Pertama (SMP).",
  },
  {
    tahun: "2025",
    isi:
      "Lulus dari Sekolah Menengah Atas (SMA) dengan jurusan Ilmu Pengetahuan Alam (IPA) murni.",
  },
  {
    tahun: "2025",
    isi:
      "Mulai menempuh pendidikan Sarjana Informatika di Universitas Islam Indonesia.",
  },
];

export const keterampilan = [
  {
    nama: "Pengembangan Web & Perangkat Lunak",
    keterangan:
      "Pembuatan website menggunakan HTML dan CSS, serta penerapan logika pemrograman dengan Python dan Java.",
  },
  {
    nama: "Perancangan Interior & Estetika",
    keterangan:
      "Eksplorasi tata ruang, pemilihan skema warna, dan tata letak fungsional.",
  },
  {
    nama: "Literasi & Imajinasi Kreatif",
    keterangan:
      "Hobi membaca buku membantu memperkaya wawasan, memperluas imajinasi, serta memahami sudut pandang pengguna.",
  },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export function formatKeahlian(daftar) {
  return daftar.join(" · ");
}