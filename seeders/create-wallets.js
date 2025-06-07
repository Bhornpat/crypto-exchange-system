'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('wallets', [
      {
        user_id: 1,
        currency_id: 3, // THB
        balance: 50000,
        createdAt: now,
        updatedAt: now
      },
      {
        user_id: 1,
        currency_id: 1, // BTC
        balance: 0.005,
        createdAt: now,
        updatedAt: now
      },
      {
        user_id: 2,
        currency_id: 3, // THB
        balance: 100000,
        createdAt: now,
        updatedAt: now
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('wallets', null, {});
  }
};

