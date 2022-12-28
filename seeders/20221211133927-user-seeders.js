'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        profession: 'Admin Micro',
        role: 'admin',
        email: 'juarakwkw@gmail.com',
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Well',
        profession: 'Front End',
        role: 'student',
        email: 'juarahaha@gmail.com',
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
