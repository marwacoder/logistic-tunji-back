'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goods = sequelize.define('Goods', {
    id: { allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
      },
    goodsName: DataTypes.STRING,
    category: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['Dispatched', 'Not Dispatched'],
      defaultValue: 'Not Dispatched'
    },
  }, {});
  Goods.associate = function(models) {
    // associations can be defined here
    Goods.hasMany(models.Customer,{
      as: 'goods',
      foreignKey: 'goodsId'
    })
  };
  return Goods;
};