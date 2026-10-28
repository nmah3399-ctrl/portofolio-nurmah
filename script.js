const formKontak = document.getElementById("formKontak");
const hasil = document.getElementById("hasil");
if (formKontak && hasil) {
    formKontak.addEventListener("submit", function (event) {
        event.preventDefault();
        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();
        formKontak.classList.add("was-validated");
        if (
            formKontak.checkValidity() ||
            nama === "" ||
            email === "" ||
            pesan === ""
        ) {
            hasil.innerHTML = "";
            return;
        }
        hasil.innerHTML = `
        <div class="alert alert-success" role="alert">
        Terima kasih telah mengisi formulir!
        Data Anda berhasil divalidasi.
        </div>
        `;
        formKontak.reset();
        formKontak.classList.remove("was-validated");
    });
}
function escapeHTML(teks) {
    return teks.replace(/[&<>"']/g, function (karakter) {
        const pengganti = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };
        return pengganti[karakter];
    });
}
