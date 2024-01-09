'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('todos', [
     
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todos', null, {});
  }
};
