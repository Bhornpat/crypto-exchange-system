"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('currencies', [
      { code: 'BTC', name: 'Bitcoin', type: 'crypto', symbol: '₿', is_active: true, createdAt: new Date(), updatedAt: new Date() },
      { code: 'ETH', name: 'Ethereum', type: 'crypto', symbol: 'Ξ', is_active: true, createdAt: new Date(), updatedAt: new Date() },
      { code: 'THB', name: 'Thai Baht', type: 'fiat', symbol: '฿', is_active: true, createdAt: new Date(), updatedAt: new Date() },
      { code: 'USD', name: 'US Dollar', type: 'fiat', symbol: '$', is_active: true, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('currencies', null, {});
  }
};

