const express = require('express');
const router = express.Router();
const voziloKontroler = require('../controlers/vozilo.controller');

// Stvori novo vozilo
router.post('/', voziloKontroler.create);

// Dohvati vozilo po id-u
router.get('/id=:id', voziloKontroler.findById);
// Dohvati sva vozila
router.get('/', voziloKontroler.findAll);
// Dohvati vozila po modelu 
router.get ('/model=:id', voziloKontroler.findByModel);
// Dohvati vozila po tipu vozila
router.get ('/tip_v=:id', voziloKontroler.findByTipVozila);
// Dohvati vozila po tipu mjenjaca
router.get('/tip_m=:id',voziloKontroler.findByTipMjenjaca);

module.exports = router