const Administrator = require('../models/administrator.model');

exports.findByKorisnikId = function(req, res) {
    Administrator.findByKorisnikId(req.params.id, function(err, administrator1) {
      if (err)
      res.send(err);
      res.json(administrator1);
    });
    };