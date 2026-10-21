const tombolKirim = document.getElementById("tombol-kirim");

if (tombolKirim) {
  tombolKirim.addEventListener("click", function () {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;
    const status = document.getElementById("status-form");

    if (nama === "" || email === "" || pesan === "") {
      status.textContent = "Semua kolom wajib diisi.";
    } else {
      status.textContent = "Terima kasih, " + nama + ". Pesan Anda diterima.";
    }
  });
}