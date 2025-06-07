'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('transfers', [
      {
        from_user_id: 1,
        to_user_id: 2,
        currency_id: 1, // BTC
        amount: 0.001,
        status: 'completed',
        description: 'ค่าชาเขียวให้ bomi',
        createdAt: now,
        updatedAt: now
      },
      {
        from_user_id: 2,
        to_user_id: 1,
        currency_id: 2, // ETH
        amount: 0.0006,
        status: 'completed',
        description: 'โอนคืนเมื่อวาน',
        createdAt: now,
        updatedAt: now
      },
      {
        from_user_id: 1,
        to_user_id: 2,
        currency_id: 3, // THB
        amount: 1000,
        status: 'completed',
        description: 'ของขวัญปีใหม่',
        createdAt: now,
        updatedAt: now
      },
      {
        from_user_id: 3,
        to_user_id: 2,
        currency_id: 4, // USD
        amount: 100,
        status: 'completed',
        description: 'for you',
        createdAt: now,
        updatedAt: now
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transfers', null, {});
  }
};

