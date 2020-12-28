const Salon = require('../models/salon.model');

exports.findById = function(req, res) {
Salon.findById(req.params.id, function(err, salon1) {
  if (err)
  res.send(err);
  res.json(salon1);
});
};