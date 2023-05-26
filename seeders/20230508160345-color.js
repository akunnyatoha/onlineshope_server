'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Colors', [
      {
        name_color: 'Black',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_color: 'White',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Colors', null, {});
  }
};
