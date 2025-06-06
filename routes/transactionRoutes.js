const express = require('express');
const router = express.Router();
const txController = require('../controllers/transactionController');

router.post('/', txController.exchange);

module.exports = router;

