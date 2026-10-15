import { state } from "./state.js";
import { render, inisialisasiProfil } from "./dom.js";
import { pasangPendengar } from "./events.js";

inisialisasiProfil();
render(state);
pasangPendengar();

window.state = state;
window.render = render;