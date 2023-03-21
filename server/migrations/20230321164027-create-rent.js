'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      VehicleId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Vehicles',
          key: 'id'
        }
      },
      UserId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
          key: 'id'
        }
      },
      driver: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }, 
      loanDate:{
        type: Sequelize.DATE
      },
      loanDeadline:{
        type: Sequelize.DATE
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rents');
  }
};