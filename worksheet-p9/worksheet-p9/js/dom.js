import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  // Memasukkan teks judul ke dalam elemen
  li.textContent = proyek.judul; 
  return li;
}

function render(daftar) {
  // Lembar B.2: Wadah harus dikosongkan sebelum diisi ulang
  wadah.textContent = "";

  // B.1: Memasukkan proyek ke wadah
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

// Menjalankan fungsi render saat pertama kali halaman dimuat
render(daftarProyek);