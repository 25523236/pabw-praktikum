import { profil, kegiatan, perjalanan, keterampilan } from "./data.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

export function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

export function saring(state) {
  if (state.kategoriAktif === "semua") {
    return state.daftarProyek;
  }
  return state.daftarProyek.filter(
    (proyek) => proyek.kategori === state.kategoriAktif
  );
}

export function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

export function render(state) {
  if (!wadah) return;
  wadah.textContent = "";

  const tampil = saring(state);

  if (tampil.length === 0) {
    if (kosong) kosong.hidden = false;
    tandaiTombolAktif(state.kategoriAktif);
    return;
  }

  if (kosong) kosong.hidden = true;
  tampil.forEach((proyek) => wadah.append(buatKartu(proyek)));
  tandaiTombolAktif(state.kategoriAktif);
}

export function inisialisasiProfil() {
  const namaEl = document.querySelector("#nama-profil");
  const peranEl = document.querySelector("#peran-profil");
  const taglineEl = document.querySelector("#tagline-profil");
  const bioEl = document.querySelector("#bio-profil");

  if (namaEl) namaEl.textContent = profil.nama;
  if (peranEl) peranEl.textContent = profil.peran;
  if (taglineEl) taglineEl.textContent = profil.tagline;
  if (bioEl) bioEl.textContent = profil.bio;

  const kegiatanEl = document.querySelector("#daftar-kegiatan");
  if (kegiatanEl) {
    kegiatanEl.innerHTML = kegiatan
      .map(
        (item) => `
        <tr>
          <th scope="row">${item.nama}</th>
          <td>${item.peran}</td>
          <td>${item.waktu}</td>
        </tr>`
      )
      .join("");
  }

  const perjalananEl = document.querySelector("#lini-masa");
  if (perjalananEl) {
    perjalananEl.innerHTML = perjalanan
      .map(
        (item) => `
        <li>
          <time>${item.tahun}</time> — ${item.isi}
        </li>`
      )
      .join("");
  }

  const keterampilanEl = document.querySelector("#daftar-keterampilan");
  if (keterampilanEl) {
    keterampilanEl.innerHTML = keterampilan
      .map(
        (item) => `
        <dt>${item.nama}</dt>
        <dd>${item.keterangan}</dd>`
      )
      .join("");
  }
}