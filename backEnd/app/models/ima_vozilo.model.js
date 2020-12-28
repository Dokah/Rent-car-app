var konekcija = require ('../config/dbConfig');
//Stvaranje objekta ima_vozilo
var Ima_Vozilo = function(ima_vozilo){
  this.salon_id    = ima_vozilo.salon_id;
  this.vozilo_id        = ima_vozilo.vozilo_id;
  this.broj_vozila        = ima_vozilo.broj_vozila;
};

Ima_Vozilo.create = function (newEmp, result) {
konekcija.query("INSERT INTO ima_vozilo set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};

module.exports= Ima_Vozilo;