import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

export function simpan(stateObj) {
  const isi = { versi: VERSI, kategoriAktif: stateObj.kategoriAktif };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
}

const simpanan = muat();

export const state = {
  daftarProyek: [...daftarProyek],
  kategoriAktif: simpanan?.kategoriAktif ?? "semua",
};

export function pilihKategori(kategoriBaru) {
  state.kategoriAktif = kategoriBaru;
  simpan(state);
  render(state);
}