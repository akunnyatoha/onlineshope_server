'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        id_category: 1,
        id_color: 1,
        code_product: "A0001",
        name_product: "Gazelle Low",
        description: "asnaksjnjkasjbasjbjshbjhabsjhxbajhsbasbxja",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_color: 2,
        id_category: 2,
        code_product: "A0002",
        name_product: "Sepatu Slip On White",
        description: "asjkxnkjasbxkjabsxkja",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
