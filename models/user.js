'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: 'id_role',
        as: 'role'
      });
    }
  }
  User.init({
    id_role: DataTypes.INTEGER,
    name_user: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    no_telephone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};