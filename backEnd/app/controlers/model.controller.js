const model = require('../models/model.model');

exports.findById = function(req, res) {
model.findById(req.params.id, function(err, model1) {
  if (err)
  res.send(err);
  res.json(model1);
});
};

exports.findAll = function(req, res) {
  model.findAll(function(err, model1) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', model1);
    res.send(model1);
  });
  };