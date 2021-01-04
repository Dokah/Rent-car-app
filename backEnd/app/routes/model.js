const express = require('express');
const router = express.Router();
const modelKontroler =   require('../controlers/model.controller');

// Dohvati model po id-u
router.get('/=:id', modelKontroler.findById);
// Dohvati sve podatke o modelima
router.get('/', modelKontroler.findAll);

module.exports = router