var konekcija = require ('../config/dbConfig');
//Stvaranje objekta korisnika
var Salon = function(salon){
  this.salon_id    = salon.salon_id;
  this.naziv_salona        = salon.naziv_salona;
  this.mjesto_id        = salon.mjesto_id;
  this.adresa            = salon.adresa;
};


Salon.findById = function (id, result) {
konekcija.query("Select * from salon where salon_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

module.exports= Salon;