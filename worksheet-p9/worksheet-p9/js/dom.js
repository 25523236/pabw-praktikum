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

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;
  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );
  tandaiTombolAktif(tombol);
  render(terpilih);
});

render(daftarProyek);

const formKontak = document.querySelector("form");
const tombolKirim = formKontak.querySelector("button[type='submit']");
const semuaKolom = formKontak.querySelectorAll("input, textarea");

function periksaForm() {
  let formSah = true;

  semuaKolom.forEach((kolom) => {
    let sah = true;
    const nilai = kolom.value.trim();

    if (nilai === "") {
      sah = false;
    } else if (kolom.type === "email" && !nilai.includes("@")) {
      sah = false;
    } else if (kolom.id === "nim" && !/^[0-9]{8}$/.test(nilai)) {
      sah = false;
    }

    if (sah) {
      kolom.removeAttribute("aria-invalid");
    } else {
      kolom.setAttribute("aria-invalid", "true");
      formSah = false;
    }
  });

  tombolKirim.disabled = !formSah;
  return formSah;
}

semuaKolom.forEach((kolom) => {
  kolom.addEventListener("input", periksaForm);
});

formKontak.addEventListener("submit", (event) => {
  event.preventDefault();
  const sah = periksaForm();
  if (!sah) {
    const kolomPertamaSalah = formKontak.querySelector('[aria-invalid="true"]');
    if (kolomPertamaSalah) {
      kolomPertamaSalah.focus();
    }
  } else {
    alert("Form valid, pesan terkirim!");
    formKontak.reset();
    periksaForm();
  }
});

periksaForm();