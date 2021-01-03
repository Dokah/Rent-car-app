var konekcija = require ('../config/dbConfig');
//Stvaranje objekta korisnika

var Rezervacija = function(rezervacija){
  this.korisnik_id    = rezervacija.korisnik_id;
  this.vozilo_id        = rezervacija.vozilo_id;
  this.salon_id        = rezervacija.salon_id;
  this.datum_rezervacije            = rezervacija.datum_rezervacije;
  this.datum_do            = rezervacija.datum_do;
};


  Rezervacija.create = async (newEmp, result) => {
    try {
      await konekcija.query("INSERT INTO rezervacija set ?", newEmp, function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        }
        else {
          console.log(res.insertId);
          result(null, res.insertId);
        }
      });
    }
    catch (err) {
      result(err, null);
      console.log("Error", err);
    }
  };

  Rezervacija.findById = function (id, result) {
    konekcija.query("Select * from rezervacija where korisnik_id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
    };


module.exports= Rezervacija;