const KUNCI = 'pabw-p11'
const VERSI = 1

export function simpan(state) {
  try {
    const data = {
      versi: VERSI,
      kategoriAktif: state.kategoriAktif,
    }
    localStorage.setItem(KUNCI, JSON.stringify(data))
  } catch (e) {
    console.error('Gagal menyimpan ke localStorage:', e)
  }
}

export function muat() {
  try {
    const mentah = localStorage.getItem(KUNCI)
    if (!mentah) return null
    const data = JSON.parse(mentah)
    if (data && data.versi === VERSI) {
      return data
    }
    localStorage.removeItem(KUNCI)
    return null
  } catch (e) {
    localStorage.removeItem(KUNCI)
    return null
  }
}

export function aturUlang() {
  try {
    localStorage.removeItem(KUNCI)
  } catch (e) {
    console.error('Gagal menghapus localStorage:', e)
  }
}