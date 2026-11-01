const form = document.getElementById("formWorkshop");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");
const pesanForm = document.getElementById("pesanForm");
const hitungNama = document.getElementById("hitungNama");
const rNama = document.getElementById("rNama");
const rEmail = document.getElementById("rEmail");
const rSesi = document.getElementById("rSesi");

// Fungsi 1: penghitung karakter + ringkasan langsung (event input)
nama.addEventListener("input", function () {
  hitungNama.textContent = nama.value.length;
  rNama.textContent = nama.value.trim() || "-";
});
email.addEventListener("input", function () {
  rEmail.textContent = email.value.trim() || "-";
});

// Fungsi 2: tampilkan sesi terpilih (event change)
sesi.addEventListener("change", function () {
  rSesi.textContent = sesi.value || "-";
});

// Fungsi 3: validasi saat submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  pesanForm.className = "error";

  if (nama.value.trim() === "") {
    pesanForm.textContent = "Nama wajib diisi.";
  } else if (!polaEmail.test(email.value.trim())) {
    pesanForm.textContent = "Masukkan email yang valid.";
  } else if (sesi.value === "") {
    pesanForm.textContent = "Pilih salah satu sesi.";
  } else {
    pesanForm.className = "sukses";
    pesanForm.textContent = "Pendaftaran berhasil untuk sesi " + sesi.value + ".";
  }
});

// Fungsi 4: tombol reset (event click)
document.getElementById("tombolReset").addEventListener("click", function () {
  form.reset();
  hitungNama.textContent = "0";
  rNama.textContent = rEmail.textContent = rSesi.textContent = "-";
  pesanForm.textContent = "";
});