'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        id_role: 1,
        name_user: "admin1",
        email: "admin1@email.com",
        password: "admmin123",
        no_telephone: "0812345678",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_role: 2,
        name_user: "customer1",
        email: "customer1@email.com",
        password: "customer123",
        no_telephone: "08456232121",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
