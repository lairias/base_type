'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pe_people', {
      cod_people: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de persona",
      },
      cod_user:{
        type: Sequelize.INTEGER,
        comment: "Código de usuario",
         allowNull: false,
          references: {
            model: {
              tableName: 'pe_users',
            },
            key: 'cod_user'
          },
       },
      firstName:{
        type: Sequelize.STRING(120),
         allowNull: false,
         validate: {
           notEmpty: true
         },
         comment: "Nombre del usuario",
       },
       middleName:{
         type:Sequelize.STRING(120),
         allowNull: false,
         validate: {
           notEmpty: true
         },
         comment: "Segundo nombre del usuario",
       },
       lastName: {
         type:Sequelize.STRING(120),
         allowNull: false,
         validate: {
           notEmpty: true
         },
         comment: "Apellido del usuario",
       },
       photoProfile: {
        type:Sequelize.STRING(250),
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Foto de perfil del usuario",
      },
      photoBackground: {
        type:Sequelize.STRING(250),
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Foto de fondo del usuario",
      },
      gender:{
        type:Sequelize.ENUM("W","M"),
        allowNull: false,
        comment:  "tipo de genero del usuario"
      },
      age: {
        type:Sequelize.INTEGER,
        allowNull: false,
        comment: "Edad del usuario",
      },
      birthDate: {
        type:Sequelize.DATE,
        allowNull: false,
        comment: "Fecha de nacimiento del usuario",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pe_people');
  }
};