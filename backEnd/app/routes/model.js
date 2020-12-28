const express = require('express');
const router = express.Router();
const modelKontroler =   require('../controlers/model.controller');

// Dohvati model po id-u
router.get('/=:id', modelKontroler.findById);

module.exports = router