'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    // NOTE: ต้องเช็กว่า currency_id ของ BTC/THB ตรงกับใน DB จริง
    await queryInterface.bulkInsert('exchange_rates', [
      {
        from_currency_id: 3, // THB
        to_currency_id: 1,   // BTC
        rate: 0.000001,
        effective_date: now,
        createdAt: now,
        updatedAt: now
      },
      {
        from_currency_id: 1, // BTC
        to_currency_id: 3,   // THB
        rate: 1000000,
        effective_date: now,
        createdAt: now,
        updatedAt: now
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('exchange_rates', null, {});
  }
};
