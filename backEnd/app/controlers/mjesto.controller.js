const mjesto = require('../models/mjesto.model');

exports.findById = function(req, res) {
mjesto.findById(req.params.id, function(err, mjesto1) {
  if (err)
  res.send(err);
  res.json(mjesto1);
});
};