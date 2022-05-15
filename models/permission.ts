'use strict';
import { Model } from 'sequelize';
import { IPermission } from "../src/types";


module.exports = (sequelize: any, DataTypes: any) => {
  class permission extends Model<IPermission> implements IPermission {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    cod_permission!: number;
    nam_permission!: string;
    desc_permission!: string;
    static associate(models: any) {
      permission.belongsToMany(models.role, {
        through: 'role_has_permission',
      });
      // define association here
    }
  }
  permission.init({
    cod_permission: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "Código de permiso",
    },
    desc_permission: {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "Descripción de permiso",
    },
    nam_permission: {
      allowNull: false,
      type: DataTypes.STRING(120),
      unique: true,
      comment: "Nombre de permiso",
    },

  }, {
    sequelize,
    modelName: 'permission',
  });
  return permission;
};