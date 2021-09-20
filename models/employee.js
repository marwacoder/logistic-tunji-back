'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    employeeName: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ['Male', 'Female']
    },
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    employeeType: DataTypes.STRING
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};