'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        name_product: 'GTA San Andreas',
        total_product: 100,
        start_date: '2023-10-08 23:58:31.155+07',
        end_date: '2023-10-08 23:58:31.155+07',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
