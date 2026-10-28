const formKontak = document.getElementById("formKontak");
const hasil = document.getElementById("hasil");
formKontak.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();
    if (nama === "" || email === "" || pesan === "") {
        hasil.innerHTML = `
            <div class="alert alert-danger mt-3">
                Semua kolom harus diisi!
            </div>
        `;
        return;
    }
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!polaEmail.test(email)) {
        hasil.innerHTML = `
            <div class="alert alert-danger mt-3">
                Format email tidak valid!
            </div>
        `;
        return;
    }
    hasil.innerHTML = `
        <div class="alert alert-success mt-3">
            Terima kasih, ${nama}!
            Form kontak berhasil divalidasi.
        </div>
    `;
    formKontak.reset();
});
