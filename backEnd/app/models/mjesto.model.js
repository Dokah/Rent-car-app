var konekcija = require ('../config/dbConfig');
//Stvaranje mjesta
const Mjesto = function(mjesto){
  this.mjesto_id          = mjesto.mjesto_id;
  this.naziv_mjesta        = mjesto.naziv_mjesta;
  this.postanski_broj           = mjesto.postanski_broj ;
  this.drzava           = mjesto.drzava ;
};


Mjesto.findById = function (id, result) {
konekcija.query("Select * from mjesto where mjesto_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};



module.exports= Mjesto;