'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transactions', [
      {
        user_id: 1,
        from_currency_id: 3,     // THB
        to_currency_id: 1,       // BTC
        transaction_type: 'exchange',
        from_amount: 10000,
        to_amount: 0.0005,
        exchange_rate: 0.00000005,
        status: 'success',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        from_currency_id: 2,     // USD
        to_currency_id: 4,       // ETH
        transaction_type: 'exchange',
        from_amount: 500,
        to_amount: 0.2,
        exchange_rate: 0.0004,
        status: 'success',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        from_currency_id: 1,     // BTC
        to_currency_id: 5,       // DOGE
        transaction_type: 'exchange',
        from_amount: 0.001,
        to_amount: 70,
        exchange_rate: 70000,
        status: 'success',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transactions', null, {});
  }
};

