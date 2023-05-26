'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Payments', [
      {
        name_account: 'BCA Virtual Account',
        no_account: "31456745678767",
        pemilik_account: "Toha Bagus Karah",
        image_account: "bcavirtualaccount.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_account: 'Transfer BNI',
        no_account: "17564336",
        pemilik_account: "Toha Bagus Karah",
        image_account: "bni.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Payments', null, {});
  }
};
