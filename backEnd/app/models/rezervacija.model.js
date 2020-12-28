var konekcija = require ('../config/dbConfig');
//Stvaranje objekta korisnika

var Rezervacija = function(rezervacija){
  this.korisnik_id    = rezervacija.korisnik_id;
  this.vozilo_id        = rezervacija.vozilo_id;
  this.salon_id        = rezervacija.salon_id;
  this.datum_rezervacije            = rezervacija.datum_rezervacije;
  this.datum_do            = rezervacija.datum_do;
};

Rezervacija.create = function (newEmp, result) {
    konekcija.query("INSERT INTO rezervacija set ?", newEmp, function (err, res) {
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

module.exports= Rezervacija;