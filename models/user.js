'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Wallet, { foreignKey: 'user_id' });
      User.hasMany(models.Transaction, { foreignKey: 'user_id' });
      User.hasMany(models.Transfer, { foreignKey: 'from_user_id', as: 'SentTransfers' });
      User.hasMany(models.Transfer, { foreignKey: 'to_user_id', as: 'ReceivedTransfers' });
    }
  }
 User.init({
  username: {
    type: DataTypes.STRING,
    unique: true   // ใส่เพื่อกัน username ซ้ำ
  },
  email: {
    type: DataTypes.STRING,
    unique: true   // ใส่เพื่อกัน email ซ้ำ
  },
  password_hash: DataTypes.STRING
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users'
});

  return User;
};
