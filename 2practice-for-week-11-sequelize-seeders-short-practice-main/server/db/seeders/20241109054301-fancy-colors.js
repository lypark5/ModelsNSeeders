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
    await queryInterface.bulkInsert('Colors', [
      {name: 'maroon', createdAt: '2024-11-10 12:42:01', updatedAt: '2024-11-10 12:42:02'},
      {name: 'cerulean', createdAt: '2024-11-10 12:42:03', updatedAt: '2024-11-10 12:42:04'},
      {name: 'magenta', createdAt: '2024-11-10 12:42:05', updatedAt: '2024-11-10 12:42:06'}
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Colors', {
      name: ['maroon', 'cerulean', 'magenta']
    })
  }
};
