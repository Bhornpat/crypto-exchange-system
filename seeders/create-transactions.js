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
        status: 'completed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        from_currency_id: 4,     // USD
        to_currency_id: 2,       // ETH
        transaction_type: 'exchange',
        from_amount: 500,
        to_amount: 0.2,
        exchange_rate: 0.0004,
        status: 'completed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        from_currency_id: 1,     // BTC
        to_currency_id: 2,       // ETH
        transaction_type: 'exchange',
        from_amount: 0.001,
        to_amount: 0.005,
        exchange_rate: 5,
        status: 'completed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        user_id: 1,
        from_currency_id: 2,     // ETH
        to_currency_id: 3,       // THB
        transaction_type: 'exchange',
        from_amount: 0.0002,
        to_amount: 5000,
        exchange_rate: 25000000,
        status: 'completed',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transactions', null, {});
  }
};

