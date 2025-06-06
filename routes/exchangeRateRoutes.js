const express = require('express');
const router = express.Router();
const rateController = require('../controllers/exchangeRateController');

router.get('/', rateController.getRates);

module.exports = router;

