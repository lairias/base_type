'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role', {
      cod_role: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        Comment: "Código de rol",
      },
      desc_role: {
        type: Sequelize.STRING

      },
      nam_role: {
        allowNull: false,
        type: Sequelize.STRING(120),
        unique: true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('role');
  }
};