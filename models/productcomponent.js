'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductComponent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductComponent.belongsTo(models.Product, {
        foreignKey: 'id_product',
        as: 'productComponent'
      })
    }
  }
  ProductComponent.init({
    id_product: DataTypes.INTEGER,
    number_size: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductComponent',
  });
  return ProductComponent;
};