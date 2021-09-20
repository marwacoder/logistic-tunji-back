'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: { allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING
    },
    fullName: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ['Male', 'Female']
    },
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    goodsId: DataTypes.STRING,
    driverId: DataTypes.STRING,
    vehicleId: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  
    Customer.belongsTo(models.Goods,{
      as: 'goods',
      foreignKey: 'goodsId'
    })
    Customer.belongsTo(models.Vehicle,{
      as: 'vehicles',
      foreignKey: 'vehicleId'
    })
    Customer.belongsTo(models.Driver,{
      as: 'drivers',
      foreignKey: 'driverId'
    })
  };
  return Customer;
};