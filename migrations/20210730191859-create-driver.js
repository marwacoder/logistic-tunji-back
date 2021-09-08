'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Drivers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.ENUM,
        values: ['Male', 'Female']
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      contactAddress: {
        type: Sequelize.STRING
      },
      licenceNo: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Drivers');
  }
};