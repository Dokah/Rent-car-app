const Rezervacija = require('../models/rezervacija.model');

exports.create = function(req, res) {
const nova_rezervacija = new Rezervacija(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Popunite sva polja!' });
}else{
Rezervacija.create(nova_rezervacija, function(err, rezervacija1) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Rezervacija uspješno dodan!",data:rezervacija1});
});
}
};
