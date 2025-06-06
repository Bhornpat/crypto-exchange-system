'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transfer extends Model {
       static associate(models) {
  Transfer.belongsTo(models.User, { foreignKey: 'from_user_id', as: 'Sender' });
  Transfer.belongsTo(models.User, { foreignKey: 'to_user_id', as: 'Receiver' });
  Transfer.belongsTo(models.Currency, { foreignKey: 'currency_id' });
         }
  }
  Transfer.init({
    from_user_id: DataTypes.INTEGER,
    to_user_id: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    status: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transfer',
    tableName: 'transfers'
  });
  return Transfer;
};
