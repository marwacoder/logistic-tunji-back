'use strict';
module.exports = (sequelize, DataTypes) => {
  const Administrator = sequelize.define('Administrator', {
    fullName: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ['Male', 'Female']
    },
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    contactAddress: DataTypes.STRING
  }, {});
  Administrator.associate = function(models) {
    // associations can be defined here
  };
  return Administrator;
};