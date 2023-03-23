'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [
      {
        UserId: 1,
        VehicleId: 1,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 2,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 3,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 4,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 1,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 1,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 2,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 3,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 4,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 2,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 2,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 2,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 2,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 2,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 4,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 3,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 4,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 1,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 3,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 3,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 2,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 2,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Waiting approval Kantor Cabang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 4,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 1,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 1,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 2,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 3,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 4,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 1,
        VehicleId: 2,
        loanDate: new Date(),
        loanDeadline: new Date(),
        status: 'Accepted',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]
    return queryInterface.bulkInsert('Rents', data)

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Rents', null, null)
  }
};
