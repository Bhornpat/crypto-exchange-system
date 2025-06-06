'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExchangeRate extends Model {
      static associate(models) {
        ExchangeRate.belongsTo(models.Currency, { foreignKey: 'from_currency_id', as: 'FromCurrency' });
        ExchangeRate.belongsTo(models.Currency, { foreignKey: 'to_currency_id', as: 'ToCurrency' });
    }
  }
  ExchangeRate.init({
    from_currency_id: DataTypes.INTEGER,
    to_currency_id: DataTypes.INTEGER,
    rate: DataTypes.DECIMAL,
    effective_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ExchangeRate',
    tableName: 'exchange_rates'
  });
  return ExchangeRate;
};
