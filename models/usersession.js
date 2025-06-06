'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSession extends Model {
      static associate(models) {
        UserSession.belongsTo(models.User, { foreignKey: 'user_id' });

    }
  }
  UserSession.init({
    user_id: DataTypes.INTEGER,
    token_hash: DataTypes.STRING,
    login_time: DataTypes.DATE,
    logout_time: DataTypes.DATE,
    ip_address: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserSession',
    tableName: 'user_sessions'
     });
  return UserSession;
};
