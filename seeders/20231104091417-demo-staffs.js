'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Staffs', [
      {
        name: 'Samuel Tobing',
        address: 'Tapanuli Utara',
        gender: 'Laki-Laki',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Staffs', null, {});
  }
};
