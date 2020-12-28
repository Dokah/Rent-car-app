const express = require('express');
const router = express.Router();
const markaKontroler =   require('../controlers/marka.controller');

// Dohvati marku po id-u
router.get('/=:id', markaKontroler.findById);

module.exports = router