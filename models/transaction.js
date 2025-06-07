'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
        static associate(models) {
       Transaction.belongsTo(models.User, { foreignKey: 'user_id' });
       Transaction.belongsTo(models.Currency, { foreignKey: 'from_currency_id', as: 'FromCurrency' });
       Transaction.belongsTo(models.Currency, { foreignKey: 'to_currency_id', as: 'ToCurrency' });
          }
  }
  Transaction.init({
    user_id: DataTypes.INTEGER,
    from_currency_id: DataTypes.INTEGER,
    to_currency_id: DataTypes.INTEGER,
    transaction_type: DataTypes.STRING,
    from_amount: DataTypes.DECIMAL,
    to_amount: DataTypes.DECIMAL,
    exchange_rate: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
    tableName: 'transactions'
    });

  return Transaction;
};
