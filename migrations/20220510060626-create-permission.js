'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('permissions', {

      cod_permission: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Código de permiso",
      },
      desc_permission: {
        type: Sequelize.STRING(250),
        allowNull: false,
        comment: "Descripción de permiso",
      },
      nam_permission: {
        allowNull: false,
        type: Sequelize.STRING(120),
        unique: true,
        comment: "Nombre de permiso",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('permissions');
  }
};