var http = require ('http');
var module =require ('./modules/moduleBiodata');


http.createServer(function(req,res){
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Biodata Diri</h1> ');
  res.write('<p>Nama : '+module.getNama()+'</p>');
  res.write('<p>Tempat Lahir : '+module.getTempatLahir()+'</p>');
  res.write('<p>Tanggal Lahir : '+module.getTanggalLahir()+'</p>');
  res.write('<p>Alamat : '+module.getAlamat()+'</p>');
  res.end();
}).listen(5000);

console.log('okkkk');