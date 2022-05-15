'use strict';
import { Model } from 'sequelize'
import { IRoleHasPermission } from '../src/types';
module.exports = (sequelize: any, DataTypes: any) => {
  class role_has_permission extends Model<IRoleHasPermission> implements IRoleHasPermission {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    cod_role!: number;
    cod_permission!: number;

  }
  role_has_permission.init({
    cod_role: {
      type: DataTypes.INTEGER,
      comment: "Código de rol",
    },
    cod_permission: {
      type: DataTypes.INTEGER,
      comment: "Código de permiso",
    },
  }, {
    sequelize,
    modelName: 'role_has_permission',
  });
  return role_has_permission;
};