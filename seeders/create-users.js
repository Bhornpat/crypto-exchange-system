'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hash1 = await bcrypt.hash('123', 10);
    const hash2 = await bcrypt.hash('1234', 10);
    const hash3 = await bcrypt.hash('12345', 10);
    const now = new Date();

    await queryInterface.bulkInsert('users', [
      {
        username: 'me',
        email: 'me@example.com',
        password_hash: hash1,
        createdAt: now,
        updatedAt: now
      },
      {
        username: 'you',
        email: 'you@example.com',
        password_hash: hash2,
        createdAt: now,
        updatedAt: now
      },
      {
        username: 'bomi',
        email: 'bomi@example.com',
        password_hash: hash3,
        createdAt: now,
        updatedAt: now
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

