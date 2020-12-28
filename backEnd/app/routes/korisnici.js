const express = require('express')
const router = express.Router()
const korisnikKontroler =   require('../controlers/korisnik.controller');

// Stvori novog korisnika
router.post('/', korisnikKontroler.create);

// Dohvati korisnika po id-u
router.get('/:id', korisnikKontroler.findById);

module.exports = router