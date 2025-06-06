const { ExchangeRate, Currency } = require('../models');

exports.getRates = async (req, res) => {
  try {
    const rates = await ExchangeRate.findAll({
      include: [
        { model: Currency, as: 'FromCurrency' },
        { model: Currency, as: 'ToCurrency' }
      ]
    });
    res.json(rates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

