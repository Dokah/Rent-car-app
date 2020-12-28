const Ima_Vozilo = require('../models/ima_vozilo.model');

exports.create = function(req, res) {
const novo_ima_vozilo = new Ima_Vozilo(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Popunite sva polja!' });
}else{
Ima_Vozilo.create(novo_ima_vozilo, function(err, ima_vozilo1) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Ima_Vozilo uspješno dodan!",data:ima_vozilo1});
});
}
};
