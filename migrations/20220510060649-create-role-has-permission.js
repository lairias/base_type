'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role_has_permissions', {
      cod_role: {
        type: Sequelize.INTEGER,
        comment: "Código de rol", 
        // references: {
        //   model: {
        //     tableName: 'role', // name of Target model
        //   },
        //   key: 'cod_role',  // key in Target model
        // },
        references: {
          model: {
            tableName: 'role',
          },
          key: 'cod_role'
        },
        
      },
      cod_permission: {
        type: Sequelize.INTEGER,
        comment: "Código de permiso",
        references: {
          model: {
            tableName: 'permissions', // name of Target model
          },
          key: 'cod_permission',  // cod_permission
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('role_has_permissions');
  }
};