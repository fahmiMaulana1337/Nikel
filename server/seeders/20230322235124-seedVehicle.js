'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
        name: "Mini Cooper",
        type: "Perusahaan",
        category: "Angkutan Orang",
        bbmConsume: 18,
      },
      {
        name: "Fortuner",
        type: "Perusahaan",
        category: "Angkutan Orang",
        bbmConsume: 18,
      },
      {
        name: "Buldozer",
        type: "Persewaan",
        category: "Angkutan Barang",
        bbmConsume: 18,
      },
      {
        name: "Bus",
        type: "Perusahaan",
        category: "Angkutan Barang",
        bbmConsume: 18,
      },
      {
        name: "Avanza",
        type: "Perusahaan",
        category: "Angkutan Orang",
        bbmConsume: 18,
      },
      {
        name: "Kijang",
        type: "Perusahaan",
        category: "Angkutan Orang",
        bbmConsume: 18,
      },
    ];
    let dataVehicle = data.map((el) => {
      el.serviceDate = new Date();
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });

    return queryInterface.bulkInsert("Vehicles", dataVehicle);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Vehicles", null, null);
  }
};
