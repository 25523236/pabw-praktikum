<script setup>
import { ref, computed } from 'vue'

const nama = ref('')
const email = ref('')
const nim = ref('')
const pesan = ref('')

const namaSah = computed(() => nama.value.trim() !== '')
const emailSah = computed(() => {
  const nilai = email.value.trim()
  return nilai !== '' && nilai.includes('@')
})
const nimSah = computed(() => /^[0-9]{8}$/.test(nim.value.trim()))
const pesanSah = computed(() => pesan.value.trim() !== '')

const formSah = computed(
  () => namaSah.value && emailSah.value && nimSah.value && pesanSah.value
)

function kirimForm() {
  if (!formSah.value) return
  alert('Form valid, pesan terkirim!')
  nama.value = ''
  email.value = ''
  nim.value = ''
  pesan.value = ''
}
</script>

<template>
  <section id="kontak">
    <h2>Hubungi saya</h2>

    <p>
      Isi formulir berikut. Semua kolom bertanda wajib harus diisi.
    </p>

    <form novalidate @submit.prevent="kirimForm">
      <fieldset>
        <legend>Data pengirim</legend>

        <p>
          <label for="nama">Nama lengkap</label>
          <input
            id="nama"
            v-model="nama"
            name="nama"
            type="text"
            autocomplete="name"
            :aria-invalid="!namaSah ? 'true' : undefined"
            required
          />
          <span class="pesan-galat">Isian ini wajib diisi.</span>
        </p>

        <p>
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            autocomplete="email"
            :aria-invalid="!emailSah ? 'true' : undefined"
            required
          />
          <span class="pesan-galat">
            Isian ini wajib diisi dengan format email yang sah.
          </span>
        </p>

        <p>
          <label for="nim">NIM</label>
          <input
            id="nim"
            v-model="nim"
            name="nim"
            type="text"
            inputmode="numeric"
            pattern="[0-9]{8}"
            aria-describedby="nim-bantuan"
            :aria-invalid="!nimSah ? 'true' : undefined"
            required
          />
          <span id="nim-bantuan">Delapan digit angka, contoh 25523236.</span>
          <span class="pesan-galat">NIM harus tepat 8 digit angka.</span>
        </p>

        <p>
          <label for="pesan">Pesan</label>
          <textarea
            id="pesan"
            v-model="pesan"
            name="pesan"
            rows="4"
            :aria-invalid="!pesanSah ? 'true' : undefined"
            required
          ></textarea>
          <span class="pesan-galat">Isian ini wajib diisi.</span>
        </p>

        <button type="submit" :disabled="!formSah">Kirim</button>
      </fieldset>
    </form>
  </section>
</template>