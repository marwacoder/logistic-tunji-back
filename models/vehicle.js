'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    id: { allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
      },
    model: DataTypes.STRING,
    platNumber: DataTypes.STRING,
    tonnage: DataTypes.INTEGER
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
    Vehicle.hasMany(models.Customer,{
      as: 'vehicles',
      foreignKey: 'vehicleId'
    })
  };
  return Vehicle;
};