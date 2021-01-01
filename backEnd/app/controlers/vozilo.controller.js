const Vozilo = require ('../models/vozilo.model');

exports.findAll = function(req, res) {
Vozilo.findAll(function(err, vozilo1) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', vozilo1);
  res.send(vozilo1);
});
};

exports.create = function(req, res) {
const novo_vozilo = new Vozilo(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Popunite sva polja!' });
}else{
Vozilo.create(novo_vozilo, function(err, vozilo1) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Vozilo uspješno dodano!",data:vozilo1});
});
}
};

exports.findById = function(req, res) {
Vozilo.findById(req.params.id, function(err, vozilo1) {
  if (err)
  res.send(err);
  res.json(vozilo1);
});
};

exports.findByMarka = function(req, res) {
    Vozilo.findByMarka(req.params.marka, function(err, vozilo1) {
      if (err)
      res.send(err);
      res.json(vozilo1);
    });
    };

exports.findByTipVozila = function(req, res) {
    Vozilo.findByTipVozila(req.params.id, function(err, vozilo1) {
        if (err)
        res.send(err);
        res.json(vozilo1);
     });
    };

exports.findByTipMjenjaca = function(req, res) {
    Vozilo.findByTipMjenjaca(req.params.id, function(err, vozilo1) {
        if (err)
        res.send(err);
        res.json(vozilo1);
        });
    };

exports.manjaVeca = function(req, res) {
Vozilo.manjaVeca(function(err, vozilo1) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', vozilo1);
  res.send(vozilo1);
});
};

exports.vecaManja = function(req, res) {
  Vozilo.vecaManja(function(err, vozilo1) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', vozilo1);
    res.send(vozilo1);
  });
  };