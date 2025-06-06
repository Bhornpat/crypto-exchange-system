'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    static associate(models) {
      Wallet.belongsTo(models.User, { foreignKey: 'user_id' });
      Wallet.belongsTo(models.Currency, { foreignKey: 'currency_id' });
    }
  }
  Wallet.init({
    user_id: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    balance: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Wallet',
    tableName: 'wallets'
    });

  return Wallet;
};
