const express = require('express')
const router = express.Router()
const rezervacijaKontroler =   require('../controlers/rezervacija.controller');

// Stvori novog korisnika
router.post('/', rezervacijaKontroler.create);

module.exports = router