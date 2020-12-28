const express = require('express');
const router = express.Router();
const salonKontroler =   require('../controlers/salon.controller');

// Dohvati salon po id-u
router.get('/=:id', salonKontroler.findById);

module.exports = router;