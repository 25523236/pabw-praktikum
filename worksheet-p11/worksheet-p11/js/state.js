import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

export const state = {
  daftarProyek: [...daftarProyek],
  kategoriAktif: "semua",
};

export function pilihKategori(kategoriBaru) {
  state.kategoriAktif = kategoriBaru;
  render(state);
}