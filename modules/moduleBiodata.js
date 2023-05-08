const nama = "Mochammad Hilmy Julianto";
const tempatLahir = "Bandung";
const tanggalLahir = "9 Juli";
const alamat = "Jl.Melong Asih No.111 Cimahi Selatan";

function getNama(){
  return nama;
};

function getTempatLahir(){
  return tempatLahir;
}

function getTanggalLahir(){
  return tanggalLahir;
}

function getAlamat(){
  return alamat;
}

module.exports ={
  getNama,
  getTanggalLahir,
  getTempatLahir,
  getAlamat,
};