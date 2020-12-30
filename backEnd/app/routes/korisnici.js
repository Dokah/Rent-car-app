const express = require('express')
const router = express.Router()
const korisnikKontroler =   require('../controlers/korisnik.controller');

// Stvori novog korisnika
router.post('/', korisnikKontroler.create);

// Dohvati korisnika po id-u
router.get('/id/:id', korisnikKontroler.findById);

// Dohvati korisnika po nadimku
router.get('/nadimak/:nadimak', korisnikKontroler.findByNadimak);

module.exports = router