<script setup>
import { onMounted, watch } from 'vue'
import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { profil, kegiatan, perjalanan, keterampilan } from './data.js'
onMounted(() => {
  const isi = muat()
  if (isi && isi.kategoriAktif) {
    state.kategoriAktif = isi.kategoriAktif
  }
})

watch(
  state,
  (nilai) => {
    simpan(nilai)
  },
  { deep: true }
)

function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <a class="lewati" href="#utama">Lewati ke konten utama</a>

  <KepalaProfil :profil="profil" />

  <main id="utama">
    <section id="tentang">
      <h2>Tentang saya</h2>

      <figure class="foto">
        <img
          src="/media/foto-profil.jpeg"
          alt="Foto profil Diah Putri Pertiwi."
          width="480"
          height="300"
          loading="lazy"
        />
        <figcaption>Foto profil</figcaption>
      </figure>

      <p id="bio-profil">{{ profil.bio }}</p>

      <table>
        <caption>Kegiatan yang saya ikuti semester ini</caption>
        <thead>
          <tr>
            <th scope="col">Kegiatan</th>
            <th scope="col">Peran</th>
            <th scope="col">Waktu</th>
          </tr>
        </thead>
        <tbody id="daftar-kegiatan">
          <tr v-for="item in kegiatan" :key="item.nama">
            <th scope="row">{{ item.nama }}</th>
            <td>{{ item.peran }}</td>
            <td>{{ item.waktu }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="karya">
      <h2>Karya saya</h2>
      <TombolFilter />
      <DaftarProyek />
    </section>

    <FormKontak />

    <section id="tanya-jawab">
      <h2>Tanya Jawab</h2>
      <details>
        <summary>Mengapa menyukai integrasi Desain & Teknologi?</summary>
        <p>
          Karena perpaduan logika pemrograman dan estetika desain antarmuka
          menciptakan pengalaman pengguna yang tidak hanya fungsional tetapi
          juga nyaman dipandang.
        </p>
      </details>
      <details>
        <summary>Perangkat lunak apa yang sering digunakan?</summary>
        <p>
          VS Code, Chrome DevTools, Figma untuk desain antarmuka, serta tools
          perancangan tata ruang 3D.
        </p>
      </details>
    </section>

    <section id="perjalanan">
      <h2>Perjalanan Akademik</h2>
      <ol id="lini-masa" class="lini">
        <li v-for="(item, idx) in perjalanan" :key="idx">
          <time>{{ item.tahun }}</time> — {{ item.isi }}
        </li>
      </ol>
    </section>

    <section id="keterampilan">
      <h2>Keterampilan & Minat</h2>
      <dl id="daftar-keterampilan" class="keterampilan">
        <template v-for="item in keterampilan" :key="item.nama">
          <dt>{{ item.nama }}</dt>
          <dd>{{ item.keterangan }}</dd>
        </template>
      </dl>
    </section>
  </main>

  <footer class="kaki">
    <p>
      Diah Putri Pertiwi · 25523236 · <time datetime="2026">2026</time>
    </p>
  </footer>
</template>