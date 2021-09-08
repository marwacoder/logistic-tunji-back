'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Goods', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      goodsName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      customerId:{
        type: Sequelize.STRING,
        references: {
        model: 'Customers',
        key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      vehicleId:{
        type: Sequelize.STRING,
        references: {
        model: 'Vehicles',
        key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      driverId:{
        type: Sequelize.STRING,
        references: {
        model: 'Drivers',
        key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Goods');
  }
};


