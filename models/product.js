'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey: 'id_category',
        as: 'category'
      });
      Product.belongsTo(models.Color, {
        foreignKey: 'id_color',
        as: 'color'
      });
      Product.hasMany(models.ProductComponent, {
        foreignKey: 'id_product',
        as: 'productComponent'
      });
    }
  }
  Product.init({
    id_category: DataTypes.INTEGER,
    id_color: DataTypes.INTEGER,
    code_product: DataTypes.STRING,
    name_product: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};