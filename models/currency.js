'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Currency extends Model {    
    static associate(models) {
      Currency.hasMany(models.Wallet, { foreignKey: 'currency_id' });

  Currency.hasMany(models.Transaction, { foreignKey: 'from_currency_id', as: 'FromTransactions' });
  Currency.hasMany(models.Transaction, { foreignKey: 'to_currency_id', as: 'ToTransactions' });

  Currency.hasMany(models.ExchangeRate, { foreignKey: 'from_currency_id', as: 'FromRates' });
  Currency.hasMany(models.ExchangeRate, { foreignKey: 'to_currency_id', as: 'ToRates' });
    }
  }
  Currency.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    symbol: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Currency',
    tableName: 'currencies'
  });

  return Currency;
};
