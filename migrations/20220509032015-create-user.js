'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pe_users',{
      cod_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de usuario",
      },
      firstName:{
       type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Nombre del usuario",
      },
      middleName:{
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Segundo nombre del usuario",
      },
      lastName: {
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Apellido del usuario",
      },
      email: {
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Correo del usuario",
      },
      userName:{
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Nombre de usuario unico",
      },
      password: {
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Contraseña del usuario",
      },
      photoProfile: {
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Foto de perfil del usuario",
      },
      photoBackground: {
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Foto de fondo del usuario",
      },
      IND_INS: {
        type:Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          notEmpty: true
        },
        comment: "Indicador de primer ingreso",
      },
      IND_USR: {
        type:Sequelize.BOOLEAN,
        defaultValue: true,
  
        allowNull: false,
        validate: {
          notEmpty: true
        },
        comment: "Estado del usuario",
      },
  
  
    } );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pe_users');
  }
};