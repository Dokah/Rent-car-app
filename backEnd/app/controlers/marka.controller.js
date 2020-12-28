const marka = require('../models/marka.model');

exports.findById = function(req, res) {
marka.findById(req.params.id, function(err, marka1) {
  if (err)
  res.send(err);
  res.json(marka1);
});
};