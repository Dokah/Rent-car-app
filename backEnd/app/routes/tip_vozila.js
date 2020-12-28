const express = require('express');
const router = express.Router();
const tipVozilaKontroler =   require('../controlers/tip_vozila.controller');

// Dohvati tip_vozila po id-u
router.get('/=:id', tipVozilaKontroler.findById);

module.exports = router