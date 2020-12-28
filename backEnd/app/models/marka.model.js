var konekcija = require ('../config/dbConfig');
//Stvaranje objekta marke
const Marka = function(marka){
  this.marka_id          = marka.marka_id;
  this.naziv_marke        = marka.naziv_marke;
};


Marka.findById = function (id, result) {
konekcija.query("Select * from marka where marka_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};



module.exports= Marka;