'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Supervisors', [
      {
        name: 'Windah Basudara',
        address: 'Konoha',
        gender: 'Laki-Laki',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Supervisors', null, {});
  }
};
