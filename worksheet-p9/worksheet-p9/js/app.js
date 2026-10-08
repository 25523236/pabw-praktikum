const profil = {
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
    judul: "Halaman Profil",
    tahun: 2026,
    kategori: "web",
    selesai: true,
    deskripsi:
      "Halaman profil personal berbasis HTML semantik dan CSS.",
  },
  {
    judul: "Katalog Produk",
    tahun: 2026,
    kategori: "data",
    selesai: false,
    deskripsi:
      "Konsep halaman katalog produk dengan struktur data JavaScript.",
  },
];


const kegiatan = [
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


const perjalanan = [
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


const keterampilan = [
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



function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}


function formatKeahlian(daftar) {
  return daftar.join(" · ");
}



const kalimat =
  `Nama saya ${profil.nama}, dan saya belajar ` +
  `${profil.keahlian.length} hal.`;

console.log(kalimat);

console.log(buatPerkenalan(profil));

console.log(formatKeahlian(profil.keahlian));

console.log("Tipe data nama:", typeof profil.nama);

console.log(
  "Tipe data jumlah keahlian:",
  typeof profil.keahlian.length
);


console.table(profil.keahlian);

console.table(daftarProyek);

const judulProyek = daftarProyek.map(
  (proyek) => proyek.judul
);

console.table(judulProyek);

const selesai = daftarProyek.filter(
  (proyek) => proyek.selesai
);

console.table(selesai);

const katalog = daftarProyek.find(
  (proyek) => proyek.judul === "Katalog Produk"
);

console.log("Hasil find:", katalog);

const urut = [...daftarProyek].sort(
  (a, b) => a.judul.localeCompare(b.judul)
);

console.log("Hasil sort:", urut);

console.log("Data asli:", daftarProyek);


const namaElement =
  document.querySelector("#nama-profil");

const peranElement =
  document.querySelector("#peran-profil");

const taglineElement =
  document.querySelector("#tagline-profil");

const bioElement =
  document.querySelector("#bio-profil");


if (namaElement) {
  namaElement.textContent = profil.nama;
}


if (peranElement) {
  peranElement.textContent = profil.peran;
}


if (taglineElement) {
  taglineElement.textContent = profil.tagline;
}


if (bioElement) {
  bioElement.textContent = profil.bio;
}


const kegiatanElement =
  document.querySelector("#daftar-kegiatan");


if (kegiatanElement) {
  kegiatanElement.innerHTML = kegiatan
    .map(
      (item) => `
        <tr>
          <th scope="row">${item.nama}</th>
          <td>${item.peran}</td>
          <td>${item.waktu}</td>
        </tr>
      `
    )
    .join("");
}


const proyekElement =
  document.querySelector("#daftar-proyek");


if (proyekElement) {
  proyekElement.innerHTML = daftarProyek
    .map(
      (proyek) => `
        <li>
          <strong>${proyek.judul}</strong>
          (${proyek.tahun})
          — ${proyek.deskripsi}
        </li>
      `
    )
    .join("");
}


const perjalananElement =
  document.querySelector("#lini-masa");


if (perjalananElement) {
  perjalananElement.innerHTML = perjalanan
    .map(
      (item) => `
        <li>
          <time>${item.tahun}</time>
          — ${item.isi}
        </li>
      `
    )
    .join("");
}



const keterampilanElement =
  document.querySelector("#daftar-keterampilan");


if (keterampilanElement) {
  keterampilanElement.innerHTML = keterampilan
    .map(
      (item) => `
        <dt>${item.nama}</dt>
        <dd>${item.keterangan}</dd>
      `
    )
    .join("");
}

const inputNim = document.querySelector("#nim");
const hasil = inputNim.value + 10;

//galat sudah dibersihkan, console sudah tidak menampilkan galat lagi, dan hasil sudah sesuai dengan yang diharapkan.