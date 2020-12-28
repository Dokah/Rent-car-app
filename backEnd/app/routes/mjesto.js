const express = require('express');
const router = express.Router();
const mjestoKontroller =   require('../controlers/mjesto.controller');

// Dohvati mjesto po id-u
router.get('/=:id', mjestoKontroller.findById);

module.exports = router