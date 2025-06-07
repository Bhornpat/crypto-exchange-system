const { Transfer, Wallet, Currency } = require('../models');

exports.transfer = async (req, res) => {
  try {
    const { from_user_id, to_user_id, currency_id, amount, description } = req.body;

    // ตรวจสอบยอด
    const senderWallet = await Wallet.findOne({ where: { user_id: from_user_id, currency_id } });
    if (!senderWallet || senderWallet.balance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    const receiverWallet = await Wallet.findOne({ where: { user_id: to_user_id, currency_id } });

    // หักยอด
    senderWallet.balance -= amount;
    await senderWallet.save();

    // เติมยอด
    if (receiverWallet) {
      receiverWallet.balance += amount;
      await receiverWallet.save();
    } else {
      await Wallet.create({ user_id: to_user_id, currency_id, balance: amount });
    }

    // บันทึก Transfer
    const transfer = await Transfer.create({ from_user_id, to_user_id, currency_id, amount, description, status: 'completed' });

    res.status(201).json(transfer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

