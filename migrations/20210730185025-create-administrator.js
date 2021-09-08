'use strict';
module.exports = {
  up: async(queryInterface, Sequelize) => {
     await queryInterface.createTable('Administrators', {
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
  down: async(queryInterface, Sequelize) => {
    // await queryInterface.removeColumn('Administrators','id')
     await queryInterface.dropTable('Administrators');
     
  }
};