const Korisnik = require('../models/korisnik.model');

exports.create = function(req, res) {
const novi_korisnik = new Korisnik(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Popunite sva polja!' });
}else{
Korisnik.create(novi_korisnik, function(err, korisnik1) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Korisnik uspješno dodan!",data:korisnik1});
});
}
};

exports.findById = function(req, res) {
Korisnik.findById(req.params.id, function(err, korisnik1) {
  if (err)
  res.send(err);
  res.json(korisnik1);
});
};
