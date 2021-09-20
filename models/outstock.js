'use strict';
module.exports = (sequelize, DataTypes) => {
  const OutStock = sequelize.define('OutStock', {
    goodsName: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    driverId: DataTypes.STRING
  }, {});
  OutStock.associate = function(models) {
    // associations can be defined here
    OutStock.belongsTo(models.Driver,{
      as: 'driver',
      foreignKey: 'driverId'
    })
  };
  return OutStock;
};