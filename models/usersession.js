'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
  });
  return UserSession;
};