import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function render(daftar) {
  wadah.textContent = "";
  
  // Tangani keadaan kosong
  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }
  
  kosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// Event Delegation untuk tombol filter
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; // Abaikan klik di luar tombol

  const kategori = tombol.dataset.kategori;
  
  // Saring data
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );
  
  // Perbarui halaman
  tandaiTombolAktif(tombol);
  render(terpilih);
});

// Render awal saat halaman pertama kali dibuka
render(daftarProyek);