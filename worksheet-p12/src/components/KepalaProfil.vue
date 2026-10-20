<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header class="kepala">
    <input type="checkbox" id="tema" class="pengalih-tema" />
    <label for="tema" class="tombol-tema"></label>

    <h1 id="nama-profil">{{ props.profil.nama }}</h1>
    <p id="peran-profil">{{ props.profil.peran }}</p>
    <p id="tagline-profil" class="tagline">{{ props.profil.tagline }}</p>

    <nav aria-label="Navigasi utama">
      <ul>
        <li><a href="#tentang">Tentang</a></li>
        <li><a href="#karya">Karya</a></li>
        <li><a href="#kontak">Kontak</a></li>
      </ul>
    </nav>
  </header>
</template>