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
    contactAddress: DataTypes.STRING,
    goodsId: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};