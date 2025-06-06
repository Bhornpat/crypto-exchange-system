const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

router.get('/:user_id', walletController.getWallets);

module.exports = router;

