var konekcija = require ('../config/dbConfig');
//Stvaranje objekta tipa vozila
const Tip_Vozila = function(tip_vozila){
  this.tip_vozila_id          = tip_vozila.tip_vozila_id;
  this.naziv_tipa_vozila        = tip_vozila.naziv_tipa_vozila;
  this.broj_vrata           = tip_vozila.broj_vrata ;
};


Tip_Vozila.findById = function (id, result) {
konekcija.query("Select * from tip_vozila where tip_vozila_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};



module.exports= Tip_Vozila;