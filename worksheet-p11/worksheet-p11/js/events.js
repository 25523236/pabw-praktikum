import { pilihKategori } from "./state.js";

export function pasangPendengar() {
  // 1. Event listener filter kategori
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;
      const kategori = tombol.dataset.kategori;
      pilihKategori(kategori);
    });
  }

  // 2. Event listener form kontak
  const formKontak = document.querySelector("form");
  if (!formKontak) return;

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

    if (tombolKirim) {
      tombolKirim.disabled = !formSah;
    }
    return formSah;
  }

  semuaKolom.forEach((kolom) => {
    kolom.addEventListener("input", periksaForm);
  });

  formKontak.addEventListener("submit", (event) => {
    event.preventDefault();
    const sah = periksaForm();
    if (!sah) {
      const kolomPertamaSalah = formKontak.querySelector(
        '[aria-invalid="true"]'
      );
      if (kolomPertamaSalah) kolomPertamaSalah.focus();
    } else {
      alert("Form valid, pesan terkirim!");
      formKontak.reset();
      periksaForm();
    }
  });

  periksaForm();
}