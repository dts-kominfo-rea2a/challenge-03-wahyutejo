// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = function namaBelanjaan() {
  let daftarBelanja = [];

  for (let belanjaan = 0; belanjaan < dataBelanjaan.length; belanjaan++) {
    let namaBarang = "- " + dataBelanjaan[belanjaan].nama + " x " + dataBelanjaan[belanjaan].kuantitas;
    daftarBelanja.push(namaBarang);
  }
  return daftarBelanja;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = function total() {
  let total = [];
  for (let belanjaan = 0; belanjaan < dataBelanjaan.length; belanjaan++) {
    let jumlah = dataBelanjaan[belanjaan].harga * dataBelanjaan[belanjaan].kuantitas;
    total.push(jumlah);
  }

  let jumlahSemua = 0;
  for (let totalHarga = 0; totalHarga < total.length; totalHarga++) {
    jumlahSemua += total[totalHarga];
  }

  return jumlahSemua;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log("\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan));
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
