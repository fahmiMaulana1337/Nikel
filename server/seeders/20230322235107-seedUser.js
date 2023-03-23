'use strict';
const { hash } = require("../helpers/helper");

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
        username: "fahmi",
        password: "12345678",
        role: "Admin",
        departement: 'Kantor Pusat',
      },
      {
        username: "maulana",
        password: "12345678",
        role: "Manager",
        departement: 'Kantor Cabang',
      },
      {
        username: "admin",
        password: "12345678",
        role: "Admin",
        departement: 'Admin',
      },
    ];
    let dataUser = data.map((el) => {
      el.password = hash(el.password);
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });

    return queryInterface.bulkInsert("Users", dataUser);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, null);

  }
};
