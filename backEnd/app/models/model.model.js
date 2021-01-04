var konekcija = require ('../config/dbConfig');
//Stvaranje modela
const Model = function(model){
  this.model_id          = model.model_id;
  this.naziv_modela        = model.naziv_modela;
  this.cijena           = model.cijena;
};


Model.findById = function (id, result) {
konekcija.query("Select * from model where model_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

Model.findAll = function (result) {
  konekcija.query("Select * from model", function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('Modeli : ', res);
    result(null, res);
  }
  });
  };



module.exports= Model;