'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('exchange_rates', [
      {
        from_currency_id: 3, // THB
        to_currency_id: 1,   // BTC
        rate: 0.000001,      // 1 THB = 0.000001 ETH
        effective_date: now,
        createdAt: now,
        updatedAt: now
      },
      {
        from_currency_id: 1, // BTC
        to_currency_id: 3,   // THB
        rate: 1000000,       // 1 BTC = 1000000 THB
        effective_date: now,
        createdAt: now,
        updatedAt: now
      },
      {
        from_currency_id: 4, // USD
        to_currency_id: 1,   // BTC
        rate: 0.000015,      // 1 USD = 0.000015 BTC
        effective_date: now,
        createdAt: now,
        updatedAt: now,
      },
       {
        from_currency_id: 1, // BTC
        to_currency_id: 4,   // USD
        rate: 65000,         // 1 BTC = 65000 USD
        effective_date: now,
        createdAt: now,
        updatedAt: now,
      },
      {
        from_currency_id: 3, // THB
        to_currency_id: 2,   // ETH
        rate: 0.000006,      // 1 THB = 0.000006 ETH
        effective_date: now,
        createdAt: now,
        updatedAt: now,
      },
      {
        from_currency_id: 2, // ETH
        to_currency_id: 3,   // THB
        rate: 166666.66,     // 1 ETH = 166666.66 THB
        effective_date: now,
        createdAt: now,
        updatedAt: now,
      },
      {
        from_currency_id: 4, // USD
        to_currency_id: 2,   // ETH
        rate: 0.0005,        // 1 USD = 0.0005 ETH
        effective_date: now,
        createdAt: now,
        updatedAt: now,
      },
      {
        from_currency_id: 2, // ETH
        to_currency_id: 4,   // USD
        rate: 2000,          // 1 ETH = 2000 USD
        effective_date: now,
        createdAt: now,
        updatedAt: now,
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('exchange_rates', null, {});
  }
};
