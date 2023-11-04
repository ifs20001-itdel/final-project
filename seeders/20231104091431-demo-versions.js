'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Versions', [
      {
        name_version: 'PS 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_version: 'PS 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_version: 'PS 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_version: 'PS 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name_version: 'PS 5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Versions', null, {});
  }
};
