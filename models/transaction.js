'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
  });
  return Transaction;
};