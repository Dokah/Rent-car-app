var konekcija = require ('../config/dbConfig');
//Stvaranje objekta vozila
const Vozilo = function(vozilo){
  this.vozilo_id          = vozilo.vozilo_id;
  this.opis_vozila        = vozilo.opis_vozila;
  this.marka_id           = vozilo.marka_id;
  this.model_id           = vozilo.model_id;
  this.tip_vozila_id      = vozilo.tip_vozila_id;
  this.tip_mjenjaca_id    = vozilo.tip_mjenjaca_id;
  this.dodao              = vozilo.dodao;
  this.slika_vozila_url   = vozilo.slika_vozila_url;
};

Vozilo.create = function (newEmp, result) {
konekcija.query("INSERT INTO vozilo set ?", newEmp, function (err, res) {
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

Vozilo.findById = function (id, result) {
konekcija.query("Select * from vozilo where vozilo_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

Vozilo.findByMarka = function (marka, result) {
    konekcija.query("Select * from sva_vozila where naziv_marke = ? ", marka, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
    };

Vozilo.findByTipVozila = function (tip, result) {
konekcija.query("Select * from vozilo where tip_vozila_id = ? ", tip, function (err, res) {
    if(err) {
        console.log("error: ", err);
        result(err, null);
    }
    else{
        result(null, res);
    }
    });
};

Vozilo.findByTipMjenjaca = function (tip, result) {
    konekcija.query("Select * from sva_vozila where naziv_tipa_mjenjaca = ? ", tip, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
        });
    };

Vozilo.findAll = function (result) {
konekcija.query("Select * from sva_vozila", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Vozila : ', res);
  result(null, res);
}
});
};

Vozilo.manjaVeca = function (result) {
  konekcija.query("Select * from manja_veca", function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('Vozila : ', res);
    result(null, res);
  }
  });
  };

  Vozilo.vecaManja = function (result) {
    konekcija.query("Select * from veca_manja", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('Vozila : ', res);
      result(null, res);
    }
    });
    };

module.exports= Vozilo;