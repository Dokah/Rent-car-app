const model = require('../models/model.model');

exports.findById = function(req, res) {
model.findById(req.params.id, function(err, model1) {
  if (err)
  res.send(err);
  res.json(model1);
});
};