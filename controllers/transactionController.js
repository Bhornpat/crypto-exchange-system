const { Transaction, Wallet, ExchangeRate, Currency } = require('../models');

exports.exchange = async (req, res) => {
  try {
    const { user_id, from_currency, to_currency, from_amount } = req.body;

    // ดึง currency_id จาก code
    const fromCurrency = await Currency.findOne({ where: { code: from_currency } });
    const toCurrency = await Currency.findOne({ where: { code: to_currency } });

    if (!fromCurrency || !toCurrency) {
      return res.status(400).json({ error: 'Invalid currency code' });
    }

    const from_currency_id = fromCurrency.id;
    const to_currency_id = toCurrency.id;

    // ตรวจสอบ wallet และยอด
    const fromWallet = await Wallet.findOne({ where: { user_id, currency_id: from_currency_id } });
    if (!fromWallet || fromWallet.balance < from_amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    // หา exchange rate
    const rate = await ExchangeRate.findOne({
      where: { from_currency_id, to_currency_id },
      order: [['effective_date', 'DESC']]
    });

    if (!rate) return res.status(404).json({ error: 'No exchange rate found' });

    const to_amount = from_amount * rate.rate;

    // หักยอด
    fromWallet.balance -= from_amount;
    await fromWallet.save();

    // เติมยอดใน to_wallet
    const [toWallet] = await Wallet.findOrCreate({
      where: { user_id, currency_id: to_currency_id },
      defaults: { balance: 0 }
    });
    toWallet.balance += to_amount;
    await toWallet.save();

    // บันทึก transaction
    const tx = await Transaction.create({
      user_id,
      from_currency_id,
      to_currency_id,
      transaction_type: 'exchange',
      from_amount,
      to_amount,
      exchange_rate: rate.rate,
      status: 'completed'
    });

    res.status(201).json(tx);
  } catch (error) {
    console.error('[Exchange Error]', error);
    res.status(500).json({ error: error.message });
  }
};

