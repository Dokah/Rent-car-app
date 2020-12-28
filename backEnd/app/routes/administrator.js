const express = require('express')
const router = express.Router()
const administratorKontroler =   require('../controlers/administrator.controller');

// Dohvati administratora po korisnikovom id-u
router.get('/=:id', administratorKontroler.findByKorisnikId);

module.exports = router