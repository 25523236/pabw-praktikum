import { pilihKategori, aturUlang, state } from "./state.js";
import { render } from "./dom.js";

export function pasangPendengar() {

  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;

      if (tombol.id === "tombol-reset") {
        pilihKategori("semua"); 
        return;
      }

      const kategori = tombol.dataset.kategori;
      if (kategori) {
        pilihKategori(kategori);
      }
    });
  }

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