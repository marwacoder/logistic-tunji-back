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
      category: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM,
        values: ['Dispatched', 'Not Dispatched'],
        defaultValue: 'Not Dispatched'
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


