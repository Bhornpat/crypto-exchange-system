'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExchangeRate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
  });
  return ExchangeRate;
};