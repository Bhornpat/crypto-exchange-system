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
        status: 'success',
        description: 'ค่าชาเขียวให้ bomi',
        createdAt: now,
        updatedAt: now
      },
      {
        from_user_id: 2,
        to_user_id: 1,
        currency_id: 3, // THB
        amount: 500,
        status: 'success',
        description: 'โอนคืนเมื่อวาน',
        createdAt: now,
        updatedAt: now
      },
      {
        from_user_id: 1,
        to_user_id: 2,
        currency_id: 3, // THB
        amount: 1000,
        status: 'success',
        description: 'ของขวัญปีใหม่',
        createdAt: now,
        updatedAt: now
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transfers', null, {});
  }
};

