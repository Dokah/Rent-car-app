const tip_vozila = require('../models/tip_vozila.model');

exports.findById = function(req, res) {
tip_vozila.findById(req.params.id, function(err, tip_vozila1) {
  if (err)
  res.send(err);
  res.json(tip_vozila1);
});
};