'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OutStocks', {
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
      driverId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Drivers",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
    return queryInterface.dropTable('OutStocks');
  }
};