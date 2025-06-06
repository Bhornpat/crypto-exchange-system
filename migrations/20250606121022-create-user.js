'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  await queryInterface.createTable('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    unique: true    
  },
  email: {
    type: Sequelize.STRING,
    unique: true    
  },
  password_hash: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
