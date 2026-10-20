<script setup>
import { state, pilihKategori } from '../state.js'
</script>

<template>
  <div id="filter">
    <button
      data-kategori="semua"
      :class="{ aktif: state.kategoriAktif === 'semua' }"
      @click="pilihKategori('semua')"
    >
      Semua
    </button>
    <button
      data-kategori="web"
      :class="{ aktif: state.kategoriAktif === 'web' }"
      @click="pilihKategori('web')"
    >
      Web
    </button>
    <button
      data-kategori="data"
      :class="{ aktif: state.kategoriAktif === 'data' }"
      @click="pilihKategori('data')"
    >
      Data
    </button>
  </div>
</template>