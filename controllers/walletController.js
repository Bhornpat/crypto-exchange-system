const { Wallet, Currency } = require('../models');

exports.getWallets = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const wallets = await Wallet.findAll({
      where: { user_id: userId },
      include: [{ model: Currency }]
    });
    res.json(wallets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

