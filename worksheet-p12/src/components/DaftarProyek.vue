<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const tampil = computed(() => {
  if (state.kategoriAktif === 'semua') {
    return state.daftarProyek
  }
  return state.daftarProyek.filter(
    (proyek) => proyek.kategori === state.kategoriAktif
  )
})
</script>

<template>
  <ul id="daftar">
    <li v-for="proyek in tampil" :key="proyek.id" class="kartu">
      {{ proyek.judul }}
    </li>
  </ul>
  <p id="pesan-kosong" v-if="tampil.length === 0">
    Tidak ada proyek pada kategori itu.
  </p>
</template>