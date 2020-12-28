const express = require('express')
const router = express.Router()
const imaVoziloKontroler =   require('../controlers/ima_vozilo.controller');

// Stvori novi ima_vozilo unos
router.post('/', imaVoziloKontroler.create);

module.exports = router