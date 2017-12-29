'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo@demo.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      firstName: 'Stacy',
      lastName: 'Smith',
      email: 'Stacy@demo.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      firstName: 'Tyler',
      lastName: 'Mitchell',
      email: 'Tyler@demo.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      firstName: 'Vanessa',
      lastName: 'Breguez',
      email: 'Vanessa@demo.com',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      firstName: 'Michael',
      lastName: 'Anders',
      email: 'Michael@demo.com',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
