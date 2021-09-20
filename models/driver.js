'use strict';
module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define('Driver', {
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
    contactAddress: DataTypes.STRING,
    licenceNo: DataTypes.STRING
  }, {});
  Driver.associate = function(models) {
    // associations can be defined here
    Driver.hasMany(models.Customer,{
      as: 'drivers',
      foreignKey: 'driverId'
    })
  };
  return Driver;
};