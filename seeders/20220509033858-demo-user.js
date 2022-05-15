'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pe_users', [{
      firstName: 'John',
      middleName: 'sdf',
      lastName: 'Doe',
      email: 'example@example.com',
      userName: 'user123',
      password: '123456',
      photoProfile: 'https://www.w3schools.com/howto/img_avatar.png',
      photoBackground: 'https://www.w3schools.com/howto/img_avatar.png',

    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pe_users', null, {});
  }
};
