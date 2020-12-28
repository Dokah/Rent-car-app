var konekcija = require ('../config/dbConfig');
//Stvaranje objekta administratora
var Administrator = function(administrator1){
    this.administrator_id   = administrator1.administrator_id;
    this.korisnik_id        = administrator1.korisnik_id;
};

Administrator.findByKorisnikId = function (id, result) {
    konekcija.query("Select * from administrator where korisnik_id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
    };

    module.exports= Administrator;