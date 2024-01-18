const rLuasPersegi = (s) => {
  return s * s;
};

const hitungPersegi = () => {
  const nomor = document.getElementById("numInput").value;
  const hasilLuas = rLuasPersegi(nomor);
  alert(hasilLuas);
};

document.getElementById("tombol").addEventListener("click", function () {
  hitungPersegi();
});

const rKelilingPersegi = (s) => {
  return 4 * s;
};

const hitungKelilingPersegi = () => {
  const nomor = document.getElementsByClassName(numInputK).value;
  const hasilKeliling = rKelilingPersegi(nomor);
  alert(hasilKeliling);
};

document.getElementById("tombol2").addEventListener("click", function () {
  hitungKelilingPersegi();
});
