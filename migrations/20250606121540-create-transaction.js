'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      from_currency_id: {
        type: Sequelize.INTEGER
      },
      to_currency_id: {
        type: Sequelize.INTEGER
      },
      transaction_type: {
        type: Sequelize.STRING
      },
      from_amount: {
        type: Sequelize.DECIMAL
      },
      to_amount: {
        type: Sequelize.DECIMAL
      },
      exchange_rate: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};
