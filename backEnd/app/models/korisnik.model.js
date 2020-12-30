var konekcija = require ('../config/dbConfig');
//Stvaranje objekta korisnika
var Korisnik = function(korisnik){
  this.korisnik_id    = korisnik.korisnik_id;
  this.nadimak        = korisnik.nadimak;
  this.lozinka        = korisnik.lozinka;
  this.ime            = korisnik.ime;
  this.prezime        = korisnik.prezime;
  this.datum_rodenja  = korisnik.datum_rodenja;
};

Korisnik.create = function (newEmp, result) {
konekcija.query("INSERT INTO korisnik set ?", newEmp, function (err, res) {
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

Korisnik.findById = function (id, result) {
konekcija.query("Select * from korisnik where korisnik_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

Korisnik.findByNadimak = function (nadimak, result) {
  konekcija.query("SELECT * from korisnik WHERE nadimak = ?", nadimak, function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    result(null, res);
  }
  });
  };

module.exports= Korisnik;