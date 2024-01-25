const rLuasPersegi = (s) => s * s;

const hitungPersegi = () => {
  const inputLuas = document.getElementById("numInput1").value;
  const hasilLuas = rLuasPersegi(inputLuas);
  document.getElementById("hasilLuas").innerText = hasilLuas;
  document.getElementById("sisiLuas1").innerText = inputLuas;
  document.getElementById("sisiLuas2").innerText = inputLuas;
};

document.getElementById("tombol").addEventListener("click", function () {
  hitungPersegi();
});

const rKelPer = (s) => 4 * s;

const hitungKeliling = () => {
  const inputKel = document.getElementById("numInput2").value;
  const hasilKel = rKelPer(inputKel);
  document.getElementById("hasilKeliling").innerText = hasilKel;
  document.getElementById("sisiKel").innerText = inputKel;
};

document.getElementById("tombol2").addEventListener("click", function () {
  hitungKeliling();
});
