'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goods = sequelize.define('Goods', {
    id: { allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
      },
    goodsName: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    customerId: DataTypes.STRING
  }, {});
  Goods.associate = function(models) {
    // associations can be defined here
  };
  return Goods;
};